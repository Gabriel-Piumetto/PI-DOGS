import { useState } from "react"
import axios from 'axios'

const Form = ()=>{
    
    const [falsoState, setFalsoState]= useState(

        {image:"", name:"", height:"", weight:"", life_span:"", temperament:""}

    )
    
    
    const [formState, setFormState] = useState({
        name:"",
        alturaMinima:"",
        alturaMaxima:"",
        pesoMinimo:"",
        pesoMaximo:"",
        añosDeVida:"",
        temperamento:[]
    })

    const [errors, setErrors]= useState({
        name:"",
        alturaMinima:"",
        alturaMaxima:"",
        pesoMinimo:"",
        pesoMaximo:"",
        añosDeVida:"",
        temperamento:[]
    })


    const submitHandler =  (event)=>{

        event.preventDefault()

        axios.post('http://localhost:3001/dogs/createDog/', formState).then(
            response=>alert(response.data)).catch(error=>alert(error.message))

    }


    const changeHandler = (event)=>{

        const property = event.target.name
        const value = event.target.value

        validate({...formState,[property]:value})
        setFormState({...formState,[property]:value})

    }


    const validate =(formState)=>{

        const regex = /\d/;

        if(regex.test(formState.name)){
                  setErrors({name:"El nombre no debe contener números"})
        }else{
            setErrors({name:""})
        }
        if(formState.name===""){
            setErrors({name:"El campo nombre no puede estar vacío"})
        }



    }





    return(
        <div>
            <form onSubmit={submitHandler}>
            
            <div>
            <label>Nombre: </label>
            <input type="text" name="name" onChange={changeHandler} value={formState.name}></input>
            {errors.name ? <span>{errors.name}</span>:null}
            
            </div>

            
            
            <div>
                
                <div>
                <label>Altura mínima: </label>
                <input type="text" name="alturaMinima" onChange={changeHandler} value={formState.alturaMinima}></input>
                </div>
                
                <div>
                <label>Altura máxima: </label>
                <input type="text" name="alturaMaxima" onChange={changeHandler} value={formState.alturaMaxima}></input>
                </div>
                
            </div>

            <div>
                
                <div>
                <label>Peso mínimo: </label>
                <input type="text" name="pesoMinimo" onChange={changeHandler} value={formState.pesoMinimo}></input>
                </div>

                <div>
                <label>Peso máximo: </label>
                <input type="text" name="pesoMaximo" onChange={changeHandler} value={formState.pesoMaximo}></input>
                </div>
            
            
            </div> 



            <div>
            <label>Años de vida: </label>
            <input type="text" name="añosDeVida" onChange={changeHandler} value={formState.añosDeVida}></input>
            </div>

            <div>
            <label>Temperamento: </label>
            <input type="text"></input>
            </div>

            <button type="submit">SUBMIT</button>

            </form>
        </div>
    )

}

export default Form