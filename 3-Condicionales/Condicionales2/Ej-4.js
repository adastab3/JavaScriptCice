let pw = window.prompt('Introduce una contraseña:')

pw.length >= 8
?console.log('Contraseña guardada correctamente')
:console.log('Contraseña incorrecta. Debe tener mínimo 8 caracteres')