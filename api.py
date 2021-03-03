from flask import (
    Blueprint,
    request,
    jsonify,
    redirect,
    url_for
)
from utils import body
from objects import Task, Project

api = Blueprint('api', __name__)
projects = {
    'ID0102': {
        '_id': 'ID0102',
        'title': 'My React Site',
        'description': body("""My Frontend React Site
        API Avalible here: https://github.com/techstudent11/ThisDoesntExist"""),
        'project_link': 'https://github.com/techstudent11/ThisAlsoDoesntExist',
        'tasks': {
            'ID0102': {
                '_id': 'ID0102',
                'name': 'Add API',
                'description': 'Add the API to the frontend app',
                'complete': False,
                'projectCode': 'ID0102'
            }
        },
        'contributers': [
            'TS11',
            'MM8',
            'LYM5'
        ]
    }
}

@api.route('/getProject', methods=['POST'])
def getProject():
    json = request.json

    code = json.get('code')
    # print(code)
    if code in projects:
        # print("Project Found")
        return {**projects.get(code), 'projectIsValid': True}, 200
    return jsonify(message="Project not found", projectIsValid=False)

@api.route('/addTask', methods=['POST'])
def addTask():
    json = request.json

    projectCode = json.get('code')
    name = json.get('name')
    description = json.get('description')

    if projectCode in projects:
        task = Task(name, description, projectCode)
        projects[projectCode]['tasks'][task._id] = task.toJSON()
        return {**task.__dict__, 'projectIsValid': True}, 200
    return jsonify(message="Project not found", projectIsValid=False)

@api.route('/completeTask', methods=['POST'])
def completeTask():
    json = request.json

    projectCode = json.get('projectCode')
    taskCode = json.get('taskCode')
    if projectCode in projects:
        if taskCode in projects[projectCode]['tasks']:
            task = projects[projectCode]['tasks'][taskCode]
            projects[projectCode]['tasks'][taskCode]['complete'] = True if not task['complete'] else False
            return jsonify(complete=projects[projectCode]['tasks'][taskCode]['complete'])
    else:
        return jsonify(message="Project not found", error=True)

@api.route('/createProject', methods=['POST'])
def createProject():
    json = request.json

    title = json.get('title')
    description = json.get('description')
    project_link = json.get('project_link')

    project = Project(title, description, project_link)
    projects[project._id] = project.toJSON()
    return {'_id': project._id}