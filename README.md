# User Form

## Overview

This one-page TypeScript app accepts user input and uploads the data to an API endpoint.

If your endpoint works, and the fields match, you'll be able to save the data. It has been confirmed to work with my own personal API endpoint (not included).

![upload_form_working](upload_form_working.png)

## Features

This app is written in TypeScript, in React. It shows a form where the user can enter their data, press Submit, and send it to the API. 

If the submission is successful, the user will be told 'thank you' and that the owner will be in touch. If not, the reason for the failure is given.

If you don't have an API endpoint to upload to, you can use the form and submit data, but you'll receive a message saying the API request was not successful (which is okay if all you want to do is see how it works).

To compare to similar JavaScript code in React serving the same purpose, see this [gist](https://gist.github.com/julianeon/767e32fc069d0a1568683deb4dd31fb0) and [this article](https://javascriptpage.com/make-an-email-submit-form-with-javascript) explaining it.

## How to Run

In the project directory, you can run:

### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

## Learn More

This app was created with [Create React App](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
