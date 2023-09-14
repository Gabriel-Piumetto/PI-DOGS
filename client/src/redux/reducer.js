import { GET_DETAIL_DOG, GET_DOGS,GET_TEMPERAMENTS, FILTER_DOGS_BY_DB, 
       FILTER_DOGS_BY_API, FILTER_DOGS_BY_TEMPER, ORDER_DOGS_BY_ALPH_ASC, ORDER_DOGS_BY_ALPH_DES,
       ORDER_DOGS_BY_WEIGHT_ASC, ORDER_DOGS_BY_WEIGHT_DES } from "./actions"

const initialState = {
    dogs:[],
    detailDog:[]
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
        case FILTER_DOGS_BY_DB:
            return {...state, dogs:action.payload}
        case FILTER_DOGS_BY_API:
            return {...state, dogs:action.payload}
        case FILTER_DOGS_BY_TEMPER:
            return {...state, dogs:action.payload}
        case ORDER_DOGS_BY_ALPH_ASC:
            return {...state, dogs:action.payload}
        case ORDER_DOGS_BY_ALPH_DES:
            return {...state, dogs:action.payload}
        case ORDER_DOGS_BY_WEIGHT_ASC:            
            return {...state, dogs:action.payload}
        case ORDER_DOGS_BY_WEIGHT_DES:
            return {...state, dogs:action.payload}


    }
}

export default reducer