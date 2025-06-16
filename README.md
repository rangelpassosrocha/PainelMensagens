# Painel de Mensagens Interativo

##  Descrição

Aplicação full-stack com front-end em React e back-end em Flask. Permite aos usuários enviarem e visualizarem mensagens em tempo real. As mensagens são armazenadas temporariamente em memória (lista Python no back-end).

---

##  Tecnologias Utilizadas

- **Front-end:** React, TypeScript, CSS
- **Back-end:** Flask, Flask-CORS
- **Armazenamento:** Volátil (em memória)
- **Implantação:** Firebase Studio (Front-end) + Replit ou Render (Back-end)

---

##  Como Rodar Localmente

###  1. Back-end (Flask)

1. Navegue até a pasta do back-end:

   ```bash
   cd backend
   ```

2. Instale as dependências (Flask e Flask-CORS):

   ```bash
   pip install flask flask-cors
   ```

3. Execute o servidor Flask:

   ```bash
   python app.py
   ```

4. O servidor estará disponível em `http://localhost:5000/mensagens`

---

###  2. Front-end (React)

1. Navegue até a pasta do front-end:

   ```bash
   cd frontend
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Execute o aplicativo:

   ```bash
   npm run dev
   ```

4. A aplicação estará disponível em `http://localhost:5173`

>  Certifique-se de que o back-end está rodando antes de abrir o front-end.

---

##  Estrutura de Pastas

```
PainelMensagens/
│
├── backend/
│   └── app.py
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── FormularioMensagem/
│   │   │   │   ├── index.tsx
│   │   │   │   └── style.css
│   │   │   └── ListaMensagens/
│   │   │       ├── index.tsx
│   │   │       └── style.css
│   │   └── App.tsx
│   └── package.json
│
└── README.md
```

---

##  Autor

Projeto desenvolvido por Rangel Rocha como atividade acadêmica.

---

##  Licença

Este projeto está licenciado sob a licença MIT.