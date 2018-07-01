import { Injectable } from '@angular/core';
import { AngularFireAuth} from 'angularfire2/auth';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';



@Injectable()
export class AuthService {

  isAutneticated: Boolean = false;

   authChange = new Subject<boolean>();
  constructor(
    private afauth: AngularFireAuth ,
    private router: Router ) {}

  // 로그인 상태 여부검사
  initAuthListener() {
     this.afauth.authState.subscribe( (user) => {
        if (user) {
          this.router.navigate(['starter']);
          this.isAutneticated = true;
        } else {
          this.router.navigate(['signup']);
        }
     });
  }

  // 사용자 등록
  registerUser(email: string, password: string) {
    this.afauth.auth.createUserWithEmailAndPassword(email, password)
    .then( (result) => {
       this.router.navigate(['starter']);
    })
    .catch( error => {
       return error;
    });
   }

  // 사용자 로그인
  loginUser(email: string, password: string) {
    this.afauth.auth.createUserWithEmailAndPassword(email, password)
    .then( (result) => {
      this.isAutneticated = true;
      this.router.navigate(['starter']);
    })
    .catch( error => {
     console.log(error);
    });
   }

   logout() {
      this.afauth.auth.signOut();
      return this.isAutneticated = false;
   }

   // 등록 여부
   isAuth() {
     return this.isAutneticated;
   }

   private authSuccessfully() {
    this.isAutneticated = true;
   }

}
