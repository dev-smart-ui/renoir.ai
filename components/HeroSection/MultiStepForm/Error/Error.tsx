import React from 'react';

import styles from './Error.module.scss'
import {Button} from "@/components/ui/button";

export const Error=({setCurrentStep }:{setCurrentStep: (state: number) => void}) => {

    return <div className={styles.Error}>
       <h2> error</h2>

        <Button onClick={ ()=>{
            setCurrentStep(0)
        }} className="w-full bg-gradient-to-r mt-2 from-primary to-accent text-white">
           try again
        </Button>
    </div>
};

