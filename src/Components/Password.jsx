import React, { useState } from 'react'
import "./Password.css"

const Password = () => {

    const [show,setShow] = useState(false);
    const showpass = ()=>{
        setShow(!show)
    }
  return (
    <div className='container'>
        <input className='input-variable' type={show?"text":"password"} />
        <label className='label' onClick={showpass}>{show?"Hide":"Show"}</label>
    </div>
  )
}

export default Password