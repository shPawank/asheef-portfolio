<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name    = htmlspecialchars($_POST["name"]);
    $email   = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);

    $data = "Name: $name\nEmail: $email\nMessage: $message\n---\n";

    file_put_contents("messages.txt", $data, FILE_APPEND);
    echo "<h3 style='text-align:center;margin-top:100px;'>Message saved successfully! ✅</h3>";
} else {
    echo "Invalid request.";
}
?>
