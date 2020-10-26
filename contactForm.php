<!-- <?php

    // if(isset($_POST['submit'])) {
    //     // we create variable for all input
    //     $name = $_POST['name'];
    //     $emailFrom = $_POST['email'];
    //     $message = $_POST['message'];

    //     // the mail we want to send message to
    //     $mailTo = "folzzz@zohomail.com";
    //     // the header we want to include, which we can use to add extra information like who the mail is from
    //     $headers = "From: ".$emailFrom;
    //     $customTxt = "You have received an Email from ".$name.".\n\n".$message;

    //     // php inbuilt mail function takes in different parameters
    //     mail($mailTo, $customTxt, $headers);

    //     // function that takes us back to the homepage when message is sent
    //     header("Location: index.html");
    // }
    
?> -->

<?php

    $name =$_POST['name'];
    $visitorEmail = $_POST['email'];
    $message = $_POST['message'];

    $siteMail = "flexysolutions@gmail.com"
    $mailTo = "folzzz@zohomail.com";
    $customSubject = "You have received a new email submission";

    $mailBody = "User Name: $name.\n". "User Email: $visitorEmail.\n". "User Message: $message.\n";

    $headers = "From: $siteMail \r\n";

    $headers .= "Reply-To: $visitorEmail \r\n";

    mail($mailTo, $customSubject, $mailBody, $headers);

    header("Location: index.html");

    

?>