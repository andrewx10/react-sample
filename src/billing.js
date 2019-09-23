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

function UserAndId(props) {
  const user = props.user;
  console.log('header');
  return <div id="hello">Hello {user}, id {props.userId}</div>;
}

function Intro(props) {
  const userAndId = (
      <UserAndId user={props.user} userId={props.userId}/>
      );
  return <UserInfo userAndId={userAndId} />
}

function UserInfo(props) {
  console.log('UserInfo');
  return <div id="userInfo">{props.userAndId}</div>
}

ReactDOM.render(<Intro user="Joan" userId="134"/>, document.getElementById('intro'));