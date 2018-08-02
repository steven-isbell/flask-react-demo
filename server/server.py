from os import environ
from flask import Flask, send_from_directory, make_response, request
from lib import read_csv

app = Flask(__name__)

if environ['FLASK_ENV'] == 'production':
    @app.route('/')
    def serve():
        return send_from_directory('../build', 'index.html')


@app.route("/api/students", methods=["POST"])
def get_students():
    print(request.files)
    result = read_csv.read(request.files['data_file'])
    response = make_response(result)
    return response


if __name__ == "__main__":
    app.run(use_reloader=True, port=5000, threaded=True)
