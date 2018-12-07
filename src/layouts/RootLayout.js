import React from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types';
import BasicLayout from './BasicLayout';


class RootLayout extends React.Component {
  render() {
    return (
      <BasicLayout {...this.props} />
    );
  }
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default connect(({ global }) => {
  return {
    global,
  };
})(RootLayout);
