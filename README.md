## GithubProfileSearch 🔎

GithubProfileSearch is a web application built with Angular that allows users to search for GitHub users and view their profile information and top repositories. The application fetches data from the GitHub API and provides a user-friendly interface to explore GitHub profiles.
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.8.

🌐 Live Demo: [GitHubProfileSearch](https://65940024e567f90008e46bcf--musical-dieffenbachia-0b6f0d.netlify.app/users)

## Functionality overview 🚀
General functionality:

 - Search for GitHub users by username 🔍
 - When a list item is clicked, the application navigates to a new page that displays a simple list with the user profile information, including name, followers, following, and public repositories 🕵️️
 - The application supports theming and can easily be switched between themes ☀️

## Installation ⚙️

 1. Clone the repository: https://github.com/evisha/github-profile-search.git
 2. Open the project directory in your code editor
 3. Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

## Architecture 📁

For this project I have organized files based on the feature they belong to. Each feature folder contains all the related components and other code files specific to that feature.
In this case, some of the modules and folders are empty but are used to show an example folder structure.
Folder structure is as below:
~~~
├── app
│   ├── core
│   │   ├── guards
│   │   ├── interceptors
│   │   ├── models
│   │   ├── services
│   │   ├── state
│   ├── modules
│   │   ├── auth
│   │   ├── users
│   │   │   ├── components
│   │   │   │   ├── user-details
│   │   │   │   ├── user-list
│   ├── shared
│   │   ├── animations
│   │   ├── components
│   │   │  ├── access-denied
│   │   │  ├── search-bar
│   │   │  ├── spinner
│   │   │  ├── user-card
~~~

The application uses lazy-loading to load modules dynamically.

## State management
Use of Akita as State-management library - TBD

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

