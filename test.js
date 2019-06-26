'use strict';

const app = require('./server');
const test = require('tape');
const request = require('supertest');

test('api/items endpoint', (t) => {
	request(app)
		.get('api/items')
		.expect('Content-type', /json/)
		.end((err, res) => {
			const expected = {
				"id": 1,
        "title": "book",
        "expiry_date": "2019-06-25T12:24:17.000Z"
				};
			const actual = res.body;

			t.error(err, 'No error');
			t.same(actual, expected, 'Received expected answer');
			t.end();
		});
});
