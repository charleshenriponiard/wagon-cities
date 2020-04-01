import React, { Component } from "react";
import City from './city';

class CityList extends Component {
  
  render() {
    return this.props.cities.map((city) => {
      return <City cit={city} />;
    }); 
  }
}

export default CityList;