package igt.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.DBCursor;
import com.mongodb.DBObject;
import com.mongodb.Mongo;

@RestController
@RequestMapping("/")
public class MyActivityController {
	@GetMapping("/task")
	public List<Task> get()
	 {
		List<Task> list = new ArrayList<Task>();
		@SuppressWarnings({ "deprecation", "deprecation" })
		Mongo mongo = new Mongo("localhost", 27017);
		DB db = mongo.getDB("MyTaskIgt1");
		DBCollection collection = db.getCollection("TaskCollection");
		DBCursor cursorDocMap = collection.find();
		while (cursorDocMap.hasNext()) {
			
			DBObject obj = cursorDocMap.next();
			if(obj.get("id") != null && obj.get("name") != null && obj.get("isCompleted") != null)
			{
			Task task = new Task();
			task.setId(obj.get("id").toString());
			task.setName(obj.get("name").toString());
			task.setCompleted((boolean)obj.get("isCompleted"));
			list.add(task);
			}
			
		}
		return list;
	 }
	/*@RequestMapping(value = "/task/{id}", method = RequestMethod.GET)
	public List<Task> getById(@PathVariable String id)
	{
		
			   List<Task> list = Arrays.asList(new Task("1","task_one",false),
					   new Task("2","task_two",false),
					   new Task("3","task_three",false));	
			 
	}
	
	@RequestMapping(value = "/task/{id}", method = RequestMethod.DELETE)
	public List<Task> deleteTask(@PathVariable String id)
	{
			   return Arrays.asList(new Task("1","task_one",false),
					   new Task("2","task_two",false),
					   new Task("3","task_three",false));	
	}*/
	
	@SuppressWarnings("deprecation")
	@PutMapping("/activityupdate")
	public ResponseEntity<Void> putIt(@RequestBody Task task)
	{
		
		@SuppressWarnings({ "deprecation", "deprecation" })
		Mongo mongo = new Mongo("localhost", 27017);
		DB db = mongo.getDB("MyTaskIgt1");
		DBCollection collection = db.getCollection("TaskCollection");
		
		BasicDBObject searchQuery = new BasicDBObject().append("id", task.getId());
		BasicDBObject document = new BasicDBObject();
		document.put("id", task.getId());
		document.put("completed",task.isCompleted());
		document.put("name",task.getName());
		collection.update(searchQuery, document);
		return new ResponseEntity<Void>(HttpStatus.CREATED);
	}
	
	@SuppressWarnings("deprecation")
	@PostMapping("/activity")
	public ResponseEntity<Void> postIt(@RequestBody Task task)
	{
		
		@SuppressWarnings({ "deprecation", "deprecation" })
		Mongo mongo = new Mongo("localhost", 27017);
		DB db = mongo.getDB("MyTaskIgt1");
		DBCollection collection = db.getCollection("TaskCollection");
		
		BasicDBObject document = new BasicDBObject();
		document.put("id", task.getId());
		document.put("completed",task.isCompleted());
		document.put("name",task.getName());
		collection.insert(document);
		return new ResponseEntity<Void>(HttpStatus.CREATED);
	}

}
