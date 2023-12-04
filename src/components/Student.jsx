import React from "react";
import PropTypes from "prop-types";
function Student(props) {
  const { name, dob, city } = props;
  return (
    <div style={{ border: "2px solid black", margin: "10px" }}>
      <h3 style={{ color: "orange", textAlign: "center" }}>Name : {name}</h3>
      <p style={{ color: "red" }}>DOB : {dob}</p>
      <p style={{ color: "blue" }}>City : {city}</p>
    </div>
  );
}
Student.propTypes = {
  name: PropTypes.string.isRequired,
  dob: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired
};
Student.defaultProps = {
  name: "Enter name",
  dob: "Enter dob",
  city: "Enter city",
};

export default Student;
