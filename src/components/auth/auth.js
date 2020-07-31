import React, { useState } from "react";
import { Redirect } from "react-router-dom";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState([])
  const [redirect, setRedirect] = useState(false);

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  function handleSuccess() {
    setRedirect(true)
  }

  function handleFailure(error) {
    
    console.log(error)
  }

  function handleSubmit(e) {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email, password: password }),
    };
    fetch("http://localhost:3001/api/auth/register_login", requestOptions)
      .then((response) => {
        response.json();

        if(response.ok) {
            handleSuccess()
        }
        // setRedirect(true);
      })
      .then((data) => setResponse([...response].push(data.id)))
      .catch((err) => console.log(err));
    e.preventDefault();
  }
  if (redirect) {
    return <Redirect to="/survey" />;
  } else {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-auto">
            <form onSubmit={handleSubmit}>
              <label>
                email:
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  onChange={handleChangeEmail}
                />
              </label>
              <label>
                password:
                <input
                  className="form-control"
                  name="password"
                  type="password"
                  onChange={handleChangePassword}
                />
              </label>
              <button className="btn" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Auth;
