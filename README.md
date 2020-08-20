# Bewegen - Fitness App

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)

## General Info
This project was a semester-long assignment for my Web Development class, instructed by Rabbi Moshe Plotkin.
This fitness app was inspired by my interest in German culture; the themes comes from Germans' obsession with hiking.

The app has three main features - a profile page, exercise routines, and a social media section.
A user can update personal information and goals accordingly; a table of recent exercises is present.
The exercise routine pages have preset exercises to choose from, but admins can add/delete routines.
The Open WeatherAPI was used for users to check the weather, and components consisting of timers are available to track progress between sets or resting intervals.
A social media page resembling Twitter's design interface was implemented allowing users to post and comment on each other's post.
	
## Technologies
Project is created with:
* VueJS
* Bulma
* Express & NodeJS
	
## Setup
The project was built through VueCLI; below is the standard setup instructions provided by the Vue documentation.
```
npm install
```
### Front-end & Vue

#### Go into the client directory
```
cd client
```
#### Compiles and hot-reloads for development
```
npm run serve
```
#### Compiles and minifies for production
```
npm run build
```
### Back-end & Express
Server exist in the root directory
```
npm run start
```
Hot-reload the server using Nodemon
```
npm run dev
```
---
### Vue Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).