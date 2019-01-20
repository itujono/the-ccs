import React from "react";
import { connect } from "react-redux";
import { fetchUser, unauthUser } from "../../state/actions/authActions";
import { Router, Link, Redirect } from "@reach/router";
import Dashboard from "./Dashboard";
import Sections from "./Sections";
import Users from "./Users";
import { Layout, Menu, Breadcrumb, Icon, Row, Col, Avatar, Dropdown, Modal } from "antd"
import { navigate } from "@reach/router/lib/history";




const { Header, Content, Footer, Sider } = Layout


class Main extends React.Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    handleRenderConfirm = () => {
        Modal.confirm({
            title: "Yakin mau logout?",
            content: "Awas aja kalo milih balik lagi nanti",
            okText: "Yoek!",
            onOk: () => this.props.unauthUser(() => window.location.replace('/logout'))
        })
    }

    renderMenu = () => (
        <Menu selectable>
            <Menu.Item key="0">
                <Icon type="user" />
                <Link to="/users">Profile</Link>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="1">
                <span onClick={this.handleRenderConfirm}>Logout...</span>
            </Menu.Item>
        </Menu>
    )

    render() {
        return (
            <Layout>
                <Header className="header">
                    <Row type="flex" justify="space-between">
                        <Col span={4}>
                            <div className="logo" />
                        </Col>
                        <Col span={4} className="avatar-header">
                            <Dropdown overlay={this.renderMenu()} placement="bottomRight">
                                <Avatar icon="user" style={{ backgroundColor: "#07d3cc" }} />
                            </Dropdown>
                        </Col>
                    </Row>
                </Header>
                <Content>
                    <Breadcrumb style={{ margin: "16px 0" }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Layout
                        style={{ padding: "24px 0", background: "#fff" }}
                    >
                        <Sider width={200} style={{ background: "#fff" }}>
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={["1"]}
                                defaultOpenKeys={["sub1"]}
                                style={{ height: "100%" }}
                            >
                                <Menu.Item key={1}>
                                    <Link to="dashboard">
                                        <Icon type="pie-chart" theme="twoTone" />
                                        <span>Dashboard</span>
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key={2}>
                                    <Link to="sections">
                                        <Icon type="build" theme="twoTone" />
                                        <span>Sections</span>
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key={3}>
                                    <Link to="users">
                                        <Icon type="smile" theme="twoTone" />
                                        <span>Users</span>
                                    </Link>
                                </Menu.Item>
                            </Menu>
                        </Sider>
                        <Content style={{ padding: "0 24px", minHeight: 280 }} >
                            <Router>
                                <Redirect noThrow from="/" to="dashboard" />
                                <Dashboard path="dashboard" />
                                <Sections path="sections" />
                                <Users path="users" />
                            </Router>
                        </Content>
                    </Layout>
                </Content>
                <Footer style={{ textAlign: "center" }}>
                    Code Collective Studio © 2018 - Rusmanto
                </Footer>
            </Layout>
        );
    }
}

const mapState = ({ auth }) => ({
    user: auth.user
});

export default connect( mapState, { fetchUser, unauthUser } )(Main);
