import React from 'react';
import PropType from 'prop-types';
import Buttonx from '../../../../../../../../components/Buttonx';

const NextButton = ({ onClickNext }) => (
    <Buttonx
        onClick={onClickNext}
    >
        Next
    </Buttonx>
);

NextButton.propType = {
    onClickNext: PropType.func.isRequired,
};

export default NextButton;