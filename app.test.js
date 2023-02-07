const request = require('supertest')
const app = require('./index')


describe('GET person all', () => {
    test('should get all person', async () => {
        const res = await request(app).get('/all-person')
        expect(res.status).toBe(200)
    })
})