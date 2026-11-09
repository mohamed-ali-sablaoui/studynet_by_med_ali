 "use strict";

// Affichage indépendant des corrigés
document.querySelectorAll(".solution-toggle").forEach(button=>{
  button.addEventListener("click",()=>{
    const solution=button.closest(".exercise").querySelector(".solution");
    const visible=solution.classList.toggle("show");
    button.textContent=visible?"Masquer la solution":"Afficher la solution";
    button.setAttribute("aria-expanded",String(visible));
  });
});

// Banque de questions : les variations de paramètres créent un grand ensemble
// de questions différentes, avec propositions, réponse et explication vérifiées.
const bank=[];
const add=(q,opts,correct,explain,topic)=>bank.push({q,opts,correct,explain,topic});
const shuffle=a=>{const b=[...a];for(let i=b.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[b[i],b[j]]=[b[j],b[i]];}return b;};
const unique=(a)=>[...new Set(a.map(String))];
function mcq(q,correct,wrong,explain,topic){
  const opts=shuffle(unique([correct,...wrong]).slice(0,4));
  add(q,opts,opts.indexOf(String(correct)),explain,topic);
}

// Dérivées de polynômes ax^n + bx + c
for(let a=1;a<=5;a++)for(let n=2;n<=5;n++)for(let b=-3;b<=3;b+=2){
  const c=(a*n)+"x^"+(n-1)+(b>=0?" + "+b:" − "+Math.abs(b));
  const correct=c;
  const wrong=[(a)+"x^"+(n-1)+(b>=0?" + "+b:" − "+Math.abs(b)),(a*n)+"x^"+n+(b>=0?" + "+b:" − "+Math.abs(b)),(a*n)+"x^"+(n-1)+(b>=0?" − "+b:" + "+Math.abs(b))];
  mcq(`Quelle est la dérivée de f(x) = ${a}x^${n} ${b>=0?"+ "+b:"− "+Math.abs(b)}x ?`,correct,wrong,`On applique (axⁿ+bx)' = an·xⁿ⁻¹+b.`, "Polynômes");
}
// Dérivées usuelles
[
 ["x⁶","6x⁵","x⁵","6x⁶","5x⁶","La règle est (xⁿ)'=n·xⁿ⁻¹."],
 ["7x","7","1","7x","0","La dérivée de ax est a."],
 ["−4x³","−12x²","−4x²","12x²","−12x³","On multiplie l'exposant par le coefficient puis on diminue l'exposant de 1."],
 ["√x","1/(2√x)","1/√x","2√x","−1/(2√x)","La dérivée de √x est 1/(2√x), pour x>0."],
 ["1/x","−1/x²","1/x²","−1/x","1/x³","La dérivée de x⁻¹ est −x⁻²."],
 ["eˣ","eˣ","xeˣ","1/eˣ","0","L'exponentielle est sa propre dérivée."],
 ["ln x","1/x","ln x","x","−1/x","La dérivée de ln x est 1/x, pour x>0."],
 ["sin x","cos x","−cos x","sin x","−sin x","La dérivée de sin x est cos x."],
 ["cos x","−sin x","sin x","cos x","−cos x","La dérivée de cos x est −sin x."],
 ["tan x","1/cos²x","−1/cos²x","cos²x","sin x","La dérivée de tan x est 1/cos²x lorsque cos x≠0."]
].forEach(([name,correct,...rest])=>{const wrong=rest.slice(0,3);const exp=rest[3];for(let i=0;i<5;i++)mcq(`Quelle est la dérivée de ${name} ?`,correct,wrong,exp,"Fonctions usuelles");});

// Produits, quotients et compositions
for(let k=2;k<=12;k++){
  mcq(`Quelle est la dérivée de f(x)=(${k}x+1)² ?`,`${2*k}(${k}x+1)`,[`${k}(${k}x+1)`,`2(${k}x+1)`,`2${k}x+1`],`On pose u=${k}x+1. Alors (u²)'=2u'u=${2*k}(${k}x+1).`,"Composées");
  mcq(`Quelle est la dérivée de g(x)=e^(${k}x) ?`,`${k}e^(${k}x)`,[`e^(${k}x)`,`(${k}x)e^(${k}x)`,`−${k}e^(${k}x)`],`(eᵘ)'=u'eᵘ avec u=${k}x.`,"Composées");
  mcq(`Quelle est la dérivée de h(x)=ln(${k}x+1) ?`,`${k}/(${k}x+1)`,[`1/(${k}x+1)`,`${k}ln(${k}x+1)`,`−${k}/(${k}x+1)`],`(ln u)'=u'/u. Ici u'=${k}.`,"Composées");
  mcq(`Quelle est la dérivée de p(x)=sin(${k}x) ?`,`${k}cos(${k}x)`,[`cos(${k}x)`,`−${k}sin(${k}x)`,`−cos(${k}x)`],`(sin u)'=u'cos u.`,"Composées");
}
for(let k=1;k<=20;k++){
  mcq(`La dérivée de f(x)=x²+${k}x est :`,`2x+${k}`,[`x+${k}`,`2x`,`2x²+${k}`],`La dérivée de x² est 2x et celle de ${k}x est ${k}.`,"Calcul");
  mcq(`Pour f(x)=x³−${k}x, f′(x) vaut :`,`3x²−${k}`,[`3x−${k}`,`x²−${k}`,`3x²+${k}`],`On dérive terme à terme : (x³)'=3x² et (−${k}x)'=−${k}.`,"Calcul");
}
// Nombre dérivé / tangente / continuité / variations
for(let a=-5;a<=5;a++){
  mcq(`Si f(x)=x², quelle est la valeur de f′(${a}) ?`,String(2*a),[String(a*a),String(2*a+1),String(-2*a)],`f′(x)=2x, donc f′(${a})=${2*a}.`,"Nombre dérivé");
  mcq(`La tangente à f(x)=x² au point d'abscisse ${a} a pour pente :`,String(2*a),[String(a*a),String(a),String(2*a+2)],`Le coefficient directeur de la tangente est f′(${a})=2×${a}=${2*a}.`,"Tangente");
}
for(let a=1;a<=15;a++){
  mcq(`Si f′(x)=${a} sur un intervalle, f est :`,"strictement croissante",["strictement décroissante","constante","nécessairement discontinue"],"Une dérivée strictement positive implique que la fonction est strictement croissante.","Variations");
  mcq(`Si f′(x)=−${a} sur un intervalle, f est :`,"strictement décroissante",["strictement croissante","constante","non définie"],"Une dérivée strictement négative implique que la fonction est strictement décroissante.","Variations");
}
[
 ["Une fonction dérivable en a est-elle continue en a ?","Oui, toujours.",["Non, jamais.","Seulement si f′(a)=0.","Seulement si f(a)=0."],"La dérivabilité implique la continuité."],
 ["Une fonction continue en a est-elle nécessairement dérivable en a ?","Non.",["Oui, toujours.","Oui si f(a) est positif.","Oui si a≠0."],"La réciproque est fausse : |x| est continue en 0 mais non dérivable en 0."],
 ["Pour f(x)=|x|, que se passe-t-il en 0 ?","f est continue mais non dérivable.",["f est discontinue.","f est dérivable de dérivée 0.","f n'est pas définie."],"Les dérivées à gauche et à droite valent respectivement −1 et +1."],
 ["Si f′(a)=0, peut-on conclure automatiquement à un extremum ?","Non.",["Oui, toujours un maximum.","Oui, toujours un minimum.","La fonction est constante partout."],"Il faut étudier le changement de signe de f′."],
 ["La dérivée seconde f″ renseigne principalement sur :","La convexité et la concavité.",["Le domaine uniquement.","Les asymptotes verticales uniquement.","La continuité uniquement."],"Le signe de f″ permet d'étudier la convexité."],
 ["Une tangente horizontale a pour pente :","0.",["1.","−1.","∞."],"Une droite horizontale a un coefficient directeur nul."],
 ["L'équation de la tangente en a est :","y=f′(a)(x−a)+f(a)",["y=f(a)(x−a)+f′(a)","y=f′(x)(x−a)","y=f(a)+x"],"La tangente passe par (a,f(a)) et a pour pente f′(a)."],
 ["Le théorème de Rolle exige notamment :","f(a)=f(b), continuité sur [a,b] et dérivabilité sur ]a,b[.",["f′(a)=f′(b) uniquement.","f(a)=0 uniquement.","f doit être constante."],"Ce sont les hypothèses nécessaires du théorème de Rolle."],
 ["Le théorème des accroissements finis affirme qu'il existe c tel que :","f′(c)=[f(b)−f(a)]/(b−a)",["f′(c)=f(a)+f(b)","f(c)=f′(a)","f′(c)=0 toujours."],"Le taux d'accroissement entre les extrémités est égal à une dérivée intermédiaire."],
 ["Une asymptote verticale x=a est liée à :","Une limite infinie de f près de a.",["f′(a)=0.","f(a)=0 uniquement.","Une dérivée constante."],"Une asymptote verticale est caractérisée par une limite latérale infinie."],
 ["Une asymptote horizontale y=L est liée à :","Une limite finie L à l'infini.",["Une dérivée nulle en un point.","Une fonction non définie en 0.","Une tangente verticale."],"La limite de f(x) quand x tend vers +∞ ou −∞ vaut L."],
 ["Si f″(x)>0 sur un intervalle, f est :","Convexe.",["Concave.","Constante.","Nécessairement croissante."],"Une dérivée seconde positive caractérise la convexité."],
].forEach(([q,c,w,e])=>{for(let i=0;i<3;i++)mcq(q,c,w,e,"Notions");});

// Questions sur règles de calcul, domaine et limites de dérivabilité
for(let k=2;k<=16;k++){
  mcq(`La dérivée de f(x)=${k}/x est :`,`−${k}/x²`,[`${k}/x²`,`−${k}/x`,`1/${k}x²`],`f(x)=${k}x⁻¹, donc f′(x)=−${k}x⁻².`,"Quotient");
  mcq(`La dérivée de f(x)=√(${k}x+1) est :`,`${k}/(2√(${k}x+1))`,[`1/(2√(${k}x+1))`,`2${k}/√(${k}x+1)`,`−${k}/(2√(${k}x+1))`],`(√u)'=u'/(2√u), avec u'=${k}.`,"Racine");
}
for(let k=1;k<=12;k++){
  mcq(`Pour f(x)=x²−${2*k}x, le point critique est :`,String(k),[String(2*k),String(-k),String(0)],`f′(x)=2x−${2*k}; f′(x)=0 donne x=${k}.`,"Extremum");
}
document.getElementById("bankCount").textContent=bank.length;

let session=[],index=0,score=0,selected=null,checked=false,history=[];
const $=id=>document.getElementById(id);
function start(){
  const count=Number($("questionCount").value);
  session=shuffle(bank).slice(0,count).map(item=>({...item,opts:[...item.opts]}));
  index=0;score=0;selected=null;checked=false;history=[];
  $("quizConfig").hidden=true;$("quizArea").hidden=false;$("result").classList.remove("show");
  renderQuestion();
}
function renderQuestion(){
  const item=session[index];selected=null;checked=false;
  $("questionNumber").textContent=`${index+1}/${session.length}`;
  $("scoreLive").textContent=score;$("answeredLive").textContent=history.length;
  $("progressBar").style.width=`${index/session.length*100}%`;
  $("questionText").textContent=item.q;
  $("answers").innerHTML="";
  item.opts.forEach((option,i)=>{
    const button=document.createElement("button");button.type="button";button.className="answer";
    button.innerHTML=`<span class="answer-letter">${"ABCD"[i]}</span><span></span>`;
    button.querySelector("span:last-child").textContent=option;
    button.addEventListener("click",()=>{
      if(checked)return;
      selected=i;
      document.querySelectorAll(".answer").forEach((el,j)=>el.classList.toggle("selected",j===i));
      $("verifyBtn").disabled=false;
    });
    $("answers").appendChild(button);
  });
  $("feedback").className="feedback";$("feedback").textContent="";
  $("verifyBtn").textContent="Vérifier";$("verifyBtn").disabled=true;
  $("questionHint").textContent="Choisis une proposition.";
}
function verify(){
  if(!checked){
    if(selected===null)return;
    checked=true;
    const item=session[index],good=selected===item.correct;
    if(good)score++;
    history.push({item,selected,good});
    document.querySelectorAll(".answer").forEach((el,i)=>{
      el.disabled=true;
      if(i===item.correct)el.classList.add("correct");
      else if(i===selected)el.classList.add("incorrect");
    });
    const feedback=$("feedback");feedback.className=`feedback show ${good?"good":"bad"}`;
    feedback.innerHTML=`<strong>${good?"Bonne réponse !":"Réponse incorrecte."}</strong> ${good?"":"La bonne réponse est : "+escapeHtml(item.opts[item.correct])+". "}${escapeHtml(item.explain)}`;
    $("scoreLive").textContent=score;$("answeredLive").textContent=history.length;
    $("verifyBtn").textContent=index===session.length-1?"Voir mon résultat":"Next";
    $("questionHint").textContent="Réponse enregistrée.";
  }else{
    index++;
    if(index<session.length)renderQuestion();else finish();
  }
}
function escapeHtml(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
function finish(){
  $("quizArea").hidden=true;
  $("progressBar").style.width="100%";
  const percent=Math.round(score/session.length*100);
  const mistakes=history.filter(h=>!h.good);
  $("result").classList.add("show");
  $("result").innerHTML=`<div class="section-kicker">Résultat final</div><h3 style="margin:5px 0">Quiz terminé !</h3><div class="result-score">${score}/${session.length}</div><p><strong>${percent}% de réussite</strong> · ${score} bonne(s) réponse(s) et ${mistakes.length} erreur(s).</p><p>${percent>=90?"Excellent travail ! Les notions sont très bien maîtrisées.":percent>=70?"Bon résultat. Revois les quelques notions où tu as hésité.":percent>=50?"Résultat encourageant. Reprends les règles et refais un quiz.":"Continue à t'entraîner : relis le cours puis étudie les corrections ci-dessous."}</p><div class="wrong-list"><h3>Correction des réponses incorrectes (${mistakes.length})</h3>${mistakes.length?mistakes.map((h,i)=>`<div class="wrong-item"><strong>${i+1}. ${escapeHtml(h.item.q)}</strong><p>Ta réponse : <span style="color:#b83b32">${escapeHtml(h.item.opts[h.selected])}</span></p><p>Bonne réponse : <strong style="color:#19764a">${escapeHtml(h.item.opts[h.item.correct])}</strong></p><p>${escapeHtml(h.item.explain)}</p><span class="tag">${escapeHtml(h.item.topic)}</span></div>`).join(""):"<p>Parfait : aucune erreur. Toutes les réponses sont correctes.</p>"}</div><div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:20px"><button class="btn btn-orange" id="retryQuiz">Recommencer avec de nouvelles questions</button><button class="btn btn-outline" id="backConfig">Modifier le nombre de questions</button></div>`;
  $("retryQuiz").addEventListener("click",start);
  $("backConfig").addEventListener("click",()=>{$("result").classList.remove("show");$("quizConfig").hidden=false;});
}
$("startQuiz").addEventListener("click",start);
$("verifyBtn").addEventListener("click",verify);

// Navigation active selon la section visible
const links=[...document.querySelectorAll(".quick-nav a")];
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(entry.isIntersecting)links.forEach(link=>link.classList.toggle("active",link.getAttribute("href")==="#"+entry.target.id));
}),{rootMargin:"-25% 0px -65% 0px"});
["cours","exercices","quiz"].forEach(id=>observer.observe(document.getElementById(id)));
 