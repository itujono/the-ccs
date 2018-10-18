import React from "react"
import { Grid, Container, Header, Form, Button } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";
import { Formik } from "formik"
import * as yup from "yup"
import Posed from "react-pose"


const websiteName = yup.object().shape({
    website: yup.string().required("Harus diisi ya nama online shop nya")
})

const GridColumn = Posed.div({
    enter: { staggerChildren: 100 }
})

const Div = Posed.div({
    enter: { y: 0, opacity: 1 },
    exit: { y: 30, opacity: 0 }
})

const Butt = Posed.button({
    enter: { y: 0, opacity: 1, transition: { duration: 100 } },
    exit: { y: 30, opacity: 0 }
})

class AppName extends React.Component {

    componentDidMount() {
        if (!this.props.user.name || this.props.user.name === undefined) {
            this.props.history.push('/')
        }
    }

    render() {

        const { user, handleSaveUserInfo } = this.props
        const userName = user && user.name.split(" ")

        return (
            <Grid.Column as={GridColumn} width={6}>
                <Div className="navigator">
                    <Button as={Link} to="/start/email" className="link-btn" basic icon="chevron left" />
                </Div>
                <Container>
                    <Div className="heading">
                        <Header as="h2" content={user && `Well done, ${userName.length > 1 ? userName[0] : user.name}, sekarang nama online shop nya`} />
                        <p>Mau kamu kasih nama apa online shop kamu ini?</p>
                    </Div>
                    <Formik
                        initialValues={{ website: '' }}
                        onSubmit={(values) => {
                            const { user } = this.props
                            handleSaveUserInfo({...user, website: values.website})
                            this.props.history.push('/start/summary')
                        }}
                        validationSchema={websiteName}
                        render={({ handleSubmit, values, handleChange, errors, touched }) => (
                            <Form onSubmit={handleSubmit} className="main-form">
                                <Form.Input
                                    name="website"
                                    value={values.website}
                                    onChange={handleChange}
                                    label="Nama online shop kamu"
                                    placeholder="Misal: Zigzag Online Shop"
                                    fluid
                                />
                                { errors.website && touched.website && <span className="error-text">{errors.website}</span> }
                                <Container style={{ marginTop: '2em' }}>
                                    <Button as={Butt} type="submit" className="btn-ccs" icon="plus" content="Submit" />
                                </Container>
                            </Form>
                        )}
                    />
                </Container>
            </Grid.Column>
        )
    }
}

export default withRouter(AppName)