import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
const materialComponent=[MatButtonModule,MatButtonToggleModule,
  MatSelectModule ,MatIconModule,MatBadgeModule,MatProgressSpinnerModule,MatToolbarModule,MatSidenavModule,MatFormFieldModule,MatInputModule];

@NgModule({

  imports: [materialComponent],
  exports:[materialComponent]

})
export class MaterialModule { }
