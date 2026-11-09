 
/* =====================================================
   1. NAVIGATION RESPONSIVE
===================================================== */

function toggleMenu(){
    document.getElementById('sidebar').classList.toggle('open');
    document.getElementById('overlay').classList.toggle('show');
}

document.querySelectorAll('.nav-link').forEach(link=>{
    link.addEventListener('click',()=>{
        document.querySelectorAll('.nav-link').forEach(a=>a.classList.remove('active'));
        link.classList.add('active');

        if(window.innerWidth<=760){
            document.getElementById('sidebar').classList.remove('open');
            document.getElementById('overlay').classList.remove('show');
        }
    });
});

const sections = document.querySelectorAll('main section[id]');

window.addEventListener('scroll',()=>{
    let current = '';

    sections.forEach(section=>{
        if(window.scrollY >= section.offsetTop - 130){
            current = section.id;
        }
    });

    document.querySelectorAll('.nav-link').forEach(link=>{
        link.classList.toggle(
            'active',
            link.getAttribute('href') === '#' + current
        );
    });
});


/* =====================================================
   2. BOUTONS COPIER
===================================================== */

document.querySelectorAll('.copy-btn').forEach(button=>{
    button.addEventListener('click',async()=>{
        const code = button.closest('.codebox').querySelector('pre').innerText;

        try{
            await navigator.clipboard.writeText(code);
            button.textContent = 'Copié !';
            setTimeout(()=>button.textContent='Copier',1500);
        }catch(error){
            button.textContent = 'Copie indisponible';
            setTimeout(()=>button.textContent='Copier',1800);
        }
    });
});


/* =====================================================
   3. GRAPHIQUE ILLUSTRATIF SANS BIBLIOTHÈQUE EXTERNE
===================================================== */

function drawDemoChart(){
    const canvas = document.getElementById('demoChart');
    if(!canvas) return;

    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const ratio = window.devicePixelRatio || 1;

    canvas.width = rect.width * ratio;
    canvas.height = 300 * ratio;

    ctx.scale(ratio,ratio);

    const w = rect.width;
    const h = 300;

    const left = 38;
    const right = 15;
    const top = 20;
    const bottom = 32;

    const plotW = w-left-right;
    const plotH = h-top-bottom;

    const X = x => left + ((x+2*Math.PI)/(4*Math.PI))*plotW;
    const Y = y => top + ((1.2-y)/2.4)*plotH;

    ctx.clearRect(0,0,w,h);

    ctx.strokeStyle = '#e7e3dd';
    ctx.lineWidth = 1;

    for(let i=0;i<=4;i++){
        let y = top + i*plotH/4;
        ctx.beginPath();
        ctx.moveTo(left,y);
        ctx.lineTo(w-right,y);
        ctx.stroke();
    }

    for(let i=0;i<=8;i++){
        let x = left + i*plotW/8;
        ctx.beginPath();
        ctx.moveTo(x,top);
        ctx.lineTo(x,h-bottom);
        ctx.stroke();
    }

    ctx.strokeStyle = '#888';
    ctx.beginPath();
    ctx.moveTo(left,Y(0));
    ctx.lineTo(w-right,Y(0));
    ctx.moveTo(X(0),top);
    ctx.lineTo(X(0),h-bottom);
    ctx.stroke();

    function drawFunction(fn,color){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=2.3;

        for(let i=0;i<=600;i++){
            const x=-2*Math.PI+i*4*Math.PI/600;
            const y=fn(x);

            if(i===0) ctx.moveTo(X(x),Y(y));
            else ctx.lineTo(X(x),Y(y));
        }

        ctx.stroke();
    }

    drawFunction(Math.sin,'#e87532');
    drawFunction(Math.cos,'#25845b');

    ctx.font='11px Arial';
    ctx.fillStyle='#77736e';
    ctx.textAlign='center';

    const labels=['-2π','-π','0','π','2π'];

    labels.forEach((label,i)=>{
        const x=left+i*plotW/4;
        ctx.fillText(label,x,h-9);
    });

    ctx.textAlign='left';
    ctx.fillStyle='#e87532';
    ctx.fillText('sin(x)',left+8,15);

    ctx.fillStyle='#25845b';
    ctx.fillText('cos(x)',left+65,15);
}

drawDemoChart();
window.addEventListener('resize',drawDemoChart);


/* =====================================================
   4. EXERCICES ET CORRECTIONS
===================================================== */

const exercises = [

{
title:"Exercice 1 — Calculs fondamentaux",
level:"FACILE",
topic:"Variables et calculs",
statement:"Créer deux variables a=12 et b=5. Calculer leur somme, leur différence, leur produit, leur quotient et a à la puissance 2.",
questions:[
"Afficher les deux variables.",
"Calculer les cinq opérations.",
"Afficher les résultats."
],
solution:`a = 12;
b = 5;

s = a + b;
d = a - b;
p = a * b;
q = a / b;
pu = a^2;

disp(s);
disp(d);
disp(p);
disp(q);
disp(pu);`,
explanation:"La somme vaut 17, la différence 7, le produit 60, le quotient 2.4 et la puissance 144."
},

{
title:"Exercice 2 — Création de vecteurs",
level:"FACILE",
topic:"Vecteurs",
statement:"Créer un vecteur A contenant les nombres pairs de 2 à 20. Calculer sa somme, sa moyenne et son maximum.",
questions:[
"Créer le vecteur avec l'opérateur deux-points.",
"Calculer la somme.",
"Calculer la moyenne et le maximum."
],
solution:`A = 2:2:20;

s = sum(A);
m = mean(A);
mx = max(A);`,
explanation:"A contient 10 éléments. La somme est 110, la moyenne est 11 et le maximum est 20."
},

{
title:"Exercice 3 — Matrices particulières",
level:"FACILE",
topic:"Matrices",
statement:"Créer une matrice nulle 3×3, une matrice identité 3×3 et une matrice de uns 2×4.",
questions:[
"Utiliser zeros.",
"Utiliser eye.",
"Utiliser ones."
],
solution:`A = zeros(3,3);
B = eye(3);
C = ones(2,4);

disp(A);
disp(B);
disp(C);`,
explanation:"Chaque fonction crée une matrice spéciale dont les dimensions sont indiquées dans les paramètres."
},

{
title:"Exercice 4 — Extraction des éléments",
level:"FACILE",
topic:"Matrices",
statement:"Soit A=[1 2 3; 4 5 6; 7 8 9]. Extraire la deuxième ligne, la première colonne et la sous-matrice des deux premières lignes et colonnes.",
questions:[
"Extraire la deuxième ligne.",
"Extraire la première colonne.",
"Construire la sous-matrice demandée."
],
solution:`A = [1 2 3; 4 5 6; 7 8 9];

L = A(2,:);
C = A(:,1);
B = A(1:2,1:2);`,
explanation:"Le symbole : sélectionne toute une dimension. Les intervalles 1:2 sélectionnent les deux premiers indices."
},

{
title:"Exercice 5 — Opérations matricielles",
level:"FACILE",
topic:"Algèbre matricielle",
statement:"Soient A=[1 2; 3 4] et B=[5 6; 7 8]. Calculer A+B, A-B, A*B et A.*B.",
questions:[
"Effectuer l'addition.",
"Effectuer la soustraction.",
"Comparer les deux multiplications."
],
solution:`A = [1 2; 3 4];
B = [5 6; 7 8];

S = A + B;
D = A - B;
P1 = A * B;
P2 = A .* B;`,
explanation:"A*B effectue une multiplication matricielle. A.*B multiplie les éléments qui occupent les mêmes positions."
},

{
title:"Exercice 6 — Déterminant et inverse",
level:"MOYEN",
topic:"Matrices",
statement:"Soit A=[2 1; 5 3]. Calculer son déterminant, son inverse et vérifier le produit A*inv(A).",
questions:[
"Calculer det(A).",
"Calculer inv(A).",
"Vérifier l'identité."
],
solution:`A = [2 1; 5 3];

d = det(A);
B = inv(A);
C = A * B;`,
explanation:"Le déterminant vaut 2×3-5×1=1. La matrice est inversible et A*inv(A) donne la matrice identité."
},

{
title:"Exercice 7 — Rang d'une matrice",
level:"MOYEN",
topic:"Algèbre linéaire",
statement:"Étudier le rang de A=[1 2 3; 2 4 6; 1 1 1].",
questions:[
"Créer la matrice.",
"Calculer son rang.",
"Interpréter le résultat."
],
solution:`A = [1 2 3;
     2 4 6;
     1 1 1];

r = rank(A);`,
explanation:"La deuxième ligne est le double de la première. Les trois lignes ne sont donc pas indépendantes. Le rang est 2."
},

{
title:"Exercice 8 — Fonctions mathématiques",
level:"MOYEN",
topic:"Fonctions",
statement:"Créer un vecteur x de 0 à 2π avec 13 points. Calculer sin(x), cos(x) et exp(x).",
questions:[
"Créer le vecteur avec linspace.",
"Calculer les trois fonctions.",
"Afficher les résultats."
],
solution:`x = linspace(0,2*pi,13);

y1 = sin(x);
y2 = cos(x);
y3 = exp(x);

disp(y1);
disp(y2);
disp(y3);`,
explanation:"Les fonctions sont appliquées à chaque élément du vecteur. Les angles sont exprimés en radians."
},

{
title:"Exercice 9 — Résolution d'équations",
level:"MOYEN",
topic:"Polynômes",
statement:"Résoudre x²-5x+6=0 en utilisant la commande roots.",
questions:[
"Créer le vecteur des coefficients.",
"Calculer les racines.",
"Vérifier les solutions."
],
solution:`p = [1 -5 6];

r = roots(p);

verification = polyval(p,r);`,
explanation:"Les solutions sont 2 et 3. L'évaluation du polynôme en chacune de ces valeurs donne zéro."
},

{
title:"Exercice 10 — Tracer une parabole",
level:"MOYEN",
topic:"Graphiques",
statement:"Tracer f(x)=x²-4x+3 sur [-2,6] avec un titre, une légende et une grille.",
questions:[
"Créer x avec un pas de 0.1.",
"Calculer f(x) avec .^.",
"Tracer la fonction et personnaliser le graphique."
],
solution:`x = -2:0.1:6;

y = x.^2 - 4*x + 3;

plot(x,y,'r','linewidth',2);

grid on;
title('f(x) = x^2 - 4x + 3');
xlabel('x');
ylabel('f(x)');
legend('Parabole');`,
explanation:"On utilise .^ car x est un vecteur. La courbe est une parabole qui coupe l'axe horizontal en 1 et 3."
},

{
title:"Exercice 11 — Tracer deux fonctions",
level:"MOYEN",
topic:"Graphiques",
statement:"Représenter f(x)=sin(x) et g(x)=cos(x) sur [-2π,2π] dans la même fenêtre.",
questions:[
"Créer le vecteur x.",
"Calculer les deux fonctions.",
"Tracer les deux courbes avec deux couleurs différentes."
],
solution:`x = -2*pi:0.01:2*pi;

f = sin(x);
g = cos(x);

plot(x,f,'r',x,g,'b');

grid on;
legend('sin(x)','cos(x)');
xlabel('x');
ylabel('Valeur');
title('Sinus et cosinus');`,
explanation:"La commande plot peut recevoir plusieurs couples de vecteurs. La légende permet d'identifier les deux fonctions."
},

{
title:"Exercice 12 — Résoudre un système",
level:"MOYEN",
topic:"Systèmes linéaires",
statement:"Résoudre le système 3x+2y=12 et x-y=1.",
questions:[
"Construire la matrice A.",
"Construire le vecteur B.",
"Calculer X=A\\B et vérifier."
],
solution:`A = [3 2; 1 -1];

B = [12; 1];

X = A \\ B;

verification = A * X;`,
explanation:"La solution est x=2.8 et y=1.8. La multiplication A*X doit redonner le vecteur B."
},

{
title:"Exercice 13 — Créer une fonction",
level:"MOYEN",
topic:"Fonctions personnelles",
statement:"Créer une fonction qui reçoit un nombre x et retourne x³+2x²-5x+1.",
questions:[
"Écrire la fonction polynome.m.",
"Utiliser la fonction pour x=2.",
"Tester également avec un vecteur."
],
solution:`function y = polynome(x)
    y = x.^3 + 2*x.^2 - 5*x + 1;
endfunction

% Dans la fenêtre de commandes :
polynome(2)
polynome([1 2 3])`,
explanation:"Les opérateurs .^ permettent aussi d'appliquer la fonction à chaque élément d'un vecteur."
},

{
title:"Exercice 14 — Étude d'une matrice",
level:"DIFFICILE",
topic:"Algèbre linéaire",
statement:"Soit A=[2 1 0; 1 2 1; 0 1 2]. Calculer son déterminant, son rang, sa trace et ses valeurs propres.",
questions:[
"Calculer les quatre grandeurs.",
"Vérifier que le déterminant est non nul.",
"En déduire que la matrice est inversible."
],
solution:`A = [2 1 0;
     1 2 1;
     0 1 2];

d = det(A);
r = rank(A);
t = trace(A);
v = eig(A);`,
explanation:"Le déterminant est 4, le rang est 3 et la trace est 6. Les trois valeurs propres sont non nulles."
},

{
title:"Exercice 15 — Matrice et polynôme",
level:"DIFFICILE",
topic:"Matrices et fonctions",
statement:"Créer A=[1 2; 3 4], calculer A², déterminer ses valeurs propres et tracer le polynôme P(x)=x²-5x+4.",
questions:[
"Calculer la puissance matricielle.",
"Calculer les valeurs propres.",
"Tracer le polynôme."
],
solution:`A = [1 2; 3 4];

B = A^2;

v = eig(A);

x = -2:0.1:6;
y = x.^2 - 5*x + 4;

plot(x,y,'r');
grid on;
title('P(x) = x^2 - 5x + 4');`,
explanation:"Il faut distinguer A^2 de A.^2. Les valeurs propres sont les solutions de l'équation caractéristique."
},

{
title:"Exercice 16 — Étude graphique complète",
level:"DIFFICILE",
topic:"Courbes",
statement:"Étudier graphiquement f(x)=x³-3x sur [-3,3]. Tracer également sa dérivée f'(x)=3x²-3.",
questions:[
"Créer le vecteur x.",
"Calculer les deux fonctions.",
"Représenter les deux courbes et ajouter une légende."
],
solution:`x = -3:0.01:3;

f = x.^3 - 3*x;
df = 3*x.^2 - 3;

plot(x,f,'r',x,df,'b');

grid on;
xlabel('x');
ylabel('Valeur');
legend('f(x)','f''(x)');
title('Fonction et dérivée');`,
explanation:"Les deux courbes permettent de comparer les valeurs de la fonction et de sa dérivée sur le même intervalle."
},

{
title:"Exercice 17 — Surface en trois dimensions",
level:"DIFFICILE",
topic:"Graphiques 3D",
statement:"Représenter la surface z=x²+y² sur [-3,3]×[-3,3].",
questions:[
"Créer les vecteurs x et y.",
"Utiliser meshgrid.",
"Calculer Z et tracer la surface."
],
solution:`x = -3:0.1:3;
y = -3:0.1:3;

[X,Y] = meshgrid(x,y);

Z = X.^2 + Y.^2;

surf(X,Y,Z);

xlabel('X');
ylabel('Y');
zlabel('Z');

title('Surface z = x^2 + y^2');
grid on;`,
explanation:"meshgrid crée deux matrices de coordonnées. La matrice Z contient la valeur de la fonction en chaque point."
},

{
title:"Exercice 18 — Analyse statistique",
level:"DIFFICILE",
topic:"Statistiques",
statement:"Soit V=[12 14 15 9 18 16 14 12 20 10]. Calculer la moyenne, la médiane, le minimum, le maximum et l'écart-type.",
questions:[
"Créer le vecteur.",
"Calculer les indicateurs.",
"Afficher les résultats."
],
solution:`V = [12 14 15 9 18 16 14 12 20 10];

m = mean(V);
med = median(V);
mn = min(V);
mx = max(V);
e = std(V);

disp(m);
disp(med);
disp(mn);
disp(mx);
disp(e);`,
explanation:"Les commandes statistiques analysent directement les valeurs du vecteur. std utilise par défaut l'écart-type d'échantillon."
},

{
title:"Exercice 19 — Problème complet : matrices et graphiques",
level:"TRÈS DIFFICILE",
topic:"Problème de synthèse",
statement:"On considère A=[2 1; 1 3] et B=[5; 7]. Résoudre AX=B. Ensuite, tracer f(x)=x²-2x-3 et déterminer ses racines avec roots.",
questions:[
"Calculer la solution du système.",
"Calculer le déterminant de A.",
"Calculer les racines du polynôme.",
"Tracer le polynôme et interpréter les intersections avec l'axe des abscisses."
],
solution:`A = [2 1; 1 3];
B = [5; 7];

X = A \\ B;

d = det(A);

p = [1 -2 -3];
r = roots(p);

x = -4:0.01:5;
y = polyval(p,x);

plot(x,y,'r','linewidth',2);
hold on;
plot(x,zeros(size(x)),'k--');
hold off;

grid on;
legend('f(x)','Axe des abscisses');`,
explanation:"Le système donne x=1.6 et y=1.8. Le déterminant vaut 5. Le polynôme possède les racines -1 et 3."
},

{
title:"Exercice 20 — Problème de synthèse avancé",
level:"TRÈS DIFFICILE",
topic:"Projet de TP",
statement:"Construire un programme qui crée une matrice 3×3, calcule son déterminant, son rang, sa transposée, ses valeurs propres et représente graphiquement le polynôme P(x)=x³-2x²-x+2.",
questions:[
"Créer la matrice A.",
"Calculer les informations demandées.",
"Construire le vecteur de valeurs x.",
"Calculer le polynôme et tracer sa courbe.",
"Ajouter une grille, un titre et une légende."
],
solution:`clc;
clear;
close all;

A = [1 2 1;
     2 1 0;
     1 0 2];

d = det(A);
r = rank(A);
T = A';
v = eig(A);

p = [1 -2 -1 2];

x = -3:0.01:4;
y = polyval(p,x);

figure;
plot(x,y,'r','linewidth',2);

hold on;
plot(x,zeros(size(x)),'k--');
hold off;

grid on;
title('P(x) = x^3 - 2x^2 - x + 2');
xlabel('x');
ylabel('P(x)');
legend('Polynôme','Axe des abscisses');

disp(d);
disp(r);
disp(T);
disp(v);`,
explanation:"Le programme rassemble les opérations matricielles, l'algèbre linéaire, les polynômes et la représentation graphique. Les racines du polynôme sont -1, 1 et 2."
}

];

function renderExercises(){
    const container = document.getElementById('exerciseContainer');

    container.innerHTML = exercises.map((ex,i)=>`
        <article class="exercise">
            <div class="exercise-top">
                <h3>${ex.title}</h3>
                <span class="level">${ex.level}</span>
            </div>

            <span class="tag">${ex.topic}</span>

            <p>${ex.statement}</p>

            <ol>
                ${ex.questions.map(q=>`<li>${q}</li>`).join('')}
            </ol>

            <button class="btn btn-secondary" onclick="toggleSolution(${i})">
                Afficher la correction
            </button>

            <div class="solution" id="solution-${i}">
                <strong>Solution proposée :</strong>
                <pre>${escapeHTML(ex.solution)}</pre>
                <strong>Explication :</strong>
                <p>${ex.explanation}</p>
            </div>
        </article>
    `).join('');
}

function toggleSolution(index){
    const solution = document.getElementById('solution-'+index);
    solution.classList.toggle('show');

    const button = solution.previousElementSibling;
    button.textContent = solution.classList.contains('show')
        ? 'Masquer la correction'
        : 'Afficher la correction';
}

function escapeHTML(str){
    return str.replace(/[&<>"']/g,char=>({
        '&':'&amp;',
        '<':'&lt;',
        '>':'&gt;',
        '"':'&quot;',
        "'":'&#039;'
    }[char]));
}

renderExercises();


/* =====================================================
   5. BANQUE DE 200 QUESTIONS
   20 THÈMES × 10 VARIANTES
===================================================== */

const quizFactories = [

/* 1. Addition */
(n)=>({
q:`Quel est le résultat de ${n+2} + ${n+5} ?`,
a:n*0+2*n+7,
o:[2*n+7,2*n+5,2*n+9,2*n+6],
e:"L'addition consiste à additionner les deux nombres."
}),

/* 2. Multiplication */
(n)=>({
q:`Quel est le résultat de ${n+2} * ${n+3} ?`,
a:(n+2)*(n+3),
o:[(n+2)*(n+3),(n+2)+(n+3),(n+2)*(n+2),(n+3)*(n+3)],
e:"L'opérateur * effectue une multiplication."
}),

/* 3. Vecteurs */
(n)=>({
q:`Quelle est la valeur de V(${n+1}) si V = 1:${n+3} ?`,
a:n+1,
o:[n+1,n,n+2,n+3],
e:"Les indices commencent à 1. V(1)=1, V(2)=2, etc."
}),

/* 4. Somme */
(n)=>({
q:`Quel est le résultat de sum(1:${n+1}) ?`,
a:(n+1)*(n+2)/2,
o:[(n+1)*(n+2)/2,n+1,n*(n+1)/2,n+2],
e:"La somme des entiers de 1 à m vaut m(m+1)/2."
}),

/* 5. Taille */
(n)=>({
q:`Quelle est la taille de A si A = zeros(${n+1},${n+2}) ?`,
a:`${n+1} × ${n+2}`,
o:[`${n+1} × ${n+2}`,`${n+2} × ${n+1}`,`${n+1} × ${n+1}`,`${n+2} × ${n+2}`],
e:"zeros(m,n) crée une matrice de m lignes et n colonnes."
}),

/* 6. Matrice identité */
(n)=>({
q:`Combien de valeurs égales à 1 contient eye(${n+2}) sur sa diagonale ?`,
a:n+2,
o:[n+2,n+1,(n+2)**2,1],
e:"Une matrice identité d'ordre n possède n éléments égaux à 1 sur sa diagonale."
}),

/* 7. Déterminant */
(n)=>({
q:`Quel est le déterminant de [${n+2} 0; 0 ${n+3}] ?`,
a:(n+2)*(n+3),
o:[(n+2)*(n+3),n+2+n+3,n+2,n+3],
e:"Pour une matrice diagonale 2×2, le déterminant est le produit des éléments diagonaux."
}),

/* 8. Transposition */
(n)=>({
q:`Si A possède ${n+1} lignes et ${n+2} colonnes, quelle est la dimension de A' ?`,
a:`${n+2} × ${n+1}`,
o:[`${n+2} × ${n+1}`,`${n+1} × ${n+2}`,`${n+1} × ${n+1}`,`${n+2} × ${n+2}`],
e:"La transposition échange les lignes et les colonnes."
}),

/* 9. Multiplication */
(n)=>({
q:`Quelle est la dimension du produit A*B si A est ${n+1}×2 et B est 2×${n+2} ?`,
a:`${n+1} × ${n+2}`,
o:[`${n+1} × ${n+2}`,`2 × 2`,`2 × ${n+2}`,`${n+2} × ${n+1}`],
e:"Pour A(m×n)*B(n×p), le résultat est de dimension m×p."
}),

/* 10. Sinus */
(n)=>({
q:`Quelle est la valeur de sin(pi/${n===0?2:2}) ?`,
a:"1",
o:["1","0","-1","0.5"],
e:"sin(pi/2)=1. Les fonctions trigonométriques utilisent les radians."
}),

/* 11. Cosinus */
(n)=>({
q:`Quelle est la valeur de cos(0) ?`,
a:"1",
o:["1","0","-1","0.5"],
e:"Le cosinus de zéro vaut 1."
}),

/* 12. Exponentielle */
(n)=>({
q:`Quelle commande calcule l'exponentielle de ${n+1} ?`,
a:`exp(${n+1})`,
o:[`exp(${n+1})`,`log(${n+1})`,`sqrt(${n+1})`,`abs(${n+1})`],
e:"La commande exp(x) calcule e puissance x."
}),

/* 13. Puissance élémentaire */
(n)=>({
q:`Quelle commande calcule le carré de chaque élément de X ?`,
a:"X.^2",
o:["X.^2","X^2","X*2","X/2"],
e:"L'opérateur .^ applique la puissance élément par élément."
}),

/* 14. Boucle */
(n)=>({
q:`Combien de fois s'exécute for i=1:${n+2} ?`,
a:n+2,
o:[n+2,n+1,n+3,2*(n+2)],
e:"La boucle parcourt les entiers de 1 à n+2 inclus."
}),

/* 15. Polynômes */
(n)=>({
q:`Quelle commande permet de calculer les racines d'un polynôme p ?`,
a:"roots(p)",
o:["roots(p)","polyval(p)","det(p)","rank(p)"],
e:"roots(p) calcule les racines d'un polynôme défini par ses coefficients."
}),

/* 16. Évaluation */
(n)=>({
q:`Quelle commande calcule P(${n+1}) pour un polynôme p ?`,
a:`polyval(p,${n+1})`,
o:[`polyval(p,${n+1})`,`roots(p)`,`polyder(p)`,`det(p)`],
e:"polyval(p,x) évalue le polynôme en x."
}),

/* 17. Graphique */
(n)=>({
q:"Quelle commande permet de tracer une courbe en deux dimensions ?",
a:"plot(x,y)",
o:["plot(x,y)","det(x,y)","roots(x,y)","eye(x,y)"],
e:"plot(x,y) représente les valeurs y en fonction des valeurs x."
}),

/* 18. Grille */
(n)=>({
q:"Quelle commande permet d'afficher la grille d'un graphique ?",
a:"grid on",
o:["grid on","grid off","hold off","close all"],
e:"grid on active la grille."
}),

/* 19. Système linéaire */
(n)=>({
q:"Quelle instruction résout le système AX=B ?",
a:"X = A \\ B",
o:["X = A \\ B","X = A * B","X = A + B","X = det(A)"],
e:"L'opérateur de division à gauche permet de résoudre un système linéaire."
}),

/* 20. Matrices et fonctions */
(n)=>({
q:`Soit A=eye(${n+2}). Quel est le déterminant de A ?`,
a:"1",
o:["1","0",String(n+2),String((n+2)**2)],
e:"Le déterminant de la matrice identité est égal à 1."
})

];


/* =====================================================
   6. GÉNÉRATION DES 200 QUESTIONS
===================================================== */

const questionBank = [];

quizFactories.forEach((factory,topicIndex)=>{
    for(let i=0;i<10;i++){

        const q = factory(i);

        const level =
            i<3 ? 'easy' :
            i<7 ? 'medium' :
            'hard';

        questionBank.push({
            id:topicIndex*10+i,
            ...q,
            level
        });
    }
});


/* =====================================================
   7. MÉLANGE DES QUESTIONS ET PROPOSITIONS
===================================================== */

function shuffle(array){
    const result = [...array];

    for(let i=result.length-1;i>0;i--){
        const j=Math.floor(Math.random()*(i+1));
        [result[i],result[j]]=[result[j],result[i]];
    }

    return result;
}

function prepareQuestion(question){

    const unique = [...new Set([
        question.a,
        ...question.o
    ].map(String))];

    let options = unique;

    if(options.length<4){
        const alternatives = [
            "Aucune des réponses",
            "Toutes les réponses",
            "Erreur de syntaxe"
        ];

        alternatives.forEach(value=>{
            if(options.length<4 && !options.includes(value)){
                options.push(value);
            }
        });
    }

    return {
        ...question,
        options:shuffle(options).slice(0,4),
        answer:String(question.a)
    };
}


/* =====================================================
   8. VARIABLES DU QUIZ
===================================================== */

let quizQuestions=[];
let currentQuestion=0;
let score=0;
let verified=false;
let selectedAnswer=null;
let quizMistakes=[];


/* =====================================================
   9. DÉMARRER
===================================================== */

function startQuiz(){

    const count = Number(document.getElementById('questionCount').value);
    const level = document.getElementById('quizLevel').value;

    let available = questionBank;

    if(level!=='all'){
        available = questionBank.filter(q=>q.level===level);
    }

    if(available.length<count){
        alert("Pas assez de questions disponibles pour ce niveau.");
        return;
    }

    quizQuestions=shuffle(available)
        .slice(0,count)
        .map(prepareQuestion);

    currentQuestion=0;
    score=0;
    verified=false;
    selectedAnswer=null;
    quizMistakes=[];

    document.getElementById('quizSetup').style.display='none';
    document.getElementById('quizArea').style.display='block';
    document.getElementById('quizResult').style.display='none';

    showQuestion();
}


/* =====================================================
   10. AFFICHER UNE QUESTION
===================================================== */

function showQuestion(){

    const q=quizQuestions[currentQuestion];

    verified=false;
    selectedAnswer=null;

    document.getElementById('questionNumber').textContent=
        `Question ${currentQuestion+1} / ${quizQuestions.length}`;

    document.getElementById('scoreLive').textContent=
        `Score : ${score}`;

    document.getElementById('progressBar').style.width=
        `${(currentQuestion/quizQuestions.length)*100}%`;

    document.getElementById('questionText').textContent=q.q;

    document.getElementById('feedback').className='feedback';
    document.getElementById('feedback').textContent='';

    document.getElementById('verifyButton').style.display='inline-block';
    document.getElementById('nextButton').style.display='none';

    const container=document.getElementById('answers');

    container.innerHTML='';

    q.options.forEach((option,index)=>{

        const label=document.createElement('label');
        label.className='answer';

        const radio=document.createElement('input');
        radio.type='radio';
        radio.name='quizAnswer';
        radio.value=option;

        radio.addEventListener('change',()=>{
            if(verified) return;

            selectedAnswer=option;

            document.querySelectorAll('.answer').forEach(el=>{
                el.classList.remove('selected');
            });

            label.classList.add('selected');
        });

        const span=document.createElement('span');
        span.textContent=String.fromCharCode(65+index)+'. '+option;

        label.appendChild(radio);
        label.appendChild(span);

        container.appendChild(label);
    });
}


/* =====================================================
   11. VÉRIFIER UNE RÉPONSE
===================================================== */

function verifyAnswer(){

    if(verified) return;

    if(selectedAnswer===null){
        alert("Choisis une proposition avant de vérifier.");
        return;
    }

    const q=quizQuestions[currentQuestion];

    const good=selectedAnswer===q.answer;

    verified=true;

    if(good){
        score++;
    }else{
        quizMistakes.push({
            question:q.q,
            selected:selectedAnswer,
            answer:q.answer,
            explanation:q.e
        });
    }

    document.querySelectorAll('.answer').forEach(label=>{

        const radio=label.querySelector('input');
        radio.disabled=true;

        if(radio.value===q.answer){
            label.classList.add('correct');
        }

        if(radio.value===selectedAnswer && !good){
            label.classList.add('wrong');
        }
    });

    const feedback=document.getElementById('feedback');

    feedback.className='feedback show '+(good?'good':'bad');

    feedback.innerHTML='';

    const result=document.createElement('strong');
    result.textContent=good
        ? '✓ Bonne réponse !'
        : '✗ Réponse incorrecte.';

    const correct=document.createElement('p');
    correct.textContent='Réponse correcte : '+q.answer;

    const explanation=document.createElement('p');
    explanation.textContent=q.e;

    feedback.append(result,correct,explanation);

    document.getElementById('scoreLive').textContent=
        `Score : ${score}`;

    document.getElementById('verifyButton').style.display='none';
    document.getElementById('nextButton').style.display='inline-block';

    if(currentQuestion===quizQuestions.length-1){
        document.getElementById('nextButton').textContent='Voir mon résultat';
    }
}


/* =====================================================
   12. QUESTION SUIVANTE
===================================================== */

function nextQuestion(){

    if(!verified) return;

    if(currentQuestion<quizQuestions.length-1){
        currentQuestion++;
        showQuestion();
    }else{
        finishQuiz();
    }
}


/* =====================================================
   13. RÉSULTAT FINAL
===================================================== */

function finishQuiz(){

    const total=quizQuestions.length;
    const note=(score/total)*20;

    document.getElementById('quizArea').style.display='none';
    document.getElementById('quizResult').style.display='block';

    document.getElementById('progressBar').style.width='100%';

    document.getElementById('finalScore').textContent=
        note.toFixed(2)+'/20';

    let message='';

    if(note>=16){
        message='Excellent travail ! Tu maîtrises très bien les notions évaluées.';
    }else if(note>=14){
        message='Très bon résultat. Continue à approfondir les notions difficiles.';
    }else if(note>=10){
        message='Résultat satisfaisant. Quelques révisions supplémentaires seront utiles.';
    }else if(note>=8){
        message='Tu progresses. Revois les chapitres et entraîne-toi davantage.';
    }else{
        message='Il faut reprendre les bases du cours et refaire les exercices.';
    }

    document.getElementById('resultMessage').textContent=message;

    document.getElementById('resultStats').innerHTML=`
        <div class="command-grid">
            <div class="command-item">
                <code>${score}</code>
                <p>Bonnes réponses</p>
            </div>
            <div class="command-item">
                <code>${total-score}</code>
                <p>Mauvaises réponses</p>
            </div>
            <div class="command-item">
                <code>${total}</code>
                <p>Questions traitées</p>
            </div>
            <div class="command-item">
                <code>${Math.round(score/total*100)}%</code>
                <p>Réussite</p>
            </div>
        </div>
    `;

    const mistakes=document.getElementById('mistakes');

    mistakes.innerHTML='';

    if(quizMistakes.length===0){
        mistakes.innerHTML=`
            <div class="success">
                Félicitations ! Tu as répondu correctement à toutes les questions.
            </div>
        `;
    }else{

        quizMistakes.forEach((item,index)=>{

            const article=document.createElement('div');
            article.className='result-item';

            const title=document.createElement('strong');
            title.textContent=`Question ${index+1} : ${item.question}`;

            const wrong=document.createElement('p');
            wrong.className='wrong-answer';
            wrong.textContent='Ta réponse : '+item.selected;

            const correct=document.createElement('p');
            correct.className='right-answer';
            correct.textContent='Bonne réponse : '+item.answer;

            const explanation=document.createElement('p');
            explanation.textContent='Explication : '+item.explanation;

            article.append(title,wrong,correct,explanation);

            mistakes.appendChild(article);
        });
    }

    window.scrollTo({
        top:document.getElementById('quiz').offsetTop-85,
        behavior:'smooth'
    });
}


/* =====================================================
   14. RECOMMENCER
===================================================== */

function restartQuiz(){

    document.getElementById('quizResult').style.display='none';
    document.getElementById('quizSetup').style.display='block';

    window.scrollTo({
        top:document.getElementById('quiz').offsetTop-85,
        behavior:'smooth'
    });
}

function quitQuiz(){

    if(!confirm("Voulez-vous quitter cette évaluation ? Votre progression actuelle sera perdue.")){
        return;
    }

    document.getElementById('quizArea').style.display='none';
    document.getElementById('quizSetup').style.display='block';
}

 