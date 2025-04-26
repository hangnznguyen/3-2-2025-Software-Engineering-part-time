const request = require("supertest");
const app = require("./app"); // Import your Express app

// Generate random test values to reuse in all tests
let num1 = Math.floor(Math.random() * 1000000);
let num2 = Math.floor(Math.random() * 1000000);

describe('calculator Routes', () => {

    test('GET /calculator/add => sum of two numbers', () => {
        return request(app)
            .get(`/calculator/add?num1=${num1}&num2=${num2}`)
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).toEqual({
                    result: num1 + num2
                }); 
            });
    });

    test('GET /calculator/subtract => subtraction of two numbers', () => {
        return request(app)
            .get(`/calculator/subtract?num1=${num1}&num2=${num2}`)
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).toEqual({
                    result: num1 - num2
                }); 
            });
    });

    test('GET /calculator/divide => division of two numbers', () => {
        return request(app)
            .get(`/calculator/divide?num1=${num1}&num2=${num2}`)
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).toEqual({
                    result: num2 !== 0 ? num1 / num2 : null // optional: handle division by zero
                }); 
            });
    });

    test('GET /calculator/multiply => multiplication of two numbers', () => {
        return request(app)
            .get(`/calculator/multiply?num1=${num1}&num2=${num2}`)
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).toEqual({
                    result: num1 * num2
                }); 
            });
    });

});