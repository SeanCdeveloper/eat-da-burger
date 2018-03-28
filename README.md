# [eat-da-burger](https://eat-da-burger-maddie.herokuapp.com/burgers)
## Overview
In this assignment, you'll create a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM (yum!). Be sure to follow the MVC design pattern; use Node and MySQL to query and route data in your app, and Handlebars to generate your HTML.
## Dependencies
* body-parser
* dotenv
* express
* express-handlebars
* method-override
* mysql
## Installation
### Install Locally
```
git clone https://github.com/maddiedeming/eat-da-burger.git
npm install
```
### Setup Database
```
mysql -u [Your MySQL Username] -p
[Your MySQL Password]
\. \db\schema.sql
\. \db\seeds.sql
\q
```
### .env File
1. Create a new file and save as ".env" in the root directory.
2. Copy and paste the following into the .env file:

    DB_HOST=localhost

    DB_USER=root

    DB_PASS=password
3. Edit any of the values above to coordinate with your MySQL Database.
### Command
`node server.js`
## Requirements
### App Setup
- [x] Create a GitHub repo called `burger` and clone it to your computer.
- [x] Make a `package.json` file by running `npm init` from the command line.
- [x] Install the Express npm package: `npm install express`.
- [x] Create a `server.js` file.
- [x] Install the Handlebars npm package: `npm install express-handlebars`.
- [x] Install the body-parser npm package: `npm install body-parser`.
- [x] Install MySQL npm package: `npm install mysql`.
- [x] Require the following npm packages inside of the `server.js` file:
  - [x] express
  - [x] body-parser
### DB Setup
- [x] Inside your `burger` directory, create a folder named `db`.
- [x] In the `db` folder, create a file named `schema.sql`.
- [x] Write SQL queries this file that do the following:
  - [x] Create the `burgers_db`
  - [x] Switch to or use the `burgers_db`
  - [x] Create a `burgers` table with these fields:
    - [x] `ID` (Unique ID for each Burger)
    - [x] `BURGER_NAME` (Name of Burger)
    - [x] `DEVOURED` (Indicates whether Burger is Devoured or not)
- [x] Still in the `db` folder, create a `seeds.sql` file. 
- [x] In this file, write insert queries to populate the `burgers` table with at least three entries.
- [x] Run the `schema.sql` and `seeds.sql` files into the mysql server from the command line.
### Config Setup
- [x] Inside your `burger` directory, create a folder named `config`.
- [x] Create a `connection.js` file inside the `config` directory.
- [x] Inside the `connection.js` file, setup the code to connect Node to MySQL.
- [x] Export the connection.
- [x] Create an `orm.js` file inside the `config` directory.
- [x] Import (require) `connection.js` into `orm.js`.
- [x] In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers:
  - [x] `selectAll()`
  - [x] `insertOne()`
  - [x] `updateOne()`
- [x] Export the `ORM` object in `module.exports`.
### Model setup
- [x] Inside your `burger` directory, create a folder named `models`.
- [x] In `models`, make a `burger.js` file.
- [x] Inside `burger.js`, import `orm.js` into `burger.js`.
- [x] Inside` burger.js`, create the code that will call the `ORM` functions using burger specific input for the ORM.
- [x] Export at the end of the `burger.js` file.
### Controller setup
- [x] Inside your `burger` directory, create a folder named `controllers`.
- [x] In `controllers`, create the `burgers_controller.js` file.
- [x] Inside the `burgers_controller.js` file, import the following:
  - [x] `Express`
  - [x] `burger.js`
- [x] Create the router for the app, and export the router at the end of your file.
### View setup
- [x] Inside your `burger` directory, create a folder named `views`.
- [x] Create the `index.handlebars` file inside `views` directory.
- [x] Create the `layouts` directory inside `views` directory.
- [x] Create the `main.handlebars` file inside `layouts` directory.
- [x] Setup the `main.handlebars` file so it's able to be used by Handlebars.
- [x] Setup the `index.handlebars` to have the template that Handlebars can render onto.
- [x] Create a button in `index.handlebars` that will submit the user input into the database.
### Directory structure
- [x] All the recommended files and directories from the steps above should look like the following structure:
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   ├── assets
│   │   ├── css
│   │   │   └── burger_style.css
│   │   └── img
│   │       └── burger.png
│   └── test.html
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars