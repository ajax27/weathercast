import React from "react";

const Form = props => {
  return (
    <form onSubmit={props.loadWeather}>
      <input type="text" name="city" placeholder="Choose Your City..." />
      <input type="text" name="country" placeholder="Choose Your Country..." />
      <button>Get Forecast</button>
    </form>
  );
};

export default Form;
