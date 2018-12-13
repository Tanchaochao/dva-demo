import React, { PureComponent } from 'react';
import { Layout } from 'antd';
import { Link } from 'dva/router'
import styles from './Sider.m.less';
import Logo from '../../assets/logo_s.png';
export default class Sider extends PureComponent {
  
  render(){
      return(
      <div className={styles.Sider} >
        <div className={styles.logo} key="logo" id="logo">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <ul className={styles.menu}>
            <li className={styles['menu-item'] }>
                <i className={`hxydicon icon-xunjia ${styles.menuicon}`} />
                <p>询价</p>
                <ul className={`${styles.menu} ${styles['menu-sub']}`}>
                    <li className={styles['menu-item'] }>
                        <p>询价1</p>
                    </li>
                    <li className={styles['menu-item'] }>
                        <p>询价222</p>
                    </li>
                    <li className={styles['menu-item'] }>
                        <p>询价3333</p>
                    </li>
                </ul>
            </li>
            <li className={styles['menu-item'] }>
                <i className={`hxydicon icon-jiaoqi ${styles.menuicon}`} />
                <p>报价</p>
            </li>
            <li className={styles['menu-item'] }>
                <i className={`hxydicon icon-xunjia ${styles.menuicon}`} />
                <p>首页</p>
            </li>
        </ul>
      </div>
      )
  }
};
