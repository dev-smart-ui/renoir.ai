import React from 'react';

import styles from './thank.module.scss'
import {Button} from "@/components/ui/button";

export const Thank = ({setCurrentStep }) => {

    return <div className={styles.thank}>
        Thank you. We will contact you soon.
        <Button onClick={ ()=>{
            setCurrentStep(0)
        }} className="w-full bg-gradient-to-r mt-2 from-primary to-accent text-white">
            Send another form.
        </Button>
    </div>
};

