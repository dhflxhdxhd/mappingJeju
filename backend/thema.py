from unittest import result
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

    thema_info = database.thema.find_one({'thema_name' : thema_name})
    thema_id_dict = {thema_info['_id']}
    thema_id =(json.loads(json_util.dumps(thema_id_dict))[0])['$oid']
    print(thema_id)
    return {'thema_id': thema_id , 'error': err}

    

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

            if t:
                print(json_util.dumps(t))
                thema_list.append(t)

        print(thema_list)

        data = {"thema_list" : thema_list}
        print(json.loads(json_util.dumps(data)))

        return json.loads(json_util.dumps(data))

    else:
        err = '로그인이 필요합니다.'
        return redirect(url_for('home'))



# 장소 생성
@bp.route('/sendPlace', methods=['POST'])
def add_thema_place():

    if 'user_id' in session:
        place_name = request.form['place_name']
        place_lat = request.form['lat']
        place_lng = request.form['lng']
        place_photos = request.form['photos']
        place_explain = request.form['explain']
        thema_id = request.form['thema_id']

        _id = database.place.insert_one({
                "place_name": place_name,
                "lat": place_lat,
                "lng": place_lng,
                "photos": place_photos,
                "explain": place_explain,
                "thema_id": thema_id
        })
     
        database.thema.update_one({'_id': thema_id},{'$addToSet':{'place': _id.inserted_id}})

    else:
        err = '로그인이 필요합니다.'
        
    return {'thema_id': thema_id}

# 장소 조회
@bp.route('/getplaces', methods=['get'])
def get_thema_place():
    thema_id = ObjectId(request.form['thema_id'])
    places = []

    thema_info = database.thema.find_one({'_id': thema_id})
    thema_place_id_list =  thema_info['place']
    
    for place_id in thema_place_id_list:
        p = database.place.find_one({'_id': place_id})
        if p:
            places.append(p)
    
    data = {'places': places}

    return json.loads(json_util.dumps(data))

# 장소 불러오기 
@bp.route('/getPlace', methods=['GET'])
def get_thema_place():
    err = ''
    thema_id = request.form['thema_id']
    places = []

    if 'user_id' in session:
        thema_info = database.thema.find_one({'id': ObjectId(thema_id)})
        thema_place_id_list = thema_info['place']
        for place_id in thema_place_id_list:
            p = database.place.find_one({'_id': place_id})
            p['_id'] = str(p['_id'])
            places.append(p)
    else:
        err = '로그인이 필요합니다.'
        
    return {'places': places}

# 테마 찜하기
@bp.route('/', methods=['POST'])
def add_zzim_thema():
    if 'user_id' in session:
        thema_id = request.form['thema_id']
        database.users.update_one({'id': session['user_id']},
                {'$addToSet': {
                    'zzim': ObjectId(thema_id)
                    }
                })
    else:
        err = '먼저 로그인을 해주세요'
        return redirect(url_for('home'))

# 테마 찜 조회
@bp.route('/getmyzzim', methods=['GET'])
def find_my_zzim():

    if 'user_id' in session:
        my_id = database.users.find_one({'id': session['user_id']})
        zzim_list = []
        for temp in my_id['zzim']:
            t = database.thema.find_one({'_id':temp})
            if t:
                print(json_util.dumps(t))
                zzim_list.append(t)

        print(zzim_list)

        data = {"zzim_list" : zzim_list}
        print(json.loads(json_util.dumps(data)))
        return json.loads(json_util.dumps(data))
    else:
        err = '로그인이 필요합니다.'
        return redirect(url_for('home'))

# # 장소 조회
# @bp.route('/', methods=['get'])
# def get_thema_place():
#     thema_id = ObjectId(request.form['thema_id'])
#     places = []

#     if 'user_id' in session:
#         thema_info = database.thema.find_one({'_id': thema_id})
#         thema_place_id_list =  thema_info['place']
#         for place_id in thema_place_id_list:
#             p = database.place.find_one({'_id': place_id})
#             if p:
#                 places.append(p)
#     else:
#         err = '로그인이 필요합니다.'
    
#     data = {'places': places}
#     return json.loads(json_util.dumps(data))

