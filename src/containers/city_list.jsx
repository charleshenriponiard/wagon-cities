import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCities } from '../actions';

import City from './city';

class CityList extends Component {

  componentDidMount() {
    return this.props.setCities();
  }

  render() {
    return (
      <div className="col-sm-5">
        { this.props.cities.map((el) => <City city={el} key={el.name} /> )}
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { setCities: setCities },
    dispatch
  );
};

const mapStateToProps = (state) => {
  return {
    cities: state.cities
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(CityList);
