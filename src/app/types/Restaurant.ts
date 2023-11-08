import { User } from '@/app/types/User'
import { Eatable } from './Eatable';

export type Restaurant = {
    ordersHistory: any[];
    menu: Eatable[];
    acount: string;
    punctuation: number;
} & User