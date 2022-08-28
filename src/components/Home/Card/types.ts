import {
    PropsWithChildren,
} from 'react';

export interface IProps extends PropsWithChildren {
    image: string;

    className?: string;
}
