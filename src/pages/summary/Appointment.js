import React from "react"
import { Grid, Button, Container, Header, Form, Icon } from "semantic-ui-react"
import { Link } from "react-router-dom";
import { Formik } from "formik"
import DatePicker from "react-datepicker";
import moment from "moment";
import 'react-datepicker/dist/react-datepicker.css';


class Appointment extends React.Component {

    state = { date: null, startDate: moment() }

    handleChangeDate = (date) => {
        this.setState({ startDate: date })
    }

    render() {
        return (
            <Grid.Column width={8}>
                <Container>
                    <div className="heading">
                        <Header as="h2" content="Mau ketemu?" />
                        <p>Nah, sekarang, kalo kamu udah pengen ketemu, silakan tentukan waktunya ya.</p>
                    </div>
                    <Formik
                        initialValues={{}}
                        render={() => (
                            <Form className="main-form">
                                <Form.Field>
                                    <DatePicker
                                        inline
                                        selected={this.state.startDate}
                                        onChange={this.handleChangeDate}
                                        minDate={moment()}
                                    />
                                </Form.Field>
                            </Form>
                        )}
                    />
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