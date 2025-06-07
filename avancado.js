import React, { useState } from 'react';

function MostrarOcultar() {
  const [visivel, setVisivel] = useState(true);

  return (
    <div>
      <button onClick={() => setVisivel(!visivel)}>
        {visivel ? 'Ocultar' : 'Mostrar'} mensagem
      </button>
      {visivel && <p>Essa é a mensagem secreta!</p>}
    </div>
  );
}
