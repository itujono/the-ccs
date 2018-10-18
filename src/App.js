import React from "react";
import { Provider } from "react-redux";
import store from "./state/store"
import Router from "./router";
import "./App.css";
import { Grid, Header, Segment, Responsive, Label, Icon } from "semantic-ui-react";




const segmentStyle = {
	marginBottom: 0,
	padding: 0
}

class App extends React.Component {

	state = { changeColor: false }

	handleChangeColor = () => this.setState(prevState => ({ changeColor: !prevState.changeColor }))

	render() {

		const { changeColor } = this.state

		return (
			<Provider store={store()}>
				<Grid centered stackable padded className={`main-app ${ changeColor ? 'dark' : '' }`}>
					<Grid.Column width={16}>
						<Responsive as={Segment} minWidth={768} basic textAlign="right" style={segmentStyle}>
							<div className="main-logo">
								<Header as="h3"><span className="tosca">c</span>ode</Header>
								<Header as="h3"><span className="tosca">c</span>ollective</Header>
								<Header as="h3"><span style={{ color: 'orange' }}>s</span>tudio</Header>
							<Label as="a" href="/about" circular size="tiny" color="orange"><Icon name="question" /> FAQ</Label>
							</div>
						</Responsive>
						<Router changeColor={this.state.changeColor} onChangeColor={this.handleChangeColor} />
					</Grid.Column>
				</Grid>
			</Provider>
		)
	}
}

export default App;
