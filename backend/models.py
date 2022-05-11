from backend import db

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable= False)
    email = db.Column(db.String(500), unique=True, nullable= False)

    def __init__(self, name, email):
        self.name = name
        self.email = email

class Thema(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id', ondelete='CASCADE'))
    user = db.relationship('User', backref=db.backref('thema_set'))
    name = db.Column(db.String(80), unique=True, nullable= False)
    explain = db.Column(db.String(200), nullable= False)
    share = db.Column(db.Boolean)
    zzin_id = db.Column(db.Integer)

class Cource(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id', ondelete='CASCADE'))
    user = db.relationship('User', backref=db.backref('cource_set'))
    name = db.Column(db.String(80), unique=True, nullable= False)
    explain = db.Column(db.String(200), nullable= False)
    share = db.Column(db.Boolean)
    zzin_id = db.Column(db.Integer)


class Places(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=True, nullable= False)
    explain = db.Column(db.String(200), nullable= False)


class Img(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    place_id = db.Column(db.Integer, db.ForeignKey('places.id', ondelete='CASCADE'))
    url = db.Column(db.String(100), nullable= False)

class Cource_has_places(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id', ondelete='CASCADE'))
    cource_id = db.Column(db.Integer, db.ForeignKey('cource.id', ondelete='CASCADE'))
    place_id = db.Column(db.Integer, db.ForeignKey('places.id', ondelete='CASCADE'))


class Thema_has_places(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id', ondelete='CASCADE'))
    cource_id = db.Column(db.Integer, db.ForeignKey('cource.id', ondelete='CASCADE'))
    place_id = db.Column(db.Integer, db.ForeignKey('places.id', ondelete='CASCADE'))

