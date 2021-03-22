import { NavLink } from 'react-router-dom'
import Form from "../utils/Form";
import ClassName from "../utils/ClassName";
import errorCollection from "../utils/errors";
import { AUTH_URL } from "../utils/urls"

export default class Auth extends Form {
	constructor({ classNames }) {
		super()
		this.classNameForm = classNames.form_className
		this.classNameSubmit = classNames.submit_className
		this.classNameError = classNames.error_className
		this.classNameTitle = classNames.title_className
		this.classNameWrapper = classNames.wrapper_className
		this.classNameInput = classNames.input_className
		this.classNameLabel = classNames.label_className
		this.classNameLink = classNames.link_className
	}

	render() {
		if (Array.isArray(this.classNameForm)) this.classNameForm = this.classNameForm.join(' ')
		const classNameWorker = new ClassName()
		const { isShowError, currentError } = this.state

		return (
			<>
				<form onSubmit={e => this.sendForm('errorAuth', e, AUTH_URL)}
					className={classNameWorker.validateClassName(this.classNameForm)}>
					<NavLink className={classNameWorker.validateClassName(this.classNameLink)} exact to="/reg">Sign up</NavLink>
					<h1 className={classNameWorker.validateClassName(this.classNameTitle)}>Authorization</h1>
					<div className={classNameWorker.validateClassName(this.classNameWrapper)}>
						<label htmlFor='email' className={this.classNameLabel}>Email</label>
						<input type='email' id='email' className={this.classNameInput} data-fetch_field='email' placeholder='Enter your email' />
					</div>
					<div className={classNameWorker.validateClassName(this.classNameWrapper)}>
						<label htmlFor='password' className={this.classNameLabel}>Password</label>
						<input type='password' id='password' className={this.classNameInput} data-fetch_field='password' placeholder='Enter your password' />
					</div>
					{isShowError && <div onClick={this.hideError.bind(this)} className={this.classNameError}>{errorCollection[currentError]}</div>}
					<input type='submit' className={classNameWorker.validateClassName(this.classNameSubmit)} value='Send' />
				</form>
			</>
		)
	}
}