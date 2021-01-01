import React from 'react'
import {Button} from '@material-ui/core'
import data from './utility/searchPage.json'
import SearchComponent from './SearchComponent'
import './SearchPage.css'

function SearchPage() {
    return (
        <div>
               <div className='searchPage_info'>
                <p>62 stays · 26 august to 30 august · 2 guest</p>
                <h1>Stays nearby</h1>
                <div className="btn-group">
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and beds</Button>
                <Button variant="outlined">More filters</Button>
                </div>
            </div>
            <div className="searchComponent">
                {
                    data.map( (item) => { 
                        return <SearchComponent   key= {item.id}item={item}/>
                    })
                }
            </div>

        </div>
    )
}

export default SearchPage
