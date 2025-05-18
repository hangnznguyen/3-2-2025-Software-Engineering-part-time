import { useState } from 'react';

function AddCatForm({ onAddCat }) {
  const [name, setName] = useState('');
  const [latinName, setLatinName] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !latinName || !image) {
      alert('Please fill in all fields');
      return;
    }

    const newCat = {
      name,
      latinName,
      image,
    };

    onAddCat(newCat);
    setName('');
    setLatinName('');
    setImage('');
  };

  return (
    <form className="add-cat-form" onSubmit={handleSubmit}>
      <h3>Add a New Big Cat</h3>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Latin Name"
        value={latinName}
        onChange={(e) => setLatinName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <button type="submit">Add Cat</button>
    </form>
  );
}

export default AddCatForm;