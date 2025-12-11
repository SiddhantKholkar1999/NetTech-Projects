import React from "react";
import PropTypes from "prop-types";

export const CustomComponent = ({ fields, onSubmit, buttonText }) => {
  const [formData, setFormData] = React.useState(() => {
    fields.reduce((acc, current) => {
      console.log("current : ", current);
      acc[current.name] = "";
      return acc;
    }, {});
  });
  console.log("formData : ", formData);
  console.log("setFormData : ", setFormData);

  //handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  //handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <>
      <h1>CustomComponents</h1>
      <form id="form" onSubmit={handleSubmit}>
        {fields &&
          fields.map((el, i) => (
            <div key={i}>
              <label htmlFor={el.name}>{el.label}</label>
              <input
                id={el.name}
                type={el.type}
                name={el.name}
                placeholder={el.placeholder}
                required={el.required}
                // value={formData[el.name]}
                onChange={(e) => handleChange(e)}
              />
            </div>
          ))}
        <button type="submit">{buttonText}</button>
      </form>
    </>
  );
};

// PropTypes Validation

/* 
[
{
name:string,
type:string,
placeholder: string,
label: string,
required: bool,
}
]
*/
CustomComponent.propTypes = {
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      placeholder: PropTypes.string,
      label: PropTypes.string.isRequired,
      required: PropTypes.bool,
    })
  ).isRequired,
  onSubmit: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
};
