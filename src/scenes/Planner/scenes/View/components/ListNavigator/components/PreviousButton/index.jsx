import React from 'react';
import PropType from 'prop-types';
import Buttonx from '../../../../../../../../components/Buttonx';

const PreviousButton = ({ onClickPrevious }) => (
    <Buttonx
        onClick={onClickPrevious}
    >
        Previous
    </Buttonx>
);

PreviousButton.propType = {
    onClickPrevious: PropType.func.isRequired,
};

export default PreviousButton;