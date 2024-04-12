import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavigationComponent, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  value = `Hello!<img src="none" onerror="alert('This data has become code!')">`;
  renderedValue!: string | SafeHtml;
  unsafeRenderedValue!: SafeHtml;

  @ViewChild("divRender3") div!: ElementRef;

  constructor(private sanitizer: DomSanitizer) {
  }

  renderData() {
    const safeValue = this.sanitizer.bypassSecurityTrustHtml(this.value);
    // Div 1
    this.renderedValue = safeValue;

    // Div 2
    this.unsafeRenderedValue = safeValue;

    // Div 3
    this.div.nativeElement.textContent = '';
    const img = document.createElement('img');
    img.src = 'none';
    this.div.nativeElement.appendChild(img);
  }
}
