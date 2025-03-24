document.addEventListener("DOMContentLoaded", () => {
    const editor = document.getElementById("editor");
    const preview = document.getElementById("preview");
    const previewBtn = document.getElementById("previewBtn");
    const contrastBtn = document.getElementById("contrastBtn");

    previewBtn.addEventListener("click", () => {
        let markdownText = editor.value;
        let htmlText = markdownText
            .replace(/^# (.*$)/gm, "<h1>$1</h1>")
            .replace(/^## (.*$)/gm, "<h2>$1</h2>")
            .replace(/^### (.*$)/gm, "<h3>$1</h3>")
            .replace(/^- (.*$)/gm, "<ul><li>$1</li></ul>");
        preview.innerHTML = htmlText;
    });

    contrastBtn.addEventListener("click", () => {
        document.querySelectorAll("#preview h1, #preview h2, #preview h3").forEach(el => {
            el.classList.toggle("text-red-500");
            el.classList.toggle("text-xl");
        });
    });
});

