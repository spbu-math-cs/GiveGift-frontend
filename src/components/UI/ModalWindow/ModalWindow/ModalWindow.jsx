import React, {useRef} from 'react';
import {useClickOutside} from "../../../../hooks/useClickOutside";

const ModalWindow = ({children, visible, className}) => {
    const rootClasses = [className]

    if (visible) {
        rootClasses.push('active_modal');
    }

    return (
        <div className={rootClasses.join(' ')}>
            <div onClick={(event) => event.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default ModalWindow;