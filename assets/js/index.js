import Auth from './Modules/Auth/Auth.js';
import Asistencia from './Modules/Asistencia.js';
import Tarea from './Modules/Tarea.js';
import Pildora from './Modules/Pildora.js';

const btnListadoFirmas = document.getElementById('btnListadoFirmas');
const btnFirmar = document.getElementById('btnFirmar');
const btnNumFirmasHoy = document.getElementById('btnNumFirmasHoy');
const btnListadoTareas = document.getElementById('btnListadoTareas');
const btnListadoPildoras = document.getElementById('btnListadoPildoras');

btnListadoFirmas.addEventListener('click', getListadoFirmas, false);
btnNumFirmasHoy.addEventListener('click', getNumFirmasHoy, false);
btnFirmar.addEventListener('click', firmarAsistencia, false);
btnListadoTareas.addEventListener('click', getListadoTareas, false);
btnListadoPildoras.addEventListener('click', getListadoPildoras, false);

async function getListadoFirmas() {
    let res = await Asistencia.getlistadoFirmas();
    console.log(res);
}

async function getNumFirmasHoy() {
    let res = await Asistencia.getNumFirmasHoy();
    console.log(res);
}

async function firmarAsistencia() {
    let firma = {
        user_id: Auth.getCoder().id,
        nota: 'Test Again',
        estado: 1
    }
    let res = await Asistencia.firmar(firma);
    console.log(res);
}

async function getListadoTareas() {
    let res = await Tarea.getListadoTareas();
    console.log(res);
}

async function getListadoPildoras() {
    let res = await Pildora.getListadoPildoras();
    console.log(res);
}