import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import * as AppUtil from '../util/app_util';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  componentDidMount() {
    console.log("hello");
    this.props.clearErrors();
  }


  updateField(field) {
    return (e) => {
      e.preventDefault();
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm({ user });
    this.setState({email: "", password: ""});
  }

  loginDemo(e) {
    e.preventDefault();
    const demo = this.props.demoUser;
    this.props.login(demo);
    this.setState({email: "", password: ""});
  }

  title() {
    return (
      <Link to="/"><h1 className="site-name">BingeFlix</h1></Link>
    );
  }

  render() {
    const currentForm = this.props.formType;
    let formTitle;

    let toOtherForm1;
    let toOtherForm2;
    let otherPath;

    if(currentForm === 'login') {
      formTitle = 'Sign In';
      toOtherForm1 = "New to BingeFlix? ";
      toOtherForm2 = "Sign up now";
      otherPath = '/signup';
    } else {
      formTitle = 'Sign Up';
      toOtherForm1 = "Already have an account? ";
      toOtherForm2 = "Sign in now";
      otherPath = '/login';
    }

    return (
      <div className="session-form-page">
        <div className="inner-page">
          { this.title() }

          <form className="session-form">
            <h1>{ formTitle }</h1>

            <ul className="session-errors">
              { this.props.errors.map((error, idx) => (
                     <li className="session-error"
                         key={ AppUtil.uniqueKey(idx) }>{ error }</li>)
                   ) }
            </ul>

            <label>
              Email
              <br />
              <input type="email"
                      value={ this.state.email }
                      onChange= { this.updateField("email") } autoFocus/>
            </label>

            <label>
              Password
              <br />
              <input type="password"
                      value={ this.state.password }
                      onChange= { this.updateField("password") }/>
            </label>

            <input type="submit"
                   onClick={ (e) => this.handleSubmit(e) }
                   value={ formTitle }/>

            <input type="submit"
                   onClick={ (e) => this.loginDemo(e) }
                   value="Demo Sign In"/>

            <div className="session-form-bottom">
              { toOtherForm1 }<Link to={ otherPath }>{ toOtherForm2 }.</Link>
            </div>
          </form>

        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
