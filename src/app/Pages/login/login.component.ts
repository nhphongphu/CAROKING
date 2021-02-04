import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any;
  constructor(private auth: AngularFireAuth) { }
  public provider = new firebase.default.auth.GoogleAuthProvider();
  public async login() {
    try {
      await this.auth.signInWithPopup(this.provider);
      alert('Đăng nhập thành công');
    } catch (err) {
      console.log(err);
    }
  }

  public async logout() {
    try {
      await this.auth.signOut();
      this.user = null;
      alert('Đăng xuất thành công');
    } catch (err) {
      console.log(err);
    }
  }
  ngOnInit(): void {
    this.auth.authState.subscribe((helo) => {
      if (helo) {
        this.user = helo;
      }
    });
  }

  ngOnDestroy(): void {
    this.user = null;
  }
}



