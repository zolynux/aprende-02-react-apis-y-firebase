import { useEffect, useState } from "react";

const TextH2 = () => {
  const [text, setText] = useState("");

  const handleText = (e) => {
    setText(e.target.value);
  };

  // console.log("Hola, Mundo");
  useEffect(() => {
    console.log("¡Componente Montado!");

    return () => {
      console.log("¡Componente Desmontado!");
    };
  }, []);
  useEffect(() => {
    console.log("¡Text modificado!");
  }, [text]);

  return (
    <>
      <input type="text" onChange={handleText} placeholder="Escribe..." />
      <h2>{text}</h2>
    </>
  );
};

export default TextH2;

// Montado == Mount
// Actualizado == Updated
// Desmontado == Unmount
