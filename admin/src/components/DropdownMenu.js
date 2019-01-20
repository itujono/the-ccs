import React from "react"
import { Menu, Icon } from "antd"
import { Link } from "@reach/router"


const DropdownMenu = () => (
    <Menu>
        <Menu.Item key="0">
            <Icon type="user" />
            <Link to="/users">Profile</Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="1">
            <Icon type="coffee" />
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">Logout</a>
        </Menu.Item>
    </Menu>
)

export default DropdownMenu