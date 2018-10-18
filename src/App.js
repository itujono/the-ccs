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

const App = () => (
	<Provider store={store()}>
		<Grid centered stackable padded className="main-app">
			<Grid.Column width={16}>
				<Responsive as={Segment} minWidth={768} basic textAlign="right" style={segmentStyle}>
					<div className="main-logo">
						<Header as="h3"><span className="tosca">c</span>ode</Header>
						<Header as="h3"><span className="tosca">c</span>ollective</Header>
						<Header as="h3"><span style={{ color: 'orange' }}>s</span>tudio</Header>
					<Label as="a" href="/about" circular size="tiny" color="orange"><Icon name="question" /> FAQ</Label>
					</div>
				</Responsive>
				<Router />
			</Grid.Column>
		</Grid>
	</Provider>
)

export default App;
