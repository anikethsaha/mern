const request = require('supertest')
const app = require('../src/server/')


// console.log('app', app)

describe('GET /', () => {
  it("shoudld return status 200",() => {
    return request(app).get('/').expect(200)
  },500)
})



afterAll((done) => {
  done()
})
