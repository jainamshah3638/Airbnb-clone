import React from 'react'
import Banner from './Banner'

import Card from './Card'
import './Home.css'
import section1 from './utility/s1.json'
import section2 from './utility/s2.json'
function Home() {
    return (
        <div>
            <Banner/>
                <h1 className="main_title">  Live anywhere</h1>
            <div className="home_section">
             {
                 section1.map((data) => {
                  return <Card  data={data}/>
                    
                 })
             }
            </div>
                <h1 className="main_title"> Join millions of hosts on Airbnb</h1>
            <div className="home_section">
            {
                 section2.map((data) => {
                   return <Card  data={data}/>
                    
                 })
             }
            </div>
           

        </div>
    )
}

export default Home
