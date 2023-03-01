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

        <div class="uneLigne">
            <p id="nbPoints">0</p><p>&#160points</p>
        </div>

        <button id="addPointButton">Click</button>

        <div id="boutique">

            <div id="achatClickValue">

                <div class="uneLigne">
                    <p>Prix :&#160</p><p id="prixAchatClickValue"></p>
                </div>

                <p>Multiclick</p>

                <div class="uneLigne">
                    <p>+&#160</p><p id="gainAchatClickValue">1</p><p>&#160point/click</p>
                </div>

                <button id="buttonAchatClickValue">Achat</button>

            </div>

            <div id="achatSecValue">

                <div class="uneLigne">
                    <p>Prix :&#160</p><p id="prixAchatSecValue">10</p>
                </div>

                <p>Idleclick</p>

                <div class="uneLigne">
                    <p>+&#160</p><p id="gainAchatSecValue">0.1</p><p>&#160point/sec</p>
                </div>

                <button id="buttonAchatSecValue">Achat</button>

            </div>


        </div>

    </main>

    <?php require_once '_include/footer.php' ?>

</body>
</html>