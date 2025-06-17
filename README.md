# Cypress Automation Project 🚀

This repository contains end-to-end (E2E) UI automation tests written using [Cypress](https://www.cypress.io/) for modern web applications. The goal is to validate the UI functionality of a sample or real-world web app across different browsers.

---

## 📂 Project Structure

```
cypress/
├── e2e/              # All your test spec files
├── fixtures/         # Test data and stubs
├── support/
│   ├── commands.js   # Custom Cypress commands
│   └── e2e.js        # Global setup for Cypress
├── POM             # contains Pages as part of page object model 
.gitignore
cypress.config.js     # Cypress configuration
package.json
README.md
````

---

## 🔧 Installation

1. **Clone the repository**
 ```bash
 git clone https://github.com/Abhikpt/automationexerciseWebApp.git
 cd automationexerciseWebApp
````

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Open Cypress Test Runner**

   ```bash
   npx cypress open
   ```

---

## 🚀 How to Run Tests

### Run using Cypress UI:

```bash
npx cypress open
```

### Run in headless mode:

```bash
npx cypress run
```

### Run a specific spec file:

```bash
npx cypress run --spec cypress/e2e/sampleTest.cy.js
```

---

## ✅ Features Covered

* UI test automation for modern web apps (React, Angular, etc.)
* Page Object Model (POM) structure
* Assertions (implicit & explicit)
* XPath & CSS selectors
* Hooks and reusable functions
* Screenshots and video capturing for failed tests
* Cross-browser testing

---

## 📦 Tech Stack

* **Cypress** - E2E test framework
* **JavaScript** - Test scripting
* **Node.js / NPM** - Package management
* **Git / GitHub** - Version control

---

## 🧾 Notes

* All locators are maintained in a clean POM format.
* `cypress-xpath` plugin is used for XPath support.
* Videos and screenshots are auto-saved in failure scenarios.
* Uses `.gitignore` to keep unwanted files out of Git.

---

## 🤝 Contribution

Feel free to fork this repository and contribute via PRs or raise issues.

---

## 📄 License

This project is open-sourced under the [MIT License](LICENSE).

```


