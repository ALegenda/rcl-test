import {
    IProps,
} from './types';

import classNames from 'classnames';
import React, {
    FC,
} from 'react';

import styles from './ColoredImage.module.scss';

const ColoredImage: FC<IProps> = (props) => {
    return (
        <div className={classNames(styles.coloredImage, props.className)}>
            <div className={classNames(styles.content)}>
                <img
                    className={styles.image}
                    src={props.image}
                    alt={''}
                />
                <img
                    className={styles.background}
                    src={props.background}
                    alt={''}
                />
            </div>
        </div>
    );
};

export default ColoredImage;
