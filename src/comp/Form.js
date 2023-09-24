import React from "react";

const Form = (props) => {
  return (
    <form onSubmit={props.getWeather}>
      <input type="text" name="city" placeholder="city" className="city" />
      <input
        type="text"
        name="country"
        placeholder="country"
        className="country"
      />
      <button className="btn-weather">Get Weather</button>
    </form>
  );
};
export default Form;
