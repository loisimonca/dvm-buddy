import React from "react";
import "./Documents.css";

import "./AccountManage.css";

function Documents() {
  return (
    <div className="account-manage-container">
      <h1 className="account-manage-title is-size-3">Documents</h1>
      <div className="columns">
        <button
          className="formBtn column"
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1Y-XcHmZmkDIUjx1CwiRzfkZskT9LVd4d/view?usp=sharing",
              "_blank"
            )
          }
        >
          Treatment Sheet
        </button>
        <button
          className="formBtn column"
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1LQpKTLCEMnU0_437MkEEdrrFZXc_4Sbv/view?usp=sharing",
              "_blank"
            )
          }
        >
          Surgical Consent Form
        </button>
        <button
          className="formBtn column"
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1LeXGGpxuNaQBeK1hWV6R-mEgrRG7M4qh/view?usp=sharing",
              "_blank"
            )
          }
        >
          Shot Record
        </button>
      </div>
    </div>
  );
}

export default Documents;
