import { Component } from "@angular/core";
import { COURSES } from "../db-data";
import { Course } from "./model/course";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  coreCourse = COURSES[0];
  rxJsCourse = COURSES[1];
  ngRxCourse = COURSES[2];

  onCourseSelected(course: Course) {
    console.log(course);
    
  }
}
