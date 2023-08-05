import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MetCheckComponent } from './met-check/met-check.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Mat2CheckComponent } from './mat2-check/mat2-check.component';
import { CheckBoxComponent } from './check-box/check-box.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsComponent } from './mat-chips/mat-chips.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatSteperComponent } from './mat-steper/mat-steper.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { TableComponent } from './table/table.component';
import { MatTableModule } from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    MetCheckComponent,
    Mat2CheckComponent,
    CheckBoxComponent,
    MatChipsComponent,
    MatSteperComponent,
    TableComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
     MatSelectModule,
     ReactiveFormsModule,
    MatCheckboxModule,
    FormsModule,
    MatChipsModule,
    MatIconModule,
    MatStepperModule,
    MatInputModule,
    MatTableModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
