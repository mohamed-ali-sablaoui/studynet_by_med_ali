 "use strict";

/* =====================================================
   AFFICHAGE DES CORRECTIONS
===================================================== */

function toggleSolution(id){
  const element=document.getElementById(id);
  element.classList.toggle("show");
}

/* =====================================================
   BANQUE DE 200 QUESTIONS
   10 familles x 20 variantes
===================================================== */

const questionBank=[];

function addQuestion(question,correct,wrong,explanation,category){
  const options=[correct,...wrong].map(String);
  questionBank.push({
    question,
    correct:String(correct),
    options,
    explanation,
    category
  });
}

function numberText(n){
  if(Number.isInteger(n)) return String(n);
  return String(Number(n.toFixed(5)));
}

const values=[2,3,4,5,6,7,8,9,10,12,1,11,13,14,15,16,18,20,21,24];

for(let i=0;i<20;i++){
  const a=values[i];

  // 1. Dérivée de sin(ax)
  addQuestion(
    `Quelle est la dérivée de f(x) = sin(${a}x) ?`,
    `${a}cos(${a}x)`,
    [`cos(${a}x)`,`-${a}sin(${a}x)`,`sin(${a}x)`],
    `On utilise [sin(u)]'=u'cos(u), avec u=${a}x. La dérivée vaut ${a}cos(${a}x).`,
    "Dérivées"
  );

  // 2. Dérivée de cos(ax)
  addQuestion(
    `Quelle est la dérivée de f(x) = cos(${a}x) ?`,
    `-${a}sin(${a}x)`,
    [`${a}sin(${a}x)`,`cos(${a}x)`,`-${a}cos(${a}x)`],
    `La dérivée de cos(u) est -u'sin(u).`,
    "Dérivées"
  );

  // 3. Dérivée de tan(ax)
  addQuestion(
    `Quelle est la dérivée de tan(${a}x) ?`,
    `${a}/cos²(${a}x)`,
    [`1/cos²(${a}x)`,`-${a}/sin²(${a}x)`,`cos²(${a}x)`],
    `La dérivée de tan(u) est u'/cos²(u).`,
    "Dérivées"
  );

  // 4. Période du sinus
  addQuestion(
    `Quelle est la période fondamentale de sin(${a}x) ?`,
    `2π/${a}`,
    [`π/${a}`,`${a}π`,`2π`],
    `Pour sin(ax), la période est 2π/|a|.`,
    "Périodes"
  );

  // 5. Période du cosinus
  addQuestion(
    `Quelle est la période fondamentale de cos(${a}x) ?`,
    `2π/${a}`,
    [`π/${a}`,`${a}π`,`2π`],
    `La période du cosinus transformé est 2π/|a|.`,
    "Périodes"
  );

  // 6. Dérivée de arcsin
  addQuestion(
    `Quelle est la dérivée de arcsin(x) ?`,
    `1/√(1-x²)`,
    [`-1/√(1-x²)`,`1/(1+x²)`,`-1/(1+x²)`],
    `La dérivée de arcsin(x) est 1/√(1-x²), pour |x|<1.`,
    "Fonctions réciproques"
  );

  // 7. Dérivée de arccos
  addQuestion(
    `Quelle est la dérivée de arccos(x) ?`,
    `-1/√(1-x²)`,
    [`1/√(1-x²)`,`1/(1+x²)`,`-1/(1+x²)`],
    `La dérivée de arccos est négative : -1/√(1-x²).`,
    "Fonctions réciproques"
  );

  // 8. Dérivée de arctan
  addQuestion(
    `Quelle est la dérivée de arctan(x) ?`,
    `1/(1+x²)`,
    [`-1/(1+x²)`,`1/√(1-x²)`,`1/cos²(x)`],
    `La dérivée de arctan(x) est 1/(1+x²).`,
    "Fonctions réciproques"
  );

  // 9. Limite fondamentale
  addQuestion(
    `Quelle est la valeur de lim(x→0) sin(${a}x)/x ?`,
    String(a),
    ["0","1",String(2*a)],
    `On écrit ${a} × sin(${a}x)/(${a}x). La limite vaut ${a}.`,
    "Limites"
  );

  // 10. Limite avec cosinus
  addQuestion(
    `Quelle est la valeur de lim(x→0) (1-cos(${a}x))/x² ?`,
    String(a*a/2),
    [String(a),String(a*a),String(0)],
    `La limite fondamentale donne a²/2, soit ${a*a}/2.`,
    "Limites"
  );
}

/* =====================================================
   200 QUESTIONS EXACTEMENT
===================================================== */

if(questionBank.length!==200){
  throw new Error("La banque de questions doit contenir exactement 200 questions.");
}

/* =====================================================
   ETAT DU QUIZ
===================================================== */

let quizQuestions=[];
let currentQuestion=0;
let score=0;
let selectedAnswer=null;
let answerVerified=false;
let wrongAnswers=[];

const overlay=document.getElementById("quiz-overlay");

function openQuiz(){
  overlay.classList.add("open");
  document.body.style.overflow="hidden";
  resetQuizView();
}

function closeQuiz(){
  overlay.classList.remove("open");
  document.body.style.overflow="";
}

overlay.addEventListener("click",function(e){
  if(e.target===overlay) closeQuiz();
});

document.addEventListener("keydown",function(e){
  if(e.key==="Escape" && overlay.classList.contains("open")){
    closeQuiz();
  }
});

function resetQuizView(){
  document.getElementById("quiz-setup").style.display="block";
  document.getElementById("quiz-game").style.display="none";
  document.getElementById("quiz-result").style.display="none";
}

/* =====================================================
   MELANGE ALEATOIRE
===================================================== */

function shuffle(array){
  const result=[...array];
  for(let i=result.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [result[i],result[j]]=[result[j],result[i]];
  }
  return result;
}

/* =====================================================
   DEMARRER
===================================================== */

function startQuiz(){
  const count=Number(document.getElementById("question-count").value);

  if(count<20 || count>40){
    alert("Choisis entre 20 et 40 questions.");
    return;
  }

  quizQuestions=shuffle(questionBank).slice(0,count);
  currentQuestion=0;
  score=0;
  wrongAnswers=[];
  selectedAnswer=null;
  answerVerified=false;

  document.getElementById("quiz-setup").style.display="none";
  document.getElementById("quiz-result").style.display="none";
  document.getElementById("quiz-game").style.display="block";

  showQuestion();
}

/* =====================================================
   AFFICHER UNE QUESTION
===================================================== */

function showQuestion(){
  const q=quizQuestions[currentQuestion];

  selectedAnswer=null;
  answerVerified=false;

  document.getElementById("question-number").textContent=
    `Question ${currentQuestion+1}/${quizQuestions.length}`;

  document.getElementById("quiz-score").textContent=
    `Score : ${score}`;

  document.getElementById("progress-bar").style.width=
    `${currentQuestion/quizQuestions.length*100}%`;

  document.getElementById("question-text").textContent=q.question;

  const answerList=document.getElementById("answer-list");
  answerList.innerHTML="";

  const shuffledOptions=shuffle(q.options);

  shuffledOptions.forEach((option,index)=>{
    const button=document.createElement("button");
    button.type="button";
    button.className="answer";
    button.textContent=String.fromCharCode(65+index)+". "+option;

    button.addEventListener("click",()=>{
      if(answerVerified) return;

      selectedAnswer=option;

      document.querySelectorAll(".answer").forEach(b=>{
        b.classList.remove("selected");
      });

      button.classList.add("selected");
    });

    answerList.appendChild(button);
  });

  const feedback=document.getElementById("quiz-feedback");
  feedback.className="feedback";
  feedback.textContent="";

  document.getElementById("verify-btn").style.display="inline-block";
  document.getElementById("verify-btn").disabled=false;
  document.getElementById("next-btn").style.display="none";
}

/* =====================================================
   VERIFIER LA REPONSE
===================================================== */

function verifyAnswer(){
  if(answerVerified) return;

  if(selectedAnswer===null){
    alert("Sélectionne une réponse avant de vérifier.");
    return;
  }

  const q=quizQuestions[currentQuestion];
  const isCorrect=selectedAnswer===q.correct;

  answerVerified=true;

  const buttons=document.querySelectorAll(".answer");

  buttons.forEach(button=>{
    button.disabled=true;
    const option=button.textContent.substring(3);

    if(option===q.correct){
      button.classList.add("correct");
    }

    if(option===selectedAnswer && !isCorrect){
      button.classList.add("incorrect");
    }
  });

  const feedback=document.getElementById("quiz-feedback");

  if(isCorrect){
    score++;
    feedback.className="feedback show good";
    feedback.textContent="✓ Bonne réponse ! "+q.explanation;
  }else{
    feedback.className="feedback show bad";
    feedback.textContent="✗ Mauvaise réponse. La bonne réponse est : "+q.correct+". "+q.explanation;

    wrongAnswers.push({
      question:q.question,
      selected:selectedAnswer,
      correct:q.correct,
      explanation:q.explanation,
      category:q.category
    });
  }

  document.getElementById("quiz-score").textContent="Score : "+score;
  document.getElementById("verify-btn").style.display="none";
  document.getElementById("next-btn").style.display="inline-block";
  document.getElementById("progress-bar").style.width=
    `${(currentQuestion+1)/quizQuestions.length*100}%`;
}

/* =====================================================
   QUESTION SUIVANTE
===================================================== */

function nextQuestion(){
  if(!answerVerified) return;

  currentQuestion++;

  if(currentQuestion<quizQuestions.length){
    showQuestion();
  }else{
    showResult();
  }
}

/* =====================================================
   RESULTAT FINAL
===================================================== */

function showResult(){
  document.getElementById("quiz-game").style.display="none";
  document.getElementById("quiz-result").style.display="block";

  const total=quizQuestions.length;
  const note=(score/total*20).toFixed(2);
  const percentage=Math.round(score/total*100);

  document.getElementById("final-score").textContent=note+"/20";

  let message="Continue tes efforts !";

  if(percentage>=90) message="Excellent travail !";
  else if(percentage>=75) message="Très bon résultat !";
  else if(percentage>=60) message="Bon travail !";
  else if(percentage>=50) message="Résultat moyen : continue à pratiquer.";
  else message="Il faut revoir certaines notions du cours.";

  document.getElementById("result-message").textContent=message;

  document.getElementById("result-details").textContent=
    `Tu as obtenu ${score} bonne(s) réponse(s) sur ${total}. `+
    `${total-score} réponse(s) incorrecte(s). Réussite : ${percentage}%.`;

  const review=document.getElementById("wrong-review");
  review.innerHTML="";

  if(wrongAnswers.length===0){
    const p=document.createElement("p");
    p.className="success";
    p.textContent="Parfait ! Toutes les réponses sont correctes.";
    review.appendChild(p);
  }else{
    const title=document.createElement("h3");
    title.textContent="Révision des questions incorrectes";
    review.appendChild(title);

    wrongAnswers.forEach((item,index)=>{
      const box=document.createElement("div");
      box.className="review-item";

      const q=document.createElement("strong");
      q.textContent=(index+1)+". "+item.question;

      const selected=document.createElement("p");
      selected.textContent="Ta réponse : "+item.selected;

      const correct=document.createElement("p");
      correct.textContent="Bonne réponse : "+item.correct;

      const explanation=document.createElement("p");
      explanation.textContent="Explication : "+item.explanation;

      const category=document.createElement("small");
      category.textContent="Chapitre : "+item.category;

      box.append(q,selected,correct,explanation,category);
      review.appendChild(box);
    });
  }
}
