import React from "react";
import "./Admin.css";

const AdminPage = (props) => {
  return (
    <div>
      <div class="card-Admin">
        <header class="card-header">
          <p class="card-header-title">Walkers</p>
          <button class="card-header-icon" aria-label="more options">
            <span class="icon">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
          <div class="card-content">
            <div class="content">
            You can save, edit or delete walkers in this section
            </div>
          </div>
        </header>
        <footer class="card-footer">
          <a href="#" class="card-footer-item">
            Save
          </a>
          <a href="#" class="card-footer-item">
            Edit
          </a>
          <a href="#" class="card-footer-item">
            Delete
          </a>
        </footer>
      </div>

      <div class="card-Admin">
        <header class="card-header">
          <p class="card-header-title">Sitters</p>
          <button class="card-header-icon" aria-label="more options">
            <span class="icon">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
          <div class="card-content">
            <div class="content">
            You can save, edit or delete Sitters in this section
            </div>
          </div>
        </header>
        <footer class="card-footer">
          <a href="#" class="card-footer-item">
            Save
          </a>
          <a href="#" class="card-footer-item">
            Edit
          </a>
          <a href="#" class="card-footer-item">
            Delete
          </a>
        </footer>
      </div>
      <div class="card-Admin">
        <header class="card-header">
          <p class="card-header-title">Products</p>
          <button class="card-header-icon" aria-label="more options">
            <span class="icon">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
          <div class="card-content">
            <div class="content">
            You can save, edit or delete Products in this section
            </div>
          </div>
        </header>
        <footer class="card-footer">
          <a href="#" class="card-footer-item">
            Save
          </a>
          <a href="#" class="card-footer-item">
            Edit
          </a>
          <a href="#" class="card-footer-item">
            Delete
          </a>
        </footer>
      </div>
      <div class="card-Admin">
        <header class="card-header">
          <p class="card-header-title">Boarders</p>
          <button class="card-header-icon" aria-label="more options">
            <span class="icon">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
          <div class="card-content">
            <div class="content">
            You can save, edit or delete Boarders in this section
            </div>
          </div>
        </header>
        <footer class="card-footer">
          <a href="#" class="card-footer-item">
            Save
          </a>
          <a href="#" class="card-footer-item">
            Edit
          </a>
          <a href="#" class="card-footer-item">
            Delete
          </a>
        </footer>
      </div>
      <div class="card-Admin">
        <header class="card-header">
          <p class="card-header-title">schedule</p>
          <button class="card-header-icon" aria-label="more options">
            <span class="icon">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
          <div class="card-content">
            <div class="content">
            You can save, edit or delete Schedule in this section
            </div>
          </div>
        </header>
        <footer class="card-footer">
          <a href="#" class="card-footer-item">
            Save
          </a>
          <a href="#" class="card-footer-item">
            Edit
          </a>
          <a href="#" class="card-footer-item">
            Delete
          </a>
        </footer>
      </div>
    </div>
  );
};
export default AdminPage;
