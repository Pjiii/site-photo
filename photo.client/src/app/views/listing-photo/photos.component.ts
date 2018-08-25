import { Component, OnInit } from '@angular/core';
import { Photo } from '../../models/photo.model';
import { Tag } from '../../models/tag.model';
import { PhotoService } from '../../services/photo.service';
import { TagService } from '../../services/tag.service';

@Component({
    selector: 'app-photos',
    templateUrl: 'photos.component.html'
})
export class PhotosComponent implements OnInit {
    tags: Tag[];
    baseImages: Photo[];
    images: Photo[];
    selectedTagId: String = 'all';

    constructor(private photoService: PhotoService,
        private tagService: TagService) {
    }

    ngOnInit() {
        this.listTags();
        this.listPhotos();
    }

    listPhotos() {
        this.photoService.list()
            .subscribe(data => {
                this.baseImages = data;
                this.images = this.baseImages;
            });
    }

    listTags() {
        this.tagService.list()
        .subscribe(data => {
            this.tags = data;
            this.tags.splice(0, 0, new Tag('all', 'Toutes'));
        });
    }

    filter(tagId: String) {
        this.selectedTagId = tagId;

        if (tagId === 'all') {
            this.images = this.baseImages;
            return;
        }

        const imagetemp: Photo[] = [];
        this.baseImages.forEach(item => {
            if (item.tags.find(x => x.id === tagId)) {
                imagetemp.push(item);
            }
        });

        this.images = imagetemp;
    }
}
