export type Payment = {
    id?: string,
    status: 'PAYED' | 'REJECTED' | 'ONWAIT ',
    type: 'DEBIT' | 'CASH',
    date: Date
}