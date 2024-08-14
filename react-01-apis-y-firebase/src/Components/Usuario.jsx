export const Usuario = ({ nombre, edad, nacionalidad }) => {
  return (
    <div>
      <h1>Nombre: {nombre}</h1>
      <p>Edad: {edad}</p>
      <p>Nacionalidad: {nacionalidad}</p>
      <hr />
    </div>
  );
};

/*
const Usuario = (props) => {
  const { nombre, edad, nacionalidad } = props;

  return (
    <div>
      <h1>Nombre: {props.nombre}</h1>
      <p>Edad: {props.edad}</p>
      <p>Nacionalidad: {props.nacionalidad}</p>
      <hr />
    </div>
  );
};
*/
