<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Simpel validering
    if (!empty($name) && !empty($email) && !empty($message)) {
        // Her kan du tilføje koden til at sende en e-mail eller gemme data i en database

        echo "Tak for din besked, $name. Vi vender tilbage til dig hurtigst muligt.";
    } else {
        echo "Alle felter skal udfyldes.";
    }
} else {
    echo "Ingen data modtaget.";
}
?>
