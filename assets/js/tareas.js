import Auth from './Modules/Auth/Auth.js';
import Tarea from './Modules/Tarea.js';
import Categoria from './Modules/Categoria.js';

const btnListadoTareas = document.getElementById('btnListadoTareas');
const btnCrearTarea = document.getElementById('btnCrearTarea');
const btnBorrarTarea = document.getElementById('btnBorrarTarea');
const btnMarcarTarea = document.getElementById('btnMarcarTarea');
const btnListadoCategorias = document.getElementById('btnListadoCategorias');

btnListadoTareas.addEventListener('click', getListadoTareas, false);
btnCrearTarea.addEventListener('click', crearTarea, false);
btnBorrarTarea.addEventListener('click', borrarTarea, false);
btnMarcarTarea.addEventListener('click', marcarTarea, false);
btnListadoCategorias.addEventListener('click', getListadoCategorias, false);

async function getListadoTareas() {
    let res = await Tarea.getListadoTareas();
    console.log(res);
}

async function crearTarea() {
    let tarea = {
        titulo: 'Tarea nueva',
        descripcion: 'Lorem Ipsum',
        estado: 0,
        user_id: Auth.getCoder().id,
        categoria_id: 1,
    }
    let res = await Tarea.crearTarea(tarea);
    console.log(res);
}

async function borrarTarea() {
    let res = await Tarea.borrarTarea(8);
    console.log(res);
}

async function marcarTarea() {
    let data = {
        estado: 1
    }
    let res = await Tarea.marcarTarea(data, 7)
    console.log(res);
}

async function getListadoCategorias() {
    let res = await Categoria.getListadoCategorias();
    console.log(res);
}