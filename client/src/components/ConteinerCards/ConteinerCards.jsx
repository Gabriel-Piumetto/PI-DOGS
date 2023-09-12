import Card from "../Card/Card"
import style from './ConteinerCards.module.css'
import { useSelector } from "react-redux"


const ConteinerCards = ()=>{
    const perros = useSelector(state=>state.dogs)
    
     

    return(
        <div className={style.main_container}>
            {perros.map(
                perro => {
                    return <Card
                    image={perro.reference_image_id}
                    name={perro.name}
                    temperament={`${perro.temperament}`}
                    weight={perro.weight}
                    />
                }
            )}
        </div>
    )

}

export default ConteinerCards