## About

Skill assessment exercise for instashop.

Develop a 3 page application with:

- Authentication

- Read, Update, capability

- Some rudimentary Routing logic

- Filtering / search input

## Install
### Prerequisites

#### Install Microsoft Windows Subsystem for Linux (wsl)

```sh

# How to install wsl2
https://learn.microsoft.com/en-us/windows/wsl/install

# Install wsl2
wsl --install

# Set distribution wsl version to 2
wsl --set-default-version 2

# List available distros
wsl -l -v

# Ensure the default installed wsl distro is at version 2
wsl --set-version <distro name> 2
# Example
wsl --set-version Ubuntu-20.04 2

# Restart pc

```

#### Install Node

```sh

  # first install Node Version Manager (nvm)
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

  # Run this command, dont ask why
  source ~/.bashrc

  # Install node version 21.0.0
  nvm install 21.0.0

  # CHeck node is installed
  node --version

```

#### Install Make

```sh

  # On ubuntu
  sudo apt update
  sudo apt upgrade
  sudo apt install build-essential

  # Check make is installed
  make --version

```
### Download && Install dependencies

```sh

git clone git@github.com:pnoulis/instashop-exercise.git

# The parse server which this project is a dependant of
# places restrictions to the node version.
# It needs:

# >=14.21.0 < 17 || >=18 < 20

# However I wan running version 21.0.0 so It propably
# is not very strict about it.

# Anyway, considering that node does not give you any problems
# install all depnedencies

npm install

```

## Developing

### Environment

The project expects to be provided with configuration through

a .env file under the source tree root.

- DB_URI

  Database url for parse server

- APP_ID=

  Credentials for parse server

- MASTER_KEY

  Credentials for parse server

- PUBLIC_SERVER_URL

  Parse server api url

- SERVER_PORT

   Parse server port

- CLIENT_PORT

  Client port

- GMAPS_API_KEY

  Google maps api key


### Scripts / Makefile targets

The project makes use of a Makefile but one can still use the npm syntax.

However, note that they are just wrappers for make targets.


```sh

# Starts the develompent parse server
npm run start:server
# make start-server

# THe dashboard is under /dashboard
localhost/dashbord

# Starts the development client server
npm run start:client
# make start-client

# Build source in productin model
npm run build
# make build

```

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

- Pavlos noulis

  pavlos.noulis@gmail.com

  https://github.com/pnoulis

- Project link

  [instashop](https://github.com/pnoulis/instashop-exercise);

