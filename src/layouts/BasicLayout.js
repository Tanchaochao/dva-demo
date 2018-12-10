import React from 'react';

import { Layout, Icon } from 'antd';
import SiderMenu from '../components/SiderMenu/SiderMenu';
import styles from './BasicLayout.m.less';

const { Header, Content } = Layout;


class BasicLayout extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      collapsed: false,
    };
  }
  
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    const { children } =this.props;
    const { collapsed } = this.state;
    return (
      <Layout>
        < SiderMenu collapsed={collapsed}/>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
           <span className={styles.collapsed} onClick={this.toggle}>
            <Icon
                className="trigger"
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              />
           </span>
          </Header>
          <Content >
            {children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}
export default BasicLayout;