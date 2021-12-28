import React from 'react'



function ServiceSection({title, text, img, flexrow}) {
    return (
        <div className={`flex flex-col ${flexrow}`}>
            <img src={img} alt="transform your brand" />
            <div className="flex flex-col items-center justify-center md:items-start mx-20">
                <h1 className="font-fraunces text-3xl text-darkGrayishBlue text-center my-8 md:text-left">{title}</h1>
                <p className="text-grayishBlue text-center my-4 md:text-left">
                    {text}
                </p>
                <a href="/" className="font-fraunces text-2xl my-6 text-darkGrayishBlue">LEARN MORE</a>
            </div>
        </div>
    )
}

export default ServiceSection
