import React from "react";
import {Link } from "react-router-dom";

 function SeeMoreButton() {

     return (
       <div>
         <p>
           Click now to see more.
         </p>
         <Link to="/projects"><button class="btn PrimaryBtn contact">
           Lets Go! 
         </button>
         </Link>
       </div>
     );

 }

 export default SeeMoreButton;