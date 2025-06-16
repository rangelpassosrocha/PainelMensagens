import React, { useState } from 'react';
import axios from 'axios';
import './style.css';

const FormularioMensagem = () => {
  const [mensagem, setMensagem] = useState('');

  const enviarMensagem = async () => {
    if (!mensagem.trim()) return;
    try {
      await axios.post('http://localhost:5000/mensagens', { texto: mensagem });
      setMensagem('');
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
    }
  };

  return (
    <div className="formulario">
      <input
        type="text"
        value={mensagem}
        onChange={(e) => setMensagem(e.target.value)}
        placeholder="Digite sua mensagem"
      />
      <button onClick={enviarMensagem}>Enviar</button>
    </div>
  );
};

export default FormularioMensagem;
