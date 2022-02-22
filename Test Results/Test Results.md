
Test Report:
Team Stallions Assignment 2

Test Case #: 1

System: Web app

Designed by: Erica Butts

Executed by: Christopher Simon, Pooja Balaji,  Preyasha Patel	

Test Case Name:

Subsystem: Log in/Sign up API

Design Date: 2/10/22

Execution Date: 2/18/22


	
	
	
Description:
Here in the Log in/ Sign up page, we are testing the GUI functions.
The GUI functions include:  
1)	Username Input
2)	Password Input
3)	Login button 
4)	Sign up button - new user to register.
5)	Sign out button
6)	Landing page 
7)	Signed in page 
8)	Signed out page
9)	Registration Form


Pre-conditions: 
Evaluate all happy/sad paths a user may encounter when traversing the GUI interface of the sign in/register/logout webpage 






Step	Action	Expected Response	Pass/Fail	Comments
1	Username input - for an existing user	Username is found in the database and login is Success! The user will be directed to the login success page. 	Pass	
2	Username input - for correct username but incorrect password	User is prompted to re-enter credentials for incorrect login	Pass	
3	Username input - for incorrect username but correct password	User is prompted to re-enter credentials for incorrect login	Pass	
4	Username input - for incorrect username and incorrect password 	Username prompted to re-	Pass	
5	Signup - for a new user	When a new user signs up - the user is added to the database and the user can login. Upon login, the user will be directed to the login Success page!	Pass	
6	Username text field input	The username input accepts alpha-numeric characters	Pass	
7	Password text field input	Password input accepts 	Pass 	
8	Sign out - user clicks on sign out button
	User is redirected to sign in/register sign up page		

9	Landing page - user visits website	User should see buttons to sign in or register on landing page	Pass	
10	Signed out page	User should see logout successful signed out and return to the login page 	Pass	
11	Sign in page 	When user credentials are verified user is prompted for successful login and to landing page for login	Pass	


Post-conditions:

Verified all html/css styles and user buttons displayed on each individual web page correctly and the system reacted to the correct status of the current user’s login. For logged in, user should be logged in, for signed out, user should be logged out, and for new users, users should be prompted to sign up. 




![image](https://user-images.githubusercontent.com/52904077/155211105-c0eeb278-f78b-4615-9568-53a258a73b1d.png)
