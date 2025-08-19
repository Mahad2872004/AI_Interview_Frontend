import React, { useState } from 'react'
import {FaRegEye, FaRegEyeSlash} from "react-icons/fa6";

const Input = ({value, onChange, label, placeholder, type}) => {
    const [showPassword, setShowPassword]=useState(false);

    const toggleShowPassword=()=>{
        setShowPassword(!showPassword);
    };

  return (
    <div>
    <label className='text-[13px] text-slate-800'>{label}</label>
    <div className='input-box'>
        <input
        type={type=="password" ? (showPassword ? "text" : "password"):type}
        placeholder={placeholder}
        className='w-full bg-transparent outline-none w-full px-3 py-2 border border-gray-300 rounded-md text-sm outline-none transition duration-200 focus:border-orange-300 hover:border-orange-300'
        value={value}
        onChange={(e)=>onChange(e)}
        
        />

        {type==="password" && (
            <>
            {showPassword ? (
                <FaRegEye
                size={22}
                className='text-orange-500 cursor-pointer'
                onClick={()=>toggleShowPassword()}
                />
            ):(
                <FaRegEyeSlash
                size={22}
                className='text-slate-400 cursor-pointer'
                onClick={()=>toggleShowPassword()}
                />
            )}
            
            </>
        )}

    </div>

    </div>
  )
}

export default Input