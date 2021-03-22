import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Reg from "./Reg"
import Auth from "./Auth"
import classNames from '../utils/classnames'

export default class App extends Component {

	render() {
		return (
			<>
				<BrowserRouter>
					<Switch>
						<Route path="/" render={() => <Auth classNames={classNames} />} exact />
						<Route path="/reg" render={() => <Reg classNames={classNames} />} />
					</Switch>
				</BrowserRouter>
			</>
		)
	}
}