# Test Plan Document

- [Author names](#author-names)
- [Introduction](#introduction)
- [Test Items](#test-items)
- [Test Features](#test-features)
- [Expected Response](#expected-response)
- [Testing Tasks](#testing-tasks)
- [Responsibilties](#responsibilities)
- [Schedule](#schedule)
- [Screenshots](#screenshots)
- [Github Links](#github-links)
- [Email](#email)

## Authors

Christopher Simon\
Erica Butts\
Pooja Kittanakere Balaji\
Preyasha Patel

## Introduction
- We created a web application using frontend frameworks, backend frameworks and API endpoint.
    - The Front-end UI using html and css.
    - The Restful API middle tier using express with platform NodeJs.
    - The Back-end database using SQLite.

- We created different pages:
    - Dashboard
    - Login
    - Sign Up
    - New User

- We tested UX, API middle tier and database using mocha.

## Test Items
- Username Input
- Password Input
- Login button 
- Sign up button 
- Sign out button
- Landing page 
- Signed in page 
- Signed out page
- Registration Form

## Test Features
Following are the test features that we tested:
- Entering information for existing user
- Data for both correct/incorrect username and password
- Registration for a new user
- Validation on sign out button
- Redirecting to the other pages

## Expected Response
Listed below are the responses for particular items:
1. Username is found in the database and login is Success, the user will be directed to the login success page. 
2. User is prompted to re-enter credentials for incorrect login.
3. When a new user signs up, the user is added to the database and the user can login.
4. Upon login, the user will be directed to the login Success page.
5. The username input accepts alpha-numeric characters.
6. User is redirected to sign in/register sign up page.
7. User should see buttons to sign in or register on landing page.
8. User should see logout successful signed out and return to the login page. 
9. When user credentials are verified user is prompted for successful login and to landing page for login.

## Testing Tasks 
- Test plan prepared
- Executed the tests
- Manual test cases performed
- Prepared test summary report

## Responsibilities
- Each member of the team worked on each and every concepts and collaborated with each other.
- We helped the other team members for completing the project.
- We faced many of the challenges during the implementation of the application
  - Later on, all four of us tried to solve those obstacles by contributing our time and effort.

## Schedule
- It took two to three days for designing the report and other two weeks were spend for coding and testing.

## Screenshots

**User Database**
![userdb](https://user-images.githubusercontent.com/45910402/155037835-d541f47b-a7cb-46a1-9c31-d5ebfd9858b1.png)

**Welcome**
![welcome](https://user-images.githubusercontent.com/45910402/155038312-e6426a7e-2081-4438-859c-d7d668bd6f65.png)

**Login**
![username](https://user-images.githubusercontent.com/45910402/155037836-2d796934-1a97-443d-9471-a345314a0604.png)
![login](https://user-images.githubusercontent.com/45910402/155037829-d1500aaa-a402-408c-ae62-198313ccd8ec.png)

**SignUp**
![existing](https://user-images.githubusercontent.com/45910402/155037827-2dfde6c3-9dad-46fd-b814-ff6c2197c341.png)
![signup](https://user-images.githubusercontent.com/45910402/155037830-f734d8c2-f76f-4702-bf3d-1a05071735c6.png)
![sucess](https://user-images.githubusercontent.com/45910402/155037832-c5b2ae8f-0124-452d-ad67-762b961c51be.png)

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
