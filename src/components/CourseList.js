import React, {Component} from 'react';
// import React, {Component, Fragment} from 'react';

class CourseList extends Component {

    state = {
        isEdit: false
    }

    // Render Course Items
    renderCourses = () =>  {
        return (
         <li>
            <span>{this.props.details.name}</span>
            <button onClick={() => {this.toggleState()}}>Edit Course</button>
            <button onClick={() => this.props.deleteCourse(this.props.index)}>Delete Course</button>
         </li>
        );
    }

    // Toggle State

    toggleState = () => {
        let {isEdit} = this.state;
        this.setState({
            isEdit: !isEdit
        })
    }

    // Update Course Item Efter Edit 

    updateCourseItem = (e) => {
         e.preventDefault();
         this.props.editCourse(this.props.index, this.input.value);
         this.toggleState();
    }

    // Render Update For Edit Form
    
    renderUpdateForm = () => {
        return(
            <form onSubmit={this.updateCourseItem}>
               <input type="text" ref={(newValue) => {this.input = newValue}} defaultValue={this.props.details.name} />
               <button>Update Course</button>
            </form>
        )
    }
    render() {
        let {isEdit} = this.state;
         return (
           <React.Fragment>
               { isEdit ? this.renderUpdateForm() : this.renderCourses() }
           </React.Fragment>  
         );
    }
}

export default CourseList;