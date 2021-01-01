import { DialogContent } from '@material-ui/core'
import React from 'react'
import './footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className="footer_row">

                <div className="footer_column">
                    <h2> about</h2>
                    <ul> 
                        <li> <a href="#"> how airbnb works </a></li>
                        <li><a href="#"> newsroom  </a></li>
                        <li><a href="#"> investors </a></li>
                        <li><a href="#"> Airbnb Plus </a></li>
                    </ul>
                </div>
                <div className="footer_column">
                <h2> Community</h2>
                <ul> 
                        <li> <a href="#">  Diversity & Belonging  </a></li>
                        <li> <a href="#">  Accessibility  </a></li>
                        <li> <a href="#"> Airbnb Associates </a></li>
                        <li> <a href="#"> Frontline Stays </a></li>
                    </ul>
                </div>
                <div className="footer_column">
                <h2> Host</h2>
                <ul> 
                        <li> <a href="#">Host your home  </a></li>
                        <li><a href="#"> Host an Online Experience </a></li>
                        <li><a href="#">Host an Experience </a></li>
                        <li><a href="#">Responsible hosting </a></li>
                    </ul>
                </div>
                <div className="footer_column">
                <h2> support</h2>
                <ul> 
                        <li><a href="#">Our COVID-19 Response  </a></li>
                        <li><a href="#"> Help Centre </a></li>
                        <li><a href="#">Cancellation options </a></li>
                        <li><a href="#">Neighbourhood Support </a></li>
                    </ul>
                </div>

            </div>
            <p className="copywrite">© 2020 Airbnb, Inc. All rights reserved </p>
        </div>
    )
}

export default Footer
