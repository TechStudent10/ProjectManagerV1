from utils import generateRandomCode as generate

class Object:
    def toJSON(self):
        return self.__dict__

class Task(Object):
    def __init__(self, name, description, projectCode):
        self.name = name
        self.description = description
        self.complete = False
        self.projectCode = projectCode
        self._id = generate()

class Project(Object):
    def __init__(self, title, description, project_link):
        self._id = generate()
        self.title = title
        self.description = description
        self.project_link = project_link
        self.tasks = {}
        self.contributers = []