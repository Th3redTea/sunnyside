import React from 'react'

function Testmonial({img, text, name, profession}) {
    return (
        <div className="flex flex-col items-center  mb-4">
            <img className="rounded-full m-4 md:m-8" src={img} alt="sunnyside testmonials"/>
            <p className="text-darkGrayishBlue text-center m-4 md:m-8 w-[50%]">{text}</p>
            <h1 className="text-center text-darkGrayishBlue font-fraunces font-bold m-2 md:m-4 ">{name}</h1>
            <h3 className="text-center text-darkGrayishBlue" >{profession}</h3>
        </div>
    )
}

export default Testmonial
