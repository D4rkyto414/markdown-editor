document.getElementById('fileInput').addEventListener('change', async function (event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const loadingIndicator = document.getElementById('loading');
    loadingIndicator.style.display = 'block';
    
    try {
        const content = await readFileAsText(file);
        document.getElementById('editor').value = content;
        updatePreview(content);
    } catch (error) {
        alert('Error al leer el archivo: ' + error.message);
    } finally {
        loadingIndicator.style.display = 'none';
    }
});

function readFileAsText(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = () => reject(new Error('No se pudo leer el archivo.'));
        reader.readAsText(file);
    });
}

// Función para actualizar la vista previa
function updatePreview(content) {
    try {
        document.getElementById('preview').innerHTML = marked.parse(content);
    } catch (error) {
        document.getElementById('preview').innerHTML = '<p style="color: red;">Error en la sintaxis Markdown</p>';
    }
}

