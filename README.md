# :open_book: Book-A-Meal :rice: :fork_and_knife:

Book-A-Meal is an application that allows customers to make food orders and helps the food
vendor know what the customers want to eat.

## Features

### Required features

1. Users can create an account and log in.
2. Admin (Caterer) should be able to manage (i.e: add, modify and delete) meal options in
   the application. Examples of meal options are: Beef with rice, Beef with fries etc.
3. Admin (Caterer) should be able to setup menu for a specific day by selecting from the
   meal options available on the system.
4. Authenticated users (customers) should be able to see the menu for a specific day and
   select an option out of the menu.
5. Authenticated users (customers) should be able to change their meal choice.
6. Admin (Caterer) should be able to see the orders made by the user.
7. Admin should be able to see amount of money made by end of day.

### Extra features

1. Authenticated users (customers) should be able to see their order history.
2. Authenticated users (customers) should be able to get notifications when the menu for
   the day has been set.
3. Admin (Caterer) should be able to see order history.
4. The application should be able to host more than one caterer.

## Project Management

### Pivotal Tracker
https://www.pivotaltracker.com/n/projects/2241777

## Live UI
https://ebenezermakinde.github.io/Book-A-Meal/UI

### Technologies Used.
* NodeJS
* Express
* Babel, Eslint, Mocha, Chai.
* Postman

### API Endpoints.

Verb   | Endpoint              | Action                       |
-------|-----------------------|------------------------------|
GET    | /meals/               |Get all meal options          |
POST   | /meals/               |Add a meal option             |