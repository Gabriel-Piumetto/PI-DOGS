import axios from 'axios'


export const GET_DOGS = "GET_DOGS"
export const GET_DETAIL_DOG = "GET_DETAIL_DOG"
export const GET_TEMPERAMENTS = "GET_TEMPERAMENTS"
export const SEARCH_DOGS = "SEARCH_DOGS"



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

            

      
      
     
    
  
  
  


   