import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { CspConfig } from "./csp-config.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavigationComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  private csp!: string;
  private nonce!:string;

  constructor(public cspConfig: CspConfig) {
    cspConfig.load().subscribe(
      data => {
        this.csp = data.value;
        this.nonce = data.nonce;

        // can't use the Meta#addTags() method to set CSP because it will insert the meta tag too late, so we add it "manually"
        const meta = "<meta http-equiv=\"Content-Security-Policy\" content=\"" + this.csp + "\">";
        this.renderHtml(meta, 'head');
        console.log('content-security-policy meta  : ' + meta);

        const yourHtmlString =
          "<script nonce='" + this.nonce + "'>" +
          "document.getElementsByTagName('body')[0].appendChild(" +
          "document.createRange().createContextualFragment(" +
          "'<h1>Inline scripting is <b>not recommended</b>! But if you have not the choice, <b>secure your app with CSP</b></h1>'));</script>";
        this.renderHtml(yourHtmlString, 'head');
        console.log('inline scripting !!! ', yourHtmlString);
      });
  }

  private renderHtml(message:string, parentTag: string){
    const fragment = document.createRange().createContextualFragment(message);
    document.getElementsByTagName(parentTag)[0].appendChild(fragment);
  }
}
