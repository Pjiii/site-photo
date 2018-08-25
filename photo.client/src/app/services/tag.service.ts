import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Tag } from '../models/tag.model';

@Injectable()
export class TagService {

    baseUrl: string = environment.apiurl + 'tag/';

    constructor(private http: HttpClient) { }

    list() {
        return this.http.get<Tag[]>(this.baseUrl);
    }
}
