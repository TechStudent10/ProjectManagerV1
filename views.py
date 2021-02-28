from flask import Blueprint
from utils import react

views = Blueprint('views', __name__)

@views.route('/')
def index():
    return react()

@views.route('/project/<projectCode>')
def project(projectCode):
    return react(token=projectCode)

@views.route('/addProject')
def addProject():
    return react()