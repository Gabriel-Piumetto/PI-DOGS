import axios from 'axios'
import UseCustomHook from './UseCustomHook'




export const GET_DOGS = "GET_DOGS"
export const GET_DETAIL_DOG = "GET_DETAIL_DOG"
export const GET_TEMPERAMENTS = "GET_TEMPERAMENTS"
export const ORDER_DOGS_BY_ALPH_ASC = "ORDER_DOGS_BY_ALPH_ASC"
export const ORDER_DOGS_BY_ALPH_DES = "ORDER_DOGS_BY_ALPH_DES"
export const ORDER_DOGS_BY_WEIGHT_ASC = "ORDER_DOGS_BY_WEIGHT_ASC"
export const ORDER_DOGS_BY_WEIGHT_DES = "ORDER_DOGS_BY_WEIGHT_DES"





export const getDogs = () => {
  return async (dispatch) => {

    const serverData = await axios.get(`http://localhost:3001/dogs/`)
    const dogs = serverData.data

    dispatch({ type: GET_DOGS, payload: dogs })
  }
}


export const getDetailDog = (idRaza) => {
  return async (dispatch) => {



    const serverData = await axios.get(`http://localhost:3001/dogs/${idRaza}`)

    const dog = serverData.data



    dispatch({ type: GET_DETAIL_DOG, payload: dog })


  }
}

export const getTemperaments = () => {
  return async (dispatch) => {

    const serverData = await axios.get('http://localhost:3001/temperaments')
    const temperaments = serverData.data

    dispatch({ type: GET_TEMPERAMENTS, payload: temperaments })
  }

}







///////////////////////////////////) FILTRADOS/////////////////////////////////////////////////////////


export const filterByDb = () => {
  return async (dispatch) => {

    const serverData = await axios.get(`http://localhost:3001/dogs/`)
    const dogs = serverData.data

    const filtered = dogs.filter(dog => dog.isCreated === true)

    dispatch({ type: GET_DOGS, payload: filtered })
  }
}

export const filterByApi = () => {
  return async (dispatch) => {

    const serverData = await axios.get(`http://localhost:3001/dogs/`)
    const dogs = serverData.data

    const filtered = dogs.filter((dog) => dog.hasOwnProperty('isCreated') === false)

    dispatch({ type: GET_DOGS, payload: filtered })
  }
}

export const filterByTemperament = (temperament) => {

  return async (dispatch) => {

    const serverData = await axios.get(`http://localhost:3001/dogs/`);
    const dogs = serverData.data;
    
    let selectDogs = [];
    console.log(dogs[2].temperament.join(', '))

    
        dogs.forEach((dog)=>{
          if(dog.isCreated===true){
            if(dog.temperament.join(', ').toLowerCase().includes(temperament.toLowerCase())){
              selectDogs.push(dog)
            }
          }
        })

    dogs.forEach((dog) => {
      if (dog.temperament && typeof dog.temperament === 'string') {
        if (dog.temperament.toLowerCase().includes(temperament.toLowerCase())) {
          selectDogs.push(dog);
        }
      }
    });
    



    dispatch({ type: GET_DOGS, payload: selectDogs })
  }

}



