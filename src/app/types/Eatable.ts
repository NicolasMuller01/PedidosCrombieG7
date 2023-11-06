export type Eatable = {
    title: string;
    description: string;
    photo?: string;
    price: string;
    menuType?: string;
    name?: string;
}

//si no tiene signo de pregunta es obligatorio poner required en yup