import React from 'react';

import styles from './Error.module.scss'

export const Error=({setCurrentStep }) => {

    return <div className={styles.Error}>
       <h2> error</h2>
        <button onClick={ ()=>{
            setCurrentStep(0)
        }}>
          try again
        </button>
    </div>
};

