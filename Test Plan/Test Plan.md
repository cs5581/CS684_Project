# Test Plan Document

- [Author names](#author-names)
- [Introduction](#introduction)
- [Test Items](#test-items)
- [Test Features](#test-features)
- [Expected Response](#expected-response)
- [Testing Tasks](#testing-tasks)
- [Responsibilties](#responsibilities)
- [Pass/Fail Criteria](#passfail-criteria)
- [Schedule](#schedule)
- [Github Links](#github-links)
- [Email](#email)

## Authors

Christopher Simon\
Erica Butts\
Pooja Kittanakere Balaji\
Preyasha Patel

## Introduction
- We are going to create a web application using frontend frameworks, backend frameworks and API endpoint.
    - The Front-end UI using html and css.
    - The Restful API middle tier using express with platform NodeJs.
    - The Back-end database using SQLite.

- Following are the pages for application:
    - Dashboard
    - Login
    - Sign Up
    - New User


## Approach
- UX, API middle tier and database going to be tested manually and possibly using mocha for backend testing.

## Test Items
- Username Input
- Password Input
- Login button 
- Sign up button 
- Sign out button
- Landing page
- Settings page 
- Signed in page 
- Signed out page
- Registration Form
- Profile settings
- Database Storage

## Test Features
Following are the test features to be tested:
- Entering information for existing user
- Data for both correct/incorrect username and password
- Registration for a new user
- Validation on sign out button
- Redirecting to the other pages
- User information being stored
- Database being updated
- Settings for individual users being stored

## Expected Response
Listed below are the responses that should be expected for particular items:
1. Username is found in the database and login is Success, the user will be directed to the login success page. 
2. User is prompted to re-enter credentials for incorrect login.
3. When a new user signs up, the user is added to the database and the user can login.
4. Upon login, the user will be directed to the login Success page.
5. The username input accepts alpha-numeric characters.
6. User is redirected to sign in/register sign up page.
7. User should see buttons to sign in or register on landing page.
8. User should see logout successful signed out and return to the login page. 
9. When user credentials are verified user is prompted for successful login and to landing page for login.
10. User should be able to save settings for article preference
11. 

## Testing Tasks 
- Test plan and report to be prepared
- Execution of the tests to be done
- Manual test cases should be performed

## Responsibilities
- Christopher will be working on Frontend/Backend mainly focusing on frontend
- Erica will be working on Frontend/Backend mainly focusing on backend
- Preyasha and Pooja will be documenting our test results and writing up test cases as we go.
- If we face any challenges during the implementation of the application
  - Then, all four of us will try to solve those obstacles by contributing our time and effort.

## Pass/Fail Criteria
- All the major functionality of the application should work as intended and the pass percentage of test cases should be more than 90%.
- There should not be any critical bugs.

## Schedule
- For designing the report and test cases, we will use mostly the first week and use the other weeks as necessary to update the test cases and results. For the remaining two weeks and forth will be dedicated for coding and testing.

## Github Links
[Christopher](https://github.com/cs5581)\
[Erica](https://github.com/deathloser)\
[Pooja](https://github.com/pkb94)\
[Preyasha](https://github.com/preyasha2810)

## Email
- Christopher
<cs558@njit.edu>

- Erica
<eab5@njit.edu>

- Pooja
<pk73@njit.edu>

- Preyasha
<pp54@njit.edu>
