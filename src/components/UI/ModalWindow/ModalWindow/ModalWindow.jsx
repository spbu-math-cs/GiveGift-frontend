import React from 'react';

const ModalWindow = ({children, visible, setVisible, className}) => {
    const rootClasses = [className]

    if (visible) {
        rootClasses.push('active');
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default ModalWindow;