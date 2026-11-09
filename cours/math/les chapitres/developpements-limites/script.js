 /* =====================================================
   1. AFFICHAGE DES CORRECTIONS DES EXERCICES
===================================================== */

function toggleSolution(button){
  const solution=button.nextElementSibling;
  solution.classList.toggle("show");
  button.textContent=solution.classList.contains("show")
    ?"Masquer la correction"
    :"Afficher la correction";

  if(solution.classList.contains("show")){
    renderMath();
  }
}

/* =====================================================
   2. GESTION DE MATHJAX
===================================================== */

function renderMath(){
  if(window.MathJax && MathJax.typesetPromise){
    MathJax.typesetPromise().catch(()=>{});
  }
}

window.addEventListener("load",renderMath);

/* =====================================================
   3. BANQUE DE 200 QUESTIONS
===================================================== */

let questionBank=[];

function addQuestion(question,options,correct,explanation){
  questionBank.push({
    question,
    options,
    correct,
    explanation
  });
}

function generateQuestionBank(){

  questionBank=[];

  /* Famille 1 : DL de l'exponentielle (10 questions) */
  const expValues=[
    [1,1,"1 + x + o(x)"],
    [2,2,"1 + x + x²/2 + o(x²)"],
    [3,6,"1 + x + x²/2 + x³/6 + o(x³)"],
    [4,24,"1 + x + x²/2 + x³/6 + x⁴/24 + o(x⁴)"],
    [5,120,"1 + x + x²/2 + x³/6 + x⁴/24 + x⁵/120 + o(x⁵)"]
  ];

  expValues.forEach((item,i)=>{
    const n=i+1;
    addQuestion(
      "Quel est le développement limité de eˣ à l'ordre "+n+" ?",
      [
        item[2],
        "1 + x + x² + o(x"+n+")",
        "x + x²/2 + o(x"+n+")",
        "1 - x + x²/2 + o(x"+n+")"
      ],
      0,
      "On utilise la formule de Taylor-Young : eˣ = 1 + x + x²/2! + x³/3! + ... + xⁿ/n! + o(xⁿ)."
    );
  });

  /* Famille 2 : logarithme (10 questions) */
  const logValues=[
    ["x","x-x²/2","x-x²/2+x³/3"],
    ["2x","2x-2x²","2x-2x²+8x³/3"],
    ["3x","3x-9x²/2","3x-9x²/2+9x³"],
    ["x/2","x/2-x²/8","x/2-x²/8+x³/24"],
    ["-x","-x-x²/2","-x-x²/2-x³/3"]
  ];

  logValues.forEach((v,i)=>{
    const n=i%2===0?2:3;
    const correct=v[n===2?1:2];
    addQuestion(
      "Quel est le DL à l'ordre "+n+" de ln(1+"+v[0]+") ?",
      [
        correct+" + o(x"+n+")",
        "x + x²/2 + o(x"+n+")",
        "-"+v[0]+" + o(x"+n+")",
        "1 + "+v[0]+" + o(x"+n+")"
      ],
      0,
      "On applique ln(1+u) = u - u²/2 + u³/3 + ... en remplaçant u par l'expression demandée."
    );
  });

  /* Famille 3 : sinus (10 questions) */
  for(let a=1;a<=10;a++){
    const cubic=-Math.pow(a,3)/6;
    const cubicText=Number.isInteger(cubic)?cubic.toString():cubic.toFixed(3);
    addQuestion(
      "Quel est le DL à l'ordre 3 de sin("+a+"x) ?",
      [
        a+"x "+(cubic<0?"- ":"+ ")+Math.abs(Number(cubicText))+"x³ + o(x³)",
        a+"x + "+a+"x² + o(x³)",
        a+"x - "+a+"x³/6 + o(x³)",
        "1 + "+a+"x + o(x³)"
      ],
      0,
      "sin(u) = u - u³/6 + o(u³). En posant u = "+a+"x, le coefficient du terme cubique devient -"+a+"³/6."
    );
  }

  /* Famille 4 : cosinus (10 questions) */
  for(let a=1;a<=10;a++){
    addQuestion(
      "Quel est le DL à l'ordre 2 de cos("+a+"x) ?",
      [
        "1 - "+(a*a)+ "x²/2 + o(x²)",
        a+"x - "+(a*a)+"x²/2 + o(x²)",
        "1 + "+a+"x + o(x²)",
        "1 - "+a+"x²/2 + o(x²)"
      ],
      0,
      "cos(u) = 1 - u²/2 + o(u²). On remplace u par "+a+"x."
    );
  }

  /* Famille 5 : inverse (10 questions) */
  for(let a=1;a<=10;a++){
    addQuestion(
      "Quelle est la première valeur du DL de 1/(1+"+a+"x) à l'ordre 2 ?",
      [
        "1 - "+a+"x + "+(a*a)+"x² + o(x²)",
        "1 + "+a+"x + o(x²)",
        "1 - "+a+"x² + o(x²)",
        "1 + "+a+"x + "+(a*a)+"x² + o(x²)"
      ],
      0,
      "On utilise 1/(1+u) = 1-u+u²+o(u²), avec u = "+a+"x."
    );
  }

  /* Famille 6 : racines carrées (10 questions) */
  for(let a=1;a<=10;a++){
    const first=a/2;
    const second=-(a*a)/8;
    addQuestion(
      "Quel est le DL à l'ordre 2 de √(1+"+a+"x) ?",
      [
        "1 + "+first+"x - "+Math.abs(second)+"x² + o(x²)",
        "1 + "+a+"x + o(x²)",
        "1 - "+first+"x + o(x²)",
        "1 + "+first+"x + "+Math.abs(second)+"x² + o(x²)"
      ],
      0,
      "On applique √(1+u) = 1 + u/2 - u²/8 + o(u²)."
    );
  }

  /* Famille 7 : compréhension du petit o (10 questions) */
  const littleO=[
    ["x³","x²","0"],
    ["x⁴","x³","0"],
    ["x⁵","x⁴","0"],
    ["x²","x","0"],
    ["x⁶","x²","0"],
    ["x⁴","x²","0"],
    ["x⁵","x","0"],
    ["x³","x","0"],
    ["x⁷","x⁵","0"],
    ["x⁶","x⁴","0"]
  ];

  littleO.forEach(v=>{
    addQuestion(
      "Que vaut la limite de "+v[0]+"/"+v[1]+" lorsque x tend vers zéro ?",
      ["0","1","+∞","Elle n'existe pas"],
      0,
      "La puissance au numérateur est strictement supérieure. Le quotient est une puissance positive de x et tend donc vers zéro."
    );
  });

  /* Famille 8 : propriétés (10 questions) */
  const properties=[
    ["Une fonction paire possède-t-elle des termes impairs dans son DL unique ?","Non","Oui","Toujours","Aucune réponse"],
    ["Une fonction impaire possède-t-elle un terme constant non nul dans son DL unique ?","Non","Oui","Toujours","Cela dépend de l'ordre"],
    ["Que représente le DL d'ordre 1 ?","L'approximation affine locale","Une asymptote verticale","Une intégrale","Une dérivée seconde"],
    ["Que représente n dans un DL d'ordre n ?","Le degré maximal conservé","Le nombre de fonctions","La limite","Le nombre de dérivées"],
    ["Quelle formule permet de construire un DL avec les dérivées ?","Taylor-Young","Pythagore","Thalès","Newton"],
    ["Quel terme représente le reste du DL d'ordre n ?","o(xⁿ)","xⁿ⁺¹ exactement","1/x","f'(x)"],
    ["Le DL est-il une approximation locale ?","Oui","Non","Uniquement à l'infini","Jamais"],
    ["Peut-on tronquer les termes de degré supérieur ?","Oui","Non","Uniquement pour sin","Uniquement pour cos"],
    ["Quelle est la valeur de 0! ?","1","0","2","Elle n'existe pas"],
    ["Quelle est la valeur de 4! ?","24","12","16","8"]
  ];

  properties.forEach(v=>{
    addQuestion(v[0],v.slice(1),0,
      "Cette réponse correspond à la propriété fondamentale étudiée dans le cours des développements limités.");
  });

  /* Famille 9 : Taylor-Young (10 questions) */
  for(let a=1;a<=10;a++){
    addQuestion(
      "Dans la formule de Taylor-Young, quel est le coefficient de x² ?",
      ["f''(0)/2!","f'(0)/2!","f''(0)","f(0)/2"],
      0,
      "Le coefficient de x² est f''(0)/2!, soit f''(0)/2."
    );
  }

  /* Famille 10 : limites usuelles (10 questions) */
  const limits=[
    ["(eˣ-1)/x","1","0","2","-1"],
    ["sin(x)/x","1","0","-1","2"],
    ["(1-cos(x))/x²","1/2","1","0","-1"],
    ["ln(1+x)/x","1","0","-1","2"],
    ["(eˣ-1-x)/x²","1/2","1","0","-1"],
    ["(sin(x)-x)/x³","-1/6","1/6","0","1"],
    ["(ln(1+x)-x)/x²","-1/2","1/2","0","1"],
    ["(tan(x))/x","1","0","-1","2"],
    ["(arctan(x))/x","1","0","-1","2"],
    ["(√(1+x)-1)/x","1/2","1","0","-1"]
  ];

  limits.forEach(v=>{
    addQuestion(
      "Calculer la limite lorsque x tend vers zéro de "+v[0]+".",
      [v[1],v[2],v[3],v[4]],
      0,
      "On utilise le DL usuel de la fonction concernée, puis on simplifie par la puissance de x."
    );
  });

  /* Famille 11 : calculs de coefficients (10 questions) */
  for(let a=1;a<=10;a++){
    addQuestion(
      "Dans le DL de e^("+a+"x), quel est le coefficient de x² ?",
      [String((a*a)/2),String(a),String(a*a),String(1/a)],
      0,
      "e^(ax) = 1 + ax + a²x²/2 + o(x²)."
    );
  }

  /* Famille 12 : opérations (10 questions) */
  const operations=[
    ["Quelle opération permet de calculer le DL d'un produit ?","Multiplier puis tronquer","Additionner uniquement","Diviser","Dériver"],
    ["Que faut-il vérifier pour inverser un DL ?","Que la valeur du dénominateur au point soit non nulle","Que la fonction soit impaire","Que x soit positif","Que la fonction soit périodique"],
    ["Pour composer deux DL, que doit vérifier l'expression intérieure ?","Tendre vers zéro pour une composition au voisinage de zéro","Être égale à 1","Être négative","Être constante"],
    ["Comment développer en un point a ?","Poser h=x-a","Poser h=x+a","Poser h=1-a","Poser h=x²"],
    ["Quelle variable permet de ramener l'infini à zéro ?","t=1/x","t=x+1","t=x²","t=2x"],
    ["Dans un produit, que signifie tronquer à l'ordre 2 ?","Garder les degrés inférieurs ou égaux à 2","Garder seulement x²","Supprimer le terme constant","Garder tous les degrés"],
    ["Quelle formule utilise-t-on pour 1/(1-u) ?","1+u+u²+...","1-u² uniquement","u+u²","1-u"],
    ["Quel DL permet de calculer √(1+x) ?","Binôme de Newton","Taylor d'une droite","Pythagore","Intégration"],
    ["Quel est le terme constant du DL de eˣ ?","1","0","-1","2"],
    ["Quel est le terme constant du DL de sin(x) ?","0","1","-1","2"]
  ];

  operations.forEach(v=>{
    addQuestion(v[0],[v[1],v[2],v[3],v[4]],0,
      "Il faut appliquer correctement les règles d'opérations sur les développements limités.");
  });

  /* Famille 13 : DL de fonctions composées (10 questions) */
  const compositions=[
    ["sin(2x)","2x-4x³/3+o(x³)","2x-2x³+o(x³)","x-x³/6+o(x³)","1+2x+o(x³)"],
    ["sin(3x)","3x-9x³/2+o(x³)","3x-3x³/6+o(x³)","x-9x³/2+o(x³)","1+3x+o(x³)"],
    ["cos(2x)","1-2x²+o(x²)","1-x²/2+o(x²)","2x-x²+o(x²)","1+2x²+o(x²)"],
    ["cos(3x)","1-9x²/2+o(x²)","1-3x²/2+o(x²)","3x-9x²/2+o(x²)","1+9x²/2+o(x²)"],
    ["e^(2x)","1+2x+2x²+o(x²)","1+x+x²/2+o(x²)","1+2x+x²+o(x²)","2x+2x²+o(x²)"],
    ["e^(3x)","1+3x+9x²/2+o(x²)","1+3x+3x²/2+o(x²)","1+x+x²/2+o(x²)","3x+9x²/2+o(x²)"],
    ["ln(1+2x)","2x-2x²+o(x²)","2x-x²/2+o(x²)","x-2x²+o(x²)","1+2x+o(x²)"],
    ["ln(1+3x)","3x-9x²/2+o(x²)","3x-3x²/2+o(x²)","x-9x²/2+o(x²)","1+3x+o(x²)"],
    ["√(1+2x)","1+x-x²/2+o(x²)","1+2x-x²/2+o(x²)","1+x+x²/2+o(x²)","2x-x²/2+o(x²)"],
    ["√(1+4x)","1+2x-2x²+o(x²)","1+4x-2x²+o(x²)","1+2x+x²+o(x²)","1+4x+o(x²)"]
  ];

  compositions.forEach(v=>{
    addQuestion("Quel est le DL de "+v[0]+" ?",v.slice(1),0,
      "On remplace la variable dans le développement limité usuel de la fonction extérieure, puis on simplifie.");
  });

  /* Famille 14 : équivalents (10 questions) */
  const equivalents=[
    ["sin(x)","x","x²","1","1/x"],
    ["eˣ-1","x","x²","1","-x"],
    ["ln(1+x)","x","x²","1","-x"],
    ["1-cos(x)","x²/2","x","1","x³"],
    ["arctan(x)","x","x²","1","-x"],
    ["tan(x)","x","x²","1","-x"],
    ["√(1+x)-1","x/2","x","1","x²"],
    ["(1+x)²-1","2x","x","x²","1"],
    ["e^(2x)-1","2x","x²","x","1"],
    ["ln(1+3x)","3x","x","3x²","1"]
  ];

  equivalents.forEach(v=>{
    addQuestion("Quel est l'équivalent de "+v[0]+" lorsque x tend vers zéro ?",
      [v[1],v[2],v[3],v[4]],0,
      "On cherche le premier terme non nul du développement limité de l'expression.");
  });

  /* Famille 15 : étude des courbes (10 questions) */
  const curves=[
    ["f(x)=1+2x+3x²+o(x²)","y=1+2x","y=2x","y=1+3x","y=3x²"],
    ["f(x)=2-3x+x²+o(x²)","y=2-3x","y=2+x","y=-3x","y=2+x²"],
    ["f(x)=4+x-2x²+o(x²)","y=4+x","y=4-2x","y=x","y=4"],
    ["f(x)=1+5x+4x²+o(x²)","y=1+5x","y=5x","y=1+4x","y=4x"],
    ["f(x)=3-2x+6x²+o(x²)","y=3-2x","y=3+2x","y=-2x","y=6x²"],
    ["f(x)=2+x+o(x)","y=2+x","y=2","y=x","y=1+x"],
    ["f(x)=5-4x+o(x)","y=5-4x","y=5+x","y=-4x","y=4x"],
    ["f(x)=1+3x-2x²+o(x²)","y=1+3x","y=3x","y=1-2x","y=1+x"],
    ["f(x)=2+4x+7x²+o(x²)","y=2+4x","y=4x","y=2+7x","y=7x²"],
    ["f(x)=6-x+2x²+o(x²)","y=6-x","y=6+x","y=-x","y=2x²"]
  ];

  curves.forEach(v=>{
    addQuestion("Quelle est l'équation de la tangente en zéro si "+v[0]+" ?",
      v.slice(1),0,
      "La tangente est déterminée par les termes constant et de degré 1 du DL.");
  });

  /* Famille 16 : reste et ordre (10 questions) */
  for(let n=1;n<=10;n++){
    addQuestion(
      "Dans un DL d'ordre "+n+", quel est le plus grand degré du polynôme conservé ?",
      [String(n),String(n+1),String(n-1),"0"],
      0,
      "L'ordre n correspond au degré maximal du polynôme du développement limité."
    );
  }

  /* Famille 17 : calculs de limites (10 questions) */
  const advancedLimits=[
    ["(eˣ-1-x-x²/2)/x³","1/6","1/2","0","-1/6"],
    ["(sin(x)-x+x³/6)/x⁵","1/120","-1/6","0","1/6"],
    ["(cos(x)-1+x²/2)/x⁴","1/24","1/2","0","-1/24"],
    ["(ln(1+x)-x+x²/2)/x³","1/3","-1/2","0","1/6"],
    ["(eˣ-1)/x","1","0","-1","2"],
    ["(√(1+x)-1-x/2)/x²","-1/8","1/2","0","1/8"],
    ["(arctan(x)-x)/x³","-1/3","1/3","0","-1/6"],
    ["(sin(2x)-2x)/x³","-4/3","-1/6","0","4/3"],
    ["(cos(3x)-1)/x²","-9/2","-3/2","0","9/2"],
    ["(e^(2x)-1-2x)/x²","2","1","0","4"]
  ];

  advancedLimits.forEach(v=>{
    addQuestion("Calculer la limite : "+v[0]+", lorsque x tend vers zéro.",
      v.slice(1),0,
      "On utilise le DL suffisamment précis, puis on simplifie par la puissance de x.");
  });

  /* Famille 18 : factorielle (10 questions) */
  for(let n=1;n<=10;n++){
    let factorial=1;
    for(let i=1;i<=n;i++) factorial*=i;
    const choices=[
      String(factorial),
      String(factorial+1),
      String(factorial*2),
      String(Math.max(0,factorial-1))
    ];
    addQuestion("Quelle est la valeur de "+n+"! ?",choices,0,
      n+"! est le produit de tous les entiers positifs de 1 à "+n+".");
  }

  /* Famille 19 : point quelconque et infini (10 questions) */
  const changes=[
    ["DL en 2","h=x-2","h=x+2","h=1/x","h=x²"],
    ["DL en 3","h=x-3","h=x+3","h=1/x","h=3x"],
    ["DL en -1","h=x+1","h=x-1","h=1/x","h=x²"],
    ["DL en 5","h=x-5","h=x+5","h=1/x","h=5x"],
    ["DL en -3","h=x+3","h=x-3","h=1/x","h=3x"],
    ["x tend vers +∞","t=1/x","t=x","t=x²","t=x+1"],
    ["x tend vers -∞","t=1/x","t=x","t=x²","t=x-1"],
    ["DL de eˣ en 1","h=x-1","h=x+1","h=1/x","h=x²"],
    ["DL de ln(x) en 1","h=x-1","h=x+1","h=1/x","h=x²"],
    ["DL en a","h=x-a","h=x+a","h=1/x","h=x²"]
  ];

  changes.forEach(v=>{
    addQuestion("Pour effectuer un "+v[0]+", quel changement de variable choisir ?",
      v.slice(1),0,
      "Le changement de variable permet de ramener le point d'étude à zéro.");
  });

  /* Famille 20 : notions diverses (10 questions) */
  const finalQuestions=[
    ["Quel est le DL de cos(x) à l'ordre 1 ?","1+o(x)","x+o(x)","1-x+o(x)","x²+o(x)"],
    ["Quel est le DL de sin(x) à l'ordre 1 ?","x+o(x)","1+x+o(x)","x²+o(x)","1+o(x)"],
    ["Quel est le DL de eˣ à l'ordre 1 ?","1+x+o(x)","x+o(x)","1-x+o(x)","1+x²+o(x)"],
    ["Quel est le DL de ln(1+x) à l'ordre 1 ?","x+o(x)","1+x+o(x)","-x+o(x)","x²+o(x)"],
    ["Quel est le DL de 1/(1-x) à l'ordre 2 ?","1+x+x²+o(x²)","1-x+x²+o(x²)","1+x+o(x²)","x+x²+o(x²)"],
    ["Quel est le DL de √(1+x) à l'ordre 1 ?","1+x/2+o(x)","1+x+o(x)","x/2+o(x)","1-x/2+o(x)"],
    ["Que vaut le DL de x² à l'ordre 2 ?","x²+o(x²)","x+o(x²)","1+x²+o(x²)","o(x²)"],
    ["Quel est le coefficient de x³ dans sin(x) ?","-1/6","1/6","1/3","0"],
    ["Quel est le coefficient de x⁴ dans cos(x) ?","1/24","-1/24","1/6","0"],
    ["Quel est le coefficient de x³ dans eˣ ?","1/6","1/3","1/2","1"]
  ];

  finalQuestions.forEach(v=>{
    addQuestion(v[0],v.slice(1),0,
      "Il s'agit d'une formule fondamentale du tableau des développements limités usuels.");
  });

  console.log("Nombre de questions dans la banque :",questionBank.length);
}

/* =====================================================
   4. VARIABLES DU QUIZ
===================================================== */

let quizQuestions=[];
let currentQuestion=0;
let score=0;
let selectedAnswer=null;
let answered=false;
let userAnswers=[];

/* =====================================================
   5. MELANGE ALEATOIRE
===================================================== */

function shuffle(array){
  const copy=[...array];

  for(let i=copy.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [copy[i],copy[j]]=[copy[j],copy[i]];
  }

  return copy;
}

/* =====================================================
   6. DEMARRER LE QUIZ
===================================================== */

function startQuiz(){

  const count=parseInt(document.getElementById("questionCount").value,10);
  const error=document.getElementById("configError");

  if(!Number.isInteger(count)||count<20||count>40){
    error.textContent="Choisis un nombre compris entre 20 et 40.";
    return;
  }

  error.textContent="";

  if(questionBank.length!==200){
    generateQuestionBank();
  }

  quizQuestions=shuffle(questionBank)
    .slice(0,count)
    .map(q=>{
      const options=shuffle(q.options.map((text,index)=>({
        text,
        correct:index===q.correct
      })));

      return {
        ...q,
        options
      };
    });

  currentQuestion=0;
  score=0;
  selectedAnswer=null;
  answered=false;
  userAnswers=[];

  document.getElementById("quizConfig").style.display="none";
  document.getElementById("quizResult").style.display="none";
  document.getElementById("quizMain").style.display="block";
  document.getElementById("progressContainer").style.display="block";

  showQuestion();
}

/* =====================================================
   7. AFFICHER UNE QUESTION
===================================================== */

function showQuestion(){

  const q=quizQuestions[currentQuestion];

  selectedAnswer=null;
  answered=false;

  document.getElementById("questionNumber").textContent=
    "Question "+(currentQuestion+1)+" / "+quizQuestions.length;

  document.getElementById("scoreLive").textContent=
    "Score : "+score;

  document.getElementById("progressBar").style.width=
    (currentQuestion/quizQuestions.length*100)+"%";

  document.getElementById("questionText").textContent=q.question;

  const container=document.getElementById("optionsContainer");
  container.innerHTML="";

  q.options.forEach((option,index)=>{

    const element=document.createElement("div");
    element.className="quiz-option";

    const letter=document.createElement("span");
    letter.className="option-letter";
    letter.textContent=String.fromCharCode(65+index);

    const text=document.createElement("span");
    text.textContent=option.text;

    element.appendChild(letter);
    element.appendChild(text);

    element.addEventListener("click",()=>selectOption(index));

    container.appendChild(element);
  });

  const feedback=document.getElementById("feedback");
  feedback.className="quiz-feedback";
  feedback.style.display="none";
  feedback.innerHTML="";

  document.getElementById("verifyBtn").style.display="inline-block";
  document.getElementById("verifyBtn").disabled=true;
  document.getElementById("nextBtn").style.display="none";

  renderMath();
}

/* =====================================================
   8. SELECTIONNER UNE REPONSE
===================================================== */

function selectOption(index){

  if(answered)return;

  selectedAnswer=index;

  const options=document.querySelectorAll(".quiz-option");

  options.forEach((option,i)=>{
    option.classList.toggle("selected",i===index);
  });

  document.getElementById("verifyBtn").disabled=false;
}

/* =====================================================
   9. VERIFIER LA REPONSE
===================================================== */

function verifyAnswer(){

  if(selectedAnswer===null||answered)return;

  answered=true;

  const q=quizQuestions[currentQuestion];
  const selected=q.options[selectedAnswer];
  const correctIndex=q.options.findIndex(o=>o.correct);
  const correct=q.options[correctIndex];

  const isCorrect=selected.correct;

  if(isCorrect)score++;

  userAnswers.push({
    question:q.question,
    selected:selected.text,
    correct:correct.text,
    explanation:q.explanation,
    isCorrect
  });

  const options=document.querySelectorAll(".quiz-option");

  options.forEach((element,index)=>{
    element.style.cursor="default";

    if(q.options[index].correct){
      element.classList.add("correct");
    }

    if(index===selectedAnswer&&!isCorrect){
      element.classList.add("wrong");
    }
  });

  const feedback=document.getElementById("feedback");

  feedback.className="quiz-feedback "+(isCorrect?"correct":"wrong");
  feedback.style.display="block";

  if(isCorrect){
    feedback.innerHTML=
      "<strong>✓ Bonne réponse !</strong><p>Tu as choisi la bonne proposition.</p>"+
      "<p><strong>Explication :</strong> "+q.explanation+"</p>";
  }else{
    feedback.innerHTML=
      "<strong>✗ Réponse incorrecte.</strong>"+
      "<p>Ta réponse : "+selected.text+"</p>"+
      "<p><strong>Bonne réponse :</strong> "+correct.text+"</p>"+
      "<p><strong>Explication :</strong> "+q.explanation+"</p>";
  }

  document.getElementById("scoreLive").textContent=
    "Score : "+score;

  document.getElementById("verifyBtn").style.display="none";
  document.getElementById("nextBtn").style.display="inline-block";

  document.getElementById("nextBtn").textContent=
    currentQuestion===quizQuestions.length-1
    ?"Voir mon résultat"
    :"Next →";

  renderMath();
}

/* =====================================================
   10. PASSER A LA QUESTION SUIVANTE
===================================================== */

function nextQuestion(){

  if(!answered)return;

  if(currentQuestion<quizQuestions.length-1){
    currentQuestion++;
    showQuestion();
  }else{
    finishQuiz();
  }
}

/* =====================================================
   11. RESULTAT FINAL
===================================================== */

function finishQuiz(){

  document.getElementById("quizMain").style.display="none";
  document.getElementById("progressContainer").style.display="none";
  document.getElementById("quizResult").style.display="block";

  const total=quizQuestions.length;
  const note=(score/total*20);
  const rounded=Number(note.toFixed(2));
  const wrong=total-score;

  document.getElementById("finalScore").textContent=
    rounded+"/20";

  document.getElementById("correctCount").textContent=
    score+" / "+total;

  document.getElementById("wrongCount").textContent=
    wrong+" / "+total;

  document.getElementById("resultBar").style.width=
    (score/total*100)+"%";

  let message="";

  if(note>=18){
    message="Excellent ! Tu maîtrises très bien les développements limités.";
  }else if(note>=16){
    message="Très bien ! Tes connaissances sont solides.";
  }else if(note>=14){
    message="Bon travail ! Continue à pratiquer.";
  }else if(note>=12){
    message="Assez bien. Revois quelques méthodes et formules.";
  }else if(note>=10){
    message="Résultat moyen. Reprends les notions qui te posent problème.";
  }else{
    message="Il faut encore travailler le cours et refaire les exercices.";
  }

  document.getElementById("resultMessage").textContent=message;

  const review=document.getElementById("reviewList");
  review.innerHTML="";

  const wrongAnswers=userAnswers.filter(a=>!a.isCorrect);

  if(wrongAnswers.length===0){
    review.innerHTML=
      '<div class="success">Parfait ! Aucune erreur. Toutes les réponses sont correctes.</div>';
  }else{

    wrongAnswers.forEach((answer,index)=>{

      const item=document.createElement("div");
      item.className="review-item bad";

      const title=document.createElement("strong");
      title.textContent="Erreur "+(index+1)+" : "+answer.question;

      const selected=document.createElement("p");
      selected.textContent="Ta réponse : "+answer.selected;

      const correct=document.createElement("p");
      correct.textContent="Bonne réponse : "+answer.correct;
      correct.style.color="#287b55";
      correct.style.fontWeight="bold";

      const explanation=document.createElement("p");
      explanation.textContent="Explication : "+answer.explanation;

      item.append(title,selected,correct,explanation);
      review.appendChild(item);
    });
  }

  renderMath();

  window.scrollTo({
    top:document.getElementById("quiz").offsetTop-75,
    behavior:"smooth"
  });
}

/* =====================================================
   12. RECOMMENCER
===================================================== */

function restartQuiz(){

  document.getElementById("quizResult").style.display="none";
  document.getElementById("quizConfig").style.display="block";
  document.getElementById("questionCount").value=20;

  window.scrollTo({
    top:document.getElementById("quiz").offsetTop-75,
    behavior:"smooth"
  });
}

/* =====================================================
   13. QUITTER LE QUIZ
===================================================== */

function quitQuiz(){

  if(!confirm("Veux-tu vraiment quitter cette évaluation ?"))return;

  document.getElementById("quizMain").style.display="none";
  document.getElementById("progressContainer").style.display="none";
  document.getElementById("quizConfig").style.display="block";
}

/* =====================================================
   14. INITIALISATION
===================================================== */

generateQuestionBank();

if(questionBank.length!==200){
  console.error("Erreur : la banque doit contenir exactement 200 questions.");
}

console.log("StudyNet : banque de questions initialisée.");

 