from flask import Blueprint, render_template, make_response, request
from flask import redirect, url_for, session
import requests, json
from werkzeug.security import generate_password_hash
from backend import db
from backend.models import User

kakao = Blueprint('login', __name__, url_prefix='/oauth')

CLIENT_ID = '03062174fc92c96245f37bd14ab9bdb8'
REDIRECT_URI = 'http://localhost:5000/oauth'
SIGNOUT_REDIRECT_URI = 'http://localhost:5000/'

@kakao.route('/', methods=['GET'])
def kakao_auth():
    client_id = CLIENT_ID
    redirect_uri = REDIRECT_URI +'/login'
    url = f"https://kauth.kakao.com/oauth/authorize?client_id={client_id}&redirect_uri={redirect_uri}&response_type=code"

    return redirect(url)

@kakao.route('/login')
def login():
    client_id = CLIENT_ID
    uri = REDIRECT_URI +'/login'

    auth_code = request.args.get('code')
    token_request = requests.post(
        f"https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id={client_id}&redirect_uri={uri}&code={auth_code}"
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
    kakao_account = data["kakao_account"]
    profile = kakao_account["profile"]
    name = profile["nickname"]
    if "email" in kakao_account.keys():
        email = kakao_account["email"]
    else:
        email = f"{name}@kakao.com"

    user = User.query.filter(User.name == name).first()

    if user is None:
        user = User(name, email)
        db.session.add(user)
        db.session.commit()
    
    session['email'] = user.email
    session['isKakao'] = True

    return redirect("http://localhost:5000")

@kakao.route('/signout')
def kakao_sign_out():

    kakao_oauth_url = f"https://kauth.kakao.com/oauth/logout?client_id={CLIENT_ID}&logout_redirect_uri={SIGNOUT_REDIRECT_URI}"
    if session.get('email'):
        session.clear()
        value = {"status": 200, "result": "success"}
    else:
        value = {"status": 404, "result": "fail"}
    print(value)
    return redirect(kakao_oauth_url)