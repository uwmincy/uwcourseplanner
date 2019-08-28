import React from 'react';
import PropType from 'prop-types';
import Buttonx from '../../../../../../../../components/Buttonx';

const SaveButton = ({ onClickSave }) => (
    <Buttonx
        onClick={onClickSave}
    >
        Save
    </Buttonx>
);

SaveButton.propType = {
    onClickSave: PropType.func.isRequired,
};

export default SaveButton;