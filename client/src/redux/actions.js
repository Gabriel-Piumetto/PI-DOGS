import axios from 'axios'


export const GET_DOGS = "GET_DOGS"
export const GET_DETAIL_DOG = "GET_DETAIL_DOG"
export const GET_TEMPERAMENTS = "GET_TEMPERAMENTS"
export const FILTER_DOGS_BY_DB = "FILTER_DOGS_BY_DB"
export const FILTER_DOGS_BY_API = "FILTER_DOGS_BY_API"
export const FILTER_DOGS_BY_TEMPER = "FILTER_DOGS_BY_TEMPER"
export const ORDER_DOGS_BY_ASC = "ORDER_DOGS_BY_ASC" 
export const ORDER_DOGS_BY_DES = "ORDER_DOGS_BY_DES"


export const getDogs = ()=>{
    return async(dispatch)=>{
        
        const serverData = await axios.get(`http://localhost:3001/dogs/`)
        const dogs = serverData.data
        
        dispatch({type:GET_DOGS, payload:dogs})
    }
}


export const getDetailDog  =(idRaza)=>{
    return async(dispatch)=>{
        
        
        
        const serverData = await axios.get(`http://localhost:3001/dogs/${idRaza}`)
        
        const dog = serverData.data
        
        
        
        dispatch({type:GET_DETAIL_DOG,payload:dog})
        
        
    }
}

export const getTemperaments =()=>{
    return async(dispatch)=>{
        
        const serverData = await axios.get('http://localhost:3001/temperaments')
        const temperaments = serverData.data
        
        dispatch({type:GET_TEMPERAMENTS,payload:temperaments})
    }

}







///////////////////////////////////) FILTRADOS/////////////////////////////////////////////////////////


export const filterByDb = ()=>{
    return async(dispatch)=>{
        
        const serverData = await axios.get(`http://localhost:3001/dogs/`)
        const dogs = serverData.data

        const filtered = dogs.filter( dog =>  dog.isCreated ===true )
        
        dispatch({type:FILTER_DOGS_BY_DB, payload:filtered})
    }
}

export const filterByApi = ()=>{
    return async(dispatch)=>{
        
        const serverData = await axios.get(`http://localhost:3001/dogs/`)
        const dogs = serverData.data

        const filtered = dogs.filter( (dog) =>  dog.hasOwnProperty('isCreated')===false)

        dispatch({type:FILTER_DOGS_BY_API, payload:filtered})
    }
}

export const filterByTemperament = (temperament)=>{

    return async(dispatch)=>{
        
        const serverData = await axios.get(`http://localhost:3001/dogs/`)
        const dogs = serverData.data



        let selectDogs = []


    dogs.forEach( (dog) => dog.temperament?.includes(temperament)&& selectDogs.push(dog)  )

    

        
            
        
        dispatch({type:FILTER_DOGS_BY_API, payload:selectDogs}) 
    }

}




//////////////////////////ORDENAMIENTOS//////////////////////////////////////////////////////////////////




export const orderDogsByAsc = ()=>{
    return async(dispatch)=>{
        
        const serverData = await axios.get(`http://localhost:3001/dogs/`)
        const dogs = serverData.data
        
        const orderedDogs = dogs.sort((a, b) => {
            const nameA = a.name.toLowerCase() 
            const nameB = b.name.toLowerCase()
            
            if (nameA < nameB) {
              return -1; 
            }
            if (nameA > nameB) {
              return 1; 
            }
            return 0; 
          })
          
          


        dispatch({type:ORDER_DOGS_BY_ASC, payload:orderedDogs})
    }
}



export const orderDogsByDes =()=>{
    return async(dispatch)=>{
        
        const serverData = await axios.get(`http://localhost:3001/dogs/`)
        const dogs = serverData.data
        
        const orderedDogs = dogs.sort((a, b) => {
            const nameA = a.name.toUpperCase() 
            const nameB = b.name.toUpperCase()
            
            if (nameA > nameB) {
              return -1; 
            }
            if (nameA < nameB) {
              return 1; 
            }
            return 0; 
          })
          
          


        dispatch({type:ORDER_DOGS_BY_DES, payload:orderedDogs})
    }
}
            

      
      
     
    
  
  
  


   