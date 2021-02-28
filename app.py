from flask import Flask
from config import Config
from api import api
from views import views

HOST = Config.HOST
PORT = Config.PORT
SECRET_KEY = Config.SECRET_KEY
DEBUG = Config.DEBUG

app = Flask(__name__, static_folder="website\\static", template_folder="website\\templates")
app.config['SECRET_KEY'] = SECRET_KEY
app.register_blueprint(api, url_prefix="/api")
app.register_blueprint(views)

if __name__ == "__main__":
    app.run(debug=DEBUG, host=HOST, port=PORT)