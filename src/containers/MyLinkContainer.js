import React from 'react'
import { Icon, Menu } from 'semantic-ui-react'

export default function MyLinkContainer() {
    return (
        <div className="MyLink">
            <Menu compact icon='labeled' className="link">
                <Menu.Item href="www.google.com" name='linkedin'>
                    <Icon name='linkedin' />LinkedIn
                </Menu.Item>

                <Menu.Item name='github' className="link">
                    <Icon name='github' />GitHub
                </Menu.Item>

                <Menu.Item name='medium' className="link">
                    <Icon name='medium' />Blog
                </Menu.Item>
            </Menu>
        </div>
    )
}
