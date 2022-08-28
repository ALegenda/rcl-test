import React, {
    FC,
} from 'react';

import Background from './Background';
import Card from './Card';

import card1Image from './media/card1.png';
import card2Image from './media/card2.png';
import card3Image from './media/card3.png';
import logoImage from './media/logo.svg';
import logoSmallImage from './media/logo-small.svg';

import styles from './Home.module.scss';

const Home: FC = () => {
    return (
        <div className={styles.home}>
            <div className={styles.smallLogo}>
                <img
                    src={logoSmallImage}
                    alt={''}
                />
            </div>
            <div className={styles.main}>
                <div className={styles.logo}>
                    <img
                        src={logoImage}
                        alt={''}
                    />
                </div>
                <div className={styles.title}>
                    Российская
                    <br/>
                    киберспортивная
                    <br/>
                    лига
                </div>
            </div>
            <div className={styles.description}>
                <span className={styles.red}>
                    Крупнейший
                </span>
                проект объединения спортивных клубов в киберспорте
            </div>
            <div className={styles.cards}>
                <Card
                    className={styles.card}
                    image={card1Image}
                >
                    Counter Strike
                </Card>
                <Card
                    className={styles.cardCenter}
                    image={card2Image}
                >
                    Запуск ноябрь 2022
                </Card>
                <Card
                    className={styles.card}
                    image={card3Image}
                >
                    Добро пожаловать
                    <br/>
                    в будущее!
                </Card>
            </div>
            <Background/>
        </div>
    );
};

export default Home;
