from flask import Flask, render_template
import random

app = Flask(__name__, static_folder="../dist",
            template_folder="../dist")


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/hello")
def get_hello():
    greeting_list = ["Hi", "Hello", "Good To See You", "Welcome", "Hi There"]
    return random.choice(greeting_list)


if __name__ == "__main__":
    app.run()
