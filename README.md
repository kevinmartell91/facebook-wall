# The Facebook wall challenge


### `This is a MERN project ( MongoDB | Express | ReactJs | Node )`

The project contains two important parts: the client and the server folder; each of them is an independent project, meaning that they have their own dependencies and development dependancies.

##### `Client Folder - (ReactJs project)`
###### Installing dependancies
```console
foo@bar:~$ yarn start
```

###### Starting the project
```console
foo@bar:~$ npm start
```
###### Tip:
```console
const npm_stop_start = () => { 
    console.log(
      " Stopping and runnig a ReactJs app 
        is worth doing it when you are clueless
        of what is going on !!!!! " 
    );
}
```
##### `Server Folder - (Node | Express | MongoDB)`
This folder follows a Model and Controller structure for this full-stack application.
###### Installing dependancies
```console
foo@bar:~$ yarn start
```
###### Setting up environment variables
```console
const editTheFollowingFile = () => { 
    console.log(
      " Setting up the .env file with your DataBase credentials
        and *port* number is important, the server wil not 
        work properly, otherwise.
        is worth doing it when you are clueless
        of what is going on !!!!! " 
    );
}
```

###### Running the project
```console
foo@bar:~$ npm run dev 
```
or you can use 
```console
foo@bar:~$ npm run deploy 
```
 Either way, I would strongly recommend to you to review the package.json file.
##### Connecting to database


There is no much to says here, just be cognizant of what the portencial errors are, when it comes to establishing the connection with MongoDB using mongoose. You might see this error:

* " This MongoDB deployment does not support retryable writes. Please add retryWrites=false to your connection string. ""
##### `Deployment the MERN `
###### Heroku (deploying the back-end)
No running server on our side. Just create a free accoun in [https://signup.heroku.com](https://signup.heroku.com). Follow the instructions how to configure your environment variables (port number). Heroku, on your behalf, assings you a port number, so your app can be exposed over the internet: that would be your end-point.
##### `Rest API  `
This are some of the end-points created following Rest recommendations
###### API one entity
E.g =>  `https://facebook-wall-challenge.herokuapp.com/api/v1/users`
####
| Method      | EndPoint            | Description               |
| :---        | :----               |         :---:             |
| GET         | /api/v1/users       | Fetch all Users           |
| POST        | /api/v1/users/{id}  | Create a new User         |
| PUT         | /api/v1/posts/{id}  | Replace a Post by PostId  |


##### API two entities
E.g =>  ` https://facebook-wall-challenge.herokuapp.com/api/v1/posts/5fbc2787a263bd4abf0eb78d`

####
| Method|   EndPoint                 | Description                    |
| :---  |    :----:                  |                :---:           |
|PUT    |/api/v1/users/{id}/posts{id}|Replace a user's Post by PostId |
|DELETE |/api/v1/users/{id}/posts{id}|Delete a user's Post by PostId  |
|PATCH  |/api/v1/users/{id}/posts{id}|Update a user's Post by PostId  |


##### `Netlify (Deploying Front-End apps in a matter of seconds)`
Check this out => [https://app.netlify.com](https://app.netlify.com)
######  Generate from ReactJs app the build forder 
```console
foo@bar:~$ npm run build
```
or
```console
foo@bar:~$  react-scripts build
```

###### Create a free account in Netfly and upload the disp folder
It is as simple as that. Believe it or not, literaly, just by dragging and dropping you will be able to deploy your fron-end application.

###### Uselful resoursers
* Adding SVG background on the fly was a life-saver. By adding astonishing out-of-the-box svg backgrounds,It will make your app look nicer with a few lines of code.
 [https://www.svgbackgrounds.com/](https://www.svgbackgrounds.com/)
* Using the CDN of *Materializecss* was helpful as well as part of the development of this project.
[https://materializecss.com/](https://materializecss.com/)
* Reding official documentation also helps substantially. Go for it!! [https://redux.js.org/introduction/getting-started](https://redux.js.org/introduction/getting-started)



