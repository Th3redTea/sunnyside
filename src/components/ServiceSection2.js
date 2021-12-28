import React from 'react'

function ServiceSection2({title, text, img}) {
    return (
        <div className="relative">
            <img src={img} alt="designers" />
            <div className="absolute bottom-5 md:bottom-16 ">
                <h1 className="text-center text-2xl font-fraunces text-darkBlue md:text-4xl">{title}</h1>
                <p className="text-center text-darkBlue m-2 text-bold md:m-8">{text}</p>
            </div>
        </div>
    )
}

export default ServiceSection2
