import React from "react"
import { Grid, Container, Header, Form, Button, Transition, Ref } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";
import { Formik } from "formik"
import * as yup from "yup"
import Posed from "react-pose";



const signupSchema = yup.object().shape({
    name: yup.string().required("Harus diisi ya nama nya"),
    email: yup.string().email("Ini bukan email loh ya").required("Email nya juga harus diisi ya")
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


class Personal extends React.Component {

    state = { node: null, form: null }

    render() {

        const { handleSaveUserInfo, user } = this.props

        return (
            <Grid.Column as={GridColumn} width={6}>
                <Div className="navigator">
                    <Button as={Link} to="/" className="link-btn" basic icon="chevron left" />
                </Div>
                <Container>
                    <Div className="heading">
                        <Header as="h2" content="Oke mari kita mulai" />
                        <p>Silakan masukin sedikit info tentang kamu, supaya Cina nggak bisa nyerang Irak</p>
                    </Div>
                    <Formik
                        initialValues={{ name: user.name ? user.name : '', email: user.email ? user.email : '' }}
                        onSubmit={({ name, email }, actions) => {
                            handleSaveUserInfo({ name, email })
                            this.props.history.push('/start/app_name')
                        }}
                        validationSchema={signupSchema}
                        render={({ handleSubmit, handleChange, values, errors, touched }) => (
                            <Form onSubmit={handleSubmit} className="main-form">
                                <Form.Input
                                    fluid
                                    onChange={handleChange}
                                    value={values.name}
                                    name="name"
                                    label="Nama kamu"
                                    placeholder="Misal: Gunawan Sasongko"
                                />
                                { errors.name && touched.name && <span className="error-text">{errors.name}</span> }
                                <React.Fragment>
                                    <Transition visible={values.name !== ''} animation="fade down" duration={200} >
                                        <Form.Input
                                            fluid
                                            onChange={handleChange}
                                            value={values.email}
                                            name="email"
                                            label="Email kamu"
                                            placeholder="Misal: gunawan@sasongko.com"
                                        />
                                    </Transition>
                                    { errors.email && touched.email && values.name !== '' && <span className="error-text">{errors.email}</span> }
                                </React.Fragment>
                                <Container as={Div} style={{ marginTop: '2em' }}>
                                    <Button type="submit" disabled={!values} className="btn-ccs" icon="plus" content="Submit" />
                                </Container>
                            </Form>
                        )}
                    />
                </Container>
            </Grid.Column>
        )
    }
}

export default withRouter(Personal)