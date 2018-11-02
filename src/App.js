import React, { Component } from 'react';
import CourseForm from './components/CourseForm';
import CourseList from './components/CourseList';


class App extends Component {

  state = {
    courses: [
      {name: 'HTML'},
      {name: 'CSS'},
      {name: 'JAVASCRIPT'}
    ],
    current: ''
  }

  // Update Courses
  updateCourse = (e) => {
    // console.log(e.target.value);
    this.setState({
      current: e.target.value
    });
  }
  
  // Add Courses
  addCourse = (e) => {
    e.preventDefault();
    // console.log('Course Add');
    let current = this.state.current;
    let courses = this.state.courses; 
    if (current) {
      courses.push({name: current});
      this.setState({
        courses,
        current: ''
      });
    }
    
  }

  // Delete Course
  deleteCourse = (index) => {
    let courses = this.state.courses;
    courses.splice(index, 1);
    this.setState({
      courses
    })
  }

  // Edit Course 
  editCourse = (index, value) => {
    let courses = this.state.courses;
    let course = courses[index];
    course['name'] = value;
    this.setState({
      courses
    })
  }

  render() {
   
      const {courses} = this.state;
      const courseList = courses.map((course, index) => {
           return <CourseList details={course} key={index} index={index} deleteCourse={this.deleteCourse} editCourse={this.editCourse} />;
      });
    return (
      <section className="App">
          <h2>Add Courses</h2>
          <CourseForm updateCourse={this.updateCourse} addCourse={this.addCourse} current={this.state.current} />
          <ul>
          {this.state.courses.length > 0 ? courseList : <p className="noCourses">No Courses To Show! please Add new Course.</p>}
          </ul>
      </section>
    );
  }
}

export default App;
