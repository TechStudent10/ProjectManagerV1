from flask import Blueprint, request, jsonify
from utils import body

api = Blueprint('api', __name__)
projects = {
    'ID0102': {
        '_id': 'ID0102',
        'title': 'My React Site',
        'description': body("""My Frontend React Site
        API Avalible here: https://github.com/techstudent11/ThisDoesntExist"""),
        'project_link': 'https://github.com/techstudent11/ThisAlsoDoesntExist',
        'tasks': [
            {
                '_id': 'ID0102',
                'name': 'Add API',
                'description': 'Add the API to the frontend app',
                'complete': False
            }
        ],
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
    return jsonify(message="whatever", projectIsValid=False)