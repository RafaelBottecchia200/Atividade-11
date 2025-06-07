import React, { useState } from 'react';

function CaixaDeTexto() {
  const [texto, setTexto] = useState('');

  return (
    <div>
      <input
        type="text"
        placeholder="Digite algo..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <p>Você digitou: {texto}</p>
    </div>
  );
}
