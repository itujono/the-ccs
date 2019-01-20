import React from "react"
import { Row, Col, Button, Icon } from "antd"
import { Link } from "@reach/router";


const Logout = () => (
    <Row type="flex" justify="center" align="middle" className="main-row">
        <Col span={8}>
            <div className="heading">
                <h2>Hore!</h2>
                Yup kamu udah logout dengan selamat
            </div>
            <Link to="/login">
                <Button type="primary" className="btn-ccs"><Icon type="user" theme="outlined" /> Balik lagi ke Home</Button>
            </Link>
        </Col>  
    </Row>
)

export default Logout