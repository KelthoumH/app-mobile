//voilà l'API pour la connexion à l'Application :)


<?php
//pour changer la structure
header('Content-Type: application/json'); 

// OUBLIE PAS DE CHANGER LE NOM DE TA TABLE

try{
    $pdo = new PDO('mysql:host=localhost;port=8888;dbname=app;','root','root');
    $tab["success"] = true;
    $tab["message"] = "connexion yes";
    
} catch(Exception $e){
    $tab["success"] = false;
    $tab["message"] = "connexion nop";
}

if(isset($_GET['id_users'])){

    // On connaît le numéro de la version à afficher :
    //   intval =  éviter les injection sql (sécurité)
    $id_users=intval($_GET['id_users']);
  
 
 
    // On crée la requête SQL :
    $requete = $pdo->prepare("SELECT * FROM users WHERE id = :id");

   // On envoie la requête :
    $requete->bindValue("id", $id_users);
    $requete->execute();
    $resultats = $requete->fetchAll(PDO::FETCH_ASSOC);
    
 $tab["success"] = true;
 $tab["message"] = "Voici les utilisateurs";
 $tab["resultats"]["users"] = $resultats;

}

echo json_encode($tab);

?>
