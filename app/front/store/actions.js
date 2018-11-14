import store from './store';

export default class storeActions {
	static subscribe ( fn ) {
		store.subscribe( fn );
	}

	static getState () {
		return store.getState();
	}

	static setSections ( pages ) {
		store.dispatch({ type: 'SET_PAGES', payload: pages || [] });
	}

}
