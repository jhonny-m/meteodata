const request = require('supertest');
const app = require('./app');
const msw =require('msw');
const nodeMsw =require('msw/node');

const {rest} = msw;
const {setupServer}= nodeMsw;
const baseUrl =process.env.OWM_LOCATION;

const mockedResponse = {'main':{'temp':287.92},'sys':{'sunrise':1602917304,'sunset':1602957042},'name':'Porto'};

const server = setupServer(
	rest.get(baseUrl+'/weather', (req, res, ctx) => {
		return res(ctx.json(mockedResponse));
	})
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Test the root path', () => {
	test('It should response the GET method', () => {
		return request(app)
			.get('/')
			.then(response => {
				expect(response.statusCode).toBe(200);
			});
	});
});


describe('Test /search', () => {
	test('It should response with the data the OWM API returns', () => {
		return request(app)
			.get('/search?cities=porto&cities=aveiro&cities=braga')
			.then(response => {
				expect(response.statusCode).toBe(200);
				expect(response.body).toStrictEqual([
					{
					  cityName: 'Porto',
					  sunriseDate: 1602917304,
					  sunsetDate: 1602957042,
					  temperature: 287.92
					},
					{
					  cityName: 'Porto',
					  sunriseDate: 1602917304,
					  sunsetDate: 1602957042,
					  temperature: 287.92
					},
					{
					  cityName: 'Porto',
					  sunriseDate: 1602917304,
					  sunsetDate: 1602957042,
					  temperature: 287.92
					}
				  ]);
			});
	});
	test('should return error when OWM api returns error',()=>{
		server.use(
			rest.get(baseUrl+'/weather', (req, res, ctx) => {
				return res(ctx.status(500));
			}));
		return request(app)
			.get('/search?cities=porto&cities=aveiro&cities=braga').then(response=>{
				expect(response.statusCode).toBe(500);
			});


	});
});