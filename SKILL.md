---
name: action-test
description: show minimal test view button
---

# Prueba Acción 1

Descripción principal

## Files
- `index.html`: The local entry point that loads the script.
- `index.js`: entry point script.

## Actions

#### 1. registrar marca de tiempo
Cuando el ususario quiera hacer un registro de horas extras completadas, llamar la herramienta `run_js` con los siguientes datos:
- **script name**: `index.html`
- **data**: A JSON string with:
  - `action`: "registrar_marca"
  - `amount`: Number
  - `date`: String. **IMPORTANTE**: Identificar la fecha para el registro.
    - Si el usuario dice "hoy", pasa "hoy".
    - Si el usuario dice "ayer", pasa "ayer".
    - Si el usuario proporciona una fecha especifica (ej. "Marzo 18"), dale el siguiente formato **YYYY-MM-DD** o pasa la fecha original como cadena de texto.
    - Si la fecha no es mencionada, por defecto el valor es "hoy".
