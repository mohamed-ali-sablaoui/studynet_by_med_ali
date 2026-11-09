 
/* =====================================================
   EXERCICES : AFFICHER / MASQUER LES CORRECTIONS
===================================================== */
function toggleSolution(button){
    const solution = button.nextElementSibling;
    solution.classList.toggle("show");
    button.textContent = solution.classList.contains("show")
        ? "Masquer la correction"
        : "Afficher la correction";
}

/* =====================================================
   BANQUE DE QUESTIONS : 40 FAMILLES × 5 VARIANTES
   TOTAL : 200 QUESTIONS
===================================================== */
const questionBank = [];

function addQuestion(question, options, answer, explanation){
    questionBank.push({
        question,
        options,
        answer,
        explanation
    });
}

/* 1. Types entiers */
for(let i=0;i<5;i++){
    const values=[10,25,100,250,500];
    const v=values[i];
    addQuestion(
        `Quel type C est principalement utilisé pour déclarer un entier comme ${v} ?`,
        ["int","float","char","void"],
        0,
        "int est le type entier usuel en C."
    );
}

/* 2. Affichage */
for(let i=0;i<5;i++){
    const values=[10,20,30,40,50];
    const v=values[i];
    addQuestion(
        `Quel spécificateur printf permet d'afficher la valeur entière ${v} de type int ?`,
        ["%f","%d","%s","%c"],
        1,
        "%d est utilisé pour afficher un int avec printf."
    );
}

/* 3. Saisie entière */
for(let i=0;i<5;i++){
    addQuestion(
        "Quel argument faut-il transmettre à scanf pour lire une variable entière n ?",
        ["n","&n","*n","int(n)"],
        1,
        "scanf doit recevoir l'adresse de la variable : &n."
    );
}

/* 4. Division entière */
for(let i=0;i<5;i++){
    const a=[7,9,11,15,19][i];
    addQuestion(
        `Quel est le résultat de ${a} / 2 en C lorsque les deux opérandes sont de type int ?`,
        [String(Math.floor(a/2)),String(a/2),String(a),String(a%2)],
        0,
        "La division entre deux entiers donne un quotient entier tronqué vers zéro."
    );
}

/* 5. Modulo */
for(let i=0;i<5;i++){
    const a=[11,14,17,23,29][i];
    addQuestion(
        `Quelle est la valeur de ${a} % 5 ?`,
        [String(a%5),String(Math.floor(a/5)),String(a),String(5)],
        0,
        "L'opérateur % donne le reste de la division entière."
    );
}

/* 6. Pair / impair */
for(let i=0;i<5;i++){
    const n=[8,13,22,31,44][i];
    const correct=n%2===0?"Pair":"Impair";
    addQuestion(
        `Le nombre ${n} est-il pair ou impair ?`,
        ["Pair","Impair","Premier","Négatif"],
        correct==="Pair"?0:1,
        "Un entier est pair si son reste modulo 2 est égal à zéro."
    );
}

/* 7. Comparaison */
for(let i=0;i<5;i++){
    const a=[5,8,12,20,30][i];
    const b=a+3;
    addQuestion(
        `Quelle expression vérifie correctement que ${a} est inférieur à ${b} ?`,
        [`${a} > ${b}`,`${a} == ${b}`,`${a} < ${b}`,`${a} != ${b}`],
        2,
        "L'opérateur < teste si la valeur de gauche est strictement inférieure à celle de droite."
    );
}

/* 8. ET logique */
for(let i=0;i<5;i++){
    addQuestion(
        "Que signifie l'opérateur logique && en C ?",
        ["OU logique","ET logique","NON logique","OU exclusif bit à bit"],
        1,
        "&& représente le ET logique. Les deux conditions doivent être vraies."
    );
}

/* 9. OU logique */
for(let i=0;i<5;i++){
    addQuestion(
        "Que signifie l'opérateur || en C ?",
        ["ET logique","Affectation","OU logique","Décalage"],
        2,
        "|| représente le OU logique : au moins une condition doit être vraie."
    );
}

/* 10. Incrémentation */
for(let i=0;i<5;i++){
    const n=[2,4,6,8,10][i];
    addQuestion(
        `Si int x = ${n}; puis x++; quelle est la nouvelle valeur de x ?`,
        [String(n),String(n+1),String(n-1),String(n+2)],
        1,
        "x++ incrémente la variable de 1."
    );
}

/* 11. Conditions */
for(let i=0;i<5;i++){
    addQuestion(
        "Quelle instruction permet de choisir entre plusieurs cas selon une valeur entière ?",
        ["for","switch","sizeof","typedef"],
        1,
        "switch/case permet de sélectionner un bloc selon une expression entière ou énumérée."
    );
}

/* 12. Boucle for */
for(let i=0;i<5;i++){
    const n=[3,4,5,6,7][i];
    addQuestion(
        `Combien d'itérations effectue for(int i=0; i<${n}; i++) ?`,
        [String(n),String(n+1),String(n-1),"Une seule"],
        0,
        `La boucle commence à 0 et s'arrête avant ${n}, donc elle effectue ${n} itérations.`
    );
}

/* 13. Boucle while */
for(let i=0;i<5;i++){
    addQuestion(
        "Quand la condition d'une boucle while est-elle vérifiée ?",
        ["Après le bloc","Avant chaque itération","Seulement à la fin du programme","Jamais"],
        1,
        "while vérifie la condition avant d'exécuter le corps de la boucle."
    );
}

/* 14. do while */
for(let i=0;i<5;i++){
    addQuestion(
        "Quel est l'avantage principal de do while ?",
        ["La boucle s'exécute au moins une fois","Elle ne possède pas de condition","Elle trie un tableau","Elle libère la mémoire"],
        0,
        "La condition est testée après l'exécution du corps."
    );
}

/* 15. break */
for(let i=0;i<5;i++){
    addQuestion(
        "Quel est le rôle de break dans une boucle ?",
        ["Ignorer une itération","Arrêter immédiatement la boucle","Recommencer le programme","Incrémenter le compteur"],
        1,
        "break sort immédiatement de la boucle la plus proche."
    );
}

/* 16. continue */
for(let i=0;i<5;i++){
    addQuestion(
        "Quel est le rôle de continue ?",
        ["Terminer le programme","Sortir de toutes les boucles","Passer à l'itération suivante","Déclarer une variable"],
        2,
        "continue saute le reste de l'itération actuelle."
    );
}

/* 17. Fonctions */
for(let i=0;i<5;i++){
    addQuestion(
        "Quel mot-clé indique qu'une fonction ne retourne aucune valeur ?",
        ["int","void","return","static"],
        1,
        "void indique l'absence de valeur de retour."
    );
}

/* 18. Retour */
for(let i=0;i<5;i++){
    addQuestion(
        "Quelle instruction permet de retourner une valeur depuis une fonction ?",
        ["break","continue","return","include"],
        2,
        "return termine l'exécution de la fonction et fournit éventuellement une valeur."
    );
}

/* 19. Passage par valeur */
for(let i=0;i<5;i++){
    addQuestion(
        "Comment les arguments sont-ils transmis aux fonctions en C ?",
        ["Toujours par référence","Par valeur","Uniquement par pointeur","Par copie de fichier"],
        1,
        "Le C transmet les arguments par valeur. Pour modifier un objet du programme appelant, on transmet généralement son adresse."
    );
}

/* 20. Tableaux */
for(let i=0;i<5;i++){
    const n=[3,4,5,6,8][i];
    addQuestion(
        `Si int t[${n}] est déclaré, quel est le premier indice valide ?`,
        ["1","-1","0",String(n)],
        2,
        "En C, les indices des tableaux commencent à zéro."
    );
}

/* 21. Dernier indice */
for(let i=0;i<5;i++){
    const n=[4,5,6,7,10][i];
    addQuestion(
        `Quel est le dernier indice valide de int t[${n}] ?`,
        [String(n),String(n-1),"1","0"],
        1,
        "Pour un tableau de taille n, les indices valides vont de 0 à n-1."
    );
}

/* 22. sizeof */
for(let i=0;i<5;i++){
    addQuestion(
        "Que retourne sizeof(variable) ?",
        ["Le nombre d'éléments","La taille en octets","L'adresse mémoire","La valeur de la variable"],
        1,
        "sizeof donne la taille en octets du type ou de l'objet."
    );
}

/* 23. Chaînes */
for(let i=0;i<5;i++){
    addQuestion(
        "Quel caractère termine une chaîne de caractères C ?",
        ["\\n","\\t","\\0","\\r"],
        2,
        "Une chaîne C se termine par le caractère nul \\0."
    );
}

/* 24. strlen */
for(let i=0;i<5;i++){
    addQuestion(
        "Quelle fonction permet de calculer la longueur d'une chaîne C ?",
        ["sizeof","strlen","strcmp","strcat"],
        1,
        "strlen, déclarée dans string.h, retourne la longueur avant le caractère nul."
    );
}

/* 25. strcmp */
for(let i=0;i<5;i++){
    addQuestion(
        "Que signifie strcmp(a,b) == 0 ?",
        ["a est plus longue","a et b sont égales","a est vide","b est NULL obligatoirement"],
        1,
        "strcmp retourne zéro lorsque les chaînes comparées sont identiques."
    );
}

/* 26. Pointeurs */
for(let i=0;i<5;i++){
    addQuestion(
        "Que représente l'expression &x en C ?",
        ["La valeur de x","L'adresse de x","La taille de x","Le type de x"],
        1,
        "L'opérateur & fournit l'adresse d'un objet."
    );
}

/* 27. Déréférencement */
for(let i=0;i<5;i++){
    addQuestion(
        "Que permet l'opérateur * appliqué à un pointeur valide ?",
        ["Déréférencer le pointeur","Calculer sa taille","Supprimer le pointeur","Compiler le programme"],
        0,
        "L'opérateur * accède à l'objet désigné par le pointeur."
    );
}

/* 28. NULL */
for(let i=0;i<5;i++){
    addQuestion(
        "Que représente NULL pour un pointeur ?",
        ["Une adresse toujours valide","Un pointeur qui ne désigne aucun objet","Le premier élément d'un tableau","Un entier positif"],
        1,
        "NULL représente une valeur de pointeur nulle."
    );
}

/* 29. malloc */
for(let i=0;i<5;i++){
    addQuestion(
        "Quelle fonction permet d'allouer dynamiquement un bloc mémoire ?",
        ["printf","malloc","strlen","scanf"],
        1,
        "malloc est déclarée dans stdlib.h et réserve un bloc mémoire."
    );
}

/* 30. free */
for(let i=0;i<5;i++){
    addQuestion(
        "Quelle fonction libère un bloc obtenu avec malloc ?",
        ["delete","remove","free","close"],
        2,
        "free libère un bloc alloué dynamiquement."
    );
}

/* 31. calloc */
for(let i=0;i<5;i++){
    addQuestion(
        "Quelle particularité possède calloc par rapport à malloc ?",
        ["Elle trie les données","Elle initialise les octets du bloc à zéro","Elle ouvre un fichier","Elle retourne toujours NULL"],
        1,
        "calloc réserve un tableau et initialise les octets du bloc à zéro."
    );
}

/* 32. Structures */
for(let i=0;i<5;i++){
    addQuestion(
        "Quel mot-clé permet de définir une structure en C ?",
        ["class","struct","object","record"],
        1,
        "struct permet de définir une structure composée de plusieurs champs."
    );
}

/* 33. Accès structure */
for(let i=0;i<5;i++){
    addQuestion(
        "Quel opérateur permet d'accéder à un champ via une variable struct ?",
        ["->",".","&","*"],
        1,
        "L'opérateur point permet d'accéder au champ d'une variable structure."
    );
}

/* 34. Pointeur structure */
for(let i=0;i<5;i++){
    addQuestion(
        "Quel opérateur permet d'accéder à un champ via un pointeur vers struct ?",
        [".","->","%","::"],
        1,
        "L'opérateur -> accède au champ d'une structure via son pointeur."
    );
}

/* 35. Fichiers */
for(let i=0;i<5;i++){
    addQuestion(
        "Quelle fonction ouvre un fichier en C ?",
        ["fopen","openfile","file","scanf"],
        0,
        "fopen ouvre un flux associé à un fichier."
    );
}

/* 36. Fermeture */
for(let i=0;i<5;i++){
    addQuestion(
        "Quelle fonction ferme un flux fichier ouvert avec fopen ?",
        ["free","fclose","closefile","remove"],
        1,
        "fclose ferme le flux et effectue les opérations de vidage nécessaires."
    );
}

/* 37. Préprocesseur */
for(let i=0;i<5;i++){
    addQuestion(
        "Quel est le rôle de #include ?",
        ["Déclarer une boucle","Inclure les déclarations d'un en-tête","Libérer la mémoire","Créer une fonction"],
        1,
        "#include est une directive du préprocesseur."
    );
}

/* 38. Énumérations */
for(let i=0;i<5;i++){
    addQuestion(
        "Quel mot-clé définit une énumération ?",
        ["union","enum","typedef","static"],
        1,
        "enum définit un type énuméré."
    );
}

/* 39. Complexité */
for(let i=0;i<5;i++){
    addQuestion(
        "Quelle est la complexité d'un parcours simple de n éléments ?",
        ["O(1)","O(log n)","O(n)","O(n²)"],
        2,
        "Un parcours simple examine chaque élément une fois : O(n)."
    );
}

/* 40. Compilation */
for(let i=0;i<5;i++){
    addQuestion(
        "Quel outil transforme habituellement un fichier source C en programme exécutable ?",
        ["GCC","HTML","CSS","SQL"],
        0,
        "GCC est un compilateur qui permet de compiler et lier des programmes C."
    );
}

/* Vérification de la taille réelle de la banque */
if(questionBank.length !== 200){
    console.error("La banque doit contenir 200 questions :", questionBank.length);
}

/* =====================================================
   LOGIQUE DU QUIZ
===================================================== */
let quizQuestions = [];
let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;
let hasAnswered = false;
let wrongAnswers = [];

function shuffle(array){
    const result = [...array];

    for(let i=result.length-1;i>0;i--){
        const j=Math.floor(Math.random()*(i+1));
        [result[i],result[j]]=[result[j],result[i]];
    }

    return result;
}

function startQuiz(){
    const count = Number(document.getElementById("questionCount").value);

    quizQuestions = shuffle(questionBank).slice(0,count);
    currentQuestion = 0;
    score = 0;
    selectedAnswer = null;
    hasAnswered = false;
    wrongAnswers = [];

    document.getElementById("quizConfig").style.display="none";
    document.getElementById("quizResult").style.display="none";
    document.getElementById("quizGame").style.display="block";

    showQuestion();
}

function showQuestion(){
    const q=quizQuestions[currentQuestion];

    selectedAnswer=null;
    hasAnswered=false;

    document.getElementById("questionCounter").textContent =
        `Question ${currentQuestion+1} / ${quizQuestions.length}`;

    document.getElementById("scoreCounter").textContent =
        `Score : ${score}`;

    document.getElementById("quizProgressBar").style.width =
        `${(currentQuestion/quizQuestions.length)*100}%`;

    document.getElementById("questionText").textContent=q.question;

    const optionsContainer=document.getElementById("optionsContainer");
    optionsContainer.innerHTML="";

    q.options.forEach((option,index)=>{
        const div=document.createElement("div");
        div.className="option";
        div.textContent=String.fromCharCode(65+index)+". "+option;
        div.onclick=()=>selectOption(index);
        optionsContainer.appendChild(div);
    });

    const feedback=document.getElementById("feedback");
    feedback.className="feedback";
    feedback.textContent="";

    const button=document.getElementById("validateBtn");
    button.textContent="Vérifier";
    button.disabled=true;
}

function selectOption(index){
    if(hasAnswered) return;

    selectedAnswer=index;

    document.querySelectorAll(".option").forEach((option,i)=>{
        option.classList.toggle("selected",i===index);
    });

    document.getElementById("validateBtn").disabled=false;
}

function validateAnswer(){
    if(!hasAnswered){
        if(selectedAnswer===null) return;

        hasAnswered=true;

        const q=quizQuestions[currentQuestion];
        const options=document.querySelectorAll(".option");
        const feedback=document.getElementById("feedback");

        if(selectedAnswer===q.answer){
            score++;
            options[selectedAnswer].classList.add("correct");
            feedback.className="feedback show good";
            feedback.innerHTML="<strong>Bonne réponse !</strong><br>"+q.explanation;
        }else{
            options[selectedAnswer].classList.add("wrong");
            options[q.answer].classList.add("correct");

            feedback.className="feedback show bad";
            feedback.innerHTML=
                "<strong>Réponse incorrecte.</strong><br>"+
                "Bonne réponse : "+q.options[q.answer]+".<br>"+
                q.explanation;

            wrongAnswers.push({
                question:q.question,
                chosen:q.options[selectedAnswer],
                correct:q.options[q.answer],
                explanation:q.explanation
            });
        }

        document.getElementById("scoreCounter").textContent =
            `Score : ${score}`;

        const button=document.getElementById("validateBtn");
        button.textContent=
            currentQuestion===quizQuestions.length-1
            ? "Voir le résultat"
            : "Question suivante";

    }else{
        currentQuestion++;

        if(currentQuestion<quizQuestions.length){
            showQuestion();
        }else{
            showResult();
        }
    }
}

function showResult(){
    document.getElementById("quizGame").style.display="none";
    document.getElementById("quizResult").style.display="block";

    const total=quizQuestions.length;
    const percentage=Math.round((score/total)*100);

    document.getElementById("finalScore").textContent=percentage+"%";

    let message="Continue à t'entraîner pour améliorer ton niveau.";

    if(percentage>=90){
        message="Excellent travail ! Tu maîtrises très bien les notions évaluées.";
    }else if(percentage>=75){
        message="Très bon résultat ! Quelques notions restent à renforcer.";
    }else if(percentage>=50){
        message="Bon début. Révise les chapitres où tu as rencontré des difficultés.";
    }

    document.getElementById("resultSummary").innerHTML=
        `<strong>${score} bonnes réponses sur ${total}</strong><br>${message}`;

    const review=document.getElementById("reviewContainer");
    review.innerHTML="";

    if(wrongAnswers.length===0){
        review.innerHTML="<div class='success'>Parfait ! Aucune erreur.</div>";
    }else{
        wrongAnswers.forEach((item,index)=>{
            const div=document.createElement("div");
            div.className="review-item";

            const title=document.createElement("strong");
            title.textContent=`${index+1}. ${item.question}`;

            const chosen=document.createElement("p");
            chosen.textContent="Ta réponse : "+item.chosen;

            const correct=document.createElement("p");
            correct.textContent="Bonne réponse : "+item.correct;

            const explanation=document.createElement("p");
            explanation.textContent="Explication : "+item.explanation;

            div.append(title,chosen,correct,explanation);
            review.appendChild(div);
        });
    }
}

function quitQuiz(){
    if(confirm("Voulez-vous vraiment quitter le quiz ?")){
        document.getElementById("quizGame").style.display="none";
        document.getElementById("quizConfig").style.display="block";
    }
}

function restartQuiz(){
    document.getElementById("quizResult").style.display="none";
    document.getElementById("quizConfig").style.display="block";
}
 