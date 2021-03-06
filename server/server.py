from os import environ
from flask import Flask, send_from_directory, make_response, request
from lib import read_csv, generate_teams

app = Flask(__name__)

if environ['FLASK_ENV'] == 'production':
    @app.route('/')
    def serve():
        return send_from_directory('../build', 'index.html')


@app.route('/api/teams', methods=["POST"])
def build_teams():
    result = read_csv.read(request.files['data_file'])
    teams = generate_teams.generate_team(
        request.data['size'], result)


@app.route('/api/heartbeat')
    def genHeartbeat():
        make_response('Ok')


if __name__ == "__main__":
    app.run(use_reloader=True, port=5000, threaded=True)
