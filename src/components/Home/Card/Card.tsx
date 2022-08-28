import {
    IProps,
} from './types';

import classNames from 'classnames';
import React, {
    FC,
} from 'react';

import styles from './Card.module.scss';

const Card: FC<IProps> = (props) => {
    return (
        <div className={classNames(styles.card, props.className)}>
            <img
                className={styles.image}
                src={props.image}
                alt={''}
            />
            <div className={styles.title}>
                {props.children}
            </div>
        </div>
    );
};

export default Card;
