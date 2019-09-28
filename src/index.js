import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'popper.js';
import {handler} from './js/handler';


const depart = document.getElementById('dep');
const arrive = document.getElementById('arrive');

depart.addEventListener("click", handler);
arrive.addEventListener("click", (e) => handler(e, 'arrival'));

handler();