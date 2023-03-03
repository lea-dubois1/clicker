<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="styles/style.css"/>
    <link rel="stylesheet" type="text/css" href="styles/game.css"/>
    <script src="_include/game.js" defer></script>
    <title>Clicker game</title>
</head>
<body>

    <?php require_once '_include/header.php' ?>
    <?php if(!$_SESSION){header('Location: index.php');} ?>

    <main>

        <div id="clickPart">

            <img id="addPointButton" src="images/primo.webp" alt="">

            <div class="uneLigne">
                <p id="nbPoints">0</p><p>&#160</p><p id="displayPointsP">&#160Genshin points</p>
            </div>

        </div>

        <div id="boutique">

            <div id="achatClickValue">

                <img class="imgSmall" src="images/voeuViolet.avif" alt="">

                <div class="uneLigne">
                    <p>Prix :&#160</p><p id="prixAchatClickValue">20</p>
                </div>

                <p>Wish</p>

                <div class="uneLigne">
                    <p id="gainAchatClickValue">2</p><p>&#160points/click</p>
                </div>

                <button id="buttonAchatClickValue">Buy</button>

            </div>

            <div id="achatSecValue">

                <img class="imgSmall" src="images/carte.webp" alt="">

                <div class="uneLigne">
                    <p>Prix :&#160</p><p id="prixAchatSecValue">50</p>
                </div>

                <p>Welkin blessing</p>

                <div class="uneLigne">
                    <p id="gainAchatSecValue">0.3</p><p>&#160points/sec</p>
                </div>

                <button id="buttonAchatSecValue">Buy</button>

            </div>


        </div>

    </main>

    <?php require_once '_include/footer.php' ?>

</body>
</html>