import { IConfig } from 'config';
import * as request from 'request-promise';

export default class RequestService {

	config: IConfig;
	constructor({
		config
	}) {
		this.config = config;
	}

	async make(options, body = null) {
		let requestOptions = {
			method: options.method,
			url: options.fullUrl ? options.url : this.config.apiUrl + options.url,
			headers: options.headers,
			form: body
		};
		if(options.jwt) {
			requestOptions.headers = {
				'Authorization': 'Bearer ' + options.jwt
			}
		}
		try {
			let response = await request(requestOptions);
			return response ? JSON.parse(response).result : false;
		} catch(error) {
			throw error;
		}
	}

}
