from flask import Flask
from flask import Blueprint, session, request, redirect, url_for, jsonify
import bson
from . import db
from bson import json_util, ObjectId
import json

database = db.get_db()
bp = Blueprint('thema', __name__, url_prefix='/thema')

# 테마 생성
@bp.route('/sendThema', methods=['POST'])
def create_thema():
    result = {}
    err = ''

    if 'user_id' in session:
        thema_name = request.form['thema_name']
        thema_explain = request.form['thema_explain']
        share = json.loads(request.form['share'].lower())

        _id = database.thema.insert_one({
            'thema_name': thema_name,
            'thema_explain': thema_explain,
            'thema_host': session['user_id'],
            'place': [],
            'share': share
        })

        database.users.update_one({'id': session['user_id']},
                                  {'$addToSet': {
                                       'thema': _id.inserted_id
                                   }
                                   })
                                   
    else:
        err = '로그인이 필요합니다.'

    return {'thema_id': result, 'error': err}


# 테마 조회
@bp.route('/getMyThema', methods=['GET'])
def find_my_thema():
    print(session['user_id'])

    if 'user_id' in session:
        my_id = database.users.find_one({'id': session['user_id']})
        # print(str(my_id))
        # thema_list = []
        # for t in database.thema.find({"thema_host":my_id}):
        #      thema_list.append(t)

        thema_list = []
        for temp in my_id['thema']:
            t = database.thema.find_one({'_id':temp})
            
            print(json_util.dumps(t))
            thema_list.append(t)

        filter(None, thema_list)
        print(thema_list)

        data = {"thema_list" : thema_list}
        print(json.loads(json_util.dumps(data)))

        return json.loads(json_util.dumps(data))

    else:
        err = '로그인이 필요합니다.'
        return redirect(url_for('home'))


# 장소 생성
@bp.route('/', methods=['POST'])
def add_thema_place():
    err = ''
    result = 'OK'

    if 'user_id' in session:
        place_data = {
                "place_name": request.form['place_name'],
                "lat": request.form['latitude'],
                "lng": request.form['longitude'],
                "address_name": request.form['address_name'],
                "explain": request.form['explain']
            }

        try:
            thema_id = ObjectId(request.form['thema_id'])
            if database.thema.find_one({'_id': thema_id}) is None:
                err = '테마가 존재하지 않습니다.'
            else:
                database.thema.update_one({'_id': ObjectId(request.form['thema_id'])},
                                           {'$addToSet':
                                                {'place': place_data}
                                            })
        except bson.errors.InvalidId:
            err = '에러'
    else:
        err = '로그인이 필요합니다.'
        result = ''