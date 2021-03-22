export default class ClassName {
	validateClassName(className) {
		if (Object.keys(className).find(key => isNaN(+key))) {
			const classNames = Object.values(className)
			return classNames.map(item => Array.isArray(item) ? item.join(' ') : item)
		}
		return Array.isArray(className) ? className.join(' ') : className
	}
}