import { GET_DETAIL_DOG, GET_DOGS,GET_TEMPERAMENTS } from "./actions"

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

    }
}

export default reducer