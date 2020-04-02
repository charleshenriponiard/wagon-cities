import React, { Component } from "react";
import { connect } from 'react-redux';

class SelectedCity extends Component {

  render() {
    const { baba } = this.props;
    if (baba) {
      return (
        <div className="banner">

            <div>
              <img src={`https://kitt.lewagon.com/placeholder/cities/${baba.slug}`} alt=""/>
              <h1>{baba.name}</h1>
              <p>{baba.address}</p>
            </div>
          </div>
      );
    } else {
      return <h1 style={{marginTop: 150}}>Select City !! </h1>;
    }
    
  }
}

const mapStateToProps = (state) => {
  return {
    baba: state.selectedCity
  };
};

export default connect(mapStateToProps)(SelectedCity);
