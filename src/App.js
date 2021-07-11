import {Component} from 'react'
import Welcome from './components/Welcome'
import './App.css'

// Using an If...Else Statement.
// class App extends Component {
//   state = {
//     isLoggedIn: true,
//   }

//   renderAuthButton = () => {
//     const {isLoggedIn} = this.state
//     if (isLoggedIn === true) {
//       return <button>Logout</button>
//     }
//     return <button>Login</button>
//   }

//   render() {
//     return (
//       <div className="container">
//         <Welcome greeting="Hello" name="User" />
//         {this.renderAuthButton()}
//       </div>
//     )
//   }
// }

// Using Element Variables.
// class App extends Component {
//   state = {isLoggedIn: true}

//   render() {
//     const {isLoggedIn} = this.state
//     let authButton
//     if (isLoggedIn) {
//       authButton = <button>Logout</button>
//     } else {
//       authButton = <button>Login</button>
//     }

//     return (
//       <div className="container">
//         <Welcome greeting="Hello" name="User" />
//         {authButton}
//       </div>
//     )
//   }
// }

// Using Ternary Operators.
// class App extends Component {
//   state = {isLoggedIn: true}

//   render() {
//     const {isLoggedIn} = this.state
//     return (
//       <div className="container">
//         <Welcome greeting="Hello" name="User" />
//         {/* {isLoggedIn ? <button>Logout</button> : <button>Login</button>} */}
//         {isLoggedIn ? <button>Logout</button> : null}
//       </div>
//     )
//   }
// }

// Using Logical && Operator.
// class App extends Component {
//   state = {isLoggedIn: true}

//   render() {
//     const {isLoggedIn} = this.state
//     return (
//       <div className="container">
//         <Welcome greeting="Hello" name="User" />
//         {isLoggedIn && <button>Logout</button>}
//         {!isLoggedIn && <button>login</button>}
//       </div>
//     )
//   }
// }

// Default Props.
class App extends Component {
  render() {
    return (
      <div className="container">
        <Welcome />
        {/* <Welcome greeting="Hai" name="Ajay" /> */}
      </div>
    )
  }
}

export default App
