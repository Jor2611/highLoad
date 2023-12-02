
HighLoad
========

Introduction
------------

HighLoad is a example of handling high traffic. This guide covers the setup process for running HighLoad in your local environment.

Prerequisites
-------------

Before you begin, ensure you have the following installed:

-   Node.js
-   npm (Node Package Manager)
-   PostgreSQL

Setup Instructions
------------------

### 1\. Clone the Repository

Clone the repository to your local environment:

`git clone https://github.com/Jor2611/highLoad.git`

### 2\. Install Dependencies

Navigate to the cloned directory and install the required dependencies:

`npm install`

### 3\. Environment Configuration

Create a `.env` file in the root directory of the project with the following content:
```
DB_HOST='127.0.0.1'
DB_NAME='webapp'
DB_USERNAME='postgres'
DB_PASSWORD='123456'
DEADLOCK_RETRY=5
PORT=3000`
```
Customize the values according to your environment.

### 4\. Starting the Application

Start the application using:

-   `npm start` for a standard startup.
-   `npm run start-log` (on Linux environments) to start the application and log output to `app.log`.

### 5\. Load Testing

For load testing:

-   Modify the `target` field in `load-test.yaml` with your application's address, replacing `'http://localhost:3000'`.

-   Run the load test using:

    `npm run load-test`

The default load test simulates 1 post request from 10,000 virtual users simultaneously. Adjust `load-test.yaml` for specific test scenarios.