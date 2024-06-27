import {save} from "./firestore.js"

document.getElementById("btnGuardar").addEventListener("click", function() {
    const pasa = {
        run: document.getElementById("run").value,
        asiento: document.getElementById("asiento").value,
        anden: document.getElementById("anden").value,
        servicio: document.getElementById("servicio").value,
        boleto: document.getElementById("boleto").value,
        nombre: document.getElementById("nombre").value,
        fechaCompra: document.getElementById("fechaCompra").value,
    };
    save(pasa);
});

document.getElementById("btnGuardar").addEventListener("click", function() {
    const run = document.getElementById("run").value;
    const asiento = document.getElementById("asiento").value;
    const anden = document.getElementById("anden").value;
    const servicio = document.getElementById("servicio").value;
    const boleto = document.getElementById("boleto").value;
    const nombre = document.getElementById("nombre").value;
    const fechaCompra = document.getElementById("fechaCompra").value;
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>${run}</td>
        <td>${asiento}</td>
        <td>${anden}</td>
        <td>${servicio}</td>
        <td>${boleto}</td>
        <td>${nombre}</td>
        <td>${fechaCompra}</td>
    `;
    document.getElementById("contenido").appendChild(newRow);
});
