import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of } from "rxjs";

type NonceConfig = {
  value: string;
  nonce: string;
}

@Injectable({
  providedIn: 'root'
})
// This service gets the Content-Security-Policy and a random nonce from a REST api endpoint /api/csp
export class CspConfig {

  private _config: any;
  private _nonce: any;
  private http = inject(HttpClient);

  load(): Observable<NonceConfig> {
    // ToDo load CSPs from Backend-Api: 'http://localhost:3000/csp'
    return of({ value: '', nonce: '' });
  }

  get config(): string {
    return this._config;
  }

  get nonce(): string {
    return this._nonce;
  }
}
