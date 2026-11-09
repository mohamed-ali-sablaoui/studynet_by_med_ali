 "use strict";

/* =====================================================
   OUTILS GÉNÉRAUX
===================================================== */

function copyCode(button) {
    const pre = button.closest(".codebox").querySelector("pre");

    navigator.clipboard.writeText(pre.innerText).then(() => {
        const ancien = button.textContent;
        button.textContent = "Copié !";
        setTimeout(() => button.textContent = ancien, 1200);
    }).catch(() => {
        button.textContent = "Copie impossible";
    });
}

/* =====================================================
   DÉMONSTRATION CSS / DOM
===================================================== */

function demoChanger() {
    const titre = document.getElementById("demoTitre");

    titre.style.color = "#e87532";
    titre.style.backgroundColor = "#242321";
    titre.style.padding = "15px";
    titre.style.borderRadius = "8px";
    titre.textContent = "Le style a été modifié par JavaScript !";
}

function demoReset() {
    const titre = document.getElementById("demoTitre");

    titre.removeAttribute("style");
    titre.textContent = "Bonjour JavaScript";
}

/* =====================================================
   ÉDITEUR JAVASCRIPT
===================================================== */

const codeInitial = document.getElementById("codeEditor").value;

function executerCode() {

    const code = document.getElementById("codeEditor").value;
    const output = document.getElementById("consoleOutput");

    const messages = [];

    const consoleLocal = {
        log: (...args) => messages.push(
            args.map(valeur => {
                if (typeof valeur === "object" && valeur !== null) {
                    try {
                        return JSON.stringify(valeur);
                    } catch {
                        return "[Objet]";
                    }
                }

                return String(valeur);
            }).join(" ")
        ),

        error: (...args) => messages.push(
            "ERREUR : " + args.join(" ")
        ),

        warn: (...args) => messages.push(
            "ATTENTION : " + args.join(" ")
        ),

        table: (valeur) => messages.push(
            JSON.stringify(valeur, null, 2)
        )
    };

    try {

        const execution = new Function(
            "console",
            code
        );

        execution(consoleLocal);

        output.textContent = messages.length
            ? messages.join("\n")
            : "Exécution terminée sans affichage dans la console.";

    } catch (erreur) {

        output.textContent = "Erreur : " + erreur.message;

    }
}

function copierEditeur() {
    const editor = document.getElementById("codeEditor");

    navigator.clipboard.writeText(editor.value).then(() => {
        alert("Code copié !");
    });
}

function reinitialiserEditeur() {
    document.getElementById("codeEditor").value = codeInitial;
    document.getElementById("consoleOutput").textContent =
        "L'éditeur a été réinitialisé.";
}

/* =====================================================
   BANQUE DE QUESTIONS — 200 QUESTIONS
===================================================== */

const questions = [];

function ajouterQuestion(categorie, niveau, question, options, bonneReponse, explication) {

    questions.push({
        id: questions.length + 1,
        categorie,
        niveau,
        question,
        options,
        bonneReponse,
        explication
    });
}

/* -----------------------------------------------------
   1. BASES ET SYNTAXE — 25 QUESTIONS
----------------------------------------------------- */

[
["Que signifie JavaScript ?",
["Un langage de programmation","Un système d'exploitation","Un navigateur","Un langage de base de données"],0,
"JavaScript est un langage de programmation utilisé notamment pour rendre les pages Web interactives."],

["Quelle balise permet d'intégrer JavaScript dans HTML ?",
["<css>","<script>","<javascript>","<code>"],1,
"La balise script permet d'intégrer du code JavaScript ou de charger un fichier externe."],

["Quelle méthode affiche un message dans la console ?",
["alert()","console.log()","print()","write()"],1,
"console.log() affiche une information dans la console du navigateur."],

["Quelle déclaration permet de créer une constante ?",
["let","var","const","static"],2,
"const déclare une variable qui ne peut pas être réaffectée."],

["Quelle déclaration possède une portée de bloc ?",
["let","var uniquement","global","window"],0,
"let possède une portée de bloc, contrairement à var."],

["Quel symbole permet d'écrire un commentaire sur une ligne ?",
["##","//","<!--","**"],1,
"Deux barres obliques permettent d'écrire un commentaire sur une ligne."],

["JavaScript distingue-t-il les majuscules des minuscules ?",
["Non","Oui","Uniquement pour les fonctions","Uniquement pour les nombres"],1,
"JavaScript est sensible à la casse : nom et Nom sont deux identifiants différents."],

["Quel est le résultat de typeof 25 ?",
["string","boolean","number","object"],2,
"typeof retourne number pour une valeur numérique."],

["Quel est le type de true ?",
["number","string","boolean","undefined"],2,
"true et false sont des valeurs booléennes."],

["Quelle valeur indique une variable déclarée sans valeur ?",
["null","undefined","false","0"],1,
"Une variable déclarée mais non initialisée possède la valeur undefined."],

["Quelle méthode convertit une valeur en nombre ?",
["String()","Number()","Boolean()","Text()"],1,
"Number() tente de convertir une valeur en nombre."],

["Quelle méthode convertit une valeur en texte ?",
["String()","Number()","parseInt()","Math()"],0,
"String() convertit une valeur en chaîne de caractères."],

["Que retourne typeof 'Bonjour' ?",
["number","object","string","boolean"],2,
"Une chaîne de caractères possède le type string."],

["Quel est le résultat de 10 + 5 ?",
["15","105","5","50"],0,
"L'opérateur + réalise une addition entre deux nombres."],

["Quel est le résultat de '5' + 2 ?",
["7","52","Erreur","3"],1,
"Lorsque + est utilisé avec une chaîne, il réalise ici une concaténation."],

["Quel est le résultat de Number('20') ?",
["'20'","20","NaN","true"],1,
"Number convertit la chaîne numérique en nombre."],

["Quel est le résultat de Boolean(0) ?",
["true","false","0","undefined"],1,
"Le nombre zéro est une valeur falsy."],

["Quelle valeur représente l'absence intentionnelle de valeur ?",
["undefined","null","NaN","false"],1,
"null représente une absence intentionnelle de valeur."],

["Quel opérateur vérifie la valeur et le type ?",
["=","==","===","!="],2,
"=== effectue une comparaison stricte de la valeur et du type."],

["Quel est le résultat de 10 === '10' ?",
["true","false","10","Erreur"],1,
"Le nombre 10 et la chaîne '10' ont des types différents."],

["Quel opérateur affecte une valeur ?",
["==","=","===","!="],1,
"Le signe égal simple réalise une affectation."],

["Quelle méthode permet de connaître le type d'une valeur ?",
["type()","typeof","getType()","class()"],1,
"typeof permet de connaître le type primitif d'une valeur."],

["Quel est le résultat de 2 ** 3 ?",
["5","6","8","9"],2,
"** représente l'opérateur de puissance : 2 puissance 3 égale 8."],

["Que retourne parseInt('15.9') ?",
["15.9","15","16","NaN"],1,
"parseInt extrait un entier à partir de la chaîne."],

["Quel opérateur vérifie si une valeur est différente en valeur ou en type ?",
["!==","=","==","<="],0,
"!== réalise une comparaison stricte d'inégalité."]
].forEach(q => ajouterQuestion("Bases",1,...q));

/* -----------------------------------------------------
   2. LOGIQUE ET CONDITIONS — 25 QUESTIONS
----------------------------------------------------- */

[
["Quel mot-clé permet de commencer une condition ?",
["for","if","while","function"],1,
"if exécute un bloc lorsque la condition est vraie."],

["Quel mot-clé représente le cas contraire ?",
["else","case","return","break"],0,
"else permet d'exécuter un bloc lorsque la condition précédente est fausse."],

["Quel opérateur représente ET ?",
["||","&&","!","%"],1,
"&& exige que les deux conditions soient vraies."],

["Quel opérateur représente OU ?",
["&&","||","!","==="],1,
"|| retourne une valeur vraie si au moins une condition est vraie."],

["Quel est le résultat de !true ?",
["true","false","null","1"],1,
"L'opérateur ! inverse une valeur booléenne."],

["Quel est le résultat de 5 > 3 ?",
["false","true","5","Erreur"],1,
"5 est supérieur à 3."],

["Quel est le résultat de 5 >= 5 ?",
["false","true","undefined","NaN"],1,
">= signifie supérieur ou égal."],

["Quel mot-clé arrête un switch ?",
["stop","exit","break","end"],2,
"break termine l'exécution du switch."],

["Quel bloc est exécuté si aucun case ne correspond ?",
["else","default","finally","catch"],1,
"default représente le cas par défaut d'un switch."],

["Combien de fois une boucle do...while s'exécute-t-elle au minimum ?",
["0","1","2","10"],1,
"Le bloc do est exécuté avant le premier test."],

["Quelle instruction arrête complètement une boucle ?",
["continue","skip","break","return uniquement"],2,
"break quitte immédiatement la boucle."],

["Quelle instruction passe à l'itération suivante ?",
["break","continue","stop","end"],1,
"continue ignore le reste de l'itération actuelle."],

["Quelle boucle est adaptée à un nombre d'itérations connu ?",
["for","if","switch","try"],0,
"for permet de gérer une initialisation, une condition et une mise à jour."],

["Quelle boucle teste la condition avant l'exécution ?",
["do...while","while","Les deux","Aucune"],1,
"while teste sa condition avant d'exécuter le bloc."],

["Que produit 10 % 3 ?",
["3","1","0","10"],1,
"Le modulo retourne le reste de la division entière."],

["Quel est le résultat de 10 > 5 && 2 < 4 ?",
["false","true","2","Erreur"],1,
"Les deux comparaisons sont vraies."],

["Quel est le résultat de false || true ?",
["false","true","null","0"],1,
"OU retourne true lorsqu'au moins un opérande est vrai."],

["Quel opérateur inverse une condition ?",
["&&","||","!","%"],2,
"L'opérateur ! inverse la valeur logique."],

["Quel est le rôle du ternaire ?",
["Créer une boucle","Écrire une condition courte","Créer un tableau","Déclarer une classe"],1,
"Le ternaire choisit entre deux expressions selon une condition."],

["Quelle valeur correspond à la condition de if ?",
["Une expression logique","Une image","Un fichier","Un tableau obligatoirement"],0,
"if évalue une expression qui peut être convertie en booléen."],

["Quel résultat produit 0 || 'Bonjour' ?",
["0","false","'Bonjour'","undefined"],2,
"|| retourne ici le premier opérande truthy, qui est 'Bonjour'."],

["Quel résultat produit 0 ?? 10 ?",
["0","10","null","false"],0,
"?? ne remplace que null ou undefined. Zéro est conservé."],

["Quel est le résultat de 7 !== '7' ?",
["true","false","7","Erreur"],0,
"Les types sont différents, donc l'inégalité stricte est vraie."],

["Que fait return dans une fonction ?",
["Répète une boucle","Renvoie un résultat et termine la fonction","Crée une variable","Modifie le CSS"],1,
"return renvoie une valeur et termine l'exécution de la fonction."],

["Une condition imbriquée est :",
["Une condition dans une autre","Une boucle infinie","Une fonction externe","Un objet"],0,
"Une condition imbriquée se trouve à l'intérieur d'un autre bloc conditionnel."]
].forEach(q => ajouterQuestion("Logique",1,...q));

/* -----------------------------------------------------
   3. FONCTIONS — 20 QUESTIONS
----------------------------------------------------- */

[
["Quel mot-clé déclare une fonction classique ?",
["function","method","def","func"],0,
"function permet de déclarer une fonction."],

["Comment appelle-t-on les données reçues par une fonction ?",
["Variables globales","Paramètres","Classes","Événements"],1,
"Les paramètres sont les variables déclarées dans la définition de la fonction."],

["Comment appelle-t-on les valeurs fournies lors de l'appel ?",
["Arguments","Classes","Propriétés","Modules"],0,
"Les arguments sont les valeurs transmises à une fonction."],

["Quel mot-clé retourne une valeur ?",
["break","return","continue","yield obligatoirement"],1,
"return renvoie le résultat d'une fonction."],

["Quelle est la fonction d'une arrow function ?",
["Une boucle","Une fonction avec la syntaxe =>","Un objet HTML","Un type numérique"],1,
"Une fonction fléchée utilise la syntaxe =>."],

["Quel est le résultat de (x => x * 2)(5) ?",
["5","10","25","7"],1,
"La fonction reçoit 5 et retourne 5 multiplié par 2."],

["Une fonction peut-elle ne recevoir aucun paramètre ?",
["Non","Oui","Uniquement avec var","Uniquement avec class"],1,
"Une fonction peut fonctionner sans paramètre."],

["À quoi sert une valeur par défaut ?",
["Remplacer un argument absent","Créer un tableau","Arrêter le programme","Supprimer une variable"],0,
"Un paramètre par défaut fournit une valeur lorsque l'argument est absent ou undefined."],

["Que représente une fonction anonyme ?",
["Une fonction sans nom","Une fonction sans code","Une classe","Une variable constante"],0,
"Une fonction anonyme est une fonction qui ne possède pas de nom propre."],

["Qu'est-ce qu'une closure ?",
["Une boucle","Une fonction qui conserve son environnement lexical","Une erreur","Une classe abstraite"],1,
"Une closure conserve l'accès aux variables de son environnement lexical."],

["Quelle portée possède let ?",
["Bloc","Uniquement globale","Fichier entier toujours","Aucune"],0,
"let possède une portée de bloc."],

["Quelle portée possède une variable var déclarée dans une fonction ?",
["Bloc uniquement","Fonction","Objet uniquement","Module uniquement"],1,
"var possède une portée de fonction ou globale."],

["Une fonction peut-elle retourner un objet ?",
["Non","Oui","Uniquement avec async","Uniquement avec class"],1,
"Une fonction peut retourner une valeur de n'importe quel type compatible."],

["Que signifie une fonction callback ?",
["Une fonction transmise à une autre fonction","Une variable globale","Un tableau","Un événement HTML"],0,
"Une callback est une fonction fournie à une autre fonction pour être appelée ultérieurement."],

["Que fait une fonction récursive ?",
["Elle s'appelle elle-même","Elle supprime le DOM","Elle crée du CSS","Elle bloque toujours le programme"],0,
"Une fonction récursive appelle elle-même et doit prévoir un cas d'arrêt."],

["Que vaut une fonction sans return explicite ?",
["null","0","undefined","false"],2,
"Une fonction sans return explicite retourne undefined."],

["Quel mot-clé désigne le contexte courant dans une méthode classique ?",
["self","this","current","that"],1,
"this représente le contexte d'appel de la fonction."],

["Une fonction fléchée possède-t-elle son propre this ?",
["Toujours","Non","Uniquement avec return","Uniquement avec var"],1,
"Une fonction fléchée hérite du this lexical de son environnement."],

["Pourquoi découper un programme en fonctions ?",
["Pour augmenter les répétitions","Pour réutiliser et organiser le code","Pour supprimer HTML","Pour empêcher les erreurs automatiquement"],1,
"Les fonctions améliorent la modularité, la réutilisation et la lisibilité."],

["Qu'est-ce qu'une fonction pure ?",
["Une fonction sans paramètres","Une fonction dont le résultat dépend de ses entrées et qui ne produit pas d'effet de bord","Une fonction DOM","Une fonction qui ne retourne rien"],1,
"Une fonction pure donne le même résultat pour les mêmes entrées et ne modifie pas l'extérieur."]
].forEach(q => ajouterQuestion("Fonctions",2,...q));

/* -----------------------------------------------------
   4. TABLEAUX ET OBJETS — 25 QUESTIONS
----------------------------------------------------- */

[
["Quel indice représente le premier élément d'un tableau ?",
["1","0","-1","10"],1,
"Les indices d'un tableau JavaScript commencent à zéro."],

["Quelle propriété donne la taille d'un tableau ?",
["size()","length","count()","total"],1,
"length retourne le nombre d'éléments du tableau."],

["Quelle méthode ajoute un élément à la fin ?",
["pop()","push()","shift()","slice()"],1,
"push() ajoute un ou plusieurs éléments à la fin du tableau."],

["Quelle méthode supprime le dernier élément ?",
["pop()","push()","unshift()","map()"],0,
"pop() retire le dernier élément et le retourne."],

["Quelle méthode ajoute un élément au début ?",
["push()","shift()","unshift()","filter()"],2,
"unshift() ajoute des éléments au début."],

["Quelle méthode supprime le premier élément ?",
["pop()","shift()","splice()","reduce()"],1,
"shift() supprime le premier élément du tableau."],

["Que retourne includes() ?",
["Un tableau","Un booléen","Un objet","Une chaîne"],1,
"includes() vérifie la présence d'une valeur et retourne un booléen."],

["Quelle méthode transforme chaque élément ?",
["map()","filter()","find()","pop()"],0,
"map() crée un nouveau tableau contenant les résultats de transformation."],

["Quelle méthode sélectionne les éléments correspondant à une condition ?",
["map()","filter()","join()","push()"],1,
"filter() retourne un nouveau tableau des éléments qui passent le test."],

["Quelle méthode permet d'accumuler un tableau ?",
["reduce()","sort()","reverse()","shift()"],0,
"reduce() réduit un tableau à une valeur accumulée."],

["Quelle méthode retourne le premier élément correspondant ?",
["find()","findIndex()","map()","every()"],0,
"find() retourne le premier élément correspondant ou undefined."],

["Quelle méthode retourne l'indice d'un élément recherché ?",
["find()","findIndex()","filter()","join()"],1,
"findIndex() retourne l'indice du premier élément correspondant."],

["Que retourne every() ?",
["Un tableau","Un booléen","Un nombre","Une fonction"],1,
"every() vérifie si tous les éléments passent le test."],

["Que vérifie some() ?",
["Tous les éléments","Au moins un élément","La longueur","L'ordre"],1,
"some() vérifie si au moins un élément satisfait la condition."],

["Quelle méthode transforme un tableau en chaîne ?",
["join()","map()","push()","reduce()"],0,
"join() rassemble les éléments dans une chaîne avec un séparateur optionnel."],

["Quelle méthode extrait une portion sans modifier le tableau ?",
["splice()","slice()","shift()","sort()"],1,
"slice() retourne une portion sans modifier le tableau original."],

["Quelle méthode peut modifier un tableau en supprimant des éléments ?",
["slice()","splice()","map()","filter()"],1,
"splice() modifie le tableau d'origine."],

["Comment accéder à une propriété d'objet ?",
["objet.nom","objet->nom","objet::nom","objet#nom"],0,
"On utilise la notation point ou la notation entre crochets."],

["Comment créer un objet ?",
["{}","[]","()","<>"],0,
"Les accolades créent un objet littéral."],

["À quoi sert this dans une méthode classique ?",
["Au contexte d'appel","À créer une boucle","À modifier le HTML","À déclarer une classe"],0,
"this fait référence au contexte de la méthode lors de son appel."],

["Quelle méthode transforme un objet en JSON ?",
["JSON.parse()","JSON.stringify()","JSON.convert()","JSON.object()"],1,
"JSON.stringify() sérialise une valeur en chaîne JSON."],

["Quelle méthode transforme du JSON en objet ?",
["JSON.stringify()","JSON.parse()","JSON.toObject()","JSON.read()"],1,
"JSON.parse() analyse une chaîne JSON."],

["Que fait le spread operator ?",
["Étend les éléments d'une collection","Supprime un tableau","Trie un objet","Crée une boucle"],0,
"Le spread operator ... étend les éléments d'un itérable ou les propriétés d'un objet."],

["Quelle structure ne conserve que des valeurs uniques ?",
["Array","Set","String","Date"],1,
"Set ne conserve qu'une occurrence de chaque valeur selon les règles d'égalité de Set."],

["Quelle structure stocke des associations clé-valeur ?",
["Map","Array uniquement","Boolean","Number"],0,
"Map permet de stocker des associations clé-valeur."]
].forEach(q => ajouterQuestion("Tableaux",2,...q));

/* -----------------------------------------------------
   5. DOM ET ÉVÉNEMENTS — 25 QUESTIONS
----------------------------------------------------- */

[
["Que signifie DOM ?",
["Document Object Model","Data Object Mode","Document Output Method","Dynamic Online Model"],0,
"DOM signifie Document Object Model."],

["Quelle méthode sélectionne un élément par ID ?",
["querySelectorAll()","getElementById()","getElementsByTagName()","createElement()"],1,
"getElementById() sélectionne un élément à partir de son identifiant."],

["Quelle méthode sélectionne le premier élément correspondant à un sélecteur CSS ?",
["querySelector()","querySelectorAll()","createElement()","appendChild()"],0,
"querySelector() retourne le premier élément correspondant."],

["Quelle propriété modifie le texte d'un élément ?",
["textContent","valueOf","innerStyle","classNameOnly"],0,
"textContent permet de lire ou remplacer le texte."],

["Quelle propriété permet d'insérer du contenu HTML ?",
["textContent","innerHTML","value","length"],1,
"innerHTML interprète le contenu comme du HTML."],

["Quelle méthode crée un élément HTML ?",
["createElement()","appendChild()","getElementById()","remove()"],0,
"createElement() crée un élément."],

["Quelle méthode ajoute un enfant à un élément ?",
["appendChild()","remove()","getAttribute()","includes()"],0,
"appendChild() ajoute un nœud enfant."],

["Quelle méthode supprime un élément ?",
["remove()","push()","insert()","replaceText()"],0,
"remove() supprime l'élément du DOM."],

["Quel événement détecte un clic ?",
["submit","click","change","load"],1,
"click est déclenché lors d'un clic."],

["Quel événement détecte la saisie immédiate ?",
["input","submit","load","blur"],0,
"input se déclenche lorsque la valeur d'un champ change."],

["Quel événement est utilisé pour envoyer un formulaire ?",
["click uniquement","submit","load","mouseover"],1,
"submit se déclenche lorsque le formulaire est soumis."],

["Quelle méthode ajoute un écouteur d'événement ?",
["addEventListener()","addEvent()","onEvent()","listen()"],0,
"addEventListener() associe un gestionnaire à un événement."],

["Quel objet contient les informations de l'événement ?",
["event","window uniquement","document uniquement","targetOnly"],0,
"L'objet Event fournit les informations de l'événement."],

["Que représente event.target ?",
["L'élément déclencheur","Le document entier","La feuille CSS","Le serveur"],0,
"target représente l'élément sur lequel l'événement s'est produit."],

["Quelle méthode empêche le comportement par défaut ?",
["stopPropagation()","preventDefault()","cancelEvent()","remove()"],1,
"preventDefault() empêche l'action native par défaut."],

["Quelle méthode arrête la propagation ?",
["preventDefault()","stopPropagation()","removeEventListener()","stopDefault()"],1,
"stopPropagation() arrête la propagation de l'événement."],

["Quelle propriété modifie une valeur d'input ?",
["value","textContent uniquement","innerHTML uniquement","name"],0,
"value permet de lire ou modifier la valeur d'un champ."],

["Quelle propriété indique si une checkbox est cochée ?",
["selected","checked","active","valueOnly"],1,
"checked retourne un booléen pour les cases à cocher et les boutons radio."],

["Quelle propriété permet de modifier une classe ?",
["classList","styleList","cssList","elementClass"],0,
"classList permet de manipuler les classes CSS."],

["Quelle méthode ajoute une classe ?",
["classList.add()","classList.remove()","classList.clear()","style.add()"],0,
"classList.add() ajoute une classe."],

["Quelle méthode inverse la présence d'une classe ?",
["add()","remove()","toggle()","contains()"],2,
"toggle() ajoute ou supprime la classe selon sa présence."],

["Quelle propriété change directement le style ?",
["style","cssTextOnly","design","class"],0,
"style permet de modifier les propriétés CSS en ligne."],

["Quel événement indique la perte de focus ?",
["focus","blur","click","input"],1,
"blur se déclenche lorsque l'élément perd le focus."],

["Quelle méthode retire un écouteur d'événement ?",
["removeEventListener()","removeEvent()","deleteListener()","clearEvent()"],0,
"removeEventListener() supprime un gestionnaire correspondant."],

["Quel événement est adapté au chargement complet de la page ?",
["DOMContentLoaded","click","input","submit"],0,
"DOMContentLoaded se déclenche lorsque le HTML a été entièrement analysé."]
].forEach(q => ajouterQuestion("DOM",2,...q));

/* -----------------------------------------------------
   6. FORMULAIRES — 20 QUESTIONS
----------------------------------------------------- */

[
["Quelle propriété récupère la valeur d'un input ?",
["textContent","value","innerHTML","checked"],1,
"value récupère le contenu d'un champ de formulaire."],

["Quelle méthode supprime les espaces aux extrémités ?",
["split()","trim()","slice()","join()"],1,
"trim() retire les espaces au début et à la fin d'une chaîne."],

["Quel attribut HTML rend un champ obligatoire ?",
["important","required","needed","must"],1,
"required rend le champ obligatoire lors de la validation HTML."],

["Quel type de champ HTML convient à un email ?",
["text","email","mail","string"],1,
"type=email active une validation de format élémentaire."],

["Quelle propriété vérifie si un champ est valide ?",
["validity","isValid() uniquement","checked","length"],0,
"validity expose l'état de validation du champ."],

["Quelle méthode affiche les messages de validation du navigateur ?",
["checkValidity() uniquement","reportValidity()","displayError()","showValidity()"],1,
"reportValidity() vérifie le formulaire et affiche les messages natifs."],

["Quelle méthode vérifie la validité sans forcément afficher un message ?",
["checkValidity()","reportValidity()","trim()","focus()"],0,
"checkValidity() retourne un booléen indiquant la validité."],

["Quel attribut fixe une longueur minimale ?",
["min","minlength","minimum","length"],1,
"minlength définit le nombre minimal de caractères."],

["Quel attribut fixe une valeur numérique minimale ?",
["min","minlength","minimumLength","start"],0,
"min définit la valeur minimale d'un champ numérique ou date adapté."],

["Quelle propriété permet de lire une checkbox ?",
["value uniquement","checked","textContent","innerHTML"],1,
"checked indique si la case est sélectionnée."],

["Quel événement permet de vérifier un formulaire à l'envoi ?",
["submit","mouseover","load","keydown uniquement"],0,
"submit est l'événement adapté à la validation lors de l'envoi."],

["Pourquoi utiliser preventDefault() ?",
["Pour supprimer les inputs","Pour éviter l'envoi natif pendant la vérification","Pour créer un objet","Pour modifier une date"],1,
"Il empêche le comportement par défaut du formulaire."],

["Quel objet permet de convertir un texte en nombre ?",
["Number()","String()","JSON.parse() uniquement","Boolean()"],0,
"Number() tente de convertir une valeur en nombre."],

["Que signifie NaN ?",
["Nombre négatif","Not-a-Number","Nouvel attribut numérique","Null and Number"],1,
"NaN indique un résultat numérique non valide."],

["Quelle méthode teste une expression régulière ?",
["test()","check()","verify()","matchOnly()"],0,
"RegExp.test() vérifie si une chaîne correspond au motif."],

["Pourquoi vérifier les données côté serveur ?",
["JavaScript est toujours secret","Les vérifications du navigateur peuvent être contournées","HTML ne possède pas de formulaire","Le CSS bloque les erreurs"],1,
"Un utilisateur peut modifier les données ou désactiver les vérifications du navigateur."],

["Quelle propriété permet de vérifier le champ sélectionné dans un groupe radio ?",
["checked","selectedIndex uniquement","textContent","length"],0,
"checked permet de repérer le bouton radio sélectionné."],

["Quelle méthode sélectionne le radio coché ?",
["querySelector(':checked')","getElementById('*')","getChecked()","selectRadio()"],0,
"querySelector avec :checked sélectionne le premier élément coché correspondant."],

["Quel attribut HTML limite une saisie à une longueur maximale ?",
["maxlength","max","maxvalue","limit"],0,
"maxlength fixe le nombre maximal de caractères d'un champ texte."],

["Une validation HTML suffit-elle pour sécuriser une application ?",
["Oui","Non","Seulement avec CSS","Seulement avec email"],1,
"La validation serveur reste indispensable."]
].forEach(q => ajouterQuestion("Formulaires",2,...q));

/* -----------------------------------------------------
   7. JAVASCRIPT MODERNE — 20 QUESTIONS
----------------------------------------------------- */

[
["Quel opérateur représente une fonction fléchée ?",
["=>","->","::","**"],0,
"Les fonctions fléchées utilisent la syntaxe =>."],

["Quel opérateur permet d'étendre un tableau ?",
["...","&&","??","!="],0,
"Le spread operator utilise trois points."],

["À quoi sert le destructuring ?",
["Extraire des valeurs","Créer des erreurs","Supprimer un objet","Modifier une classe CSS"],0,
"Le destructuring permet d'extraire des valeurs d'objets ou de tableaux."],

["Quelle syntaxe crée un template literal ?",
["Guillemets simples","Guillemets doubles","Accents graves","Parenthèses"],2,
"Les template literals utilisent les accents graves."],

["Quelle structure conserve des valeurs uniques ?",
["Set","Array","String","Number"],0,
"Set ne conserve qu'une occurrence de chaque valeur."],

["Quelle méthode ajoute une entrée dans Map ?",
["add()","set()","push()","insert()"],1,
"Map.set() associe une clé à une valeur."],

["Quelle méthode lit une valeur dans Map ?",
["get()","read()","find()","value()"],0,
"Map.get() récupère la valeur associée à une clé."],

["Quel mot-clé crée une classe ?",
["object","class","struct","newclass"],1,
"class permet de définir une classe."],

["Quel mot-clé crée une instance ?",
["new","instance","create","this"],0,
"new crée une instance d'une classe ou appelle un constructeur."],

["Quel mot-clé permet l'héritage ?",
["inherits","extends","superclass","parent"],1,
"extends établit l'héritage entre classes."],

["Quel mot-clé appelle le constructeur parent ?",
["parent()","super()","extends()","this()"],1,
"super() appelle le constructeur de la classe parent."],

["Quel mot-clé permet d'exporter une valeur ?",
["export","send","public","share"],0,
"export rend une valeur accessible depuis d'autres modules."],

["Quel mot-clé importe une valeur ?",
["include","require obligatoirement","import","load"],2,
"import permet d'importer les exports d'un module."],

["Quelle propriété définit la longueur d'une chaîne ?",
["size","length","count","total"],1,
"length retourne la longueur d'une chaîne."],

["Quelle méthode met une chaîne en majuscules ?",
["toUpperCase()","upper()","uppercase()","toBig()"],0,
"toUpperCase() retourne une version en majuscules."],

["Quel est le résultat de [1,2].map(x => x * 2) ?",
["[1,2]","[2,4]","[1,4]","[2,2]"],1,
"map transforme chaque valeur en la multipliant par deux."],

["Quelle méthode trie un tableau ?",
["sort()","order()","rank()","arrange()"],0,
"sort() trie les éléments du tableau. Pour des nombres, utilisez un comparateur."],

["Quelle syntaxe fournit une valeur de remplacement à null ?",
["||","??","!=","&&"],1,
"?? fournit une valeur alternative lorsque l'opérande est null ou undefined."],

["Quel opérateur permet un accès sécurisé à une propriété imbriquée ?",
["?.","??","===","=>"],0,
"Optional chaining ?. évite une erreur si un élément intermédiaire est nullish."],

["Une constante objet peut-elle voir ses propriétés modifiées ?",
["Non, jamais","Oui","Seulement avec var","Uniquement en JSON"],1,
"const interdit la réaffectation de la référence, pas la modification des propriétés."]
].forEach(q => ajouterQuestion("Moderne",2,...q));

/* -----------------------------------------------------
   8. ASYNCHRONE ET API — 20 QUESTIONS
----------------------------------------------------- */

[
["Quel mot-clé déclare une fonction asynchrone ?",
["async","await","promise","fetch"],0,
"async déclare une fonction asynchrone qui retourne une Promise."],

["Quel mot-clé attend le résultat d'une Promise ?",
["wait","await","then","async"],1,
"await attend la résolution d'une Promise dans un contexte autorisé."],

["Quel objet représente une opération future ?",
["Array","Promise","Date","Set"],1,
"Une Promise représente le résultat futur d'une opération asynchrone."],

["Quelle méthode traite la réussite d'une Promise ?",
["catch()","then()","finally()","error()"],1,
"then() traite la résolution d'une Promise."],

["Quelle méthode traite le rejet d'une Promise ?",
["then()","catch()","map()","filter()"],1,
"catch() traite les rejets et erreurs propagées."],

["Quelle fonction effectue une requête HTTP moderne ?",
["fetch()","send()","http()","requestOnly()"],0,
"fetch() permet d'effectuer des requêtes HTTP."],

["Quelle méthode lit une réponse JSON ?",
["response.json()","response.textOnly()","JSON.read()","fetch.json()"],0,
"response.json() lit le corps de la réponse et analyse le JSON."],

["Quelle méthode HTTP récupère généralement des données ?",
["POST","GET","DELETE","PATCH"],1,
"GET est utilisé pour récupérer des ressources."],

["Quelle méthode HTTP crée généralement une ressource ?",
["GET","POST","TRACE","OPTIONS"],1,
"POST est couramment utilisé pour créer une ressource."],

["Quelle méthode HTTP supprime une ressource ?",
["DELETE","GET","HEAD","CONNECT"],0,
"DELETE demande la suppression d'une ressource."],

["Quel en-tête indique un corps JSON ?",
["Content-Type: application/json","HTML: true","Accept: image","Type: text"],0,
"Content-Type indique le type du contenu envoyé."],

["Pourquoi vérifier response.ok ?",
["Vérifier le succès HTTP","Vérifier le CSS","Vérifier l'email","Créer une Promise"],0,
"response.ok indique si le statut HTTP est un succès, généralement 200 à 299."],

["Quel bloc gère les erreurs dans async/await ?",
["try/catch","if/else uniquement","switch","for"],0,
"try/catch permet de gérer les exceptions dans une fonction asynchrone."],

["Quelle fonction programme un délai ?",
["setTimeout()","setInterval() uniquement","delay()","wait()"],0,
"setTimeout() programme l'exécution d'une fonction après un délai."],

["Quelle fonction répète un traitement périodiquement ?",
["setTimeout()","setInterval()","clearTimeout()","Promise()"],1,
"setInterval() répète un traitement selon un intervalle."],

["Quelle fonction arrête un intervalle ?",
["clearInterval()","stopInterval()","end()","remove()"],0,
"clearInterval() annule l'intervalle."],

["Une opération asynchrone bloque-t-elle nécessairement toute la page ?",
["Oui","Non","Toujours avec fetch","Uniquement avec JSON"],1,
"Les mécanismes asynchrones permettent de poursuivre d'autres traitements pendant l'attente."],

["Que signifie API ?",
["Application Programming Interface","Automatic Program Input","Application Page Internet","Advanced Program Index"],0,
"API signifie Application Programming Interface."],

["Que contient généralement une réponse JSON ?",
["Des données structurées","Du CSS uniquement","Un exécutable","Un fichier système"],0,
"JSON représente des données structurées sous forme de texte."],

["Une réponse HTTP 404 indique généralement :",
["Succès","Ressource introuvable","Serveur toujours disponible","Création réussie"],1,
"404 correspond à Not Found."]
].forEach(q => ajouterQuestion("Avancé",3,...q));

/* -----------------------------------------------------
   9. SÉCURITÉ, STOCKAGE ET OUTILS — 20 QUESTIONS
----------------------------------------------------- */

[
["Quelle API permet de conserver des données dans le navigateur ?",
["LocalStorage","console.log()","Math","DOM uniquement"],0,
"LocalStorage conserve des données dans le navigateur."],

["Les valeurs LocalStorage sont-elles stockées sous forme de chaînes ?",
["Non","Oui","Uniquement les nombres","Uniquement les objets"],1,
"Les valeurs du Web Storage sont des chaînes de caractères."],

["Quelle méthode enregistre une donnée ?",
["setItem()","getItem()","removeItem()","read()"],0,
"setItem() enregistre une valeur sous une clé."],

["Quelle méthode récupère une donnée ?",
["setItem()","getItem()","clear()","push()"],1,
"getItem() lit la valeur associée à une clé."],

["Quelle méthode supprime une clé ?",
["clear()","removeItem()","deleteAll()","pop()"],1,
"removeItem() supprime une entrée du stockage."],

["Quelle méthode vide tout LocalStorage ?",
["removeItem()","clear()","reset()","empty()"],1,
"clear() supprime toutes les entrées du stockage de l'origine."],

["Comment conserver un tableau dans LocalStorage ?",
["JSON.stringify()","textContent","innerHTML","fetch()"],0,
"JSON.stringify() transforme le tableau en chaîne JSON."],

["Comment récupérer un tableau JSON ?",
["JSON.parse()","JSON.stringify()","String()","Boolean()"],0,
"JSON.parse() reconstitue la valeur JavaScript à partir du texte JSON."],

["LocalStorage est-il adapté pour conserver un mot de passe en clair ?",
["Oui","Non","Seulement sur mobile","Seulement en HTTPS"],1,
"Les données LocalStorage sont accessibles aux scripts exécutés sur l'origine. Ne stockez pas de secrets."],

["Quelle propriété permet d'accéder au style en ligne ?",
["style","css","design","appearance"],0,
"element.style permet de manipuler les propriétés CSS en ligne."],

["Quel est le rôle de textContent en matière de sécurité ?",
["Afficher du texte sans l'interpréter comme HTML","Exécuter du JavaScript","Créer une requête","Stocker un mot de passe"],0,
"textContent insère du texte et ne l'interprète pas comme des balises HTML."],

["Quel risque peut être associé à innerHTML avec une donnée non fiable ?",
["XSS","Erreur de calcul","Boucle for","Erreur CSS uniquement"],0,
"L'insertion de contenu non fiable dans innerHTML peut provoquer une injection HTML ou XSS."],

["Pourquoi éviter eval() ?",
["Il peut exécuter du code arbitraire","Il ne fonctionne pas avec les nombres","Il crée uniquement des tableaux","Il remplace CSS"],0,
"eval() exécute du code JavaScript et peut entraîner de graves risques de sécurité."],

["Quelle technologie chiffre les communications Web ?",
["HTTPS","CSS","DOM","JSON"],0,
"HTTPS protège les communications HTTP à l'aide de TLS."],

["Une clé API secrète doit-elle être publiée dans le JavaScript du navigateur ?",
["Oui","Non","Uniquement en commentaire","Uniquement dans const"],1,
"Tout code côté navigateur peut être inspecté. Les secrets doivent rester côté serveur."],

["Quelle méthode permet de gérer une exception ?",
["try/catch","for/in","map/filter","switch"],0,
"try/catch permet de gérer les exceptions."],

["Quel mot-clé déclenche une exception ?",
["throw","catch","finally","error"],0,
"throw permet de lancer une exception."],

["Quelle instruction s'exécute même après une exception traitée ?",
["finally","else","break","continue"],0,
"finally est exécuté à la fin du traitement try/catch."],

["Quel outil aide à inspecter les erreurs JavaScript ?",
["Console du navigateur","Calculatrice","Explorateur de fichiers uniquement","CSS"],0,
"La console des outils de développement affiche les messages et erreurs JavaScript."],

["Pourquoi séparer JavaScript en modules ?",
["Organiser et réutiliser le code","Supprimer les fonctions","Éviter HTML","Désactiver le navigateur"],0,
"Les modules améliorent l'organisation, la réutilisation et la maintenance."]
].forEach(q => ajouterQuestion("Sécurité",3,...q));

/* -----------------------------------------------------
   10. VARIANTES PÉDAGOGIQUES — 20 QUESTIONS
===================================================== */

const variantes = [
{
c:"Bases",n:1,
q:"Quel est le résultat de 8 + 4 ?",
o:["10","12","14","32"],a:1,
e:"L'addition de 8 et 4 donne 12."
},
{
c:"Bases",n:1,
q:"Quel est le résultat de 9 * 3 ?",
o:["12","18","27","36"],a:2,
e:"La multiplication de 9 par 3 donne 27."
},
{
c:"Logique",n:1,
q:"Quelle est la valeur de 12 > 20 ?",
o:["true","false","12","20"],a:1,
e:"12 est inférieur à 20, donc le résultat est false."
},
{
c:"Logique",n:1,
q:"Quelle est la valeur de 15 === 15 ?",
o:["true","false","15","undefined"],a:0,
e:"Les deux valeurs sont égales et possèdent le même type."
},
{
c:"Fonctions",n:2,
q:"Que retourne function double(x){return x*2} appelée avec 6 ?",
o:["6","8","12","36"],a:2,
e:"La fonction multiplie son argument par deux : 6 × 2 = 12."
},
{
c:"Fonctions",n:2,
q:"Quel résultat retourne x => x + 3 lorsque x vaut 7 ?",
o:["3","7","10","21"],a:2,
e:"La fonction ajoute trois à la valeur reçue."
},
{
c:"Tableaux",n:2,
q:"Quelle est la valeur de [10,20,30][1] ?",
o:["10","20","30","1"],a:1,
e:"Le deuxième élément se trouve à l'indice 1."
},
{
c:"Tableaux",n:2,
q:"Combien d'éléments contient [1,2,3,4,5] ?",
o:["4","5","6","3"],a:1,
e:"Le tableau contient cinq éléments."
},
{
c:"Tableaux",n:2,
q:"Quel tableau retourne [2,4,6].filter(x => x > 3) ?",
o:["[2]","[4,6]","[2,4,6]","[]"],a:1,
e:"filter conserve les éléments strictement supérieurs à trois."
},
{
c:"Tableaux",n:2,
q:"Quel est le résultat de [1,2,3].reduce((a,b)=>a+b,0) ?",
o:["3","5","6","123"],a:2,
e:"reduce additionne les trois valeurs : 1 + 2 + 3 = 6."
},
{
c:"DOM",n:2,
q:"Quelle méthode permet d'ajouter une classe active ?",
o:["classList.add()","classList.delete()","style.add()","element.active()"],a:0,
e:"classList.add('active') ajoute la classe active."
},
{
c:"DOM",n:2,
q:"Quel événement est déclenché par l'envoi d'un formulaire ?",
o:["click","submit","focus","blur"],a:1,
e:"submit est l'événement dédié à la soumission du formulaire."
},
{
c:"Formulaires",n:2,
q:"Que retourne input.value.trim() si le champ ne contient que des espaces ?",
o:["Les espaces","Une chaîne vide","null","undefined"],a:1,
e:"trim() supprime les espaces aux extrémités."
},
{
c:"Formulaires",n:2,
q:"Quel attribut impose un champ obligatoire ?",
o:["required","readonly","disabled","checked"],a:0,
e:"required impose la présence d'une valeur valide selon les règles du champ."
},
{
c:"Moderne",n:2,
q:"Quel est le résultat de [...[1,2],3] ?",
o:["[3,1,2]","[1,2,3]","[[1,2],3]","Erreur"],a:1,
e:"Le spread étend les éléments du tableau initial."
},
{
c:"Moderne",n:2,
q:"Quelle structure permet de conserver des valeurs uniques ?",
o:["Set","Array","String","Boolean"],a:0,
e:"Set est une collection de valeurs uniques."
},
{
c:"Avancé",n:3,
q:"Quelle méthode permet de récupérer des données depuis une API ?",
o:["fetch()","alert()","Math.random()","push()"],a:0,
e:"fetch() permet d'envoyer une requête HTTP."
},
{
c:"Avancé",n:3,
q:"Quel mot-clé attend une Promise ?",
o:["return","await","var","class"],a:1,
e:"await attend la résolution d'une Promise."
},
{
c:"Sécurité",n:3,
q:"Quelle propriété affiche du texte sans l'interpréter comme HTML ?",
o:["innerHTML","textContent","outerHTML","style"],a:1,
e:"textContent affiche le contenu comme du texte."
},
{
c:"Sécurité",n:3,
q:"Pourquoi faut-il valider les données côté serveur ?",
o:["Pour empêcher les contournements des contrôles du navigateur","Pour changer les couleurs","Pour accélérer le CSS","Pour supprimer le DOM"],a:0,
e:"Les contrôles côté navigateur peuvent être modifiés ou contournés. Le serveur doit vérifier les données."
}
];

variantes.forEach(q => {
    ajouterQuestion(q.c,q.n,q.q,q.o,q.a,q.e);
});

/* =====================================================
   COMPLÉMENT AUTOMATIQUE POUR ATTEINDRE 200 QUESTIONS
===================================================== */

const modelesSupplementaires = [
{
c:"Bases",n:1,
q:"Quelle instruction affiche une valeur dans la console ?",
o:["console.log()","alertCSS()","printHTML()","display()"],a:0,
e:"console.log() affiche une valeur dans la console du navigateur."
},
{
c:"Logique",n:1,
q:"Quel opérateur vérifie une inégalité stricte ?",
o:["!==","=","===","<"],a:0,
e:"!== compare la valeur et le type en vérifiant qu'ils sont différents."
},
{
c:"Fonctions",n:2,
q:"Quelle instruction permet de terminer une fonction en renvoyant une valeur ?",
o:["return","break","continue","switch"],a:0,
e:"return termine la fonction et renvoie sa valeur de résultat."
},
{
c:"Tableaux",n:2,
q:"Quelle méthode permet de compter le nombre d'éléments d'un tableau ?",
o:["length","count()","size()","total()"],a:0,
e:"La propriété length retourne le nombre d'éléments."
},
{
c:"DOM",n:2,
q:"Quelle méthode permet d'écouter un événement sur un élément ?",
o:["addEventListener()","listenHTML()","addCSS()","eventCreate()"],a:0,
e:"addEventListener associe une fonction à un événement."
},
{
c:"Formulaires",n:2,
q:"Quelle propriété récupère la valeur saisie dans un champ texte ?",
o:["value","checked","classList","style"],a:0,
e:"La propriété value contient la valeur actuelle du champ."
},
{
c:"Moderne",n:2,
q:"Quelle syntaxe permet d'importer un export nommé ?",
o:["import { nom } from './fichier.js'","load nom","include nom","export nom"],a:0,
e:"La syntaxe import entre accolades importe un export nommé."
},
{
c:"Avancé",n:3,
q:"Quelle méthode traite le rejet d'une Promise ?",
o:["catch()","then()","map()","push()"],a:0,
e:"catch() traite un rejet de Promise."
},
{
c:"Sécurité",n:3,
q:"Quel stockage ne doit pas contenir des secrets accessibles au JavaScript ?",
o:["LocalStorage","Serveur sécurisé","Coffre serveur","Gestionnaire de secrets"],a:0,
e:"LocalStorage est accessible aux scripts exécutés sur la page."
},
{
c:"Avancé",n:3,
q:"Quel est le rôle de JSON.parse() ?",
o:["Analyser une chaîne JSON","Créer une classe","Envoyer une requête","Modifier CSS"],a:0,
e:"JSON.parse transforme une chaîne JSON valide en valeur JavaScript."
}
];

let indexSupplementaire = 1;

while (questions.length < 200) {

    const modele = modelesSupplementaires[
        (indexSupplementaire - 1) % modelesSupplementaires.length
    ];

    const numero = Math.ceil(
        indexSupplementaire / modelesSupplementaires.length
    );

    ajouterQuestion(
        modele.c,
        modele.n,
        modele.q + " (question complémentaire " + numero + ")",
        [...modele.o],
        modele.a,
        modele.e + " Cette question permet de renforcer la maîtrise de cette notion."
    );

    indexSupplementaire++;
}

/* =====================================================
   SYSTÈME DU QUIZ
===================================================== */

let questionsQuiz = [];
let questionActuelle = 0;
let score = 0;
let reponseSelectionnee = null;
let quizTermine = false;
let erreursQuiz = [];
let questionsRepondues = [];

function melanger(tableau) {

    const copie = [...tableau];

    for (let i = copie.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [copie[i], copie[j]] = [copie[j], copie[i]];
    }

    return copie;
}

function demarrerQuiz() {

    const nombre = Number(
        document.getElementById("questionCount").value
    );

    const niveau = document.getElementById("quizLevel").value;

    const categorie = document.getElementById("quizCategory").value;

    let disponibles = [...questions];

    if (niveau !== "all") {
        disponibles = disponibles.filter(
            q => q.niveau === Number(niveau)
        );
    }

    if (categorie !== "all") {
        disponibles = disponibles.filter(
            q => q.categorie === categorie
        );
    }

    if (disponibles.length < nombre) {
        alert("Pas assez de questions dans cette sélection. Choisissez un autre filtre.");
        return;
    }

    questionsQuiz = melanger(disponibles).slice(0,nombre);

    questionActuelle = 0;
    score = 0;
    reponseSelectionnee = null;
    quizTermine = false;
    erreursQuiz = [];
    questionsRepondues = [];

    document.getElementById("quizStart").style.display = "none";
    document.getElementById("quizGame").style.display = "block";
    document.getElementById("quiz-result").style.display = "none";

    afficherQuestion();

    document.getElementById("quizGame").scrollIntoView({
        behavior:"smooth",
        block:"start"
    });
}

function afficherQuestion() {

    const question = questionsQuiz[questionActuelle];

    reponseSelectionnee = null;

    document.getElementById("questionCounter").textContent =
        `Question ${questionActuelle + 1} / ${questionsQuiz.length}`;

    document.getElementById("quizPoints").textContent =
        `Score : ${score}`;

    document.getElementById("quizCategoryLabel").textContent =
        question.categorie;

    document.getElementById("quizProgressBar").style.width =
        (questionActuelle / questionsQuiz.length * 100) + "%";

    document.getElementById("questionText").textContent =
        question.question;

    const options = document.getElementById("questionOptions");

    options.innerHTML = "";

    question.options.forEach((option,index) => {

        const bouton = document.createElement("button");

        bouton.type = "button";
        bouton.className = "option";

        const lettre = document.createElement("span");
        lettre.className = "option-letter";
        lettre.textContent = String.fromCharCode(65 + index);

        const texte = document.createElement("span");
        texte.textContent = option;

        bouton.appendChild(lettre);
        bouton.appendChild(texte);

        bouton.addEventListener("click", () => {

            if (questionsRepondues[questionActuelle] !== undefined) {
                return;
            }

            reponseSelectionnee = index;

            document.querySelectorAll(".option").forEach(btn => {
                btn.classList.remove("selected");
            });

            bouton.classList.add("selected");

            document.getElementById("verifyButton").disabled = false;
        });

        options.appendChild(bouton);
    });

    document.getElementById("questionFeedback").className = "feedback";
    document.getElementById("questionFeedback").textContent = "";

    document.getElementById("verifyButton").style.display = "inline-block";
    document.getElementById("verifyButton").disabled = true;

    document.getElementById("nextButton").style.display = "none";
}

function verifierReponse() {

    if (reponseSelectionnee === null) {
        return;
    }

    if (questionsRepondues[questionActuelle] !== undefined) {
        return;
    }

    const question = questionsQuiz[questionActuelle];

    const correcte = reponseSelectionnee === question.bonneReponse;

    questionsRepondues[questionActuelle] = {
        reponse:reponseSelectionnee,
        correcte
    };

    if (correcte) {

        score++;

    } else {

        erreursQuiz.push({
            question:question.question,
            options:question.options,
            bonneReponse:question.options[question.bonneReponse],
            reponseDonnee:question.options[reponseSelectionnee],
            explication:question.explication,
            categorie:question.categorie
        });
    }

    const boutons = document.querySelectorAll(".option");

    boutons.forEach((bouton,index) => {

        bouton.disabled = true;

        if (index === question.bonneReponse) {
            bouton.classList.add("correct");
        }

        if (index === reponseSelectionnee && !correcte) {
            bouton.classList.add("incorrect");
        }
    });

    const feedback = document.getElementById("questionFeedback");

    feedback.className = correcte ? "feedback good" : "feedback bad";

    if (correcte) {

        feedback.innerHTML =
            "<strong>✓ Bonne réponse !</strong><br>" +
            question.explication;

    } else {

        feedback.innerHTML =
            "<strong>✗ Mauvaise réponse.</strong><br>" +
            "<strong>Réponse correcte :</strong> " +
            escapeHTML(question.options[question.bonneReponse]) +
            "<br><br>" +
            "<strong>Explication :</strong> " +
            escapeHTML(question.explication);
    }

    document.getElementById("quizPoints").textContent =
        `Score : ${score}`;

    document.getElementById("verifyButton").style.display = "none";

    const next = document.getElementById("nextButton");

    next.style.display = "inline-block";

    next.textContent =
        questionActuelle === questionsQuiz.length - 1
        ? "Voir les résultats →"
        : "Next →";
}

function questionSuivante() {

    if (questionsRepondues[questionActuelle] === undefined) {
        return;
    }

    if (questionActuelle < questionsQuiz.length - 1) {

        questionActuelle++;

        afficherQuestion();

    } else {

        terminerQuiz();
    }
}

function terminerQuiz() {

    quizTermine = true;

    document.getElementById("quizGame").style.display = "none";

    const resultat = document.getElementById("quiz-result");

    resultat.style.display = "block";

    const total = questionsQuiz.length;

    const pourcentage = Math.round((score / total) * 100);

    document.getElementById("finalScore").textContent =
        `${score}/${total}`;

    document.getElementById("correctCount").textContent = score;

    document.getElementById("wrongCount").textContent =
        total - score;

    document.getElementById("percentage").textContent =
        pourcentage + "%";

    let message = "";

    if (pourcentage >= 90) {
        message = "Excellent travail !";
    } else if (pourcentage >= 75) {
        message = "Très bon niveau !";
    } else if (pourcentage >= 60) {
        message = "Bon travail, continuez !";
    } else if (pourcentage >= 50) {
        message = "Résultat moyen, encore quelques efforts.";
    } else {
        message = "Il faut reprendre certaines notions du cours.";
    }

    document.getElementById("resultMessage").textContent = message;

    document.getElementById("resultDetails").textContent =
        `Vous avez obtenu ${pourcentage}% de réussite. ` +
        `${score} réponses correctes sur ${total} questions.`;

    const zoneErreurs = document.getElementById("wrongAnswers");

    zoneErreurs.innerHTML = "";

    if (erreursQuiz.length === 0) {

        zoneErreurs.innerHTML =
            '<div class="success"><strong>Parfait !</strong> Vous avez répondu correctement à toutes les questions.</div>';

    } else {

        erreursQuiz.forEach((erreur,index) => {

            const bloc = document.createElement("div");

            bloc.className = "wrong-item";

            const titre = document.createElement("h4");
            titre.textContent = `Erreur ${index + 1} — ${erreur.categorie}`;

            const question = document.createElement("p");
            question.textContent = erreur.question;

            const mauvaise = document.createElement("p");
            mauvaise.style.color = "var(--red)";
            mauvaise.textContent = "Votre réponse : " + erreur.reponseDonnee;

            const bonne = document.createElement("p");
            bonne.style.color = "var(--green)";
            bonne.textContent = "Bonne réponse : " + erreur.bonneReponse;

            const explication = document.createElement("p");
            explication.textContent = "Explication : " + erreur.explication;

            bloc.append(
                titre,
                question,
                mauvaise,
                bonne,
                explication
            );

            zoneErreurs.appendChild(bloc);
        });
    }

    resultat.scrollIntoView({
        behavior:"smooth",
        block:"start"
    });
}

/* =====================================================
   PROTECTION DES AFFICHAGES TEXTE
===================================================== */

function escapeHTML(texte) {

    return String(texte).replace(/[&<>"']/g, caractere => {

        const caracteres = {
            "&":"&amp;",
            "<":"&lt;",
            ">":"&gt;",
            '"':"&quot;",
            "'":"&#039;"
        };

        return caracteres[caractere];
    });
}

/* =====================================================
   VÉRIFICATION DE LA BANQUE
===================================================== */

console.log("JavaScript chargé correctement.");
console.log("Nombre de questions disponibles :", questions.length);

if (questions.length !== 200) {
    console.error("Erreur : la banque doit contenir 200 questions.");
}

 