function SingleCat({ name, latinName, image }) {
    return (
      <>
        <img src={image} alt={name} className="cat-image" />
        <div>
          <strong>{name}</strong> <em>({latinName})</em>
        </div>
      </>
    );
  }
  
  export default SingleCat;