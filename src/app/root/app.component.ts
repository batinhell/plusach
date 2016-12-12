import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private ngZone: NgZone) {}

  ga: any = {};
  auth2: any = {};
  image: string = "";

  singOut() {
    this.ga.signOut();
  }

  setImage(src) {
    this.image = src;
  }

  updateSignIn(signedIn, self) {
    if (signedIn) {
      console.log("Signed in", self);
      let a = gapi.auth2.getAuthInstance();
      let user = a.currentUser.get();
      let img = user.getBasicProfile().getImageUrl();
      // this.setImage(img);
    } else {
      console.log("Signed Out")
    }
  }

  userListen(user) {
    console.log('User listen', user);
    if (user.get()) {
      let u = user.get();
      let image = u.getBasicProfile().getImageUrl();
      this.image = image;
    }
    
  }


  ngOnInit() {
    // console.log('1',gapi);
    // gapi.load('auth2', () => {
    //   console.log('2',gapi);
    //   this.ga = gapi.auth2.init({
    //     client_id: "565690489784-1g171qnu6b1lhtei981f7tec5r455l9u.apps.googleusercontent.com",
    //     fetch_basic_profile: false,
    //     scope: "https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/plus.me profile"
    //   });
    //   this.ga.then(() => {
    //     this.auth2 = gapi.auth2.getAuthInstance();
    //     console.log('init', this.auth2.currentUser.get());
    //     this.auth2.isSignedIn.listen((signedIn) => {
    //       if (signedIn) {
    //         console.log("Signed in");
    //         let a = gapi.auth2.getAuthInstance();
    //         let user = a.currentUser.get();
    //         console.log('u', user);
    //         let img = user.getBasicProfile().getImageUrl();
    //         this.ngZone.run(() => this.image = img);
    //       } else {
    //         console.log("Signed Out")
    //         this.image = '';
    //       }
    //     });
    //     console.log('check', this.auth2.isSignedIn.get());
        
    //     this.auth2.attachClickHandler('singin',
    //       { scope: "https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/plus.me profile" },
    //       (googleUser) => {
    //         console.log("success2", googleUser);
            
    //       }
    //     )
    //   })
    // });

  }

  
}
