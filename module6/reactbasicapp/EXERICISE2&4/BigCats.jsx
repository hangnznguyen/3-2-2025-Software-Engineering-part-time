import SingleCat from './SingleCat';

function BigCats({ cats, onDeleteCat, onSortAZ, onReverse, onFilterPanthera, onReset }) {
  return (
    <div className="bigcats-container">
      <h2>BIG CATS</h2>

      <div className="buttons">
        <button onClick={onSortAZ}>Sort A–Z</button>
        <button onClick={onReverse}>Reverse</button>
        <button onClick={onFilterPanthera}>Show Panthera</button>
        <button onClick={onReset}>Reset</button>
      </div>

      <ul className="bigcats-list">
        {cats.map(cat => (
          <li key={cat.id}>
            <SingleCat
              name={cat.name}
              latinName={cat.latinName}
              image={cat.image}
            />
            <button onClick={() => onDeleteCat(cat.id)}>Delete</button>
          </li>
        ))}
      </ul>i
    </div>
  );
}

export default BigCats;