import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService{


  constructor(private https: HttpClient) { }

  login(value) {
		let headers = new HttpHeaders({
			'Content-Type': 'application/json'
		});
			let options = { headers: headers, method: 'post' };
    return this.https.post(environment.apiPath + '/login',value).pipe(map(res => <any>res));
  }
  changePassword(value){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let options = { headers: headers, method: 'post' };
    return this.https.post(environment.apiPath + '/changePassword',value).pipe(map(res => <any>res));
  }
  register(value) {
		let headers = new HttpHeaders({
			'Content-Type': 'application/json'
		});
			let options = { headers: headers, method: 'post' };
    return this.https.post(environment.apiPath + '/signUp',value).pipe(map(res => <any>res));
  }

  VerifyCode(value){
		let headers = new HttpHeaders({
			'Content-Type': 'application/json'
		});
			let options = { headers: headers, method: 'post' };
    return this.https.post(environment.apiPath + '/VerifyCode',value).pipe(map(res => <any>res));
  }
  resendCode(value){
		let headers = new HttpHeaders({
			'Content-Type': 'application/json'
		});
			let options = { headers: headers, method: 'post' };
    return this.https.post(environment.apiPath + '/resendCode',value).pipe(map(res => <any>res));
  }
  userUpdate(value){
		let headers = new HttpHeaders({
			'Content-Type': 'application/json'
		});
			let options = { headers: headers, method: 'post' };
    return this.https.post(environment.apiPath + '/userUpdate',value).pipe(map(res => <any>res));
  }
  userProfile(value){
		let headers = new HttpHeaders({
			'Content-Type': 'application/json'
		});
			let options = { headers: headers, method: 'post' };
    return this.https.post(environment.apiPath + '/userProfile',value).pipe(map(res => <any>res));
  }
  companyLogo(value){
		let headers = new HttpHeaders({
			'Content-Type': 'application/json'
		});
			let options = { headers: headers, method: 'post' };
    return this.https.post(environment.apiPath + '/companyLogo',value).pipe(map(res => <any>res));
  }
  companyCover(value){
		let headers = new HttpHeaders({
			'Content-Type': 'application/json'
		});
			let options = { headers: headers, method: 'post' };
    return this.https.post(environment.apiPath + '/companyCover',value).pipe(map(res => <any>res));
  }
  userDetail(){
		let headers = new HttpHeaders({
			'Content-Type': 'application/json'
		});
      let options = { headers: headers, method:'get'};
      let valueId= localStorage.getItem('user_id');
    return this.https.get(environment.apiPath + '/userDetail?user_id='+valueId,).pipe(map(res => <any>res));
  }
  forgot_password(value){
		let headers = new HttpHeaders({
			'Content-Type': 'application/json'
		});
			let options = { headers: headers, method: 'post' };
    return this.https.post(environment.apiPath + '/forgot_password',value).pipe(map(res => <any>res));
  }

  resetPassword(value){
		let headers = new HttpHeaders({
			'Content-Type': 'application/json'
		});
			let options = { headers: headers, method: 'post' };
    return this.https.post(environment.apiPath + '/resetPassword',value).pipe(map(res => <any>res));
  }

  showCampaign(value){
		let headers = new HttpHeaders({
			'Content-Type': 'application/json'
		});
      let options = { headers: headers, method: 'post' };

    return this.https.post(environment.apiPath + '/showCampaign',value).pipe(map(res => <any>res));
  }
  createCampaign(value){
		let headers = new HttpHeaders({
			'Content-Type': 'application/json'
		});
			let options = { headers: headers, method: 'post' };
    return this.https.post(environment.apiPath + '/createCampaign',value).pipe(map(res => <any>res));
  }
  PhotoUpload(value){
		let headers = new HttpHeaders({
			'Content-Type': 'application/json'
		});
			let options = { headers: headers, method: 'post' };
    return this.https.post(environment.apiPath + '/PhotoUpload',value).pipe(map(res => <any>res));
  }
  extraFields(){
		let headers = new HttpHeaders({
			'Content-Type': 'application/json'
		});
			let options = { headers: headers, method: 'get' };
    return this.https.get(environment.apiPath + '/extraFields').pipe(map(res => <any>res));
  }
  createticket(value){
		let headers = new HttpHeaders({
			'Content-Type': 'application/json'
		});
			let options = { headers: headers, method: 'post' };
    return this.https.post(environment.apiPath + '/createticket',value).pipe(map(res => <any>res));
  }
  loadTicketCategory(){
		let headers = new HttpHeaders({
			'Content-Type': 'application/json'
		});
			let options = { headers: headers, method: 'get' };
    return this.https.get(environment.apiPath + '/loadTicketCategory').pipe(map(res => <any>res));
  }

}



  