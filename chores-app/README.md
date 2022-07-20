# Bish Bash Dosh
This app is designed to help a family get their chores done and keep the peace while they are at it. A parent is able to create an account and invite co parents and children to join. Chores can be added and assigned a monetary value. They will appear for all children when they are in the 'Available' state and the first to take the chore and mark it 'done' will be submitting a request to the parent to approve the chore completion so the money can be added to their account.
This is the repository for the front end of the application, the back-end can be found here: https://github.com/coramarcu/chores-app-back-end.

## Future Development
The future of this app would see the API and front-end deployed to make them widely available. 
Related to this their would be some security adjustments; hashing of email addresses, hosting of an email address, creation of a firebase account with "localhost" unselected.
The functionality of the app would be expanded to allow the children's balances to be updates with every approved chores, and to allow the children to submit requests to cash in some of their balance IRL. 
A component would be added for the parents to give the parents an overview of each child's profile, which would be linked within 'ListOfChilren.js'.

## Technologies
This project is bootstrapped with React-create-app. 
For full functionality, an emailjs account and a firebase account will also be needed, with the settings saved in .env as below.
To make http requests, axios is used.

## Project setup
To set up this project for yourself, you will need to "git clone git@github.com:AkaMrTired/Chores-App.git"
Install the relevant dependencies with npm install.
Ensure you have an emailjs account and firebase account; set up the .env with the detail below.
To link it with the back-end, you should following instructions on https://github.com/coramarcu/chores-app-back-end.
npm start should start up the app and render it in your browser.

## .env
The following keys are contained in the .env; the email details are provided by an emailjs account, and the firebase details are provided by a firebase account:

REACT_APP_EMAIL_SERVICE_ID=
REACT_APP_EMAIL_TEMPLATE_ID=
REACT_APP_EMAIL_PUBLIC_KEY=
REACT_APP_FIREBASE_API_KEY=
REACT_APP_FIREBASE_AUTH_DOMAIN=
REACT_APP_FIREBASE_PROJECT_ID=
REACT_APP_FIREBASE_STORAGE_BUCKET=
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=
REACT_APP_FIREBASE_APP_ID=