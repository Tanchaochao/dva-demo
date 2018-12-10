import React, { PureComponent } from 'react';

class QuoteTable extends PureComponent{
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        const { styles } = this.props;
        return(
            <div className={styles.quoteTable}>
                1231
            </div>
        );
    }
}
export default QuoteTable;