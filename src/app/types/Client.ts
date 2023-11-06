import { User } from '@/app/types/User'
import { Order } from '@/app/types/Order'
import { Review } from './Review'

export type Client = {
    ordersHistory: Order[],
    reviewsMade: Review[],
    datosTarjeta: string, // cambiar a ingles // cardData
} & User