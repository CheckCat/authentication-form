import { NavLink } from 'react-router-dom'
import Form from "../utils/Form";
import ClassName from "../utils/ClassName";
import errorCollection from "../utils/errors";
import { REG_URL } from "../utils/urls";

export default class Reg extends Form {
	constructor({ classNames }) {
		super()
		this.classNameForm = classNames.form_className
		this.classNameSubmit = classNames.submit_className
		this.classNameError = classNames.error_className
		this.classNameTitle = classNames.title_className
		this.classNameWrapper = classNames.wrapper_className
		this.classNameInput = classNames.input_className
		this.classNameLabel = classNames.label_className
		this.classNameBack = classNames.back_className
	}
	/*
	* Adding functionality to the sendForm method.
	* In this case, we check that the values of the password fields match
	**/
	async sendForm(typeError, e, url, method, headers) {
		e.preventDefault()
		const passwordFiedls = Array.from(e.target.elements).filter(field => field.type === 'password')

		if (passwordFiedls[0].value !== passwordFiedls[1].value) {
			this.setState({ isShowError: true, currentError: 'mismatchPassword' })
			return false
		}
		super.sendForm(typeError, e, url, method, headers)
	}

	render() {
		if (Array.isArray(this.classNameForm)) this.classNameForm = this.classNameForm.join(' ')
		const classNameWorker = new ClassName()
		const { isShowError, currentError } = this.state

		return (
			<>
				<form onSubmit={e => this.sendForm('errorRegistry', e, REG_URL)}
					className={classNameWorker.validateClassName(this.classNameForm)}>
					<NavLink className={classNameWorker.validateClassName(this.classNameBack)} exact to="/" />
					<h1 className={this.classNameTitle}>Registry</h1>
					<div className={classNameWorker.validateClassName(this.classNameWrapper)}>
						<label htmlFor='email' className={this.classNameLabel}>Email</label>
						<input type='email' id='email' className={this.classNameInput} data-fetch_field='email' placeholder='Enter your email' />
					</div>
					<div className={classNameWorker.validateClassName(this.classNameWrapper)}>
						<label htmlFor='password' className={this.classNameLabel}>Password</label>
						<input type='password' id='password' className={this.classNameInput} data-fetch_field='password' placeholder='Enter your password' />
					</div>
					<div className={classNameWorker.validateClassName(this.classNameWrapper)}>
						<label htmlFor='confirm-password' className={this.classNameLabel}>Confirm password</label>
						<input type='password' id='confirm-password' className={this.classNameInput} placeholder='Confirm your password' />
					</div>
					{isShowError && <div onClick={this.hideError.bind(this)} className={this.classNameError}>{errorCollection[currentError]}</div>}
					<input type='submit' className={classNameWorker.validateClassName(this.classNameSubmit)} value='Send' />
				</form>
			</>
		)
	}
}