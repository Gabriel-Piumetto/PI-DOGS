import Card from "../Card/Card"
import style from './ConteinerCards.module.css'
import { useSelector } from "react-redux"
import { useState } from "react"


const ConteinerCards = ()=>{
    
    
    const perros = useSelector(state=>state.dogs)
    
    
    
     
    
    
    ///////////////////////////PAGINACIÓN////////////////////////////////////////////////////////////
    
    
    const resultsPerPage = 8;
    

    const [currentPage, setCurrentPage] = useState(1);


const startIndex = (currentPage - 1) * resultsPerPage;
const endIndex = startIndex + resultsPerPage;

const itemsToShow = perros.slice(startIndex, endIndex);

const handlePageFoward = () => {
    setCurrentPage(currentPage +1);
}
 
const handlePageBackward = () => {
    setCurrentPage(currentPage-1);
}



/////////////////////////////////////////////////////////////////////////////////////////////////////    
    






    return(

        <div>
            
            
            
            <div>
                
                <button onClick={handlePageBackward}>Retroceder Página</button>  
                <button onClick={handlePageFoward}>Avanzar Página</button>
                
            </div>




        <div className={style.main_container}>
            {itemsToShow.map(
                perro => {
                    return <Card
                    image={perro.reference_image_id}
                    name={perro.name}
                    temperament={`${perro.temperament}`}
                    weight={perro.weight}
                    id={perro.id}
                    />
                }
            )}
        </div>
        
        
        </div>
    )

}

export default ConteinerCards