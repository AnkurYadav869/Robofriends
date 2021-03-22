import React from 'react'
 const Searchbox = ({searchChange}) =>{
   return(
    <div className="pa2">
      <input type="text"
       placeholder="search Robots" 
       className=" bg-lightest-blue pa2 b--green"
       onChange={searchChange}/>

    </div>
   );
 }
 export default Searchbox;
