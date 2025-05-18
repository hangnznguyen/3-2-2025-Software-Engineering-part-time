import NamePart from "./NamePart";
function FullName(props) {
  return (
    // composes the NamePart component to display a full name
<div> 
    Full name:<NamePart value={props.firstName}></NamePart>
     <NamePart value={props.lastName}></NamePart>
</div>
  )}
export default FullName;
