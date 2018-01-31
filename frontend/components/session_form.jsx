import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  componentWillReceiveProps() {
    
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
    this.props.processForm(user);
    this.setState({email: "", password: ""});
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
      otherPath = '/#/signup';
    } else {
      formTitle = 'Sign Up';
      toOtherForm1 = "Already have an account? ";
      toOtherForm2 = "Sign in now";
      otherPath = '/#/login';
    }

    return (
      <div>

        <h1>{ formTitle }</h1>

        <form>

          <label>
            Email
            <input type="email"
                    value={ this.state.email }
                    onChange= { this.updateField("email") }/>
          </label>

          <label>
            Password
            <input type="password"
                    value={ this.state.password }
                    onChange= { this.updateField("password") }/>
          </label>

          <input onClick={ () => this.handleSubmit }
                  type="submit">{ formTitle }</input>

        </form>

        <div className="session-form-bottom">
          { toOtherForm1 }<Link to={ otherPath }>{ toOtherForm2 }</Link>
        </div>

      </div>
    );
  }
}

export default withRouter(SessionForm);
