import React from "react";
import "./Header.css"
import FilterListIcon from '@mui/icons-material/FilterList'; 

function Header() {
    return <div>
        <div class="header">
            <h1 id="title">To do</h1>
            <FilterListIcon style={{display: "inline",
                                    paddingLeft: "285px",
                                    paddingTop: "135px",
                                    fontSize: "150px"    
                                                    }}/>
            {/* <Icon color="primary">?</Icon> */}
            {/* <i className="fas fa-check"></i> */}
         </div>
    </div>
}

export default Header;