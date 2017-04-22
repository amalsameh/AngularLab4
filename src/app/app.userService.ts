import {Http,Response} from '@angular/Http';
import {Injectable} from '@angular/core'
import {Observable} from 'rxjs/observable';

@Injectable()
export class userService
{
    data:any;
    constructor(public _http:Http)
    {
    }
    getUserData(id:number):Observable<any>
    {
        return this._http.get('http://jsonplaceholder.typicode.com/users/'+id);
    }
    getUserPosts(id:number):Observable<any>
    {
        return this._http.get('http://jsonplaceholder.typicode.com/posts?userId='+id);
    }
}