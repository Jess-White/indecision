## Welcome to Indecision!

Indecision is a data visualization app built on a React frontend and Rails backend. Indecision displays API data for four client-side Javascript frameworks:

React: https://github.com/facebook/react
Angular: https://github.com/angular/angular.js
Ember: https://github.com/emberjs/ember.js/
Vue: https://github.com/vuejs/vue

Indecision helps users make an informed choice by providing clear side-by-side comparisons of GitHub activity for each repo using the GitHub API:

https://docs.github.com/v3/

GitHub API Overview:

https://docs.github.com/en/free-pro-team@latest/rest/overview

GitHub API Endpoints:

https://docs.github.com/en/free-pro-team@latest/rest/overview/endpoints-available-for-github-apps

Users can view the following metrics: 

- Watchers/Stars
- Forks
- Commits
- Pull requests
- Issues

Indecision uses a JS data visualization library called Chartjs to visualize the data, since Chartjs is highly customizable and offers a number of different data visualization options. You can see documentation for Chartjs here:

https://www.chartjs.org/docs

And a tutorial for using Chartjs in React here:

https://www.educative.io/edpresso/how-to-use-chartjs-to-create-charts-in-react

...which uses this React wrapper:

https://github.com/jerairrest/react-chartjs-2

This Doughnut component provided the best side-by-side comparison:

https://www.chartjs.org/docs/latest/charts/doughnut.html

After looking through the visualizations, users can vote for the best framework. The app incorporates verification on the backend as well as a simple local storage function to restrict users to one vote per email per browser session. Users can also see a running tally of votes in final modal. 

Votes are saved on a Rails backend, the repo for which can be found here:

https://github.com/Jess-White/indecision_backend

Read on for some npm and React basic info:

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
