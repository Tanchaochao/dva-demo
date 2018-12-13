import React, { PureComponent } from 'react';
import { Breadcrumb } from 'antd';
import styles from './Breadcrumb.m.less';
class BreadcrumbView extends PureComponent{
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        return(
            <Breadcrumb 
                separator=">"
                className={styles.pageHeaderBreadcrumb}
            >
                <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                <Breadcrumb.Item>询价</Breadcrumb.Item>
            </Breadcrumb>
        );
    }
}
export default BreadcrumbView;