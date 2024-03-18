import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from "rxjs";

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
    return this.http.get<NonceConfig>('http://localhost:3000/csp').pipe(
      map(data => {
        this._config = data.value;
        this._nonce = data.nonce;
        return data;
      }))
  }

  get config(): string {
    return this._config;
  }

  get nonce(): string {
    return this._nonce;
  }
}
