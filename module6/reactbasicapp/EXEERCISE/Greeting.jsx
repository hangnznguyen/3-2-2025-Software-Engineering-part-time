function Greeting(props){
    const name = props.name || "World";
    return (
        <>
        <h1>Hello{name} {props.children}</h1>
        </>
    )
}
export default Greeting