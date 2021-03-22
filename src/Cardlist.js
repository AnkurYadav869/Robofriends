import React from 'react';
import Card from './Card';

const Cardlist = ({robots}) => {
  const cardComponent = robots.map((user) => {
    return <Card key ={user.id} name={user.name} email ={user.email} id={user.id}/>
  })
  return(
    <div>
      
     {cardComponent}
    </div>
  );
}

export default Cardlist;