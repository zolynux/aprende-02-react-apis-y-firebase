const Item = ({ producto }) => {
  return (
    <div className="producto">
      <img src={producto.imagen} alt={producto.titulo} />
      <div>
        <h4>{producto.titulo}</h4>
        <p>Precio: ${producto.precio}</p>
        <p>Categoría: {producto.categoria}</p>
        <a href={`/item/${producto.id}`} className="ver-mas">
          Ver más...
        </a>
      </div>
    </div>
  );
};

export default Item;
