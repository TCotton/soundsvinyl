export const findRootElement = () => {
	if (!document.getElementById('root')) {
		document.body.insertAdjacentHTML('beforeend', '<div id="root"></div>');
	}
}
