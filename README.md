# Reads
## Project Description 
Reads is a front-end site that allows users to browse NYT Best Sellers and add them to their own Reading list. Users can track their progress through the book and add reviews and ratings. Users can also search the Open Library Database for additional titles to add to their list. The app uses the New York Times API to list the best-sellers in each of the seven NYT book-type featured lists. Selecting a book on the list takes the user to a more detailed page view that gives the user a short summary of the book and book details, such as author, cover, and isbns. 

Featured Lists are as follows : (Hardcover-Fiction, Hardcover-Non-fiction. Paperback Trade Fiction, Paperback Non-Fiction, Combined E-Book & Print Fiction, Combined E-Book & Print Non-fiction, Advice, How-To, Misc)

## Motivation 
I am an avid reader and love using my local library to support their mission as well as their authors. This site not only allows users to be exposed to trending titles, but also allows them to find books that they can then go and checkout at the OpenLibrary page, hence, supporting the hard work OpenLibrary does for the literary community!

## Link To Deployed App: 
https://bibireads.netlify.app

## Tech Frame Used
- Built with React v17.0

## Features
- Browse the NYT Best Sellers Section.
- Gain additional details of each book on select.
- Browse millions of records stored with Open Library.
- Add books to MyReads and update progress, add reviews, and ratings as you finish them!
- Bookmarks allow users to track their progress through their books by submitting their current thoughts and pages read.

## Installation Instructions
Note: This app was created using Visual Studio Code Version 1.60.1. 
Fork and clone the repo using either SSH or HTTPS in a directory of your choice.

In terminal:
```
$ git clone [SSH/HTTPS KEY]
```
This is a react app and will require that relevant dependencies are downloaded. Move into the repo directory (named react-reads)

```
$ cd ./react-reads
````
and run npm install to download relevant dependencies:

````
$ npm install
```
Once dependencies are installed, open the app in your IDE of choice (this example uses Visual Studio Code terminal command). Then start the app with 'npm start': 

```
$ code . 
$ npm start
```
To view main files, open the src directory. App.js contains the main code for the app and relevant components can be found in the components folder. 


## API Usage Example 
> NYT API link
https://developer.nytimes.com/docs/books-product/1/overview

- Note: API Key is required for usage and user must AUTHORIZE target API (in this case it was the NYT Books API). Go to the link provided above and create an account with the NYT API to gain access to your unique API key. Make sure to authorize your local app in order to gain functionality.

EXAMPLE: 
Example Call for best-selling hard-cover fiction books for the week of 09/01/2021.

"https://api.nytimes.com/svc/books/v3/lists.json?list=hardcover-fiction&bestsellers-date=2021-09-01&api-key=[MY_API_KEY]"

> Open Library API Link 
https://openlibrary.org/developers
- Note: No API key required. Calls are done with formatted https urls that include '.json' and the required parameters.

EXAMPLE: 
Example call for a specific book using the isbn: 

https://openlibrary.org/isbn/9780140328721.json

### Example Data Response: NYT


### API Res For Book Details: (Billy Summers by Stephen King) 

```json
{
  "status": "OK",
  "copyright": "Copyright (c) 2021 The New York Times Company.  All Rights Reserved.",
  "num_results": 15,
  "last_modified": "2021-08-25T22:07:44-04:00",
  "results": [
    {
      "list_name": "Hardcover Fiction",
      "display_name": "Hardcover Fiction",
      "bestsellers_date": "2021-08-21",
      "published_date": "2021-09-05",
      "rank": 1,
      "rank_last_week": 1,
      "weeks_on_list": 3,
      "asterisk": 0,
      "dagger": 0,
      "amazon_product_url": "https://www.amazon.com/dp/1982173610?tag=NYTBSREV-20",
      "book_details": [
        {
          "title": "BILLY SUMMERS",
          "description": "A killer for hire who only takes out bad guys seeks redemption as he does one final job.",
          "contributor": "by Stephen King",
          "author": "Stephen King",
          "contributor_note": "",
          "price": "0.00",
          "age_group": "",
          "publisher": "Scribner",
          "primary_isbn13": "9781982173616",
          "primary_isbn10": "1982173610"
        }
      ],
```
### API Snippet Result for Open Library Search Results via ISBN 

```
{
   "publishers":[
      "Puffin"
   ],
   "number_of_pages":96,
   "isbn_10":[
      "0140328726"
   ],
   "covers":[
      8739161
   ],
   "key":"/books/OL7353617M",
   "authors":[
      {
         "key":"/authors/OL34184A"
      }
   ],
   "ocaid":"fantasticmrfoxpu00roal",
   "contributions":[
      "Tony Ross (Illustrator)"
   ],
   "languages":[
      {
         "key":"/languages/eng"
      }
   ],
   "classifications":{
      
   },
   "source_records":[
      "ia:fantasticmrfox00dahl_834",
      "marc:marc_openlibraries_sanfranciscopubliclibrary/sfpl_chq_2018_12_24_run02.mrc:85081404:4525"
   ],
   "title":"Fantastic Mr. Fox",
   "identifiers":{
      "goodreads":[
         "1507552"
      ],
      "librarything":[
         "6446"
      ]
   },
   "isbn_13":[
      "9780140328721"
   ],

```



## Working Site Images

<img width="1426" alt="Screen Shot 2021-09-22 at 10 18 26 PM" src="https://media.git.generalassemb.ly/user/38087/files/c2274880-1bf3-11ec-88c5-005756ce125c">
<img width="1360" alt="Screen Shot 2021-09-22 at 10 18 43 PM" src="https://media.git.generalassemb.ly/user/38087/files/c81d2980-1bf3-11ec-8be8-82a9fd18b908">
<img width="1391" alt="Screen Shot 2021-09-22 at 10 19 02 PM" src="https://media.git.generalassemb.ly/user/38087/files/c9e6ed00-1bf3-11ec-85de-5c2295ce0a2b">
<img width="1391" alt="Screen Shot 2021-09-22 at 10 22 24 PM" src="https://media.git.generalassemb.ly/user/38087/files/cf443780-1bf3-11ec-9f72-21d82f565266">



## Contribution Guidelines
Please provide feedback as I'd love to improve!
- Report a bug
- Submit a fix
- Propose new features

### All Change Happens with Github Pull Requests
1. Fork the repo and create a new branch.
2. Any additional API's should be added to the documentation.
3. Make sure your code is tested.
5. Run num run lint for style unification!
4. Issue the pull request.

### Report bugs via Issue
1. Provide a description of the bug.
2. How it was produced and steps to reproduce. (Be thorough!)
3. Expected behavior and what actually happened.
4. Notes: Any errors you received that you think may be useful.
