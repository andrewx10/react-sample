'use strict';

class BillingWidget extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            billed: false
        };
    }

    render() {
        if (this.state.billed) {
            return 'You billed this.';
        }
        return React.createElement(
            'button',
            { onClick: () => this.setState({ billed: true }) },
            'Bill'
        );
    }
}

const billingDomContainer = document.querySelector('#bill_button_container');
ReactDOM.render(React.createElement(BillingWidget), billingDomContainer);