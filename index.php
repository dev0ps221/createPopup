<?php
//this file exists only for testing purposes;
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Create Popup test page</title>
    <link rel="stylesheet" href="/cp.css">
</head>
<body>
    <script src='cp.js'></script>
    <script>
        const popup = window.createPopup('popup',document.body)
    </script>
    <button onClick='popup.show()'>
        show
    </button>
</body>
</html>