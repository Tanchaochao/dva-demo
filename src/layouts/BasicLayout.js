import React from 'react';

import { Layout, Icon } from 'antd';
import SiderMenu from '../components/SiderMenu/SiderMenu';
import Breadcrumb from 'components/Breadcrumb/Breadcrumb';
// import Siders from 'components/Sider/Sider';
import styles from './BasicLayout.m.less';
const { Header, Content, Footer } = Layout;


class BasicLayout extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      collapsed: true,
    };
  }

  render() {
    const { 
      children,
      hiddenBreadcrumb = false,
    } =this.props;
    const { collapsed } = this.state;
    return (
      <Layout>
        < SiderMenu collapsed={collapsed}/>
        {/* < Siders /> */}
        <Layout>
          <Header className={styles.Header} style={{ textAlign: 'center' }}>
            Header
          </Header>
          <Content className={styles.Content}>
            <div>
              { hiddenBreadcrumb ? null : < Breadcrumb /> }
              {children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            <p>联系电话：0755-28129588-65149</p>
            <p>版权所有&copy;苏州优易鸿富数据科技有限公司</p>
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
export default BasicLayout;