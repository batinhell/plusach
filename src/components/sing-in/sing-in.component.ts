import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'sing-in',
  templateUrl: './sing-in.component.html'
})
export class SingInComponent implements OnInit {
  private clientId: string;
  private scopes: string;
  private discoveryDocs: [string];
  private gapi;

  isSignedIn: boolean;

  constructor(private ngZone: NgZone) { 
    this.clientId = '565690489784-1g171qnu6b1lhtei981f7tec5r455l9u.apps.googleusercontent.com';
    this.scopes = 'https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/plus.me';
    this.discoveryDocs = ['https://www.googleapis.com/discovery/v1/apis/plus/v1/rest'];
  }

  singOut(): void {
    gapi.auth2.getAuthInstance().signOut();
  }

  updateSigninStatus(isSignedIn) {
    this.ngZone.run(() => this.isSignedIn = isSignedIn);
    console.log(isSignedIn);
  }


  ngOnInit() { 
    let initClient = () => {
        gapi.client.init({
          clientId: this.clientId,
          scope: this.scopes,
          discoveryDocs: this.discoveryDocs 
        }).then(() => {
          // Listen for sign-in state changes.
          gapi.auth2.getAuthInstance().isSignedIn.listen(this.updateSigninStatus);
          // Handle the initial sign-in state.
          this.updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
      });
    }
    gapi.load('client:auth2', initClient);
  }
}