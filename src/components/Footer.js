import React from 'react'
import { Icon } from '@iconify/react';


function Footer() {
    return (
        <div className="flex flex-col bg-darkMooderateCyan items-center h-[50vh]" >
            <h1 className="text-white text-4xl m-6">Sunnyside</h1>
            <ul className="flex w-full justify-around text-white md:w-[70%]">
                <li>About</li>
                <li>Services</li>
                <li>Projects</li>
            </ul>
            <div className="flex justify-around my-12 w-full md:w-[70%]">
                <Icon icon="ant-design:facebook-filled" color="white" width="45" />
                <Icon icon="fontisto:instagram"  color="white"  width="45" />
                <Icon icon="bi:twitter"  color="white"  width="45" />
                <Icon icon="cib:pinterest"  color="white"  width="45" />
            </div>
        </div>
    )
}

export default Footer
