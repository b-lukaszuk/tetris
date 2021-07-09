import { AppComponent } from './app.component';
import {
    AppRoutingModule,
    routingComponents,
} from './routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // do dzialania (ngForms, ngModel)
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

import { TetrisCoreModule } from 'ngx-tetris';

import { AuthorsInfoComponent } from './authors-info/authors-info.component';
import { FilterByPlayerNamePipe } from './high-scores/filter-by-player-name.pipe';
import { HighScoresComponent } from './high-scores/high-scores.component';
import { HighScoresService } from './services/high-scores.service';
import { HighScoresSortPipe } from './high-scores/high-scores-sort.pipe';
import { HistoryFilterPipe } from './game-page/history-filter.pipe';
import { IntroTextComponent } from './intro-page/intro-text/intro-text.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PlayerDataService } from './services/player-data.service';
import { PlayerFormComponent } from './intro-page/player-form/player-form.component';
import { PlayerInfoComponent } from './game-page/player-info/player-info.component';
import { SortHistoryItemsPipe } from './game-page/sort-history-items.pipe';

@NgModule({
    declarations: [
        AppComponent,
        routingComponents,
        AuthorsInfoComponent,
        PlayerInfoComponent,
        HistoryFilterPipe,
        SortHistoryItemsPipe,
        IntroTextComponent,
        PlayerFormComponent,
        HighScoresComponent,
        HighScoresSortPipe,
        PageNotFoundComponent,
        FilterByPlayerNamePipe,
    ],
    imports: [
        BrowserModule,
        TetrisCoreModule,
        FormsModule, // wymagane do dzialania (ngForms, ngModel)
        AppRoutingModule,
        HttpClientModule,
        NgbModule,
        ReactiveFormsModule,
    ],
    providers: [PlayerDataService, HighScoresService],
    bootstrap: [AppComponent],
})
export class AppModule { }
