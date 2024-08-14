import Item from "./Item";

const ItemList = ({ productos }) => {
  return (
    <div>
      <h1>Lista de Productos</h1>
      <br />
      {productos.length > 0 &&
        productos.map((producto) => {
          return <Item key={producto.id} producto={producto} />;
        })}
    </div>
  );
};

export default ItemList;
