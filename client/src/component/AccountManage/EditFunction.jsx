import React from 'react'

function EditFunction({target, editOpen, EditOpen, handleChange, handleSubmit, userData}) {
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
              <button name={target} onClick={handleSubmit}>
                Submit
              </button>
              <button name={target} onClick={EditOpen}>
                Cancel
              </button>
            </span>
          ) : (
            <button name={target} onClick={EditOpen}>
              Edit
            </button>
          )}
        </span>
    )
}

export default EditFunction
