from flask import Flask, render_template, make_response
from flask import request
from . import db


app = Flask(__name__)


'''BLUEPRINT'''
import thema
app.register_blueprint(thema.bp)

@app.route('/home')
def home():
    return 'hello'

import requests
import json
from flask import redirect, url_for, session

'''MONGODB'''
USER_ID = 'mappingjeju'
USER_PW = '1234'

'''KAKAO'''
CLIENT_ID = '03062174fc92c96245f37bd14ab9bdb8'
REDIRECT_URI = 'http://localhost:5000'
SIGNOUT_REDIRECT_URI = 'http://localhost:5000'
app.secret_key = 'mappingjeju'


@app.route('/kakaoauth', methods=['GET'])
def kakao_auth():
    redirect_uri = REDIRECT_URI + '/login'
    url = f"https://kauth.kakao.com/oauth/authorize?client_id={CLIENT_ID}&redirect_uri={redirect_uri}&response_type=code"
    return redirect(url)

@app.route('/login', methods=['GET'])
def login():
    auth_code = request.args.get('code')
    redirect_uri = REDIRECT_URI + '/login'
    token_request = requests.post(
        f"https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id={CLIENT_ID}&redirect_uri={redirect_uri}&code={auth_code}"
    )
    token_json = token_request.json()
    error = token_json.get("error", None)
    if error is not None:
        return make_response({"message": "INVALID_CODE"}, 400)
    access_token = token_json.get("access_token")
    profile_request = requests.get(
        "https://kapi.kakao.com/v2/user/me", headers={"Authorization": f"Bearer {access_token}"},
    )
    data = profile_request.json()

    db.regist_if_not_exists(data['id'], data['kakao_account'])

    session['token'] = access_token
    session['user_id'] = data['id']

    return redirect(url_for('home'))

@app.route('/logout', methods=['GET'])
def logout():

    uri = 'https://kapi.kakao.com/v1/user/logout'

    logout_request = requests.post(
        uri, headers={"Authorization": f"Bearer {session['token']}"}
    )

    print(logout_request.json())

    session.pop('user_id', None)
    session.pop('token', None)

    return redirect(url_for('home'))
