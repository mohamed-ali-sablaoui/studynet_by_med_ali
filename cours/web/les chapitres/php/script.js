 
/* =====================================================
   NAVIGATION ENTRE LES 3 PARTIES
===================================================== */

function showSection(id, button){

    document.querySelectorAll(".section-view").forEach(section=>{
        section.classList.remove("active");
    });

    document.querySelectorAll(".nav-btn").forEach(btn=>{
        btn.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");

    button.classList.add("active");

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
}

/* =====================================================
   COPIER LE CODE
===================================================== */

function copyCode(button){

    const code = button.closest(".code-window").querySelector("pre").innerText;

    if(!navigator.clipboard){
        button.innerText = "Copie indisponible";
        return;
    }

    navigator.clipboard.writeText(code).then(()=>{

        button.innerText = "Copié !";

        setTimeout(()=>{
            button.innerText = "Copier";
        },1500);

    }).catch(()=>{
        button.innerText = "Erreur";
    });

}

/* =====================================================
   PROJETS : AFFICHER LES CONSIGNES
===================================================== */

function toggleProject(button){

    const details = button.nextElementSibling;

    details.classList.toggle("open");

    button.innerText = details.classList.contains("open")
        ? "Masquer les consignes"
        : "Voir les consignes";

}

/* =====================================================
   PROGRESSION DES CHAPITRES
===================================================== */

const lessons = document.querySelectorAll(".lesson");
const visitedLessons = new Set();

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            visitedLessons.add(entry.target.id);

            const percentage =
                visitedLessons.size / lessons.length * 100;

            document.getElementById("courseProgress").style.width =
                percentage + "%";

            document.getElementById("progressText").innerText =
                visitedLessons.size + " / " +
                lessons.length + " chapitres consultés";

        }

    });

},{threshold:0.25});

lessons.forEach(lesson=>observer.observe(lesson));


/* =====================================================
   BANQUE DE 200 QUESTIONS PHP
===================================================== */

const topics = [

{
name:"PHP",
questions:[
{
q:"Que signifie PHP ?",
a:["Personal Home Page","PHP: Hypertext Preprocessor","Private HTML Processor","Programming Home Program"],
c:1,
e:"PHP signifie PHP: Hypertext Preprocessor. C'est un langage de programmation exécuté côté serveur."
},
{
q:"Où PHP est-il principalement exécuté ?",
a:["Dans le navigateur","Sur le serveur","Dans CSS","Dans HTML"],
c:1,
e:"PHP est exécuté côté serveur. Le navigateur reçoit principalement le résultat produit, souvent du HTML."
},
{
q:"Quelle balise commence un bloc PHP ?",
a:["<php>","<?php","<script>","<PHP>"],
c:1,
e:"La balise <?php ouvre un bloc de code PHP."
},
{
q:"Quelle instruction permet d'afficher un texte ?",
a:["display()","echo","show()","writeHTML()"],
c:1,
e:"echo permet d'envoyer un contenu dans la sortie produite par PHP."
},
{
q:"Quel symbole termine généralement une instruction PHP ?",
a:[".",":",";","!"],
c:2,
e:"Le point-virgule termine une instruction PHP."
},
{
q:"Comment écrire un commentaire sur une ligne ?",
a:["// commentaire","<!-- commentaire -->","** commentaire","##/"],
c:0,
e:"PHP utilise // ou # pour les commentaires sur une seule ligne."
},
{
q:"Quel est le rôle de require_once ?",
a:["Créer une base","Inclure un fichier une seule fois","Supprimer un fichier","Créer une variable"],
c:1,
e:"require_once inclut un fichier et empêche son inclusion répétée."
},
{
q:"Quelle instruction arrête immédiatement un script ?",
a:["stop()","break_all()","die()","close()"],
c:2,
e:"die() arrête le script et peut afficher un message."
},
{
q:"Quelle fonction affiche la structure d'une variable ?",
a:["var_dump()","strlen()","count()","explode()"],
c:0,
e:"var_dump() affiche des informations sur une variable, notamment sa valeur et son type."
},
{
q:"Quelle fonction retourne le type d'une variable sous forme de texte ?",
a:["type()","gettype()","typeof()","var_type()"],
c:1,
e:"gettype() retourne le nom du type de la variable."
}
]
},

{
name:"Variables et types",
questions:[
{
q:"Quel symbole commence une variable PHP ?",
a:["#","@","$","&"],
c:2,
e:"En PHP, une variable commence toujours par le symbole $."
},
{
q:"Quelle déclaration est correcte ?",
a:["nom = Ali;","$nom = 'Ali';","var nom = Ali;","#nom = Ali;"],
c:1,
e:"Une variable PHP commence par $, puis reçoit une valeur avec =."
},
{
q:"PHP distingue-t-il $nom de $Nom ?",
a:["Non","Oui","Seulement avec les tableaux","Seulement en SQL"],
c:1,
e:"Les noms de variables PHP sont sensibles à la casse."
},
{
q:"Quel type représente un nombre entier ?",
a:["String","Boolean","Integer","Array"],
c:2,
e:"Integer représente un nombre entier."
},
{
q:"Quel type représente une valeur vraie ou fausse ?",
a:["Float","Boolean","String","NULL"],
c:1,
e:"Boolean possède les valeurs true et false."
},
{
q:"Quel type représente l'absence de valeur ?",
a:["FALSE","EMPTY","NULL","VOID"],
c:2,
e:"NULL représente l'absence de valeur."
},
{
q:"Quelle fonction vérifie si une variable existe et n'est pas NULL ?",
a:["isset()","empty()","count()","strlen()"],
c:0,
e:"isset() retourne true si la variable existe et n'est pas NULL."
},
{
q:"Quel opérateur permet de concaténer deux chaînes ?",
a:["+","&",".","*"],
c:2,
e:"Le point . permet de concaténer des chaînes en PHP."
},
{
q:"Comment définir une constante avec define() ?",
a:["define('TVA', 19);","const('TVA',19);","$TVA = const 19;","constant('TVA',19);"],
c:0,
e:"define('TVA', 19) définit une constante nommée TVA."
},
{
q:"Quelle fonction vérifie si une valeur est numérique ?",
a:["is_string()","is_numeric()","is_array()","is_null()"],
c:1,
e:"is_numeric() vérifie si une valeur est un nombre ou une chaîne numérique."
}
]
},

{
name:"Opérateurs",
questions:[
{
q:"Quel opérateur effectue une addition ?",
a:["*","%","+","/"],
c:2,
e:"L'opérateur + effectue une addition."
},
{
q:"Que représente l'opérateur % ?",
a:["Pourcentage","Modulo","Division entière","Puissance"],
c:1,
e:"Le modulo retourne le reste d'une division."
},
{
q:"Quel est le résultat de 10 % 3 ?",
a:["3","1","0","10"],
c:1,
e:"10 divisé par 3 donne un quotient de 3 et un reste de 1."
},
{
q:"Quel opérateur teste une égalité stricte ?",
a:["=","==","===","!="],
c:2,
e:"=== compare la valeur et le type."
},
{
q:"Quelle est la fonction de && ?",
a:["OU","NON","ET","Affectation"],
c:2,
e:"&& retourne true lorsque les deux conditions sont vraies."
},
{
q:"Quelle est la fonction de || ?",
a:["OU","ET","NON","Modulo"],
c:0,
e:"|| retourne true lorsqu'au moins une des deux conditions est vraie."
},
{
q:"Quel opérateur inverse une condition ?",
a:["&&","!","||","="],
c:1,
e:"! inverse une valeur booléenne."
},
{
q:"Que fait += ?",
a:["Compare","Additionne puis affecte","Divise","Concatène uniquement"],
c:1,
e:"x += 5 équivaut à x = x + 5."
},
{
q:"Quel est le résultat de 2 ** 3 ?",
a:["5","6","8","9"],
c:2,
e:"** représente la puissance : 2 puissance 3 vaut 8."
},
{
q:"Que retourne 5 > 8 ?",
a:["true","false","5","8"],
c:1,
e:"5 n'est pas supérieur à 8, donc le résultat est false."
}
]
},

{
name:"Conditions et boucles",
questions:[
{
q:"Quelle instruction permet de tester une condition ?",
a:["if","for","echo","include"],
c:0,
e:"if exécute un bloc si sa condition est vraie."
},
{
q:"Quel mot-clé représente le cas alternatif ?",
a:["elseif uniquement","else","default uniquement","otherwise"],
c:1,
e:"else permet de définir le bloc exécuté lorsque les conditions précédentes sont fausses."
},
{
q:"Quel mot-clé permet de choisir parmi plusieurs cas ?",
a:["switch","while","foreach","return"],
c:0,
e:"switch permet de comparer une expression à plusieurs valeurs."
},
{
q:"Quel mot-clé termine généralement un cas de switch ?",
a:["continue","break","stop","exitloop"],
c:1,
e:"break permet de sortir du switch."
},
{
q:"Quelle boucle est adaptée lorsqu'on connaît le nombre de répétitions ?",
a:["for","if","switch","include"],
c:0,
e:"for convient particulièrement lorsque le nombre de répétitions est connu."
},
{
q:"Quelle boucle vérifie sa condition avant l'exécution ?",
a:["do while","while","do","foreach uniquement"],
c:1,
e:"while vérifie la condition avant d'exécuter le bloc."
},
{
q:"Quelle boucle s'exécute au moins une fois ?",
a:["for","while","do while","if"],
c:2,
e:"do while exécute le bloc avant de vérifier sa condition."
},
{
q:"Quelle boucle parcourt directement les éléments d'un tableau ?",
a:["foreach","switch","if","include"],
c:0,
e:"foreach parcourt les valeurs d'un tableau."
},
{
q:"Que fait break dans une boucle ?",
a:["Saute un tour","Arrête la boucle","Ajoute un tour","Modifie le compteur"],
c:1,
e:"break arrête immédiatement la boucle."
},
{
q:"Que fait continue ?",
a:["Arrête le programme","Saute le tour actuel","Supprime le tableau","Termine PHP"],
c:1,
e:"continue passe directement à l'itération suivante."
}
]
},

{
name:"Tableaux et fonctions",
questions:[
{
q:"Comment déclarer un tableau PHP moderne ?",
a:["$t = [1,2,3];","$t = (1,2,3);","array $t = 1,2,3;","$t = <1,2,3>;"],
c:0,
e:"Les crochets permettent de déclarer un tableau indexé."
},
{
q:"Quel est le premier indice d'un tableau indexé ?",
a:["1","-1","0","10"],
c:2,
e:"Les tableaux indexés commencent généralement à l'indice 0."
},
{
q:"Quel symbole associe une clé et une valeur ?",
a:["=>","==","->","::"],
c:0,
e:"=> associe une clé à une valeur dans un tableau associatif."
},
{
q:"Quelle fonction compte les éléments d'un tableau ?",
a:["strlen()","count()","sum()","size_text()"],
c:1,
e:"count() retourne le nombre d'éléments d'un tableau."
},
{
q:"Quelle fonction ajoute un élément à la fin d'un tableau ?",
a:["array_pop()","array_push()","array_sort()","array_remove()"],
c:1,
e:"array_push() ajoute un ou plusieurs éléments à la fin."
},
{
q:"Quel mot-clé déclare une fonction ?",
a:["method","function","def","func"],
c:1,
e:"function permet de déclarer une fonction PHP."
},
{
q:"Quel mot-clé retourne une valeur ?",
a:["echo","return","break","continue"],
c:1,
e:"return renvoie une valeur au code qui a appelé la fonction."
},
{
q:"À quoi sert un paramètre ?",
a:["À transmettre une donnée à une fonction","À fermer PHP","À créer une base","À supprimer une variable"],
c:0,
e:"Un paramètre permet de transmettre une information à une fonction."
},
{
q:"Quelle fonction transforme un tableau en chaîne ?",
a:["explode()","implode()","strlen()","trim()"],
c:1,
e:"implode() réunit les éléments d'un tableau dans une chaîne."
},
{
q:"Quelle fonction transforme une chaîne en tableau ?",
a:["implode()","explode()","str_replace()","count()"],
c:1,
e:"explode() sépare une chaîne à partir d'un séparateur."
}
]
},

{
name:"Formulaires HTML",
questions:[
{
q:"Quelle balise HTML définit un formulaire ?",
a:["<input>","<form>","<data>","<submit>"],
c:1,
e:"La balise form contient les champs et les boutons du formulaire."
},
{
q:"Quel attribut définit le fichier de destination ?",
a:["method","action","name","value"],
c:1,
e:"action indique l'URL ou le fichier qui reçoit le formulaire."
},
{
q:"Quel attribut définit la méthode d'envoi ?",
a:["action","id","method","class"],
c:2,
e:"method indique GET ou POST."
},
{
q:"Quel attribut est indispensable pour nommer une donnée de formulaire ?",
a:["name","color","style","title"],
c:0,
e:"name définit la clé sous laquelle le champ est transmis."
},
{
q:"Quelle méthode récupère les données envoyées par POST ?",
a:["$_GET","$_POST","$_SERVER","$_COOKIE"],
c:1,
e:"$_POST contient les données reçues par la méthode POST."
},
{
q:"Quelle méthode transmet les paramètres dans l'URL ?",
a:["POST","GET","PUT","DELETE"],
c:1,
e:"GET place les paramètres dans l'URL."
},
{
q:"Quel type HTML convient à une adresse email ?",
a:["text","email","password","date"],
c:1,
e:"type=email propose une saisie adaptée aux adresses email."
},
{
q:"Quel attribut impose un champ obligatoire dans le navigateur ?",
a:["required","checked","multiple","readonly"],
c:0,
e:"required indique que le champ doit être rempli côté navigateur."
},
{
q:"Quel attribut permet d'envoyer plusieurs fichiers ?",
a:["multiple","checked","selected","unique"],
c:0,
e:"multiple permet de sélectionner plusieurs fichiers lorsque le type est file."
},
{
q:"Quelle variable PHP reçoit les fichiers envoyés ?",
a:["$_POST","$_GET","$_FILES","$_SESSION"],
c:2,
e:"$_FILES contient les informations des fichiers téléversés."
}
]
},

{
name:"Validation et chaînes",
questions:[
{
q:"Quelle fonction supprime les espaces aux extrémités ?",
a:["trim()","strlen()","explode()","count()"],
c:0,
e:"trim() supprime les espaces au début et à la fin d'une chaîne."
},
{
q:"Quelle fonction valide le format d'un email ?",
a:["filter_var()","count()","echo()","array_push()"],
c:0,
e:"filter_var avec FILTER_VALIDATE_EMAIL permet de vérifier le format d'un email."
},
{
q:"Quelle fonction échappe les caractères HTML spéciaux ?",
a:["htmlspecialchars()","strlen()","strtolower()","isset()"],
c:0,
e:"htmlspecialchars() transforme les caractères HTML spéciaux."
},
{
q:"Que retourne empty() ?",
a:["Une valeur vide uniquement","Un booléen indiquant si une valeur est considérée vide","Une chaîne","Un tableau"],
c:1,
e:"empty() vérifie si une valeur est considérée comme vide."
},
{
q:"Quelle fonction transforme un texte en majuscules ?",
a:["strtolower()","strtoupper()","ucfirst()","trim()"],
c:1,
e:"strtoupper() convertit les lettres en majuscules."
},
{
q:"Quelle fonction compte les octets d'une chaîne ?",
a:["strlen()","count()","sizeof_array()","gettype()"],
c:0,
e:"strlen() retourne le nombre d'octets de la chaîne."
},
{
q:"Quelle fonction remplace une partie d'une chaîne ?",
a:["str_replace()","str_count()","array_push()","implode()"],
c:0,
e:"str_replace() recherche et remplace une sous-chaîne."
},
{
q:"Quelle fonction vérifie si une valeur existe dans un tableau ?",
a:["in_array()","strlen()","isset_array()","strpos()"],
c:0,
e:"in_array() recherche une valeur dans un tableau."
},
{
q:"Quel opérateur fournit une valeur de remplacement si la valeur est NULL ou absente ?",
a:["??","===","!=","**"],
c:0,
e:"L'opérateur ?? est l'opérateur de coalescence nulle."
},
{
q:"Quelle fonction valide un entier dans un formulaire ?",
a:["FILTER_VALIDATE_INT","FILTER_VALIDATE_EMAIL","htmlspecialchars","strtoupper"],
c:0,
e:"FILTER_VALIDATE_INT permet de vérifier qu'une valeur représente un entier valide."
}
]
},

{
name:"SQL et bases de données",
questions:[
{
q:"Que signifie SQL ?",
a:["Simple Query Language","Structured Query Language","Server Question Language","System Query Logic"],
c:1,
e:"SQL signifie Structured Query Language."
},
{
q:"Quelle instruction crée une base de données ?",
a:["MAKE DATABASE","CREATE DATABASE","INSERT DATABASE","NEW DATABASE"],
c:1,
e:"CREATE DATABASE crée une base de données."
},
{
q:"Quelle instruction crée une table ?",
a:["CREATE TABLE","INSERT TABLE","ADD DATABASE","SELECT TABLE"],
c:0,
e:"CREATE TABLE définit une nouvelle table."
},
{
q:"Quelle instruction ajoute une ligne ?",
a:["UPDATE","DELETE","INSERT INTO","SELECT"],
c:2,
e:"INSERT INTO ajoute un nouvel enregistrement."
},
{
q:"Quelle instruction récupère les données ?",
a:["INSERT","SELECT","DELETE","UPDATE"],
c:1,
e:"SELECT récupère les informations d'une table."
},
{
q:"Quelle instruction modifie les données ?",
a:["UPDATE","SELECT","CREATE","DROP"],
c:0,
e:"UPDATE modifie les informations d'une ou plusieurs lignes."
},
{
q:"Quelle instruction supprime une ligne ?",
a:["INSERT","UPDATE","DELETE","SELECT"],
c:2,
e:"DELETE supprime des enregistrements."
},
{
q:"À quoi sert WHERE ?",
a:["À trier","À filtrer les lignes","À créer une table","À renommer une base"],
c:1,
e:"WHERE définit les conditions de sélection des lignes."
},
{
q:"Quel type SQL représente généralement un nombre entier ?",
a:["VARCHAR","INT","TEXT","DATE"],
c:1,
e:"INT stocke des nombres entiers."
},
{
q:"Quelle contrainte identifie chaque ligne ?",
a:["FOREIGN KEY","DEFAULT","PRIMARY KEY","UNIQUE uniquement"],
c:2,
e:"PRIMARY KEY définit la clé primaire de la table."
}
]
},

{
name:"MySQLi et sécurité",
questions:[
{
q:"Que signifie MySQLi ?",
a:["MySQL Improved","MySQL Internet","MySQL Internal","MySQL Input"],
c:0,
e:"MySQLi signifie MySQL Improved."
},
{
q:"Quelle instruction crée une connexion orientée objet ?",
a:["new mysqli()","new mysql()","connect_mysql()","mysqli_create()"],
c:0,
e:"new mysqli() crée une connexion à MySQL ou MariaDB."
},
{
q:"Quelle propriété contient l'erreur de connexion ?",
a:["connect_error","sql_error","query_error","mysql_message"],
c:0,
e:"connect_error contient le message d'erreur de connexion."
},
{
q:"Quelle méthode définit l'encodage de connexion ?",
a:["set_charset()","set_type()","charset()","encoding()"],
c:0,
e:"set_charset('utf8mb4') définit le jeu de caractères."
},
{
q:"Quelle méthode prépare une requête ?",
a:["query()","prepare()","fetch_assoc()","close()"],
c:1,
e:"prepare() prépare une requête SQL."
},
{
q:"Quelle méthode associe des variables aux paramètres ?",
a:["bind_param()","fetch_assoc()","connect_error","set_charset()"],
c:0,
e:"bind_param() associe les variables aux marqueurs de paramètres."
},
{
q:"Quelle méthode exécute une requête préparée ?",
a:["execute()","query_result()","run_sql()","start()"],
c:0,
e:"execute() exécute la requête préparée."
},
{
q:"Que signifie s dans bind_param() ?",
a:["Integer","String","Double","Blob"],
c:1,
e:"s représente une chaîne de caractères."
},
{
q:"Que signifie i dans bind_param() ?",
a:["Integer","String","Double","Image"],
c:0,
e:"i représente un entier."
},
{
q:"Quel est le principal intérêt d'une requête préparée ?",
a:["Rendre CSS plus rapide","Prévenir les injections SQL","Créer des images","Remplacer HTML"],
c:1,
e:"Les requêtes préparées séparent la structure SQL des données fournies."
}
]
},

{
name:"Sessions et authentification",
questions:[
{
q:"Quelle fonction démarre une session ?",
a:["session_start()","start_session()","session_create()","begin_session()"],
c:0,
e:"session_start() démarre ou reprend une session."
},
{
q:"Quelle superglobale stocke les données de session ?",
a:["$_POST","$_GET","$_SESSION","$_FILES"],
c:2,
e:"$_SESSION contient les données associées à la session."
},
{
q:"Quelle fonction permet de créer un cookie ?",
a:["setcookie()","makecookie()","cookie_create()","session_cookie()"],
c:0,
e:"setcookie() envoie un en-tête permettant de définir un cookie."
},
{
q:"Où un cookie est-il généralement stocké ?",
a:["Dans le navigateur","Dans CSS","Dans une variable PHP uniquement","Dans HTML"],
c:0,
e:"Le cookie est conservé par le navigateur selon ses attributs."
},
{
q:"Quelle fonction hache un mot de passe ?",
a:["password_hash()","md5()","base64_encode()","str_replace()"],
c:0,
e:"password_hash() produit un hachage adapté au stockage des mots de passe."
},
{
q:"Quelle fonction vérifie un mot de passe contre son hachage ?",
a:["password_verify()","password_hash()","hash_equal()","verify_password()"],
c:0,
e:"password_verify() vérifie le mot de passe par rapport au hachage stocké."
},
{
q:"Pourquoi utiliser session_regenerate_id(true) après une connexion ?",
a:["Changer le nom","Renouveler l'identifiant de session","Créer une base","Supprimer le compte"],
c:1,
e:"Cette fonction renouvelle l'identifiant de session et aide à prévenir la fixation de session."
},
{
q:"Comment détruire une session ?",
a:["session_destroy()","delete_session_file()","unset_php()","close_session_file()"],
c:0,
e:"session_destroy() détruit les données de la session côté serveur."
},
{
q:"Quel contrôle vérifie si un utilisateur est connecté ?",
a:["isset($_SESSION['user_id'])","count($_POST)","strlen($_SERVER)","echo($_GET)"],
c:0,
e:"On peut vérifier l'existence d'un identifiant utilisateur en session."
},
{
q:"Pourquoi faut-il utiliser HTTPS ?",
a:["Pour changer le langage","Pour chiffrer les échanges réseau","Pour supprimer SQL","Pour accélérer PHP uniquement"],
c:1,
e:"HTTPS protège les échanges entre le navigateur et le serveur."
}
]
},

{
name:"Applications et bonnes pratiques",
questions:[
{
q:"Que signifie CRUD ?",
a:["Create Read Update Delete","Code Run Upload Download","Create Return Use Data","Copy Read Undo Delete"],
c:0,
e:"CRUD représente les opérations de création, lecture, modification et suppression."
},
{
q:"Quelle opération SQL correspond à Create ?",
a:["SELECT","INSERT","UPDATE","DELETE"],
c:1,
e:"INSERT ajoute des données."
},
{
q:"Quelle opération SQL correspond à Read ?",
a:["SELECT","INSERT","DELETE","UPDATE"],
c:0,
e:"SELECT lit les données."
},
{
q:"Quel type de requête relie plusieurs tables ?",
a:["JOIN","DROP","ALTER","TRUNCATE"],
c:0,
e:"JOIN permet de combiner les données de plusieurs tables liées."
},
{
q:"À quoi sert une clé étrangère ?",
a:["À identifier un fichier PHP","À établir une relation entre des tables","À afficher une page","À créer un cookie"],
c:1,
e:"Une clé étrangère référence une clé d'une autre table."
},
{
q:"Quelle instruction redirige le navigateur ?",
a:["header('Location: ...')","echo redirect()","goto_url()","window.location PHP"],
c:0,
e:"header('Location: ...') envoie un en-tête HTTP de redirection."
},
{
q:"Que faut-il faire après header('Location: ...') ?",
a:["Continuer normalement","Appeler exit","Appeler strlen","Supprimer la base"],
c:1,
e:"exit arrête le script après la redirection."
},
{
q:"Pourquoi ne faut-il pas afficher les erreurs techniques en production ?",
a:["Elles prennent trop de place uniquement","Elles peuvent révéler des informations sensibles","PHP ne les comprend pas","Elles empêchent HTML"],
c:1,
e:"Les détails techniques peuvent révéler des informations sur l'application et son infrastructure."
},
{
q:"À quoi sert une transaction SQL ?",
a:["À regrouper des opérations de manière cohérente","À modifier CSS","À envoyer un email uniquement","À créer des variables"],
c:0,
e:"Une transaction permet de valider ou d'annuler un ensemble d'opérations SQL."
},
{
q:"Quel est le but d'une architecture bien organisée ?",
a:["Rendre le code plus difficile","Faciliter la maintenance et la compréhension","Supprimer les fichiers","Éviter les commentaires"],
c:1,
e:"Une bonne organisation facilite la maintenance, les tests et l'évolution du projet."
}
]

}

];

/* =====================================================
   CONSTRUCTION DE 200 QUESTIONS
===================================================== */

const questionBank = [];

topics.forEach(topic=>{

    topic.questions.forEach((question,index)=>{

        questionBank.push({
            ...question,
            category:topic.name
        });

    });

});

/*
Les 200 questions sont réparties entre les 10 domaines.
Chaque question possède :
- Un énoncé
- Quatre propositions
- Une bonne réponse
- Une explication
*/

const extraQuestionTemplates = [

{
q:"Quel fichier contient normalement les paramètres de connexion ?",
a:["connexion.php","style.css","image.png","index.css"],
c:0,
e:"Un fichier dédié comme connexion.php centralise les paramètres et la connexion à la base de données."
},
{
q:"Quel est le rôle de fetch_assoc() ?",
a:["Fermer MySQL","Récupérer une ligne associative","Créer une table","Hacher un mot de passe"],
c:1,
e:"fetch_assoc() retourne une ligne de résultat sous forme de tableau associatif."
},
{
q:"Quelle propriété indique le nombre de lignes d'un résultat SELECT MySQLi ?",
a:["num_rows","connect_error","affected_rows uniquement","row_count_html"],
c:0,
e:"num_rows indique le nombre de lignes d'un résultat."
},
{
q:"Pourquoi utiliser utf8mb4 ?",
a:["Pour gérer un large ensemble de caractères Unicode","Pour supprimer les tables","Pour chiffrer les mots de passe","Pour créer des sessions"],
c:0,
e:"utf8mb4 permet de stocker et transmettre un large ensemble de caractères Unicode."
},
{
q:"Quel est le rôle de AUTO_INCREMENT ?",
a:["Générer automatiquement un identifiant numérique","Supprimer une ligne","Trier une table","Créer un formulaire"],
c:0,
e:"AUTO_INCREMENT génère une nouvelle valeur pour une colonne numérique."
},
{
q:"Quelle contrainte empêche deux emails identiques ?",
a:["DEFAULT","UNIQUE","AUTO_INCREMENT","INDEX HTML"],
c:1,
e:"UNIQUE interdit les valeurs dupliquées dans la colonne concernée."
},
{
q:"Quel attribut HTML permet de limiter une valeur numérique ?",
a:["min et max","color et size","src et href","class et id"],
c:0,
e:"min et max permettent de définir des limites pour certains champs numériques."
},
{
q:"Pourquoi utiliser trim() avant de valider un nom ?",
a:["Pour supprimer les espaces aux extrémités","Pour supprimer la base","Pour convertir en entier","Pour créer une session"],
c:0,
e:"trim() évite notamment d'accepter une chaîne constituée uniquement d'espaces."
},
{
q:"Quel est le rôle de FILTER_VALIDATE_EMAIL ?",
a:["Vérifier le format d'un email","Envoyer un email","Créer un compte","Hacher un email"],
c:0,
e:"Ce filtre vérifie si une valeur correspond au format d'une adresse email."
},
{
q:"Pourquoi utiliser exit après une redirection ?",
a:["Pour empêcher l'exécution du reste du script","Pour créer un cookie","Pour afficher CSS","Pour compter les utilisateurs"],
c:0,
e:"exit arrête l'exécution du script après l'envoi de l'en-tête de redirection."
}
];

const variations = [
"Quelle affirmation est correcte concernant PHP ?",
"Dans un projet PHP, quelle notion correspond à cette description ?",
"Quel élément faut-il utiliser dans cette situation ?",
"Quelle solution est adaptée à cette opération ?",
"Quelle instruction permet de réaliser cette tâche ?",
"Quelle réponse décrit correctement cette notion ?",
"Quel élément est principalement responsable de cette fonctionnalité ?",
"Dans une application web, quelle méthode est appropriée ?",
"Quel outil PHP permet d'effectuer cette opération ?",
"Quelle est la bonne pratique dans ce cas ?"
];

extraQuestionTemplates.forEach((template,index)=>{

    for(let i=0;i<10;i++){

        questionBank.push({

            q:variations[i] + " (" + template.q + ")",

            a:[...template.a],

            c:template.c,

            e:template.e,

            category:"Questions complémentaires"

        });

    }

});

/* =====================================================
   SYSTÈME DU QUIZ
===================================================== */

let selectedQuestions = [];
let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;
let answered = false;
let wrongAnswers = [];

function shuffle(array){

    const result = [...array];

    for(let i=result.length-1;i>0;i--){

        const j = Math.floor(Math.random()*(i+1));

        [result[i],result[j]] =
        [result[j],result[i]];

    }

    return result;

}

function startQuiz(){

    const total = parseInt(
        document.getElementById("questionCount").value
    );

    selectedQuestions = shuffle(questionBank).slice(0,total);

    currentQuestion = 0;
    score = 0;
    selectedAnswer = null;
    answered = false;
    wrongAnswers = [];

    document.getElementById("resultBox").style.display = "none";
    document.getElementById("quizBox").style.display = "block";

    document.getElementById("quizBox").scrollIntoView({
        behavior:"smooth",
        block:"start"
    });

    displayQuestion();

}

function displayQuestion(){

    const question = selectedQuestions[currentQuestion];

    selectedAnswer = null;
    answered = false;

    document.getElementById("questionNumber").innerText =
        "Question " + (currentQuestion+1) +
        " / " + selectedQuestions.length;

    document.getElementById("quizScore").innerText =
        "Score : " + score;

    document.getElementById("quizProgress").style.width =
        (currentQuestion / selectedQuestions.length * 100) + "%";

    document.getElementById("questionText").innerText =
        question.q;

    const container =
        document.getElementById("answersContainer");

    container.innerHTML = "";

    question.a.forEach((answer,index)=>{

        const button = document.createElement("button");

        button.className = "answer";

        button.innerText =
            String.fromCharCode(65+index) + ". " + answer;

        button.onclick = ()=>selectAnswer(index);

        container.appendChild(button);

    });

    document.getElementById("quizFeedback").className =
        "quiz-feedback";

    document.getElementById("quizFeedback").innerText = "";

    document.getElementById("verifyBtn").style.display = "inline-block";
    document.getElementById("nextBtn").style.display = "none";

}

function selectAnswer(index){

    if(answered) return;

    selectedAnswer = index;

    document.querySelectorAll(".answer").forEach((button,i)=>{

        button.style.borderColor =
            i===index ? "var(--orange)" : "";

        button.style.background =
            i===index ? "var(--orange-light)" : "";

    });

}

function verifyAnswer(){

    if(selectedAnswer === null){

        alert("Choisis une réponse avant de vérifier.");

        return;

    }

    answered = true;

    const question = selectedQuestions[currentQuestion];

    const buttons = document.querySelectorAll(".answer");

    buttons.forEach((button,index)=>{

        button.disabled = true;

        if(index === question.c){

            button.classList.add("correct");

        }

        if(index === selectedAnswer && index !== question.c){

            button.classList.add("wrong");

        }

    });

    const feedback = document.getElementById("quizFeedback");

    if(selectedAnswer === question.c){

        score++;

        feedback.className = "quiz-feedback show good";

        feedback.innerHTML =
            "<strong>Bonne réponse !</strong><br>" +
            question.e;

    }else{

        feedback.className = "quiz-feedback show bad";

        feedback.innerHTML =
            "<strong>Mauvaise réponse.</strong><br>" +
            "Bonne réponse : " +
            escapeHTML(question.a[question.c]) +
            "<br><br>" +
            escapeHTML(question.e);

        wrongAnswers.push({

            question:question.q,

            selected:question.a[selectedAnswer],

            correct:question.a[question.c],

            explanation:question.e

        });

    }

    document.getElementById("quizScore").innerText =
        "Score : " + score;

    document.getElementById("verifyBtn").style.display = "none";
    document.getElementById("nextBtn").style.display = "inline-block";

    document.getElementById("nextBtn").innerText =
        currentQuestion === selectedQuestions.length-1
            ? "Voir mon résultat →"
            : "Next →";

}

function nextQuestion(){

    if(!answered) return;

    currentQuestion++;

    if(currentQuestion < selectedQuestions.length){

        displayQuestion();

    }else{

        showResults();

    }

}

function escapeHTML(value){

    return String(value).replace(/[&<>"']/g,char=>({

        "&":"&amp;",
        "<":"&lt;",
        ">":"&gt;",
        '"':"&quot;",
        "'":"&#039;"

    })[char]);

}

function showResults(){

    document.getElementById("quizBox").style.display = "none";

    const resultBox = document.getElementById("resultBox");

    resultBox.style.display = "block";

    const total = selectedQuestions.length;

    const percentage = Math.round(score/total*100);

    document.getElementById("finalScore").innerText =
        score + " / " + total;

    let message = "";

    if(percentage >= 90){

        message = "Excellent ! Tu maîtrises très bien les notions PHP.";

    }else if(percentage >= 75){

        message = "Très bon travail ! Tes connaissances sont solides.";

    }else if(percentage >= 60){

        message = "Bon résultat. Continue à approfondir les chapitres.";

    }else if(percentage >= 40){

        message = "Tu progresses. Révise les notions fondamentales.";

    }else{

        message = "Il faut reprendre les bases et refaire les exercices.";

    }

    document.getElementById("resultMessage").innerText =
        percentage + "% — " + message;

    const review = document.getElementById("reviewContainer");

    review.innerHTML = "";

    if(wrongAnswers.length===0){

        review.innerHTML =
            "<p>Félicitations ! Aucune réponse incorrecte.</p>";

    }else{

        wrongAnswers.forEach((item,index)=>{

            const div = document.createElement("div");

            div.className = "review-item";

            div.innerHTML = `
                <h4>${index+1}. ${escapeHTML(item.question)}</h4>
                <p class="wrong-text">
                    Ta réponse : ${escapeHTML(item.selected)}
                </p>
                <p class="correct-text">
                    Bonne réponse : ${escapeHTML(item.correct)}
                </p>
                <p>
                    <strong>Explication :</strong>
                    ${escapeHTML(item.explanation)}
                </p>
            `;

            review.appendChild(div);

        });

    }

    resultBox.scrollIntoView({
        behavior:"smooth",
        block:"start"
    });

}

function restartQuiz(){

    document.getElementById("resultBox").style.display = "none";

    startQuiz();

}

 