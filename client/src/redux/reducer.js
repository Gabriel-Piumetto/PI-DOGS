import { GET_DETAIL_DOG, GET_DOGS,GET_TEMPERAMENTS, SEARCH_DOGS } from "./actions"

const initialState = {
    dogs:[],
    detailDog:[],
    foundDogs:[]
}




const reducer = (state=initialState, action)=>{
    

    switch(action.type){
        
        default:
            return { ...state}
        case GET_DOGS:
          return {...state, dogs:action.payload}
        case GET_DETAIL_DOG:
            return {...state, detailDog:action.payload}
        case GET_TEMPERAMENTS:
            return {...state,temperaments:action.payload}
        case SEARCH_DOGS:
            return { ...state, foundDogs: action.payload };
                        

    }
}

export default reducer