import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GamePageComponent } from '../game-page/game-page.component';
import { HighScoresComponent } from '../high-scores/high-scores.component';
import { IntroPageComponent } from '../intro-page/intro-page.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { PlayerDataGuardGuard } from '../guards/player-data-guard.guard';

const routes: Routes = [
    { path: '', redirectTo: 'introPage/normal', pathMatch: 'full' },
    {
        path: 'gamePage/:color',
        component: GamePageComponent,
        canActivate: [PlayerDataGuardGuard],
    },
    {
        path: 'gamePage',
        redirectTo: 'gamePage/normal',
        pathMatch: 'full',
        canActivate: [PlayerDataGuardGuard],
    },
    { path: 'introPage/:color', component: IntroPageComponent },
    { path: 'introPage', redirectTo: 'introPage/normal', pathMatch: 'full' },
    { path: 'highScores', component: HighScoresComponent },
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
export const routingComponents = [
    IntroPageComponent,
    GamePageComponent,
    HighScoresComponent,
];
