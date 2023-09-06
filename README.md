# Software Frameworks Assignment

This project was created by Harris Huntington (s5259286).

## Git

Git and GitHub were used as version control software for this project. This has allowed me to have confidence that if I make any breaking changes I have the ability to revert back to a working copy without losing too much progress.

The layout of my git repository is pretty standard and basic. I have yet to use branching as I have not required the need for it with due to the size of the features I have implemented so far, particularly because I have been working on my own, however, I may start creating branches for the second part of the assignment when more complex features are to be implemented.

My general approach to version control for this project hasn't been too strict. I have just been making sure that I commit changes semi-regularly, as well as whenever I complete anything that could be regarded as a seperate section and am ready to move onto the next section. This is provides me with plenty enough points to return too, without having to follow a strict schedule. 

I have also been uploading to github with every commit to ensure maximum saftey of the repository.

## Data Structures

Data structures are still a work in progress and are likely to change significantly with the next assignemnt and conversion to an external database.

Presently all data is stored in localStorage, initialised into the storage on every start up. There are two main data structures, the users and the groups. As well as two secondary structures, loggedInUser and currentGroup.

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

The second structure is for the **groups**. This holds all of the information about the groups in an array of groups. Currently it holds the channel data as well, however this is very likely to change for the second part of this project.
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

The third structure is the **loggedInUser**. This contains just the user data for the user who is currently logged in. It is structured the same as the first structure, **users**, however it only holds the one user, rather than many of them.

The fourth and final structure is **currentGroup**. Very similar to the **loggedInUser**, except that this is for the group. It is used to get the data for the channels and messages within. Likewise to to above, it follows the same structure as **groups**, except that it only contains the one group, rather than many of them.

## REST API

The REST API aspect of this project is still a work in progress and will be built more upon the next phase of the project. Currently because the project is using localStorage as specified in eariler criteria, there is little to comment on. When dealing with the localStorage, the `get` and `set` methods have been critical. Although basic, these methods have provided a great building block for the rest of the project and the conversion over to a more accurate representation of a RESTful API.

## Angular Architecture

This Angular application makes good use of components. It has one for each page of the application, **login**, **create-user**, **home**, **group**, and **chat**, as well as using the top-level  **app.component** for the navbar and any leftover background. These components are routed to through different button presses and triggers throughout the application, making for a seamless transistion through the whole app.

This Angular application also uses a service, called `sharedServicee`, that stores the `isLoggedIn` state which allows for the different routes to componenets to be guarded so that they can't be navigated to without the correct permissions.

`[(ngModel)]` was also used in the input boxes to be able to take the data from them so that it can be used for log in/ sign up
