

<?php


//pour changer la structure
var_dump('efqe');   
header('Content-Type: application/json'); 
// entete
header("Access-Control-Allow-Origin: *");

//connexion

try{
    $pdo = new PDO('mysql:host=localhost;port=8888;dbname=belly;','root','root');
    $tab["success"] = true;
    $tab["message"] = "connexion yes";
    
} catch(Exception $e){
    $tab["success"] = false;
    $tab["message"] = "connexion nop";
}

if(isset($_GET['id_article'])){

    // On connaît le numéro de la version à afficher :
    //   intval =  éviter les injection sql (sécurité)
    $id_article=intval($_GET['id_article']);
  
 
 
    // On crée la requête SQL :
    $requete = $pdo->prepare("SELECT * FROM article WHERE id = :id");

   // On envoie la requête :
    $requete->bindValue("id", $id_article);
    $requete->execute();
    $resultats = $requete->fetchAll(PDO::FETCH_ASSOC);
    


 $tab["success"] = true;
 $tab["message"] = "Voici les articles";
 $tab["resultats"]["article"] = $resultats;


// $requete = $pdo->prepare("SELECT * FROM `evenements`");
// $requete->execute();
// $resultats = $requete->fetchAll();

// $tab["success"] = true;
// $tab["message"] = "Voici les évènements";
// $tab["resultats"]["evenements"] = count($resultats);
// $tab["resultats"]["evenements"] = $resultats;
echo json_encode($tab);
}
?>