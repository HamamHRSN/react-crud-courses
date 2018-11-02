import React from 'react';

const CourseForm = (props) => {
return (
<form onSubmit={props.addCourse}>
    <input type="text"  placeholder="Add Course.." onChange={props.updateCourse} value={props.current} />
    <button type="submit">Add Course</button>
</form>  
);
}

export default CourseForm;