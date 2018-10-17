import React from "react"
import { Grid, Button, Container, Header, Form, Icon, Input } from "semantic-ui-react"
import { Link } from "react-router-dom";
import { Formik } from "formik"
import DatePicker from "react-datepicker";
import moment from "moment";
import 'react-datepicker/dist/react-datepicker.css';


class Appointment extends React.Component {

    state = { datepicker: true, startDate: moment() }

    handleChangeDate = (date) => {
        this.setState({ startDate: date, datepicker: false })
    }

    render() {
        return (
            <Grid.Column width={8}>
                <Container>
                    <div className="heading">
                        <Header as="h2" content="Mau ketemu?" />
                        <p>Nah, sekarang, kalo kamu udah pengen ketemu, silakan tentukan waktunya ya.</p>
                    </div>
                    { this.state.datepicker ? <Formik
                        initialValues={{ time: '' }}
                        render={() => (
                            <Form className="main-form">
                                <Form.Field>
                                    <DatePicker
                                        name="time"
                                        inline
                                        selected={this.state.startDate}
                                        onChange={this.handleChangeDate}
                                        minDate={moment()}
                                    />
                                </Form.Field>
                            </Form>
                        )}
                    /> : (
                        <Container>
                            <Header as="h4" content="Nice! Sekarang, nomor kontak?" />
                            Oke, karena kamu udah nentuin waktunya, kasih tau saya ya nomer telepon nya supaya bisa saya telfon untuk konfirmasi
                            <Formik
                                initialValues={{ phone: '' }}
                                render={() => (
                                    <Form className="main-form mt3em">
                                        <Form.Field>
                                            <Form.Input label="+62" placeholder="Misal: 8191919191" name="phone" width={8} />
                                        </Form.Field>
                                        <Button type="submit" content="Submit" className="btn-ccs" />
                                        <Button basic className="link-btn" content="Nggak mau" />
                                    </Form>
                                )}
                            />
                        </Container>
                    )}
                    <div className="navigator-bottom">
                        <Button as={Link} to="/summary" basic className="link-btn" icon labelPosition="right" >
                            Nggak sekarang deh
                            <Icon name="chevron right" />
                        </Button>
                    </div>
                </Container>
            </Grid.Column>
        )
    }
}

export default Appointment