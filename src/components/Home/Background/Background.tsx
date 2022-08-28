import React, {
    FC,
} from 'react';

import BlueStuff from './BlueStuff';
import ColoredImage from './ColoredImage';
import GreyStuff from './GreyStuff';
import RedStuff from './RedStuff';

import greyFlash1Image from "./frontend/src/components/Home/Background/media/grey-flash1.svg";
import greyFlash2Image from './frontend/src/components/Home/Background/media/grey-flash2.svg';
import peopleBg1Image from './frontend/src/components/Home/Background/media/people-bg1.png';
import peopleBg2Image from './frontend/src/components/Home/Background/media/people-bg2.png';
import peopleBg3Image from './frontend/src/components/Home/Background/media/people-bg3.png';
import people1Image from './frontend/src/components/Home/Background/media/people1.png';
import people2Image from './frontend/src/components/Home/Background/media/people2.png';
import people3Image from './frontend/src/components/Home/Background/media/people3.png';
import redFlash1Image from './frontend/src/components/Home/Background/media/red-flash1.svg';
import redFlash2Image from './frontend/src/components/Home/Background/media/red-flash2.svg';
import redFlash3Image from './frontend/src/components/Home/Background/media/red-flash3.svg';


import styles from './Background.module.scss';

const Background: FC = () => {
    return (
        <>
            <ColoredImage
                image={people1Image}
                background={peopleBg1Image}
                className={styles.people1}
            />
            <ColoredImage
                image={people2Image}
                background={peopleBg2Image}
                className={styles.people2}
            />
            <ColoredImage
                image={people3Image}
                background={peopleBg3Image}
                className={styles.people3}
            />
            <img
                className={styles.greyFlash1}
                src={greyFlash1Image}
                alt={''}
            />
            <img
                className={styles.greyFlash2}
                src={greyFlash2Image}
                alt={''}
            />
            <img
                className={styles.redFlash1}
                src={redFlash1Image}
                alt={''}
            />
            <img
                className={styles.redFlash2}
                src={redFlash2Image}
                alt={''}
            />
            <img
                className={styles.redFlash3}
                src={redFlash3Image}
                alt={''}
            />
            <BlueStuff/>
            <GreyStuff/>
            <RedStuff/>
        </>
    );
};

export default Background;
