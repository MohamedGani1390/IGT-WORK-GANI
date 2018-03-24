import { Component, OnInit, ViewChild } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Observable} from 'rxjs/Observable';
import {merge} from 'rxjs/observable/merge';
import {of as observableOf} from 'rxjs/observable/of';
import {catchError} from 'rxjs/operators/catchError';
import {map} from 'rxjs/operators/map';
import {startWith} from 'rxjs/operators/startWith';
import {switchMap} from 'rxjs/operators/switchMap';
import {DelegateService} from './../services/delegate.service';
import  {ITask} from './../services/ITask';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers:[DelegateService]
})
export class TodoComponent implements OnInit {

displayedColumns = ['id', 'name', 'isCompleted'];
dataSource = [];
activity : IActivity ={};
id='';
name='';
resultsLength = 0;
isLoadingResults = true;
isRateLimitReached = false;

fetchDetails() {
this.delegate.getDetails().subscribe((data) => {
this.dataSource=data;
this.isLoadingResults= false}
);
}

addDetails() {
    this.activity.id=this.id;
    this.activity.name = this.name;
    this.activity.isCompleted=false;
	this.delegate.addDetails(this.activity).subscribe((data) => {
	console.log('added');
	this.id='';
	this.name='';
	});
}

editDetails(event,details:IActivity) {
	details.isCompleted= event.checked;
	alert(details.isCompleted);
	this.delegate.editDetails(details).subscribe((data) => {
	console.log('edited');
	});
}
constructor(public delegate:DelegateService) {

}

ngOnInit() {
this.fetchDetails();
}
}

export interface IActivity {
	id ?: string;
	name ?: string;
	isCompleted? : boolean;
}
