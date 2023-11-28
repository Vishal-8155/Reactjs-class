import React from 'react';

const Functionbasecomp = () => {

        let a = 10;
        let b = 20;

        const add = () => {

           let c = a + b;

           return c;

        }

        const sub = () => {

            let c = a - b;

            return c;
 
         }

        const mul = () => {

            let c = a * b;

            return c;
 
         }

         const div = () => {

            let c = a / b;

            return c;
 
         }

         
        return (

            <div>

                <h3>Addition is : {add()}</h3>
                <h3>Substraction is : {sub()}</h3>
                <h3>Multiplication is : {mul()}</h3>
                <h3>Division is : {div()}</h3>

            </div>

        )

}

export default Functionbasecomp;

