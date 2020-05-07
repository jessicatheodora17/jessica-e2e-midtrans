# WEB UI Automated Test for Jessica SDET Assignment

This is a repository for jessica's SDET Position Assignment. in this notes, i will explain how to install, using, and view report.

## Requirement on Local
 - Install Node.js
 - Install yarn

## Installation Step

clone this repository into your local

```bash
git clone https://github.com/jessicatheodora17/jessica-e2e-midtrans.git
```
install using this command :
```bash
yarn install
```

## How to Run
run test without UI
```bash
yarn run test
```
how to access report from test without UI (make sure folder report exist (generated after run test))
```bash
yarn run html-report
```

run test with UI
```bash
yarn run test-ui
```

## NOTES
The test may have failed because of this following reasons : 
  - Internet Connection
  - Problem while loading
If these Problems Occur, please re run the test command