## About

Skill assessment exercise for instashop.

## Installation

## Developing

## Documentation

### App initialization

The **Client** depends on the **Server**. So first start

the Server then the Client.

```sh
make start-server
# On a new terminal
make start-client
```

At Client loading time the Parse Server instance is initialized before

the first rendering. After thet the User may get redirected to the login

page if there is not an active session.


The App initialization dependency tree:


```sh

# Components
client/main.ts
client/app/app.config.ts
client/app/app.routes
client/app/app.component.ts

# Services
client/app/parse.service
client/app/auth.service

```


### The Landmarks list page

After initialization the user is redirected to the Landmarks page.

The landmarks list dependency tree:

```sh

# Components
client/app/app.component.ts
client/app/landmark-list/landmark-list
client/app/landmark/landmark.component
client/app/landmark-search/landmark-search
client/app/landmark-modal/landmark-modal

# Services
client/app/landmark.service
client/app/auth.service

# Parse Classes
client/app/LandmarkQuery.ts
client/app/Query.ts

# Interface
client/app/ILandmark.ts

```

There the user is offered the following actions:


- Login if not logged in

  By clicking the login button

- Logout if logged in

  By clicking the logout button

- Filter the list of landmarks

  By typing a search term in the search text input
  and then clicking search.

- Reset the filters

  By either clicking the refresh button

  or by clicking the search button

  with an empty search term.

5) Enlarge each landmarks thumbnail photo

  By clicking at the thumbnail photo

6) Move to each landmarks individual page

  By clicking at each landmarks Card Title.


### Individual Landmark page

The user is redirected to an individual Landmark's page from the

landmarks list page. The 'landing page' is created with the purpose to

just display the landmarks customer facing information. The

administrator may edit the information. (Although I have not actually

implemented the safeguard against allowing the user to navigate to the

edit page) (Instead an exception will be thrown if a not logged in

User tries to edit the document, which I believe is good enough for

the purposes of this assignment)

The individual Landmarks page dependency tree:


```sh

# Components
client/app/app.component.ts
client/app/landmark-details/landmark-details.component

# Services
client/app/landmark.service

# Interfaces
client/app/ILandmark

```


The user is offered the following actions:

- Edit the document

  By clicking on the edit button

- Save the document

  By clicking on the save button

- Go Back to the Individual Landmark Landing page

  By clicking the Back anchor.

- Navigate to the Landmarks list

  By clicking the Landmarks anchor.


### Login Page

The user is either redirected at the Login page at App initialization

or through the login button in the Landmarks List Page.


The Login Page dependency tree:

```sh

# Components
client/app/login/login.component

# Services
client/app/auth.service

```

The user is offered the following actions:

- Login

  By clicking the login button

- Continue as a Guest

  By clicking the continue as guest anchor



## Contact

Pavlos noulis - pavlos.noulis@gmail.commented

project link - [instashop](https://github.com/pnoulis/instashop-exercise);


