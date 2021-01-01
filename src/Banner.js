import React , {useState}from 'react'
import './Banner.css'
import { Button } from '@material-ui/core';
import Search from './Search'
import {useHistory} from 'react-router-dom'
function Banner() {
    const history=useHistory()
    const [showSearch,setSearch]=useState(false)
    
    return (
        <div className="banner">
            <div className="banner_search">
                <Button variant="outlined"
                  onClick={ () => setSearch(!showSearch)}
                >
                   {showSearch ? 'Hide' : 'search Dates ' }
                </Button>

                { showSearch && <Search/>}
            </div>
             <div className="banner_info">
                 <h1> Go Out and stretch your imaginamtion</h1>
                 <h5> plan a diffrent kind of gateway to uncover the hidden gems near you </h5>
                 
                 <Button onClick={ () => {
                     history.push("/search")
                 }}> Explore nearby stay   </Button>
               
             </div>
        </div>
    )
}

export default Banner
