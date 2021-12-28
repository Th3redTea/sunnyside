import React from 'react'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import ServiceSection from '../components/ServiceSection'
import ServiceSection2 from '../components/ServiceSection2'
import Testmonial from '../components/Testmonial'

function Home() {
    return (
        <div>
            <Hero />
            <ServiceSection 
            flexrow="md:flex-row-reverse"
            title="Transoform Your Brand" 
            text="We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you. 
            "
            img="/images/desktop/image-transform.jpg"
            />
            <ServiceSection 
            flexrow="md:flex-row"
            title="Stand out to the right audience" 
            text="Using a collaborative formula of designers, researchers, photograpers, videographers, and copywriters, we'll build and extend you brand in digital places"
            img="/images/desktop/image-stand-out.jpg"
            />
            <div className="flex flex-col md:flex-row">
                <ServiceSection2
                text="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention."
                title="Graphic Design"
                img="/images/desktop/image-graphic-design.jpg"
                />
                <ServiceSection2
                text="Increase your credebility by getting the most stunning, high-quality photos that improve your business image."
                title="Photography"
                img="/images/desktop/image-photography.jpg"
                />
            </div>
            <div>
                <h1 className="text-center text-2xl text-grayishBlue tracking-widest font-fraunces m-8 md:m-12 flex-row">CLIENTS TESTIMONIALS</h1>
                <div className="flex flex-col md:flex-row">
                    <Testmonial
                        img="images/image-emily.jpg"
                        text="We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were alyaws hit"
                        name="Emily R."
                        profession="Marketing Director"
                    />
                    <Testmonial
                        img="/images/image-thomas.jpg"
                        text="Sunnyside's entusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience"
                        name="Thomas S."
                        profession="Chief Operating Officer"
                    />
                    <Testmonial
                    img="/images/image-jennie.jpg"
                    text="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
                    name="Jennie F."
                    profession="Business Owner"
                    />
                </div>
            </div>
            <div className="grid grid-cols-2  grid-rows-2 md:flex md:w-full">
                <img  className="md:w-[25%]" src="/images/desktop/image-gallery-cone.jpg" alt="cone"/>
                <img  className="md:w-[25%]" src="/images/desktop/image-gallery-milkbottles.jpg" alt="cone"/>
                <img className="md:w-[25%]" src="/images/desktop/image-gallery-sugarcubes.jpg" alt="cone"/>
                <img className="md:w-[25%]" src="/images/desktop/image-gallery-orange.jpg" alt="cone"/>
            </div>
            <Footer />
        </div>
    )
}

export default Home
