import { User } from '@/app/types/User'
import { Vehicle } from './Vehicle'

export type Delivery = {
    ordersHistory:any[],
    vehicle: Vehicle,
    acount: string,
    punctuation: number,
} & User