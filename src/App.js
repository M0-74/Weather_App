import React, { Component } from "react";
import Form from "./comp/Form";
import Weather from "./comp/Weather";
const Api_Keys = "9aa34cfc2244eb086792327aee3497d9";
class App extends Component {
  state = {
    tempreature: "",
    city: "",
    country: "",
    humidity: "",
    description: "",
    error: "",
  };
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const API = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&appid=e36ed364400282e43250b6c4c0274d44`
    );
    const data = await API.json();
    if (city && country) {
      this.setState({
        tempreature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: "",
      });
    } else {
      this.setState = {
        tempreature: "",
        city: "",
        country: "",
        humidity: "",
        description: "",
        error: "please Enter Your D ata",
      };
    }
  };
  render() {
    return (
      <div className="App">
        <Form getWeather={this.getWeather} />
        <Weather
          tempreature={this.state.tempreature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
        />
      </div>
    );
  }
}
export default App;
