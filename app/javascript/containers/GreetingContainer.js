import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchRandomGreeting } from '../actions/greetingActions';
import Greeting from '../components/Greeting';

const GreetingContainer = ({ greeting, loading, error, fetchRandomGreeting }) => {
  useEffect(() => {
    fetchRandomGreeting();
  }, [fetchRandomGreeting]);

  return <Greeting greeting={greeting} loading={loading} error={error} />;
};

const mapStateToProps = (state) => ({
  greeting: state.greeting.greeting,
  loading: state.greeting.loading,
  error: state.greeting.error,
});

export default connect(mapStateToProps, { fetchRandomGreeting })(GreetingContainer);
