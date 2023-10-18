# Software Frameworks Assignment Phase 2

This project was created by Harris Huntington (s5259286).

## Git

Git and GitHub were used as version control software for this project. This has allowed me to have confidence that if I make any breaking changes I have the ability to revert back to a working copy without losing too much progress.

The layout of my git repository is pretty standard and basic. I have not used branching as I have not required the need for it with due to the size of the features I have implemented so far, particularly because I have been working on my own.

My general approach to version control for this project hasn't been too strict. I have just been making sure that I commit changes semi-regularly, as well as whenever I complete anything that could be regarded as a seperate section and am ready to move onto the next section. This is provides me with plenty enough points to return too, without having to follow a strict schedule. 

I have also been uploading to github with every commit to my local repository to ensure maximum saftey of the repository.

## Data Structures

Data is stored in mongoDB in the following structures. This allows for good flexibility for the core of the application.

The first structure is the **users**. This holds all of the information about all of the users in an array of users.
It is structured as follows:
```
[   {id: *num*, 
    username: *string*, 
    email: *string*, 
    password: *string*, 
    roles: *arr[]*, 
    groups: *arr[ ]*},
]
```

The second structure is for the **groups**. This holds all of the information about the groups in an array of groups. It also holds the channel data so that everything can be kept together
It is structured as follows:
```
[   {id: *num*, 
    interested: *arr[]*, 
    channels: [
        {channel1: 
            [{userA: *string*}, 
            {userB: *string*}
            ]
        },
    ]},
]
```

The third structure is the **loggedInUser**. This contains just the user data for the user who is currently logged in. It is structured the same as the first structure, **users**, however it only holds the one user, rather than many of them. This is stored in local storage for ease of access as it is just a tempory store while the user is logged in.

The fourth and final structure is **currentGroup**. Very similar to the **loggedInUser**, except that this is for the group. It is used to get the data for the channels and messages within. Likewise to to above, it follows the same structure as **groups**, except that it only contains the one group, rather than many of them.

## REST API

This application implements a REST API. The angular front end communicates with the Node.js server using a REST API, as well as using services to help those communicate. It does this for all of the functions - to be able to communicate with the mongodb database, to use sockets, as well as for the image functionality. The API's are listed below, with the services in the next section.
**REST API's**
- createchannel: creates a new channel when requested
- creategroup: creates a new group when requested
- createuser: creates a new user when requested
- deletegroup: deletes a specific group when requested
- deleteuser: deletes a specific user when requested
- findusers: finds all of the users when requested
- getgroups: gets all of the groups when requested
- login: logs the user in when requested
- setgrouptouser: gives the user a new group when one is created or added
- uploadimg: handles uploading the image to the server

## Angular Architecture

This Angular application makes good use of components. It has one for each page of the application, **login**, **create-user**, **home**, **group**, and **chat**, as well as using the top-level  **app.component** for the navbar and any leftover background. These components are routed to through different button presses and triggers throughout the application, making for a seamless transistion through the whole app.

This Angular application also uses multiple services, the first called `sharedService`, that stores the `isLoggedIn` state which allows for the different routes to componenets to be guarded so that they can't be navigated to without the correct permissions. Second is the `socketService`. This manages the socket and chat implementation by allowing routes for initialising the socket as well as sending and recieving messages. There is an `imgUpload` service as well that handles the connections for uploading any images. Finally is the `dataService`, which provides for all of the connection between the REST API's provided through Node.js and mongodb. The Services are listed in more detail below.

`[(ngModel)]` was also used in the input boxes to be able to take the data from them so that it can be used for log in/sign up

**Services**
- shared.service: general purpose service
  - holds the logged in value
- socket.service: service for interacting with sockets
  - initialise the socket
  - send message
  - recieve message
- data.service: service for communicating with mongodb
  - findUsers
  - loginUsers
  - deleteUsers
  - createUsers
  - createGroup
  - getGroup
  - setGroupToUser
  - deleteGroup
- imgupload.service: service for uploading images
  - imgupload
