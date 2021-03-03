from utils import generateRandomCode as generate

class Task:
    def __init__(self, name, description, projectCode):
        self.name = name
        self.description = description
        self.complete = False
        self.projectCode = projectCode
        self._id = generate()