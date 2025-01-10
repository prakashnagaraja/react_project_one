
import PropTypes from "prop-types";
export const child = (props) => {
  return (
    <div>{props.child}</div>
  )
}
child.PropTypes={
    child:PropTypes.array,
}
