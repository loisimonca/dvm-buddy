import React from "react";


const AdminHomePage = () => {
  return (
    <div className="home-wrap">
      <div className="home-container container">
        <h2 className="home-title has-text-centered">Welcome Admin!</h2>
        <h3 className="home-subtitle has-text-centered is-uppercase">
          <strong>
           Visit your Account to see more Options <br />
           <button class="button is-large is-fullwidth">Account</button>
            <br /> 
          </strong>
        </h3>
      </div>
    </div>
  );
};

export default AdminHomePage;