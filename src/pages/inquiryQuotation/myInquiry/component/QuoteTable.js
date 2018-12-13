import React, { PureComponent } from 'react';
import { 
    Table, 
    Switch,
} from 'antd';
import * as Editable from './Editable';
class QuoteTable extends PureComponent{
    constructor(props){
        super(props);
        this.state={};
        this.dataSource = [{
            key: 1,
            price: '$ 0.123455',
            payWay: 'USD',
            pcs: '1,000 ',
            day: '3-5天',
            batch: '25+',
            psc:'1,000 ',
            cps:'1,000 ',
            quoteVit: '2018-12-12 ',
            isShow:true,
        },{
            key: 2,
            price: '$ 0.123455',
            payWay: 'USD',
            pcs: '1,000 ',
            day: '3-5天',
            batch: '25+',
            psc:'1,000 ',
            cps:'1,000 ',
            quoteVit: '2018-12-12 ',
            isShow:false,
        },];
        this.columns = [{
            title: () => {
                return (
                    <span><i className="require">*</i>单价</span>
                );
            },
            dataIndex: 'price',
            className: 'text-right',
            render: (price, rows) =>{
                return this.props.items.status === 1 ? price : Editable.price();
            }
        },{
            title: '交易币种',
            dataIndex: 'payWay', 
        },{
            title: () => {
                return (
                    <span><i className="require">*</i>供给数量/pcs</span>
                );
            },
            dataIndex: 'pcs',
            className: 'text-right',
            render: (pcs, rows) =>{
                return this.props.items.status === 1 ? pcs : Editable.pcs();
            }
        },{
            title: () => {
                return (
                    <span><i className="require">*</i>交期/天</span>
                );
            },
            dataIndex: 'day',
            render: (day, rows) =>{
                return this.props.items.status === 1 ? day : Editable.day();
            }
        },{
            title: () => {
                return (
                    <span><i className="require">*</i>批号</span>
                );
            },
            dataIndex: 'batch',
            render: (day, rows) =>{
                return this.props.items.status === 1 ? day : Editable.day();
            }
        },{
            title: () => {
                return (
                    <span><i className="require">*</i>最小包装量/pcs</span>
                );
            },
            dataIndex: 'psc',
            className: 'text-right',
            render: (day, rows) =>{
                return this.props.items.status === 1 ? day : Editable.day();
            }
        },{
            title: () => {
                return (
                    <span><i className="require">*</i>最小起订量/pcs</span>
                );
            },
            dataIndex: 'cps',
            className: 'text-right',
            render: (day, rows) =>{
                return this.props.items.status === 1 ? day : Editable.day();
            }
        },{
            title: () => {
                return (
                    <span><i className="require">*</i>报价有效期</span>
                );
            },
            dataIndex: 'quoteVit',
            render: (day, rows) =>{
                return this.props.items.status === 1 ? day : Editable.day();
            }
        },{
            title: '是否有涂标',
            dataIndex: 'isShow',
            render: (isShow) => {
                const dom =  this.props.items.status ===1 ? (isShow?'是': '否') :
                <Switch defaultChecked={isShow} checkedChildren="是" unCheckedChildren="否" />
                return dom;
            },
        }]
    }
    
    componentWillMount(){
        // console.log(this.props.items)
    }

    render(){
        const tableFooter = () => {
            return(
                <div>
                    报价须知：<br/>
                    1.最小起订量是我们允许客户购买该物料的最低数量，低于此数量的购买需求将无法下单<br/>
                    2.报价有效期内，我们将不再重复向您询问该物料的价格<br/>
                </div>
            );
        };
        const { styles, items } = this.props;
        return(
            <div className={`quoteTable ${styles.quoteTable}`}>
                <Table
                rowKey="key"
                bordered
                dataSource={this.dataSource}
                columns={this.columns}
                pagination={false}
                footer={ items.status === 2 ? tableFooter : null }
                />
                <div className={styles.quoteTableBtnGroup} >
                {
                    items.status === 2 ?
                    <span className={styles.noQtyBtn}><button type="yellow" className="myBtn">暂无库存</button></span>:
                    null
                }
                    
                    <button className="myBtn" style={{ margin:"0 10px 0 20px" }}>提交报价</button>
                    <button className="myBtn">新增报价</button>
                </div>
            </div>
        );
    }
}
export default QuoteTable;