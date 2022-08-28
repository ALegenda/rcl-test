import React, {
    FC,
} from 'react';

import styles from './GreyStuff.module.scss';

const GreyStuff: FC = () => {
    return (
        <>
            <div className={styles.s1}/>
            <div className={styles.s2}/>
            <div className={styles.s3}/>
            <div className={styles.s4}/>
            <div className={styles.s5}/>
        </>
    );
};

export default GreyStuff;
