'use strict';

class BillingAmount2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            billFieldLoadingMessage: 'Loading...',
            billAmount: 100
        };

        let that = this;

        setTimeout(function() {
            that.setState(
                {
                    billAmount: 800,
                    loading: false,
                }
            );
            that.setState({
                billFieldLoadingMessage: that.state.billAmount
            });
        }, 2200);
    }

    render() {
        return React.createElement(
            'span',
            { onClick: () => this.setState({ billAmount: 300 }) },
            this.state.billFieldLoadingMessage
        );
    }
}

class BillingHeader extends React.Component {
    render() {
        return React.createElement(
            'h3',
            {  },
            'Current Month Billing Summary'
        );
    }
}
// let billingHeader = <h3>Current Month Billing Summary</h3>;
//
// ReactDOM.render(billingHeader,
//     document.querySelector('#bill_header_container'),
//     'Current Month Billing Summary');

ReactDOM.render(React.createElement(
    'h3',
    {  },
    'Current Month Billing Summary'),
     document.querySelector('#bill_header_container')
);
