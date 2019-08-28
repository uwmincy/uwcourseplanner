import React from 'react';
import './styles.scss';
import NextButton from './components/NextButton';
import PreviousButton from './components/PreviousButton';
import SaveButton from './components/SaveButton';

const ListNavigator = ({ onClickPrevious, onChangeSave, onChangeNext }) => (
    <div className="list-navigator">
        <div className="list-navigator-button">
            < PreviousButton />
        </div>
        <div className="list-navigator-button">
            < SaveButton />
        </div>
        <div className="list-navigator-button">
            < NextButton />
        </div>
    </div>
)

export default ListNavigator;