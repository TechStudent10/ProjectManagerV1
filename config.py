class Config:
    HOST = "localhost"
    PORT = 8080
    SECRET_KEY = "thisisasecret"
    DEBUG = True

    def getHost(self):
        return self.HOST

    def getPort(self):
        return self.PORT

    def getSecretKey(self):
        return self.SECRET_KEY

    def getDebug(self):
        return self.DEBUG
