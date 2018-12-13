import React, { PureComponent } from 'react';
import { 
    Modal,
    Radio,
    Input,
    Alert,
} from 'antd';

class Modals extends PureComponent{
    constructor(props){
        super(props);
        this.state={
            visible: true,
        };
    }
    // 确认按钮
    handleOk = (e) => {
        this.handleCancel();
    }
    // 取消按钮
    handleCancel = (e) => {
        this.setState({
            visible: false,
        });
        this.props.hideModal();
    }

    render(){ 
        const { visible } = this.state;
        const { styles, modalStatus, hideModal } = this.props;
        const Delivery =(
            <div>
                <div>
                    <label htmlFor="" className={styles.modalLabel}>交期：</label>
                    <Radio value={1} className={styles.radio}>3-5天</Radio>
                    <Radio value={2} className={styles.radio} checked>5-7天</Radio>
                    <Radio value={3} className={styles.radio}>7-9天</Radio>
                </div>
                <div style={{ marginTop: 20 }}>
                    <label htmlFor="" className={styles.modalLabel}></label>
                    <Radio value={1}>其他</Radio>
                    < Input addonAfter="天" style={{ width: 150 }}/>
                </div>
            </div>
        );
        const Batch =(
            <div>
                 <div>
                    <label htmlFor="" className={styles.modalLabel}>批号：</label>
                    <Radio value={1} className={styles.radio} checked>18+</Radio>
                    <Radio value={3} className={styles.radio}>17+</Radio>
                </div>
                <div style={{ marginTop: 20 }}>
                    <label htmlFor="" className={styles.modalLabel}></label>
                    <Radio value={1}>其他</Radio>
                    < Input style={{ width: 150 }}/>
                </div>
            </div>
        );
        const Validity =(
            <div>
                 <Alert message="报价有效期内，我们将不会重复向您询问该物料的价格" type="info" showIcon  style={{ marginBottom: 40 }} />
                <div>
                    <label htmlFor="" className={styles.modalLabel}>交期：</label>
                    <Radio value={1} className={styles.radio}>3天</Radio>
                    <Radio value={2} className={styles.radio} checked>7天</Radio>
                    <Radio value={3} className={styles.radio}>14天</Radio>
                </div>
                <div style={{ marginTop: 20 }}>
                    <label htmlFor="" className={styles.modalLabel}></label>
                    <Radio value={1}>其他</Radio>
                    < Input addonAfter="天" style={{ width: 150 }}/>
                </div>              
            </div>
        );
        return(
            <Modal
                title="批量回复交期"
                visible={visible}
                className={styles.modalWrap}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
            >
                { modalStatus === "Delivery" ? Delivery : null }
                { modalStatus === "Batch" ? Batch : null }
                { modalStatus === "Validity" ? Validity : null }
            </Modal>
        );
    }
}
export default Modals;