import React, { useState, useEffect } from "react";

const App = () => {
  const [count, setCount] = useState(0); // Estado para el contador
  const [isEven, setIsEven] = useState(false); // Estado para verificar si el número es par

  useEffect(() => {
    // Actualiza el estado `isEven` cuando cambia `count`
    setIsEven(count % 2 === 0);
  }, [count]);

  const increment = () => {
    setCount((prev) => prev + 1); // Incrementa el contador
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React Counter with Images</h1>
      <h2>Contador: {count}</h2>
      <button onClick={increment} style={{ padding: "10px 20px", fontSize: "16px" }}>
        Incrementar
      </button>
      {isEven && count > 0 && (
        <div>
          <img
            src="https://via.placeholder.com/15" // Reemplaza por la URL de tu imagen
            alt="Número par alcanzado"
            style={{ marginTop: "20px", borderRadius: "8px" }}
          />
          <p>¡Número par alcanzado!</p>
        </div>
      )}
    </div>
  );
};

export default App;
