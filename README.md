# FriendFinder
*Full Stack Friend Finder app*

## Purpose:
This app was made to learn how to use express.js and was the first full-stack web app I've made and deployed via Heroku. It is a simple questionnaire for gamers to find other people to play with based on similar responses to the questions. The survey and app itself are not so much the purpose as was the exercise of building it all and learning how to split out the various elements of the MVC.

## How it works:
The backend is handled by node.js and express.js which handles both running the web server handling the html routing and the api server handling api get and post requests. All data is stored in the friends.js file as JSON objects in a single array. The package.json file contains 2 dependencies, express and path. Bootstrap was used for the CSS framework as well as some custom styling for colors and background choices. The values from all of the choices in the form are stored as a new object that is then compared to all existing friends to perform the match.

The logic behind the matching is as follows, a GET request is performed to the API to get an array of JSON objects of all friends. A nested for loop is then used to iterate through each question score for a friend comparing it to the new friend using an absolute value of the difference. This total difference is then pushed into an array. The inner for loop is then exited and the next friend is compared to the new friend. Once this is done the array of differences is passed into the Math.min function via spreading which will give us the index of the best match in the original friend array. The name and image of this individual is then presented to the user in a modal.

The project was deployed to heroku for hosting.


## How to use:
Use is a simple survey, the user goes to the home page, clicks the survey button, inputs their name and a link to an image of themselves (both of which are required), and then chose answers to the 10 survey questions. They will then be presented with the most suitable friend match from the data currently available to the site.

## Contributors:
This project is maintained and contributed to solely by myself, Tyler Ward.