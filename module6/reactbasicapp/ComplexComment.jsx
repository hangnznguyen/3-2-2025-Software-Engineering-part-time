
import FormattedDate from "../FormattedDate";
import UserInfo from "./UserInfo";
function ComplexComment(props) {
    // Component that displays a detailed comment
    return (
     <div className="Comment componentBox">
        <UserInfo author={props.author} />
        <div className="Comment-text">
          {/* The comment text */}
          {props.text}
        </div>
        <FormattedDate date={props.date} />
      </div>
    );
  }
  
  export default ComplexComment;