function FormattedDate(props) {
  return
  <>
  <div className="Comment-date">
          {/* The comment date */}
          {props.date.toLocaleString()}
        </div>
  </>
}
  export default FormattedDate;