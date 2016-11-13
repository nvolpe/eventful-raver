import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { IEvent } from './event';

@Injectable()
export class EventService {
    private _jamBaseUrl = 'api/products/products.json';

    constructor(private _http: Http) { }

    getProducts(): Observable<IEvent[]> {
        return this._http.get(this._jamBaseUrl)
            .map((response: Response) => <IEvent[]>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    //getProduct(id: number): Observable<IEvent> {
    //    return this.getProducts()
    //        .map((products: IEvent[]) => products.find(p => p.productId === id));
    //}

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
