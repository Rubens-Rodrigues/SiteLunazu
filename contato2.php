<?php
   use PHPMailer\PHPMailer\PHPMailer;
   use PHPMailer\PHPMailer\Exception;
   use PHPMailer\PHPMailer\SMTP;

   require 'vendor/autoload.php';

  if(isset($_POST['submit'])) {
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $telefone = $_POST['telefone'];
    $posicao = $_POST['posicao'];
    $segmentos = "";
      if(isset($_POST['segmento'])) 
      { for($i = 0; $i < count($_POST['segmento']); $i++) 
	      {
	        $segmentos .= $_POST['segmento'][$i];
	      }
      };
    $mensagem = $_POST['mensagem'];

    $mail = new PHPMailer(true);

    $mail->isSMTP();
    $mail->Host = 'lunazu.com';
    $mail->Username = 'contato@lunazu.com';
    $mail->Port = 587;

    $mail->setFrom($email, $nome);
    $mail->addAddress('contato@lunazu.com', 'Nome');
    $mail->Subject = 'Contato pelo Site';

    $mail->isHTML(true);
    $mail->CharSet = 'UTF-8';

    $mail->Body = "<html><head><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /></head><body>";
    $mail->Body .= "<p>Nome: $nome</p>";
    $mail->Body .= "<p>Email: $email</p>";
    $mail->Body .= "<p>Telefone: $telefone</p>";
    $mail->Body .= "<p>Posição na fazenda: $posicao</p>";
    $mail->Body .= "<p>Segmentos selecionados: $segmentos</p>";
    $mail->Body .= "<p>Mensagem: $mensagem</p>";
    $mail->Body .= "</body></html>";

    if (!$mail->send()) {
        echo 'Erro ao enviar mensagem: ' .$mail->ErrorInfo;
    } else {
        echo "<meta http-equiv='refresh' content='0;url=../pages/contato.html'>";
    }
}
?>
