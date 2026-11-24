// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
Tujhya navin Employee Model nusar `site.js` update karaycha.Department aani Designation donhi pahije.

* Tujhya`wwwroot/js/site.js` madhe sagla delete karun HA navin code paste kar:*
    // Employee Management - Final Validation as per Model

    Ha ghe, same code fakt English madhe:
// Employee Management - Final Validation as per Model

document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");
    if (!form) return;

    form.addEventListener("submit", function (e) {

        // Clear old errors
        document.querySelectorAll(".my-error").forEach(el => el.remove());
        let hasError = false;

        let name = document.getElementById("Name");
        let email = document.getElementById("Email");
        let dept = document.getElementById("Department");
        let desig = document.getElementById("Designation");
        let salary = document.getElementById("Salary");

        if (!name || name.value.trim().length < 3) {
            showError(name, "Name must be at least 3 characters");
            hasError = true;
        }

        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email.value.trim())) {
            showError(email, "Please enter a valid Email");
            hasError = true;
        }

        if (!dept || dept.value.trim() === "") {
            showError(dept, "Department is required");
            hasError = true;
        }

        if (!desig || desig.value.trim() === "") {
            showError(desig, "Designation is required");
            hasError = true;
        }

        if (!salary || Number(salary.value) <= 0) {
            showError(salary, "Salary must be greater than 0");
            hasError = true;
        }

        if (hasError) {
            e.preventDefault();
        }
    });

    function showError(field, msg) {
        if (!field) return;
        let span = document.createElement("span");
        span.className = "text-danger my-error d-block";
        span.style.fontSize = "13px";
        span.innerText = msg;
        field.insertAdjacentElement("afterend", span);
        field.style.borderColor = "red";
    }

    // Delete confirmation
    document.querySelectorAll("button.btn-danger, a.btn-danger").forEach(btn => {
        btn.addEventListener("click", function (e) {
            if (this.textContent.toLowerCase().includes("delete")) {
                if (!confirm("Are you sure you want to delete?")) e.preventDefault();
            }
        });
    });
});