import React from 'react';
import PropType from 'prop-types';
import RemoveButton from './components/RemoveButton';
import CourseLabel from '../../../../../../components/CourseLabel';

const RemoveCourse = ({ subject, course, onClickRemove }) => (
    <div>
        <CourseLabel 
            subject={subject}
            course={course}    
        />
        <RemoveButton 
            onClickRemove={onClickRemove}
        />
    </div>
);

RemoveCourse.propType = {
    subject: PropType.string.isRequired,
    course: PropType.string.isRequired,
    onClickRemove: PropType.func.isRequired,
};

export default RemoveCourse;