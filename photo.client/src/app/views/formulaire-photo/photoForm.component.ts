import { Component, OnInit } from '@angular/core';
import { Photo } from '../../models/photo.model';
import { Tag } from '../../models/tag.model';
import { FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import { environment } from '../../../environments/environment';

import { PhotoService } from '../../services/photo.service';
import { TagService } from '../../services/tag.service';


@Component({
    selector: 'app-photo-form',
    templateUrl: 'photoForm.component.html'
})
export class PhotoFormComponent implements OnInit {
    model: Photo;
    tags: Tag[];

    dropdownSettings = {};
    selectedTags = [];

    public uploader: FileUploader = new FileUploader({ url: environment.apiurl + 'photo', itemAlias: 'photo' });

    constructor(private photoService: PhotoService,
        private tagService: TagService) {
    }

    ngOnInit() {
        if (!this.model) {
            this.model = new Photo();
        } else {
            // TODO
            this.selectedTags = null;
        }

        this.listTags();

        this.uploader.onAfterAddingFile = (file) => {
            file.withCredentials = false;
        };

        this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
        };

        this.uploader.onBuildItemForm = (item, form) => {
            form.append('id', this.model.id);
            form.append('description', this.model.description);
            form.append('name', this.model.name);
            form.append('tags', JSON.stringify(this.model.tags));
            form.append('url', this.model.url);
        };

        // this.uploader.onWhenAddingFileFailed = (item: any, filter: any, option: any) => {
        // };

        this.dropdownSettings = {
            singleSelection: false,
            idField: 'id',
            textField: 'name',
            selectAllText: 'Tous cocher',
            unSelectAllText: 'Tous décocher',
            itemsShowLimit: 10,
            allowSearchFilter: true
        };
    }

    listTags() {
        this.tagService.list().subscribe(data => {
            this.tags = data;
        });
    }

    onSubmit() {
        this.model.tags = this.selectedTags;
        console.log(this.model);
        this.uploader.uploadAll();
    }
}
