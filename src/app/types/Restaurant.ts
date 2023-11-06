import { User } from '@/app/types/User'
import { Order } from '@/app/types/Order'
import { Eatable } from './Eatable';

export type Restaurant = {
    ordersHistory: Order[];
    menu: Eatable[];
    acount: string;
    punctuation: number;
} & User