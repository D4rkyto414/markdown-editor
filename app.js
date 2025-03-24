// Importar módulos
import { toggleFormat } from "./format.js";
import { convertToList } from "./lists.js";
import { highlightCode } from "./blocks.js";

// Elementos del DOM
const editor = document.getElementById("editor");
const previewBtn = document.getElementById("preview-btn");
const formatBtn = document.getElementById("format-btn");
const preview = document.getElementById("preview");

// Evento para aplicar formato
toggleFormat(formatBtn, editor);

// Evento para generar vista previa
previewBtn.addEventListener("click", () => {
    let content = editor.value;
    content = convertToList(content);
    content = highlightCode(content);
    preview.innerHTML = content;
});

// js/format.js
export function toggleFormat(button, editor) {
    button.addEventListener("click", () => {
        const selectedText = editor.value.substring(editor.selectionStart, editor.selectionEnd);
        if (!selectedText) return;
        const isBold = selectedText.startsWith("**") && selectedText.endsWith("**");
        const isItalic = selectedText.startsWith("*") && selectedText.endsWith("*");

        let formattedText;
        if (isBold) {
            formattedText = selectedText.slice(2, -2);
        } else if (isItalic) {
            formattedText = selectedText.slice(1, -1);
        } else {
            formattedText = `**${selectedText}**`;
        }
        editor.setRangeText(formattedText);
    });
}

// js/lists.js
export function convertToList(content) {
    return content.replace(/(\d+)\.\s(.+)/g, "<li>$2</li>").replace(/(<li>.*<\/li>)/g, "<ol>$1</ol>");
}

// js/blocks.js
export function highlightCode(content) {
    return content.replace(/```([\s\S]+?)```/g, '<pre><code>$1</code></pre>');
}


