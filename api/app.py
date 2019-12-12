from flask import Flask, jsonify
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

@app.route("/getAll", methods=["GET"])
def getAll():
    con = connexion()
    with con:
        cur = con.cursor()
        sql = "select * from post"
        cur.execute(sql, ())
        result = cur.fetchall()
        return jsonify(data=result), 200


if __name__ == "__main__":
    app.run()
