 
/* =====================================================
   NAVIGATION ENTRE LES 3 PARTIES
===================================================== */

const navButtons = document.querySelectorAll(".nav-btn");
const sections = document.querySelectorAll(".section");
const progressBar = document.getElementById("progressBar");

navButtons.forEach(button => {
    button.addEventListener("click", () => {
        const target = button.dataset.section;

        navButtons.forEach(btn => btn.classList.remove("active"));
        sections.forEach(section => section.classList.remove("active"));

        button.classList.add("active");
        document.getElementById(target).classList.add("active");

        const progress = {
            course: "33.33%",
            projects: "66.66%",
            quiz: "100%"
        };

        progressBar.style.width = progress[target];
    });
});

/* =====================================================
   NAVIGATION ENTRE LES CATÉGORIES DU COURS
===================================================== */

document.querySelectorAll(".subnav button").forEach(button => {
    button.addEventListener("click", () => {

        const target = button.dataset.category;

        document.querySelectorAll(".subnav button")
            .forEach(btn => btn.classList.remove("active"));

        document.querySelectorAll(".course-category")
            .forEach(category => category.classList.remove("active"));

        button.classList.add("active");

        document.getElementById(target).classList.add("active");
    });
});

/* =====================================================
   EXÉCUTION DES EXEMPLES HTML ET CSS
===================================================== */

document.querySelectorAll(".example-box").forEach(example => {

    const editor = example.querySelector(".code-editor");
    const preview = example.querySelector(".preview-frame");
    const runButton = example.querySelector(".run-code");
    const resetButton = example.querySelector(".reset-code");

    const initialCode = editor.value;

    function executeCode() {

        const code = editor.value;

        const documentContent = `
<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
    body {
        font-family: Arial, sans-serif;
        padding: 15px;
        color: #191919;
        overflow-wrap: break-word;
    }

    img {
        max-width: 100%;
    }

    table {
        max-width: 100%;
    }

    input, textarea, select, button {
        max-width: 100%;
    }
</style>
</head>
<body>
${code}
</body>
</html>`;

        preview.srcdoc = documentContent;
    }

    runButton.addEventListener("click", executeCode);

    resetButton.addEventListener("click", () => {
        editor.value = initialCode;
        executeCode();
    });

    executeCode();
});

/* =====================================================
   CORRECTION DES PROJETS
===================================================== */

document.querySelectorAll(".project-card").forEach(card => {

    const button = card.querySelector(".correction-btn");
    const correction = card.querySelector(".project-correction");

    button.addEventListener("click", () => {

        correction.classList.toggle("active");

        button.textContent = correction.classList.contains("active")
            ? "Masquer le corrigé"
            : "Voir le corrigé détaillé";
    });

});

/* =====================================================
   BASE DE QUESTIONS — 200 QUESTIONS
===================================================== */

const questionBank = [

/* HTML : STRUCTURE */

{
category:"html",
q:"Quelle balise définit le titre principal d'une page ?",
a:["<h1>","<title>","<p>","<head>"],
correct:0,
explanation:"<h1> définit le titre principal visible dans la page."
},

{
category:"html",
q:"Quelle balise contient le contenu visible d'une page HTML ?",
a:["<head>","<body>","<meta>","<title>"],
correct:1,
explanation:"Le contenu visible est placé dans la balise <body>."
},

{
category:"html",
q:"Quel élément définit le titre de l'onglet du navigateur ?",
a:["<h1>","<header>","<title>","<main>"],
correct:2,
explanation:"La balise <title> définit le titre de l'onglet."
},

{
category:"html",
q:"Quel élément représente la racine du document HTML ?",
a:["<body>","<html>","<head>","<main>"],
correct:1,
explanation:"La balise <html> est l'élément racine du document."
},

{
category:"html",
q:"Quel élément indique que le document utilise HTML5 ?",
a:["<html5>","<meta html>","<!DOCTYPE html>","<version>"],
correct:2,
explanation:"<!DOCTYPE html> indique le type de document HTML5."
},

{
category:"html",
q:"Quelle balise permet de définir un paragraphe ?",
a:["<p>","<text>","<paragraph>","<span>"],
correct:0,
explanation:"La balise <p> représente un paragraphe."
},

{
category:"html",
q:"Quelle balise représente le deuxième niveau de titre ?",
a:["<h1>","<h2>","<h3>","<title>"],
correct:1,
explanation:"<h2> correspond au deuxième niveau de titre."
},

{
category:"html",
q:"Quelle balise permet de créer un saut de ligne ?",
a:["<hr>","<p>","<br>","<line>"],
correct:2,
explanation:"<br> permet un saut de ligne."
},

{
category:"html",
q:"Quelle balise crée une séparation horizontale ?",
a:["<br>","<hr>","<line>","<border>"],
correct:1,
explanation:"<hr> représente une séparation thématique."
},

{
category:"html",
q:"Comment écrire un commentaire HTML ?",
a:["// commentaire","/* commentaire */","<!-- commentaire -->","<comment>"],
correct:2,
explanation:"Un commentaire HTML utilise <!-- et -->."
},

{
category:"html",
q:"Quelle balise contient les métadonnées du document ?",
a:["<body>","<head>","<footer>","<main>"],
correct:1,
explanation:"Les métadonnées se trouvent généralement dans <head>."
},

{
category:"html",
q:"Quel attribut permet de définir la langue du document ?",
a:["lang","language","charset","dir"],
correct:0,
explanation:"L'attribut lang indique la langue, par exemple lang='fr'."
},

{
category:"html",
q:"Quel élément définit le contenu principal d'une page ?",
a:["<aside>","<main>","<nav>","<footer>"],
correct:1,
explanation:"<main> contient le contenu principal."
},

{
category:"html",
q:"Quelle balise représente la navigation ?",
a:["<nav>","<menuitem>","<link>","<navigate>"],
correct:0,
explanation:"<nav> contient les liens de navigation."
},

{
category:"html",
q:"Quelle balise représente le pied de page ?",
a:["<bottom>","<end>","<footer>","<foot>"],
correct:2,
explanation:"<footer> représente le pied de page."
},

{
category:"html",
q:"Quelle balise représente un contenu indépendant ?",
a:["<article>","<span>","<br>","<label>"],
correct:0,
explanation:"<article> représente un contenu indépendant."
},

{
category:"html",
q:"Quelle balise représente une section thématique ?",
a:["<div>","<section>","<aside>","<small>"],
correct:1,
explanation:"<section> représente une section thématique."
},

{
category:"html",
q:"Quelle balise est un conteneur générique de type bloc ?",
a:["<span>","<strong>","<div>","<em>"],
correct:2,
explanation:"<div> est un conteneur générique de type bloc."
},

{
category:"html",
q:"Quelle balise est un conteneur générique en ligne ?",
a:["<div>","<span>","<section>","<article>"],
correct:1,
explanation:"<span> est un conteneur générique en ligne."
},

{
category:"html",
q:"Quelle balise représente un contenu secondaire ?",
a:["<main>","<aside>","<nav>","<h1>"],
correct:1,
explanation:"<aside> représente un contenu secondaire."
},

/* HTML : TEXTES */

{
category:"html",
q:"Quelle balise indique une forte importance ?",
a:["<b>","<strong>","<i>","<small>"],
correct:1,
explanation:"<strong> indique une importance forte."
},

{
category:"html",
q:"Quelle balise permet de mettre du texte en emphase ?",
a:["<em>","<bold>","<mark>","<sub>"],
correct:0,
explanation:"<em> représente une emphase."
},

{
category:"html",
q:"Quelle balise permet de surligner un texte ?",
a:["<strong>","<mark>","<ins>","<small>"],
correct:1,
explanation:"<mark> représente un texte marqué ou surligné."
},

{
category:"html",
q:"Quelle balise représente un texte supprimé ?",
a:["<ins>","<del>","<remove>","<strike>"],
correct:1,
explanation:"<del> représente un texte supprimé."
},

{
category:"html",
q:"Quelle balise représente un texte ajouté ?",
a:["<add>","<new>","<ins>","<mark>"],
correct:2,
explanation:"<ins> représente un texte inséré."
},

{
category:"html",
q:"Quelle balise permet de représenter un indice ?",
a:["<sup>","<sub>","<small>","<low>"],
correct:1,
explanation:"<sub> représente un indice."
},

{
category:"html",
q:"Quelle balise représente un exposant ?",
a:["<sub>","<sup>","<up>","<top>"],
correct:1,
explanation:"<sup> représente un exposant."
},

{
category:"html",
q:"Quelle balise représente du code informatique en ligne ?",
a:["<code>","<script>","<program>","<pre>"],
correct:0,
explanation:"<code> représente du code informatique."
},

{
category:"html",
q:"Quelle balise conserve les espaces et les retours à la ligne ?",
a:["<p>","<pre>","<div>","<br>"],
correct:1,
explanation:"<pre> représente du texte préformaté."
},

{
category:"html",
q:"Quelle balise représente une citation longue ?",
a:["<q>","<blockquote>","<cite>","<quote>"],
correct:1,
explanation:"<blockquote> représente une citation longue."
},

/* HTML : LIENS ET IMAGES */

{
category:"html",
q:"Quel attribut définit la destination d'un lien ?",
a:["src","href","target","link"],
correct:1,
explanation:"href définit la destination du lien."
},

{
category:"html",
q:"Quelle balise crée un lien hypertexte ?",
a:["<link>","<a>","<href>","<url>"],
correct:1,
explanation:"La balise <a> crée un lien hypertexte."
},

{
category:"html",
q:"Quelle valeur de target ouvre généralement un lien dans un nouvel onglet ?",
a:["_self","_parent","_blank","_top"],
correct:2,
explanation:"target='_blank' ouvre généralement le lien dans un nouvel onglet."
},

{
category:"html",
q:"Quel attribut fournit le chemin d'une image ?",
a:["href","src","alt","path"],
correct:1,
explanation:"src définit la source de l'image."
},

{
category:"html",
q:"Quel attribut fournit une description alternative à une image ?",
a:["title","description","alt","text"],
correct:2,
explanation:"alt fournit une description alternative."
},

{
category:"html",
q:"Quelle balise permet d'afficher une image ?",
a:["<picture>","<img>","<image>","<src>"],
correct:1,
explanation:"<img> permet d'afficher une image."
},

{
category:"html",
q:"Quel attribut permet de définir la largeur d'une image ?",
a:["size","width","length","w"],
correct:1,
explanation:"width définit la largeur."
},

{
category:"html",
q:"Quelle balise représente une légende d'image ?",
a:["<caption>","<figcaption>","<legend>","<label>"],
correct:1,
explanation:"<figcaption> représente la légende d'une figure."
},

{
category:"html",
q:"Quelle balise peut regrouper une image et sa légende ?",
a:["<figure>","<section>","<picture>","<div>"],
correct:0,
explanation:"<figure> regroupe un contenu illustratif."
},

{
category:"html",
q:"Quel attribut permet de charger une image de manière différée ?",
a:["defer","loading='lazy'","async","delay"],
correct:1,
explanation:"loading='lazy' permet le chargement différé."
},

/* HTML : LISTES */

{
category:"html",
q:"Quelle balise crée une liste non ordonnée ?",
a:["<ol>","<ul>","<li>","<list>"],
correct:1,
explanation:"<ul> crée une liste non ordonnée."
},

{
category:"html",
q:"Quelle balise crée une liste ordonnée ?",
a:["<ul>","<ol>","<li>","<dl>"],
correct:1,
explanation:"<ol> crée une liste ordonnée."
},

{
category:"html",
q:"Quelle balise représente un élément de liste ?",
a:["<item>","<li>","<ul>","<list>"],
correct:1,
explanation:"<li> représente un élément de liste."
},

{
category:"html",
q:"Quelle balise représente un terme de définition ?",
a:["<dd>","<dt>","<dl>","<term>"],
correct:1,
explanation:"<dt> représente le terme."
},

{
category:"html",
q:"Quelle balise représente la définition d'un terme ?",
a:["<dt>","<dd>","<dl>","<def>"],
correct:1,
explanation:"<dd> représente la description ou définition."
},

{
category:"html",
q:"Quel attribut permet de commencer une liste ordonnée à 5 ?",
a:["value","start","begin","number"],
correct:1,
explanation:"start='5' définit le numéro de départ."
},

{
category:"html",
q:"Quelle valeur de type permet une liste ordonnée en lettres majuscules ?",
a:["A","a","I","1"],
correct:0,
explanation:"type='A' utilise les lettres majuscules."
},

{
category:"html",
q:"Quel attribut permet d'inverser l'ordre d'une liste ?",
a:["reverse","reversed","descending","order"],
correct:1,
explanation:"reversed permet une liste ordonnée décroissante."
},

{
category:"html",
q:"Quelle balise représente une liste de définitions ?",
a:["<ul>","<ol>","<dl>","<li>"],
correct:2,
explanation:"<dl> représente une liste de définitions."
},

{
category:"html",
q:"Quel élément contient un terme dans une liste de définitions ?",
a:["<dd>","<dt>","<li>","<term>"],
correct:1,
explanation:"<dt> représente le terme."
},

/* HTML : TABLEAUX */

{
category:"html",
q:"Quelle balise crée un tableau HTML ?",
a:["<table>","<tab>","<grid>","<tr>"],
correct:0,
explanation:"<table> crée un tableau HTML."
},

{
category:"html",
q:"Quelle balise représente une ligne de tableau ?",
a:["<td>","<th>","<tr>","<row>"],
correct:2,
explanation:"<tr> représente une ligne."
},

{
category:"html",
q:"Quelle balise représente une cellule de données ?",
a:["<th>","<td>","<tr>","<cell>"],
correct:1,
explanation:"<td> représente une cellule de données."
},

{
category:"html",
q:"Quelle balise représente une cellule d'en-tête ?",
a:["<td>","<th>","<thead>","<head>"],
correct:1,
explanation:"<th> représente une cellule d'en-tête."
},

{
category:"html",
q:"Quel attribut fusionne des cellules horizontalement ?",
a:["rowspan","colspan","merge","span"],
correct:1,
explanation:"colspan fusionne plusieurs colonnes."
},

{
category:"html",
q:"Quel attribut fusionne des cellules verticalement ?",
a:["colspan","rowspan","vertical","merge"],
correct:1,
explanation:"rowspan fusionne plusieurs lignes."
},

{
category:"html",
q:"Quelle balise contient l'en-tête d'un tableau ?",
a:["<thead>","<header>","<th>","<head>"],
correct:0,
explanation:"<thead> regroupe l'en-tête."
},

{
category:"html",
q:"Quelle balise contient le corps d'un tableau ?",
a:["<tbody>","<body>","<main>","<tr>"],
correct:0,
explanation:"<tbody> regroupe les lignes du corps."
},

{
category:"html",
q:"Quelle balise représente le pied d'un tableau ?",
a:["<footer>","<tfoot>","<bottom>","<tail>"],
correct:1,
explanation:"<tfoot> représente le pied du tableau."
},

{
category:"html",
q:"Quelle balise définit le titre d'un tableau ?",
a:["<title>","<caption>","<legend>","<label>"],
correct:1,
explanation:"<caption> définit le titre du tableau."
},

/* HTML : FORMULAIRES */

{
category:"html",
q:"Quelle balise crée un formulaire ?",
a:["<input>","<form>","<fieldset>","<label>"],
correct:1,
explanation:"<form> contient les champs du formulaire."
},

{
category:"html",
q:"Quelle balise crée un champ de saisie ?",
a:["<input>","<textarea>","<form>","<select>"],
correct:0,
explanation:"<input> crée un champ de saisie."
},

{
category:"html",
q:"Quel type d'input permet la saisie d'un email ?",
a:["text","email","mail","address"],
correct:1,
explanation:"type='email' permet la saisie d'une adresse email."
},

{
category:"html",
q:"Quel type d'input permet la saisie d'un mot de passe masqué ?",
a:["text","password","hidden","secure"],
correct:1,
explanation:"type='password' masque visuellement la saisie."
},

{
category:"html",
q:"Quel type d'input permet de sélectionner une date ?",
a:["calendar","date","time","datetime"],
correct:1,
explanation:"type='date' permet de sélectionner une date."
},

{
category:"html",
q:"Quel type d'input permet de sélectionner une seule option parmi plusieurs ?",
a:["checkbox","radio","select","option"],
correct:1,
explanation:"Les boutons radio permettent un choix unique dans un groupe."
},

{
category:"html",
q:"Quel type d'input permet plusieurs sélections indépendantes ?",
a:["radio","checkbox","text","submit"],
correct:1,
explanation:"checkbox permet plusieurs sélections indépendantes."
},

{
category:"html",
q:"Quelle balise crée une liste déroulante ?",
a:["<option>","<select>","<datalist>","<dropdown>"],
correct:1,
explanation:"<select> crée une liste déroulante."
},

{
category:"html",
q:"Quelle balise définit une option d'une liste déroulante ?",
a:["<select>","<option>","<item>","<choice>"],
correct:1,
explanation:"<option> représente une option."
},

{
category:"html",
q:"Quelle balise permet un texte multiligne ?",
a:["<input>","<textarea>","<text>","<multiline>"],
correct:1,
explanation:"<textarea> permet un texte multiligne."
},

{
category:"html",
q:"Quel attribut rend un champ obligatoire ?",
a:["mandatory","required","validate","necessary"],
correct:1,
explanation:"required rend le champ obligatoire."
},

{
category:"html",
q:"Quel attribut relie un label à un input ?",
a:["name","for","id","href"],
correct:1,
explanation:"for du label correspond à l'id du champ."
},

{
category:"html",
q:"Quel attribut désactive un champ ?",
a:["readonly","disabled","hidden","inactive"],
correct:1,
explanation:"disabled désactive le champ."
},

{
category:"html",
q:"Quel attribut définit une valeur initiale d'un input ?",
a:["placeholder","value","default","initial"],
correct:1,
explanation:"value définit la valeur initiale."
},

{
category:"html",
q:"Quelle balise regroupe des champs de formulaire ?",
a:["<group>","<fieldset>","<section>","<formgroup>"],
correct:1,
explanation:"<fieldset> regroupe les champs."
},

{
category:"html",
q:"Quelle balise représente le titre d'un fieldset ?",
a:["<label>","<legend>","<caption>","<title>"],
correct:1,
explanation:"<legend> définit le titre du groupe."
},

{
category:"html",
q:"Quel type de bouton envoie un formulaire ?",
a:["button","submit","reset","send"],
correct:1,
explanation:"type='submit' déclenche l'envoi du formulaire."
},

{
category:"html",
q:"Quel type de bouton réinitialise les champs ?",
a:["submit","reset","clear","erase"],
correct:1,
explanation:"type='reset' restaure les valeurs initiales."
},

{
category:"html",
q:"Quel attribut définit le nom envoyé avec la donnée ?",
a:["id","name","value","label"],
correct:1,
explanation:"name définit le nom du champ transmis."
},

{
category:"html",
q:"Quelle balise permet de proposer des suggestions à un input ?",
a:["<select>","<datalist>","<option>","<suggest>"],
correct:1,
explanation:"<datalist> fournit des suggestions."
},

/* HTML : MULTIMEDIA */

{
category:"html",
q:"Quelle balise permet d'intégrer une vidéo ?",
a:["<media>","<video>","<movie>","<iframe>"],
correct:1,
explanation:"<video> permet d'intégrer une vidéo."
},

{
category:"html",
q:"Quelle balise permet d'intégrer un fichier audio ?",
a:["<sound>","<audio>","<music>","<mp3>"],
correct:1,
explanation:"<audio> permet d'intégrer un fichier audio."
},

{
category:"html",
q:"Quel attribut affiche les contrôles audio ou vidéo ?",
a:["buttons","controls","player","display"],
correct:1,
explanation:"controls affiche les commandes du média."
},

{
category:"html",
q:"Quel attribut permet de répéter un média ?",
a:["repeat","loop","again","replay"],
correct:1,
explanation:"loop permet la répétition."
},

{
category:"html",
q:"Quelle balise fournit plusieurs sources de média ?",
a:["<source>","<src>","<media>","<file>"],
correct:0,
explanation:"<source> définit une source de média."
},

{
category:"html",
q:"Quelle balise permet d'intégrer une autre page web ?",
a:["<embed>","<iframe>","<frame>","<link>"],
correct:1,
explanation:"<iframe> permet d'intégrer un document externe."
},

{
category:"html",
q:"Quel attribut de vidéo définit une image d'aperçu ?",
a:["src","poster","preview","alt"],
correct:1,
explanation:"poster définit l'image affichée avant la lecture."
},

{
category:"html",
q:"Quelle balise permet de définir des sous-titres pour une vidéo ?",
a:["<caption>","<track>","<subtitle>","<text>"],
correct:1,
explanation:"<track> peut définir les sous-titres."
},

{
category:"html",
q:"Quel attribut permet de rendre un élément modifiable ?",
a:["editable","contenteditable","write","modify"],
correct:1,
explanation:"contenteditable='true' rend le contenu modifiable."
},

{
category:"html",
q:"Quel attribut définit un identifiant unique ?",
a:["class","id","name","key"],
correct:1,
explanation:"id identifie un élément de manière unique."
},

/* CSS : BASE */

{
category:"css",
q:"Quel langage permet de styliser une page HTML ?",
a:["HTML","CSS","SQL","PHP"],
correct:1,
explanation:"CSS permet de définir l'apparence d'une page web."
},

{
category:"css",
q:"Quelle propriété modifie la couleur du texte ?",
a:["background","color","font-color","text-color"],
correct:1,
explanation:"color définit la couleur du texte."
},

{
category:"css",
q:"Quelle propriété modifie la taille du texte ?",
a:["font-size","text-size","size","font-weight"],
correct:0,
explanation:"font-size définit la taille du texte."
},

{
category:"css",
q:"Quelle propriété met le texte en gras ?",
a:["font-style","font-weight","text-decoration","font-size"],
correct:1,
explanation:"font-weight définit l'épaisseur."
},

{
category:"css",
q:"Quelle propriété permet d'utiliser une police ?",
a:["font-family","font-style","font-size","text-font"],
correct:0,
explanation:"font-family définit la famille de polices."
},

{
category:"css",
q:"Quelle propriété centre le texte horizontalement ?",
a:["align","text-align","justify","center"],
correct:1,
explanation:"text-align:center centre le texte."
},

{
category:"css",
q:"Quelle propriété permet de souligner un texte ?",
a:["text-transform","text-decoration","font-style","underline"],
correct:1,
explanation:"text-decoration:underline souligne le texte."
},

{
category:"css",
q:"Quelle propriété transforme le texte en majuscules ?",
a:["font-weight","text-transform","text-decoration","text-align"],
correct:1,
explanation:"text-transform:uppercase transforme le texte."
},

{
category:"css",
q:"Quelle propriété modifie la couleur de fond ?",
a:["color","background-color","background-text","fill"],
correct:1,
explanation:"background-color définit la couleur de fond."
},

{
category:"css",
q:"Quelle propriété définit une image d'arrière-plan ?",
a:["background-image","image","src","background-src"],
correct:0,
explanation:"background-image définit une image de fond."
},

{
category:"css",
q:"Quelle propriété permet de centrer horizontalement un texte ?",
a:["margin","text-align","align-items","justify-content"],
correct:1,
explanation:"text-align:center centre le texte."
},

{
category:"css",
q:"Quelle propriété définit l'espace entre les lignes ?",
a:["letter-spacing","line-height","word-spacing","font-size"],
correct:1,
explanation:"line-height définit la hauteur des lignes."
},

{
category:"css",
q:"Quelle propriété définit l'espace entre les lettres ?",
a:["word-spacing","letter-spacing","line-height","font-weight"],
correct:1,
explanation:"letter-spacing définit l'espacement entre les lettres."
},

{
category:"css",
q:"Quelle propriété définit l'espacement entre les mots ?",
a:["word-spacing","letter-spacing","text-indent","line-height"],
correct:0,
explanation:"word-spacing définit l'espacement entre les mots."
},

{
category:"css",
q:"Quelle propriété permet de définir une ombre du texte ?",
a:["box-shadow","text-shadow","font-shadow","shadow"],
correct:1,
explanation:"text-shadow définit une ombre du texte."
},

{
category:"css",
q:"Quelle propriété permet de définir la transparence d'un élément ?",
a:["visibility","opacity","transparent","alpha"],
correct:1,
explanation:"opacity accepte une valeur entre 0 et 1."
},

{
category:"css",
q:"Quelle propriété permet de définir la largeur ?",
a:["height","width","size","length"],
correct:1,
explanation:"width définit la largeur."
},

{
category:"css",
q:"Quelle propriété permet de définir la hauteur ?",
a:["width","height","size","length"],
correct:1,
explanation:"height définit la hauteur."
},

{
category:"css",
q:"Quelle propriété crée un espace extérieur ?",
a:["padding","margin","border","spacing"],
correct:1,
explanation:"margin définit l'espace extérieur."
},

{
category:"css",
q:"Quelle propriété crée un espace intérieur ?",
a:["margin","padding","border","outline"],
correct:1,
explanation:"padding définit l'espace intérieur."
},

/* CSS : BOX MODEL */

{
category:"css",
q:"Quelle propriété définit une bordure ?",
a:["outline","border","line","edge"],
correct:1,
explanation:"border définit la bordure."
},

{
category:"css",
q:"Quelle propriété arrondit les coins ?",
a:["border-style","border-radius","corner","radius"],
correct:1,
explanation:"border-radius arrondit les coins."
},

{
category:"css",
q:"Quelle valeur de border-style crée une ligne continue ?",
a:["dotted","solid","dashed","double"],
correct:1,
explanation:"solid crée une ligne continue."
},

{
category:"css",
q:"Quelle valeur de border-style crée des points ?",
a:["solid","dashed","dotted","double"],
correct:2,
explanation:"dotted crée une bordure en points."
},

{
category:"css",
q:"Quelle propriété définit une ombre autour d'une boîte ?",
a:["text-shadow","box-shadow","border-shadow","shadow"],
correct:1,
explanation:"box-shadow définit l'ombre de la boîte."
},

{
category:"css",
q:"Quelle valeur de box-sizing inclut padding et border dans width ?",
a:["content-box","border-box","padding-box","margin-box"],
correct:1,
explanation:"border-box inclut padding et border dans la largeur."
},

{
category:"css",
q:"Quelle propriété définit la largeur maximale ?",
a:["width","min-width","max-width","limit-width"],
correct:2,
explanation:"max-width définit la largeur maximale."
},

{
category:"css",
q:"Quelle propriété définit la largeur minimale ?",
a:["max-width","min-width","width","minimum"],
correct:1,
explanation:"min-width définit la largeur minimale."
},

{
category:"css",
q:"Quelle propriété définit le comportement du contenu débordant ?",
a:["overflow","display","position","float"],
correct:0,
explanation:"overflow définit le comportement du débordement."
},

{
category:"css",
q:"Quelle valeur de overflow masque le contenu débordant ?",
a:["visible","hidden","scroll","auto"],
correct:1,
explanation:"hidden masque le contenu débordant."
},

/* CSS : SELECTEURS */

{
category:"selectors",
q:"Quel symbole permet de sélectionner une classe CSS ?",
a:["#",".","*","@"],
correct:1,
explanation:"Le point sélectionne une classe."
},

{
category:"selectors",
q:"Quel symbole permet de sélectionner un identifiant ?",
a:[".","#","*","&"],
correct:1,
explanation:"Le symbole # sélectionne un identifiant."
},

{
category:"selectors",
q:"Quel sélecteur sélectionne tous les éléments ?",
a:["body","*","all","html"],
correct:1,
explanation:"Le sélecteur universel * sélectionne tous les éléments."
},

{
category:"selectors",
q:"Quel sélecteur sélectionne tous les paragraphes ?",
a:[".p","p","#p","paragraph"],
correct:1,
explanation:"p sélectionne les éléments de type paragraphe."
},

{
category:"selectors",
q:"Quel sélecteur sélectionne les paragraphes descendants d'un div ?",
a:["div + p","div > p","div p","div ~ p"],
correct:2,
explanation:"div p sélectionne les paragraphes descendants."
},

{
category:"selectors",
q:"Quel sélecteur sélectionne les enfants directs d'un div ?",
a:["div p","div > p","div + p","div ~ p"],
correct:1,
explanation:"div > p sélectionne les enfants directs."
},

{
category:"selectors",
q:"Quel sélecteur sélectionne le paragraphe immédiatement après h1 ?",
a:["h1 ~ p","h1 + p","h1 > p","h1 p"],
correct:1,
explanation:"h1 + p sélectionne le frère adjacent."
},

{
category:"selectors",
q:"Quel sélecteur sélectionne les paragraphes frères suivants h1 ?",
a:["h1 + p","h1 ~ p","h1 > p","h1 p"],
correct:1,
explanation:"h1 ~ p sélectionne les frères suivants."
},

{
category:"selectors",
q:"Quel sélecteur sélectionne un élément au survol ?",
a:[":active",":hover",":focus",":visited"],
correct:1,
explanation:":hover correspond au survol."
},

{
category:"selectors",
q:"Quel sélecteur sélectionne un élément ayant le focus ?",
a:[":hover",":focus",":active",":checked"],
correct:1,
explanation:":focus correspond au focus."
},

{
category:"selectors",
q:"Quel sélecteur sélectionne le premier enfant ?",
a:[":last-child",":first-child",":nth-child(2)",":only-child"],
correct:1,
explanation:":first-child sélectionne le premier enfant."
},

{
category:"selectors",
q:"Quel sélecteur sélectionne le dernier enfant ?",
a:[":first-child",":last-child",":nth-child(1)",":empty"],
correct:1,
explanation:":last-child sélectionne le dernier enfant."
},

{
category:"selectors",
q:"Quel sélecteur sélectionne le deuxième enfant ?",
a:[":first-child",":last-child",":nth-child(2)",":nth-child(1)"],
correct:2,
explanation:":nth-child(2) sélectionne le deuxième enfant."
},

{
category:"selectors",
q:"Quel sélecteur permet d'exclure une classe ?",
a:[":has()",":not()",":is()",":where()"],
correct:1,
explanation:":not() permet d'exclure des éléments."
},

{
category:"selectors",
q:"Quel pseudo-élément ajoute du contenu avant un élément ?",
a:["::after","::before",":first-child",":hover"],
correct:1,
explanation:"::before permet d'ajouter du contenu avant."
},

{
category:"selectors",
q:"Quel pseudo-élément ajoute du contenu après un élément ?",
a:["::before","::after",":last-child",":active"],
correct:1,
explanation:"::after permet d'ajouter du contenu après."
},

{
category:"selectors",
q:"Quel sélecteur cible un input de type email ?",
a:["input.email","input[type='email']","email input","#email"],
correct:1,
explanation:"Le sélecteur d'attribut input[type='email'] cible ce champ."
},

{
category:"selectors",
q:"Quel sélecteur sélectionne les éléments possédant l'attribut required ?",
a:["[required]","required","#required",".required"],
correct:0,
explanation:"[required] sélectionne les éléments ayant cet attribut."
},

{
category:"selectors",
q:"Quel sélecteur sélectionne un lien qui commence par https ?",
a:["[href$='https']","[href^='https']","[href*='https']","[href='https']"],
correct:1,
explanation:"^= sélectionne une valeur qui commence par."
},

{
category:"selectors",
q:"Quel sélecteur sélectionne un lien qui termine par .pdf ?",
a:["[href^='.pdf']","[href$='.pdf']","[href*='.pdf']","[href='.pdf']"],
correct:1,
explanation:"$= sélectionne une valeur qui termine par."
},

/* CSS : FLEXBOX */

{
category:"layout",
q:"Quelle propriété active Flexbox ?",
a:["position:flex","display:flex","flex:display","layout:flex"],
correct:1,
explanation:"display:flex active Flexbox."
},

{
category:"layout",
q:"Quelle propriété définit l'axe principal de Flexbox ?",
a:["justify-content","flex-direction","align-items","flex-wrap"],
correct:1,
explanation:"flex-direction définit l'axe principal."
},

{
category:"layout",
q:"Quelle valeur de flex-direction organise les éléments en colonne ?",
a:["row","column","horizontal","wrap"],
correct:1,
explanation:"column organise les éléments verticalement."
},

{
category:"layout",
q:"Quelle propriété répartit les éléments sur l'axe principal ?",
a:["align-items","justify-content","align-content","flex-wrap"],
correct:1,
explanation:"justify-content répartit les éléments sur l'axe principal."
},

{
category:"layout",
q:"Quelle valeur espace les éléments aux extrémités ?",
a:["center","space-between","flex-start","stretch"],
correct:1,
explanation:"space-between répartit l'espace entre les éléments."
},

{
category:"layout",
q:"Quelle propriété aligne les éléments sur l'axe secondaire ?",
a:["justify-content","align-items","flex-direction","order"],
correct:1,
explanation:"align-items aligne les éléments sur l'axe secondaire."
},

{
category:"layout",
q:"Quelle valeur de align-items centre les éléments ?",
a:["stretch","center","baseline","flex-start"],
correct:1,
explanation:"center centre les éléments sur l'axe secondaire."
},

{
category:"layout",
q:"Quelle propriété permet le retour à la ligne dans Flexbox ?",
a:["flex-direction","flex-wrap","flex-flow","order"],
correct:1,
explanation:"flex-wrap:wrap autorise le retour à la ligne."
},

{
category:"layout",
q:"Quelle propriété définit l'espace entre les éléments ?",
a:["margin","gap","padding","space"],
correct:1,
explanation:"gap définit l'espace entre les éléments."
},

{
category:"layout",
q:"Quelle propriété permet de modifier l'ordre visuel d'un élément Flexbox ?",
a:["flex-grow","order","flex-direction","align-self"],
correct:1,
explanation:"order modifie l'ordre visuel."
},

/* CSS : GRID */

{
category:"layout",
q:"Quelle propriété active CSS Grid ?",
a:["display:grid","grid:display","position:grid","layout:grid"],
correct:0,
explanation:"display:grid active CSS Grid."
},

{
category:"layout",
q:"Quelle propriété définit les colonnes d'une grille ?",
a:["grid-template-rows","grid-template-columns","grid-columns","columns"],
correct:1,
explanation:"grid-template-columns définit les colonnes."
},

{
category:"layout",
q:"Quelle propriété définit les lignes d'une grille ?",
a:["grid-template-columns","grid-template-rows","grid-lines","rows"],
correct:1,
explanation:"grid-template-rows définit les lignes."
},

{
category:"layout",
q:"Quelle unité représente une fraction de l'espace disponible dans Grid ?",
a:["px","fr","em","vh"],
correct:1,
explanation:"fr représente une fraction de l'espace disponible."
},

{
category:"layout",
q:"Quelle fonction permet de répéter des colonnes ?",
a:["repeat()","loop()","count()","grid-repeat()"],
correct:0,
explanation:"repeat() permet de répéter une définition."
},

{
category:"layout",
q:"Quelle propriété définit l'espace entre les cellules Grid ?",
a:["padding","gap","margin","spacing"],
correct:1,
explanation:"gap définit l'espace entre les lignes et colonnes."
},

{
category:"layout",
q:"Quelle propriété permet de placer un élément sur plusieurs colonnes ?",
a:["grid-row","grid-column","grid-area","column-span"],
correct:1,
explanation:"grid-column définit les colonnes occupées."
},

{
category:"layout",
q:"Quelle propriété permet de placer un élément sur plusieurs lignes ?",
a:["grid-row","grid-column","grid-area","row-span"],
correct:0,
explanation:"grid-row définit les lignes occupées."
},

{
category:"layout",
q:"Quelle valeur crée trois colonnes de largeur égale ?",
a:["1fr 2fr 3fr","repeat(3, 1fr)","3px 3px 3px","auto auto"],
correct:1,
explanation:"repeat(3, 1fr) crée trois colonnes égales."
},

{
category:"layout",
q:"Quelle propriété aligne les éléments Grid sur l'axe horizontal de leur cellule ?",
a:["align-items","justify-items","grid-template","grid-auto-flow"],
correct:1,
explanation:"justify-items aligne les éléments horizontalement dans leur cellule."
},

/* CSS : POSITION */

{
category:"layout",
q:"Quelle valeur de position place un élément selon le flux normal ?",
a:["absolute","fixed","static","relative"],
correct:2,
explanation:"static est la position par défaut."
},

{
category:"layout",
q:"Quelle valeur permet de déplacer un élément par rapport à sa position initiale ?",
a:["static","relative","fixed","absolute"],
correct:1,
explanation:"relative conserve sa place dans le flux."
},

{
category:"layout",
q:"Quelle valeur positionne un élément par rapport à son ancêtre positionné ?",
a:["relative","absolute","static","sticky"],
correct:1,
explanation:"absolute utilise un ancêtre positionné comme référence."
},

{
category:"layout",
q:"Quelle valeur permet de fixer un élément par rapport à la fenêtre ?",
a:["absolute","relative","fixed","static"],
correct:2,
explanation:"fixed positionne l'élément par rapport à la fenêtre."
},

{
category:"layout",
q:"Quelle valeur permet un élément collant lors du défilement ?",
a:["static","sticky","absolute","inline"],
correct:1,
explanation:"sticky combine un comportement normal et collant."
},

{
category:"layout",
q:"Quelle propriété définit la priorité d'empilement ?",
a:["position","z-index","display","float"],
correct:1,
explanation:"z-index définit la priorité d'empilement."
},

{
category:"layout",
q:"Quelle propriété permet de faire flotter un élément à gauche ?",
a:["position","float","clear","display"],
correct:1,
explanation:"float:left place l'élément à gauche."
},

{
category:"layout",
q:"Quelle propriété annule les effets de float ?",
a:["float","clear","position","overflow"],
correct:1,
explanation:"clear permet de gérer les éléments flottants."
},

{
category:"layout",
q:"Quelle propriété permet de masquer un élément tout en conservant son espace ?",
a:["display:none","visibility:hidden","opacity:0","overflow:hidden"],
correct:1,
explanation:"visibility:hidden masque l'élément sans supprimer son espace."
},

{
category:"layout",
q:"Quelle valeur de display supprime l'élément de la mise en page ?",
a:["visibility:hidden","display:none","opacity:0","position:static"],
correct:1,
explanation:"display:none supprime l'élément du rendu de la mise en page."
},

/* CSS : RESPONSIVE ET DIVERS */

{
category:"css",
q:"Quelle règle CSS permet d'adapter le style aux petits écrans ?",
a:["@screen","@media","@responsive","@mobile"],
correct:1,
explanation:"@media permet de définir des media queries."
},

{
category:"css",
q:"Quelle unité représente 1% de la largeur de la fenêtre ?",
a:["vh","vw","em","rem"],
correct:1,
explanation:"1vw représente 1% de la largeur du viewport."
},

{
category:"css",
q:"Quelle unité représente 1% de la hauteur de la fenêtre ?",
a:["vw","vh","em","rem"],
correct:1,
explanation:"1vh représente 1% de la hauteur du viewport."
},

{
category:"css",
q:"Quelle unité dépend de la taille de police de l'élément ?",
a:["rem","em","vw","px"],
correct:1,
explanation:"em dépend de la taille de police de l'élément."
},

{
category:"css",
q:"Quelle unité dépend de la taille de police de l'élément racine ?",
a:["em","rem","px","vh"],
correct:1,
explanation:"rem dépend de la taille de police de l'élément racine."
},

{
category:"css",
q:"Quelle propriété permet d'ajouter une transition ?",
a:["animation","transition","transform","effect"],
correct:1,
explanation:"transition permet d'animer un changement de propriété."
},

{
category:"css",
q:"Quelle propriété permet de tourner un élément ?",
a:["transition","transform","position","rotate"],
correct:1,
explanation:"transform:rotate() permet de tourner un élément."
},

{
category:"css",
q:"Quelle propriété permet d'agrandir un élément ?",
a:["transform:scale()","transform:rotate()","transform:translate()","transform:skew()"],
correct:0,
explanation:"scale() permet de modifier l'échelle."
},

{
category:"css",
q:"Quelle propriété permet de déplacer un élément ?",
a:["transform:translate()","transform:scale()","transform:rotate()","transform:skew()"],
correct:0,
explanation:"translate() permet de déplacer un élément."
},

{
category:"css",
q:"Quelle propriété permet de définir une animation CSS ?",
a:["transition","animation","transform","motion"],
correct:1,
explanation:"animation permet de définir une animation."
},

{
category:"css",
q:"Quelle règle CSS définit les étapes d'une animation ?",
a:["@media","@keyframes","@animation","@steps"],
correct:1,
explanation:"@keyframes définit les étapes de l'animation."
},

{
category:"css",
q:"Quelle propriété permet de modifier le curseur ?",
a:["pointer","cursor","mouse","hover"],
correct:1,
explanation:"cursor définit le type de curseur."
},

{
category:"css",
q:"Quelle valeur de cursor affiche généralement une main ?",
a:["default","pointer","text","move"],
correct:1,
explanation:"pointer affiche généralement une main."
},

{
category:"css",
q:"Quelle propriété définit la manière dont une image remplit sa boîte ?",
a:["background-size","object-fit","image-fit","fit"],
correct:1,
explanation:"object-fit définit le comportement de l'image."
},

{
category:"css",
q:"Quelle valeur de object-fit conserve les proportions en remplissant la boîte ?",
a:["fill","cover","none","scale-down"],
correct:1,
explanation:"cover remplit la boîte en conservant les proportions."
},

{
category:"css",
q:"Quelle propriété permet de définir une grille de colonnes adaptatives ?",
a:["flex-direction","grid-template-columns","position","float"],
correct:1,
explanation:"grid-template-columns définit les colonnes de la grille."
},

{
category:"css",
q:"Quelle propriété permet de définir la taille des colonnes d'un tableau ?",
a:["table-layout","border-collapse","caption-side","empty-cells"],
correct:0,
explanation:"table-layout définit l'algorithme de disposition du tableau."
},

{
category:"css",
q:"Quelle valeur de border-collapse fusionne les bordures du tableau ?",
a:["separate","collapse","merge","hidden"],
correct:1,
explanation:"collapse fusionne les bordures adjacentes."
},

{
category:"css",
q:"Quelle propriété permet de définir les puces d'une liste ?",
a:["list-style-type","list-type","bullet-style","list-marker"],
correct:0,
explanation:"list-style-type définit le type de puce."
},

{
category:"css",
q:"Quelle valeur de list-style-type supprime les puces ?",
a:["disc","square","none","decimal"],
correct:2,
explanation:"none supprime les marqueurs de liste."
}

];

/* =====================================================
   AJOUT DES 100 QUESTIONS COMPLÉMENTAIRES
===================================================== */

const extraQuestions = [

["html","Quelle balise définit un titre de niveau 3 ?",["<h2>","<h3>","<h4>","<p>"],1,"<h3> représente le troisième niveau de titre."],
["html","Quelle balise permet de créer une abréviation ?",["<abbr>","<short>","<acronym>","<small>"],0,"<abbr> représente une abréviation."],
["html","Quelle balise représente une date ou une heure ?",["<date>","<time>","<datetime>","<clock>"],1,"<time> représente une date ou une heure."],
["html","Quelle balise affiche une barre de progression ?",["<meter>","<progress>","<range>","<bar>"],1,"<progress> représente une progression."],
["html","Quelle balise représente une mesure dans une plage connue ?",["<progress>","<meter>","<measure>","<range>"],1,"<meter> représente une mesure."],
["html","Quelle balise permet d'ouvrir une boîte de dialogue ?",["<dialog>","<modal>","<popup>","<window>"],0,"<dialog> représente une boîte de dialogue."],
["html","Quel attribut permet de définir un champ en lecture seule ?",["disabled","readonly","locked","static"],1,"readonly empêche la modification tout en laissant le champ actif."],
["html","Quel attribut limite le nombre maximal de caractères ?",["max","maxlength","maxchar","limit"],1,"maxlength limite le nombre de caractères."],
["html","Quel attribut définit une longueur minimale de texte ?",["min","minlength","minimum","required"],1,"minlength définit la longueur minimale."],
["html","Quel attribut définit la valeur minimale d'un nombre ?",["min","minimum","low","start"],0,"min définit la valeur minimale."],
["html","Quel attribut définit le pas d'incrément d'un nombre ?",["step","increment","value","count"],0,"step définit le pas d'incrément."],
["html","Quel attribut permet de sélectionner plusieurs fichiers ?",["multiple","many","multi","several"],0,"multiple autorise plusieurs sélections."],
["html","Quel type d'input permet de choisir une couleur ?",["color","palette","rgb","paint"],0,"type='color' permet de choisir une couleur."],
["html","Quel type d'input permet de sélectionner un fichier ?",["file","upload","document","attachment"],0,"type='file' permet de sélectionner un fichier."],
["html","Quel attribut fournit une indication dans un champ ?",["value","placeholder","title","label"],1,"placeholder fournit une indication."],
["html","Quel attribut définit la méthode d'envoi d'un formulaire ?",["method","type","action","name"],0,"method définit GET ou POST."],
["html","Quel attribut définit la destination du formulaire ?",["href","action","target","src"],1,"action définit la destination du formulaire."],
["html","Quelle valeur de method transmet les données dans l'URL ?",["POST","GET","PUT","SEND"],1,"GET transmet les données dans l'URL."],
["html","Quelle valeur de method transmet les données dans le corps de la requête ?",["GET","POST","URL","LINK"],1,"POST transmet les données dans le corps de la requête."],
["html","Quel attribut permet d'ouvrir une page dans le même onglet ?",["_blank","_self","_parent","_top"],1,"_self ouvre dans le contexte courant."],
["html","Quelle balise permet de définir une ressource CSS externe ?",["<style>","<link>","<css>","<script>"],1,"<link> permet de relier une feuille CSS."],
["html","Quelle balise contient du CSS interne ?",["<css>","<style>","<link>","<design>"],1,"<style> contient du CSS interne."],
["html","Quelle balise contient du JavaScript ?",["<script>","<javascript>","<code>","<js>"],0,"<script> contient ou référence du JavaScript."],
["html","Quel attribut de meta définit l'encodage ?",["charset","lang","encoding","type"],0,"charset définit l'encodage."],
["html","Quelle valeur de charset est recommandée pour Unicode ?",["ASCII","UTF-8","UTF-16","ISO"],1,"UTF-8 est un encodage Unicode largement utilisé."],
["html","Quelle balise permet de définir un contenu dépliable ?",["<details>","<summary>","<dialog>","<aside>"],0,"<details> permet un contenu dépliable."],
["html","Quelle balise représente le titre d'un contenu dépliable ?",["<details>","<summary>","<caption>","<legend>"],1,"<summary> représente le titre de details."],
["html","Quelle balise représente un élément de navigation ?",["<nav>","<menu>","<link>","<header>"],0,"<nav> représente une zone de navigation."],
["html","Quelle balise représente un contenu indépendant ?",["<article>","<section>","<div>","<span>"],0,"<article> représente un contenu indépendant."],
["html","Quel attribut permet de masquer un élément HTML ?",["hidden","invisible","display","hide"],0,"hidden masque l'élément."],

["css","Quelle propriété transforme les lettres en minuscules ?",["text-transform:lowercase","font-style:lowercase","text-decoration:lowercase","font-weight:lowercase"],0,"lowercase transforme les lettres en minuscules."],
["css","Quelle valeur de font-style met le texte en italique ?",["bold","italic","underline","normal"],1,"italic met le texte en italique."],
["css","Quelle valeur de text-align justifie le texte ?",["left","right","justify","center"],2,"justify répartit le texte entre les marges."],
["css","Quelle propriété permet de définir une indentation ?",["text-indent","margin-left","padding-left","line-height"],0,"text-indent définit l'indentation."],
["css","Quelle propriété permet de contrôler les espaces blancs ?",["white-space","text-space","word-wrap","spacing"],0,"white-space définit le comportement des espaces."],
["css","Quelle valeur de white-space empêche les retours automatiques ?",["normal","nowrap","pre-wrap","break"],1,"nowrap empêche le retour automatique."],
["css","Quelle propriété définit une image de fond qui ne se répète pas ?",["background-position","background-repeat","background-size","background-attachment"],1,"background-repeat contrôle la répétition."],
["css","Quelle valeur de background-size couvre toute la zone ?",["contain","cover","auto","repeat"],1,"cover couvre toute la zone."],
["css","Quelle valeur de background-size affiche l'image entière ?",["cover","contain","fill","stretch"],1,"contain affiche l'image entière."],
["css","Quelle propriété positionne une image d'arrière-plan ?",["background-position","background-repeat","background-size","background-color"],0,"background-position définit la position."],
["css","Quelle valeur de background-repeat supprime la répétition ?",["repeat","no-repeat","repeat-x","repeat-y"],1,"no-repeat empêche la répétition."],
["css","Quelle propriété définit une ombre intérieure ?",["box-shadow","text-shadow","outline","border-shadow"],0,"box-shadow accepte le mot-clé inset."],
["css","Quelle propriété définit une bordure uniquement en haut ?",["border-top","border-left","border-bottom","border-right"],0,"border-top définit la bordure supérieure."],
["css","Quelle propriété définit la couleur de bordure ?",["border-style","border-color","border-width","border-radius"],1,"border-color définit la couleur."],
["css","Quelle propriété permet de définir le type de bordure ?",["border-color","border-style","border-width","outline-color"],1,"border-style définit le type de bordure."],
["css","Quelle propriété permet de définir l'épaisseur de bordure ?",["border-width","border-style","border-color","border-radius"],0,"border-width définit l'épaisseur."],
["css","Quelle propriété permet de gérer l'espace entre les cellules d'un tableau ?",["border-spacing","padding","margin","gap"],0,"border-spacing définit l'espace entre cellules."],
["css","Quelle propriété définit la position de la légende du tableau ?",["caption-side","table-layout","border-collapse","empty-cells"],0,"caption-side positionne la légende."],
["css","Quelle valeur de display affiche un élément en ligne ?",["block","inline","grid","flex"],1,"inline affiche l'élément en ligne."],
["css","Quelle valeur de display permet largeur et hauteur sur un élément en ligne ?",["inline","inline-block","block","none"],1,"inline-block combine les caractéristiques."],

["selectors","Quel sélecteur cible les liens visités ?",[":hover",":visited",":active",":focus"],1,":visited cible les liens visités."],
["selectors","Quel sélecteur cible un lien activé ?",[":visited",":active",":hover",":focus"],1,":active correspond à l'activation."],
["selectors","Quel sélecteur cible une case cochée ?",[":checked",":selected",":active",":enabled"],0,":checked cible un élément coché."],
["selectors","Quel sélecteur cible un champ désactivé ?",[":enabled",":disabled",":checked",":focus"],1,":disabled cible un élément désactivé."],
["selectors","Quel sélecteur cible un élément vide ?",[":empty",":blank",":none",":null"],0,":empty cible un élément sans enfant."],
["selectors","Quel sélecteur cible les éléments actifs ?",[":active",":hover",":visited",":focus"],0,":active correspond à l'activation."],
["selectors","Quel sélecteur cible le premier paragraphe d'un parent ?",["p:first-child","p:last-child","p:nth-child(2)","p:empty"],0,"p:first-child cible le premier enfant si c'est un paragraphe."],
["selectors","Quel sélecteur cible le troisième enfant ?",[":nth-child(1)",":nth-child(2)",":nth-child(3)",":last-child"],2,":nth-child(3) cible le troisième enfant."],
["selectors","Quel sélecteur cible les éléments possédant une classe active ?",["#active",".active","active","*active"],1,".active cible la classe active."],
["selectors","Quel sélecteur cible l'élément ayant l'id menu ?",[".menu","#menu","menu","*menu"],1,"#menu cible l'identifiant menu."],
["selectors","Quel sélecteur regroupe h1 et h2 ?",["h1 h2","h1, h2","h1 > h2","h1 + h2"],1,"La virgule regroupe plusieurs sélecteurs."],
["selectors","Quel sélecteur cible les inputs de type checkbox ?",["input.checkbox","input[type='checkbox']","#checkbox","checkbox"],1,"Le sélecteur d'attribut cible le type checkbox."],
["selectors","Quel pseudo-élément cible la première lettre ?",["::first-line","::first-letter","::before","::after"],1,"::first-letter cible la première lettre."],
["selectors","Quel pseudo-élément cible la première ligne ?",["::first-line","::first-letter","::selection","::after"],0,"::first-line cible la première ligne."],
["selectors","Quel pseudo-élément cible le texte sélectionné ?",["::selection","::select","::checked","::focus"],0,"::selection cible le texte sélectionné."],
["selectors","Quel sélecteur cible un élément qui possède la classe box ?",["[box]",".box","#box","box"],1,".box cible la classe box."],
["selectors","Quel sélecteur cible un élément qui possède l'attribut title ?",["title","[title]",".title","#title"],1,"[title] sélectionne les éléments avec cet attribut."],
["selectors","Quel sélecteur sélectionne un élément dont class contient card ?",["[class*='card']","[class^='card']","[class$='card']",".card"],0,"*= recherche une valeur qui contient le texte."],
["selectors","Quel sélecteur cible les éléments qui ne sont pas disabled ?",[":disabled",":enabled",":checked",":focus"],1,":enabled cible les éléments activés."],
["selectors","Quel pseudo-élément permet d'ajouter une décoration avant le texte ?",["::before","::after",":hover",":active"],0,"::before permet d'ajouter du contenu avant."],

["layout","Quelle valeur de flex-direction inverse l'ordre horizontal ?",["row","row-reverse","column","column-reverse"],1,"row-reverse inverse l'ordre horizontal."],
["layout","Quelle valeur de flex-direction inverse l'ordre vertical ?",["row-reverse","column","column-reverse","row"],2,"column-reverse inverse l'ordre vertical."],
["layout","Quelle valeur de justify-content centre les éléments ?",["center","stretch","baseline","wrap"],0,"center centre les éléments sur l'axe principal."],
["layout","Quelle valeur de justify-content espace les éléments autour ?",["space-between","space-around","flex-start","center"],1,"space-around distribue l'espace autour."],
["layout","Quelle valeur répartit uniformément l'espace entre éléments et bords ?",["space-between","space-around","space-evenly","center"],2,"space-evenly distribue uniformément l'espace."],
["layout","Quelle propriété permet à un élément Flexbox de grandir ?",["flex-grow","flex-shrink","flex-basis","order"],0,"flex-grow définit le facteur de croissance."],
["layout","Quelle propriété permet à un élément Flexbox de rétrécir ?",["flex-grow","flex-shrink","flex-basis","align-self"],1,"flex-shrink définit le facteur de rétrécissement."],
["layout","Quelle propriété définit la base de taille d'un élément Flexbox ?",["flex-grow","flex-shrink","flex-basis","order"],2,"flex-basis définit la taille de base."],
["layout","Quelle propriété permet à un élément Flexbox de s'aligner indépendamment ?",["align-items","align-self","justify-content","flex-wrap"],1,"align-self définit l'alignement individuel."],
["layout","Quelle propriété permet de gérer les lignes de Grid ?",["grid-template-columns","grid-template-rows","grid-column","grid-area"],1,"grid-template-rows définit les lignes."],
["layout","Quelle valeur de grid-auto-flow organise les éléments en colonnes ?",["row","column","dense","reverse"],1,"column organise les éléments par colonnes."],
["layout","Quelle propriété définit les zones d'une grille ?",["grid-template-areas","grid-template-columns","grid-auto-flow","grid-gap"],0,"grid-template-areas définit les zones nommées."],
["layout","Quelle propriété définit l'alignement vertical global des pistes Grid ?",["justify-content","align-content","justify-items","grid-template"],1,"align-content aligne les pistes sur l'axe secondaire."],
["layout","Quelle propriété définit l'alignement horizontal global des pistes Grid ?",["align-content","justify-content","align-items","grid-area"],1,"justify-content aligne les pistes sur l'axe horizontal."],
["layout","Quelle propriété définit la position de départ d'un élément Grid ?",["grid-column-start","grid-template-columns","grid-auto-flow","grid-gap"],0,"grid-column-start définit la colonne de départ."],
["layout","Quelle valeur de position reste dans le flux normal avec décalage ?",["absolute","relative","fixed","sticky"],1,"relative reste dans le flux normal."],
["layout","Quelle valeur de position est retirée du flux normal ?",["static","relative","absolute","inherit"],2,"absolute est retirée du flux normal."],
["layout","Quelle propriété définit le décalage depuis le haut ?",["left","top","right","bottom"],1,"top définit le décalage depuis le haut."],
["layout","Quelle propriété définit le décalage depuis la gauche ?",["left","top","right","bottom"],0,"left définit le décalage depuis la gauche."],
["layout","Quelle propriété définit la priorité d'empilement ?",["order","z-index","position","display"],1,"z-index définit la priorité d'empilement."],

["css","Quelle fonction CSS crée un dégradé linéaire ?",["linear-gradient()","radial-gradient()","gradient()","color-gradient()"],0,"linear-gradient() crée un dégradé linéaire."],
["css","Quelle fonction CSS crée un dégradé radial ?",["linear-gradient()","radial-gradient()","gradient()","circle-gradient()"],1,"radial-gradient() crée un dégradé radial."],
["css","Quelle propriété définit la taille d'une image de fond ?",["background-position","background-size","background-repeat","background-color"],1,"background-size définit la taille du fond."],
["css","Quelle valeur de background-attachment fixe le fond ?",["scroll","fixed","local","static"],1,"fixed fixe l'arrière-plan par rapport au viewport."],
["css","Quelle propriété définit l'espace intérieur d'une boîte ?",["margin","padding","border","outline"],1,"padding définit l'espace intérieur."],
["css","Quelle propriété définit l'espace extérieur d'une boîte ?",["padding","margin","border","outline"],1,"margin définit l'espace extérieur."],
["css","Quelle propriété définit la forme du curseur ?",["cursor","pointer","mouse","hover"],0,"cursor définit le curseur."],
["css","Quelle propriété définit l'affichage d'un élément ?",["position","display","float","overflow"],1,"display définit le mode d'affichage."],
["css","Quelle valeur de display crée une boîte flexible ?",["block","flex","inline","table"],1,"flex crée une boîte flexible."],
["css","Quelle valeur de display crée une grille ?",["grid","flex","block","inline"],0,"grid crée une grille."],
["css","Quelle propriété permet de définir une animation de 2 secondes ?",["animation-duration","animation-delay","animation-name","animation-count"],0,"animation-duration définit la durée."],
["css","Quelle propriété définit le nombre de répétitions d'une animation ?",["animation-duration","animation-iteration-count","animation-delay","animation-name"],1,"animation-iteration-count définit le nombre de répétitions."],
["css","Quelle propriété définit la vitesse d'une transition ?",["transition-duration","transition-property","transition-delay","transition"],0,"transition-duration définit la durée."],
["css","Quelle valeur de transition-timing-function accélère puis ralentit ?",["linear","ease","step-start","none"],1,"ease accélère puis ralentit."],
["css","Quelle propriété permet de modifier l'échelle d'un élément ?",["rotate","scale","transform","translate"],2,"transform permet d'appliquer scale()."],
["css","Quelle propriété permet de faire pivoter un élément ?",["transform","transition","position","animation"],0,"transform permet d'appliquer rotate()."],
["css","Quelle propriété permet de définir la transparence ?",["color","opacity","visibility","display"],1,"opacity définit la transparence."],
["css","Quelle valeur d'overflow permet le défilement ?",["hidden","scroll","visible","clip"],1,"scroll ajoute un mécanisme de défilement."],
["css","Quelle propriété définit le comportement de l'image dans sa boîte ?",["object-fit","background-fit","image-size","fit"],0,"object-fit définit l'ajustement de l'image."],
["css","Quelle valeur de object-fit conserve toute l'image ?",["cover","contain","fill","none"],1,"contain conserve l'image entière."]

];

/* Ajouter les 100 questions complémentaires */

extraQuestions.forEach(item => {

    questionBank.push({
        category:item[0],
        q:item[1],
        a:item[2],
        correct:item[3],
        explanation:item[4]
    });

});

/* =====================================================
   QUIZ : VARIABLES
===================================================== */

let quizQuestions = [];
let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;
let checked = false;
let wrongList = [];

/* =====================================================
   QUIZ : MÉLANGE ALÉATOIRE
===================================================== */

function shuffle(array) {

    const result = [...array];

    for (let i = result.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [result[i], result[j]] = [result[j], result[i]];

    }

    return result;
}

/* =====================================================
   QUIZ : DÉMARRER
===================================================== */

document.getElementById("startQuiz").addEventListener("click", () => {

    const count = Number(
        document.getElementById("questionCount").value
    );

    const category = document.getElementById("quizCategory").value;

    let availableQuestions = questionBank;

    if (category !== "all") {

        availableQuestions = questionBank.filter(question => {

            return question.category === category;

        });

    }

    if (availableQuestions.length < count) {

        alert("Pas assez de questions dans cette catégorie.");

        return;

    }

    quizQuestions = shuffle(availableQuestions).slice(0, count);

    currentQuestion = 0;
    score = 0;
    wrongList = [];

    document.getElementById("quizConfig").style.display = "none";

    document.getElementById("quizWindow").classList.add("active");

    document.getElementById("quizResult").classList.remove("active");

    showQuestion();

});

/* =====================================================
   QUIZ : AFFICHER UNE QUESTION
===================================================== */

function showQuestion() {

    selectedAnswer = null;
    checked = false;

    const question = quizQuestions[currentQuestion];

    const total = quizQuestions.length;

    document.getElementById("quizCounter").textContent =
        `Question ${currentQuestion + 1} / ${total}`;

    document.getElementById("questionNumber").textContent =
        `QUESTION ${String(currentQuestion + 1).padStart(2,"0")}`;

    document.getElementById("questionTitle").textContent =
        question.q;

    document.getElementById("quizProgressBar").style.width =
        `${((currentQuestion + 1) / total) * 100}%`;

    const answersContainer = document.getElementById("answers");

    answersContainer.innerHTML = "";

    const shuffledAnswers = shuffle(
        question.a.map((answer,index) => ({
            text:answer,
            originalIndex:index
        }))
    );

    shuffledAnswers.forEach(answer => {

        const label = document.createElement("label");

        label.className = "answer-option";

        label.innerHTML = `
            <input type="radio" name="answer"
            value="${answer.originalIndex}">

            <span></span>
        `;

        label.querySelector("span").textContent = answer.text;

        label.addEventListener("click", () => {

            if (checked) return;

            selectedAnswer = answer.originalIndex;

            document.querySelectorAll(".answer-option")
                .forEach(option => option.classList.remove("selected"));

            label.classList.add("selected");

        });

        answersContainer.appendChild(label);

    });

    document.getElementById("feedback").className = "feedback";

    document.getElementById("feedback").textContent = "";

    document.getElementById("verifyAnswer").style.display = "inline-block";

    document.getElementById("nextQuestion").style.display = "none";

}

/* =====================================================
   QUIZ : VÉRIFIER LA RÉPONSE
===================================================== */

document.getElementById("verifyAnswer").addEventListener("click", () => {

    if (checked) return;

    if (selectedAnswer === null) {

        alert("Choisissez une réponse avant de vérifier.");

        return;

    }

    checked = true;

    const question = quizQuestions[currentQuestion];

    const correct = selectedAnswer === question.correct;

    const feedback = document.getElementById("feedback");

    feedback.classList.add("active");

    document.querySelectorAll(".answer-option").forEach(option => {

        const input = option.querySelector("input");

        const answerIndex = Number(input.value);

        if (answerIndex === question.correct) {

            option.classList.add("correct");

        }

        if (answerIndex === selectedAnswer && !correct) {

            option.classList.add("incorrect");

        }

    });

    if (correct) {

        score++;

        feedback.classList.add("correct");

        feedback.innerHTML = "<strong>✓ Bonne réponse !</strong>";

    } else {

        feedback.classList.add("incorrect");

        feedback.innerHTML = `
            <strong>✗ Mauvaise réponse.</strong>
            <br>
            <strong>Réponse correcte :</strong>
            <span id="correctAnswerText"></span>
            <br><br>
            <strong>Explication :</strong>
            <span id="explanationText"></span>
        `;

        document.getElementById("correctAnswerText").textContent =
            question.a[question.correct];

        document.getElementById("explanationText").textContent =
            question.explanation;

        wrongList.push({
            question:question.q,
            userAnswer:question.a[selectedAnswer],
            correctAnswer:question.a[question.correct],
            explanation:question.explanation
        });

    }

    document.getElementById("verifyAnswer").style.display = "none";

    document.getElementById("nextQuestion").style.display = "inline-block";

    document.getElementById("nextQuestion").textContent =
        currentQuestion === quizQuestions.length - 1
            ? "Voir le résultat →"
            : "Next →";

});

/* =====================================================
   QUIZ : QUESTION SUIVANTE
===================================================== */

document.getElementById("nextQuestion").addEventListener("click", () => {

    currentQuestion++;

    if (currentQuestion < quizQuestions.length) {

        showQuestion();

    } else {

        showResult();

    }

});

/* =====================================================
   QUIZ : RÉSULTAT FINAL
===================================================== */

function showResult() {

    document.getElementById("quizWindow").classList.remove("active");

    document.getElementById("quizResult").classList.add("active");

    const percentage = Math.round(
        (score / quizQuestions.length) * 100
    );

    document.getElementById("scoreValue").textContent =
        percentage + "%";

    document.getElementById("scoreMessage").textContent =
        `Vous avez obtenu ${score} bonnes réponses sur ${quizQuestions.length}.`;

    const wrongContainer = document.getElementById("wrongAnswers");

    wrongContainer.innerHTML = "";

    if (wrongList.length === 0) {

        wrongContainer.innerHTML = `
            <div class="note">
                Félicitations ! Toutes les réponses sont correctes.
            </div>
        `;

    } else {

        wrongList.forEach((item,index) => {

            const div = document.createElement("div");

            div.className = "wrong-answer";

            const title = document.createElement("h4");

            title.textContent = `${index + 1}. ${item.question}`;

            const userAnswer = document.createElement("p");

            userAnswer.textContent =
                "Votre réponse : " + item.userAnswer;

            const correctAnswer = document.createElement("p");

            correctAnswer.style.color = "var(--green)";

            correctAnswer.textContent =
                "Réponse correcte : " + item.correctAnswer;

            const explanation = document.createElement("p");

            explanation.textContent =
                "Explication : " + item.explanation;

            div.append(
                title,
                userAnswer,
                correctAnswer,
                explanation
            );

            wrongContainer.appendChild(div);

        });

    }

}

/* =====================================================
   QUIZ : QUITTER
===================================================== */

document.getElementById("quitQuiz").addEventListener("click", () => {

    const confirmation = confirm(
        "Voulez-vous quitter le quiz ? Votre progression sera perdue."
    );

    if (!confirmation) return;

    document.getElementById("quizWindow").classList.remove("active");

    document.getElementById("quizConfig").style.display = "block";

});

/* =====================================================
   QUIZ : RECOMMENCER
===================================================== */

document.getElementById("restartQuiz").addEventListener("click", () => {

    document.getElementById("quizResult").classList.remove("active");

    document.getElementById("quizConfig").style.display = "block";

});

 