import React from "react";
import "./Admin.css";

const AdminPage = (props) => {
  return (
    <div>
      <div className="card-Admin">
        <header className="card-header">
          <p className="card-header-title">Walkers</p>
          <button className="card-header-icon" aria-label="more options">
            <span className="icon">
              <i className="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
          <div className="card-content">
            <div className="content">
              You can save, edit or delete walkers in this section
            </div>
          </div>
        </header>
        <footer className="card-footer">
          <a href="/" className="card-footer-item">
            Save
          </a>
          <a href="/" className="card-footer-item">
            Edit
          </a>
          <a href="/" className="card-footer-item">
            Delete
          </a>
        </footer>
      </div>

      <div className="card-Admin">
        <header className="card-header">
          <p className="card-header-title">Sitters</p>
          <button className="card-header-icon" aria-label="more options">
            <span className="icon">
              <i className="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
          <div className="card-content">
            <div className="content">
              You can save, edit or delete Sitters in this section
            </div>
          </div>
        </header>
        <footer className="card-footer">
          <a href="/" className="card-footer-item">
            Save
          </a>
          <a href="/" className="card-footer-item">
            Edit
          </a>
          <a href="/" className="card-footer-item">
            Delete
          </a>
        </footer>
      </div>
      <div className="card-Admin">
        <header className="card-header">
          <p className="card-header-title">Products</p>
          <button className="card-header-icon" aria-label="more options">
            <span className="icon">
              <i className="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
          <div className="card-content">
            <div className="content">
              You can save, edit or delete Products in this section
            </div>
          </div>
        </header>
        <footer className="card-footer">
          <a href="/" className="card-footer-item">
            Save
          </a>
          <a href="/" className="card-footer-item">
            Edit
          </a>
          <a href="/" className="card-footer-item">
            Delete
          </a>
        </footer>
      </div>
      <div className="card-Admin">
        <header className="card-header">
          <p className="card-header-title">Boarders</p>
          <button className="card-header-icon" aria-label="more options">
            <span className="icon">
              <i className="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
          <div className="card-content">
            <div className="content">
              You can save, edit or delete Boarders in this section
            </div>
          </div>
        </header>
        <footer className="card-footer">
          <a href="/" className="card-footer-item">
            Save
          </a>
          <a href="/" className="card-footer-item">
            Edit
          </a>
          <a href="/" className="card-footer-item">
            Delete
          </a>
        </footer>
      </div>
      <div className="card-Admin">
        <header className="card-header">
          <p className="card-header-title">schedule</p>
          <button className="card-header-icon" aria-label="more options">
            <span className="icon">
              <i className="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
          <div className="card-content">
            <div className="content">
              You can save, edit or delete Schedule in this section
            </div>
          </div>
        </header>
        <footer className="card-footer">
          <a href="/" className="card-footer-item">
            Save
          </a>
          <a href="/" className="card-footer-item">
            Edit
          </a>
          <a href="/" className="card-footer-item">
            Delete
          </a>
        </footer>
      </div>
    </div>
  );
};
export default AdminPage;
