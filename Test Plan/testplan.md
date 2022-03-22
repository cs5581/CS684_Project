# Test Plan 

- [Introduction](#introduction)
  - [Team Members](#team-members)
  - [Project Name](#project-name)
  - [Project Description](#project-description)
- [Test Items](#test-items)
- [Test Features](#test-features)
- [Approach](#approach)
  - [Unit Testing](#unit-testing)
  - [Integration Testing](#integration-testing)
  - [System Testing](#system-testing)
- [Pass/Fail Criteria](#passfail-criteria)
- [Testing Tasks](#testing-tasks)
- [Responsibilities](#responsibilities)
- [Schedule](#schedule)

## Introduction

The Test Plan should be created to help the project's team members communicate more effectively. It specifies the procedures and methodologies that will be used during the application's testing phase. It will include project description, test phases, test responsibilities, pass/fail criteria, approach, and important schedule milestones.

  ### Team Members
  - Erica Butts
  - Christopher Simon
  - Pooja Kittanakere Balaji
  - Preyasha Patel
  
  ### Project Name
  - CS684: News Feed WebApp

  ### Project Description
  - This is web application and it is about News Feed.
  - This application is designed for Sprint 2. 
  - This is descriptive document called test plan which includes details about the planning of the Sprint 2. 
  - The overall objective of this sprint to have users sign up/sign in to our website and view articles they are interested in.
  - Users will also be able to save their settings so they view thier preferred articles on the dashboard

## Test Items
- Sign Up 
- Login 
- Sign Out
- Landing Page
- Settings Page
- Database Storage

## Test Features
  ### Sign Up page
  - Implement a form that will sign in a user
  - The form shall use a textbox to collect a user name
  - The user name shall be required
  - The form shall use a textbox to collect a password
  - The password shall be required
  - The form shall use a textbox to collect a confirmation password
  - The confirmation password shall be required
  - The form shall use a button to submit the form
  - The user name shall be a string at least 8 character long
  - The user name shall not include any spaces
  - The UX shall automatically trim leading and trailing spaces
  - The password shall not include any spaces
  - The password shall be at least 8 characters long
  - The UX shall automatically trim leading and trailing spaces
  - The password must contain at least one upper case letter
  - The password must contain at least one lower case letter
  - The password must contain at least one character that is not a letter
  - When the form is correctly filled out and submitted, navigate to the Landing Page as signed in
  - When an incorrect entry is made, display an appropriate message
  
  ### Login Page
  - Implement a form that will sign in a user
  - The form shall use a textbox to collect a user name
  - The user name shall be required
  - The form shall use a textbox to collect a password
  - The password shall be required
  - The form shall use a button to submit the form
  - When a correct combination of user id and password have been submitted, navigate to the Landing Page as signed in
  - When an incorrect combination of user id and password have been submitted, display an appropriate message
  
  ### Landing Page
  - When not signed in, the landing page shall display a list of articles from the NewsAPI "General" category
  - The landing page shall have a link/button to refresh the list of articles
  - When signed in, the landing page shall display a link/button to open a Settings page
  
  ### Settings Page
  - Implement a form that will save the user’s preferences
  - Allow the user to choose one or more of these categories
  - The form shall use a button, link, or image to submit 
  - There shall be at least one item selected
  - There shall be a button, link, or image to cancel the changes
  - When the user clicks Ok or Cancel, the app displays the landing page

## Approach

  ### Unit Testing
  ### Integration Testing
  ### System Testing
  
## Pass/Fail Criteria
- All the major functionality of the application should work as intended and the pass percentage of test cases should be more than 90%.
- Each and every test case will have pass/fail criteria.
- We regard a scenario under test to be Pass if the expected criteria are met, and Fail if they are not.
- There should not be any critical bugs.

## Testing Tasks
- Test plan and report to be prepared.
- Execution of the tests to be done.
- Manual test cases as well as unit test cases using TDD should be performed.

## Responsibilities
- Christopher will be working on Frontend/Backend mainly focusing on frontend
- Erica will be working on Frontend/Backend mainly focusing on backend
- Preyasha and Pooja will be documenting our test results and writing up test cases as we go.
- If we face any challenges during the implementation of the application
  - Then, all four of us will try to solve those obstacles by contributing our time and effort.

## Schedule

- For designing the report and test cases, we will use mostly the first week and use the other weeks as necessary to update the test cases and results. For the remaining two weeks and forth will be dedicated for coding and testing.
