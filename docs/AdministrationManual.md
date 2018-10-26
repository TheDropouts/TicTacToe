# Administration manual: TicTacToe

## Softwares

* You will need a Git to be able to write commands.<br/>
You can download the latest version for desired operating system clicking on this link: [Git](https://git-scm.com/downloads)</li>

* You will need Node package manager.<br/>
You can get the latest version of Node clicking on this link: [Node.js](https://nodejs.org/en/)

## Cloning the application

The application is hosted as an open repository on github.com. <br/>
You can access it here: [TheDropouts](https://github.com/TheDropouts)<br/>
Open up git terminal and select a destination for the application, example command `cd Desktop` (if you want it located on your desktop).
After you have found a desired destination for the application type or copy this command in git terminal `git clone https://github.com/TheDropouts/TicTacToe.git`<br/>
You can also go to [TheDropouts](https://github.com/TheDropouts) and download a zipfile 
containing the application.

## Web-App

To be able to deploy and run our application you need to install npm to your git terminal/console.<br/>
You need to be located in the folder you have downloaded the game into.<br/>
Then you are able to run the following commands: <br/>
1. Type `npm install`   (This command fetches npm)
2. Type `npm test`      (This command runs tests) 
3. Type `npm run Build` (This command builds the deployment)
4. Type `npm run start` (This command runs and starts the deployment)

After you start the application it will run the application as localhost server on this url :<br/>
http://localhost:3000 <br/>

After following all the steps above you can can access the Web-App here: [TicTacToe](https://the-dropouts.herokuapp.com/)

## Testing
If you want to run unit tests you simply need to open git terminal and make sure that you are located in the application folder.<br/>
Type the following command `npm test`
