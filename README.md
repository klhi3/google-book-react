# Book Search Engine

This application is driven by data and user demands using MERN.
Google Books API search engine built with a RESTful API, and refactor it to be a GraphQL API built with Apollo Server.

## Features

1. Set up an Apollo Server to use GraphQL queries and mutations to fetch and modify data, replacing the existing RESTful API.

2. Modify the existing authentication middleware so that it works in the context of a GraphQL API.

3. Create an Apollo Provider so that requests can communicate with an Apollo Server.

4. Deploy the application to Heroku with a MongoDB database using MongoDB Atlas: walkthrough for instructions.


## Criteria

```md
1. to search for new books to read, keeping a list of books to purchase
2. load the search engine for a book search engine
3. present with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
4. To click on the Search for Books menu option, it is presented with an input field to search for books and a submit button
5. To not logged in and enter a search term in the input field and click the submit button, it is presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site
6. To click on the Login/Signup menu option, a modal appears on the screen with a toggle between the option to log in or sign up
7. the toggle is set to Signup, it is presented with three inputs for a username, an email address, and a password, and a signup button
8. the toggle is set to Login, it is presented with two inputs for an email address and a password and login button
9. To enter a valid email address and create a password and click on the signup button, the user account is created and I am logged in to the site
10. To enter my account’s email address and password and click on the login button, the modal closes and I am logged in to the site
11. To be logged in to the site, the menu options change to Search for Books, an option to see my saved books, and Logout
12. To be logged in and enter a search term in the input field and click the submit button, it is presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account
13. To click on the Save button on a book, that book’s information is saved to my account
14. To click on the option to see my saved books, it is presented with all of the books that have saved to user account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from user account
15. To click on the Remove button on a book, that book is deleted from my saved books list
16. To click on the Logout button, it is logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button 

```

## Diploy

* source in [github](https://github.com/klhi3/google-book-react)
* deploy [heroku]()

1. user types a search term 
./assets/images/page.gif


2. user save the books by clicking "Save this book!" under each result
./assets/images/page1.gif

3. A user can view their saved books on a separate page

   
### Back-End Specifications

You’ll need to complete the following tasks in each of these back-end files:

* `server.js`: implement the Apollo Server and apply it to the Express server as middleware.

* `auth.js`: update the auth middleware function to work with the GraphQL API.

* `Schemas` directory:
	* `index.js`: Export typeDefs and resolvers.
	* `resolvers.js`: Define the query and mutation functionality to work with the Mongoose models.
	* `typeDefs.js`: Define the necessary `Query` and `Mutation` types:
		* `Query` type:
			* `me`: Which returns a `User` type.
		* `Mutation` type:
			* `login`: Accepts an email and password as parameters; returns an `Auth` type.
			* `addUser`: Accepts a username, email, and password as parameters; returns an `Auth` type.
			* `saveBook`: Accepts a book author's array, description, title, bookId, image, and link as parameters; returns a `User` type. 
			* `removeBook`: Accepts a book's `bookId` as a parameter; returns a `User` type.			
		* `User` type:
			* `_id`
			* `username`
			* `email`
			* `bookCount`
			* `savedBooks` [Book]
		* `Book` type:
			* `bookId` (Google's Book API.)
			* `authors` [String]
			* `description`
			* `title`
			* `image`
			* `link`
		* `Auth` type:
			* `token`
			* `user` : User
   

### Front-End Specifications

* `queries.js`: the query `GET_ME`, which will execute the `me` query set up using Apollo Server.

* `mutations.js`:
	* `LOGIN_USER` will execute the `loginUser` mutation set up using Apollo Server.
	* `ADD_USER` will execute the `addUser` mutation.
	* `SAVE_BOOK` will execute the `saveBook` mutation.
	* `REMOVE_BOOK` will execute the `removeBook` mutation.

* `App.js`: Create an Apollo Provider to make every request work with the Apollo Server.
	
* `SearchBooks.js`:
	* Use the Apollo `useMutation()` Hook to execute the `SAVE_BOOK` mutation in the `handleSaveBook()` function instead of the `saveBook()` function imported from the `API` file.
	* keep the logic for saving the book's ID to state in the `try...catch` block! 

* `SavedBooks.js`:
	* Remove the `useEffect()` Hook that sets the state for `UserData`.
	* Instead, use the `useQuery()` Hook to execute the `GET_ME` query on load and save it to a variable named `userData`.
	* Use the `useMutation()` Hook to execute the `REMOVE_BOOK` mutation in the `handleDeleteBook()` function instead of the `deleteBook()` function that's imported from `API` file. (keep the `removeBookId()` function)

* `SignupForm.js`: Replace the `addUser()` functionality imported from the `API` file with the `ADD_USER` mutation functionality.

* `LoginForm.js`: Replace the `loginUser()` functionality imported from the `API` file with the `LOGIN_USER` mutation functionality.

   
## links

* [Deploy with Heroku and MongoDB Atlas](https://coding-boot-camp.github.io/full-stack/mongodb/deploy-with-heroku-and-mongodb-atlas) 

---