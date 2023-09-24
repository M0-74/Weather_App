import React from "react";

const Weather = (props) => {
  return (
    <div>
      {props.tempreature && (
        <p>
          Tempreature : <span>{parseInt(props.tempreature - 273)}</span>
        </p>
      )}
      {props.city && (
        <p>
          City :<span>{props.city}</span>
        </p>
      )}
      {props.country && (
        <p>
          Country : <span>{props.country}</span>
        </p>
      )}
      {props.humidity && (
        <p>
          Humidity : <span>{props.humidity}</span>
        </p>
      )}
      {props.discription && (
        <p>
          Discription :<span>{props.discription}</span>
        </p>
      )}
      {props.error && (
        <p>
          Error :<span> {props.error}</span>
        </p>
      )}
    </div>
  );
};
export default Weather;
