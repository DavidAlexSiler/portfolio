import React, { Component } from 'react'
import PhotoContainer from '../containers/PhotoContainer.js'
import AboutMe from '../components/AboutMe.js'
import Experience from '../components/Experience.js'
import Projects from '../components/Projects.js'
import FooterContainer from "../containers/FooterContainer.js"
import { Tab } from 'semantic-ui-react'


class ScrollSide extends Component {
    render () {
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
    }
export default ScrollSide;



