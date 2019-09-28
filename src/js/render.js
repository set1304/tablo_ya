
export default (arr) => {
    const table = document.getElementById('SVO');
    table.innerHTML='';
    arr.forEach( el => {
        let date;
        if(el.departure){
            date = el.departure;
        } else{
            date = el.arrival;
        };
        const time = date.match(/(..:..)/);
        const number = el.thread.number;
        const arrive = el.thread.title;
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${time[0]}</td><td>${number}</td><td>${arrive}</td>`;
        table.append(tr);
    });
}