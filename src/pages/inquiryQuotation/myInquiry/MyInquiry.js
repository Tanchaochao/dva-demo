import React, { PureComponent } from 'react';
import { 
    Input, 
    Icon,
    Dropdown,
    Menu,
    Checkbox,
    Tooltip,
} from 'antd';
import QuoteTable from './component/QuoteTable';
import styles from './MyInquiry.m.less';
import yay from 'assets/yay.jpg'
const { Search } = Input;


class MyInquiry extends PureComponent {
    constructor(props){
        super(props);
        this.state={
            currentTab: 1,
        };
    }
    tabsOnChange(tab, e){
        this.setState({
            currentTab:tab
        }, () => {
            const tabs = document.querySelector(`.${styles.tabs}`).querySelector(`.${styles.left}`);
            const barEl = tabs.querySelector(`.${styles.inkBar}`);
            const { offsetLeft, offsetWidth } = tabs.querySelector(`.${styles.active}`);
            barEl.style.left = `${offsetLeft}px`;
            barEl.style.width = `${offsetWidth}px`;
        });
        
    }
    render(){
        const { currentTab } = this.state;
        const menu = (
            <Menu>
              <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
              </Menu.Item>
              <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
              </Menu.Item>
              <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3rd menu item</a>
              </Menu.Item>
            </Menu>
          );
        const enterButton = (
            <span><Icon type="search" />&nbsp;&nbsp;<span>搜索</span></span>
        );
        return(
            <div className={`container ${styles.MyInquiry}`}>
                <div className={styles.top}>
                    <div className={styles.SearchBox}>
                        <Search
                            className={styles.Search}
                            placeholder="请输入制造商料号"
                            enterButton={enterButton}
                            size="large"
                            onSearch={value => console.log(value)}
                        />
                    </div>
                    <div className={styles.tabs}>
                        <ul className={styles.left}>
                            <i className={styles.inkBar}></i>
                            <li className={currentTab===1 ? styles.active : ''} onClick={this.tabsOnChange.bind(this, 1)}>现货采购</li>
                            <li className={currentTab===2 ? styles.active : ''} onClick={this.tabsOnChange.bind(this, 2)}>期货采购</li>
                        </ul>
                        <div className={styles.right}>
                            <Dropdown overlay={menu}>
                                <span style={{ cursor: "pointer", marginRight: '50px' }}>全部客户询价状态
                                <Icon type="down" style={{ marginLeft: 10 }} /></span>
                            </Dropdown>
                            <Dropdown overlay={menu}>
                                <span style={{ cursor: "pointer" }}>全部报价状态
                                <Icon type="down" style={{ marginLeft: 10 }} /></span>
                            </Dropdown>
                        </div>
                    </div>
                </div>
                <div className={styles.content}>
                    <section className={styles.operationBar}>
                        <div style={{ flex: 1 }}>
                            <Checkbox style={{ marginRight: 20 }}></Checkbox>批量报价：
                            <span><Icon type="user" /> &nbsp;交期</span>
                            <span><Icon type="user" /> &nbsp;批号</span>
                            <span><Icon type="user" /> &nbsp;报价有效期</span>
                        </div>
                        <div className={styles.btnGroup}>
                            <button className="myBtn" style={{ marginRight: 10 }}>提交报价</button>
                            <button className="myBtn">导出询价</button>
                        </div>
                    </section>
                    <section className={styles.list}>
                        <div className={styles.baseInfo}>
                            <div className={styles.left}>
                                <Checkbox style={{ marginRight: 20 }} checked></Checkbox>
                                <span 
                                className={styles.produtionImg} 
                                ><i style={{ backgroundImage: `url(${yay})` }} ></i></span>
                                <div className={styles.info}>
                                    <span className={styles.ampl}>TPS54531DDAR</span>
                                    <Tooltip overlayClassName={styles.tooltip} placement="bottomLeft" title="复制">
                                        <Icon type="user" className={styles.icon}/>
                                    </Tooltip>
                                    
                                    <span className={styles.mark}>TI</span>
                                    <div className={styles.clamp}>3.5-28V Input,5A 70kHz SD Converter3.5-28V Input,SD C</div>
                                </div>
                            </div>
                            <div className={styles.right}>
                               <div className={styles.count}>
                                    <span>需求总数量/pcs</span>
                                    <span>1,000</span>
                               </div>
                               <div className={styles.userCount}>
                                    <span><b>1</b>位客户正在询价</span>
                                    <span className={styles.time}>2018-12-12 12:12:12更新</span>
                               </div>
                            </div>
                        </div>
                        <QuoteTable styles={styles}/>
                        
                        {/* <span className={styles.openBtn}>展开报价<Icon type="down" style={{ marginLeft: 10 }} /></span> */}
                    </section>
                </div>
            </div>
        )
    }
}
export default MyInquiry;