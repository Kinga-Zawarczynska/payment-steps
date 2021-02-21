import React from 'react';

function StepButton({ title, onClick }) {
    return (
        <div onClick={onClick}>
            {title}
        </div>
    )
}

export default StepButton;
