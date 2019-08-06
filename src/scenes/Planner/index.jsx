import React, { Component } from 'react';
import styles from './styles.scss'
import AddButton from '../../components/AddButton';
import RemoveButton from '../../components/RemoveButton';
//import AddButton from './scenes/Selection/components/AddCourse/components/AddButton';
//import RemoveButton from './scenes/Selection/components/RemoveCourse/components/RemoveButton';

class Planner extends Component {
    render() {
        return (
            <div>
                <AddButton />
                <RemoveButton />
            </div>
        );
    }
}

export default Planner;