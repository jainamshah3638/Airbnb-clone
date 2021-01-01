import React from 'react'
import StarRateIcon from '@material-ui/icons/StarRate';
import './searchComponent.css'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';


function SearchComponent({item}) {
    const {id,title,img,description,star,location,price,total} = item
    return (
        <div className="searchComponent_item">
              <img src={img} alt={title} />
              <div className="text-container">
                <h4> {location}</h4>
                <h3> {title}</h3>
                <div className="underline"></div>
                <p> {description}</p>

                
                     <div className="star">
            <StarRateIcon/>
              <h3> {star}</h3>
                     </div>
                     <div className="price">
                         <h2> {price}</h2>
                         <h3> {total}</h3>
                     </div>
                     <div className="heart">
                              <FavoriteBorderIcon/>
                     </div>
                


                 
              </div>
        </div>
    )
}

export default SearchComponent
