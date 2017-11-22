# Foursquare API App
This web app shows a list of places around user based on her/his location. The working demo can be found at [https://komlew.github.io/foursquare/](https://komlew.github.io/foursquare/).

![Screenshot of the app](https://komlew.github.io/foursquare/screenshot.png)

## Functionality

When user first opens the app it renders overview page. Overview contains multiple filters to specify the search (only location filed at the moment), list of the search results (venues) and a map with a list of markers. Each marker on the map represents one venue. User is able to view the details of the venue by clicking on the marker (related venue is going to be highlighted). Also by clicking on the venue user will be able to see where it's located (related marker will be animated).

## Solutions

This app is build with React, React Router, Redux, Redux Saga, Flow, Prettier and ESLint. It's using two public API: [Foursquare Venues Explore](https://developer.foursquare.com/docs/api/venues/explore) to fetch the data and [Google Maps](https://developers.google.com/maps/documentation/javascript/) to render venues based on provided coordinates.

If the app is used over https:// user is able to request current position based on browser geolocation API. If it's not supported or user didn't allow using geolocation the app asks to enter location manually.

The app has partially responsive (flexible) interface, however there is no font size or composition adjustments for smaller screens.

## Limitations

At the current state there is no UI for filters. They'll be added in the next release. Also the app isn't covered by unit tests or UI tests. However the app is build with Flow (takes care of static analysis). Current Flow coverage is 93%.

The app is tested on desktop device using the latest version of Google Chrome and Firefox. Mobile and tablet support wasn't tested.

## Instalation

```bash
# to get the source code on your local machine:
git clone git@github.com:komlew/foursquare.git
cd foursquare/

# to install dependencies
npm install

# to run code localy (check http://localhost:3000/)
npm start

# to build minified javascript bundle
npm run build

# to run static analysis
npm run flow-typed
npm run flow
npm run eslint

# to check the Flow coverage
npm run flow-report
```