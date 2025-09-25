
const check_habilitar = document.getElementById("show_question_details");

if (check_habilitar) {
    check_habilitar.removeAttribute("disabled"); // quita el atributo disabled
    check_habilitar.checked = true;              // opcional: lo marca como seleccionado
    console.log("✅ Input habilitado y marcado");
} else {
    console.log("⚠️ No se encontró el elemento con ID show_question_details");
}