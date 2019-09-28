import render from './render';

const listener = (db) => {
    const hand = (e) => {
        e.preventDefault();
        const form = e.target;
        const d = form.querySelector('.form-control');
        const arr = db.filter(el => d.value === el.thread.number);
        render(arr);
        d.value="";
    };
    search.addEventListener("submit", hand, {once: true});
};

const handler = (e, t='departure') => {
    const k = 'cd812367-0e60-40e1-8505-fb00d4945bbf';
    const dt = new Date().toISOString();
    const url = `https://api.rasp.yandex.net/v3.0/schedule/?apikey=${k}&station=s9600213&transport_types=plane&date=${dt}&event=${t}`;
    fetch(url, {
        method: 'GET',
        headers:{
            'Access-Control-Allow-Origin':'*',
            'Content-Type': 'application/json'
            }
    })
    .then(res => res.json())
    .then(response => {
        console.log(response);
        const arr = response.schedule
        render(arr);
        listener(arr);
    })
    .catch(error => console.error('Ошибка:', error));

};

export {handler};