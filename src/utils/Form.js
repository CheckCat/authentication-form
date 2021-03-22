import {Component} from 'react'

export default class Form extends Component {

	constructor() {
		super()
		this.state = {
			isShowError: false,
			errorCollection: {
				'mismatchPassword': 'Passwords don\'t match',
				'errorRegistry': 'Registration error',
				'errorAuth': 'Authorization error'
			},
			/* With the state "currentError", we can control which error will be on
				the page at the moment*/
			currentError: ''
		}
	}

	hideError() {
		this.setState({isShowError: false})
	}
	/*
	* Using the "typeError" parameter,
	* we can tell the "sendForm" method what error we
	* want to see when the fetch attempt fails
	* */
	async sendForm(typeError, e, url, method, headers) {
		e.preventDefault()
		/*const body = Array.from(e.target.elements).reduce((accum, input) => {
			if (input.type === 'submit' || !input.dataset.fetch_field) return accum
			accum[input.dataset.fetch_field] = input.value
			return accum
		}, {})*/
		const body = null

		try {
			const response = await fetch(url, {
				method,
				headers,
				body
			})
			return await response.json()
		} catch (e) {
			this.setState({isShowError: true, currentError: typeError})
		}
	}
}