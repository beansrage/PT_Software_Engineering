package org.perscholas.inheritance.Interfaces;

import org.perscholas.inheritance.models.Course;
//with interfaces, a body must be given for every method
//every method listed has to be overridden
public interface CourseService {
//method that returns a course object/creates a Course Object

    public Course getCourse(Course course);
    //method that takes in course as a param
    //and then updates the course name

}
