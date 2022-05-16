from flask import Flask
from flask import Blueprint, session, request, redirect, url_for, jsonify
import bson
from . import db
from bson.objectid import ObjectId

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
        share = request.form['share']
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
@bp.route('/', methods=['GET'])
def find_my_thema():
    if 'user_id' in session:
        my_id = database.users.find_one({'id': session['user_id']})
        thema_list = []

        for temp in my_id['thema']:
            t = database.thema.find_one({'_id': temp})
            thema_list.append(t)

        return jsonify({"thema": thema_list})
    
    else:
        err = '로그인이 필요합니다.'
        return redirect(url_for('home'))



