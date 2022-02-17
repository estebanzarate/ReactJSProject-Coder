import { data } from "../../data/data"

export const pedirDatos = () => {

    return new Promise((res, rej) => {

        setTimeout(() => {
            res(data);
        }, 0)

    })

}