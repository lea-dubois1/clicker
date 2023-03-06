<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="_include/script.js" defer></script>
    <link rel="stylesheet" type="text/css" href="styles/style.css"/>
    <title>Home</title>
</head>

<body>
    
    <?php require_once '_include/header.php' ?>
    <?php if($_SESSION){header('Location: game.php');} ?>
    <?php require_once 'classes/User.php' ?>

    <main>

        <div id="bonjour">Bienvenu sur Genshin Clicker</div>

        <div id="buttons">
            <button id="switchInscription">Signup</button>
            <button id="switchConnexion">Login</button><br><br>
        </div>

        <div id="form"></div>

    </main>

    <?php require_once '_include/footer.php' ?>

</body>

</html>