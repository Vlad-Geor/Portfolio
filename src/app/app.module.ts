import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonComponent } from './shared/button/button.component';
import { TooltipComponent } from './shared/tooltip/tooltip.component';
import { TooltipDirective } from './shared/tooltip/tooltip.directive';
import { PlaygroundComponent } from './playground/playground.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    TooltipComponent,
    TooltipDirective,
    PlaygroundComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
