export default (html) => `
    <!DOCTYPE html>
    <html>
    <head>
        <title>App</title>
        <meta charset="utf-8"> d
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    </head>
    <body>
        <div id="root">${html}</div>
        <script src="/dist/client.js"></script>
    </body>
    </html>
`;
