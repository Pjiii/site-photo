import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileSelectDirective } from 'ng2-file-upload';

import { PhotoService } from './services/photo.service';
import { TagService } from './services/tag.service';
import { RequestInterceptor } from './services/interceptor/httprequest.interceptor';

import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  declarations: [AppComponent, AppRoutingModule.components, FileSelectDirective],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule, ReactiveFormsModule, NgMultiSelectDropDownModule.forRoot()],
  providers: [PhotoService, TagService,
                { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true }
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
