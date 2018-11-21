import React from 'react';
import { getCookieValue } from '../helper_functions.js';

describe( 'getCookieValue', () => {
	let result;
	const cookieValue = 'oeschger';
	const document = {
		value_: '',

		get cookie() {
			return this.value_;
		},

		set cookie(value) {
			this.value_ += value + ';';
		}
	};

	beforeEach( () => {
		document.cookie = `name=${cookieValue}`;
		result = getCookieValue('name');
	});

	describe( 'method', () => {
		it( 'should be defined', () => {
			expect( result ).toBeDefined();
		});
		it( 'should be the correct value', () => {
			expect( result ).toBe(cookieValue);
		});
	});
});
