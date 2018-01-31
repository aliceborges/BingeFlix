import { connect } from 'react-redux';
import { login, signup } from '../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => {
  const currentPath = ownProps.location.pathname;
  const formType = (currentPath === '/login') ? 'login' : 'signup';
  const errors = state.session.errors;

  return {
    loggedIn: Boolean(state.session.currentUser),
    errors,
    formType
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const currentPath = ownProps.location.pathname;
  const action = (currentPath === '/login') ? login : signup;
  return {
    processForm: user => dispatch(action(user))
  };
};

export default connect(mapStateToProps,
                      mapDispatchToProps)(SessionForm);
