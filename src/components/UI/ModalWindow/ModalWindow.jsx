import React from 'react';

const ModalWindow = ({children, setVisible, visible, className}) => {
    const rootClasses = [className]

    if (visible) {
        rootClasses.push('active_modal');
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div onClick={(event) => event.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default ModalWindow;