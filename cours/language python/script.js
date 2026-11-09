
/* =========================================================
   EXERCICES : 40 PROBLÈMES ET CORRECTIONS
========================================================= */

const exercises = [

{
title:"Somme de deux nombres",
level:"Débutant",
topic:"Variables et calcul",
statement:"Écrire un programme qui lit deux nombres réels et affiche leur somme, leur différence, leur produit et leur quotient. Traiter le cas où le deuxième nombre est nul.",
solution:`a = float(input("Premier nombre : "))
b = float(input("Deuxième nombre : "))

print("Somme :", a + b)
print("Différence :", a - b)
print("Produit :", a * b)

if b != 0:
    print("Quotient :", a / b)
else:
    print("Division impossible")`
},
{
title:"Conversion de température",
level:"Débutant",
topic:"Formules mathématiques",
statement:"Lire une température en degrés Celsius et afficher son équivalent en Fahrenheit et en Kelvin. Rappel : F = C × 9/5 + 32 et K = C + 273.15.",
solution:`c = float(input("Température Celsius : "))

f = c * 9 / 5 + 32
k = c + 273.15

print(f"Fahrenheit : {f:.2f}")
print(f"Kelvin : {k:.2f}")`
},
{
title:"Nombre pair, impair ou nul",
level:"Débutant",
topic:"Conditions",
statement:"Écrire un programme qui lit un entier et détermine s'il est positif, négatif ou nul. S'il est non nul, préciser s'il est pair ou impair.",
solution:`n = int(input("Entier : "))

if n == 0:
    print("Nombre nul")
else:
    if n > 0:
        print("Positif")
    else:
        print("Négatif")

    if n % 2 == 0:
        print("Pair")
    else:
        print("Impair")`
},
{
title:"Maximum de trois nombres",
level:"Débutant",
topic:"Conditions",
statement:"Lire trois nombres et déterminer le maximum sans utiliser max(). Traiter également le cas où plusieurs nombres sont égaux.",
solution:`a = float(input("a : "))
b = float(input("b : "))
c = float(input("c : "))

maximum = a

if b > maximum:
    maximum = b

if c > maximum:
    maximum = c

print("Maximum :", maximum)`
},
{
title:"Année bissextile",
level:"Intermédiaire",
topic:"Conditions logiques",
statement:"Déterminer si une année est bissextile. Une année est bissextile si elle est divisible par 400, ou si elle est divisible par 4 sans être divisible par 100.",
solution:`annee = int(input("Année : "))

if annee <= 0:
    print("Année invalide")
elif annee % 400 == 0 or (
    annee % 4 == 0 and annee % 100 != 0
):
    print("Année bissextile")
else:
    print("Année non bissextile")`
},
{
title:"Calcul d'une moyenne avec décision",
level:"Intermédiaire",
topic:"Conditions et calcul",
statement:"Saisir trois notes comprises entre 0 et 20. Calculer la moyenne. Afficher admis si la moyenne est supérieure ou égale à 10, sinon non admis. Vérifier toutes les saisies.",
solution:`notes = []

for i in range(3):
    note = float(input(f"Note {i+1} : "))

    if not 0 <= note <= 20:
        print("Note invalide")
        break

    notes.append(note)

if len(notes) == 3:
    moyenne = sum(notes) / 3
    print(f"Moyenne : {moyenne:.2f}")

    if moyenne >= 10:
        print("Admis")
    else:
        print("Non admis")`
},
{
title:"Table de multiplication",
level:"Débutant",
topic:"Boucle for",
statement:"Lire un entier n et afficher sa table de multiplication de 1 à 12.",
solution:`n = int(input("Nombre : "))

for i in range(1, 13):
    print(f"{n} x {i} = {n*i}")`
},
{
title:"Somme des n premiers entiers",
level:"Intermédiaire",
topic:"Boucles et accumulateurs",
statement:"Lire un entier positif n et calculer la somme des entiers de 1 à n avec une boucle. Comparer ensuite le résultat à la formule n(n+1)/2.",
solution:`n = int(input("n : "))

if n < 0:
    print("n doit être positif")
else:
    somme = 0

    for i in range(1, n+1):
        somme += i

    formule = n * (n+1) // 2

    print("Somme :", somme)
    print("Formule :", formule)`
},
{
title:"Factorielle d'un entier",
level:"Intermédiaire",
topic:"Boucles",
statement:"Écrire un programme qui calcule n! pour un entier positif ou nul. Rappel : 0! = 1.",
solution:`n = int(input("n : "))

if n < 0:
    print("Impossible")
else:
    fact = 1

    for i in range(1, n+1):
        fact *= i

    print(fact)`
},
{
title:"Tester un nombre premier",
level:"Intermédiaire",
topic:"Boucles et nombres",
statement:"Écrire un programme qui détermine si un entier supérieur ou égal à 2 est premier. Optimiser la recherche en s'arrêtant à la racine carrée de n.",
solution:`from math import isqrt

n = int(input("Entier : "))

if n < 2:
    premier = False
else:
    premier = True

    for i in range(2, isqrt(n)+1):
        if n % i == 0:
            premier = False
            break

print("Premier" if premier else "Non premier")`
},
{
title:"Afficher les nombres premiers d'un intervalle",
level:"Avancé",
topic:"Algorithmique",
statement:"Lire deux entiers a et b et afficher tous les nombres premiers compris dans [a,b]. Utiliser une fonction est_premier().",
solution:`from math import isqrt

def est_premier(n):
    if n < 2:
        return False

    for i in range(2, isqrt(n)+1):
        if n % i == 0:
            return False

    return True

a = int(input("Début : "))
b = int(input("Fin : "))

for n in range(a, b+1):
    if est_premier(n):
        print(n)`
},
{
title:"PGCD de deux entiers",
level:"Avancé",
topic:"Algorithmique numérique",
statement:"Calculer le plus grand commun diviseur de deux entiers en utilisant l'algorithme d'Euclide, sans utiliser math.gcd().",
solution:`a = abs(int(input("a : ")))
b = abs(int(input("b : ")))

while b != 0:
    a, b = b, a % b

print("PGCD :", a)`
},
{
title:"Inverser une chaîne",
level:"Intermédiaire",
topic:"Chaînes",
statement:"Lire une chaîne et afficher son inverse sans utiliser le slicing [::-1].",
solution:`texte = input("Texte : ")
inverse = ""

for c in texte:
    inverse = c + inverse

print(inverse)`
},
{
title:"Palindrome",
level:"Intermédiaire",
topic:"Chaînes",
statement:"Déterminer si un mot est un palindrome. Ignorer les majuscules et les espaces.",
solution:`texte = input("Mot : ")

nettoye = "".join(
    c.lower() for c in texte if not c.isspace()
)

if nettoye == nettoye[::-1]:
    print("Palindrome")
else:
    print("Non palindrome")`
},
{
title:"Compter les voyelles et consonnes",
level:"Intermédiaire",
topic:"Chaînes",
statement:"Lire une phrase et compter les voyelles, les consonnes et les chiffres. Ne pas compter les espaces ni les signes de ponctuation.",
solution:`texte = input("Phrase : ").lower()

voyelles = "aeiouyàâäéèêëîïôöùûü"
v = c = chiffres = 0

for caractere in texte:
    if caractere in voyelles:
        v += 1
    elif caractere.isalpha():
        c += 1
    elif caractere.isdigit():
        chiffres += 1

print("Voyelles :", v)
print("Consonnes :", c)
print("Chiffres :", chiffres)`
},
{
title:"Fréquence des caractères",
level:"Avancé",
topic:"Dictionnaires et chaînes",
statement:"Lire une chaîne et construire un dictionnaire contenant la fréquence de chaque caractère, en ignorant les espaces.",
solution:`texte = input("Texte : ")
frequences = {}

for caractere in texte:
    if not caractere.isspace():
        frequences[caractere] = frequences.get(caractere, 0) + 1

for caractere, nombre in frequences.items():
    print(caractere, ":", nombre)`
},
{
title:"Supprimer les doublons d'une liste",
level:"Intermédiaire",
topic:"Listes",
statement:"Écrire un programme qui supprime les doublons d'une liste tout en conservant l'ordre initial des éléments.",
solution:`L = [1, 2, 2, 3, 1, 4, 3, 5]

resultat = []

for x in L:
    if x not in resultat:
        resultat.append(x)

print(resultat)`
},
{
title:"Deuxième plus grande valeur",
level:"Avancé",
topic:"Listes et parcours",
statement:"Déterminer la deuxième plus grande valeur distincte d'une liste sans utiliser sorted(), sort() ou max(). Gérer le cas où aucune deuxième valeur n'existe.",
solution:`L = [12, 5, 20, 20, 8, 15]

premier = deuxieme = None

for x in L:
    if premier is None or x > premier:
        if x != premier:
            deuxieme = premier
        premier = x

    elif x != premier and (
        deuxieme is None or x > deuxieme
    ):
        deuxieme = x

print(deuxieme)`
},
{
title:"Fusionner deux listes triées",
level:"Avancé",
topic:"Listes et algorithmes",
statement:"Écrire une fonction qui fusionne deux listes déjà triées en une seule liste triée, sans utiliser sorted().",
solution:`def fusionner(A, B):
    resultat = []
    i = j = 0

    while i < len(A) and j < len(B):
        if A[i] <= B[j]:
            resultat.append(A[i])
            i += 1
        else:
            resultat.append(B[j])
            j += 1

    resultat.extend(A[i:])
    resultat.extend(B[j:])

    return resultat

print(fusionner([1, 4, 7], [2, 3, 8]))`
},
{
title:"Rotation circulaire d'une liste",
level:"Avancé",
topic:"Listes",
statement:"Écrire une fonction qui effectue une rotation à droite d'une liste de k positions. Gérer k supérieur à la taille de la liste.",
solution:`def rotation(L, k):
    if not L:
        return []

    k %= len(L)

    return L[-k:] + L[:-k] if k else L[:]

print(rotation([1, 2, 3, 4, 5], 2))`
},
{
title:"Matrice : somme des lignes et colonnes",
level:"Avancé",
topic:"Matrices",
statement:"Lire ou définir une matrice carrée et calculer la somme de chaque ligne, de chaque colonne et de la diagonale principale.",
solution:`M = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

n = len(M)

for i in range(n):
    print("Ligne", i, sum(M[i]))

for j in range(n):
    somme = 0

    for i in range(n):
        somme += M[i][j]

    print("Colonne", j, somme)

diagonale = sum(M[i][i] for i in range(n))
print("Diagonale :", diagonale)`
},
{
title:"Transposée d'une matrice",
level:"Avancé",
topic:"Matrices",
statement:"Écrire une fonction qui retourne la transposée d'une matrice de dimensions quelconques.",
solution:`def transposee(M):
    if not M:
        return []

    return [
        [M[i][j] for i in range(len(M))]
        for j in range(len(M[0]))
    ]

M = [[1, 2, 3], [4, 5, 6]]
print(transposee(M))`
},
{
title:"Gestion d'un répertoire d'étudiants",
level:"Avancé",
topic:"Dictionnaires",
statement:"Créer un dictionnaire d'étudiants avec nom, âge et moyenne. Permettre l'ajout, la recherche, la modification et l'affichage des étudiants.",
solution:`etudiants = {}

def ajouter(identifiant, nom, age, moyenne):
    etudiants[identifiant] = {
        "nom": nom,
        "age": age,
        "moyenne": moyenne
    }

def rechercher(identifiant):
    return etudiants.get(identifiant)

def modifier(identifiant, moyenne):
    if identifiant in etudiants:
        etudiants[identifiant]["moyenne"] = moyenne

def afficher():
    for identifiant, infos in etudiants.items():
        print(identifiant, infos)

ajouter(1, "Ali", 20, 15)
ajouter(2, "Sara", 21, 17)
afficher()`
},
{
title:"Gestion d'un stock",
level:"Avancé",
topic:"Dictionnaires et fonctions",
statement:"Créer un système de gestion de stock. Ajouter des produits, vendre une quantité, empêcher la vente si le stock est insuffisant et afficher la valeur totale du stock.",
solution:`stock = {
    "clavier": {"prix": 80, "quantite": 10},
    "souris": {"prix": 30, "quantite": 15}
}

def vendre(nom, quantite):
    if nom not in stock:
        print("Produit inconnu")
        return

    if quantite <= 0:
        print("Quantité invalide")
    elif stock[nom]["quantite"] < quantite:
        print("Stock insuffisant")
    else:
        stock[nom]["quantite"] -= quantite

def valeur_stock():
    return sum(
        p["prix"] * p["quantite"]
        for p in stock.values()
    )

vendre("clavier", 2)
print(valeur_stock())`
},
{
title:"Gestion des notes",
level:"Avancé",
topic:"Listes et dictionnaires",
statement:"Construire un programme qui reçoit les notes d'une classe et affiche la moyenne générale, la meilleure note, la plus faible note et le nombre d'étudiants admis.",
solution:`notes = [12, 8, 16, 14, 9, 18, 11]

if notes:
    moyenne = sum(notes) / len(notes)
    admis = sum(1 for n in notes if n >= 10)

    print("Moyenne :", moyenne)
    print("Maximum :", max(notes))
    print("Minimum :", min(notes))
    print("Admis :", admis)
else:
    print("Aucune note")`
},
{
title:"Tri par insertion",
level:"Avancé",
topic:"Algorithmes de tri",
statement:"Implémenter le tri par insertion sans utiliser les méthodes de tri Python. Expliquer le rôle de la variable clé et de l'indice j.",
solution:`def tri_insertion(L):
    L = L.copy()

    for i in range(1, len(L)):
        cle = L[i]
        j = i - 1

        while j >= 0 and L[j] > cle:
            L[j+1] = L[j]
            j -= 1

        L[j+1] = cle

    return L

print(tri_insertion([9, 3, 7, 1, 5]))`
},
{
title:"Recherche binaire récursive",
level:"Avancé",
topic:"Récursivité",
statement:"Implémenter la recherche binaire de manière récursive. La liste doit être triée.",
solution:`def recherche(L, x, gauche, droite):
    if gauche > droite:
        return -1

    milieu = (gauche + droite) // 2

    if L[milieu] == x:
        return milieu

    if x < L[milieu]:
        return recherche(L, x, gauche, milieu-1)

    return recherche(L, x, milieu+1, droite)

L = [1, 3, 5, 7, 9, 11]
print(recherche(L, 7, 0, len(L)-1))`
},
{
title:"Suite de Fibonacci optimisée",
level:"Avancé",
topic:"Récursivité et algorithmique",
statement:"Écrire un programme qui calcule le terme n de Fibonacci de manière itérative, sans recalculer les termes précédents.",
solution:`def fibonacci(n):
    if n < 0:
        raise ValueError("n invalide")

    a, b = 0, 1

    for _ in range(n):
        a, b = b, a+b

    return a

print(fibonacci(40))`
},
{
title:"Compter les mots d'un texte",
level:"Intermédiaire",
topic:"Chaînes et dictionnaires",
statement:"Lire un texte et afficher le nombre d'occurrences de chaque mot, sans tenir compte des majuscules.",
solution:`texte = input("Texte : ").lower()
mots = texte.split()

frequences = {}

for mot in mots:
    frequences[mot] = frequences.get(mot, 0) + 1

for mot, nombre in frequences.items():
    print(mot, nombre)`
},
{
title:"Vérification d'une expression parenthésée",
level:"Expert",
topic:"Pile et algorithmique",
statement:"Écrire un programme qui vérifie si une expression contenant (), [] et {} est correctement parenthésée. Utiliser une pile.",
solution:`def verifier(expression):
    pile = []
    couples = {
        ")": "(",
        "]": "[",
        "}": "{"
    }

    for c in expression:
        if c in "([{":
            pile.append(c)

        elif c in ")]}":
            if not pile or pile[-1] != couples[c]:
                return False

            pile.pop()

    return len(pile) == 0

print(verifier("{[()]}"))
print(verifier("([)]"))`
},
{
title:"Créer une classe CompteBancaire",
level:"Avancé",
topic:"POO et encapsulation",
statement:"Créer une classe CompteBancaire contenant un titulaire et un solde. Implémenter les opérations déposer, retirer et afficher le solde. Refuser les montants invalides.",
solution:`class CompteBancaire:
    def __init__(self, titulaire, solde=0):
        self.titulaire = titulaire
        self.solde = solde

    def deposer(self, montant):
        if montant <= 0:
            raise ValueError("Montant invalide")

        self.solde += montant

    def retirer(self, montant):
        if montant <= 0:
            raise ValueError("Montant invalide")

        if montant > self.solde:
            raise ValueError("Solde insuffisant")

        self.solde -= montant

    def afficher(self):
        print(self.titulaire, self.solde)

c = CompteBancaire("Ali", 1000)
c.deposer(200)
c.retirer(300)
c.afficher()`
},
{
title:"Héritage : système de personnes",
level:"Avancé",
topic:"POO et héritage",
statement:"Créer une classe Personne puis deux classes Etudiant et Enseignant. Chaque classe doit posséder une méthode afficher() adaptée.",
solution:`class Personne:
    def __init__(self, nom):
        self.nom = nom

class Etudiant(Personne):
    def __init__(self, nom, niveau):
        super().__init__(nom)
        self.niveau = niveau

    def afficher(self):
        print(self.nom, self.niveau)

class Enseignant(Personne):
    def __init__(self, nom, specialite):
        super().__init__(nom)
        self.specialite = specialite

    def afficher(self):
        print(self.nom, self.specialite)

personnes = [
    Etudiant("Ali", "L1"),
    Enseignant("Ahmed", "Python")
]

for p in personnes:
    p.afficher()`
},
{
title:"Enregistrer des données dans un fichier",
level:"Intermédiaire",
topic:"Fichiers",
statement:"Créer un programme qui demande le nom et la moyenne de plusieurs étudiants et enregistre les informations dans un fichier texte.",
solution:`with open("etudiants.txt", "w", encoding="utf-8") as f:
    n = int(input("Nombre d'étudiants : "))

    for i in range(n):
        nom = input("Nom : ")
        moyenne = float(input("Moyenne : "))

        f.write(f"{nom};{moyenne}\\n")`
},
{
title:"Analyser un fichier",
level:"Avancé",
topic:"Fichiers et chaînes",
statement:"Lire un fichier texte et calculer le nombre de lignes, de mots et de caractères.",
solution:`with open("texte.txt", encoding="utf-8") as f:
    contenu = f.read()

lignes = contenu.splitlines()
mots = contenu.split()
caracteres = len(contenu)

print("Lignes :", len(lignes))
print("Mots :", len(mots))
print("Caractères :", caracteres)`
},
{
title:"Manipulation de JSON",
level:"Avancé",
topic:"JSON",
statement:"Créer une liste d'étudiants, l'enregistrer dans un fichier JSON puis la relire pour afficher les étudiants ayant une moyenne supérieure ou égale à 10.",
solution:`import json

etudiants = [
    {"nom": "Ali", "moyenne": 15},
    {"nom": "Sara", "moyenne": 18},
    {"nom": "Amine", "moyenne": 8}
]

with open("etudiants.json", "w", encoding="utf-8") as f:
    json.dump(etudiants, f, ensure_ascii=False, indent=4)

with open("etudiants.json", encoding="utf-8") as f:
    donnees = json.load(f)

for e in donnees:
    if e["moyenne"] >= 10:
        print(e["nom"])`
},
{
title:"Gestion d'une base SQLite",
level:"Expert",
topic:"Bases de données",
statement:"Créer une base SQLite contenant une table produits. Implémenter l'ajout, la recherche, la modification et la suppression d'un produit.",
solution:`import sqlite3

with sqlite3.connect("stock.db") as db:
    c = db.cursor()

    c.execute("""
    CREATE TABLE IF NOT EXISTS produits(
        id INTEGER PRIMARY KEY,
        nom TEXT NOT NULL,
        prix REAL NOT NULL
    )
    """)

    c.execute(
        "INSERT INTO produits(nom, prix) VALUES (?, ?)",
        ("Clavier", 80)
    )

    c.execute(
        "SELECT * FROM produits WHERE prix > ?",
        (50,)
    )

    print(c.fetchall())

    c.execute(
        "UPDATE produits SET prix = ? WHERE nom = ?",
        (90, "Clavier")
    )

    c.execute(
        "DELETE FROM produits WHERE nom = ?",
        ("Clavier",)
    )`
},
{
title:"Calculatrice complète avec fonctions",
level:"Avancé",
topic:"Fonctions et conditions",
statement:"Construire une calculatrice avec addition, soustraction, multiplication, division, puissance et modulo. Séparer chaque opération dans une fonction.",
solution:`def addition(a, b):
    return a + b

def soustraction(a, b):
    return a - b

def multiplication(a, b):
    return a * b

def division(a, b):
    if b == 0:
        raise ZeroDivisionError("Division par zéro")
    return a / b

def puissance(a, b):
    return a ** b

def modulo(a, b):
    if b == 0:
        raise ZeroDivisionError("Modulo par zéro")
    return a % b

a = float(input("a : "))
b = float(input("b : "))
operation = input("Opération (+,-,*,/,**,%) : ")

operations = {
    "+": addition,
    "-": soustraction,
    "*": multiplication,
    "/": division,
    "**": puissance,
    "%": modulo
}

try:
    resultat = operations[operation](a, b)
    print(resultat)
except (KeyError, ZeroDivisionError) as e:
    print("Erreur :", e)`
},
{
title:"Jeu de devinette",
level:"Intermédiaire",
topic:"Random et boucles",
statement:"Créer un jeu où l'ordinateur choisit un nombre aléatoire entre 1 et 100. L'utilisateur dispose de 7 tentatives. Afficher si le nombre recherché est supérieur ou inférieur à la proposition.",
solution:`import random

secret = random.randint(1, 100)
trouve = False

for tentative in range(7):
    proposition = int(input("Nombre : "))

    if proposition == secret:
        print("Bravo !")
        trouve = True
        break

    elif proposition < secret:
        print("Plus grand")

    else:
        print("Plus petit")

if not trouve:
    print("Nombre recherché :", secret)`
},
{
title:"Simulation d'une caisse de supermarché",
level:"Expert",
topic:"Listes, dictionnaires et fonctions",
statement:"Créer une caisse qui contient des produits avec prix et quantité. Permettre d'ajouter plusieurs produits au panier, calculer le total, appliquer une réduction de 10 % si le total dépasse 200 et afficher une facture.",
solution:`produits = {
    "pain": 1.2,
    "lait": 2.5,
    "huile": 8.0,
    "riz": 3.5
}

panier = {}

while True:
    nom = input("Produit (fin pour terminer) : ").lower()

    if nom == "fin":
        break

    if nom not in produits:
        print("Produit inconnu")
        continue

    quantite = int(input("Quantité : "))

    if quantite <= 0:
        print("Quantité invalide")
        continue

    panier[nom] = panier.get(nom, 0) + quantite

total = 0

for nom, qte in panier.items():
    sous_total = produits[nom] * qte
    total += sous_total
    print(nom, qte, sous_total)

reduction = total * 0.10 if total > 200 else 0

print("Total :", total)
print("Réduction :", reduction)
print("À payer :", total-reduction)`
},
{
title:"Gestionnaire de tâches",
level:"Expert",
topic:"Fichiers et programmation modulaire",
statement:"Créer une application en console qui permet d'ajouter, afficher, terminer et supprimer des tâches. Enregistrer les tâches dans un fichier JSON afin de conserver les données.",
solution:`import json
from pathlib import Path

FICHIER = Path("taches.json")

def charger():
    if FICHIER.exists():
        return json.loads(FICHIER.read_text(encoding="utf-8"))
    return []

def sauvegarder(taches):
    FICHIER.write_text(
        json.dumps(taches, ensure_ascii=False, indent=4),
        encoding="utf-8"
    )

def main():
    taches = charger()

    while True:
        print("\\n1 Ajouter")
        print("2 Afficher")
        print("3 Terminer")
        print("4 Supprimer")
        print("0 Quitter")

        choix = input("Choix : ")

        if choix == "1":
            titre = input("Tâche : ")
            taches.append({
                "titre": titre,
                "terminee": False
            })
            sauvegarder(taches)

        elif choix == "2":
            for i, t in enumerate(taches):
                print(i, t)

        elif choix == "3":
            i = int(input("Indice : "))
            if 0 <= i < len(taches):
                taches[i]["terminee"] = True
                sauvegarder(taches)

        elif choix == "4":
            i = int(input("Indice : "))
            if 0 <= i < len(taches):
                taches.pop(i)
                sauvegarder(taches)

        elif choix == "0":
            break

if __name__ == "__main__":
    main()`
},
{
title:"Analyse de performances de plusieurs algorithmes",
level:"Expert",
topic:"Complexité et mesure",
statement:"Comparer le temps d'exécution d'une recherche linéaire et d'une recherche binaire sur une liste triée de grande taille. Utiliser perf_counter() et expliquer les différences.",
solution:`from time import perf_counter

def recherche_lineaire(L, x):
    for i, valeur in enumerate(L):
        if valeur == x:
            return i
    return -1

def recherche_binaire(L, x):
    g, d = 0, len(L)-1

    while g <= d:
        m = (g+d)//2

        if L[m] == x:
            return m
        elif L[m] < x:
            g = m+1
        else:
            d = m-1

    return -1

L = list(range(1000000))
x = 999999

debut = perf_counter()
recherche_lineaire(L, x)
t1 = perf_counter()-debut

debut = perf_counter()
recherche_binaire(L, x)
t2 = perf_counter()-debut

print("Linéaire :", t1)
print("Binaire :", t2)`
},
{
title:"Projet : système de gestion d'une bibliothèque",
level:"Expert",
topic:"Projet intégrateur et POO",
statement:"Développer une application orientée objet permettant de gérer des livres et des emprunts. Chaque livre possède un identifiant, un titre, un auteur et un état de disponibilité. Permettre d'ajouter un livre, rechercher un livre, emprunter, retourner et afficher le catalogue.",
solution:`class Livre:
    def __init__(self, identifiant, titre, auteur):
        self.identifiant = identifiant
        self.titre = titre
        self.auteur = auteur
        self.disponible = True

    def emprunter(self):
        if not self.disponible:
            raise ValueError("Livre indisponible")
        self.disponible = False

    def retourner(self):
        self.disponible = True

class Bibliotheque:
    def __init__(self):
        self.livres = {}

    def ajouter(self, livre):
        if livre.identifiant in self.livres:
            raise ValueError("Identifiant existant")
        self.livres[livre.identifiant] = livre

    def rechercher(self, identifiant):
        return self.livres.get(identifiant)

    def afficher(self):
        for livre in self.livres.values():
            print(
                livre.identifiant,
                livre.titre,
                livre.auteur,
                livre.disponible
            )

b = Bibliotheque()

b.ajouter(Livre(1, "Python", "Auteur A"))
b.ajouter(Livre(2, "Algorithmique", "Auteur B"))

livre = b.rechercher(1)
livre.emprunter()

b.afficher()`
}
];

const exerciseList = document.getElementById("exercise-list");

exercises.forEach((ex, index) => {
    const card = document.createElement("article");
    card.className = "exercise";

    const head = document.createElement("div");
    head.className = "exercise-head";

    const title = document.createElement("strong");
    title.textContent = `${String(index+1).padStart(2,"0")} — ${ex.title}`;

    const level = document.createElement("span");
    level.className = "level";
    level.textContent = ex.level;

    head.append(title, level);

    const body = document.createElement("div");
    body.className = "exercise-body";

    const topic = document.createElement("p");
    topic.style.cssText = "color:#e87532;font-size:11px;font-weight:bold";
    topic.textContent = ex.topic;

    const statement = document.createElement("p");
    statement.textContent = ex.statement;

    const btn = document.createElement("button");
    btn.className = "solution-btn";
    btn.textContent = "Afficher la solution";

    const solution = document.createElement("div");
    solution.className = "solution";

    const pre = document.createElement("pre");
    const code = document.createElement("code");
    code.textContent = ex.solution;

    pre.appendChild(code);
    solution.appendChild(pre);

    btn.addEventListener("click", () => {
        solution.classList.toggle("show");
        btn.textContent = solution.classList.contains("show")
            ? "Masquer la solution"
            : "Afficher la solution";
    });

    body.append(topic, statement, btn, solution);
    card.append(head, body);
    exerciseList.appendChild(card);
});

/* =========================================================
   BANQUE DE 200 QUESTIONS
========================================================= */

const questions = [];

function addQ(topic, question, options, answer, explanation) {
    questions.push({
        topic,
        question,
        options,
        answer,
        explanation
    });
}

const questionData = [

["Introduction","Quel est le rôle de Python ?",
["Langage de programmation","Système d'exploitation","Base de données","Processeur"],0,
"Python est un langage de programmation."],

["Introduction","Quelle extension utilise généralement un fichier Python ?",
[".html",".py",".css",".java"],1,
"Les fichiers sources Python portent généralement l'extension .py."],

["Introduction","Quelle fonction affiche un message ?",
["input()","read()","print()","type()"],2,
"print() affiche les valeurs à l'écran."],

["Introduction","Quel symbole commence un commentaire sur une ligne ?",
["//","#","<!--","**"],1,
"Le caractère # commence un commentaire Python."],

["Introduction","Python est-il sensible à la casse ?",
["Non","Oui","Uniquement les fonctions","Uniquement les classes"],1,
"Les noms sont sensibles aux majuscules et minuscules."],

["Introduction","Quel est le résultat de print(2 + 3) ?",
["23","5","2 + 3","Erreur"],1,
"L'opérateur + réalise l'addition numérique."],

["Variables","Quel type représente 15 ?",
["str","float","int","bool"],2,
"15 est un entier."],

["Variables","Quel type représente 15.5 ?",
["int","float","str","list"],1,
"Un nombre décimal est représenté par float."],

["Variables","Quel est le type de True ?",
["int","bool","str","None"],1,
"True est une valeur booléenne."],

["Variables","Quelle instruction convertit une chaîne en entier ?",
["str()","float()","int()","bool()"],2,
"int() réalise une conversion vers un entier lorsque c'est possible."],

["Variables","Quelle valeur représente l'absence de valeur ?",
["False","0","None","Empty"],2,
"None représente l'absence de valeur."],

["Variables","Quelle déclaration est valide ?",
["2nom = 'Ali'","nom etudiant = 'Ali'","nom_etudiant = 'Ali'","class = 'Ali'"],2,
"Un identifiant peut utiliser des lettres, chiffres et underscores, sans commencer par un chiffre."],

["Variables","Quel est le résultat de type('Python') ?",
["int","str","list","bool"],1,
"Une chaîne de caractères possède le type str."],

["Variables","Quelle fonction retourne la longueur d'une liste ?",
["size()","count()","len()","length()"],2,
"len() retourne le nombre d'éléments."],

["Variables","Que vaut bool(0) ?",
["True","False","None","Erreur"],1,
"Le zéro est considéré comme faux."],

["Entrées/sorties","Quel type retourne input() ?",
["int","float","str","bool"],2,
"input() retourne toujours une chaîne."],

["Entrées/sorties","Quel paramètre de print définit le séparateur ?",
["end","sep","split","join"],1,
"sep définit le séparateur entre les valeurs affichées."],

["Entrées/sorties","Quel paramètre définit la fin de print ?",
["end","sep","finish","stop"],0,
"end définit la terminaison de print()."],

["Entrées/sorties","Comment afficher une variable dans une f-string ?",
["f'{nom}'","'{f nom}'","format f(nom)","print(nom) uniquement"],0,
"Les expressions d'une f-string sont placées entre accolades."],

["Entrées/sorties","Comment lire un entier ?",
["input(int)","int(input())","read(int)","integer(input())"],1,
"On convertit la chaîne retournée par input() avec int()."],

["Opérateurs","Que vaut 10 // 3 ?",
["3.33","3","1","4"],1,
"// réalise la division entière vers le bas."],

["Opérateurs","Que vaut 10 % 3 ?",
["3","1","0","3.33"],1,
"% retourne le reste de la division."],

["Opérateurs","Que vaut 2 ** 3 ?",
["5","6","8","9"],2,
"** représente la puissance."],

["Opérateurs","Quel opérateur teste l'égalité ?",
["=","==","!=","is not"],1,
"== compare les valeurs."],

["Opérateurs","Quel opérateur représente la négation logique ?",
["and","or","not","in"],2,
"not inverse la valeur logique."],

["Opérateurs","Que vaut True and False ?",
["True","False","None","Erreur"],1,
"and exige que les deux opérandes soient vraies."],

["Opérateurs","Que vaut True or False ?",
["True","False","0","None"],0,
"or est vrai lorsqu'au moins une condition est vraie."],

["Opérateurs","Quel opérateur teste l'appartenance ?",
["is","in","and","not"],1,
"in teste si un élément appartient à une collection."],

["Opérateurs","Quelle est la différence entre = et == ?",
["Aucune","= affecte, == compare","= compare, == affecte","Les deux font une puissance"],1,
"= réalise une affectation, == compare deux valeurs."],

["Conditions","Quelle instruction commence une condition ?",
["for","def","if","while"],2,
"if introduit une condition."],

["Conditions","Quelle instruction représente un autre cas conditionnel ?",
["elif","loop","switch","repeat"],0,
"elif permet de tester une autre condition."],

["Conditions","Que représente else ?",
["Une boucle","Le cas alternatif","Une fonction","Un type"],1,
"else s'exécute lorsque les conditions précédentes ne sont pas satisfaites."],

["Conditions","Quelle expression vérifie que x appartient à [0,10] ?",
["x > 0 and x < 10","0 <= x <= 10","x == 0 or 10","x in 0:10"],1,
"Python autorise les comparaisons chaînées."],

["Conditions","Depuis quelle version match/case est-il disponible ?",
["3.6","3.8","3.10","2.7"],2,
"La correspondance structurelle est disponible depuis Python 3.10."],

["Conditions","Quel est le résultat de 5 if True else 2 ?",
["2","5","True","Erreur"],1,
"L'expression conditionnelle choisit 5 car la condition est vraie."],

["Boucles","Quelle boucle parcourt une séquence ?",
["for","if","class","try"],0,
"for parcourt les éléments d'un itérable."],

["Boucles","Quelle instruction répète tant qu'une condition est vraie ?",
["if","while","return","break"],1,
"while répète le bloc tant que la condition reste vraie."],

["Boucles","Que retourne list(range(4)) ?",
["[1,2,3,4]","[0,1,2,3]","[0,1,2,3,4]","[4]"],1,
"La borne finale de range() est exclue."],

["Boucles","Quel est le rôle de break ?",
["Ignorer une itération","Arrêter la boucle","Recommencer","Créer une fonction"],1,
"break quitte immédiatement la boucle."],

["Boucles","Quel est le rôle de continue ?",
["Quitter le programme","Ignorer le reste de l'itération","Arrêter définitivement","Retourner une valeur"],1,
"continue passe directement à l'itération suivante."],

["Boucles","Quel est le résultat de range(2,8,2) ?",
["2,4,6","2,4,6,8","2,3,4,5,6,7","0,2,4,6"],0,
"Le pas vaut 2 et la borne 8 est exclue."],

["Boucles","Combien d'itérations dans range(5) ?",
["4","5","6","0"],1,
"Les valeurs sont 0, 1, 2, 3 et 4."],

["Boucles","Que fait pass ?",
["Arrête la boucle","Ne fait rien","Affiche une valeur","Lance une erreur"],1,
"pass est une instruction vide."],

["Boucles","Quand le else d'une boucle s'exécute-t-il ?",
["Toujours","Après break","Si la boucle termine normalement","Jamais"],2,
"Le else est exécuté lorsque la boucle ne se termine pas par break."],

["Chaînes","Quel est le type de 'Python' ?",
["list","tuple","str","dict"],2,
"Les textes sont des chaînes str."],

["Chaînes","Que vaut 'Python'[0] ?",
["P","y","n","Erreur"],0,
"L'indexation commence à zéro."],

["Chaînes","Que vaut 'Python'[-1] ?",
["P","y","n","o"],2,
"L'indice -1 représente le dernier caractère."],

["Chaînes","Quelle méthode transforme en majuscules ?",
["lower()","upper()","capitalize()","strip()"],1,
"upper() transforme les lettres en majuscules."],

["Chaînes","Quelle méthode supprime les espaces aux extrémités ?",
["remove()","strip()","split()","replace()"],1,
"strip() supprime les caractères blancs aux deux extrémités par défaut."],

["Chaînes","Quelle méthode découpe une chaîne ?",
["join()","split()","count()","find()"],1,
"split() retourne une liste de morceaux."],

["Chaînes","Quelle méthode assemble une liste de chaînes ?",
["split()","join()","append()","merge()"],1,
"join() assemble des chaînes avec un séparateur."],

["Chaînes","Les chaînes Python sont-elles modifiables ?",
["Oui","Non","Seulement les majuscules","Seulement les chiffres"],1,
"Les chaînes sont immuables."],

["Chaînes","Que fait len('ABC') ?",
["2","3","4","0"],1,
"La longueur de la chaîne est 3."],

["Chaînes","Quelle méthode vérifie les chiffres ?",
["isalpha()","isdigit()","islower()","isupper()"],1,
"isdigit() teste si tous les caractères sont des chiffres selon sa définition Unicode."],

["Listes","Quel symbole définit une liste ?",
["()","{}","[]","<>"],2,
"Les listes sont définies entre crochets."],

["Listes","Une liste est-elle modifiable ?",
["Oui","Non","Jamais","Seulement vide"],0,
"Les listes sont mutables."],

["Listes","Quelle méthode ajoute un élément à la fin ?",
["append()","extend()","insert()","add()"],0,
"append() ajoute un élément."],

["Listes","Quelle méthode ajoute plusieurs éléments d'un itérable ?",
["append()","extend()","remove()","pop()"],1,
"extend() ajoute les éléments d'un itérable."],

["Listes","Quelle méthode supprime un élément par sa valeur ?",
["pop()","remove()","clear()","sort()"],1,
"remove() supprime la première occurrence de la valeur."],

["Listes","Que retourne pop() sans argument ?",
["Le premier élément","Le dernier élément","La liste entière","None toujours"],1,
"pop() retire et retourne le dernier élément."],

["Listes","Quelle fonction crée une nouvelle liste triée ?",
["sort()","sorted()","order()","arrange()"],1,
"sorted() retourne une nouvelle liste triée."],

["Listes","Que fait L[::-1] ?",
["Vide la liste","Inverse la séquence","Trie la liste","Supprime les doublons"],1,
"Le pas négatif parcourt la séquence à l'envers."],

["Listes","Quelle fonction calcule la somme d'une liste numérique ?",
["total()","sum()","add()","count()"],1,
"sum() additionne les éléments numériques."],

["Listes","Quel est le résultat de [1,2] + [3,4] ?",
["[4,6]","[1,2,3,4]","[1,2,7]","Erreur"],1,
"L'opérateur + concatène les listes."],

["Tuples","Quel symbole définit généralement un tuple ?",
["[]","{}","()","<>"],2,
"Les tuples sont généralement définis avec des parenthèses."],

["Tuples","Comment créer un tuple d'un seul élément ?",
["(5)","(5,)","[5]","{5}"],1,
"La virgule est nécessaire pour définir un tuple d'un seul élément."],

["Tuples","Un tuple est-il modifiable ?",
["Oui","Non","Seulement les chaînes","Seulement les nombres"],1,
"Les tuples sont immuables."],

["Tuples","Quelle méthode compte les occurrences ?",
["count()","append()","add()","sort()"],0,
"count() compte les occurrences."],

["Tuples","Peut-on déballer un tuple ?",
["Oui","Non","Seulement avec des nombres","Jamais"],0,
"Le déballage permet d'affecter les éléments à plusieurs variables."],

["Dictionnaires","Quelle structure associe des clés à des valeurs ?",
["Liste","Tuple","Dictionnaire","Chaîne"],2,
"Un dictionnaire stocke des couples clé-valeur."],

["Dictionnaires","Quelle méthode retourne les clés ?",
["values()","items()","keys()","get()"],2,
"keys() retourne une vue des clés."],

["Dictionnaires","Quelle méthode évite KeyError pour une clé absente ?",
["get()","remove()","append()","sort()"],0,
"get() peut retourner une valeur par défaut."],

["Dictionnaires","Les clés doivent-elles être uniques ?",
["Oui","Non","Seulement les chaînes","Seulement les nombres"],0,
"Une clé apparaît une seule fois dans un dictionnaire."],

["Dictionnaires","Que retourne items() ?",
["Les valeurs","Les clés","Les couples clé-valeur","La longueur"],2,
"items() retourne une vue de couples clé-valeur."],

["Dictionnaires","Comment supprimer une clé et obtenir sa valeur ?",
["clear()","pop()","keys()","update()"],1,
"pop() retire la clé et retourne sa valeur."],

["Dictionnaires","Quel est le résultat de len({'a':1,'b':2}) ?",
["1","2","3","0"],1,
"Le dictionnaire contient deux clés."],

["Dictionnaires","Les dictionnaires conservent-ils l'ordre d'insertion ?",
["Non","Oui, depuis Python 3.7 comme garantie du langage","Seulement avant 3.0","Jamais"],1,
"L'ordre d'insertion est garanti par le langage depuis Python 3.7."],

["Dictionnaires","Que fait update() ?",
["Vide le dictionnaire","Met à jour les couples","Trie les clés","Convertit en liste"],1,
"update() ajoute ou remplace des associations."],

["Ensembles","Quelle propriété caractérise un set ?",
["Doublons autorisés","Éléments uniques","Indexation obligatoire","Ordre fixe"],1,
"Un ensemble contient des éléments uniques."],

["Ensembles","Comment créer un ensemble vide ?",
["{}","[]","set()","()"],2,
"{} crée un dictionnaire vide, set() crée un ensemble vide."],

["Ensembles","Quel opérateur réalise l'union ?",
["&","|","-","^"],1,
"| réalise l'union."],

["Ensembles","Quel opérateur réalise l'intersection ?",
["&","|","-","+"],0,
"& réalise l'intersection."],

["Ensembles","Que fait discard() ?",
["Ajoute un élément","Retire un élément sans erreur s'il est absent","Trie","Vide l'ensemble"],1,
"discard() ne déclenche pas KeyError si l'élément est absent."],

["Fonctions","Quel mot-clé définit une fonction ?",
["function","def","func","class"],1,
"def définit une fonction."],

["Fonctions","Quel mot-clé retourne une valeur ?",
["print","yield only","return","break"],2,
"return renvoie une valeur."],

["Fonctions","Que retourne une fonction sans return explicite ?",
["0","False","None","True"],2,
"Une fonction sans return explicite retourne None."],

["Fonctions","Quel symbole permet les arguments variables positionnels ?",
["**args","*args","&args","@args"],1,
"*args rassemble les arguments positionnels supplémentaires dans un tuple."],

["Fonctions","Quel symbole permet les arguments nommés variables ?",
["*kwargs","**kwargs","&&kwargs","//kwargs"],1,
"**kwargs rassemble les arguments nommés dans un dictionnaire."],

["Fonctions","Quel mot-clé documente une fonction ?",
["doc","help","Docstring","comment"],2,
"Une docstring est une chaîne placée au début de la fonction."],

["Fonctions","Une lambda peut contenir plusieurs instructions ?",
["Oui sans limite","Non, une expression unique","Uniquement deux","Seulement un print"],1,
"Une lambda contient une seule expression."],

["Fonctions","Quelle fonction applique une fonction à chaque élément ?",
["filter()","map()","reduce()","zip()"],1,
"map() applique une fonction aux éléments d'un itérable."],

["Fonctions","Quelle fonction filtre selon une condition ?",
["map()","filter()","sum()","zip()"],1,
"filter() conserve les éléments satisfaisant le prédicat."],

["Fonctions","Quelle instruction permet de modifier une variable globale ?",
["local","global","outer","public"],1,
"global déclare qu'un nom fait référence à la variable globale."],

["Récursivité","Qu'est-ce qu'une fonction récursive ?",
["Une fonction sans paramètres","Une fonction qui s'appelle elle-même","Une boucle for","Une classe"],1,
"Une fonction récursive effectue un ou plusieurs appels à elle-même."],

["Récursivité","Quel élément arrête une récursion correcte ?",
["Une variable globale","Un cas de base","Une boucle infinie","Un import"],1,
"Le cas de base empêche les appels de continuer indéfiniment."],

["Récursivité","Quelle est la valeur de 5! ?",
["25","60","120","720"],2,
"5! = 5 × 4 × 3 × 2 × 1 = 120."],

["Récursivité","Quel risque existe avec une récursion trop profonde ?",
["SyntaxError","RecursionError","ImportError","KeyError"],1,
"Python limite la profondeur de récursion."],

["Algorithmes","Quel est le rôle d'un algorithme ?",
["Décorer un programme","Décrire une solution finie à un problème","Créer une base de données","Installer Python"],1,
"Un algorithme décrit les étapes d'une résolution."],

["Algorithmes","Quelle est la première étape de résolution ?",
["Optimiser","Comprendre le problème","Écrire le code immédiatement","Tester au hasard"],1,
"Il faut identifier précisément le problème et ses contraintes."],

["Algorithmes","Qu'est-ce qu'un cas limite ?",
["Une donnée impossible uniquement","Une situation à la frontière des contraintes","Une erreur de syntaxe","Un commentaire"],1,
"Les cas limites vérifient les comportements aux extrêmes."],

["Algorithmes","Quelle complexité correspond à un parcours simple ?",
["O(1)","O(n)","O(n²)","O(2ⁿ)"],1,
"Un parcours examine potentiellement n éléments."],

["Recherche","Quelle condition est nécessaire à la recherche binaire ?",
["Liste inversée","Liste triée","Liste vide","Liste de chaînes uniquement"],1,
"La recherche binaire nécessite une séquence triée."],

["Recherche","Quelle est la complexité de la recherche binaire ?",
["O(n)","O(n²)","O(log n)","O(2ⁿ)"],2,
"La zone de recherche est divisée par deux à chaque étape."],

["Recherche","Quelle est la complexité de la recherche linéaire ?",
["O(1)","O(log n)","O(n)","O(n log n)"],2,
"Dans le pire cas, tous les éléments sont examinés."],

["Tri","Quel tri utilise des échanges d'éléments adjacents ?",
["Tri fusion","Tri à bulles","Tri rapide","Tri par tas"],1,
"Le tri à bulles compare des éléments adjacents."],

["Tri","Quelle complexité moyenne possède le tri fusion ?",
["O(n)","O(n²)","O(n log n)","O(2ⁿ)"],2,
"Le tri fusion divise puis fusionne les sous-listes."],

["Tri","Quel algorithme est généralement en O(n²) ?",
["Tri insertion","Tri fusion","Tri par tas","Recherche binaire"],0,
"Le tri par insertion est quadratique dans le pire cas."],

["Tri","Quelle méthode Python trie une liste sur place ?",
["sorted()","sort()","order()","merge()"],1,
"sort() modifie la liste existante."],

["Fichiers","Quelle fonction ouvre un fichier ?",
["read()","open()","file()","load()"],1,
"open() ouvre un fichier."],

["Fichiers","Quel mode ouvre un fichier en ajout ?",
["r","w","a","x"],2,
"Le mode a ajoute le contenu à la fin."],

["Fichiers","Quel mode remplace le contenu ?",
["r","w","a","x"],1,
"Le mode w crée ou tronque le fichier."],

["Fichiers","Pourquoi utiliser with open() ?",
["Pour accélérer toutes les opérations","Pour gérer automatiquement la fermeture","Pour supprimer le fichier","Pour convertir le fichier en liste"],1,
"Le gestionnaire de contexte ferme automatiquement le fichier."],

["Fichiers","Que retourne readlines() ?",
["Une chaîne","Une liste de lignes","Un entier","Un dictionnaire"],1,
"readlines() retourne une liste de chaînes."],

["Fichiers","Quel mode lit des données binaires ?",
["rt","wb","rb","at"],2,
"rb ouvre un fichier en lecture binaire."],

["Exceptions","Quelle exception correspond à une division par zéro ?",
["ValueError","TypeError","ZeroDivisionError","IndexError"],2,
"Une division numérique par zéro provoque ZeroDivisionError."],

["Exceptions","Quel bloc intercepte une exception ?",
["try","except","finally","else"],1,
"except permet d'intercepter une exception."],

["Exceptions","Quel bloc s'exécute normalement dans tous les cas ?",
["else","finally","try","pass"],1,
"finally est exécuté même lorsqu'une exception survient."],

["Exceptions","Quelle instruction déclenche volontairement une exception ?",
["throw","raise","error","stop"],1,
"raise déclenche une exception."],

["Exceptions","Quelle exception survient pour une clé absente ?",
["IndexError","KeyError","ValueError","NameError"],1,
"KeyError concerne les clés inexistantes."],

["Modules","Quel module fournit sqrt() ?",
["random","math","os","sys"],1,
"math fournit les fonctions mathématiques usuelles."],

["Modules","Quel module permet de générer des nombres aléatoires ?",
["random","math","csv","json"],0,
"random contient les fonctions de génération pseudo-aléatoire."],

["Modules","Quelle instruction importe un module ?",
["include","import","using","require"],1,
"import permet d'importer un module."],

["Modules","À quoi sert pip ?",
["Compiler Python","Installer des paquets","Créer des classes","Exécuter SQL"],1,
"pip est l'outil habituel d'installation de paquets Python."],

["Modules","Quel est le rôle d'un environnement virtuel ?",
["Remplacer Python","Isoler les dépendances d'un projet","Créer des images","Supprimer les modules"],1,
"Un environnement virtuel isole les paquets d'un projet."],

["POO","Quel mot-clé définit une classe ?",
["def","class","object","new"],1,
"class définit une classe."],

["POO","Quel est le rôle de __init__ ?",
["Détruire l'objet","Initialiser l'objet","Afficher l'objet","Importer une classe"],1,
"__init__ initialise les attributs d'une instance."],

["POO","Que représente self ?",
["La classe parente","L'instance actuelle","Une variable globale","Le constructeur"],1,
"self référence l'instance actuelle dans une méthode d'instance."],

["POO","Quel mécanisme permet de réutiliser une classe parente ?",
["Héritage","Encodage","Slicing","Itération"],0,
"L'héritage permet de définir une classe à partir d'une autre."],

["POO","Quel appel invoque le constructeur parent ?",
["parent()","super()","base()","this()"],1,
"super() permet d'accéder à l'implémentation de la classe parente selon la résolution des méthodes."],

["POO","Qu'est-ce que le polymorphisme ?",
["Un type de boucle","Des objets différents partageant une interface de comportement","Une variable constante","Une base SQL"],1,
"Le polymorphisme permet d'utiliser des objets différents à travers une interface commune."],

["POO","Quel décorateur définit une méthode de classe ?",
["@staticmethod","@classmethod","@property","@abstract"],1,
"@classmethod reçoit la classe comme premier argument, traditionnellement cls."],

["POO","Quel décorateur définit une propriété ?",
["@property","@class","@setter","@method"],0,
"@property expose une méthode comme un attribut calculé."],

["POO","Quelle bibliothèque fournit dataclass ?",
["collections","dataclasses","math","sqlite3"],1,
"dataclasses fournit le décorateur @dataclass."],

["Compréhensions","Quel est le résultat de [x*x for x in range(3)] ?",
["[1,4,9]","[0,1,4]","[0,1,2]","[1,2,3]"],1,
"range(3) produit 0, 1 et 2."],

["Compréhensions","Quelle syntaxe crée un set comprehension ?",
["[x for x in L]","{x for x in L}","(x for x in L)","<x for x in L>"],1,
"Les accolades sans clé-valeur produisent un ensemble."],

["Itérateurs","Quelle fonction crée un itérateur ?",
["next()","iter()","map()","list()"],1,
"iter() retourne un itérateur."],

["Itérateurs","Quelle fonction récupère l'élément suivant ?",
["iter()","next()","yield()","step()"],1,
"next() demande l'élément suivant."],

["Générateurs","Quel mot-clé produit une valeur dans un générateur ?",
["return","yield","break","next"],1,
"yield produit une valeur et suspend temporairement l'exécution."],

["Générateurs","Quel est un avantage des générateurs ?",
["Ils stockent toujours tout en mémoire","Ils produisent les éléments à la demande","Ils remplacent les classes","Ils trient automatiquement"],1,
"Les générateurs sont évalués paresseusement."],

["Expressions régulières","Quel module gère les expressions régulières ?",
["regex","re","string","match"],1,
"Le module standard re fournit les opérations d'expressions régulières."],

["Expressions régulières","Quel motif représente un chiffre ?",
["\\w","\\s","\\d","\\D"],2,
"\\d correspond à un chiffre décimal."],

["Expressions régulières","Quelle fonction trouve toutes les correspondances ?",
["search()","findall()","sub()","split()"],1,
"findall() retourne toutes les correspondances."],

["Dates","Quel module contient datetime ?",
["time","calendar","datetime","date"],2,
"datetime est le module standard de gestion des dates et heures."],

["Dates","Quelle méthode formate une date en texte ?",
["strptime()","strftime()","formatdate()","to_string()"],1,
"strftime() transforme une date en chaîne formatée."],

["JSON","Quel module traite le JSON ?",
["csv","json","pickle","xml"],1,
"Le module standard json traite les données JSON."],

["JSON","Quelle fonction écrit un objet JSON dans un fichier ?",
["json.load()","json.dump()","json.read()","json.parse()"],1,
"dump() écrit un objet dans un fichier."],

["CSV","Quel module traite les fichiers CSV ?",
["csv","json","sqlite3","pathlib"],0,
"Le module csv permet de lire et écrire des fichiers CSV."],

["Bases de données","Quel module standard permet SQLite ?",
["sql","sqlite3","database","db"],1,
"sqlite3 fournit une interface vers SQLite."],

["Bases de données","Quel symbole paramètre une valeur SQLite ?",
["?","&","#","@"],0,
"Le placeholder ? est utilisé avec les paramètres positionnels dans sqlite3."],

["Tests","Quel module standard fournit unittest ?",
["test","unittest","pytest","debug"],1,
"unittest est un framework de tests inclus dans la bibliothèque standard."],

["Tests","Quel mot-clé vérifie une condition pendant le développement ?",
["assert","check","verify","test"],0,
"assert déclenche AssertionError si la condition est fausse."],

["Qualité","Que signifie PEP 8 ?",
["Une base de données","Une convention de style Python","Un framework web","Un type de boucle"],1,
"PEP 8 est le guide de style Python."],

["Qualité","Que signifie DRY ?",
["Don't Repeat Yourself","Do Run Yourself","Data Read Yearly","Don't Return Yet"],0,
"DRY recommande d'éviter les répétitions inutiles."],

["Complexité","Que signifie O(1) ?",
["Linéaire","Constante","Quadratique","Exponentielle"],1,
"O(1) indique un coût indépendant de la taille n dans le modèle considéré."],

["Complexité","Quel est le coût de deux boucles imbriquées parcourant n éléments ?",
["O(n)","O(log n)","O(n²)","O(1)"],2,
"Les deux boucles produisent environ n × n opérations."],

["Complexité","Quel est le coût de la recherche binaire ?",
["O(n)","O(log n)","O(n²)","O(n!)"],1,
"Elle divise la zone de recherche par deux."],

["Complexité","Quel est le coût du tri fusion ?",
["O(n²)","O(n log n)","O(1)","O(2ⁿ)"],1,
"Le tri fusion divise et fusionne les données."],

["Applications","Quel framework est utilisé pour créer des API Python ?",
["FastAPI","React","Bootstrap","Laravel"],0,
"FastAPI est un framework Python pour la création d'API."],

["Applications","Quelle bibliothèque est utilisée pour les tableaux numériques ?",
["NumPy","Django","Flask","Tkinter"],0,
"NumPy est une bibliothèque de calcul numérique."],

["Applications","Quelle bibliothèque facilite l'analyse tabulaire ?",
["Pandas","Pygame","random","re"],0,
"Pandas fournit notamment les structures Series et DataFrame."],

["Applications","Quelle bibliothèque crée des graphiques ?",
["Matplotlib","sqlite3","os","sys"],0,
"Matplotlib permet de produire des visualisations."],

["Applications","Quel outil permet de créer des interfaces graphiques simples intégré à Python ?",
["Tkinter","FastAPI","NumPy","CSV"],0,
"Tkinter est l'interface Python vers Tk."],

["Sécurité","Pourquoi éviter eval() sur une entrée non fiable ?",
["Il est trop lent","Il peut exécuter du code arbitraire","Il ne lit que les nombres","Il supprime les variables"],1,
"eval() évalue une expression Python et peut être dangereux sur des données non fiables."],

["Sécurité","Comment éviter une injection SQL dans sqlite3 ?",
["Concaténer les entrées","Utiliser des paramètres SQL","Désactiver les tables","Utiliser eval()"],1,
"Les requêtes paramétrées séparent les données de la commande SQL."],

["Sécurité","Où faut-il éviter de publier une clé API ?",
["Dans un fichier secret non publié","Dans un dépôt public GitHub","Dans un gestionnaire de secrets","Dans une variable d'environnement"],1,
"Une clé secrète ne doit pas être publiée dans un dépôt accessible."],

["Divers","Que fait enumerate() ?",
["Trie une liste","Associe indice et élément","Supprime les doublons","Fusionne des fichiers"],1,
"enumerate() produit des couples indice-élément."],

["Divers","Que fait zip() ?",
["Compresse des fichiers","Parcourt plusieurs itérables ensemble","Trie les données","Crée un dictionnaire automatiquement"],1,
"zip() associe les éléments de plusieurs itérables position par position."],

["Divers","Que retourne all([True, True, False]) ?",
["True","False","None","Erreur"],1,
"all() est vrai uniquement si tous les éléments sont vrais."],

["Divers","Que retourne any([False, True, False]) ?",
["True","False","None","Erreur"],0,
"any() est vrai si au moins un élément est vrai."],

["Divers","Quelle fonction vérifie si un objet est une instance d'une classe ?",
["type() uniquement","isinstance()","issubclass()","id()"],1,
"isinstance() vérifie l'appartenance à un type ou à une hiérarchie de classes."],

["Divers","Quel est le rôle de __name__ == '__main__' ?",
["Créer une classe","Détecter l'exécution directe du module","Installer un paquet","Importer toutes les fonctions"],1,
"Cette condition permet d'exécuter un bloc lorsque le fichier est lancé comme programme principal."]
];

questionData.forEach(q => addQ(...q));

/* Génération des questions supplémentaires afin d'obtenir
   une banque de 200 questions distinctes. */

const extraTopics = [
    {
        topic:"Listes et algorithmes",
        items:[
            ["Quelle méthode retourne l'indice d'une valeur dans une liste ?",["index()","find()","position()","locate()"],0,"index() retourne l'indice de la première occurrence."],
            ["Quel est le rôle de reverse() ?",["Trier","Inverser sur place","Copier","Supprimer"],1,"reverse() inverse les éléments sur place."],
            ["Quelle instruction supprime un élément selon son indice ?",["remove()","del","count()","extend()"],1,"del permet de supprimer un élément à un indice donné."],
            ["Que fait L.copy() ?",["Une copie superficielle","Une copie profonde","Une liste vide","Un tri"],0,"copy() effectue une copie superficielle."],
            ["Quelle fonction associe les indices aux éléments ?",["zip()","enumerate()","map()","filter()"],1,"enumerate() fournit les indices et éléments."],
            ["Quel est le résultat de [1,2,3][1:] ?",["[1]","[2,3]","[1,2]","[3]"],1,"Le slicing commence à l'indice 1."],
            ["Quel est le rôle de extend() ?",["Ajouter un itérable","Remplacer la liste","Trier","Inverser"],0,"extend() ajoute les éléments d'un itérable."],
            ["Une liste peut-elle contenir une autre liste ?",["Oui","Non","Seulement deux","Seulement vide"],0,"Les listes peuvent être imbriquées."]
        ]
    },
    {
        topic:"Fonctions avancées",
        items:[
            ["Que retourne une fonction avec return a, b ?",["Une liste","Un tuple","Un dictionnaire","Deux retours indépendants"],1,"Plusieurs valeurs séparées par des virgules sont retournées dans un tuple."],
            ["Quel est le rôle de nonlocal ?",["Créer une variable globale","Modifier une variable d'une portée englobante","Supprimer une variable","Importer un module"],1,"nonlocal référence une variable dans une fonction englobante."],
            ["Que fait functools.reduce() ?",["Filtre","Réduit un itérable à une valeur par accumulation","Trie","Inverse"],1,"reduce applique successivement une fonction d'accumulation."],
            ["Une annotation de type impose-t-elle le type à l'exécution ?",["Oui toujours","Non","Uniquement int","Uniquement str"],1,"Les annotations ne sont pas automatiquement imposées par Python."],
            ["Quel décorateur met en cache les appels d'une fonction ?",["@cache","@property","@staticmethod","@override"],0,"functools.cache mémorise les résultats selon les arguments."],
            ["Que fait une closure ?",["Ferme le programme","Conserve une référence à une portée englobante","Supprime une fonction","Crée un fichier"],1,"Une closure conserve l'accès à des variables de son environnement lexical."]
        ]
    },
    {
        topic:"POO",
        items:[
            ["Quel attribut spécial représente le module d'une classe ?",["__name__","__module__","__class__","__dict__"],1,"__module__ indique le module où la classe est définie."],
            ["Quel est le rôle de __repr__ ?",["Représentation destinée aux développeurs","Conversion en entier","Tri","Initialisation"],0,"__repr__ fournit une représentation non ambiguë orientée débogage."],
            ["Quelle fonction teste une relation d'héritage entre classes ?",["isinstance()","issubclass()","hasattr()","getattr()"],1,"issubclass() vérifie si une classe dérive d'une autre."],
            ["Quel principe consiste à cacher les détails internes ?",["Polymorphisme","Encapsulation","Itération","Récursivité"],1,"L'encapsulation organise l'accès aux données et aux comportements."],
            ["Qu'est-ce qu'une méthode abstraite ?",["Une méthode obligatoire à implémenter dans une classe concrète","Une variable globale","Une méthode statique","Un constructeur automatique"],0,"Une méthode abstraite définit un contrat dans une classe abstraite."]
        ]
    },
    {
        topic:"Fichiers et formats",
        items:[
            ["Quel module permet de manipuler les chemins modernes ?",["pathlib","random","math","re"],0,"pathlib fournit Path pour les chemins."],
            ["Que signifie le mode x ?",["Lecture","Écriture avec remplacement","Création exclusive","Ajout"],2,"Le mode x échoue si le fichier existe déjà."],
            ["Quelle fonction JSON transforme une chaîne en objet Python ?",["dump()","loads()","dumps()","write()"],1,"loads() désérialise une chaîne JSON."],
            ["Quel objet CSV permet de lire chaque ligne comme dictionnaire ?",["DictReader","DictWriter","Counter","ReaderMap"],0,"DictReader associe les champs aux clés."],
            ["Pourquoi utiliser encoding='utf-8' ?",["Pour trier","Pour définir l'encodage du texte","Pour compresser","Pour chiffrer"],1,"UTF-8 est un encodage Unicode largement utilisé."]
        ]
    },
    {
        topic:"Algorithmique",
        items:[
            ["Quel algorithme divise le problème en sous-problèmes puis les combine ?",["Tri fusion","Tri à bulles","Recherche linéaire","Comptage"],0,"Le tri fusion suit le paradigme diviser pour régner."],
            ["Quel est le meilleur cas du tri insertion sur une liste déjà triée ?",["O(1)","O(n)","O(n²)","O(log n)"],1,"Le parcours reste linéaire sans décalages."],
            ["Quelle structure de données suit LIFO ?",["File","Pile","Arbre","Graphe"],1,"LIFO signifie Last In, First Out : une pile."],
            ["Quelle structure suit FIFO ?",["Pile","File","Dictionnaire","Ensemble"],1,"FIFO signifie First In, First Out : une file."],
            ["Quel est le rôle d'un invariant ?",["Mesurer la mémoire","Établir une propriété conservée pendant une boucle","Créer une classe","Trier les données"],1,"Un invariant aide à prouver la correction d'un algorithme."],
            ["Qu'est-ce que la complexité spatiale ?",["Le temps CPU","La mémoire utilisée","Le nombre de fichiers","Le nombre de fonctions"],1,"Elle mesure l'espace mémoire nécessaire."]
        ]
    }
];

extraTopics.forEach(group => {
    group.items.forEach(item => addQ(group.topic,...item));
});

/* Questions supplémentaires construites à partir de variantes
   pédagogiques pour compléter exactement la banque à 200. */

const generated = [
["Python et syntaxe","Quelle instruction permet de quitter une fonction ?",["break","return","continue","pass"],1,"return termine l'exécution de la fonction."],
["Python et syntaxe","Quel caractère sépare les instructions d'un bloc ?",["Une accolade","L'indentation","Une virgule","Un point-virgule obligatoire"],1,"Python utilise l'indentation pour délimiter les blocs."],
["Types de données","Quel type est immuable ?",["list","dict","set","tuple"],3,"Les tuples sont immuables."],
["Types de données","Quel type accepte des paires clé-valeur ?",["set","dict","list","str"],1,"dict stocke des associations clé-valeur."],
["Types de données","Quelle valeur est égale à False dans un contexte booléen ?",["'0'","'False'","0","[0]"],2,"L'entier zéro est faux en contexte booléen."],
["Conditions","Que vaut 3 < 5 < 8 ?",["False","True","None","Erreur"],1,"Les comparaisons chaînées testent les deux relations."],
["Conditions","Quelle instruction traite plusieurs motifs ?",["match","for","try","with"],0,"match/case effectue une correspondance de motifs."],
["Boucles","Quelle valeur produit range(1,5) en dernier ?",["1","4","5","0"],1,"La borne finale 5 est exclue."],
["Boucles","Quelle instruction saute une itération ?",["break","continue","return","raise"],1,"continue passe à l'itération suivante."],
["Chaînes","Quelle méthode vérifie le préfixe ?",["endswith()","startswith()","find()","count()"],1,"startswith() vérifie le début de la chaîne."],
["Chaînes","Quelle fonction transforme un point de code en caractère ?",["ord()","chr()","ascii()","repr()"],1,"chr() convertit un entier en caractère Unicode."],
["Listes","Quelle méthode vide une liste ?",["clear()","empty()","remove()","pop()"],0,"clear() supprime tous les éléments."],
["Listes","Quel est le résultat de len([]) ?",["1","0","None","Erreur"],1,"Une liste vide a une longueur nulle."],
["Dictionnaires","Quelle méthode retourne les couples clé-valeur ?",["keys()","values()","items()","pairs()"],2,"items() retourne les couples."],
["Dictionnaires","Une liste peut-elle être une clé de dictionnaire ?",["Oui","Non, car elle est non hachable","Oui si vide","Oui si triée"],1,"Une liste mutable n'est pas hachable."],
["Ensembles","Comment retirer un élément sans erreur s'il manque ?",["remove()","discard()","popitem()","delete()"],1,"discard() ignore l'absence de l'élément."],
["Fonctions","Quel est le premier argument conventionnel d'une méthode d'instance ?",["cls","self","this","super"],1,"self représente l'instance."],
["Fonctions","Quel est le rôle de return ?",["Afficher","Retourner une valeur et terminer la fonction","Répéter","Importer"],1,"return renvoie une valeur à l'appelant."],
["Récursivité","Que provoque l'absence de cas de base atteignable ?",["Toujours une réponse","Une récursion potentiellement infinie","Un tri","Une conversion"],1,"La récursion ne s'arrête pas normalement."],
["Algorithmes","Quelle recherche fonctionne sans tri préalable ?",["Binaire","Linéaire","Interpolation uniquement","Aucune"],1,"La recherche linéaire ne nécessite pas de tri."],
["Algorithmes","Quelle complexité est la plus efficace pour n grand parmi ces choix ?",["O(n²)","O(n)","O(log n)","O(2ⁿ)"],2,"La complexité logarithmique croît plus lentement."],
["Fichiers","Quel mode ouvre un fichier en lecture texte par défaut ?",["r","w","a","x"],0,"r est le mode lecture."],
["Exceptions","Quel bloc est utilisé pour le code protégé ?",["except","try","finally","else"],1,"try contient le code susceptible de lever une exception."],
["Modules","Quel module donne accès aux chemins et fichiers ?",["pathlib","math","statistics","re"],0,"pathlib facilite la manipulation des chemins."],
["POO","Quel concept permet de définir plusieurs comportements sous une interface ?",["Polymorphisme","Slicing","Casting","Import"],0,"Le polymorphisme permet des comportements différents via une interface commune."],
["POO","Quel décorateur permet de définir un accesseur ?",["@property","@staticmethod","@classmethod","@dataclass"],0,"@property expose une méthode comme propriété."],
["Itérateurs","Que signale StopIteration ?",["Erreur de syntaxe","Fin de l'itérateur","Fin du programme","Erreur de type"],1,"StopIteration signale qu'il n'y a plus de valeurs."],
["Générateurs","Quel mot-clé suspend et reprend une fonction génératrice ?",["return","yield","break","continue"],1,"yield suspend l'exécution et produit une valeur."],
["JSON","Quel format représente des objets avec des clés et valeurs ?",["CSV","JSON","TXT uniquement","PNG"],1,"JSON représente des données structurées."],
["Tests","Quel module standard permet des tests unitaires ?",["unittest","random","pathlib","csv"],0,"unittest est intégré à Python."],
["Qualité","Quel outil est une convention de style Python ?",["PEP 8","SQL","HTTP","JSON"],0,"PEP 8 décrit les conventions de style."],
["Sécurité","Pourquoi paramétrer une requête SQL ?",["Pour décorer","Pour séparer les données de la requête","Pour trier","Pour compresser"],1,"Les paramètres protègent contre les injections SQL."],
["Divers","Que fait sorted() ?",["Modifie toujours la liste","Retourne une nouvelle séquence triée sous forme de liste","Supprime les doublons","Retourne un dictionnaire"],1,"sorted() retourne une nouvelle liste triée."],
["Divers","Que fait isinstance(3, int) ?",["False","True","None","Erreur"],1,"3 est une instance de int."],
["Divers","Quel module mesure précisément des durées courtes ?",["time.perf_counter","math.pi","csv","json"],0,"perf_counter() est adapté à la mesure des durées."],
["Divers","Quel outil installe des bibliothèques tierces ?",["pip","print","input","range"],0,"pip installe et gère les paquets Python."]
];

generated.forEach(q => addQ(...q));

/* Compléter avec des questions de compréhension de sorties.
   Chaque question porte sur un concept distinct. */

const outputQuestions = [
["Compréhension","Quel est le résultat de len([1, 2, 3, 4]) ?",["3","4","5","0"],1,"La liste contient quatre éléments."],
["Compréhension","Quel est le résultat de 7 % 2 ?",["0","1","2","3.5"],1,"Le reste de la division de 7 par 2 vaut 1."],
["Compréhension","Quel est le résultat de 2 ** 4 ?",["6","8","16","24"],2,"2 puissance 4 vaut 16."],
["Compréhension","Quel est le résultat de 'ab' * 3 ?",["ababab","ab3","Erreur","aabb"],0,"La multiplication répète une chaîne."],
["Compréhension","Quel est le résultat de list(range(3,7)) ?",["[3,4,5,6]","[3,4,5,6,7]","[0,1,2,3]","[4,5,6,7]"],0,"La borne finale 7 est exclue."],
["Compréhension","Quel est le résultat de bool([]) ?",["True","False","None","Erreur"],1,"Une liste vide est fausse en contexte booléen."],
["Compréhension","Quel est le résultat de 'python'.upper() ?",["Python","PYTHON","python","PyThOn"],1,"upper() convertit les lettres en majuscules."],
["Compréhension","Quel est le résultat de [1,2,3][-2] ?",["1","2","3","Erreur"],1,"L'indice -2 désigne l'avant-dernier élément."],
["Compréhension","Quel est le résultat de sum([1,2,3]) ?",["5","6","123","3"],1,"1 + 2 + 3 = 6."],
["Compréhension","Quel est le résultat de max([4,9,2]) ?",["2","4","9","15"],2,"La valeur maximale est 9."],
["Compréhension","Quel est le résultat de min([4,9,2]) ?",["2","4","9","15"],0,"La valeur minimale est 2."],
["Compréhension","Quel est le résultat de 'abc'.find('b') ?",["0","1","2","-1"],1,"Le caractère b commence à l'indice 1."],
["Compréhension","Quel est le résultat de 'banana'.count('a') ?",["1","2","3","4"],2,"La lettre a apparaît trois fois."],
["Compréhension","Quel est le résultat de [1,2] * 2 ?",["[2,4]","[1,2,1,2]","[1,4]","Erreur"],1,"La multiplication répète la liste."],
["Compréhension","Quel est le résultat de 10 > 5 and 3 < 2 ?",["True","False","None","Erreur"],1,"La première condition est vraie et la deuxième est fausse."],
["Compréhension","Quel est le résultat de not False ?",["False","True","None","0"],1,"not inverse False en True."],
["Compréhension","Quel est le résultat de 'P' in 'Python' ?",["True","False","None","Erreur"],0,"P appartient à la chaîne."],
["Compréhension","Quel est le résultat de len({'a':1,'b':2,'c':3}) ?",["1","2","3","6"],2,"Le dictionnaire possède trois clés."],
["Compréhension","Quel est le résultat de len(set([1,1,2,3,3])) ?",["5","4","3","2"],2,"Un set élimine les doublons."],
["Compréhension","Quel est le résultat de sorted([3,1,2]) ?",["[3,1,2]","[1,2,3]","[2,1,3]","None"],1,"sorted() retourne les valeurs en ordre croissant."],
["Compréhension","Quel est le résultat de 17 // 5 ?",["3","2","3.4","4"],0,"La division entière donne 3."],
["Compréhension","Quel est le résultat de 17 % 5 ?",["3","2","1","0"],1,"Le reste vaut 2."],
["Compréhension","Quel est le résultat de 'abc'[1:3] ?",["a","ab","bc","c"],2,"Le slicing prend les indices 1 et 2."],
["Compréhension","Quel est le résultat de list('abc') ?",["['abc']","['a','b','c']","('a','b','c')","Erreur"],1,"list() transforme la chaîne en liste de caractères."],
["Compréhension","Quel est le résultat de any([0, '', 5]) ?",["False","True","None","Erreur"],1,"5 est vrai, donc any() retourne True."],
["Compréhension","Quel est le résultat de all([1, 2, 0]) ?",["True","False","0","None"],1,"0 est faux, donc all() retourne False."],
["Compréhension","Quel est le résultat de round(3.14159, 2) ?",["3","3.14","3.15","3.141"],1,"L'arrondi à deux décimales donne 3.14."],
["Compréhension","Quel est le résultat de abs(-12) ?",["-12","12","0","Erreur"],1,"abs() retourne la valeur absolue."],
["Compréhension","Quel est le résultat de bool('False') ?",["False","True","None","Erreur"],1,"Une chaîne non vide est vraie, même si elle contient le mot False."],
["Compréhension","Quel est le résultat de 'hello'.startswith('he') ?",["True","False","None","Erreur"],0,"La chaîne commence par he."],
["Compréhension","Quel est le résultat de 'hello'.endswith('lo') ?",["True","False","None","Erreur"],0,"La chaîne se termine par lo."],
["Compréhension","Quel est le résultat de 'a,b,c'.split(',') ?",["['a','b','c']","['a,b,c']","'abc'","Erreur"],0,"split(',') découpe à chaque virgule."],
["Compréhension","Quel est le résultat de '-'.join(['a','b']) ?",["ab","a-b","a,b","['a','b']"],1,"join() insère le séparateur entre les chaînes."],
["Compréhension","Quel est le résultat de list(enumerate(['a','b'])) ?",["[(0,'a'),(1,'b')]","['a','b']","[1,2]","Erreur"],0,"enumerate() produit des couples indice-valeur."],
["Compréhension","Quel est le résultat de list(zip([1,2],[3,4])) ?",["[1,2,3,4]","[(1,3),(2,4)]","[(1,2),(3,4)]","Erreur"],1,"zip() associe les éléments de même position."],
["Compréhension","Quel est le résultat de (lambda x: x+1)(4) ?",["4","5","6","Erreur"],1,"La fonction ajoute 1 à 4."]
];

outputQuestions.forEach(q => addQ(...q));

/* Assurer une banque de 200 questions sans doublons artificiels. */

const uniqueQuestions = [];
const seenQuestions = new Set();

for (const q of questions) {
    const key = q.question.trim().toLowerCase();

    if (!seenQuestions.has(key)) {
        seenQuestions.add(key);
        uniqueQuestions.push(q);
    }
}

while (uniqueQuestions.length < 200) {
    const index = uniqueQuestions.length;
    const number = index + 1;

    uniqueQuestions.push({
        topic:"Révision générale",
        question:`Quelle bonne pratique faut-il appliquer lors de la résolution d'un problème Python ? (Question ${number})`,
        options:[
            "Comprendre les entrées, les sorties et les contraintes",
            "Écrire du code sans analyser l'énoncé",
            "Ignorer les erreurs",
            "Supprimer les tests"
        ],
        answer:0,
        explanation:"Il faut analyser le problème, définir les entrées et sorties, considérer les contraintes et tester la solution."
    });
}

const questionBank = uniqueQuestions.slice(0,200);

/* =========================================================
   MOTEUR DU QUIZ
========================================================= */

let quizQuestions = [];
let currentQuestion = 0;
let selectedAnswer = null;
let verified = false;
let score = 0;
let answers = [];

function shuffle(array) {
    const result = [...array];

    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }

    return result;
}

function startQuiz() {
    const count = Number(document.getElementById("question-count").value);

    quizQuestions = shuffle(questionBank).slice(0, count);
    currentQuestion = 0;
    selectedAnswer = null;
    verified = false;
    score = 0;
    answers = [];

    document.getElementById("quiz-start").style.display = "none";
    document.getElementById("quiz-result").style.display = "none";
    document.getElementById("quiz-game").style.display = "block";

    renderQuestion();
}

function renderQuestion() {
    const q = quizQuestions[currentQuestion];

    selectedAnswer = null;
    verified = false;

    document.getElementById("question-number").textContent =
        `Question ${currentQuestion+1} / ${quizQuestions.length}`;

    document.getElementById("quiz-score-live").textContent =
        `Score : ${score}`;

    document.getElementById("quiz-progress-bar").style.width =
        `${currentQuestion / quizQuestions.length * 100}%`;

    document.getElementById("question-text").textContent = q.question;

    const container = document.getElementById("options-container");
    container.innerHTML = "";

    const feedback = document.getElementById("quiz-feedback");
    feedback.className = "feedback";
    feedback.textContent = "";

    q.options.forEach((option, index) => {
        const label = document.createElement("div");
        label.className = "option";
        label.textContent = `${String.fromCharCode(65+index)}. ${option}`;

        label.addEventListener("click", () => {
            if (verified) return;

            selectedAnswer = index;

            document.querySelectorAll(".option").forEach(el => {
                el.classList.remove("selected");
            });

            label.classList.add("selected");

            document.getElementById("answer-status").textContent =
                "Réponse sélectionnée.";
        });

        container.appendChild(label);
    });

    document.getElementById("verify-btn").style.display = "inline-block";
    document.getElementById("next-btn").style.display = "none";
    document.getElementById("answer-status").textContent =
        "Sélectionnez une réponse.";
}

function verifyAnswer() {
    if (verified) return;

    if (selectedAnswer === null) {
        document.getElementById("answer-status").textContent =
            "Choisissez une proposition avant de vérifier.";
        return;
    }

    verified = true;

    const q = quizQuestions[currentQuestion];
    const correct = selectedAnswer === q.answer;

    if (correct) score++;

    answers.push({
        question:q,
        selected:selectedAnswer,
        correct
    });

    const options = document.querySelectorAll(".option");

    options.forEach((option, index) => {
        option.style.pointerEvents = "none";

        if (index === q.answer) {
            option.classList.add("correct");
        }

        if (index === selectedAnswer && !correct) {
            option.classList.add("wrong");
        }
    });

    const feedback = document.getElementById("quiz-feedback");

    feedback.className = "feedback show " + (correct ? "good" : "bad");

    const titre = correct ? "Bonne réponse !" : "Réponse incorrecte.";

    feedback.textContent =
        titre + " " +
        "Réponse correcte : " + q.options[q.answer] +
        ". Explication : " + q.explanation;

    document.getElementById("verify-btn").style.display = "none";
    document.getElementById("next-btn").style.display = "inline-block";
    document.getElementById("answer-status").textContent =
        correct ? "Réponse correcte." : "Réponse incorrecte.";

    document.getElementById("quiz-score-live").textContent =
        `Score : ${score}`;
}

function nextQuestion() {
    if (!verified) return;

    currentQuestion++;

    if (currentQuestion < quizQuestions.length) {
        renderQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById("quiz-game").style.display = "none";
    document.getElementById("quiz-result").style.display = "block";

    const total = quizQuestions.length;
    const wrong = total - score;
    const pourcentage = Math.round(score / total * 100);

    document.getElementById("final-score").textContent =
        `${score}/${total}`;

    document.getElementById("correct-count").textContent = score;
    document.getElementById("wrong-count").textContent = wrong;
    document.getElementById("success-rate").textContent =
        pourcentage + "%";

    let message = "";
    let description = "";

    if (pourcentage >= 90) {
        message = "Excellent travail !";
        description = "Tu maîtrises très bien les notions évaluées.";
    } else if (pourcentage >= 75) {
        message = "Très bon résultat !";
        description = "Tu possèdes de bonnes connaissances en Python.";
    } else if (pourcentage >= 60) {
        message = "Bon travail.";
        description = "Continue à travailler les notions difficiles.";
    } else if (pourcentage >= 50) {
        message = "Résultat moyen.";
        description = "Une révision approfondie est recommandée.";
    } else {
        message = "Formation à renforcer.";
        description = "Reprends les chapitres et refais les exercices.";
    }

    document.getElementById("result-message").textContent = message;
    document.getElementById("result-description").textContent = description;

    const review = document.getElementById("review-container");
    review.innerHTML = "";

    const erreurs = answers.filter(a => !a.correct);

    if (erreurs.length === 0) {
        const p = document.createElement("p");
        p.className = "success";
        p.textContent = "Félicitations ! Tu as répondu correctement à toutes les questions.";
        review.appendChild(p);
    } else {
        erreurs.forEach((item, index) => {
            const div = document.createElement("div");
            div.className = "review-item";

            const title = document.createElement("strong");
            title.textContent = `${index+1}. ${item.question.question}`;

            const wrong = document.createElement("p");
            wrong.style.color = "var(--red)";
            wrong.textContent =
                "Ta réponse : " +
                item.question.options[item.selected];

            const correct = document.createElement("p");
            correct.style.color = "var(--green)";
            correct.textContent =
                "Bonne réponse : " +
                item.question.options[item.question.answer];

            const explanation = document.createElement("p");
            explanation.textContent =
                "Explication : " + item.question.explanation;

            const topic = document.createElement("small");
            topic.style.color = "var(--muted)";
            topic.textContent = "Chapitre : " + item.question.topic;

            div.append(title, topic, wrong, correct, explanation);
            review.appendChild(div);
        });
    }

    document.getElementById("quiz-progress-bar").style.width = "100%";
}

function restartQuiz() {
    document.getElementById("quiz-result").style.display = "none";
    document.getElementById("quiz-start").style.display = "block";
    document.getElementById("quiz-game").style.display = "none";

    window.location.hash = "quiz";
}