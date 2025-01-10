import PropTypes from "prop-types";

export const Students = (props) => {
  return (
    <div className="Students">
        <table>
            <tbody>
            <tr>
                <th>Name</th>
                <td>{props.Name}</td>
                
            </tr>
            <tr>
                <th>Age</th>
                <td>{props.Age}</td>
               
            </tr>
            <tr>
            <th>IsMarried</th>
            <td>{props.IsMarried ? "Yes" : "No"}</td>
            
            </tr>
            </tbody>
        </table>
    </div>
  );
};



Students.propTypes = {
    Name: PropTypes.string,
    Age: PropTypes.number,
    IsMarried: PropTypes.bool,
};

Students.defaultProps ={
    Name:"No Name",
    Age:0,
    IsMarried:false,
};
