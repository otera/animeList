import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { provideHttpClient, withInterceptorsFromDi, withXhr } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AnimeComponent } from './anime/anime.component';
import { GenreNamesPipe } from './pipe/genre-names.pipe';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';

@NgModule({ declarations: [
        AppComponent,
        AnimeComponent,
        GenreNamesPipe
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        FormsModule,
        BrowserAnimationsModule, MatSelectModule, MatCardModule, MatTableModule, MatIconModule], providers: [provideHttpClient(withXhr(), withInterceptorsFromDi())] })
export class AppModule { }
