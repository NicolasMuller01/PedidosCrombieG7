import { User } from '@/app/types/User'
import { Order } from '@/app/types/Order'

export type Delivery = {
    ordersHistory:Order[],
    vehicle: Vehicle,
    acount: string,
    punctuation: number,
} & User