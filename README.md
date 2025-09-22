# playwright-assessment-noventiq
Playwright-based automated test framework for NoventiQ assessment. Includes functional test scripts, page object models, and configuration for scalable and maintainable web application testing.

# Features
- Automated functional test scripts (positive & negative scenarios)
- Page Object Model (POM) for clean test structure
- Assertions to validate UI elements and messages
- Playwright configuration for headless/headed execution, screenshots, and reports

# Project Structure
```
playwright-assessment-noventiq
│
├── noventiq/               
│   └── login.test.ts
├── testcases/
│   └── login-testcase.md
├── pom/               
│   └── loginPage.ts
├── playwright.config.ts 
├── package.json
└── README.md
```
# Setup Instructions

## Clone the repository
```
git clone https://github.com/Ashishshukla776/playwright-assessment-noventiq.git
cd playwright-assessment-noventiq
```
# Install dependencies
```
npm install
npx playwright install
```
# Run tests
```
npx playwright test
```
# Run tests in UI mode
```
npx playwright test --ui
```
# Generate and view report
```
npx playwright show-report
```

npx playwright show-report
