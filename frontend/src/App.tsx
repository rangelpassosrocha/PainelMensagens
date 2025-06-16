import React from 'react';
import FormularioMensagem from './components/FormularioMensagem';
import ListaMensagens from './components/ListaMensagens';

const App = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Painel de Mensagens</h1>
      <FormularioMensagem />
      <ListaMensagens />
    </div>
  );
};

export default App;
