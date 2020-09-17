import React from 'react'
import PhotoContainer from '../containers/PhotoContainer.js'
import AboutMe from '../components/AboutMe.js'
import Experience from '../components/Experience.js'
import Projects from '../components/Projects.js'
import FooterContainer from "../containers/FooterContainer.js"

export default function ScrollSide() {
    return (
        <div className="ScrollSide">
            <PhotoContainer />
            <AboutMe />
            <Experience />
            <Projects />
            <FooterContainer />
        </div>
    )
}
