export default class ClassName {

	validateClassName(className) {

		return Array.isArray(className) ? className.join(' ') : className
	}
}