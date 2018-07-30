import os
from flask import Flask, send_from_directory
import random

app = Flask(__name__, static_folder="../dist",
            template_folder="../dist")


@app.route('/')
def serve():
    return send_from_directory('../dist', 'index.html')


@app.route("/api/hello")
def get_hello():
    greeting_list = ["Hi", "Hello", "Good To See You", "Welcome", "Hi There"]
    return random.choice(greeting_list)


if __name__ == "__main__":
    app.run(use_reloader=True, port=5000, threaded=True)
