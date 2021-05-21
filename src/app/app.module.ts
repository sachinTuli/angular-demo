import { HttpTokenInterceptorService } from './modules/shared/services/token-interceptor.service';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatNativeDateModule} from '@angular/material/core';
import { MaterialModule } from './material-module';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient): any {
  return new TranslateHttpLoader(http);
}

@NgModule({
    imports: [ 
        BrowserAnimationsModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        RouterModule,
        MaterialModule,
        BrowserModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: createTranslateLoader,
            deps: [HttpClient]
          }
        }),
    ],
    declarations: [
        AppComponent,
    ],
    providers : [
      MatNativeDateModule,
      {
        provide: HTTP_INTERCEPTORS,
        useClass: HttpTokenInterceptorService,
        multi: true,
      },
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
