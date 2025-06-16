
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

mensagens = []

@app.route('/mensagens', methods=['GET', 'POST'])
def mensagens_handler():
    if request.method == 'POST':
        data = request.get_json()
        texto = data.get('texto', '').strip()
        if texto:
            mensagens.append({"texto": texto})
        return jsonify({"status": "ok"}), 201

    return jsonify(mensagens)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
