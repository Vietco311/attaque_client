<?php
try {
    $host = "localhost";
    $dbname = "attaque";
    $username = "root";
    $password = "";

    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);

    // Configurer PDO pour afficher les erreurs
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    echo "Connexion à la base de données réussie.";

} catch (PDOException $e) {
    echo "Erreur de connexion : " . $e->getMessage();
}
?>
