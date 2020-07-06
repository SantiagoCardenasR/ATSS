<?php
if (isset($_POST['login_button_submit'])) 
{
	require 'dhb.php';

	$mail = $_POST['login_mail'];
	$password = $_POST['login_pwd'];


	if (empty($mail) || empty($password)) 
	{
		header("Location: FASS.html?error=emptyFields");
		exit();
	}
	else
	{
		$sql = "SELECT * FROM usuario WHERE mail_usuario=?";
		$stmt = mysqli_stmt_init($conn);
		if (!mysqli_stmt_prepare($stmt,$sql)) 
		{
			header("Location: FASS.html?error=sqlError");
		    exit();
		}
		else
	    {
		mysqli_stmt_bind_param($stmt, "s" , $mail);
		mysqli_stmt_execute($stmt);
		$result = mysqli_stmt_get_result($stmt);
		if($row = mysqli_fetch_assoc($result))
		{
			$pwdCheck = password_verify($password, $row['contra_usuario']);
			if($pwdCheck == false)
			{
				header("Location: FASS.html?error=Wrongpwd");
		        exit();
			}
			else if($pwdCheck == true)
			{
				session_start();
				$_SESSION['nombre_usuario'] = $row['nom_usuario'];
				$_SESSION['correo_usuario'] = $row['mail_usuario'];
				
				header("Location: ./dashboard_Inicio/");
				
		        exit();
			}
			else
			{
				header("Location: index.php?error=Wrongpwd");
		        exit();
			}
		}
		else
		{
			#echo $mail;
			header("Location: index.php?error=noUser");
		    exit();
		}
	}
		
	}
}

else
{
    header("Location: index.php");
    exit();
}
