import { useState } from 'react';
import { AddCategory,GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch' ]);
    const onAddCategory = ( newCategory) => {

      if  (categories.includes( newCategory )) return;
      
      setCategories( [ newCategory, ...categories ] ); // ... se utiliza en react para añadir otro elemento más en el arreglo.

    }


  return (
    <>
        
        <h1>GifExpertApp</h1>

        <AddCategory 
      // setCategories={ setCategories } 
        onNewCategory={ (value) => onAddCategory(value) }
        />
  
          { 
            categories.map( ( category ) => ( 
              <GifGrid
                key={ category }
                category={category}
                
                /> ))
          }
       
    </>

  )
}

            
        
         

