import React from "react";
import "./EditFunction.css";

function EditFunction({
  target,
  editOpen,
  EditOpen,
  handleChange,
  handleSubmit,
  userData,
}) {
  return (
    <span>
      {editOpen ? (
        <input
          type="text"
          name={target}
          onChange={handleChange}
          defaultValue={userData}
        />
      ) : (
        <span>{userData}</span>
      )}
      {editOpen ? (
        <span>
          <button
            className="submitChangeBtn"
            name={target}
            onClick={handleSubmit}
          >
            Submit
          </button>
          <button className="submitCancelBtn" name={target} onClick={EditOpen}>
            Cancel
          </button>
        </span>
      ) : (
        <button className="editNumberBtn" name={target} onClick={EditOpen}>
          Edit
        </button>
      )}
    </span>
  );
}

export default EditFunction;
