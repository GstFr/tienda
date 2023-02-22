import "./lista.css";

function ItemListContainer({greeting}) {
  return (
    <div className="lista">
      <h2>{greeting}</h2>
    </div>
  );
}

export default  ItemListContainer;