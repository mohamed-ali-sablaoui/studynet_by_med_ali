
function toggleSolution(button){
    const solution = button.nextElementSibling;
    const visible = solution.classList.toggle("show");
    button.textContent = visible ? "Masquer la solution" : "Afficher la solution";
}

/* =========================================================
   BANQUE DE 200 QUESTIONS
   10 familles de 20 questions distinctes.
   Les choix sont mélangés à chaque question.
========================================================= */

const questionBank = [];

function makeQuestion(category, question, correct, explanation, distractors){
    const choices = [String(correct), ...distractors.map(String)];
    const unique = [...new Set(choices)];
    while(unique.length < 4){
        unique.push("Aucune des autres propositions");
    }
    const selected = unique.slice(0,4);
    for(let i=selected.length-1;i>0;i--){
        const j=Math.floor(Math.random()*(i+1));
        [selected[i],selected[j]]=[selected[j],selected[i]];
    }
    return {
        category,
        question,
        choices:selected,
        answer:selected.indexOf(String(correct)),
        explanation
    };
}

/* Famille 1 : expressions et calculs (20 questions) */
for(let i=1;i<=20;i++){
    const a=i+3;
    const b=(i%7)+2;
    const c=(i%4)+1;
    const result=a*b+c;
    questionBank.push(makeQuestion(
        "Expressions et calculs",
        `On considère a = ${a}, b = ${b} et c = ${c}. Quelle est la valeur de a × b + c ?`,
        result,
        `La multiplication est prioritaire : ${a} × ${b} = ${a*b}, puis ${a*b} + ${c} = ${result}.`,
        [result+1,result-2,a+b+c]
    ));
}

/* Famille 2 : modulo, chiffres et propriétés numériques (20) */
for(let i=1;i<=20;i++){
    const n=31+i*7;
    const d=(i%9)+2;
    const r=n%d;
    questionBank.push(makeQuestion(
        "Arithmétique et modulo",
        `Quelle est la valeur de ${n} MOD ${d} ?`,
        r,
        `MOD retourne le reste de la division entière. ${n} = ${d} × ${Math.floor(n/d)} + ${r}.`,
        [(r+1)%d,(r+2)%d,Math.floor(n/d)]
    ));
}

/* Famille 3 : traces de boucles (20) */
for(let i=1;i<=20;i++){
    const n=i+3;
    const step=(i%3)+1;
    let sum=0;
    for(let k=1;k<=n;k+=step) sum+=k;
    questionBank.push(makeQuestion(
        "Boucles et traces",
        `On exécute : somme ← 0 ; Pour i de 1 à ${n} Pas ${step} Faire somme ← somme + i. Quelle est la valeur finale de somme ?`,
        sum,
        `Les valeurs successives sont ${Array.from({length:Math.ceil(n/step)},(_,k)=>1+k*step).filter(x=>x<=n).join(", ")}. Leur somme est ${sum}.`,
        [sum+step,sum-1,n*step]
    ));
}

/* Famille 4 : tableaux et indices (20) */
for(let i=1;i<=20;i++){
    const arr=[i+2, i%5+4, i+8, i%7+1, i+5];
    const max=Math.max(...arr);
    const min=Math.min(...arr);
    const sum=arr.reduce((a,b)=>a+b,0);
    const mode=i%3;
    const correct=mode===0?max:mode===1?min:sum;
    const label=mode===0?"maximum":mode===1?"minimum":"somme";
    questionBank.push(makeQuestion(
        "Tableaux",
        `Soit T = [${arr.join(", ")}], indexé à partir de 1. Quelle est la ${label} des éléments ?`,
        correct,
        mode===0?`La plus grande valeur du tableau est ${max}.`:mode===1?`La plus petite valeur du tableau est ${min}.`:`La somme des cinq éléments vaut ${sum}.`,
        [sum,max+min,arr[0]+arr[1]]
    ));
}

/* Famille 5 : complexité (20) */
const complexityCases=[
    {q:"Un algorithme parcourt une seule fois un tableau de n éléments.",a:"O(n)",e:"Chaque élément est traité une fois : le nombre d'opérations est proportionnel à n."},
    {q:"Un algorithme accède directement à T[k] dans un tableau.",a:"O(1)",e:"L'accès par indice est constant dans le modèle classique des tableaux."},
    {q:"Une boucle double parcourt deux fois n éléments avec deux indices indépendants.",a:"O(n²)",e:"Il y a n × n itérations."},
    {q:"Une variable est multipliée par 2 jusqu'à atteindre n.",a:"O(log n)",e:"Le nombre de multiplications est proportionnel au logarithme de n."},
    {q:"Le tri fusion traite n éléments.",a:"O(n log n)",e:"Il divise le problème en deux et fusionne en temps linéaire à chaque niveau."},
    {q:"Un algorithme examine toutes les permutations de n éléments.",a:"O(n!)",e:"Il existe n! permutations de n éléments distincts."},
    {q:"Un algorithme examine tous les sous-ensembles d'un ensemble de n éléments.",a:"O(2ⁿ)",e:"Chaque élément peut être choisi ou non : 2 possibilités indépendantes."},
    {q:"Trois boucles imbriquées parcourent chacune n valeurs.",a:"O(n³)",e:"Le nombre total d'itérations est n × n × n."},
    {q:"La recherche séquentielle dans un tableau non trié est étudiée au pire cas.",a:"O(n)",e:"La valeur peut être absente ou située à la dernière position."},
    {q:"La recherche dichotomique sur un tableau trié est étudiée au pire cas.",a:"O(log n)",e:"L'intervalle est divisé par deux à chaque étape."}
];
for(let i=0;i<20;i++){
    const item=complexityCases[i%complexityCases.length];
    const distractors=["O(1)","O(log n)","O(n)","O(n log n)","O(n²)","O(2ⁿ)"].filter(x=>x!==item.a).slice(0,3);
    questionBank.push(makeQuestion(
        "Analyse de complexité",
        item.q+" Quelle est sa complexité temporelle ?",
        item.a,item.e,distractors
    ));
}

/* Famille 6 : récursivité et récurrences (20) */
for(let i=1;i<=20;i++){
    const n=(i%7)+3;
    const fact=Array.from({length:n},(_,k)=>k+1).reduce((a,b)=>a*b,1);
    const fib=[0,1];
    for(let j=2;j<=n;j++)fib[j]=fib[j-1]+fib[j-2];
    const mode=i%2;
    questionBank.push(makeQuestion(
        "Récursivité",
        mode===0
            ? `Quelle est la valeur de Factorielle(${n}) avec 0! = 1 ?`
            : `Quelle est la valeur de Fibonacci(${n}) si F(0)=0 et F(1)=1 ?`,
        mode===0?fact:fib[n],
        mode===0
            ? `La factorielle multiplie tous les entiers de 1 à ${n}. Le résultat est ${fact}.`
            : `On applique F(k)=F(k-1)+F(k-2) jusqu'aux deux cas de base. F(${n})=${fib[n]}.`,
        mode===0?[fact+1,fact-2,n*n]:[fib[n]+1,Math.max(0,fib[n]-1),n*n]
    ));
}

/* Famille 7 : conditions et logique (20) */
for(let i=1;i<=20;i++){
    const a=i%2===0;
    const b=i%3===0;
    const c=i%5===0;
    const mode=i%4;
    let correct,expr,explain;
    if(mode===0){
        correct=a&&b?"Vrai":"Faux";
        expr=`(${a?"Vrai":"Faux"}) ET (${b?"Vrai":"Faux"})`;
        explain="ET est vrai uniquement lorsque les deux propositions sont vraies.";
    }else if(mode===1){
        correct=a||b?"Vrai":"Faux";
        expr=`(${a?"Vrai":"Faux"}) OU (${b?"Vrai":"Faux"})`;
        explain="OU est vrai lorsqu'au moins une des propositions est vraie.";
    }else if(mode===2){
        correct=!a?"Vrai":"Faux";
        expr=`NON (${a?"Vrai":"Faux"})`;
        explain="NON inverse la valeur logique.";
    }else{
        correct=(a&&b)||c?"Vrai":"Faux";
        expr=`((${a?"Vrai":"Faux"}) ET (${b?"Vrai":"Faux"})) OU (${c?"Vrai":"Faux"})`;
        explain="On évalue d'abord l'expression entre parenthèses, puis OU.";
    }
    questionBank.push(makeQuestion(
        "Logique et conditions",
        `Quelle est la valeur de l'expression ${expr} ?`,
        correct,explain,
        [correct==="Vrai"?"Faux":"Vrai","Indéterminée","Erreur de syntaxe"]
    ));
}

/* Famille 8 : tris (20) */
for(let i=1;i<=20;i++){
    const n=i+3;
    const arr=Array.from({length:n},(_,k)=>((k*7+i*3)%17)+1);
    const sorted=[...arr].sort((a,b)=>a-b);
    const mode=i%4;
    let correct,q,explain;
    if(mode===0){
        correct=sorted[0];
        q=`Quel est le premier élément après un tri croissant de [${arr.join(", ")}] ?`;
        explain=`Après tri croissant, la plus petite valeur ${correct} vient en premier.`;
    }else if(mode===1){
        correct=sorted[sorted.length-1];
        q=`Quel est le dernier élément après un tri croissant de [${arr.join(", ")}] ?`;
        explain=`Après tri croissant, la plus grande valeur ${correct} vient en dernier.`;
    }else if(mode===2){
        correct=sorted.length;
        q=`Combien d'éléments contient le tableau [${arr.join(", ")}] après son tri ?`;
        explain="Le tri réorganise les éléments sans modifier le nombre d'éléments.";
    }else{
        correct=sorted[Math.floor(sorted.length/2)];
        q=`Quelle est la valeur centrale du tableau trié [${arr.join(", ")}] ?`;
        explain=`Après tri, la valeur à la position centrale choisie est ${correct}.`;
    }
    questionBank.push(makeQuestion(
        "Algorithmes de tri",
        q,correct,explain,[correct+1,Math.max(0,correct-1),correct+3]
    ));
}

/* Famille 9 : piles, files et graphes (20) */
for(let i=1;i<=20;i++){
    const mode=i%4;
    let q,correct,explain,distractors;
    if(mode===0){
        const values=[i,i+1,i+2];
        q=`On empile successivement ${values.join(", ")} dans une pile vide. Quel élément sera dépilé en premier ?`;
        correct=values[2];
        explain="Une pile suit LIFO : le dernier élément ajouté sort en premier.";
        distractors=[values[0],values[1],"Aucun"];
    }else if(mode===1){
        const values=[i,i+1,i+2];
        q=`On enfile successivement ${values.join(", ")} dans une file vide. Quel élément sera défilé en premier ?`;
        correct=values[0];
        explain="Une file suit FIFO : le premier élément ajouté sort en premier.";
        distractors=[values[1],values[2],"Aucun"];
    }else if(mode===2){
        q="Quel parcours de graphe utilise naturellement une file ?";
        correct="BFS";
        explain="Le parcours en largeur utilise une file pour traiter les sommets par niveaux.";
        distractors=["DFS","Tri fusion","Recherche dichotomique"];
    }else{
        q="Quel parcours de graphe utilise naturellement une pile ou la récursivité ?";
        correct="DFS";
        explain="Le parcours en profondeur explore un chemin avant de revenir en arrière.";
        distractors=["BFS","Tri par sélection","Dijkstra uniquement"];
    }
    questionBank.push(makeQuestion("Structures et graphes",q,correct,explain,distractors));
}

/* Famille 10 : méthodes avancées et raisonnement (20) */
const advanced=[
    ["Quel paradigme mémorise les résultats de sous-problèmes qui se chevauchent ?","Programmation dynamique","Elle évite de recalculer les mêmes sous-problèmes.","Force brute","Tri par sélection","Recherche séquentielle"],
    ["Quelle stratégie divise un problème en sous-problèmes puis combine leurs résultats ?","Diviser pour régner","Cette stratégie comporte division, résolution et combinaison.","Hachage","Parcours en largeur","Recherche linéaire"],
    ["Quel algorithme calcule les plus courts chemins avec des poids non négatifs depuis une source ?","Dijkstra","Dijkstra suppose des poids non négatifs.","Floyd-Warshall uniquement","Tri fusion","Kruskal uniquement"],
    ["Quel algorithme accepte des arêtes de poids négatifs et détecte les cycles négatifs accessibles ?","Bellman-Ford","Bellman-Ford effectue des relaxations répétées et peut détecter un cycle négatif accessible.","Dijkstra","BFS","Tri rapide"],
    ["Quelle structure est adaptée à une politique premier entré, premier sorti ?","File","Une file suit FIFO.","Pile","Arbre binaire","Ensemble"],
    ["Quelle structure est adaptée à une politique dernier entré, premier sorti ?","Pile","Une pile suit LIFO.","File","Graphe","Tableau trié"],
    ["Quelle propriété garantit qu'un tri conserve l'ordre relatif des éléments de même clé ?","Stabilité","Un tri stable conserve l'ordre relatif des éléments égaux selon la clé.","Récursivité","Complétude","Optimalité spatiale"],
    ["Quelle méthode permet de prouver une propriété pour tous les entiers naturels à partir d'un cas initial et d'une étape héréditaire ?","Récurrence","La preuve par récurrence repose sur initialisation et hérédité.","Contradiction uniquement","Hachage","Énumération"],
    ["Dans un graphe non pondéré, quel algorithme trouve les distances minimales en nombre d'arêtes ?","BFS","Le parcours en largeur explore par couches de distance.","DFS","Dijkstra avec poids négatifs","Tri topologique"],
    ["Quel ordre est produit par un tri topologique ?","Un ordre respectant les dépendances d'un graphe orienté acyclique","Chaque sommet précède ses successeurs imposés par les arcs.","Un ordre de poids croissant","Un ordre lexicographique obligatoire","Un ordre circulaire"],
    ["Que signifie O(log n) dans une recherche dichotomique ?","Le nombre d'étapes croît comme le logarithme de la taille","La taille de l'intervalle est divisée par deux à chaque étape.","Le nombre d'étapes est constant","Le nombre d'étapes est quadratique","Le nombre d'étapes est exponentiel"],
    ["Quelle est la condition essentielle d'application de la recherche dichotomique classique ?","Les données doivent être triées","La propriété d'ordre permet d'éliminer une moitié à chaque étape.","Le tableau doit contenir des nombres positifs","Les valeurs doivent être distinctes","Le tableau doit être de taille paire"],
    ["Quel est le rôle d'un invariant de boucle ?","Décrire une propriété vraie avant et après chaque itération","Il aide à démontrer la correction de la boucle.","Accélérer automatiquement le programme","Stocker les résultats dans un tableau","Trier les données"],
    ["Que démontre une preuve de terminaison ?","Que l'algorithme finit après un nombre fini d'étapes","Elle justifie l'arrêt de l'exécution.","Que la mémoire est constante","Que le résultat est toujours optimal","Que l'entrée est triée"],
    ["Quel est le coût temporel classique du tri fusion ?","O(n log n)","Il existe log n niveaux et chaque niveau effectue un travail total linéaire.","O(n²)","O(2ⁿ)","O(1)"],
    ["Quel est le pire cas du tri rapide classique avec un pivot très déséquilibré ?","O(n²)","Un partitionnement en sous-problèmes de tailles n-1 et 0 peut produire un coût quadratique.","O(log n)","O(n)","O(1)"],
    ["Que mesure la complexité spatiale auxiliaire ?","La mémoire supplémentaire utilisée par l'algorithme","Elle ne doit pas être confondue avec la taille de l'entrée.","Le nombre de comparaisons","Le nombre de résultats","La durée réseau"],
    ["Quel paradigme abandonne un choix lorsqu'il mène à une impasse ?","Backtracking","Le retour sur trace explore une autre possibilité après un échec.","Tri fusion","Hachage","Recherche dichotomique"],
    ["Quel est le principe d'un algorithme glouton ?","Choisir localement une option selon un critère à chaque étape","La validité de l'optimalité doit être démontrée pour le problème considéré.","Essayer toutes les permutations","Mémoriser tous les sous-problèmes","Diviser chaque tableau en deux"],
    ["Que représente une réduction polynomiale d'un problème A vers B ?","Une transformation calculable en temps polynomial qui préserve les réponses","Elle permet de comparer la difficulté de problèmes.","Une réduction de mémoire uniquement","Un tri en temps linéaire","Une preuve de P = NP"]
];
for(let i=0;i<20;i++){
    const item=advanced[i];
    questionBank.push(makeQuestion(
        "Conception et théorie des algorithmes",
        item[0],item[1],item[2],[item[3],item[4],item[5]]
    ));
}

/* Vérification de la taille de la banque */
if(questionBank.length !== 200){
    console.error("La banque de questions doit contenir exactement 200 questions.");
}

let quizQuestions=[];
let currentQuestion=0;
let selectedAnswer=null;
let answerVerified=false;
let quizScore=0;
let wrongQuestions=[];

function shuffleArray(array){
    const copy=[...array];
    for(let i=copy.length-1;i>0;i--){
        const j=Math.floor(Math.random()*(i+1));
        [copy[i],copy[j]]=[copy[j],copy[i]];
    }
    return copy;
}

function startQuiz(){
    const count=parseInt(document.getElementById("questionCount").value,10);
    if(!Number.isInteger(count)||count<20||count>40){
        alert("Choisissez un nombre entre 20 et 40.");
        return;
    }

    quizQuestions=shuffleArray(questionBank).slice(0,count);
    currentQuestion=0;
    selectedAnswer=null;
    answerVerified=false;
    quizScore=0;
    wrongQuestions=[];

    document.getElementById("quizConfig").style.display="none";
    document.getElementById("quizResult").style.display="none";
    document.getElementById("quizArea").style.display="block";

    renderQuestion();
}

function renderQuestion(){
    const q=quizQuestions[currentQuestion];
    selectedAnswer=null;
    answerVerified=false;

    document.getElementById("questionNumber").textContent=
        `Question ${currentQuestion+1} / ${quizQuestions.length}`;
    document.getElementById("quizCategory").textContent=q.category;
    document.getElementById("questionText").textContent=q.question;
    document.getElementById("quizProgressBar").style.width=
        `${(currentQuestion/quizQuestions.length)*100}%`;
    document.getElementById("answeredStatus").textContent="Choisissez une seule réponse.";

    const optionsArea=document.getElementById("optionsArea");
    optionsArea.innerHTML="";

    q.choices.forEach((choice,index)=>{
        const option=document.createElement("div");
        option.className="option";
        option.textContent=String.fromCharCode(65+index)+". "+choice;
        option.setAttribute("role","button");
        option.setAttribute("tabindex","0");
        option.setAttribute("aria-pressed","false");

        option.addEventListener("click",()=>selectOption(index));
        option.addEventListener("keydown",event=>{
            if(event.key==="Enter"||event.key===" "){
                event.preventDefault();
                selectOption(index);
            }
        });

        optionsArea.appendChild(option);
    });

    const feedback=document.getElementById("feedback");
    feedback.className="feedback";
    feedback.textContent="";

    document.getElementById("verifyBtn").style.display="inline-block";
    document.getElementById("nextBtn").style.display="none";
}

function selectOption(index){
    if(answerVerified)return;

    selectedAnswer=index;
    const options=document.querySelectorAll("#optionsArea .option");

    options.forEach((option,i)=>{
        option.classList.toggle("selected",i===index);
        option.setAttribute("aria-pressed",i===index?"true":"false");
    });

    document.getElementById("answeredStatus").textContent=
        "Réponse sélectionnée.";
}

function verifyAnswer(){
    if(answerVerified)return;

    if(selectedAnswer===null){
        alert("Veuillez sélectionner une réponse avant de vérifier.");
        return;
    }

    const q=quizQuestions[currentQuestion];
    const correct=selectedAnswer===q.answer;
    answerVerified=true;

    const options=document.querySelectorAll("#optionsArea .option");
    options.forEach((option,index)=>{
        option.classList.add("disabled");

        if(index===q.answer){
            option.classList.add("correct");
        }

        if(index===selectedAnswer&&!correct){
            option.classList.add("wrong");
        }
    });

    const feedback=document.getElementById("feedback");
    feedback.className="feedback show "+(correct?"good":"bad");

    if(correct){
        quizScore++;
        feedback.innerHTML=
            "<strong>Bonne réponse !</strong><br>"+q.explanation;
    }else{
        wrongQuestions.push({
            question:q.question,
            userAnswer:q.choices[selectedAnswer],
            correctAnswer:q.choices[q.answer],
            explanation:q.explanation
        });

        feedback.innerHTML=
            "<strong>Réponse incorrecte.</strong><br>"+
            "Bonne réponse : <strong>"+escapeHTML(q.choices[q.answer])+
            "</strong><br>"+escapeHTML(q.explanation);
    }

    document.getElementById("answeredStatus").textContent=
        correct?"Réponse correcte.":"Réponse incorrecte.";

    document.getElementById("verifyBtn").style.display="none";
    document.getElementById("nextBtn").style.display="inline-block";
    document.getElementById("quizProgressBar").style.width=
        `${((currentQuestion+1)/quizQuestions.length)*100}%`;
}

function nextQuestion(){
    if(!answerVerified)return;

    currentQuestion++;

    if(currentQuestion<quizQuestions.length){
        renderQuestion();
    }else{
        showResult();
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

function showResult(){
    document.getElementById("quizArea").style.display="none";
    document.getElementById("quizResult").style.display="block";

    const total=quizQuestions.length;
    const percentage=Math.round((quizScore/total)*100);
    const grade=(quizScore/total*20).toFixed(2);

    document.getElementById("scoreDisplay").textContent=
        `${quizScore} / ${total}`;

    let appreciation;

    if(percentage>=90){
        appreciation="Excellent résultat : maîtrise remarquable.";
    }else if(percentage>=80){
        appreciation="Très bon résultat : très bonne maîtrise.";
    }else if(percentage>=70){
        appreciation="Bon résultat : quelques notions restent à consolider.";
    }else if(percentage>=60){
        appreciation="Résultat satisfaisant, mais plusieurs points méritent une révision.";
    }else if(percentage>=50){
        appreciation="Résultat moyen : reprenez les chapitres difficiles.";
    }else{
        appreciation="Des révisions approfondies sont nécessaires.";
    }

    document.getElementById("resultSummary").innerHTML=
        `<p><strong>${percentage}% de réussite</strong></p>
         <p>Note sur 20 : <strong>${grade}/20</strong></p>
         <p>${appreciation}</p>
         <p>Réponses correctes : ${quizScore} · Réponses incorrectes : ${total-quizScore}</p>`;

    const review=document.getElementById("wrongAnswers");

    if(wrongQuestions.length===0){
        review.innerHTML=
            "<div class='success'><strong>Félicitations !</strong><br>Aucune erreur dans cette évaluation.</div>";
    }else{
        review.innerHTML="<h3 style='margin:25px 0 12px'>Correction des réponses incorrectes</h3>";

        wrongQuestions.forEach((item,index)=>{
            const card=document.createElement("div");
            card.className="review-item";

            const title=document.createElement("strong");
            title.textContent=`Erreur ${index+1} : ${item.question}`;

            const user=document.createElement("p");
            user.textContent="Votre réponse : "+item.userAnswer;

            const correct=document.createElement("p");
            correct.textContent="Bonne réponse : "+item.correctAnswer;
            correct.style.color="var(--green)";
            correct.style.fontWeight="bold";

            const explanation=document.createElement("p");
            explanation.textContent="Explication : "+item.explanation;

            card.append(title,user,correct,explanation);
            review.appendChild(card);
        });
    }
}

function restartQuiz(){
    document.getElementById("quizResult").style.display="none";
    document.getElementById("quizConfig").style.display="block";
    document.getElementById("quizArea").style.display="none";
}
