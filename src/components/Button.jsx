import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types'

function Button({onClick, children, outline, className}){
    return (
        <button
            onClick={onClick}
            className={classNames('button', className, {
                'button--outline' : outline
            })}
        >
            {children}
        </button>
    );
}

Button.propTypes = {
    onClick: PropTypes.func,
};

Button.defaultProps = {
    onClick: () => { },
};

export default Button;