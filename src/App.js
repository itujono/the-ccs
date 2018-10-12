import React from "react";
import { Provider } from "react-redux";
import store from "./state/store"
import Router from "./router";
import "./App.css";
import { Grid } from "semantic-ui-react";



const App = () => (
	<Provider store={store()}>
		<Grid centered padded className="main-app">
			<Grid.Column width={16}>
				<Router />
			</Grid.Column>
		</Grid>
	</Provider>
)

export default App;
