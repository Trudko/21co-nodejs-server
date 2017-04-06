import flask
from two1.wallet import Wallet
from two1.bitserv.flask import Payment
import requests
from flask import request

app = flask.Flask(__name__)
payment = Payment(app, Wallet())

@payment.required(5000)
@app.route('/register')
def register():
    r = requests.post("http://127.0.0.1:3000/register", data={'foo': 12524})
    print(r.status_code, r.reason)
    return str(r.status_code)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000,debug=True)
