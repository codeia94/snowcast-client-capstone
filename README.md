# Project Title
SnowCast

## Overview

Be In-The-Know with Snowfall forecast.

### Problem

For enthusiasts of winter sports like skiing and snowboarding, preparing for a trip to ski resorts involves checking snowfall and weather forecasts to ensure optimal conditions. Currently, this process is cumbersome as it requires visiting multiple ski resort websites individually. Each of these websites may have different layouts and functionalities, making it a time-consuming and often frustrating task to gather all the necessary information. This disjointed approach can lead to missed opportunities for the best snow conditions and unnecessarily complicated trip planning. SnowCast aims to eliminate this redundancy and streamline the information gathering process by providing a centralized platform for accurate and comprehensive snowfall forecasts.

### User Profile


### Features

- As a user, I want to be able to quickly navigate through different ski resorts / mountain of my choice
- As a user, I want to be able to check snowfall forecast and weather forecast of any given ski resorts / mountain.
- As a user, I want to be able to check future forecast up to 2-7 days to get the most optimum weather conditions. 

## Implementation

### Tech Stack

- React
- Express
- Client libraries: 
    - react
    - react-router
    - axios
- Server libraries:
    - express

### APIs

List any external sources of data that will be used in your app.

### Sitemap

- Province page (List of province)
- Ski resort lsit page (List of ski resorts/mountain of chosen provice)
- Weather forecast page (Details of weather forecast of chosen ski resort/mountain)

### Mockups

#### Province Page
![](province.jpeg)

#### Mountain list page
![](mountainlist.jpeg)

#### Mountain details page
![](mountaindetails.jpeg)



### Data

Since the API i used will not be able to list down ski resports / mountain, I will integrating the api data into the database, and choose up to 5 list of mountains and hard-code them in the mean time.

### Endpoints


**GET /mountains**

- Get list of mountains / ski resorts.

Parameters:
- q: city, town name / postal code

Response:
```
{
  "data": [
    {
      "id": 1,
      "name": "Whistler Blackcomb",
      "latitude": 50.1163,
      "longitude": -122.9574,
      "elevation": 2181, // in meters
      "snowReport": {
        "lastSnowfall": "2024-04-01",
        "snowDepth": "120cm"
      },
      "facilities": {
        "skiLifts": 23,
        "restaurants": 15
      }
    },
    {
      "id": 2,
      "name": "Vail",
      "latitude": 39.6403,
      "longitude": -106.3742,
      "elevation": 2457, // in meters
      "snowReport": {
        "lastSnowfall": "2024-03-28",
        "snowDepth": "105cm"
      },
		}
	]
}
```


**GET /mountains/:id**

- Get mountain/ski resort by id

Parameters:
- id: Ski resort id as number

```
{
  "data": {
    "id": 1,
    "name": "Whistler Blackcomb",
    "latitude": 50.1163,
    "longitude": -122.9574,
    "elevation": 2181, // in meters
    "description": "Whistler Blackcomb is a major ski resort located in British Columbia, Canada, by far the largest ski resort in North America.",
    "snowReport": {
      "lastSnowfall": "2024-04-01",
      "snowDepth": "120cm"
    },
    "facilities": {
      "skiLifts": 23,
      "restaurants": 15,
      "hotels": 12
    },
    "weatherForecast": [
      {
        "date": "2024-04-20",
        "highTemp": -1,
        "lowTemp": -10,
        "condition": "Light snow",
        "snowfall": "5cm"
      },
      {
        "date": "2024-04-21",
        "highTemp": 2,
        "lowTemp": -8,
        "condition": "Cloudy",
        "snowfall": "3cm"
      }
    ],
    "openingHours": "08:00 AM - 05:00 PM during season",
    "contactInfo": {
      "phone": "+1 604-932-3434",
      "website": "https://www.whistlerblackcomb.com"
    }
  },
}
```

### Auth

It does not have login information page at the moment

## Roadmap

- Create client
    - react project with routes and boilerplate pages

- Create server
    - express project with routing, with placeholder 200 responses

- Gather 3-5 sample ski reports or mountains for two different provice

- Create migrations and seeds for ski resorts data

- Feature: Home page

- Feature: List mountains from given province
	- Implement list mountains up to 5 
	- create GET /mountains endpoint

- Feature: Mountain detail page
	- Show database of given api with parameters of given mountain
	- create GET /mountains/:id endpoint
	

- Fix bug

- DEMO DAY


## Nice-to-haves

- Integrate Google Maps / Places
	- Allow users to effectively show navigation to given ski resort
- Login page
	- Allow users to create account and save favourite ski resorts
- List of countries page before redirected into Province page
	- Allow users to select ski resorts worldwide depending on where they choose to go
- Implement JWT tokens
	- Server: Update expected requests / responses on protected endpoints
	- Client: Store JWT in local storage, include JWT on axios calls
- Add ski resort slope trail maps, live cam feeds, chair status.

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

