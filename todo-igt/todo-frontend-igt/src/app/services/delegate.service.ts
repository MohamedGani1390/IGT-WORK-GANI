import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import  {ITask} from './ITask';


@Injectable()
export class DelegateService {

  constructor(public http:Http) { }

 getDetails():Observable<ITask[]>
 {
  return this.http.get('http://localhost:8080/task').map((res:Response)=><ITask[]>res.json())
 }

 addDetails(task :ITask):Observable<ITask[]>
 {
  return this.http.post('http://localhost:8080/activity',task).map((res:Response)=><ITask[]>res.json());
 }

editDetails(task :ITask):Observable<ITask[]>
{
task.completed = task.isCompleted;
alert(task.completed);
alert(task.isCompleted);
 alert(JSON.stringify(task));
	return this.http.put('http://localhost:8080/activityupdate', task).map((res:Response)=><ITask[]>res.json());
}
}
