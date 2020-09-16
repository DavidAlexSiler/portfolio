import React from 'react'
import StaticSideContainer from './StaticSideContainer.js';
import ScrollSideContainer from './ScrollSideContainer.js';

export default function PortFolioContainer() {
    return (
        <div className="Content">
            <StaticSideContainer/>
            <ScrollSideContainer/>
        </div>
    )
}
