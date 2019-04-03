import React, { Component, Fragment } from 'react';
import SampleComponent from '../components/SampleComponent';

class MainContainer extends Component{
  render() {
    return (
      <Fragment>
        <p>Hey! I'm the main component</p>
        <SampleComponent />
      </Fragment>
    );
  }
}

export default MainContainer;
