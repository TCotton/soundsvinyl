let domEl;

export function bootstrap(props) {
	return Promise
		.resolve()
		.then(() => {
			console.log('bootstrapped!');
			domEl = document.createElement('div');
			domEl.id = 'app1';
			document.body.appendChild(domEl);
		});
}

export function mount(props) {
	return Promise
		.resolve()
		.then(() => {
			console.log('mounted!');
			// This is where you would normally use a framework to mount some ui to the dom. See
			// https://github.com/CanopyTax/single-spa/blob/master/docs/single-spa-ecosystem.md.
			domEl.textContent = 'App 1 is mounted!';
		});
}

export function unmount(props) {
	return Promise
		.resolve()
		.then(() => {
			console.log('unmount!');
			// This is normally where you would tell the framework to unmount the ui from the dom. See
			// https://github.com/CanopyTax/single-spa/blob/master/docs/single-spa-ecosystem.md
			domEl.textContent = '';
		});
}
