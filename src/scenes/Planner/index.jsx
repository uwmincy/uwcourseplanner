import React, { Component } from 'react';
import styles from './styles.scss'
//import AddButton from '../../components/AddButton';
//import RemoveButton from '../../components/RemoveButton';
import AddButton from './scenes/Selection/components/AddCourse/components/AddButton';
import RemoveButton from './scenes/Selection/components/RemoveCourse/components/RemoveButton';

import AddCourse from './scenes/Selection/components/AddCourse';
import RemoveCourse from './scenes/Selection/components/RemoveCourse';

class Planner extends Component {
    render() {
        return (
            <div>
                <AddButton />
                <RemoveButton />
                <AddCourse subject="CS" course="135" />
                <RemoveCourse subject="MATH" course="239" />
            </div>
        );
    }
}

export default Planner;