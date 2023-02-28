<!DOCTYPE html>
<html lang="en">
<head>
    <?php require_once '_include/head.php' ?>
    <script src="_include/script.js" defer></script>
    <link rel="stylesheet" type="text/css" href="styles/style.css"/>
    <title>Home</title>
</head>

<body>
    
    <?php require_once '_include/header.php' ?>
    <?php if($_SESSION){header('Location: game.php');} ?>
    <?php require_once 'classes/User.php' ?>

    <main>

        <div id="bonjour">Bonjour user</div>

        <div id="buttons">
            <button id="switchInscription">Signup</button>
            <button id="switchConnexion">Login</button><br><br>
        </div>

        <div id="form"></div>

    </main>

    <?php require_once '_include/footer.php' ?>

</body>

</html>