import Auth from './Modules/Auth/Auth.js';
import Pildora from './Modules/Pildora.js';

const btnListadoPildoras = document.getElementById('btnListadoPildoras');
const btnCrearPildora = document.getElementById('btnCrearPildora');
const btnBorrarPildora = document.getElementById('btnBorrarPildora');
const btnMarcarPildora = document.getElementById('btnMarcarPildora');

btnListadoPildoras.addEventListener('click', getListadoPildoras, false);
btnCrearPildora.addEventListener('click', crearPildora, false);
btnBorrarPildora.addEventListener('click', borrarPildora, false);
btnMarcarPildora.addEventListener('click', marcarPildora, false);

async function getListadoPildoras() {
    let res = await Pildora.getListadoPildoras();
    console.log(res);
}

async function crearPildora() {
    let pildora = {
        nombre: 'NPM',
        descripcion: 'Lorem Ipsum',
        fecha_presentacion: '2021-07-12',
        estado: 0,
        user_id: Auth.getCoder().id,
    }
    let res = await Pildora.crearPildora(pildora);
    console.log(res);
}

async function borrarPildora() {
    let res = await Pildora.borrarPildora(6);
    console.log(res);
}

async function marcarPildora() {
    let data = {
        estado: 1
    }
    let res = await Pildora.marcarPildora(data, 6)
    console.log(res);
}