<!DOCTYPE html>
<html>
<head>
    <?php require_once '_include/head.php' ?>
    <title>Change profile</title>
</head>

<body>

    <?php require_once '_include/header.php' ?>
    <?php if(!$_SESSION){header('Location: index.php');} ?>
    <?php require_once 'classes/User.php' ?>

    <main>


        <h2 class="title_change">CHANGE PROFILE</h2>

        <form action="" method="POST" class="formulaire">

            <input type="text" name="login" value="<?php {echo $_SESSION['login'];} ?>">
            <label>Login</label>
        
            <input type="password" name="old-password" required>
            <label>Password</label>
        
            <input type="password" name="new-password">
            <label>New password</label>
                
            <input type="password" name="confirm-password">
            <label>Confirm password</label>

            <button type="submit" name="submit">Edit</button>

            <?php $user = new User();
            echo $user->Update($_POST['login'], $_POST['old-password'], $_POST['new-password'], $_POST['confirm-password'], $_POST['email'], $_POST['firstname'], $_POST['lastname']) ?>

            <button name="delete">Delete account</button>
            <?php $user->Delete() ?>

        </form>

    </main>

    <?php require_once "_include/footer.php" ?>

</body>
</html>