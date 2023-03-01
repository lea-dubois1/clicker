<!DOCTYPE html>
<html lang="en">
<head>
    <?php require_once '_include/head.php' ?>
    <link rel="stylesheet" type="text/css" href="styles/style.css"/>
    <link rel="stylesheet" type="text/css" href="styles/game.css"/>
    <script src="_include/game.js" defer></script>
    <title>Clicker game</title>
</head>
<body>

    <?php require_once '_include/header.php' ?>
    <?php if(!$_SESSION){header('Location: index.php');} ?>

    <main>

        <div id="displayPoints">
            <p id="nbPoints">0</p><p>&#160 points</p>
        </div>

        <button id="addPointButton">Click</button>

    </main>

    <?php require_once '_include/footer.php' ?>

</body>
</html>