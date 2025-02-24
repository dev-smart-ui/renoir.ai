import React from 'react';

import styles from './thank.module.scss'

export const Thank = ({setCurrentStep }) => {

    return <div className={styles.thank}>
        thank you
        <button onClick={ ()=>{
            setCurrentStep(0)
        }}>
            send another
        </button>
    </div>
};

