import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getDetailDog } from "../../redux/actions"
import { useParams } from "react-router-dom/"

const baseURL = "https://cdn2.thedogapi.com/images/"

 const Detail = ()=>{

     const {idRaza} = useParams()

     
     
     const dispatch = useDispatch()
     
     useEffect( ()=>{
        dispatch(getDetailDog(idRaza),[dispatch])
    })
    
    const detailDog = useSelector(state=>state.detailDog)

    
    
    return (
        <div>
          <h1>DETALLE</h1>
          {detailDog ? (
            <>
              <img src={`${baseURL}${detailDog.reference_image_id}.jpg`} alt="Dog" />
              <h3>ID: {detailDog.id}</h3>
              <h3>Nombre: {detailDog.name}</h3>
              {detailDog.height ? <h4>Altura: {`${detailDog.height.metric} CM`}</h4> : null}
              {detailDog.weight ? <h4>Peso: {`${detailDog.weight.metric} KG`}</h4> : null}
              <h4>Temperamento: {detailDog.temperament}</h4>
              <h4>Años de vida : {detailDog.life_span}</h4>
            </>
          ) : (
            null
          )}
        </div>
      );
      
    
    
}

export default Detail