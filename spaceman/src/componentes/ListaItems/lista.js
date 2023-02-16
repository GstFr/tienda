import "./lista.css";

function listaItems({greeting}) {
  return (
    <div className="lista">
      <h2>{greeting}</h2>
    </div>
  );
}

export default listaItems;