console.log('Aplicativo rodando');
console.log('TicketConsulta V1.0 - Beta')
let msg = prompt('Caso/motivo de consulta: ');
let ticket = Math.random() * 30 + 1;
alert(`Motivo: ${msg} | Ticket (na fila): ${ticket}`);
