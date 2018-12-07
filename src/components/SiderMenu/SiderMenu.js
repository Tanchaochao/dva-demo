import React, { PureComponent } from 'react';
import { Layout } from 'antd';
import styles from './SiderMenu.m.less';
import { Link } from 'dva/router'
import BaseMenu from './BaseMenu';
import Logo from '../../assets/logo.png';
const { Sider } = Layout;

export default class SiderMenu extends PureComponent {
  
  render(){
    const { collapsed } =this.props;
      return(
      <Sider
        trigger={null}
        collapsible
        width={256}
        collapsed={collapsed}
        className={styles['sider-menu']}
      >
        <div className={styles.logo} key="logo" id="logo">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        < BaseMenu />
      </Sider>
      )
  }
}