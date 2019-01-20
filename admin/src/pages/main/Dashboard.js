import React from "react"
import { Row, Col, Card } from "antd";
import { Meta } from "antd/lib/list/Item";


class Dashboard extends React.Component {
    render() {
        return (
            <div className="dashboard">
                <div className="heading">
                    <h2>Dashboard</h2>
                    Ketika kamu sangat menyukai data dan fakta
                </div>
                <Row gutter={16}>
                    <Col span={6}>
                        <Card>
                            <h3>23</h3>
                            <Meta title="Sections" description="Kapan kamu mau nikah massal sama dia" />
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card>
                            <h3>56</h3>
                            <Meta title="Finished users" description="Jumlah user yang make app sampe finish" />
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card>
                            <h3>37</h3>
                            <Meta title="No finish" description="Jumlah user yang make app nggak sampe finish" />
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card>
                            <h3>114</h3>
                            <Meta title="Appointment" description="Jumlah user yang sampe bikin appointment" />
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Dashboard