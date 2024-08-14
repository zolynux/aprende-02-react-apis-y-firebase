import React from "react";

const Item = ({ producto }) => {
  return (
    <div key={producto.id}>
      <img src={producto.imagen} alt={producto.titulo} />
      <h2>{producto.titulo}</h2>
      <p>${producto.precio}</p>
      <p>{producto.descripcion}</p>
      <hr />
    </div>
  );
};

export default Item;
