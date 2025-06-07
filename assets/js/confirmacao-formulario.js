document.getElementById("formReserva").addEventListener("submit", function(event) {
const numeroMesa = parseInt(document.getElementById("numeroMesa").value, 10);
const quantidadePessoas = parseInt(document.getElementById("quantidadePessoas").value, 10);
const horario = document.getElementById("horario").value;

const horariosValidos = [
    "18:00","18:30","19:00","19:30","20:00","20:30",
    "21:00","21:30","22:00","22:30","23:00","23:30","00:00"
];

// Validar número da mesa
if (isNaN(numeroMesa) || numeroMesa < 1 || numeroMesa > 12) {
    alert("Número da mesa inválido. Escolha uma mesa entre 1 e 12.");
    event.preventDefault();
    return;
}

// Validar quantidade de pessoas
if (isNaN(quantidadePessoas) || quantidadePessoas < 1 || quantidadePessoas > 8) {
    alert("Quantidade de pessoas inválida. Deve ser entre 1 e 8.");
    event.preventDefault();
    return;
}

// Validar horário
if (!horariosValidos.includes(horario)) {
    alert("Horário inválido. Escolha um horário entre 18:00 e 00:00.");
    event.preventDefault();
    return;
}});