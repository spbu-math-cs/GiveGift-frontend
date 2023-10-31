import React from 'react';
import styles from "./AddInterestModal.module.css"

const AddInterestModal = ({children, visible, setVisible}) => {
    const rootClasses = [styles.add_interest_modal]

    if (visible) {
        rootClasses.push(styles.active);
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={styles.content} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default AddInterestModal;