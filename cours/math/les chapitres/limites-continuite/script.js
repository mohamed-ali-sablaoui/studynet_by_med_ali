 
/* ==================== NAVIGATION ==================== */

function showTab(id){
  document.querySelectorAll('.section').forEach(s=>s.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
  document.getElementById(id).classList.add('active');

  const index={cours:0,exercices:1,quiz:2}[id];
  document.querySelectorAll('.tab')[index].classList.add('active');

  window.scrollTo({top:document.querySelector('.tabs').offsetTop-90,behavior:'smooth'});
}

function toggleSolution(id){
  const el=document.getElementById('solution'+id);
  el.classList.toggle('show');
  const btn=el.previousElementSibling.querySelector('button');
  btn.textContent=el.classList.contains('show')?'Masquer la correction':'Voir la correction';
}

/* ==================== QUESTION BANK ==================== */

/*
  20 familles de questions × 10 variantes = 200 questions.
  Les nombres et paramètres changent pour chaque variante.
*/

function fmt(n){
  if(Math.abs(n)<0.000000001)n=0;
  return Number(n.toFixed(4)).toString();
}

function numericQ(prompt,answer,explanation){
  const wrong=[
    answer+1,
    answer-1,
    answer*2+1
  ];
  const choices=[fmt(answer),...wrong.map(fmt)];
  return {
    prompt,
    choices:[...new Set(choices)],
    answer:fmt(answer),
    explanation
  };
}

function textQ(prompt,answer,wrong,explanation){
  return {prompt,choices:[answer,...wrong],answer,explanation};
}

const families=[

/* 1 - Polynômes */
n=>{
  const a=n+1;
  return numericQ(
    `Calculer lim (x² + ${2*a}x + 1), lorsque x → ${a}.`,
    a*a+2*a*a+1,
    `Un polynôme est continu sur ℝ. On remplace x par ${a} : ${a}² + ${2*a}×${a} + 1 = ${a*a+2*a*a+1}.`
  );
},

/* 2 - Factorisation */
n=>{
  const a=n+2;
  return numericQ(
    `Calculer lim (x² - ${a*a})/(x - ${a}), lorsque x → ${a}.`,
    2*a,
    `On factorise : x²-${a*a}=(x-${a})(x+${a}). Après simplification, la limite est ${a}+${a}=${2*a}.`
  );
},

/* 3 - Quotient de polynômes */
n=>{
  const a=n+1,b=n+2;
  return numericQ(
    `Calculer lim (${a}x² + x + 1)/(${b}x² - 2), lorsque x → +∞.`,
    a/b,
    `Les deux polynômes sont de degré 2. La limite est le quotient des coefficients dominants : ${a}/${b}=${fmt(a/b)}.`
  );
},

/* 4 - Racines */
n=>{
  const a=n+1;
  return numericQ(
    `Calculer lim (√(x+${a*a}) - ${a})/x, lorsque x → 0.`,
    1/(2*a),
    `On multiplie par le conjugué. On obtient 1/(√(x+${a*a})+${a}), donc 1/${2*a}=${fmt(1/(2*a))}.`
  );
},

/* 5 - Trigonométrie */
n=>{
  const a=n+1;
  return numericQ(
    `Calculer lim sin(${a}x)/x, lorsque x → 0.`,
    a,
    `On utilise sin(u)/u → 1. On écrit ${a} × sin(${a}x)/(${a}x). Le résultat est ${a}.`
  );
},

/* 6 - Exponentielle */
n=>{
  const a=n+1;
  return numericQ(
    `Calculer lim (e^(${a}x)-1)/x, lorsque x → 0.`,
    a,
    `On utilise lim (eᵘ-1)/u = 1. Le résultat est ${a}.`
  );
},

/* 7 - Logarithme */
n=>{
  const a=n+1;
  return numericQ(
    `Calculer lim ln(1+${a}x)/x, lorsque x → 0.`,
    a,
    `On utilise ln(1+u)/u → 1. On obtient ${a} × 1 = ${a}.`
  );
},

/* 8 - Fonction rationnelle */
n=>{
  const a=n+2;
  return numericQ(
    `Calculer lim (x² - ${a*a})/(x - ${a}), lorsque x → ${a}.`,
    2*a,
    `Après factorisation par différence de deux carrés, on obtient x+${a}. La limite vaut ${2*a}.`
  );
},

/* 9 - Limites à l'infini */
n=>{
  const a=n+2;
  return numericQ(
    `Calculer lim (${a}x+1)/(x²+1), lorsque x → +∞.`,
    0,
    `Le degré du dénominateur est supérieur au degré du numérateur. La limite vaut zéro.`
  );
},

/* 10 - Puissances */
n=>{
  const a=n+1;
  return numericQ(
    `Calculer lim 1/x^${a}, lorsque x → +∞.`,
    0,
    `Une puissance positive de x tend vers +∞. Son inverse tend donc vers 0.`
  );
},

/* 11 - Limites latérales */
n=>{
  const a=n+1;
  return textQ(
    `Soit f(x)=1/(x-${a}). Quelle est sa limite à droite en x=${a} ?`,
    '+∞',
    ['-∞','0','1'],
    `Lorsque x→${a}⁺, le dénominateur est positif et tend vers zéro. Le quotient tend vers +∞.`
  );
},

/* 12 - Limites latérales gauche */
n=>{
  const a=n+1;
  return textQ(
    `Soit f(x)=1/(x-${a}). Quelle est sa limite à gauche en x=${a} ?`,
    '-∞',
    ['+∞','0','1'],
    `Lorsque x→${a}⁻, le dénominateur est négatif et tend vers zéro. Le quotient tend vers -∞.`
  );
},

/* 13 - Continuité polynomiale */
n=>{
  const a=n+1;
  return textQ(
    `La fonction f(x)=x²+${a}x+1 est-elle continue en ${a}?`,
    'Oui',
    ['Non','Seulement à gauche','Seulement à droite'],
    `Tout polynôme est continu sur ℝ. La fonction est donc continue en ${a}.`
  );
},

/* 14 - Continuité quotient */
n=>{
  const a=n+1;
  return textQ(
    `La fonction f(x)=1/(x-${a}) est-elle continue en x=${a} ?`,
    'Non',
    ['Oui','Seulement à droite','Elle vaut zéro'],
    `La fonction n'est pas définie en ${a}, car le dénominateur s'annule. Elle n'est donc pas continue en ce point.`
  );
},

/* 15 - Limite et continuité */
n=>{
  const a=n+2;
  return textQ(
    `Si lim f(x) = ${a} lorsque x→1 et f(1)=${a}, alors f est-elle continue en 1 ?`,
    'Oui',
    ['Non','On ne peut jamais le savoir','Seulement si f est polynomiale'],
    `La limite existe et est égale à la valeur de la fonction. C'est exactement la définition de la continuité.`
  );
},

/* 16 - Discontinuité */
n=>{
  return textQ(
    `Si lim f(x)=2 à gauche de a et lim f(x)=5 à droite de a, que peut-on conclure ?`,
    "La limite en a n'existe pas",
    ['La limite vaut 2','La limite vaut 5','La fonction est continue'],
    `Les limites latérales sont différentes (2 ≠ 5). La limite en a n'existe donc pas.`
  );
},

/* 17 - Asymptote verticale */
n=>{
  const a=n+1;
  return textQ(
    `Si lim f(x)=+∞ lorsque x→${a}, quelle droite peut être une asymptote verticale ?`,
    `x = ${a}`,
    [`y = ${a}`,`y = 0`,`x = 0`],
    `Une limite infinie au voisinage de x=a indique une asymptote verticale d'équation x=a.`
  );
},

/* 18 - Asymptote horizontale */
n=>{
  const a=n+2;
  return textQ(
    `Si lim f(x)=${a} lorsque x→+∞, quelle est l'asymptote horizontale ?`,
    `y = ${a}`,
    [`x = ${a}`,'y = 0','x = 0'],
    `Une limite finie L à l'infini donne une asymptote horizontale d'équation y=L.`
  );
},

/* 19 - TVI */
n=>{
  return textQ(
    `Une fonction continue vérifie f(a)=-${n+1} et f(b)=${n+2}. Que garantit le TVI ?`,
    'Au moins une solution de f(x)=0 entre a et b',
    ['Aucune solution','Exactement deux solutions','La fonction est constante'],
    `Les valeurs aux extrémités sont de signes opposés. Par le TVI, il existe au moins une racine dans l'intervalle ouvert.`
  );
},

/* 20 - Gendarmes */
n=>{
  const a=n+1;
  return textQ(
    `Si -1/x² ≤ f(x) ≤ 1/x² pour x→+∞, quelle est la limite de f(x) ?`,
    '0',
    ['+∞','-∞','1'],
    `Les deux fonctions qui encadrent f tendent vers zéro. D'après le théorème des gendarmes, f tend aussi vers zéro.`
  );
}

];

/* Construction du véritable ensemble de 200 questions */
const questionBank=[];

families.forEach((family,familyIndex)=>{
  for(let n=0;n<10;n++){
    const q=family(n);
    q.id=familyIndex*10+n+1;
    questionBank.push(q);
  }
});

/* ==================== QUIZ ENGINE ==================== */

let quizQuestions=[];
let currentIndex=0;
let score=0;
let answered=false;
let responses=[];

function shuffle(array){
  const a=[...array];
  for(let i=a.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [a[i],a[j]]=[a[j],a[i]];
  }
  return a;
}

function startQuiz(){
  const count=Number(document.getElementById('question-count').value);

  if(count<20 || count>40){
    alert('Choisis entre 20 et 40 questions.');
    return;
  }

  quizQuestions=shuffle(questionBank).slice(0,count);
  currentIndex=0;
  score=0;
  answered=false;
  responses=[];

  document.getElementById('quiz-config').style.display='none';
  document.getElementById('quiz-result').style.display='none';
  document.getElementById('quiz-area').style.display='block';

  renderQuestion();
}

function renderQuestion(){
  answered=false;
  const q=quizQuestions[currentIndex];

  document.getElementById('question-number').textContent=
    `Question ${currentIndex+1} / ${quizQuestions.length}`;

  document.getElementById('score-live').textContent='Score : '+score;

  document.getElementById('progress-bar').style.width=
    ((currentIndex)/quizQuestions.length*100)+'%';

  document.getElementById('question-text').textContent=q.prompt;

  const options=shuffle(q.choices);
  const container=document.getElementById('options');

  container.innerHTML='';

  options.forEach((choice,i)=>{
    const div=document.createElement('div');
    div.className='option';

    const letter=document.createElement('span');
    letter.className='option-letter';
    letter.textContent=String.fromCharCode(65+i);

    const label=document.createElement('span');
    label.textContent=choice;

    div.append(letter,label);

    div.onclick=()=>{
      if(answered)return;

      container.querySelectorAll('.option').forEach(o=>o.classList.remove('selected'));
      div.classList.add('selected');
      div.dataset.choice=choice;

      document.getElementById('verify-btn').disabled=false;
    };

    container.appendChild(div);
  });

  const feedback=document.getElementById('feedback');
  feedback.className='feedback';
  feedback.textContent='';

  document.getElementById('verify-btn').style.display='inline-block';
  document.getElementById('verify-btn').disabled=true;
  document.getElementById('next-btn').style.display='none';
}

function verifyAnswer(){
  if(answered)return;

  const selected=document.querySelector('.option.selected');
  if(!selected)return;

  answered=true;

  const q=quizQuestions[currentIndex];
  const userAnswer=selected.dataset.choice;
  const correct=userAnswer===q.answer;

  if(correct)score++;

  responses.push({
    question:q.prompt,
    userAnswer,
    answer:q.answer,
    correct,
    explanation:q.explanation
  });

  document.querySelectorAll('.option').forEach(option=>{
    option.classList.add('disabled');
    const value=option.dataset.choice ||
      option.querySelectorAll('span')[1]?.textContent;

    if(value===q.answer)option.classList.add('correct');
    if(option.classList.contains('selected')&&!correct){
      option.classList.add('wrong');
    }
  });

  const feedback=document.getElementById('feedback');
  feedback.className='feedback show '+(correct?'good':'bad');

  if(correct){
    feedback.innerHTML='<strong>✓ Bonne réponse !</strong><br>Bravo, ta réponse est correcte.<br><br>'+q.explanation;
  }else{
    feedback.innerHTML=
      '<strong>✗ Réponse incorrecte.</strong><br>'+
      'Ta réponse : '+escapeHTML(userAnswer)+
      '<br>Bonne réponse : <strong>'+escapeHTML(q.answer)+'</strong>'+
      '<br><br>'+q.explanation;
  }

  document.getElementById('score-live').textContent='Score : '+score;
  document.getElementById('verify-btn').style.display='none';
  document.getElementById('next-btn').style.display='inline-block';

  document.getElementById('next-btn').textContent=
    currentIndex===quizQuestions.length-1?'Voir mon résultat →':'Next →';
}

function nextQuestion(){
  if(!answered)return;

  currentIndex++;

  if(currentIndex>=quizQuestions.length){
    finishQuiz();
  }else{
    renderQuestion();
  }
}

function finishQuiz(){
  document.getElementById('quiz-area').style.display='none';

  const total=quizQuestions.length;
  const wrong=responses.filter(r=>!r.correct).length;
  const unanswered=total-responses.length;
  const percentage=Math.round(score/total*100);

  document.getElementById('quiz-result').style.display='block';

  document.getElementById('final-score').textContent=score+'/'+total;
  document.getElementById('percentage').textContent=percentage+'%';

  document.getElementById('correct-count').textContent=score;
  document.getElementById('wrong-count').textContent=wrong;
  document.getElementById('unanswered-count').textContent=unanswered;

  let message='Continue à t’entraîner !';

  if(percentage>=90)message='Excellent travail ! Maîtrise remarquable.';
  else if(percentage>=75)message='Très bien ! Tu progresses.';
  else if(percentage>=50)message='Bon effort ! Quelques notions à revoir.';
  else message='Continue tes révisions et réessaie.';

  document.getElementById('result-message').textContent=message;

  const review=document.getElementById('review-list');
  review.innerHTML='';

  const errors=responses.filter(r=>!r.correct);

  if(errors.length===0){
    review.innerHTML='<div class="success-note">Toutes tes réponses sont correctes. Félicitations !</div>';
  }else{
    errors.forEach((r,i)=>{
      const div=document.createElement('div');
      div.className='review-item';

      const title=document.createElement('h4');
      title.textContent='Question '+(i+1);
      div.appendChild(title);

      const question=document.createElement('p');
      question.textContent=r.question;
      div.appendChild(question);

      const user=document.createElement('p');
      user.innerHTML='<span style="color:#c74848;font-weight:bold">Ta réponse :</span> '+escapeHTML(r.userAnswer);
      div.appendChild(user);

      const correct=document.createElement('p');
      correct.innerHTML='<span style="color:#21845b;font-weight:bold">Bonne réponse :</span> '+escapeHTML(r.answer);
      div.appendChild(correct);

      const explanation=document.createElement('p');
      explanation.textContent='Explication : '+r.explanation;
      div.appendChild(explanation);

      review.appendChild(div);
    });
  }

  window.scrollTo({top:document.querySelector('.quiz-window').offsetTop-100,behavior:'smooth'});
}

function escapeHTML(value){
  return String(value).replace(/[&<>"']/g,c=>({
    '&':'&amp;',
    '<':'&lt;',
    '>':'&gt;',
    '"':'&quot;',
    "'":'&#39;'
  })[c]);
}

function quitQuiz(){
  if(!confirm('Voulez-vous vraiment quitter ce quiz ?'))return;
  resetQuiz();
}

function resetQuiz(){
  document.getElementById('quiz-area').style.display='none';
  document.getElementById('quiz-result').style.display='none';
  document.getElementById('quiz-config').style.display='block';

  quizQuestions=[];
  currentIndex=0;
  score=0;
  responses=[];
  answered=false;
}

 