from flask import render_template

def body(body_text):
    return body_text.split('\n')

def react(**kwargs):
    return render_template("index.html", **kwargs)