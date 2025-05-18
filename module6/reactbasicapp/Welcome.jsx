
// at the top of App.jsx
// componentBox class styles a component into a box
// Welcome class identifies this component
function Welcome(props) {
return (
<div className="componentBox">
<h3 style={{color:"blue", textTransform:"uppercase"}}>Welcome {props.name}!</h3>
</div>
)
}
export default Welcome