import React from "react"
import { Form, Input, Icon, Button, Row, Col, message, Alert, Skeleton } from "antd"
import { Formik } from "formik";
import { navigate } from "@reach/router"
import { connect } from "react-redux"
import { authUser } from "../../state/actions/authActions"


class Login extends React.Component {

    render() {

        const { loading, error } = this.props

        return (
            <Row type="flex" justify="center" align="middle" className="main-row">
                <Col span={8}>
                    <div className="heading">
                        <h2>Login</h2>
                        Jangan nggak pake celana ya
                    </div>
                    { error && <Alert message={error} banner closable />}
                    <Formik
                        initialValues={{}}
                        onSubmit={(values, actions) => {
                            const data = { email: values.email, password: values.password }
                            const token = localStorage.getItem('token')
                            this.props.authUser(data, () => {
                                navigate('/')
                                message.success("Kamu berhasil login, supaya Andhana senang")
                            })
                        }}
                        render={({ values, errors, handleChange, handleSubmit }) => (
                            <Form className="main-form" onSubmit={handleSubmit}>
                                <Skeleton loading={loading}>
                                    <Form.Item label="Email kamu">
                                        <Input type="email" onChange={handleChange} name="email" value={values.email} placeholder="Masukin email kamu" prefix={<Icon type="smile" theme="twoTone" />} />
                                    </Form.Item>
                                    <Form.Item label="Password kamu">
                                        <Input type="password" onChange={handleChange} name="password" value={values.password} placeholder="Dan password kamu" prefix={<Icon type="lock" theme="twoTone" />} />
                                    </Form.Item>
                                    <Button type="primary" className="btn-ccs" disabled={!values.password && !values.email} htmlType="submit">
                                        <Icon type="plus" /> Login
                                    </Button>
                                </Skeleton>
                            </Form>
                        )}
                    />
                </Col>
            </Row>
        )
    }
}


const mapState = ({ auth }) => ({
    auth: auth.auth,
    error: auth.error,
    loading: auth.loading
})

export default connect(mapState, { authUser })(Login)