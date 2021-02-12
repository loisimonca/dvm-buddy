import React from "react";

function EmployeeAccount({employeeCode, match,confirmPassword,handleSubmit,handleChange,}) 
{
  return (
    <div>
      <div className="create-account-wrap">
        <div className="create-account-container container">
          <i className="create-page-icon is-size-4 fas fa-paw"></i>
          <h1 className="account-create-header is-size-4">
            Create Employee account
          </h1>
          <div className="user-create-container">
            <form onSubmit={handleSubmit}>
              <div className="input-container">
                <input
                  type="text"
                  name="account-for-manager-or-user"
                  placeholder={employeeCode}
                  disabled
                />
              </div>
              <div className="input-container">
                <input
                  type="text"
                  name="f-name"
                  placeholder="First Name"
                  onChange={handleChange}
                />
              </div>
              <div className="input-container">
                <input
                  type="text"
                  name="l-name"
                  placeholder="Last Name"
                  onChange={handleChange}
                />
              </div>
              <div className="input-container">
                <input
                  type="text"
                  name="tel"
                  placeholder="Phone Number"
                  onChange={handleChange}
                />
                {match.tel ? (
                  <small className="create-account-pass is-italic">✔</small>
                ) : (
                  <small className="create-account-error is-italic">
                    Numbers only
                  </small>
                )}
              </div>
              <div className="input-container">
                <input
                  type="text"
                  name="email"
                  placeholder="E-mail"
                  onChange={handleChange}
                />
                {match.email ? (
                  <small className="create-account-pass is-italic">✔</small>
                ) : (
                  <small className="create-account-error is-italic">
                    Not valid email address
                  </small>
                )}
              </div>

              <div className="input-container">
                <input
                  autoComplete="off"
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                />
                {match.pwd ? (
                  <small className="create-account-pass is-italic">✔</small>
                ) : (
                  <small className="create-account-error is-italic">
                    Minimum eight characters, at least one letter, one number
                    and one special character
                  </small>
                )}
              </div>
              <div className="input-container">
                <input
                  autoComplete="off"
                  type="password"
                  name="pwdConfirm"
                  placeholder="Confirm Password"
                  onChange={confirmPassword}
                />
                {match.password ? (
                  <small className="create-account-pass is-italic">
                    Password match
                  </small>
                ) : (
                  <small className="create-account-error is-italic">
                    Password is not match
                  </small>
                )}
              </div>
              <input
              className="create-account-submit-btn"
              type="submit"
              value="Submit"
            />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeAccount;
