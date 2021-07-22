# Barter Books

## Overview

**Barter Books** A web app that will allow college students to trade their books and notes with other college students as a more affordable solution for them to be more prepare for their courses by relieving some of the financial burden. This web app is designed with mobile accessibilty first in mind then desktop and tablet, therefore all the features are legible and functional for most mobile and desktop/tablet devices. Presently, only basic features for bartering are functional, however in the future more features, like the ones in the PVMP section, may be added to this web application. 

<br>

## MVP

The **Barter Books** MVP is to meet full CRUD on the back-end and front-end for barters allowing only registered users to have full access to these features. Unregistered users will be able to view all the available barters and can only request an exchange after registering or loggin in. 

### Goals

- Allow all users to view barters that available for exchange.
- Allow user to register for an account.
- Allow user to login into their account and edit and delete their barters.
- Allow any registered user to request an exchange.
- All any registered user to contact barterer for more information.
- Full CRUD on back-end and front-end.

<br>

### Libraries and Dependencies

>List of all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Axios_ |
|   React Router   | _React-Router-DOM_ |
| Rails | _jwt,rack-cors, bcrypt, pry-rails_ |

<br>

### Client (Front End)

#### Wireframes

![Dummy Link](url)

- Mobile Landing

![Dummy Link](url)

- Mobile Barter Index

![Dummy Link](url)

- Mobile Barter Detail 

![Dummy Link](url)

- Mobile Create Barter

![Desktop Barter Index](https://www.figma.com/file/8GXDO9ps9ghyWnC795s0JQ/BarterBooks?node-id=1%3A3)

- Desktop Barter Index

![Dummy Link](url)

- Tablet Barter Detail 

#### Component Tree

![Component Tree](https://user-images.githubusercontent.com/43050919/126587410-01d3f967-f7d6-4df2-ab58-b54e9835f95c.png)


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

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add Contact Form    |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |


<br>

### Server (Back End)

#### ERD Model

> Use this section to display an image of a computer generated ERD model. You can use draw.io, Lucidchart or another ERD tool.

[ERD Sample](https://app.diagrams.net/?libs=general;uml)
<br>

***

## Post-MVP

- [ ] Sort barters by college/university name.
- [ ] Change password feature.
- [ ] Add pagination to barter index page.
- [ ] Allow user to view any open barters they have requested.
- [ ] Allow user to view any barters they have opend opened.
- [ ] Allow user to view any past exchanges.
- [ ] Allow user to edit their personal information: name, college/university name, and password.

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
