import React from 'react';
import styles from './ModalWindow.module.css'
import ClosedBtn from "../Button/ClosedBtn/ClosedBtn";

const ModalWindow = ({children, setVisible, visible, title}) => {
    const rootClasses = [styles.add_interest_modal]

    if (visible) {
        rootClasses.push('active_modal');
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={styles.content} onClick={(event) => event.stopPropagation()}>
                <div className={styles.modal_title_section}>
                    <div className={styles.title}>{title}</div>
                    <ClosedBtn onClick={() => setVisible(false)}/>
                </div>
                {children}
            </div>
        </div>
    );
};

export default ModalWindow;