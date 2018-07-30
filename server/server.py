import os
from flask import Flask, send_from_directory
import random

app = Flask(__name__)


# @app.route('/')
# def serve():
#     return send_from_directory('../dist', 'index.html')

greeting_list = ["Hi", "Hello", "Good To See You", "Welcome", "Hi There"]


@app.route("/api/hello")
def get_hello():
    return random.choice(greeting_list)


if __name__ == "__main__":
    app.run(use_reloader=True, port=5000, threaded=True)
