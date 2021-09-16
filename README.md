# react-reads
## Project Description 
Reads is a front-end site that displays the current NYT best-sellers (weekly). It uses the New York Times API to list the best-sellers in each of the seven NYT book-type sections. Selecting a book on the list takes the user to a more detailed page view that gives the user a short summary of the book and book details, such as author and cover. It will also provide a link to the NYT book review, returned by the API. 
Sections are as follows : (Hardcover-Fiction, Hardcover-Non-fiction. Paperback Trade Fiction, Paperback Non-Fiction, Combined E-Book & Print Fiction, Combined E-Book & Print Non-fiction, Advice, How-To, Misc)

## Link to the API you plan to use
> API link
https://developer.nytimes.com/docs/books-product/1/overview

Example Call for best-selling hard-cover fiction books for the week of 09/01/2021.

For Book Details: 
"https://api.nytimes.com/svc/books/v3/lists.json?list=hardcover-fiction&bestsellers-date=2021-09-01&api-key=[MY_API_KEY]"

For Book Reviews: 
'https://api.nytimes.com/svc/books/v3/reviews.json?title=billy%20summers&api-key=[MY_API_KEY]'


## Example data response you plan to use
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
      "isbns": [
        {
          "isbn10": "1982173610",
          "isbn13": "9781982173616"
        },
        {
          "isbn10": "1982173637",
          "isbn13": "9781982173630"
        },
        {
          "isbn10": "179712269X",
          "isbn13": "9781797122694"
        }
      ],
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
      "reviews": [
        {
          "book_review_link": "",
          "first_chapter_link": "",
          "sunday_review_link": "",
          "article_chapter_link": ""
        }
      ]
    }, ...
```
### API Res for Book Reviews: (Billy Summers by Stephen King) 
```
{
  "status": "OK",
  "copyright": "Copyright (c) 2021 The New York Times Company.  All Rights Reserved.",
  "num_results": 1,
  "results": [
    {
      "url": "https://www.nytimes.com/2021/08/03/books/review/stephen-king-billy-summers.html",
      "publication_dt": "2021-08-03",
      "byline": "By James Lasdun",
      "book_title": "Billy Summers",
      "book_author": "",
      "summary": "In “Billy Summers,” a hired killer and aspiring writer is lured from the brink of retirement with a lucrative assignment.",
      "uuid": "00000000-0000-0000-0000-000000000000",
      "uri": "nyt://book/00000000-0000-0000-0000-000000000000",
      "isbn13": [
        "9781982173616"
      ]
    }
  ]
```

## Visual of your component hierarchy
<img width="1030" alt="Screen Shot 2021-09-16 at 11 00 11 AM" src="https://media.git.generalassemb.ly/user/38087/files/4f8f0800-16dd-11ec-948a-1e57c63e68db">




## Wire Frames
> Copy and paste or drag and drop your images here.
<img width="1030" alt="Screen Shot 2021-09-15 at 11 14 49 PM" src="https://media.git.generalassemb.ly/user/38087/files/cd6df780-167a-11ec-816b-ffbb738bdbc6">
<img width="1030" alt="Screen Shot 2021-09-15 at 11 14 59 PM" src="https://media.git.generalassemb.ly/user/38087/files/d068e800-167a-11ec-8f02-7ecc42cd574b">
<img width="1030" alt="Screen Shot 2021-09-15 at 11 15 05 PM" src="https://media.git.generalassemb.ly/user/38087/files/d3fc6f00-167a-11ec-9103-6e008910b971">
<img width="1030" alt="Screen Shot 2021-09-15 at 11 15 08 PM" src="https://media.git.generalassemb.ly/user/38087/files/d52d9c00-167a-11ec-89a6-662f4144f04a">


## User Stories
> Add user stories following the _As a [type of user], I want [what the user wants], so that [what it helps accomplish]_ format.
- As a user I would like to be able to navigate the site with a header.
- As a user I would like to be able to navigate different sections according to the NYT criteria.
- As a user I would like to be able to select a section and see the top best-sellers listed for that section, organized by rank.
- As a user I would like to be able to select a book and learn more about it so I can decide if I would like to read it.
- As a user I would like to know how long the book has been on the best-sellers list. 
- As a user I would like to be able to read the NYT review regarding my selected book. 

### MVP Goals
- Allow users to select pick between different best-selling sections (Hardcover-Fiction, Hardcover-Non-fiction. Paperback Trade Fiction, Paperback Non-Fiction, Combined E-Book & Print Fiction, Combined E-Book & Print Non-fiction, Advice, How-To, Misc).
- Display a list of fifteen best-sellers in designated section based on rank of the current book.
- On selection, display cover and summary of book along with information regarding the author, number of weeks on the list, rank this week, rank last week, and NYT review link.


### Stretch Goals
### Bronze
- As a user I would like to select a book and add it to my own Reading List. 
- As a user I would like to be able to add a short review of my own for my book.

### Silver
- As a user I would like to track my progress through a book by being allowed to update how far I've read a book.
- As a user I would like to add my current thoughts as I progress through my book. 

### Gold
- As a user I would to be able to search for books not on the NYT Best Seller List and add them to my Reading list. 
- As a user I would like to have a habit tracker that keeps track of how much I am reading so I can build strong reading habits. 
- As a user I would like to receive recommendations for more books according to the books in my Reading List.
