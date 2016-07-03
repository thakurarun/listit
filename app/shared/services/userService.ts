import {Injectable} from "@angular/core";
import {Observable, Observer, ConnectableObservable} from "rxjs/Rx";
import {UserModel} from "./../model/userModel";

@Injectable()
export class UserService {
  signIn(user: UserModel): ConnectableObservable<any> {
    let obs: Observable<any> = Observable.create((observer: Observer<any>) => {
      if (user.Email == "arun.thakur@mail.com" && user.Password == "123456") {
        observer.next(true);
      }
      else {
        observer.error("Invalid Credentials");
      }
      observer.complete();
      //return () => { console.log("disposable called..."); }; //dispose observable
    });
    return obs.publish();
    // return new Promise((resolve, reject) => {
    //   if (user.Email == "arun.thakur@mail.com" && user.Password == "123456") {
    //     resolve(true);
    //   } else {
    //     reject("Invalid credentials");
    //   }
    // });
  }
  register(user: UserModel) {
    alert("About to register: " + user.Email);
  }
}