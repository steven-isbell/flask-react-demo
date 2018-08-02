from os import environ
from flask import Flask, send_from_directory
from lib import quickstart

app = Flask(__name__)

if environ['FLASK_ENV'] == 'production':
    @app.route('/')
    def serve():
        return send_from_directory('../build', 'index.html')


@app.route("/api/students")
def get_students():
    return quickstart.file_id


if __name__ == "__main__":
    app.run(use_reloader=True, port=5000, threaded=True)
