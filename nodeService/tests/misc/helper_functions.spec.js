const request = require('supertest')
const app = require('../../index')
const { createPasswordHash } = require('../../misc/helper_functions')

describe('Helper functions', () => {
	let server, agent

	beforeEach(done => {
		server = app.listen(4000, err => {
			if (err) return done(err)

			agent = request.agent(server)
			done()
		})
	})

	afterEach(done => {
		return server && server.close(done)
	})

	describe('createPasswordHash', () => {
		it('should hash password', async () => {
			const res = createPasswordHash('myPassword')
			expect(res).toBeDefined()
		})
	})
})
