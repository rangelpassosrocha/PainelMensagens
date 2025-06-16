# Painel de Mensagens Interativo

##  Descrição

Aplicação full-stack com front-end em React e back-end em Flask. Permite aos usuários enviarem e visualizarem mensagens em tempo real. As mensagens são armazenadas temporariamente em memória (lista Python no back-end).

---

##  Tecnologias Utilizadas

- **Front-end:** React, TypeScript, CSS
- **Back-end:** Flask, Flask-CORS
- **Armazenamento:** Volátil (em memória)
- **Implantação:** Executada e testada localmente em ambiente de desenvolvimento, utilizando o sistema operacional Windows 10, com ferramentas como Node.js/npm (para o React) e Python (para o Flask). O front-end foi executado via servidor de desenvolvimento do React (localhost), e o back-end foi executado com o servidor interno do Flask, também em localhost.

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
