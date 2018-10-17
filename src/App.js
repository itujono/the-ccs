import React from "react";
import { Provider } from "react-redux";
import store from "./state/store"
import Router from "./router";
import "./App.css";
import { Grid, Container, Header } from "semantic-ui-react";



const App = () => (
	<Provider store={store()}>
		<Grid centered padded className="main-app">
			<Grid.Column width={16}>
				<Container>
					<div className="main-logo">
						<Header as="h3"><span className="tosca">c</span>ode</Header>
						<Header as="h3"><span className="tosca">c</span>ollective</Header>
						<Header as="h3"><span style={{ color: 'orange' }}>s</span>tudio</Header>
					</div>
				</Container>
				<Router />
			</Grid.Column>
		</Grid>
	</Provider>
)

export default App;
