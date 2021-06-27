import Auth from './Modules/Auth/Auth.js';
import Asistencia from './Modules/Asistencia.js';

const btnListadoFirmas = document.getElementById('btnListadoFirmas');
const btnFirmar = document.getElementById('btnFirmar');
const btnNumFirmasHoy = document.getElementById('btnNumFirmasHoy');

btnListadoFirmas.addEventListener('click', getListadoFirmas, false);
btnNumFirmasHoy.addEventListener('click', getNumFirmasHoy, false);
btnFirmar.addEventListener('click', firmarAsistencia, false);

async function getListadoFirmas() {
    let res = await Asistencia.getlistadoFirmas();
    console.log(res);
}

async function getNumFirmasHoy() {
    let res = await Asistencia.getNumFirmasHoy(Auth.getCoder().id);
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