from flask import Flask
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy
from .views import thema_view

from backend.models import Thema


db = SQLAlchemy()
migrate = Migrate()


def create_app():
    app = Flask(__name__)
    app.secret_key = 'kominseok'
    app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:password@localhost/mjDB?charset=utf8'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    if app.config['DEBUG']:
        app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 1

    """ Blueprint 등록 """
    from .views import main_view, login_view
    app.register_blueprint(main_view.bp)
    app.register_blueprint(login_view.kakao)
    app.register_blueprint(thema_view.bp)

    """ DB, ORM 등록 열기 """
    db.init_app(app)
    if app.config['SQLALCHEMY_DATABASE_URI'].startswith('sqlite'):
        migrate.init_app(app,db,render_as_batch=True)
    else:
        migrate.init_app(app,db)
    migrate.init_app(app)
    from . import models



    return app