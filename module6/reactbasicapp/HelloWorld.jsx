function HelloWorld() {

    function showMessage() {
        alert("Button clicked!");
    }

    let MyJSX =<p> It is a good to learn React</p>
  return (
    <>
    <div>
      <h1>Hello World!</h1>
      <p>This is a simple React component.</p>
      <button onClick={showMessage}>Click Me!</button>
      {MyJSX}
         </div>
         </>
  );
}
export default HelloWorld;