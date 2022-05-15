from flask import Flask
from flask import request, jsonify


app = Flask(__name__)


@app.route('/api', methods=['GET'])
def index():
    return {
        'isAuthorized' : 'true'
    }

if __name__ == "__main__":
    app.run(debug=True)
