import React, { useState } from 'react'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import './search.css'
import PeopleIcon from '@material-ui/icons/People';
import { Button } from '@material-ui/core';
import {useHistory} from 'react-router-dom'

function Search() {
  const history=useHistory()
    const [startDate,setStartDate]=useState(new Date())
    const [endDate,setEndDate]=useState(new Date())

const handleSelect = (ranges) => {
    console.log(ranges)
   setStartDate(ranges.selection.startDate)
   setEndDate(ranges.selection.endDate)
}
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
      }

    return (
        <div className="select_date">
          <DateRangePicker
        ranges={[selectionRange]}
        onChange={handleSelect}
      />
      <div className="guest">
      <h3> Number of guestst </h3>
      <PeopleIcon/>
      </div>
      <input min="0"
      defaultValue="2"
      className="input_guest"
      type="number"/>
     

 
      <Button onClick={ () => {
        history.push('/search')
      }} >
   
          search Airbnb 
  
      </Button>
        </div>

    )
}

export default Search
