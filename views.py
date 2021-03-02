from flask import Blueprint
from utils import react
from api import projects
import json

views = Blueprint('views', __name__)

@views.route('/')
def index():
    return react()

@views.route('/project/<projectCode>')
def project(projectCode):
    if projectCode in projects:
        return react()
    return "Project not found"

@views.route('/addProject')
def addProject():
    return react()