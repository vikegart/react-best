import React from 'react';
import PropTypes from 'prop-types';

import './input.css'

export const Input = props => {
    const onChangeInternal = e =>
        props.onChange && props.onChange(e.target.value);

    const onBlurInternal = e =>
        props.onBlur && props.onBlur(e.target.value);

    return (
        <input
            {...props}
            onBlur={onBlurInternal}
            onChange={onChangeInternal}
        >
            {props.children}
        </input>
    );
};

Input.propTypes = {
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    value: PropTypes.string
}