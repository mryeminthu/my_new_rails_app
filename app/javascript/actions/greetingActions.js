const API_URL = '/api/v1/messages/greeting';

export const FETCH_GREETING_REQUEST = 'FETCH_GREETING_REQUEST';
export const FETCH_GREETING_SUCCESS = 'FETCH_GREETING_SUCCESS';
export const FETCH_GREETING_FAILURE = 'FETCH_GREETING_FAILURE';

const fetchGreetingRequest = () => ({
  type: FETCH_GREETING_REQUEST,
});

const fetchGreetingSuccess = (greeting) => ({
  type: FETCH_GREETING_SUCCESS,
  payload: greeting,
});

const fetchGreetingFailure = (error) => ({
  type: FETCH_GREETING_FAILURE,
  payload: error,
});

export const fetchRandomGreeting = () => (dispatch) => {
  dispatch(fetchGreetingRequest());
  return fetch(API_URL)
    .then((response) => response.json())
    .then((data) => dispatch(fetchGreetingSuccess(data)))
    .catch((error) => dispatch(fetchGreetingFailure(error)));
};
