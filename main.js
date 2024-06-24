console.log('Programa de consulta iniciado');
console.log('---- Processo de Tickets ----')

function consultaMotTicket() {
    let msg = prompt('Caso/motivo de consulta: ');
    console.log(`${msg} -> motivo de consulta`);
    let ticket = parseInt(Math.random() * 30 + 1);
    console.log(`${ticket} -> senha/ticket em fila`);
    alert(`Motivo: ${msg} | Ticket (na fila): ${ticket}`);    
}

consultaMotTicket();

let pacientes = 1;
while (pacientes <= 30) {
    consultaMotTicket();
    pacientes++;
}