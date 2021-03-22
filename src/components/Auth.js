import Form from "../utils/Form";
import CreateElement from "../utils/CreateElement";
import ClassName from "../utils/ClassName";

export default class Auth extends Form {
	constructor({classNames: {form_className, input_default_classNames, input_submit_className, error_className, heading_className}}) {
		super()
		this.classNameForm = form_className
		this.classNameInputDefault = input_default_classNames
		this.classNameInputSubmit = input_submit_className
		this.classNameError = error_className
		this.classNameHeading = heading_className
	}

	render() {
		if (Array.isArray(this.classNameForm)) this.classNameForm = this.classNameForm.join(' ')
		const factory = new CreateElement()
		const classNameWorker = new ClassName()
		const {isShowError, errorCollection, currentError} = this.state
		const url = 'https://google.com'

		return (
			<>
				<form onSubmit={e => this.sendForm('errorAuth', e, url)}
							className={classNameWorker.validateClassName(this.classNameForm)}>
					{factory.createHeading('Authorization', classNameWorker.validateClassName(this.classNameHeading))}
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
					{isShowError && factory.createError(errorCollection[currentError], classNameWorker.validateClassName(this.classNameError), this.hideError.bind(this))}
					{factory.createInput('submit', classNameWorker.validateClassName(this.classNameInputSubmit), 'Send')}
				</form>
			</>
		)
	}
}