const request = require( 'supertest' );
const app = require( '../../index' );
const jwt = require( 'jsonwebtoken' );
// const mockingoose =  require('mockingoose');
// const Comment = require('../../models/comment');
jest.mock( '../../models/comment' );
jest.mock( '../../routes/page' );
jest.mock( '../../routes/jwt' );

jest.mock( '../../models/comment', () => {
	return {
		find: jest.fn( () => Promise.resolve( { success: true } ) )
	}
});

describe('Test the root path', () => {
	test('It should response the GET method', async () => {
		const response = await request(app).get('/apiV1/comment/get');
		console.dir(response);
		expect(response.statusCode).toBe(200);
	});
})

// (time, 'setTimeout');

describe.skip( 'Comment', () => {
	let server, agent, stub;

	beforeEach( done => {
		server = app.listen( 4000, err => {
			if( err ) return done( err );

			agent = request.agent( server );
			done();
		});

		jest.spyOn( jwt, 'verify' ).mockImplementation( () => {
			return Promise.resolve( { success: 'Token is valid' } );
		});
	});

	afterEach( done => {
		// stub.restore();
		return server && server.close( done );
	});

	describe( '/GET join', () => {
		it( 'should get all join', async() => {

			const res = await request( server )
				.get( '/apiV1/comment/get' )
				.expect( 200, { success: true } );
			expect( res.status ).toBe( 200 );
			expect( res.body ).toBeDefined();
			expect( res.body.success ).toEqual( true );
		}, 3000 );
	});

});
