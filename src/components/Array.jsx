import PropTypes from "prop-types";

export const Array = (props) => {
  return (
    <div>
    <h3>Items List</h3>
    <ul>
        {items.map((item) =>(
            <li key={item.id}>{item.name}</li>

        ))}
    </ul>
        </div>
  );
};

