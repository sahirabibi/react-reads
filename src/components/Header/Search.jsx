import React from 'react';

function Search(props) {
    // run a call to openLibrary and return book with selected format 
    // search can be with author, subject, title, isbn 

    return (
        <div>
            <nav>
                <label htmlFor="search">Search</label>
                <input type="text" id='title' placeholder='title'/>
                <input type="text" id='author' placeholder='author'/>
                <input type="text" id='isbn' placeholder='isbn'/>
                <button>Search</button>
                <button>Advanced Search</button>
            </nav>
            
        </div>
    );
}

export default Search;