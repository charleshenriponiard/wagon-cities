import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectCity } from '../actions';

class City extends Component {

  handleClick = () => {
    return this.props.selectedCity(this.props.city);
  }

  render() {
    let classes = 'card';
    if (this.props.city === this.props.baba) {
      classes += " selected" ;
    };

    return (
      <div className={classes} onClick={this.handleClick} >
        <p>{this.props.city.name}</p>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { selectedCity: selectCity },
    dispatch
  );
};

const mapStateToProps = (state) => {
  return {
    baba: state.selectedCity
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(City);

