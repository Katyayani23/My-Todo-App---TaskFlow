# My-Todo-App---TaskFlow


# 📝 TaskFlow - Personal Productivity Todo App

**TaskFlow** is a responsive, browser-based Todo application built using **HTML, CSS, and JavaScript**. It allows users to create, manage, and organize their tasks effectively. 
This project was developed following the assignment guidelines provided by **Interview Kickstart**, and expands on them with real-world features such as due dates, avatar customization, 
and task status tracking — all managed using **localStorage** (no backend required).

---

## Features

### 1. User Verification
- On first visit, users must register by entering their **Full Name** and **Date of Birth**.
- Minimum age requirement is **over 10 years** to continue else show **Error**

### 2. Task Categories (Tabs)
- Tasks are organized into three tabs:
  - **Todo**
  - **Completed**
  - **Archived**
- Users can **switch** between tabs and **move tasks** across them freely.
- On first visit to app.html, **Dummy tasks** are integrated using **DummyJSON API**. 

### 3. Add Tasks with Due Dates
- While adding a new task in the **Todo** tab, users can set a **due date**.
- Due dates are displayed alongside tasks in the Todo list only.
- When a task is **moved to Completed or Archived**, its due date is hidden.
- If the task is moved **back to Todo**, the due date will reappear automatically.

### 4. Overdue Task Highlighting
- Tasks whose **due date has passed** are automatically marked as **overdue**.
- These tasks are visually highlighted with a **red border and red text** in the Todo tab for easy identification.

### 5. Avatar Support with LocalStorage
- Upon login, a **default avatar** (initials-based) is generated using the **UI Avatars API**.
- Users can **click on the avatar** to upload a **custom image**.
- The uploaded avatar image is stored locally using `localStorage` and persists between sessions.

### 6. Responsive UI
- Fully responsive layout for **mobile**, **tablet**, and **desktop**.
- UI adjusts cleanly on small screens with stacked layouts and accessible controls.

---

## Technologies Used

- HTML5
- CSS3
- JavaScript
- UI Avatars API
- LocalStorage (for data persistence)

---

## Project Structure
- index.html    --> Login Page
- app.html      --> Main Todo Interface
- styles.css    --> Shared Stylesheet (for both index and app HTML file)
- index.js      --> Login & Validation Logic (JS for Login Page)
- app.js        --> Task App Functionality (JS for Main Todo Interface)
- README.md     --> Project Summary



