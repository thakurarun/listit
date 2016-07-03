import {Injectable} from "@angular/core";
import { HTTP_PROVIDERS, Http }  from '@angular/http';
import {Observable, Observer, ConnectableObservable} from "rxjs/Rx";
import {Item, Category} from "./../model/incoming/itemModel";

@Injectable()
export class ListService {
    constructor(private http: Http) {
    }
    getItems(): ConnectableObservable<Item[]> {
        let self = this;
        let obs: Observable<any> = Observable.create((observer: Observer<any>) => {
            return self.http.get('http://localhost:5858/api/items')
                .map((x) => <Item[]> x.json().data.data);
        });
        return obs.publish();

    }
}