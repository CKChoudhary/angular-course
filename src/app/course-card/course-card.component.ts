import { Component, Input, OnInit, EventEmitter, Output, ViewChild, AfterViewInit, ContentChild, ContentChildren, AfterContentInit, QueryList } from "@angular/core";
import { CourseImageComponent } from "../course-image/course-image.component";
import { Course } from "../model/course";

@Component({
  selector: "course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.css"],
})
export class CourseCardComponent implements OnInit, AfterViewInit, AfterContentInit {
  constructor() {}
  ngAfterContentInit(): void {
    console.log(this.images);
  }

  @Input()
  course: Course;

  @Input()
  cardIndex: number;

  @Output()
  courseSelected = new EventEmitter<Course>();

  @ContentChildren(CourseImageComponent)
  images: QueryList<CourseImageComponent>;

  ngOnInit(): void {}

  onCourseViewed() {
    //this.courseSelected.emit(this.course);
  }

  ngAfterViewInit(): void {
   
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
