# Barter Books

## Overview

**Barter Books** A web app that will allow college students to trade their books and notes with other college students as a more affordable solution for them to be more prepare for their courses by relieving some of the financial burden. This web app is designed with mobile accessibility first in mind, then desktop and tablet, therefore all the features are legible and functional for most mobile and desktop/tablet devices. Presently, only basic features for bartering are functional, however in the future more features, like the ones in the PVMP section, may be added to this web application. 

<br>

## MVP

The **Barter Books** MVP is to meet full CRUD on the back-end and front-end for barters allowing only registered users to have full access to these features. Unregistered users will be able to view all the available barters and can only request an exchange after registering or logging in. 

### Goals

- Allow all users to view barters that available for exchange.
- Allow user to register for an account.
- Allow user to login into their account and edit and delete their barters.
- Allow any registered user to request an exchange.
- All any registered user to contact barterer for more information.
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

- Mobile Barter Index
<img src="https://user-images.githubusercontent.com/43050919/126642267-6d513b03-94ea-438f-869e-2617ad093a3a.png" width="400" height="600"/>

- Mobile Barter Detail 
<img src="https://user-images.githubusercontent.com/43050919/126642295-1c7acb4a-7799-4927-a7ba-04deb7c91171.png" width="400" height="600"/>

- Mobile Create Barter
<img src="https://user-images.githubusercontent.com/43050919/126642322-20a36986-98fe-444f-809c-8d88b6440873.png" width="400" height="600"/>

- Desktop Barter Index
<img src="https://user-images.githubusercontent.com/43050919/126642393-14279ae2-3287-49df-8c9a-15500c3159e6.png" width="900" height="600"/>

- Tablet Barter Detail 
<img src="https://user-images.githubusercontent.com/43050919/126642442-67ecb957-2c8d-43da-96e2-f16fd5983739.png" width="900" height="600"/>



#### Component Tree

[Component Tree](https://whimsical.com/barter-books-LswhcS1419S5Jz8HW7pfeQ)

![Component Tree](https://user-images.githubusercontent.com/43050919/126634979-74313add-cb69-4417-997b-da06423c059e.png)

#### Component Architecture

> The component architecture for the app will be like so:

``` structure

src
|__ assets/
      |__ images/
|__ components/
      |__ Header.jsx
      |__ Footer.jsx
      |__ Barters.jsx
      |__ BarterDetail.jsx
      |__ CreateBarter.jsx
      |__ EditBarter.jsx
      |__ Confirmation.jsx
      |__ Login.jsx
      |__ Register.jsx
      |__ Home.jsx
|__ screens/
      |__ Barters.jsx
      |__ BarterDetail.jsx
      |__ CreateBarter.jsx
      |__ EditBarter.jsx
      |__ Confirmation.jsx
      |__ Login.jsx
      |__ Register.jsx
      |__ Home.jsx
|__ services/
      |__ api-config.js
      |__ barter.js
      |__ books.js
      |__ auth.js
|__ containers/
      |__ MainCointainer.jsx
|__ styles/
      |__ Barters.css
      |__ BarterDetail.css
      |__ CreateBarter.css
      |__ EditBarter.css
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
| Barter List    |   H     |   3 hrs      |    3 hrs     |   3 hrs    |
| Barter Detail    |    H     |   3 hrs      |    3 hrs     |   3 hrs    |
| Confirmation Page    |   L     |   3 hrs      |    3 hrs     |   3 hrs    |
| User Authentication for Edit & Delete    |    H     |   3 hrs      |    3 hrs     |   3 hrs    |
| Create Barter Form    |    H     |     3 hrs      |     2 hrs     |    3 hrs    |
| Edit Barter Form   |    H     |   3 hrs      |     2 hrs     |   2 hrs    |
| Register Form   |    H     |   3 hrs      |     2 hrs     |   2 hrs    |
| Login Form   |    H     |   3 hrs      |     2 hrs     |   2 hrs    |
| Test all front-end CRUD actions    |    H     |   3 hrs      |     3 hrs     |   3 hrs    |
| Test all register & login front-end actions    |    H     |   2 hrs      |    2 hrs     |   2 hrs    |
| Style Edit & Create Forms    |    M     |   3 hrs      |    3 hrs     |   3 hrs    |
| Style Login & Register Forms    |    M     |   3 hrs      |    3 hrs     |   3 hrs    |
| Style Home/About Page    |    M     |   3 hrs      |    3 hrs     |   3 hrs    |
| Style Barter List    |   M     |   3 hrs      |    3 hrs     |   3 hrs    |
| Style Barter Detail    |    M     |   3 hrs      |    3 hrs     |   3 hrs    |
| Style Confirmation Page    |   L     |   3 hrs      |    3 hrs     |   3 hrs    |
| Test for Bugs    |   H     |   3 hrs      |    3 hrs     |   3 hrs    |
| TOTAL               |     -    |     70 hrs      |    70 hrs     |     TBD     |


<br>

### Server (Back End)

#### ERD Model

- Barter ERD Model
<img src="https://user-images.githubusercontent.com/43050919/126665351-a3d17707-e884-4316-8af0-425af629a075.png" />

<br>

***

## Post-MVP

- [ ] Sort barters by college/university name.
- [ ] Change password feature.
- [ ] Add pagination to barter index page.
- [ ] Allow user to view any open barters they have requested.
- [ ] Allow user to view any barters they have opened and approved.
- [ ] Allow user to view any past exchanges.
- [ ] Allow user to add and edit their personal information: name, college/university name, and password.

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
