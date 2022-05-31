/* eslint-disable no-unused-vars */
import {    SyntheticEvent, useState  } from 'react';
import { Form } from '../components/form/form';
import { Form1 } from '../components/form1/form1';
import { Form2 } from '../components/form2/form2';


export function HomePage(){


    const [form, setForm] = useState(1);

      function changeVisibility1(value: number)  {
        console.log(value);
        setForm(value);

       
    };

    const handlerButton = (ev: SyntheticEvent) => {
        ev.preventDefault();
        changeVisibility1(2)
    }
    

    if(form === 1){
        return <>
            
            <Form1 />
            <button onClick={handlerButton}>Atrás</button>
            <button onClick={handlerButton}>Siguiente</button>
        </>
    } else if(form === 2){
            return (
                <>
                    <Form2 />
                    <button onClick={handlerButton}>Atrás</button>
                </>
            )
    }else {
        return (
        
            <main>
                <h1>Challenge formulario</h1>
    
                <Form 
                    changeVisibility1={changeVisibility1}
                ></Form>
                <button onClick={handlerButton}>Siguiente</button>
            </main>
            
        )
    }

  
}