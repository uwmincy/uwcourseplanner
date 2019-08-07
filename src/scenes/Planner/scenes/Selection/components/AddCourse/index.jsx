import React from 'react';
import PropType from 'prop-types';
import AddButton from './components/AddButton';
import CourseLabel from '../../../../../../components/CourseLabel';

const AddCourse = ({ subject, course, onClickAdd }) => (
    <div>
        <CourseLabel 
            subject={subject}
            course={course}    
        />
        <AddButton 
            onClickAdd={onClickAdd}
        />
    </div>
);

AddCourse.propType = {
    subject: PropType.string.isRequired,
    course: PropType.string.isRequired,
    onClickAdd: PropType.func.isRequired,
};

export default AddCourse;