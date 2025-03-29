# markdown-editor

## Características
- **Carga de archivos locales** con `FileReader` usando Promesas.
- **Transformación de Markdown a HTML** con manejo de excepciones (`try/catch`).
- **Exportación a PDF** de manera asíncrona con indicadores de progreso y manejo de errores.

## Uso de Promesas y `try/catch`
### HU1: Carga de Archivo Local con FileReader
- Se utiliza `FileReader` envuelto en una Promesa.
- Mientras el archivo se procesa, se muestra un mensaje de "Cargando...".
- Si la lectura falla, se captura la excepción y se muestra un mensaje de error en la interfaz.

```javascript
function readFileAsText(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = () => reject(new Error('No se pudo leer el archivo.'));
        reader.readAsText(file);
    });
}
```

### HU2: Transformación con Manejo de Excepciones
- La conversión de Markdown a HTML se realiza dentro de un `try/catch`.
- Si hay un error en la sintaxis Markdown, se captura y se muestra un mensaje sin interrumpir la aplicación.

```javascript
function updatePreview(content) {
    try {
        document.getElementById('preview').innerHTML = marked.parse(content);
    } catch (error) {
        document.getElementById('preview').innerHTML = '<p style="color: red;">Error en la sintaxis Markdown</p>';
    }
}
```

### HU3: Exportar el Documento a PDF
- Se utiliza una Promesa para simular la exportación a PDF.
- Mientras se genera el PDF, se muestra "Exportando...".
- Si la operación falla, se maneja el error y se notifica al usuario.

```javascript
function exportToPDF(content) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.2) resolve('PDF generado con éxito');
            else reject(new Error('No se pudo generar el PDF'));
        }, 2000);
    });
}
```


