<?php
  $to = "rajurkarchanda@gmail.com";
  $subject = "From Website: Feedback Form Submission";

  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  if (!$name || !$email || !$message) {
    http_response_code(400);
    echo "All fields are required.";
    return;
  }

  if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo "Invalid email address.";
    return;
  }

  $email_body = "Name: $name\n";
  $email_body .= "Email: $email\n";
  $email_body .= "Message: $message\n";

  $headers = "From: $email";

  if (mail($to, $subject, $email_body, $headers)) {
    echo "Form submitted successfully.";
  } else {
    http_response_code(500);
    echo "Failed to submit form.";
  }
?>
