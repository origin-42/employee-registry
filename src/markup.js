// Create a standard html representation as a string to use as a file template
let markup = [`
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./dist/css/reset.css">
    <link rel="stylesheet" href="./dist/css/style.css">
    

    <title>Employee Registry</title>
</head>

<body>

    <!-- Header -->
    <div class="header">
        <h1>Employee Registry</h1>
    </div>

    <main>
        <div class="body">
            <div class="cards">\n`];
                
let markupLatter = "\
            </div\>\
        </div\>\
    </main\>\
\
\
</body\>\
\
</html>";

module.exports = {
    markup: markup,
    markupLatter: markupLatter
}