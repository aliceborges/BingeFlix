import { connect } from 'react-redux';
import { login, signup, clearErrors } from '../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => {
  const currentPath = ownProps.location.pathname;
  const formType = (currentPath === '/login') ? 'login' : 'signup';
  const errors = state.errors.session;

  return {
    loggedIn: Boolean(state.session.currentUser),
    errors,
    demoUser: {
      user: {
        email: "Demo User",
        password: "goodpassword"
      }
    },
    formType
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const currentPath = ownProps.location.pathname;
  const action = (currentPath === '/login') ? login : signup;
  return {
    processForm: user => dispatch(action(user)),
    login: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps,
                      mapDispatchToProps)(SessionForm);
