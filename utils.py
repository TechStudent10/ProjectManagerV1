from flask import render_template

def react(**kwargs):
    return render_template("index.html", **kwargs)