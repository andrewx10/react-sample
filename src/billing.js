'use strict';

//Context lets us pass a value deep into the component tree
//without explicitly threading it through every component.
//Create a context for the current theme (with "light" as the default).
const ThemeContext = React.createContext('light');

class ThemedButton extends React.Component {
// Assign a contextType to read the current theme context.
// React will find the closest theme Provider above and use its value.
// In this example, the current theme is "dark".
  static contextType = ThemeContext;
  render() {
   return <Button theme={this.context} />;
  }
}

function Button(props) {
  console.log('theme:' + props.theme);
  return <button id="myButton" className={props.theme}>More options</button>
}

//A component in the middle doesn't have to
//pass the theme down explicitly anymore.
function Toolbar(props) {
  return (
   <div>
     <ThemedButton />
   </div>
  );
}

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

//        return React.createElement(
//            'button',
//            { onClick: () => this.setState({ billed: true }) },
//            'Bill'
//        );
          return (<ThemeContext.Provider value="dark">
              <button onClick={()=>this.setState({billed:true})}>Bill</button>
              <Toolbar/>
            </ThemeContext.Provider>);
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

class App extends React.Component {
  render() {
   // Use a Provider to pass the current theme to the tree below.
   // Any component can read it, no matter how deep it is.
   // In this example, we're passing "dark" as the current value.
   return (
     <ThemeContext.Provider value="dark">
       <Toolbar />
     </ThemeContext.Provider>
   );
  }
}

ReactDOM.render(<Intro user="Joan" userId="134"/>, document.getElementById('intro'));
ReactDOM.render(<Toolbar/>, document.getElementById('toolbar'));