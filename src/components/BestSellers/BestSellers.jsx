import React from 'react';
import BestSellerCard from './BestSellerCard'

function BestSellers(props) {
    
	// run api call based on which genre was clicked using the list_name in the url 
    // set state variable with array of books 
    // get current date using Date() / list_name parameters, setBestSellers
    // return each book as a card item with rank
    // map array of bestSellers on BestSellerCard
    
	return <div>
    <BestSellerCard></BestSellerCard>

    </div>;
}

export default BestSellers;