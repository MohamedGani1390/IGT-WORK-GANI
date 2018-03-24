import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatSlideToggleModule} from '@angular/material/slide-toggle'

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatIconModule,
    MatCardModule,
    MatSlideToggleModule
  ],
   exports: [
      MatButtonModule,
      MatProgressSpinnerModule,
      MatTableModule,
      MatPaginatorModule,
      MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatIconModule,
    MatCardModule,
    MatSlideToggleModule
    ],
  declarations: []
})
export class MaterialHelperModule { }
