function addNewPage() {
    // 產生唯一的頁面名稱
    let pageName = "newpage-" + Date.now() + ".html";
    let pagePath = "pages/" + pageName;

    // 預設的 HTML 內容
    let pageContent = `
        <!DOCTYPE html>
        <html lang="zh-TW">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>新頁面</title>
            <link rel="stylesheet" href="../style.css">
        </head>
        <body>

            <h1>這是新頁面</h1>
            <p>這是動態產生的靜態頁面。</p>

            <button onclick="window.location.href='../index.html'">回到首頁</button>

        </body>
        </html>
    `;

    // 用 localStorage 模擬存檔
    localStorage.setItem(pagePath, pageContent);

    // **改成直接跳轉到新頁面**
    window.location.href = pagePath;
}
