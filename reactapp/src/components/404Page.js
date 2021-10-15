import React from 'react';

const NoMatch =({history}) =>{
    return(
        <div className="bg expand">
            <h2>404Page</h2>
            <p>Redirecting to <span style={{color:'dodgerblue',cursor:'pointer'}} onClick={() => history.push('/')}>Login Page</span></p>
        </div>
    )
}

export default NoMatch;