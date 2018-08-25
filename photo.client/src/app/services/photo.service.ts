import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Photo } from '../models/photo.model';

@Injectable()
export class PhotoService {

    baseUrl: string = environment.apiurl + 'photo/';

    constructor(private http: HttpClient) { }

    list() {
        return this.http.get<Photo[]>(this.baseUrl);
    }

    add(item: Photo) {
        return this.http.post<Photo>(this.baseUrl, item);
    }
}
