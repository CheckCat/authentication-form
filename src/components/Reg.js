import Form from "../utils/Form";
import CreateElement from "../utils/CreateElement";
import ClassName from "../utils/ClassName";

export default class Reg extends Form {
	constructor({classNames: {form_className, input_default_classNames, input_submit_className, error_className, heading_className}}) {
		super()
		this.classNameForm = form_className
		this.classNameInputDefault = input_default_classNames
		this.classNameInputSubmit = input_submit_className
		this.classNameError = error_className
		this.classNameHeading = heading_className
	}
	/*
	* Adding functionality to the sendForm method.
	* In this case, we check that the values of the password fields match
	**/
	async sendForm(typeError, e, url, method, headers) {
		e.preventDefault()
		const passwordFiedls = Array.from(e.target.elements).filter(field => field.type === 'password')

		if (passwordFiedls[0].value !== passwordFiedls[1].value) {
			this.setState({isShowError: true, currentError: 'mismatchPassword'})
			return false
		}
		super.sendForm(typeError, e, url, method, headers)
	}

	render() {
		if (Array.isArray(this.classNameForm)) this.classNameForm = this.classNameForm.join(' ')
		const factory = new CreateElement()
		const classNameWorker = new ClassName()
		const {isShowError, errorCollection, currentError} = this.state
		const url = 'https://google.com'

		return (
			<>
				<form onSubmit={e => this.sendForm('errorRegistry', e, url)}
							className={classNameWorker.validateClassName(this.classNameForm)}>
					{factory.createHeading('Registry', classNameWorker.validateClassName(this.classNameHeading))}
					{factory.createInputWithLabel(
						'Email',
						'email',
						'email',
						'email',
						'email',
						classNameWorker.validateClassName(this.classNameInputDefault),
						'Enter your Email'
					)}
					{factory.createInputWithLabel(
						'Password',
						'password',
						'password',
						'password',
						'password',
						classNameWorker.validateClassName(this.classNameInputDefault),
						'Enter your password'
					)}
					{factory.createInputWithLabel(
						'Confirm password',
						'password',
						null,
						'confirm-password',
						'confirm-password',
						classNameWorker.validateClassName(this.classNameInputDefault),
						'Confirm your password'
					)}
					{isShowError && factory.createError(errorCollection[currentError], classNameWorker.validateClassName(this.classNameError), this.hideError.bind(this))}
					{factory.createInput('submit', classNameWorker.validateClassName(this.classNameInputSubmit), 'Send')}
				</form>
			</>
		)
	}
}