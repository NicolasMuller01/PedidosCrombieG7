import { User } from '@/app/types/User'
import { Review } from './Review'

export type Client = {
    ordersHistory: any[],
    reviewsMade: Review[],
    datosTarjeta: string, // cambiar a ingles // cardData
} & User