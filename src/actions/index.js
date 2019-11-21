//action types
export const TOGGLE = "TOGGLE";
export const LOAD_DETAIL = "LOAD_DETAIL";
export const GET_THUMBNAIL = "GET_THUMBNAIL";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const EDIT_ITEM = "EDIT_ITEM";
export const LOGIN_USER = "LOGIN_USER";
export const REGISTER_USER = "REGISTER_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const GO_BACK = "GO_BACK";
export const GO_REGISTER = "GO_REGISTER";
export const GO_LOGIN = "GO_LOGIN";

//action creators
export const actionsToggle = link => dispatch => {
  return dispatch({
    type: TOGGLE,
    payload: link
  });
};

export const actionsAddProduct = data => async dispatch => {
  let config = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json"
    }
  };
  await fetch("/api/habits", config)
    .then(response => {
      return response.json();
    })
    .then(results => {
      return dispatch({
        type: ADD_PRODUCT,
        payload: results
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const loadDetailAsync = id => async dispatch => {
  await fetch(`/api/habits/${id}`)
    .then(response => {
      return response.json();
    })
    .then(habit => {
      dispatch({
        type: LOAD_DETAIL,
        payload: habit
      });
    });
};

export const actionsGetThumbnail = category => async dispatch => {
  await fetch(`/api/habits/cat/${category}`)
    .then(responseFromServer => {
      return responseFromServer.json();
    })
    .then(results => {
      return dispatch({
        type: GET_THUMBNAIL,
        payload: results
      });
    });
};

export const actionsLoginSubmit = loginInfo => async dispatch => {
  let config = {
    method: "POST",
    body: JSON.stringify(loginInfo),
    headers: {
      "Content-type": "application/json"
    }
  };

  await fetch("/api/auth/login", config)
    .then(response => {
      return response.json();
    })
    .then(results => {
      return dispatch({
        type: LOGIN_USER,
        payload: results
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const actionsRegisterSubmit = registerInfo => async dispatch => {
  let config = {
    method: "POST",
    body: JSON.stringify(registerInfo),
    headers: {
      "Content-type": "application/json"
    }
  };

  await fetch("api/auth/register", config)
    .then(response => {
      return response.json();
    })
    .then(results => {
      return dispatch({ type: REGISTER_USER, payload: results });
    })
    .catch(err => {
      console.log(err);
      return err;
    });
};

export const actionsHandleLogout = () => async dispatch => {
  console.log("actionsHandleLogout");
  await fetch("/api/auth/logout")
    .then(response => {
      console.log("actionsHandleLogout got response from server.");
      response.json();
    })
    .then(results => {
      return dispatch({ type: LOGOUT_USER, payload: null });
    })
    .catch(err => {
      console.log(err);
    });
};

export const actionsGoBack = () => dispatch => {
  return dispatch({
    type: GO_BACK,
    payload: ""
  });
};

export const actionsOpenRegister = () => dispatch => {
  return dispatch({
    type: GO_REGISTER,
    payload: "register"
  });
};

export const actionsOpenLogin = () => dispatch => {
  return dispatch({
    type: GO_LOGIN,
    payload: "login"
  });
};

export const actionsEditItem = data => async dispatch => {
  console.log("ACTIONS EDIT ITEM");
  console.log(data);
  console.log(JSON.stringify(data));
  let config = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json"
    }
  };
  console.log(config);
  await fetch(`/api/habits/${data.id}`, config)
    .then(response => {
      return response.json();
    })
    .then(results => {
      return dispatch({
        type: EDIT_ITEM,
        payload: results
      });
    })
    .catch(err => {
      console.log(err);
    });
};
