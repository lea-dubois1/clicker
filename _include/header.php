<?php if (session_status() == PHP_SESSION_NONE){ session_start();} ?>


<header>

    <h1>Clicker</h1>

    <nav>
            
        <ul id="menu">
            <?php if($_SESSION){echo '<a href="game.php"><li>Game</li></a>';} ?>
            <?php // if($_SESSION){echo '<a href="profil.php"><li>Profile</li></a>';} ?>
            <?php if($_SESSION){echo '<a value="deconnexion" name="deconnexion" href="_include/logout.php"><li>Logout</li></a>';} ?>
        </ul>

    </nav>
</header>