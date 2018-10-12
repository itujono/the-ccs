import React from "react"
import { Grid, Container, Header, Form, Button, Transition } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";
import { Formik } from "formik";
import { validate } from "../../common";
import * as yup from "yup";



const signupSchema = yup.object().shape({
    name: yup.string().required("Harus diisi ya nama nya"),
    email: yup.string().required("Email nya juga harus diisi ya")
})


class Personal extends React.Component {

    render() {

        const { handleSaveUserInfo, user } = this.props

        return (
            <Grid.Column width={6}>
                <div className="navigator">
                    <Button as={Link} to="/" className="link-btn" basic icon="chevron left" />
                </div>
                <Container>
                    <div className="heading">
                        <Header as="h2" content="Oke mari kita mulai" />
                        <p>Silakan masukin sedikit info tentang kamu, supaya Cina nggak bisa nyerang Irak</p>
                    </div>
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
                                <Container style={{ marginTop: '2em' }}>
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