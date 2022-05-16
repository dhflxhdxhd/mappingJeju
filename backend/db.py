from flask import Flask
import certifi
import pymongo

client = pymongo.MongoClient("mongodb+srv://mappingjeju:1234@mjdb.jzeqm.mongodb.net/mjDB?retryWrites=true&w=majority", tlsCAFile=certifi.where())
db = client.mjDB

def get_db():
    return db

def login(user_id):
    user = db.users.find_one({'id':user_id})
    print(user)

def regist_if_not_exists(id, kakao_account):
    if not get_user(id):
        db.users.insert_one({'id': id, 'kakao_account': kakao_account, 'thema':[], 'group':[], 'cource':[]})
        print('사용자 생성 : ', id)

def get_user(id):
    user = db.users.find_one({'id': id})
    return user