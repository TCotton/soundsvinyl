import 'react';
import 'react-dom';
import 'react-dom/test-utils';
import 'react-test-renderer/shallow';
import Vue from 'vue';
Vue.config.productionTip = false;

// We use the context method on `require` which Webpack created
// in order to signify which files we actually want to require or import.
// Below, `context` will be a/an function/object with file names as keys.
// Using that regex, we scan within `src/app` and target
// all files ending with `.spec.js` and trace its path.
// By passing in true, we permit this process to occur recursively.
const testContext = require.context('../app', true, /\.spec$/);

// Get all files, for each file, call the context function
// that will require the file and load it here. Context will
// loop and require those spec files here.
testContext.keys().forEach(testContext);

const appContext = require.context('../app/admin', true, /\.spec$/);
appContext.keys().forEach(appContext);
