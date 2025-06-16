import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';

const ListaMensagens = () => {
  const [mensagens, setMensagens] = useState<{ texto: string }[]>([]);

  const carregarMensagens = async () => {
    try {
      const resposta = await axios.get('http://localhost:5000/mensagens');
      setMensagens(resposta.data);
    } catch (error) {
      console.error('Erro ao carregar mensagens:', error);
    }
  };

  useEffect(() => {
    carregarMensagens();
    const intervalo = setInterval(carregarMensagens, 3000);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="lista">
      <h2>Mensagens:</h2>
      <ul>
        {mensagens.map((m, i) => (
          <li key={i}>{m.texto}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListaMensagens;
