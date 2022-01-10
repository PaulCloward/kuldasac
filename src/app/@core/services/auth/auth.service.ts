import { Injectable } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/compat/functions';
import { first } from 'rxjs';
import { CloudFunctions } from '../../constants/CloudFunctions';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private mFireFunctions:AngularFireFunctions) { }

  async createUser(email: string, password: string, first_name: string, last_name: string): Promise<string> {
    return this.mFireFunctions.httpsCallable(CloudFunctions.REGISTER_USER)({
        info: { email, first_name, last_name }, password
      })
      .pipe(first()).toPromise()
      .then((result:any) => {
        if (!result.uuid) {
          console.error({message: 'Failed to create user', error: result.error});
          return Promise.reject(result.error);
        }
        return Promise.resolve(result.uuid);
      });
  }
}
