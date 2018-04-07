import { declareChildApplication, start } from 'single-spa';

// Register your first application with single-spa. More apps will be registered as you create them
declareChildApplication('cool-app', loadCoolApp, isCoolAppActive);

// Tell single-spa that you're ready for it to mount your application to the DOM
start();

// This is a "loading function"
function loadCoolApp() {
	return import('./cool-app/cool.app.js');
}

// This is an "activity function"
function isCoolAppActive() {
	return window.location.hash.startsWith('#/cool');
}