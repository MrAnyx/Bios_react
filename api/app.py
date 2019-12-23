from flask import Flask, jsonify, request
import pymysql
import os
from dotenv import load_dotenv, find_dotenv
from flask_cors import CORS

load_dotenv(find_dotenv())

app = Flask(__name__)
CORS(app)
app.config["DEBUG"] = True
app.env = "dev"

def connexion():
    return pymysql.connect(host=os.getenv("DB_HOST"),
        user=os.getenv("DB_USER"),
        password=os.getenv("DB_PASS"),
        db=os.getenv("DB_NAME"),
        charset="utf8mb4",
        cursorclass=pymysql.cursors.DictCursor)



@app.route("/login", methods=["POST"])
def login:
    pass

@app.route("/register", methods=["POST"])
def register:
    pass

@app.route("/logout", methods=["POST"])
def logout:
    pass

@app.route("/isConnected", methods=["POST"])
def isConnected:
    # utiliser un token ou une variable session
    pass



@app.route("/getAll", methods=["GET"])
def getAll():
    con = connexion()
    with con:
        cur = con.cursor()
        sql = "SELECT * FROM post ORDER BY id_post DESC"
        cur.execute(sql, ())
        result = cur.fetchall()
        return jsonify(data=result), 200

@app.route("/getLast4", methods=["GET"])
def getLast4():
    con = connexion()
    with con:
        cur = con.cursor()
        sql = "SELECT * FROM post ORDER BY id_post DESC LIMIT 4"
        cur.execute(sql, ())
        result = cur.fetchall()
        return jsonify(data=result), 200

@app.route("/submitPost", methods=["POST"])
def submitPost():
    titre = request.json.get("titre")
    contenu = request.json.get("contenu")
    image = request.json.get("image")
   
    
    con = connexion()
    with con:
        cur = con.cursor()
        sql = "INSERT INTO post(titre_post, contenu_post, image_post) VALUES (%s, %s, %s)"
        cur.execute(sql, (titre, contenu, image))

        sql = "SELECT * FROM post ORDER BY id_post DESC LIMIT 1"
        cur.execute(sql, ())
        lastPost = cur.fetchall()
        return jsonify(data=lastPost), 200


if __name__ == "__main__":
    app.run()
