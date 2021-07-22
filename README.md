# Barter Books

## Overview

**Barter Books** A web app that will allow college students to trade their books and notes with other college students as a more affordable solution for them to be more prepare for their courses by relieving some of the financial burden. This web app is designed with mobile accessibility first in mind, then desktop and tablet, therefore all the features are legible and functional for most mobile and desktop/tablet devices. Presently, only basic features for bartering books are functional, however in the future more features, like the ones in the PVMP section, may be added to this web application. 

<br>

## MVP

The **Barter Books** MVP is to meet full CRUD on the back-end and front-end for books allowing only registered users to have full access to these features. Unregistered users will be able to view all the available books for bartering and can only request an exchange after registering or logging in. 

### Goals

- Allow all users to view books that available for exchange.
- Allow user to register for an account.
- Allow user to login into their account and edit and delete their book(s).
- Allow any registered user to request an exchange.
- Allow user to sort books by categories.
- Full CRUD on back-end and front-end.

<br>

### Libraries and Dependencies

>List of all supporting libraries and dependencies, and their role in this app.

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Axios_ |
|   React Router   | _React-Router-DOM_ |
| Rails | _jwt,rack-cors, bcrypt, pry-rails_ |

<br>

### Client (Front End)

#### Wireframes

[All Wireframes](https://www.figma.com/file/8GXDO9ps9ghyWnC795s0JQ/BarterBooks?node-id=18%3A85)

- Mobile Landing
<img src="https://user-images.githubusercontent.com/43050919/126642220-08bec1ff-e4df-4f13-b48a-ff52fdc1c80c.png" width="400" height="600" />

- Mobile Books Index
<img src="https://user-images.githubusercontent.com/43050919/126674094-75c53096-627e-4efd-812f-23270e294e50.png" width="400" height="600"/>

- Mobile Book Detail 
<img src="https://user-images.githubusercontent.com/43050919/126674175-c5196161-7518-424a-aa13-7d12f108dbb1.png" width="400" height="600"/>

- Mobile Create Book
<img src="https://user-images.githubusercontent.com/43050919/126674238-f95ee838-16a4-458e-b3e2-01564a3b889f.png" width="400" height="600"/>

- Desktop Book Index
<img src="https://user-images.githubusercontent.com/43050919/126674429-ae4b5275-8553-46f0-8105-98a61e6a3c98.png" width="900" height="600"/>

- Tablet Book Detail 
<img src="https://user-images.githubusercontent.com/43050919/126674468-68b317e0-d77f-4d16-9ccd-3cf96d89f756.png" width="700" height="900"/>



#### Component Tree

[Component Tree](https://whimsical.com/barter-books-LswhcS1419S5Jz8HW7pfeQ)

![Component Tree](https://user-images.githubusercontent.com/43050919/126674960-aabb0afc-2f8c-4114-81ab-b764f1d06afd.png)

#### Component Architecture

> The component architecture for the app will be like so:

``` structure

src
|__ assets/
      |__ images/
|__ components/
      |__ Header.jsx
      |__ Footer.jsx
      |__ Books.jsx
      |__ BookDetail.jsx
      |__ CreateBook.jsx
      |__ EditBook.jsx
      |__ Confirmation.jsx
      |__ Login.jsx
      |__ Register.jsx
      |__ Home.jsx
|__ screens/
      |__ Books.jsx
      |__ BookDetail.jsx
      |__ CreateBook.jsx
      |__ EditBook.jsx
      |__ Confirmation.jsx
      |__ Login.jsx
      |__ Register.jsx
      |__ Home.jsx
|__ services/
      |__ api-config.js
      |__ categories.js
      |__ books.js
      |__ auth.js
|__ containers/
      |__ MainCointainer.jsx
|__ styles/
      |__ Books.css
      |__ BookDetail.css
      |__ CreateBook.css
      |__ EditBook.css
      |__ Confirmation.css
      |__ Login.css
      |__ Register.css
      |__ Home.css
      |__ Header.css
      |__ Footer.css

```

#### Time Estimates


| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Install Ruby on Rails Package & Create React App    |    H     |    .5 hrs      |     .5 hrs     |    .5 hrs    |
| Create Database    |    H     |    .5 hrs      |     .5 hrs     |   .5 hrs    |
| Seed Database    |    H     |    1 hrs      |     1 hrs     |   1 hrs    |
| Create Tables, Migrations & Models    |    H     |    1 hrs      |     1 hrs     |   1 hrs    |
| Create CRUD Actions Back-End |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Test all back-end CRUD actions    |    H     |   3 hrs      |     3 hrs     |   3 hrs    |
| Test all register & login back-end actions    |    H     |   2 hrs      |    2 hrs     |   2 hrs    |
| Create API-config file & CRUD methods   |    H     |   2 hrs      |     2 hrs     |   2 hrs    |
| Create CRUD Actions Front-End |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Home/About Page    |    M     |   3 hrs      |    3 hrs     |   3 hrs    |
| Books List    |   H     |   3 hrs      |    3 hrs     |   3 hrs    |
| Book Categories   |   M     |   3 hrs      |    3 hrs     |   3 hrs    |
| Book Detail    |    H     |   3 hrs      |    3 hrs     |   3 hrs    |
| Confirmation Page    |   L     |   3 hrs      |    3 hrs     |   3 hrs    |
| User Authentication for Edit & Delete    |    H     |   3 hrs      |    3 hrs     |   3 hrs    |
| Create Book Form    |    H     |     3 hrs      |     2 hrs     |    3 hrs    |
| Edit Book Form   |    H     |   3 hrs      |     2 hrs     |   2 hrs    |
| Register Form   |    H     |   3 hrs      |     2 hrs     |   2 hrs    |
| Login Form   |    H     |   3 hrs      |     2 hrs     |   2 hrs    |
| Test all front-end CRUD actions    |    H     |   3 hrs      |     3 hrs     |   3 hrs    |
| Test all register & login front-end actions    |    H     |   2 hrs      |    2 hrs     |   2 hrs    |
| Style Edit & Create Forms    |    M     |   3 hrs      |    3 hrs     |   3 hrs    |
| Style Login & Register Forms    |    M     |   3 hrs      |    3 hrs     |   3 hrs    |
| Style Home/About Page    |    M     |   3 hrs      |    3 hrs     |   3 hrs    |
| Style Book List    |   M     |   3 hrs      |    3 hrs     |   3 hrs    |
| Style Book Detail    |    M     |   3 hrs      |    3 hrs     |   3 hrs    |
| Style Confirmation Page    |   L     |   3 hrs      |    3 hrs     |   3 hrs    |
| Test for Bugs    |   H     |   3 hrs      |    3 hrs     |   3 hrs    |
| TOTAL               |     -    |     70 hrs      |    70 hrs     |     TBD     |


<br>

### Server (Back End)

#### ERD Model

- Barter ERD Model
<img src="https://user-images.githubusercontent.com/43050919/126675942-93026fe3-cc57-4350-bcc8-672839d797e8.png" />
<br>

***

## Post-MVP

- [ ] Sort books by college/university name.
- [ ] Change password feature.
- [ ] Add pagination to books index page.
- [ ] Allow user to view any open books they have requested.
- [ ] Allow user to view any books they have opened and approved.
- [ ] Allow user to view any past exchanges.
- [ ] Allow user to add and edit their personal information: name, college/university name, and password.
- [ ] All any registered user to contact the barterer for more information.

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.
```
code_snippet
```

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
- [ ] Issue 1 
- [ ] Issue 2
