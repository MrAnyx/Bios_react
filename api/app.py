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
def login():

    return jsonify(data="done"), 200

@app.route("/register", methods=["POST"])
def register():
    return jsonify(data="done"), 200

@app.route("/logout", methods=["POST"])
def logout():
    return jsonify(data="done"), 200

@app.route("/isConnected", methods=["GET"])
def isConnected():
    id = int(request.args.get("id"))
    con = connexion()

    with con:
        cur = con.cursor();
        sql = "SELECT isConnected from user WHERE id_user = %s"
        cur.execute(sql, (id))
        result = cur.fetchall()
        if(result):
            return jsonify(data=result.getitem(0)), 200
            if(result['isConnected'] == 0):
                return jsonify(data="False"), 200
            else:
                return jsonify(data="True"), 200
        else:
            return jsonify(data="User not found"), 200
    # utiliser un token ou une variable session



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
        sql = "INSERT INTO post(titre_post, contenu_post, image_post, id_user) VALUES (%s, %s, %s, 1)"
        cur.execute(sql, (titre, contenu, image))

        sql = "SELECT * FROM post ORDER BY id_post DESC LIMIT 1"
        cur.execute(sql, ())
        lastPost = cur.fetchall()
        return jsonify(data=lastPost), 200


if __name__ == "__main__":
    app.run()
