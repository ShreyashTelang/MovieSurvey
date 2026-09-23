# 🎬 Movie Survey Web Application

An interactive, responsive client-side web application designed to collect, validate, and manage user movie preferences. Built with **HTML5, CSS3, and JavaScript** for a Web Technology (WT) project demonstrating core JavaScript concepts such as DOM manipulation, event handling, input validation, and data structuring using Arrays and JSON objects.

---

## 📌 Project Overview

The **Movie Survey** application allows users to submit their favourite movie genres and titles (up to 5 each) along with their personal details. The application provides immediate interactive feedback, validates input data before processing, prevents invalid submissions, and dynamically renders formatted survey cards with full update/edit functionality.

---

## ✨ Features

- **Interactive Dynamic Lists**: Add and remove favourite movie genres and titles dynamically with live counter indicators (`0/5`).
- **Comprehensive Client-Side Validation**:
  - Validates mandatory fields (Full Name, Email).
  - Enforces minimum requirements (at least 1 genre and 1 movie required).
  - Enforces boundary conditions (maximum 5 genres and 5 movies).
  - Prevents empty inputs when adding list items.
- **In-Memory Data Management**:
  - Uses **JavaScript Arrays** to manage multiple genres, movies, and submitted user records.
  - Formats survey responses as structured **JSON/JavaScript objects** with unique timestamp-based identifiers.
- **Dynamic DOM Rendering**:
  - Dynamically creates and renders user survey cards without reloading the page.
- **Survey Editing & Updating**:
  - Allows users to reload previously submitted survey entries back into the form, modify fields, and save updates seamlessly.
- **Responsive & Modern UI**:
  - Gradient backdrop with clean card styling, color-coded action buttons, and clear typography.

---

## 🛠️ Tech Stack

- **HTML5**: Semantic document structure and input forms.
- **CSS3**: Responsive flexbox layout, custom styling, gradient backgrounds, and transition effects.
- **JavaScript (ES6+)**: Event listeners, dynamic DOM manipulation, array operations, and client-side validation logic.

---

## 📁 Project Structure

```text
Movie Survey/
├── index.html     # Semantic structure and form elements
├── style.css      # Modern styling, responsive layouts, and UI themes
├── script.js      # Form validation, DOM updates, array/object manipulation
└── README.md      # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites
A modern web browser (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari, etc.). No external dependencies or build tools are required.

### Running the Application Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/ShreyashTelang/MovieSurvey.git
   ```
2. Navigate to the project directory:
   ```bash
   cd MovieSurvey
   ```
3. Open `index.html` in your favorite web browser (or use the VS Code *Live Server* extension).

---

## 📋 Academic Alignment & Requirements

This project meets the requirements for a Web Technology laboratory/coursework submission:
1. **Interactive Web Application**: Single-page application responding to user events (`click`, `submit`) without page refresh.
2. **Standard Web Technologies**: Built using pure HTML, CSS, and Vanilla JavaScript.
3. **Data Storage with Arrays and JSON**: Employs arrays (`favouriteGenres`, `favouriteMovies`, `users`) and structured JSON objects for survey records.
4. **Input Validation**: Rigorous validation before saving data to guarantee data integrity.
5. **Interactive Feedback**: Immediate alert notifications and live count trackers guide the user during input.

---

## 👤 Author

- **Shreyash Telang** - [@ShreyashTelang](https://github.com/ShreyashTelang)