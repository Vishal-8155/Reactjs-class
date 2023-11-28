import React, { useState } from 'react'

 const IncreDecre = () => {

    const [count, setCount] = useState(0);

    const addnum = () => {

        setCount(count + 1)

    }

    const minusnum = () => {

        setCount(count - 1);

    }

  return (
    <div>
      
   
    <h4>Count is : {count}</h4>

    <button onClick={addnum}>+</button> &nbsp;&nbsp;
    <button onClick={minusnum}>-</button>

    </div>
  )
}

export default IncreDecre;
