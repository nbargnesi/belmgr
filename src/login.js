import {AuthService} from 'aurelia-auth';
import {LogManager} from 'aurelia-framework';
import {inject} from 'aurelia-framework';
let log = LogManager.getLogger('login');

@inject(AuthService)
export class Login {

	constructor(auth) {
		this.auth = auth;
    log.debug(auth.config.providers);
	};

	heading = 'Login';

	email='';
	password='';
	login() {
		var promise = this.auth.login(this.email, this.password);
		return promise.then(response => {
			console.log("success logged " + response);
		}).catch(err => {
			console.log("login failure");
		});
	};

	authenticate(name) {
		var promise = this.auth.authenticate(name, false, null);
		return promise.then((response) => {
			console.log("auth response " + response);
		});
	}
}
