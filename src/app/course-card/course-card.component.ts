import { Component, Input, OnInit, EventEmitter, Output, ViewChild, AfterViewInit, ContentChild } from "@angular/core";
import { Course } from "../model/course";

@Component({
  selector: "course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.css"],
})
export class CourseCardComponent implements OnInit, AfterViewInit {
  constructor() {}

  @Input()
  course: Course;

  @Input()
  cardIndex: number;

  @Output()
  courseSelected = new EventEmitter<Course>();

  @ContentChild("courseImage")
  image;

  ngOnInit(): void {}

  onCourseViewed() {
    //this.courseSelected.emit(this.course);
  }

  ngAfterViewInit(): void {
    console.log(this.image);
  }

  cardClasses() {
    if (this.course.category == "BEGINNER") return ["beginner"];

    //or following syntax

    // return {
    //   'beginner': this.course.category == 'BEGINNER'

    // }
  }

  cardStyles() {
    return { "background-image": "url(" + this.course.iconUrl + ")" };
  }
}
