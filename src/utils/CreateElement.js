export default class CreateElement {

	createInput = (type, className, value, name, fetch_field, placeholder) => {
		!value && (value = '')

		return (
			<input
				type={type}
				className={className}
				value={value}
				name={name}
				placeholder={placeholder}
				required
			/>
		)
	}

	createHeading = (textHeading, className, category) => {

		switch (category) {
			case 'h2':
				return (<h2 className={className}>{textHeading}</h2>)
			case 'h3':
				return (<h3 className={className}>{textHeading}</h3>)
			case 'h4':
				return (<h4 className={className}>{textHeading}</h4>)
			case 'h5':
				return (<h5 className={className}>{textHeading}</h5>)
			case 'h6':
				return (<h6 className={className}>{textHeading}</h6>)
			default:
				return (<h1 className={className}>{textHeading}</h1>)
		}
	}


	createInputWithLabel = (textLabel, typeInput, fetch_field, id, name, input_default_classNames, placeholder) => {
		const [wrapper_className, input_className, label_className] = input_default_classNames

		return (
			<div className={wrapper_className}>
				<label
					htmlFor={id}
					className={label_className}
				>
					{textLabel}
				</label>
				<input
					type={typeInput}
					id={id}
					name={name}
					className={input_className}
					placeholder={placeholder}
					data-fetch_field={fetch_field}
					required
				/>
			</div>
		)
	}

	createError = (text, className, callback) => {

		return (
			<div onClick={callback} className={className}>
				{text}
			</div>
		)
	}
}