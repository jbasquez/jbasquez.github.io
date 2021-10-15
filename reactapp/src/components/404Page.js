import React from 'react';

const NoMatch =({history}) =>{
    return(
        <div className="bg expand textColor">
            <h2 className="headers">Error</h2>
            <p>Redirect to <span style={{color:'dodgerblue',cursor:'pointer'}} onClick={() => history.push('/')}>Home Page</span></p>
        </div>
    )
}

export default NoMatch;