import React from 'react';
import { connect } from 'dva';
import { Button, Checkbox, Switch  } from 'antd';
import * as service from './service';
import styles from './Home.m.less';

function IndexPage() {
  service.getInquiryList({
    pageSize: 20,
    page: 1,
  }).then((res) => {
    console.log(res);
  })
  return (
    <div className={styles.home}>
      <h1 className={`text-overflow ${styles.title }`}>Yay! Welcome to Home!</h1>
      <a href="">go</a>
      <Button type="primary">导出</Button>
      <Button >提交报价 </Button>
      <Checkbox checked>测试数据</Checkbox>
      <Switch defaultChecked checkedChildren="开" unCheckedChildren="关" />,
      <p>测试数据</p>
      <i className="hxydicon icon-pihao" />
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
