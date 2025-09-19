// Buscar todas las respuestas correctas
document.querySelectorAll('.correct_answer').forEach(correct => {
  const input = correct.querySelector('input.question_input');
  if (input) {
    // Quitar aria-disabled y disabled
    input.removeAttribute('aria-disabled');
    input.removeAttribute('disabled');
    
    // Marcar como seleccionada
    input.checked = true;
  }
});
