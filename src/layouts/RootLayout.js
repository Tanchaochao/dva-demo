import React from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types';
import BasicLayout from './BasicLayout';

import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';

class RootLayout extends React.Component {
  render() {
    console.log(this.props)
    return (
      <LocaleProvider locale={zh_CN}>
        <BasicLayout {...this.props} />
      </LocaleProvider>
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
