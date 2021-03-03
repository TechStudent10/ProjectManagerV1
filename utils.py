from flask import render_template
import random, string

def body(body_text):
    return body_text.split('\n')

def react(**kwargs):
    return render_template("index.html", **kwargs)

def generateRandomCode(length=6):
    code = ''.join(random.choices(string.ascii_uppercase, k=length))
    return code