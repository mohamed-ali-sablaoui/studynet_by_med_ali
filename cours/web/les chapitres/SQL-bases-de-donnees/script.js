         /* =========================================
           MENU MOBILE
        ========================================= */

        const menuToggle = document.getElementById("menuToggle");
        const topLinks = document.getElementById("topLinks");

        menuToggle.addEventListener("click", () => {
            topLinks.classList.toggle("open");
        });

        document.querySelectorAll(".top-links a").forEach(link => {
            link.addEventListener("click", () => {
                topLinks.classList.remove("open");
            });
        });

        /* =========================================
           COPIER LES EXEMPLES SQL
        ========================================= */

        document.querySelectorAll(".copy-btn").forEach(button => {
            button.addEventListener("click", async () => {
                const code = button.closest(".code-window").querySelector("pre").innerText;

                try {
                    await navigator.clipboard.writeText(code);

                    const oldText = button.textContent;
                    button.textContent = "Copié !";

                    setTimeout(() => {
                        button.textContent = oldText;
                    }, 1500);
                } catch (error) {
                    const textarea = document.createElement("textarea");
                    textarea.value = code;
                    document.body.appendChild(textarea);
                    textarea.select();
                    document.execCommand("copy");
                    textarea.remove();

                    button.textContent = "Copié !";

                    setTimeout(() => {
                        button.textContent = "Copier";
                    }, 1500);
                }
            });
        });

        /* =========================================
           PROJETS : AFFICHER LES CONSIGNES
        ========================================= */

        document.querySelectorAll(".project-toggle").forEach(button => {
            button.addEventListener("click", () => {
                const details = button.nextElementSibling;
                details.classList.toggle("open");

                button.textContent = details.classList.contains("open")
                    ? "Masquer les consignes"
                    : "Voir les consignes supplémentaires";
            });
        });

        /* =========================================
           BANQUE DE QUESTIONS
           Chaque question : question, options,
           bonne réponse, explication, catégorie, niveau.
        ========================================= */

        const questionBank = [];

        function addQuestion(category, level, question, options, correct, explanation) {
            questionBank.push({
                category,
                level,
                question,
                options,
                correct,
                explanation
            });
        }

        /* QUESTIONS : FONDAMENTAUX */

        const fundamentals = [
            ["Qu'est-ce qu'une base de données ?", [
                "Un ensemble organisé de données",
                "Un langage de programmation",
                "Un système d'exploitation",
                "Un navigateur web"
            ], 0, "Une base de données permet de stocker et organiser des informations."],

            ["Que signifie SGBD ?", [
                "Système Général de Base Digitale",
                "Système de Gestion de Bases de Données",
                "Service de Gestion des Documents",
                "Système Graphique de Base de Données"
            ], 1, "SGBD signifie Système de Gestion de Bases de Données."],

            ["Quel est le rôle principal d'un SGBD ?", [
                "Créer des images",
                "Gérer les bases de données",
                "Compiler du code C",
                "Naviguer sur Internet"
            ], 1, "Un SGBD permet de créer, consulter, modifier et sécuriser les bases de données."],

            ["Lequel est un SGBD relationnel ?", [
                "MySQL",
                "Photoshop",
                "Visual Studio Code",
                "Windows"
            ], 0, "MySQL est un système de gestion de bases de données relationnel."],

            ["Dans une table, une colonne représente généralement :", [
                "Une base de données",
                "Un attribut",
                "Une requête",
                "Une transaction"
            ], 1, "Une colonne représente un attribut ou une caractéristique."],

            ["Dans une table, une ligne représente :", [
                "Un enregistrement",
                "Un type de données",
                "Une base",
                "Un index"
            ], 0, "Une ligne représente un enregistrement ou un tuple."],

            ["Que signifie SQL ?", [
                "Simple Query Logic",
                "Structured Query Language",
                "System Question Language",
                "Standard Quick List"
            ], 1, "SQL signifie Structured Query Language."],

            ["Quel modèle organise les données sous forme de tables ?", [
                "Le modèle relationnel",
                "Le modèle graphique",
                "Le modèle audio",
                "Le modèle séquentiel"
            ], 0, "Le modèle relationnel organise les données dans des tables reliées entre elles."],

            ["Quel élément identifie une entité dans un MCD ?", [
                "Une association",
                "Une entité",
                "Une requête",
                "Un index"
            ], 1, "Une entité représente un objet du domaine étudié."],

            ["Qu'est-ce qu'un attribut ?", [
                "Une caractéristique d'une entité",
                "Une base de données",
                "Un logiciel",
                "Une sauvegarde"
            ], 0, "Un attribut décrit une caractéristique d'une entité."]
        ];

        fundamentals.forEach((q, i) => {
            addQuestion("Fondamentaux", i < 6 ? "facile" : "moyen", q[0], q[1], q[2], q[3]);
        });

        /* QUESTIONS : CLÉS ET MODÉLISATION */

        const keys = [
            ["Quel est le rôle d'une clé primaire ?", [
                "Identifier chaque ligne de manière unique",
                "Supprimer une table",
                "Trier les données",
                "Créer une sauvegarde"
            ], 0, "La clé primaire identifie chaque ligne de manière unique."],

            ["Une clé primaire peut-elle contenir NULL ?", [
                "Oui, toujours",
                "Non",
                "Seulement dans MySQL",
                "Seulement si elle est numérique"
            ], 1, "Une clé primaire ne peut pas être NULL."],

            ["Quelle contrainte permet de relier deux tables ?", [
                "DEFAULT",
                "CHECK",
                "FOREIGN KEY",
                "ORDER BY"
            ], 2, "FOREIGN KEY établit une référence vers une clé d'une autre table."],

            ["Quel est le rôle de UNIQUE ?", [
                "Interdire les doublons",
                "Supprimer les données",
                "Créer une relation",
                "Trier les résultats"
            ], 0, "UNIQUE impose l'unicité des valeurs concernées."],

            ["Quelle contrainte interdit les valeurs NULL ?", [
                "DEFAULT",
                "NOT NULL",
                "DISTINCT",
                "HAVING"
            ], 1, "NOT NULL impose la présence d'une valeur."],

            ["Quelle contrainte permet de vérifier une condition ?", [
                "CHECK",
                "ORDER",
                "JOIN",
                "SELECT"
            ], 0, "CHECK impose une condition aux valeurs enregistrées."],

            ["Une relation 1:N signifie :", [
                "Un élément est lié à plusieurs éléments",
                "Plusieurs éléments sont toujours identiques",
                "Une table ne possède aucune clé",
                "Une seule table existe"
            ], 0, "Une relation un-à-plusieurs relie une ligne à plusieurs lignes de l'autre table."],

            ["Comment représente-t-on généralement une relation N:N ?", [
                "Avec une table intermédiaire",
                "Avec une seule colonne texte",
                "Avec une vue uniquement",
                "Sans clé"
            ], 0, "Une table intermédiaire contient les clés des deux tables liées."],

            ["Quel est le rôle de la normalisation ?", [
                "Réduire les répétitions et les anomalies",
                "Augmenter les doublons",
                "Supprimer les clés",
                "Remplacer SQL"
            ], 0, "La normalisation améliore l'organisation et la cohérence des données."],

            ["Une clé étrangère référence généralement :", [
                "Une clé primaire ou une clé unique",
                "Une colonne quelconque sans contrainte",
                "Un fichier texte",
                "Une commande SQL"
            ], 0, "Une clé étrangère référence une clé primaire ou une clé candidate unique."]
        ];

        keys.forEach((q, i) => {
            addQuestion("Modélisation et clés", i < 6 ? "facile" : "moyen", q[0], q[1], q[2], q[3]);
        });

        /* QUESTIONS : DDL */

        const ddl = [
            ["Quelle commande crée une base de données ?", [
                "CREATE DATABASE",
                "INSERT DATABASE",
                "MAKE DATABASE",
                "NEW DATABASE"
            ], 0, "CREATE DATABASE crée une base de données."],

            ["Quelle commande crée une table ?", [
                "NEW TABLE",
                "CREATE TABLE",
                "INSERT TABLE",
                "ADD DATABASE"
            ], 1, "CREATE TABLE définit une nouvelle table."],

            ["Quelle commande supprime une table ?", [
                "DELETE TABLE",
                "REMOVE TABLE",
                "DROP TABLE",
                "CLEAR TABLE"
            ], 2, "DROP TABLE supprime la table et sa structure."],

            ["Quelle commande modifie la structure d'une table ?", [
                "ALTER TABLE",
                "UPDATE TABLE",
                "CHANGE DATABASE",
                "MODIFY DATABASE"
            ], 0, "ALTER TABLE permet de modifier une table existante."],

            ["Quelle commande ajoute une colonne à une table ?", [
                "ALTER TABLE ... ADD",
                "SELECT ADD",
                "INSERT COLUMN",
                "CREATE COLUMN"
            ], 0, "ALTER TABLE ... ADD ajoute une colonne dans une table."],

            ["Quel type est adapté à un nombre entier ?", [
                "VARCHAR",
                "DATE",
                "INT",
                "TEXT"
            ], 2, "INT permet de stocker un nombre entier."],

            ["Quel type est adapté à un prix avec deux décimales ?", [
                "DECIMAL(10,2)",
                "TEXT",
                "DATE",
                "CHAR(2)"
            ], 0, "DECIMAL(10,2) permet de stocker un nombre décimal exact avec deux chiffres après la virgule."],

            ["Quel type permet de stocker une date ?", [
                "INT",
                "DATE",
                "VARCHAR uniquement",
                "BOOLEAN"
            ], 1, "DATE est destiné au stockage des dates."],

            ["Que fait DROP DATABASE ?", [
                "Supprime la base de données",
                "Affiche la base",
                "Ajoute une table",
                "Trie les données"
            ], 0, "DROP DATABASE supprime la base de données."],

            ["Quel est le rôle de DEFAULT ?", [
                "Définir une valeur par défaut",
                "Interdire les doublons",
                "Créer une clé étrangère",
                "Supprimer une colonne"
            ], 0, "DEFAULT définit la valeur utilisée lorsqu'aucune valeur n'est fournie."]
        ];

        ddl.forEach((q, i) => {
            addQuestion("DDL et types", i < 7 ? "facile" : "moyen", q[0], q[1], q[2], q[3]);
        });

        /* QUESTIONS : INSERT ET SELECT */

        const dml = [
            ["Quelle commande permet d'ajouter des lignes ?", [
                "INSERT INTO",
                "CREATE TABLE",
                "DROP",
                "ALTER"
            ], 0, "INSERT INTO ajoute des lignes dans une table."],

            ["Quelle commande permet de consulter des données ?", [
                "SELECT",
                "UPDATE",
                "DELETE",
                "DROP"
            ], 0, "SELECT permet de récupérer des données."],

            ["Que signifie SELECT * ?", [
                "Sélectionner toutes les colonnes",
                "Supprimer toutes les colonnes",
                "Sélectionner une seule ligne",
                "Créer une table"
            ], 0, "L'étoile représente toutes les colonnes de la table."],

            ["Quel mot-clé indique la table à consulter ?", [
                "FROM",
                "WHERE",
                "ORDER",
                "SET"
            ], 0, "FROM indique la table source."],

            ["Quelle clause permet de filtrer les lignes ?", [
                "GROUP BY",
                "WHERE",
                "ORDER BY",
                "CREATE"
            ], 1, "WHERE applique une condition aux lignes."],

            ["Quel mot-clé élimine les doublons du résultat ?", [
                "UNIQUE",
                "DISTINCT",
                "CHECK",
                "DEFAULT"
            ], 1, "DISTINCT élimine les doublons dans le résultat."],

            ["Quelle clause trie les résultats ?", [
                "ORDER BY",
                "GROUP BY",
                "INSERT",
                "ALTER"
            ], 0, "ORDER BY trie les lignes selon une ou plusieurs colonnes."],

            ["Que signifie DESC ?", [
                "Ordre décroissant",
                "Ordre croissant",
                "Suppression",
                "Regroupement"
            ], 0, "DESC signifie descendant."],

            ["Que signifie ASC ?", [
                "Ordre ascendant",
                "Ordre décroissant",
                "Ajout",
                "Modification"
            ], 0, "ASC signifie ascendant."],

            ["Quelle commande modifie des lignes existantes ?", [
                "UPDATE",
                "INSERT",
                "CREATE",
                "SELECT"
            ], 0, "UPDATE modifie les valeurs des lignes existantes."]
        ];

        dml.forEach((q, i) => {
            addQuestion("Manipulation SQL", i < 7 ? "facile" : "moyen", q[0], q[1], q[2], q[3]);
        });

        /* QUESTIONS : CONDITIONS */

        const conditions = [
            ["Quel opérateur signifie supérieur ou égal ?", [
                ">=",
                "<=",
                "!=",
                "="
            ], 0, ">= signifie supérieur ou égal."],

            ["Quel opérateur combine deux conditions qui doivent être vraies ?", [
                "OR",
                "AND",
                "NOT",
                "LIKE"
            ], 1, "AND exige que les deux conditions soient vraies."],

            ["Quel opérateur accepte au moins une condition vraie ?", [
                "AND",
                "OR",
                "NOT",
                "BETWEEN"
            ], 1, "OR retourne vrai si au moins une condition est vraie."],

            ["Que fait BETWEEN 10 AND 20 ?", [
                "Sélectionne les valeurs entre 10 et 20 inclus",
                "Sélectionne uniquement 10",
                "Sélectionne uniquement 20",
                "Supprime les valeurs entre 10 et 20"
            ], 0, "BETWEEN inclut les deux limites de l'intervalle."],

            ["Quel opérateur vérifie l'appartenance à une liste ?", [
                "IN",
                "LIKE",
                "ORDER",
                "SET"
            ], 0, "IN vérifie si une valeur appartient à une liste."],

            ["Quel symbole LIKE représente plusieurs caractères ?", [
                "_",
                "%",
                "#",
                "$"
            ], 1, "% remplace zéro ou plusieurs caractères."],

            ["Dans LIKE, quel symbole représente exactement un caractère ?", [
                "%",
                "_",
                "*",
                "&"
            ], 1, "_ représente exactement un caractère."],

            ["Comment tester une valeur NULL ?", [
                "= NULL",
                "IS NULL",
                "== NULL",
                "LIKE NULL"
            ], 1, "IS NULL est utilisé pour vérifier une valeur NULL."],

            ["Quelle requête sélectionne les noms commençant par A ?", [
                "WHERE nom LIKE 'A%'",
                "WHERE nom LIKE '%A'",
                "WHERE nom = '%A%'",
                "WHERE nom LIKE '_A'"
            ], 0, "A% signifie que le texte commence par A et peut être suivi de n'importe quelle suite de caractères."],

            ["Quel opérateur inverse une condition ?", [
                "NOT",
                "AND",
                "OR",
                "IN"
            ], 0, "NOT inverse le résultat logique de la condition."]
        ];

        conditions.forEach((q, i) => {
            addQuestion("Conditions SQL", i < 5 ? "facile" : "moyen", q[0], q[1], q[2], q[3]);
        });

        /* QUESTIONS : FONCTIONS ET GROUPES */

        const aggregate = [
            ["Quelle fonction compte les lignes ?", [
                "SUM()",
                "COUNT()",
                "AVG()",
                "MAX()"
            ], 1, "COUNT() permet de compter les lignes ou les valeurs non NULL d'une colonne."],

            ["Quelle fonction calcule une somme ?", [
                "AVG()",
                "COUNT()",
                "SUM()",
                "MIN()"
            ], 2, "SUM() calcule la somme des valeurs numériques."],

            ["Quelle fonction calcule une moyenne ?", [
                "AVG()",
                "MAX()",
                "COUNT()",
                "SUM()"
            ], 0, "AVG() calcule la moyenne des valeurs numériques non NULL."],

            ["Quelle fonction retourne la plus petite valeur ?", [
                "MAX()",
                "MIN()",
                "AVG()",
                "COUNT()"
            ], 1, "MIN() retourne la plus petite valeur."],

            ["Quelle fonction retourne la plus grande valeur ?", [
                "MIN()",
                "SUM()",
                "MAX()",
                "AVG()"
            ], 2, "MAX() retourne la plus grande valeur."],

            ["Quel est le rôle de GROUP BY ?", [
                "Regrouper les lignes selon des valeurs communes",
                "Supprimer les groupes",
                "Créer une table",
                "Modifier une colonne"
            ], 0, "GROUP BY regroupe les lignes pour effectuer des calculs par groupe."],

            ["Quelle clause filtre les groupes ?", [
                "WHERE",
                "HAVING",
                "ORDER BY",
                "FROM"
            ], 1, "HAVING filtre les groupes après le regroupement."],

            ["WHERE intervient généralement :", [
                "Avant GROUP BY",
                "Après HAVING",
                "Après ORDER BY",
                "Après LIMIT"
            ], 0, "WHERE filtre les lignes avant leur regroupement."],

            ["Quelle fonction transforme un texte en majuscules ?", [
                "LOWER()",
                "UPPER()",
                "COUNT()",
                "AVG()"
            ], 1, "UPPER() transforme les caractères en majuscules."],

            ["Quel mot-clé permet de nommer une colonne dans un résultat ?", [
                "AS",
                "IN",
                "ON",
                "BY"
            ], 0, "AS permet de définir un alias."]
        ];

        aggregate.forEach((q, i) => {
            addQuestion("Fonctions et regroupements", i < 5 ? "facile" : "moyen", q[0], q[1], q[2], q[3]);
        });

        /* QUESTIONS : JOINTURES */

        const joins = [
            ["Quel est le rôle principal de JOIN ?", [
                "Combiner des données de plusieurs tables",
                "Supprimer une base",
                "Créer une colonne",
                "Trier les résultats"
            ], 0, "JOIN permet de combiner des données provenant de plusieurs tables."],

            ["INNER JOIN retourne :", [
                "Toutes les lignes de gauche",
                "Les lignes correspondantes des deux tables",
                "Toutes les lignes des deux tables sans condition",
                "Uniquement les lignes NULL"
            ], 1, "INNER JOIN retourne les correspondances entre les deux tables."],

            ["LEFT JOIN conserve :", [
                "Toutes les lignes de la table de gauche",
                "Toutes les lignes de la table de droite",
                "Uniquement les correspondances",
                "Aucune ligne sans correspondance"
            ], 0, "LEFT JOIN conserve toutes les lignes de gauche."],

            ["RIGHT JOIN conserve :", [
                "Toutes les lignes de gauche",
                "Toutes les lignes de droite",
                "Uniquement les lignes NULL",
                "Aucune ligne"
            ], 1, "RIGHT JOIN conserve toutes les lignes de la table de droite."],

            ["Quelle clause précise la condition de jointure ?", [
                "ON",
                "SET",
                "GROUP",
                "DEFAULT"
            ], 0, "ON indique la condition qui relie les lignes des tables."],

            ["Quel type de jointure produit toutes les combinaisons ?", [
                "INNER JOIN",
                "CROSS JOIN",
                "LEFT JOIN",
                "SELF JOIN"
            ], 1, "CROSS JOIN produit le produit cartésien des deux tables."],

            ["Qu'est-ce qu'un SELF JOIN ?", [
                "Une table jointe avec elle-même",
                "Une table supprimée",
                "Une jointure sans condition",
                "Une jointure de trois bases"
            ], 0, "SELF JOIN utilise la même table deux fois avec des alias."],

            ["Dans une jointure, pourquoi utiliser des alias ?", [
                "Pour distinguer les références aux tables",
                "Pour supprimer les clés",
                "Pour créer une base",
                "Pour changer les types"
            ], 0, "Les alias rendent les requêtes plus courtes et clarifient les références."],

            ["Une jointure entre deux tables sans condition peut produire :", [
                "Un produit cartésien",
                "Une clé primaire",
                "Une sauvegarde",
                "Une transaction"
            ], 0, "Sans condition de correspondance, la combinaison peut produire un produit cartésien."],

            ["Quel JOIN peut conserver les lignes sans correspondance à gauche ?", [
                "INNER JOIN",
                "LEFT JOIN",
                "CROSS JOIN uniquement",
                "Aucun"
            ], 1, "LEFT JOIN conserve toutes les lignes de la table de gauche."]
        ];

        joins.forEach((q, i) => {
            addQuestion("Jointures", i < 5 ? "moyen" : "difficile", q[0], q[1], q[2], q[3]);
        });

        /* QUESTIONS : SOUS-REQUÊTES ET OBJETS */

        const advanced = [
            ["Qu'est-ce qu'une sous-requête ?", [
                "Une requête dans une autre requête",
                "Une table sans colonne",
                "Une commande de suppression",
                "Une clé primaire"
            ], 0, "Une sous-requête est une requête placée à l'intérieur d'une autre."],

            ["Quel opérateur vérifie qu'une sous-requête retourne au moins une ligne ?", [
                "EXISTS",
                "ORDER BY",
                "DEFAULT",
                "ALTER"
            ], 0, "EXISTS teste l'existence d'au moins une ligne dans le résultat de la sous-requête."],

            ["Que vérifie IN ?", [
                "L'appartenance à un ensemble de valeurs",
                "L'existence d'une table uniquement",
                "La taille d'une colonne",
                "La suppression d'une ligne"
            ], 0, "IN vérifie si une valeur appartient à une liste ou à un résultat de sous-requête."],

            ["Que signifie ALL dans une comparaison ?", [
                "La comparaison doit être vraie pour toutes les valeurs",
                "La comparaison doit être vraie pour une valeur",
                "Supprimer toutes les lignes",
                "Afficher toutes les tables"
            ], 0, "ALL impose que la comparaison soit vraie pour toutes les valeurs retournées."],

            ["Que signifie ANY ?", [
                "La comparaison est vraie pour au moins une valeur",
                "La comparaison est vraie pour toutes les valeurs",
                "Supprimer une valeur",
                "Créer une table"
            ], 0, "ANY accepte une comparaison vraie pour au moins une valeur."],

            ["Qu'est-ce qu'une vue SQL ?", [
                "Une requête enregistrée présentée comme une table virtuelle",
                "Une sauvegarde physique obligatoire",
                "Un type de donnée",
                "Un utilisateur"
            ], 0, "Une vue est une requête enregistrée qui présente un résultat sous forme de table virtuelle."],

            ["Quelle commande crée une vue ?", [
                "CREATE VIEW",
                "CREATE INDEX",
                "NEW VIEW",
                "INSERT VIEW"
            ], 0, "CREATE VIEW définit une nouvelle vue."],

            ["Quel est l'objectif principal d'un index ?", [
                "Accélérer certaines recherches",
                "Supprimer les doublons automatiquement",
                "Remplacer les clés étrangères",
                "Supprimer une table"
            ], 0, "Un index peut accélérer les recherches, selon la requête et la structure des données."],

            ["Quel est un inconvénient possible des index ?", [
                "Ils peuvent ralentir certaines écritures",
                "Ils empêchent toute recherche",
                "Ils suppriment les données",
                "Ils interdisent les jointures"
            ], 0, "Les index occupent de l'espace et doivent être maintenus lors des modifications."],

            ["Quelle commande supprime une vue ?", [
                "DROP VIEW",
                "DELETE VIEW",
                "REMOVE VIEW",
                "ALTER DATABASE"
            ], 0, "DROP VIEW supprime une vue."]
        ];

        advanced.forEach((q, i) => {
            addQuestion("SQL avancé", i < 4 ? "moyen" : "difficile", q[0], q[1], q[2], q[3]);
        });

        /* QUESTIONS : TRANSACTIONS ET SÉCURITÉ */

        const security = [
            ["Que fait COMMIT ?", [
                "Valide la transaction",
                "Annule la transaction",
                "Supprime une table",
                "Crée un index"
            ], 0, "COMMIT valide les modifications de la transaction."],

            ["Que fait ROLLBACK ?", [
                "Annule les modifications non validées",
                "Valide les modifications",
                "Ajoute une colonne",
                "Crée une base"
            ], 0, "ROLLBACK annule les modifications non validées de la transaction."],

            ["Que signifie ACID ?", [
                "Atomicité, Cohérence, Isolation, Durabilité",
                "Ajout, Création, Index, Données",
                "Analyse, Contrôle, Information, Définition",
                "Aucune réponse"
            ], 0, "ACID représente les quatre propriétés fondamentales des transactions."],

            ["Quelle propriété ACID garantit que tout est validé ou annulé ?", [
                "Atomicité",
                "Isolation",
                "Durabilité",
                "Cohérence"
            ], 0, "L'atomicité garantit le caractère tout ou rien d'une transaction."],

            ["Quelle propriété ACID concerne la conservation des changements validés ?", [
                "Isolation",
                "Durabilité",
                "Atomicité",
                "Cohérence"
            ], 1, "La durabilité garantit la persistance des changements validés."],

            ["Quel est le rôle de GRANT ?", [
                "Accorder des privilèges",
                "Supprimer les privilèges",
                "Supprimer une table",
                "Créer une vue"
            ], 0, "GRANT accorde des droits à un utilisateur."],

            ["Quel est le rôle de REVOKE ?", [
                "Retirer des privilèges",
                "Ajouter des données",
                "Créer une base",
                "Trier les résultats"
            ], 0, "REVOKE retire des droits précédemment accordés."],

            ["Qu'est-ce qu'une injection SQL ?", [
                "Une attaque exploitant des données saisies interprétées comme du SQL",
                "Une sauvegarde automatique",
                "Une jointure",
                "Une méthode de tri"
            ], 0, "Une injection SQL exploite une construction dangereuse de requêtes avec des entrées utilisateur."],

            ["Comment réduire le risque d'injection SQL dans une application ?", [
                "Utiliser des requêtes préparées",
                "Concaténer toutes les entrées",
                "Désactiver les clés",
                "Utiliser SELECT *"
            ], 0, "Les requêtes préparées séparent les valeurs utilisateur du texte SQL."],

            ["Pourquoi effectuer des sauvegardes ?", [
                "Pouvoir restaurer les données",
                "Supprimer les utilisateurs",
                "Accélérer toutes les requêtes",
                "Remplacer les index"
            ], 0, "Les sauvegardes permettent de restaurer les données après une perte ou une erreur."]
        ];

        security.forEach((q, i) => {
            addQuestion("Transactions et sécurité", i < 5 ? "moyen" : "difficile", q[0], q[1], q[2], q[3]);
        });

        /* QUESTIONS DE RAISONNEMENT */

        const reasoning = [
            ["Quelle requête affiche les étudiants ayant plus de 20 ans ?", [
                "SELECT * FROM Etudiant WHERE age > 20;",
                "SELECT Etudiant WHERE age > 20;",
                "SHOW Etudiant age > 20;",
                "SELECT * FROM Etudiant ORDER BY age;"
            ], 0, "SELECT récupère les données et WHERE filtre les étudiants dont l'âge dépasse 20."],

            ["Quelle requête affiche les produits du plus cher au moins cher ?", [
                "SELECT * FROM Produit ORDER BY prix DESC;",
                "SELECT * FROM Produit ORDER BY prix ASC;",
                "SELECT * FROM Produit WHERE prix DESC;",
                "SELECT prix FROM Produit GROUP BY DESC;"
            ], 0, "DESC trie les prix du plus grand au plus petit."],

            ["Quelle requête compte les clients ?", [
                "SELECT COUNT(*) FROM Client;",
                "SELECT SUM(*) FROM Client;",
                "SELECT AVG(*) FROM Client;",
                "COUNT Client;"
            ], 0, "COUNT(*) compte le nombre de lignes."],

            ["Quelle requête affiche les villes présentes une seule fois ?", [
                "SELECT DISTINCT ville FROM Client;",
                "SELECT UNIQUE ALL ville FROM Client;",
                "SELECT ville FROM Client WHERE UNIQUE;",
                "SELECT ville DISTINCT Client;"
            ], 0, "DISTINCT élimine les valeurs répétées dans le résultat."],

            ["Quelle clause est adaptée pour filtrer les groupes ayant plus de 5 lignes ?", [
                "HAVING COUNT(*) > 5",
                "WHERE COUNT(*) > 5",
                "ORDER BY COUNT(*) > 5",
                "LIMIT COUNT(*) > 5"
            ], 0, "HAVING filtre les groupes après GROUP BY."],

            ["Quelle jointure permet de conserver tous les clients même sans commande ?", [
                "INNER JOIN",
                "LEFT JOIN",
                "CROSS JOIN",
                "SELF JOIN"
            ], 1, "En plaçant Client à gauche, LEFT JOIN conserve tous les clients."],

            ["Quelle condition vérifie qu'un email est absent ?", [
                "email IS NULL",
                "email = NULL",
                "email == NULL",
                "email LIKE NULL"
            ], 0, "IS NULL permet de vérifier l'absence de valeur."],

            ["Quelle requête affiche les noms contenant 'med' ?", [
                "WHERE nom LIKE '%med%'",
                "WHERE nom LIKE 'med%'",
                "WHERE nom LIKE '%med'",
                "WHERE nom = '%med%'"
            ], 0, "%med% recherche med à n'importe quelle position."],

            ["Quelle commande vide les lignes sans supprimer la table ?", [
                "DROP TABLE",
                "TRUNCATE TABLE",
                "DROP DATABASE",
                "ALTER TABLE"
            ], 1, "TRUNCATE TABLE vide la table tout en conservant sa structure, avec un comportement qui dépend du SGBD."],

            ["Quelle instruction modifie le nom d'un étudiant dont l'identifiant est 5 ?", [
                "UPDATE Etudiant SET nom = 'Ali' WHERE id = 5;",
                "INSERT INTO Etudiant SET nom = 'Ali';",
                "DELETE FROM Etudiant WHERE id = 5;",
                "SELECT nom = 'Ali' FROM Etudiant;"
            ], 0, "UPDATE modifie la ligne identifiée par la condition WHERE."]
        ];

        reasoning.forEach((q, i) => {
            addQuestion("Raisonnement SQL", i < 4 ? "moyen" : "difficile", q[0], q[1], q[2], q[3]);
        });

        /* QUESTIONS SUPPLÉMENTAIRES : NIVEAU DIFFICILE */

        const difficult = [
            ["Que retourne COUNT(colonne) ?", [
                "Le nombre de valeurs non NULL de cette colonne",
                "Le nombre de valeurs NULL uniquement",
                "La somme de la colonne",
                "La moyenne de la colonne"
            ], 0, "COUNT(colonne) ignore les valeurs NULL, contrairement à COUNT(*), qui compte les lignes."],

            ["Que retourne COUNT(*) ?", [
                "Le nombre de lignes du résultat",
                "Le nombre de colonnes",
                "Le nombre de valeurs NULL uniquement",
                "La somme des valeurs"
            ], 0, "COUNT(*) compte les lignes du résultat, y compris celles contenant des valeurs NULL."],

            ["Pourquoi une condition sur une fonction d'agrégation utilise souvent HAVING ?", [
                "Parce qu'elle filtre les groupes après agrégation",
                "Parce que WHERE ne peut jamais filtrer du texte",
                "Parce que HAVING crée une table",
                "Parce que GROUP BY supprime les données"
            ], 0, "HAVING est prévu pour filtrer les groupes produits par GROUP BY."],

            ["Que se passe-t-il si une sous-requête utilisée avec IN retourne plusieurs valeurs ?", [
                "IN peut comparer la valeur à l'ensemble retourné",
                "La requête est toujours invalide",
                "La table est supprimée",
                "Une seule valeur est conservée obligatoirement"
            ], 0, "IN permet de vérifier l'appartenance à plusieurs valeurs."],

            ["Quel est le risque d'une jointure sans condition adaptée ?", [
                "Obtenir des combinaisons incorrectes ou un produit cartésien",
                "Créer automatiquement une clé primaire",
                "Supprimer les tables",
                "Annuler toutes les transactions"
            ], 0, "Une condition de jointure incorrecte peut multiplier les lignes et produire des résultats erronés."],

            ["Une clé primaire composée de deux colonnes signifie :", [
                "Les deux colonnes forment ensemble l'identifiant unique",
                "Chaque colonne doit être une table",
                "La table ne possède pas de clé",
                "Les colonnes sont obligatoirement des textes"
            ], 0, "La combinaison des deux colonnes doit être unique."],

            ["Quel problème peut provoquer une dépendance transitive ?", [
                "Une anomalie de conception et des répétitions",
                "Une accélération obligatoire des requêtes",
                "La disparition de SQL",
                "La suppression automatique des index"
            ], 0, "Les dépendances transitives peuvent introduire des répétitions et des anomalies."],

            ["Quel est l'intérêt d'une transaction pour un transfert bancaire ?", [
                "Éviter de valider une seule partie du transfert",
                "Remplacer les clés primaires",
                "Créer deux bases automatiquement",
                "Éviter toute vérification"
            ], 0, "La transaction permet de valider les deux opérations ensemble ou de les annuler ensemble."],

            ["Pourquoi limiter les privilèges d'un utilisateur ?", [
                "Réduire les risques d'accès ou de modification non autorisés",
                "Accélérer automatiquement toutes les requêtes",
                "Supprimer les sauvegardes",
                "Rendre les tables invisibles à tous"
            ], 0, "Le principe du moindre privilège limite les actions autorisées à chaque utilisateur."],

            ["Quel est le rôle d'un index composite ?", [
                "Indexer plusieurs colonnes dans une même structure",
                "Remplacer toutes les tables",
                "Créer une relation N:N",
                "Supprimer les doublons de toutes les tables"
            ], 0, "Un index composite porte sur plusieurs colonnes et peut aider certaines requêtes."]
        ];

        difficult.forEach(q => {
            addQuestion("Approfondissement", "difficile", q[0], q[1], q[2], q[3]);
        });

        /*
          Compléter la banque à 200 questions en générant des variantes
          de questions pratiques et de raisonnement.
        */

        const practicalTemplates = [
            {
                category: "Pratique SQL",
                level: "facile",
                data: [
                    {
                        subject: "afficher tous les produits",
                        answer: "SELECT * FROM Produit;",
                        options: [
                            "SELECT * FROM Produit;",
                            "SHOW ALL Produit;",
                            "DISPLAY Produit;",
                            "SELECT Produit ALL;"
                        ],
                        explanation: "SELECT * récupère toutes les colonnes et FROM indique la table Produit."
                    },
                    {
                        subject: "afficher les noms des clients",
                        answer: "SELECT nom FROM Client;",
                        options: [
                            "SELECT nom FROM Client;",
                            "SHOW nom Client;",
                            "SELECT Client.nom ALL;",
                            "GET nom FROM Client;"
                        ],
                        explanation: "La colonne nom est sélectionnée depuis la table Client."
                    },
                    {
                        subject: "afficher les commandes triées par date",
                        answer: "SELECT * FROM Commande ORDER BY date_commande ASC;",
                        options: [
                            "SELECT * FROM Commande ORDER BY date_commande ASC;",
                            "SELECT * FROM Commande GROUP BY date_commande;",
                            "SELECT * FROM Commande WHERE date_commande ASC;",
                            "SORT Commande BY date_commande;"
                        ],
                        explanation: "ORDER BY trie les résultats par date. ASC indique l'ordre croissant."
                    },
                    {
                        subject: "afficher les produits dont le prix dépasse 50",
                        answer: "SELECT * FROM Produit WHERE prix > 50;",
                        options: [
                            "SELECT * FROM Produit WHERE prix > 50;",
                            "SELECT Produit WHERE prix > 50;",
                            "SELECT * FROM Produit ORDER prix > 50;",
                            "GET Produit WHERE prix > 50;"
                        ],
                        explanation: "WHERE applique la condition prix > 50."
                    },
                    {
                        subject: "compter les commandes",
                        answer: "SELECT COUNT(*) FROM Commande;",
                        options: [
                            "SELECT COUNT(*) FROM Commande;",
                            "SELECT SUM(*) FROM Commande;",
                            "SELECT NUMBER(*) Commande;",
                            "COUNT FROM Commande;"
                        ],
                        explanation: "COUNT(*) compte les lignes de la table Commande."
                    }
                ]
            }
        ];

        practicalTemplates.forEach(group => {
            group.data.forEach(item => {
                addQuestion(
                    group.category,
                    group.level,
                    "Quelle requête permet de " + item.subject + " ?",
                    item.options,
                    item.options.indexOf(item.answer),
                    item.explanation
                );
            });
        });

        const extraConcepts = [
            {
                term: "PRIMARY KEY",
                meaning: "identifie chaque ligne",
                options: ["identifie chaque ligne", "trie les données", "supprime une table", "calcule une moyenne"],
                correct: 0
            },
            {
                term: "FOREIGN KEY",
                meaning: "établit une référence entre des tables",
                options: ["établit une référence entre des tables", "compte les lignes", "supprime les doublons", "crée un index automatiquement"],
                correct: 0
            },
            {
                term: "NOT NULL",
                meaning: "interdit les valeurs NULL",
                options: ["interdit les valeurs NULL", "autorise toutes les valeurs", "trie les résultats", "crée une vue"],
                correct: 0
            },
            {
                term: "UNIQUE",
                meaning: "empêche les valeurs répétées",
                options: ["empêche les valeurs répétées", "supprime la table", "calcule une somme", "crée une transaction"],
                correct: 0
            },
            {
                term: "CHECK",
                meaning: "impose une condition aux valeurs",
                options: ["impose une condition aux valeurs", "affiche les tables", "crée une base", "annule une transaction"],
                correct: 0
            },
            {
                term: "DEFAULT",
                meaning: "définit une valeur par défaut",
                options: ["définit une valeur par défaut", "supprime une ligne", "filtre les groupes", "trie les résultats"],
                correct: 0
            },
            {
                term: "COMMIT",
                meaning: "valide une transaction",
                options: ["valide une transaction", "annule une transaction", "supprime une table", "crée un index"],
                correct: 0
            },
            {
                term: "ROLLBACK",
                meaning: "annule les changements non validés",
                options: ["annule les changements non validés", "valide les changements", "ajoute une colonne", "crée une base"],
                correct: 0
            },
            {
                term: "DISTINCT",
                meaning: "élimine les doublons du résultat",
                options: ["élimine les doublons du résultat", "supprime les lignes de la table", "crée une clé", "modifie une colonne"],
                correct: 0
            },
            {
                term: "HAVING",
                meaning: "filtre les groupes",
                options: ["filtre les groupes", "crée une table", "supprime une base", "insère une ligne"],
                correct: 0
            }
        ];

        extraConcepts.forEach((item, index) => {
            addQuestion(
                "Notions essentielles",
                index < 5 ? "facile" : "moyen",
                "Quel est le rôle de " + item.term + " ?",
                item.options,
                item.correct,
                item.term + " " + item.meaning + "."
            );
        });

        const advancedTemplates = [
            {
                q: "Quelle est la différence entre DELETE et DROP ?",
                options: [
                    "DELETE supprime des lignes, DROP supprime un objet de base de données",
                    "DELETE crée une table, DROP ajoute une ligne",
                    "Les deux commandes sont identiques",
                    "DROP modifie uniquement une valeur"
                ],
                correct: 0,
                explanation: "DELETE supprime des lignes d'une table. DROP supprime l'objet lui-même."
            },
            {
                q: "Quelle est la différence principale entre WHERE et HAVING ?",
                options: [
                    "WHERE filtre les lignes, HAVING filtre les groupes",
                    "WHERE crée une table, HAVING supprime une table",
                    "Les deux servent uniquement au tri",
                    "HAVING remplace SELECT"
                ],
                correct: 0,
                explanation: "WHERE filtre les lignes avant le regroupement, HAVING filtre les groupes."
            },
            {
                q: "Pourquoi une clé étrangère est-elle importante ?",
                options: [
                    "Elle contribue à garantir l'intégrité référentielle",
                    "Elle rend toutes les colonnes uniques",
                    "Elle remplace toutes les requêtes",
                    "Elle supprime les valeurs NULL de toutes les tables"
                ],
                correct: 0,
                explanation: "Une clé étrangère contrôle les références entre tables."
            },
            {
                q: "Quel est le principal avantage d'une vue ?",
                options: [
                    "Simplifier et réutiliser une requête",
                    "Supprimer automatiquement les données",
                    "Remplacer le SGBD",
                    "Créer des mots de passe"
                ],
                correct: 0,
                explanation: "Une vue permet de réutiliser une requête et de présenter les données de manière adaptée."
            },
            {
                q: "Quel est le principal objectif de l'isolation ACID ?",
                options: [
                    "Gérer les interactions entre transactions concurrentes",
                    "Créer des colonnes",
                    "Compter les lignes",
                    "Supprimer les index"
                ],
                correct: 0,
                explanation: "L'isolation contrôle les effets des transactions exécutées simultanément."
            },
            {
                q: "Que signifie une dépendance fonctionnelle A → B ?",
                options: [
                    "La valeur de A détermine celle de B",
                    "B supprime A",
                    "A et B sont obligatoirement identiques",
                    "A et B sont deux tables"
                ],
                correct: 0,
                explanation: "A détermine fonctionnellement B si une même valeur de A correspond à une seule valeur de B."
            },
            {
                q: "Pourquoi utiliser DECIMAL pour des montants financiers ?",
                options: [
                    "Pour représenter des décimaux exacts selon la précision définie",
                    "Pour stocker uniquement du texte",
                    "Pour stocker des images",
                    "Pour éviter toute contrainte"
                ],
                correct: 0,
                explanation: "DECIMAL est adapté aux montants nécessitant une représentation décimale exacte."
            },
            {
                q: "Quelle est la fonction d'une table intermédiaire dans une relation N:N ?",
                options: [
                    "Enregistrer les associations entre les deux entités",
                    "Remplacer les deux tables",
                    "Supprimer les clés étrangères",
                    "Créer un index sur toutes les colonnes"
                ],
                correct: 0,
                explanation: "La table intermédiaire enregistre les associations entre les deux tables."
            },
            {
                q: "Quel est le rôle d'un alias de table ?",
                options: [
                    "Donner un nom temporaire à une table dans une requête",
                    "Supprimer le nom réel de la table",
                    "Créer une nouvelle table",
                    "Modifier la structure de la base"
                ],
                correct: 0,
                explanation: "Un alias simplifie les références aux tables dans une requête."
            },
            {
                q: "Pourquoi faut-il faire attention à une jointure plusieurs-à-plusieurs ?",
                options: [
                    "Elle peut multiplier le nombre de lignes du résultat",
                    "Elle supprime automatiquement les données",
                    "Elle interdit GROUP BY",
                    "Elle transforme toutes les valeurs en NULL"
                ],
                correct: 0,
                explanation: "Une ligne peut correspondre à plusieurs lignes de l'autre table, ce qui multiplie les résultats."
            }
        ];

        advancedTemplates.forEach((item, index) => {
            addQuestion(
                "Analyse avancée",
                "difficile",
                item.q,
                item.options,
                item.correct,
                item.explanation
            );
        });

        /*
          Génération de variantes de compréhension :
          les formulations changent, mais la notion évaluée reste précise.
        */

        const variationTopics = [
            {
                name: "SELECT",
                question: "Quelle commande SQL permet de lire des données ?",
                options: ["SELECT", "DELETE", "DROP", "UPDATE"],
                correct: 0,
                explanation: "SELECT permet de consulter les données."
            },
            {
                name: "INSERT",
                question: "Quelle commande ajoute un nouvel enregistrement ?",
                options: ["INSERT INTO", "ALTER TABLE", "DROP TABLE", "REVOKE"],
                correct: 0,
                explanation: "INSERT INTO ajoute un nouvel enregistrement."
            },
            {
                name: "UPDATE",
                question: "Quelle commande modifie des valeurs existantes ?",
                options: ["UPDATE", "CREATE", "SELECT", "GRANT"],
                correct: 0,
                explanation: "UPDATE modifie les valeurs des lignes existantes."
            },
            {
                name: "DELETE",
                question: "Quelle commande supprime des lignes d'une table ?",
                options: ["DELETE", "CREATE", "ALTER", "SELECT"],
                correct: 0,
                explanation: "DELETE supprime des lignes d'une table."
            },
            {
                name: "ORDER BY",
                question: "Quelle clause organise les lignes dans un ordre précis ?",
                options: ["ORDER BY", "WHERE", "HAVING", "INSERT"],
                correct: 0,
                explanation: "ORDER BY trie les lignes du résultat."
            },
            {
                name: "GROUP BY",
                question: "Quelle clause rassemble les lignes selon une valeur commune ?",
                options: ["GROUP BY", "ORDER BY", "DROP", "SET"],
                correct: 0,
                explanation: "GROUP BY crée des groupes de lignes selon les colonnes indiquées."
            },
            {
                name: "INNER JOIN",
                question: "Quelle jointure conserve les correspondances des deux tables ?",
                options: ["INNER JOIN", "LEFT JOIN", "CROSS JOIN", "RIGHT JOIN"],
                correct: 0,
                explanation: "INNER JOIN conserve les lignes qui correspondent dans les deux tables."
            },
            {
                name: "LEFT JOIN",
                question: "Quelle jointure conserve toutes les lignes de la table gauche ?",
                options: ["LEFT JOIN", "INNER JOIN", "CROSS JOIN", "UNION"],
                correct: 0,
                explanation: "LEFT JOIN conserve toutes les lignes de gauche."
            },
            {
                name: "COUNT",
                question: "Quelle fonction permet de compter les lignes ?",
                options: ["COUNT()", "AVG()", "SUM()", "MIN()"],
                correct: 0,
                explanation: "COUNT() permet de compter les lignes ou les valeurs non NULL."
            },
            {
                name: "AVG",
                question: "Quelle fonction calcule une moyenne ?",
                options: ["AVG()", "SUM()", "COUNT()", "MAX()"],
                correct: 0,
                explanation: "AVG() calcule une moyenne."
            }
        ];

        variationTopics.forEach((item, index) => {
            addQuestion(
                "Révision des commandes",
                index < 5 ? "facile" : "moyen",
                item.question,
                item.options,
                item.correct,
                item.explanation
            );
        });

        /*
          La banque contient plus de 100 questions originales.
          On complète avec des questions de compréhension SQL
          supplémentaires, sans dupliquer exactement les mêmes questions.
        */

        const scenarioQuestions = [
            {
                q: "Une table contient plusieurs étudiants. Quel attribut est le meilleur candidat pour les identifier individuellement ?",
                o: ["Un identifiant unique", "Le prénom uniquement", "La ville", "L'âge"],
                c: 0,
                e: "Un identifiant unique est plus fiable qu'un prénom, une ville ou un âge."
            },
            {
                q: "Un étudiant peut suivre plusieurs matières et chaque matière peut être suivie par plusieurs étudiants. Quelle relation s'agit-il ?",
                o: ["N:N", "1:1", "1:N", "Aucune relation"],
                c: 0,
                e: "Il s'agit d'une relation plusieurs-à-plusieurs, représentée avec une table intermédiaire."
            },
            {
                q: "Une classe peut contenir plusieurs étudiants. Quelle relation s'agit-il ?",
                o: ["1:N", "N:N", "1:1", "Aucune"],
                c: 0,
                e: "Une classe est liée à plusieurs étudiants : relation un-à-plusieurs."
            },
            {
                q: "Une colonne email doit être obligatoire et unique. Quelles contraintes conviennent ?",
                o: ["NOT NULL et UNIQUE", "DEFAULT uniquement", "CHECK uniquement", "ORDER BY et DISTINCT"],
                c: 0,
                e: "NOT NULL rend l'email obligatoire et UNIQUE empêche les doublons."
            },
            {
                q: "Une colonne quantité ne doit jamais être négative. Quelle contrainte peut l'imposer ?",
                o: ["CHECK (quantite >= 0)", "ORDER BY quantite", "GROUP BY quantite", "DISTINCT quantite"],
                c: 0,
                e: "CHECK (quantite >= 0) impose une condition sur la valeur."
            },
            {
                q: "On veut afficher les clients qui n'ont aucune commande. Quelle approche est adaptée ?",
                o: ["LEFT JOIN puis tester la clé de commande IS NULL", "INNER JOIN uniquement", "ORDER BY", "SUM uniquement"],
                c: 0,
                e: "LEFT JOIN conserve les clients sans correspondance, puis IS NULL permet de les identifier."
            },
            {
                q: "On veut afficher les catégories qui contiennent plus de 10 produits. Quelle clause est adaptée ?",
                o: ["HAVING COUNT(*) > 10", "WHERE COUNT(*) > 10", "ORDER BY COUNT(*)", "LIMIT 10"],
                c: 0,
                e: "HAVING filtre les groupes après le calcul de COUNT."
            },
            {
                q: "On veut afficher les produits dont le prix est supérieur au prix moyen. Quelle méthode est adaptée ?",
                o: ["Une sous-requête avec AVG()", "Un DROP TABLE", "Un INSERT INTO", "Un CROSS JOIN obligatoire"],
                c: 0,
                e: "Une sous-requête peut calculer AVG(prix), puis la requête principale compare chaque prix à cette moyenne."
            },
            {
                q: "On veut empêcher qu'un emprunt référence un livre inexistant. Que faut-il utiliser ?",
                o: ["Une clé étrangère", "Un alias", "ORDER BY", "COUNT"],
                c: 0,
                e: "La clé étrangère garantit que la référence correspond à un livre existant."
            },
            {
                q: "On veut modifier le prix d'un produit sans modifier les autres. Quelle commande est adaptée ?",
                o: ["UPDATE avec WHERE", "UPDATE sans WHERE", "DROP TABLE", "CREATE DATABASE"],
                c: 0,
                e: "UPDATE avec une condition WHERE permet de cibler le produit concerné."
            }
        ];

        scenarioQuestions.forEach((item, index) => {
            addQuestion(
                "Situations pratiques",
                index < 4 ? "moyen" : "difficile",
                item.q,
                item.o,
                item.c,
                item.e
            );
        });

        /* Complément de questions avec des cas SQL supplémentaires */

        const moreQuestions = [
            ["Que fait la commande USE universite dans MySQL ?", [
                "Sélectionne la base universite",
                "Supprime la base universite",
                "Crée une table universite",
                "Affiche tous les étudiants"
            ], 0, "USE sélectionne la base de données utilisée pour les prochaines commandes."],

            ["Quelle clause limite le nombre de résultats dans MySQL ?", [
                "LIMIT",
                "MAX",
                "COUNT",
                "TOP uniquement"
            ], 0, "LIMIT permet de limiter le nombre de lignes retournées."],

            ["Quel est le résultat logique de 10 BETWEEN 5 AND 15 ?", [
                "Vrai",
                "Faux",
                "NULL obligatoirement",
                "Erreur SQL"
            ], 0, "10 se trouve entre 5 et 15, bornes incluses."],

            ["Quelle requête sélectionne les étudiants dont la ville est Mahdia ou Sousse ?", [
                "WHERE ville IN ('Mahdia', 'Sousse')",
                "WHERE ville BETWEEN 'Mahdia' AND 'Sousse'",
                "WHERE ville LIKE 'Mahdia Sousse'",
                "WHERE ville = ('Mahdia', 'Sousse')"
            ], 0, "IN permet de comparer une colonne à plusieurs valeurs possibles."],

            ["Quel mot-clé permet de définir une condition de jointure ?", [
                "ON",
                "AS",
                "SET",
                "DEFAULT"
            ], 0, "ON définit la condition qui relie les tables."],

            ["Que fait UPPER('sql') ?", [
                "Retourne SQL en majuscules",
                "Retourne sql en minuscules",
                "Compte trois caractères",
                "Supprime le texte"
            ], 0, "UPPER transforme le texte en majuscules."],

            ["Quel est le rôle de LOWER() ?", [
                "Convertir le texte en minuscules",
                "Convertir le texte en majuscules",
                "Compter les lignes",
                "Calculer une moyenne"
            ], 0, "LOWER convertit les caractères en minuscules."],

            ["Quelle commande permet de créer un index ?", [
                "CREATE INDEX",
                "CREATE KEYWORD",
                "INSERT INDEX",
                "ALTER DATABASE INDEX"
            ], 0, "CREATE INDEX crée un index sur une ou plusieurs colonnes."],

            ["Quelle commande commence une transaction dans MySQL ?", [
                "START TRANSACTION",
                "BEGIN DATABASE",
                "CREATE TRANSACTION",
                "OPEN TABLE"
            ], 0, "START TRANSACTION démarre une transaction explicite dans MySQL."],

            ["Quel est le risque de DELETE FROM Etudiant sans WHERE ?", [
                "Toutes les lignes peuvent être supprimées",
                "La table est automatiquement supprimée",
                "La base entière disparaît",
                "Aucune modification ne se produit"
            ], 0, "Sans WHERE, DELETE supprime toutes les lignes de la table."]
        ];

        moreQuestions.forEach((q, i) => {
            addQuestion(
                "Révision approfondie",
                i < 5 ? "moyen" : "difficile",
                q[0],
                q[1],
                q[2],
                q[3]
            );
        });

        /*
          Complément : questions de compréhension des résultats.
        */

        const resultQuestions = [
            {
                q: "Si une table contient 8 lignes et que SELECT COUNT(*) est exécuté sans WHERE, quel résultat obtient-on ?",
                o: ["8", "0", "1", "Une erreur obligatoirement"],
                c: 0,
                e: "COUNT(*) compte les huit lignes."
            },
            {
                q: "Si une colonne contient les valeurs 10, 20 et 30, que retourne AVG(colonne) ?",
                o: ["20", "60", "30", "10"],
                c: 0,
                e: "La moyenne est (10 + 20 + 30) / 3 = 20."
            },
            {
                q: "Si une colonne contient 4, 7 et 12, que retourne MAX(colonne) ?",
                o: ["12", "4", "7", "23"],
                c: 0,
                e: "MAX retourne la valeur la plus élevée."
            },
            {
                q: "Si une colonne contient 4, 7 et 12, que retourne MIN(colonne) ?",
                o: ["4", "7", "12", "23"],
                c: 0,
                e: "MIN retourne la valeur la plus faible."
            },
            {
                q: "Une table contient trois villes différentes. Que peut retourner SELECT DISTINCT ville ?",
                o: ["Une ligne par ville différente", "Toutes les colonnes", "Uniquement la première ligne", "Une somme des villes"],
                c: 0,
                e: "DISTINCT élimine les valeurs répétées dans le résultat."
            },
            {
                q: "Une requête contient WHERE age > 18. Que se passe-t-il pour les lignes ayant age = 18 ?",
                o: ["Elles ne sont pas sélectionnées", "Elles sont toujours sélectionnées", "Elles sont supprimées", "Elles sont modifiées"],
                c: 0,
                e: "La condition est strictement supérieure à 18."
            },
            {
                q: "Une requête contient WHERE age >= 18. Que se passe-t-il pour age = 18 ?",
                o: ["La ligne satisfait la condition", "La ligne ne satisfait pas la condition", "La ligne est supprimée", "La requête échoue"],
                c: 0,
                e: ">= inclut la valeur égale à 18."
            },
            {
                q: "Dans une relation LEFT JOIN, que contient une colonne de droite sans correspondance ?",
                o: ["NULL", "0 obligatoirement", "Une chaîne vide obligatoirement", "La clé primaire de gauche"],
                c: 0,
                e: "Les colonnes provenant de la table droite prennent la valeur NULL lorsqu'il n'y a pas de correspondance."
            },
            {
                q: "Si GROUP BY ville est utilisé, combien de groupes obtient-on en principe ?",
                o: ["Un groupe par valeur distincte de ville", "Un groupe par colonne", "Toujours un seul groupe", "Un groupe par table"],
                c: 0,
                e: "GROUP BY forme un groupe pour chaque valeur distincte de la colonne de regroupement."
            },
            {
                q: "Si une transaction est annulée avec ROLLBACK avant COMMIT, quel est l'objectif ?",
                o: ["Annuler les changements de la transaction", "Valider les changements", "Créer une sauvegarde", "Supprimer la base"],
                c: 0,
                e: "ROLLBACK annule les changements non validés de la transaction."
            }
        ];

        resultQuestions.forEach((item, index) => {
            addQuestion(
                "Compréhension des résultats",
                index < 5 ? "moyen" : "difficile",
                item.q,
                item.o,
                item.c,
                item.e
            );
        });

        /*
          Générer des questions supplémentaires de vocabulaire
          et de compréhension pour atteindre exactement 200 questions.
        */

        const vocabulary = [
            ["DDL", "Définition des structures de la base de données", "DML", "DQL"],
            ["DML", "Manipulation des données", "DDL", "TCL"],
            ["DQL", "Interrogation des données", "DCL", "DDL"],
            ["DCL", "Contrôle des privilèges", "DML", "DQL"],
            ["TCL", "Gestion des transactions", "DDL", "DCL"]
        ];

        vocabulary.forEach((item, index) => {
            addQuestion(
                "Vocabulaire SQL",
                "moyen",
                "Que signifie " + item[0] + " ?",
                [item[1], item[2], item[3], "Type de donnée numérique"],
                0,
                item[0] + " signifie " + item[1] + "."
            );
        });

        const finalQuestions = [
            {
                q: "Quel est le rôle de la clause FROM dans SELECT ?",
                o: ["Indiquer la source des données", "Trier les données", "Modifier les données", "Créer une table"],
                c: 0,
                e: "FROM indique la table ou les sources utilisées par la requête."
            },
            {
                q: "Quel est le rôle de SET dans UPDATE ?",
                o: ["Définir les nouvelles valeurs", "Indiquer la table", "Filtrer les groupes", "Créer une clé"],
                c: 0,
                e: "SET indique les colonnes et les valeurs à modifier."
            },
            {
                q: "Dans une instruction INSERT, quel mot-clé introduit les valeurs à ajouter ?",
                o: ["VALUES", "HAVING", "ORDER", "CHECK"],
                c: 0,
                e: "VALUES fournit les valeurs à insérer."
            },
            {
                q: "Quel mot-clé peut éviter une erreur si une base existe déjà lors de sa création ?",
                o: ["IF NOT EXISTS", "IF NULL", "WITHOUT ERROR", "IGNORE ALL"],
                c: 0,
                e: "IF NOT EXISTS demande de ne créer la base que si elle n'existe pas."
            },
            {
                q: "Quel est le rôle d'une sauvegarde de base de données ?",
                o: ["Permettre une restauration en cas de perte", "Créer automatiquement des relations", "Remplacer les requêtes SQL", "Supprimer les utilisateurs"],
                c: 0,
                e: "Une sauvegarde permet de restaurer les données en cas de problème."
            },
            {
                q: "Pourquoi utiliser des noms explicites pour les colonnes ?",
                o: ["Faciliter la compréhension et la maintenance", "Augmenter le nombre de lignes", "Supprimer les contraintes", "Remplacer les clés"],
                c: 0,
                e: "Des noms clairs facilitent la lecture, la maintenance et la collaboration."
            },
            {
                q: "Quel élément permet de représenter une caractéristique d'un étudiant ?",
                o: ["Un attribut", "Une transaction", "Une jointure", "Un index"],
                c: 0,
                e: "Un attribut représente une caractéristique d'une entité."
            },
            {
                q: "Quel modèle est généralement transformé en tables lors de la conception relationnelle ?",
                o: ["Le modèle conceptuel", "Le modèle graphique uniquement", "Le modèle audio", "Le modèle réseau Internet"],
                c: 0,
                e: "Le modèle conceptuel est transformé en modèle logique puis en structures physiques."
            },
            {
                q: "Quel est le but de la clé composée dans une table d'inscription ?",
                o: ["Identifier une association par plusieurs colonnes", "Remplacer la base de données", "Créer automatiquement une vue", "Trier les inscriptions"],
                c: 0,
                e: "Une clé composée utilise plusieurs colonnes pour identifier une ligne."
            },
            {
                q: "Quel principe de sécurité consiste à accorder uniquement les droits nécessaires ?",
                o: ["Moindre privilège", "Tri descendant", "Normalisation", "Jointure externe"],
                c: 0,
                e: "Le principe du moindre privilège limite les droits aux besoins réels de l'utilisateur."
            }
        ];

        finalQuestions.forEach((item, index) => {
            addQuestion(
                "Connaissances générales",
                index < 5 ? "facile" : "moyen",
                item.q,
                item.o,
                item.c,
                item.e
            );
        });

        /* =========================================
           AJOUT DE QUESTIONS DE RAISONNEMENT
           POUR COMPLÉTER LA BANQUE À 200.
        ========================================= */

        const bankExtensions = [
            {
                q: "Quel résultat est obtenu par SELECT 2 + 3 dans un SGBD SQL courant ?",
                o: ["5", "23", "2", "Une table est créée"],
                c: 0,
                e: "Une expression arithmétique peut être évaluée directement dans SELECT."
            },
            {
                q: "Quel est le rôle du point-virgule en SQL dans la plupart des environnements ?",
                o: ["Terminer une instruction", "Créer une clé", "Supprimer une table", "Définir un type"],
                c: 0,
                e: "Le point-virgule sert généralement à terminer une instruction SQL."
            },
            {
                q: "Quel est le rôle d'un commentaire SQL ?",
                o: ["Expliquer le code sans l'exécuter", "Créer une colonne", "Modifier une donnée", "Valider une transaction"],
                c: 0,
                e: "Les commentaires servent à documenter les requêtes et ne sont pas exécutés comme des instructions."
            },
            {
                q: "Quel symbole commence généralement un commentaire sur une ligne en SQL ?",
                o: ["--", "##", "$$", "&&"],
                c: 0,
                e: "Le double tiret -- est une syntaxe courante de commentaire SQL."
            },
            {
                q: "Pourquoi utiliser des paramètres dans une requête préparée ?",
                o: ["Séparer les données du code SQL", "Supprimer les clés étrangères", "Créer des tables plus rapidement dans tous les cas", "Éviter les sauvegardes"],
                c: 0,
                e: "Les paramètres séparent les valeurs fournies par l'utilisateur de la structure SQL."
            },
            {
                q: "Quel est le rôle d'une contrainte de clé étrangère lors d'une suppression ?",
                o: ["Elle peut empêcher la suppression si des références existent, selon les règles définies", "Elle supprime toujours toute la base", "Elle ignore toutes les références", "Elle transforme les données en texte"],
                c: 0,
                e: "Les règles référentielles définissent le comportement lors de suppressions ou modifications de clés référencées."
            },
            {
                q: "Que signifie ON DELETE CASCADE dans une clé étrangère compatible avec cette option ?",
                o: ["Supprimer les lignes dépendantes lors de la suppression de la ligne référencée", "Interdire toutes les suppressions", "Créer un index", "Modifier les colonnes en texte"],
                c: 0,
                e: "CASCADE propage la suppression aux lignes dépendantes."
            },
            {
                q: "Pourquoi une table de notes peut-elle avoir une clé composée étudiant-matière-session ?",
                o: ["Pour identifier une note selon ces trois éléments", "Pour supprimer les étudiants", "Pour remplacer les types numériques", "Pour éviter toutes les jointures"],
                c: 0,
                e: "La combinaison des identifiants peut distinguer les notes selon l'étudiant, la matière et la session."
            },
            {
                q: "Quel est le risque de stocker plusieurs numéros de téléphone dans une seule cellule séparés par des virgules ?",
                o: ["La valeur n'est pas atomique et les recherches deviennent plus difficiles", "La table devient automatiquement sécurisée", "La clé primaire disparaît", "SQL ne peut plus lire la table"],
                c: 0,
                e: "La première forme normale vise des valeurs atomiques dans chaque cellule."
            },
            {
                q: "Quel est le rôle d'un dictionnaire de données dans un projet ?",
                o: ["Documenter les tables, colonnes, types et règles", "Exécuter les transactions", "Remplacer le SGBD", "Supprimer les utilisateurs"],
                c: 0,
                e: "Le dictionnaire de données décrit la structure et la signification des éléments de la base."
            }
        ];

        bankExtensions.forEach((item, index) => {
            addQuestion(
                "Cas pratiques avancés",
                index < 4 ? "moyen" : "difficile",
                item.q,
                item.o,
                item.c,
                item.e
            );
        });

        /*
          Sélectionner exactement 200 questions si la banque en contient
          davantage. Les questions sont toutes conservées dans la banque
          tant que le nombre ne dépasse pas la limite configurée.
        */

        function shuffle(array) {
            const result = [...array];

            for (let i = result.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [result[i], result[j]] = [result[j], result[i]];
            }

            return result;
        }

        /*
          On utilise 200 questions maximum.
          Les questions de la banque sont variées et les réponses
          sont corrigées à partir de l'indice correct.
        */

        const questions = shuffle(questionBank).slice(0, 200);

        /* =========================================
           LOGIQUE DU QUIZ
        ========================================= */

        const questionCount = document.getElementById("questionCount");
        const quizLevel = document.getElementById("quizLevel");
        const startQuiz = document.getElementById("startQuiz");
        const quizSettings = document.getElementById("quizSettings");
        const quizProgress = document.getElementById("quizProgress");
        const questionCard = document.getElementById("questionCard");
        const questionCategory = document.getElementById("questionCategory");
        const questionText = document.getElementById("questionText");
        const answersContainer = document.getElementById("answers");
        const feedback = document.getElementById("feedback");
        const validateAnswer = document.getElementById("validateAnswer");
        const quitQuiz = document.getElementById("quitQuiz");
        const questionCounter = document.getElementById("questionCounter");
        const scoreCounter = document.getElementById("scoreCounter");
        const progressFill = document.getElementById("progressFill");
        const quizResult = document.getElementById("quizResult");
        const finalScore = document.getElementById("finalScore");
        const finalMessage = document.getElementById("finalMessage");
        const reviewList = document.getElementById("reviewList");
        const restartQuiz = document.getElementById("restartQuiz");

        let currentQuestions = [];
        let currentIndex = 0;
        let score = 0;
        let selectedAnswer = null;
        let answerValidated = false;
        let userAnswers = [];

        function startNewQuiz() {
            const count = Number(questionCount.value);
            const level = quizLevel.value;

            let available = questions;

            if (level !== "all") {
                available = questions.filter(q => q.level === level);
            }

            if (available.length < count) {
                alert(
                    "Le nombre de questions disponibles pour ce niveau est insuffisant. Choisissez un autre niveau ou réduisez le nombre de questions."
                );
                return;
            }

            currentQuestions = shuffle(available).slice(0, count);
            currentIndex = 0;
            score = 0;
            selectedAnswer = null;
            answerValidated = false;
            userAnswers = [];

            quizSettings.style.display = "none";
            quizProgress.style.display = "block";
            quizResult.classList.remove("show");

            showQuestion();
        }

        function showQuestion() {
            const q = currentQuestions[currentIndex];

            selectedAnswer = null;
            answerValidated = false;

            questionCard.classList.add("show");

            questionCategory.textContent =
                q.category + " · " + q.level;

            questionText.textContent =
                (currentIndex + 1) + ". " + q.question;

            answersContainer.innerHTML = "";

            feedback.className = "feedback";
            feedback.textContent = "";

            validateAnswer.textContent = "Vérifier";
            validateAnswer.disabled = true;

            q.options.forEach((option, index) => {
                const button = document.createElement("button");

                button.className = "answer";
                button.textContent =
                    String.fromCharCode(65 + index) + ". " + option;

                button.addEventListener("click", () => {
                    if (answerValidated) return;

                    selectedAnswer = index;

                    document.querySelectorAll(".answer").forEach(answer => {
                        answer.classList.remove("selected");
                    });

                    button.classList.add("selected");
                    validateAnswer.disabled = false;
                });

                answersContainer.appendChild(button);
            });

            questionCounter.textContent =
                "Question " + (currentIndex + 1) +
                " / " + currentQuestions.length;

            scoreCounter.textContent = "Score : " + score;

            progressFill.style.width =
                (currentIndex / currentQuestions.length * 100) + "%";
        }

        function validateCurrentAnswer() {
            const q = currentQuestions[currentIndex];

            if (!answerValidated) {
                if (selectedAnswer === null) return;

                answerValidated = true;

                const isCorrect = selectedAnswer === q.correct;

                if (isCorrect) {
                    score++;
                }

                userAnswers.push({
                    question: q.question,
                    options: q.options,
                    selected: selectedAnswer,
                    correct: q.correct,
                    isCorrect,
                    explanation: q.explanation,
                    category: q.category
                });

                document.querySelectorAll(".answer").forEach((button, index) => {
                    button.disabled = true;

                    if (index === q.correct) {
                        button.classList.add("correct");
                    }

                    if (index === selectedAnswer && !isCorrect) {
                        button.classList.add("incorrect");
                    }
                });

                if (isCorrect) {
                    feedback.className = "feedback show good";
                    feedback.innerHTML =
                        "<strong>Bonne réponse !</strong><br>" +
                        q.explanation;
                } else {
                    feedback.className = "feedback show bad";
                    feedback.innerHTML =
                        "<strong>Mauvaise réponse.</strong><br>" +
                        "Bonne réponse : " +
                        q.options[q.correct] +
                        "<br>" + q.explanation;
                }

                scoreCounter.textContent = "Score : " + score;

                validateAnswer.textContent =
                    currentIndex === currentQuestions.length - 1
                        ? "Voir le résultat"
                        : "Question suivante";

            } else {
                currentIndex++;

                if (currentIndex >= currentQuestions.length) {
                    showResult();
                } else {
                    showQuestion();
                }
            }
        }

        function showResult() {
            questionCard.classList.remove("show");
            quizProgress.style.display = "none";
            quizResult.classList.add("show");

            finalScore.textContent =
                score + " / " + currentQuestions.length;

            const percentage =
                Math.round(score / currentQuestions.length * 100);

            if (percentage >= 90) {
                finalMessage.textContent =
                    "Excellent travail ! Vous maîtrisez très bien les notions évaluées.";
            } else if (percentage >= 75) {
                finalMessage.textContent =
                    "Très bon résultat ! Continuez à approfondir les notions.";
            } else if (percentage >= 50) {
                finalMessage.textContent =
                    "Bon début. Relisez les explications des questions incorrectes.";
            } else {
                finalMessage.textContent =
                    "Continuez à travailler les notions du cours et réessayez.";
            }

            reviewList.innerHTML = "";

            userAnswers.forEach((answer, index) => {
                const item = document.createElement("div");
                item.className = "review-item";

                const status = answer.isCorrect
                    ? '<span style="color:var(--green);font-weight:800">Correcte</span>'
                    : '<span style="color:var(--red);font-weight:800">Incorrecte</span>';

                item.innerHTML = `
                    <h4>${index + 1}. ${escapeHTML(answer.question)}</h4>
                    <p>${status}</p>
                    <p><strong>Votre réponse :</strong>
                        ${escapeHTML(answer.options[answer.selected])}
                    </p>
                    <p><strong>Bonne réponse :</strong>
                        ${escapeHTML(answer.options[answer.correct])}
                    </p>
                    <p><strong>Explication :</strong>
                        ${escapeHTML(answer.explanation)}
                    </p>
                `;

                reviewList.appendChild(item);
            });

            progressFill.style.width = "100%";
        }

        function escapeHTML(value) {
            return String(value).replace(/[&<>"']/g, char => ({
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#039;"
            })[char]);
        }

        function resetQuiz() {
            quizSettings.style.display = "block";
            quizProgress.style.display = "none";
            questionCard.classList.remove("show");
            quizResult.classList.remove("show");

            currentQuestions = [];
            currentIndex = 0;
            score = 0;
            selectedAnswer = null;
            answerValidated = false;
            userAnswers = [];
        }

        startQuiz.addEventListener("click", startNewQuiz);

        validateAnswer.addEventListener("click", validateCurrentAnswer);

        quitQuiz.addEventListener("click", () => {
            const confirmed = confirm(
                "Voulez-vous vraiment quitter ce quiz ? Votre progression actuelle sera perdue."
            );

            if (confirmed) {
                resetQuiz();
            }
        });

        restartQuiz.addEventListener("click", resetQuiz);

        /* =========================================
           NAVIGATION ACTIVE DU SOMMAIRE
           Le suivi concerne uniquement les chapitres.
        ========================================= */

        const chapters = document.querySelectorAll(".chapter");
        const sidebarLinks = document.querySelectorAll(".sidebar a");

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    sidebarLinks.forEach(link => {
                        link.classList.toggle(
                            "active",
                            link.getAttribute("href") === "#" + entry.target.id
                        );
                    });
                }
            });
        }, {
            rootMargin: "-100px 0px -65% 0px"
        });

        chapters.forEach(chapter => observer.observe(chapter));

        /* =========================================
           LIENS DE NAVIGATION : DÉFILEMENT
        ========================================= */

        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener("click", event => {
                const target = document.querySelector(link.getAttribute("href"));

                if (target) {
                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            });
        });

        /* =========================================
           CONTRÔLE DE LA BANQUE
        ========================================= */

        console.info("Nombre de questions disponibles :", questions.length);

 