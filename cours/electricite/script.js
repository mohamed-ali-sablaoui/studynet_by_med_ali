
/* -------------------- EXERCICES ET PROJETS -------------------- */
const projects = [
 {title:"1. Faire clignoter une LED",level:"Débutant",time:"15 min",goal:"Faire clignoter une LED externe toutes les secondes.",parts:"Arduino Uno, LED, résistance 220–330 Ω, breadboard, fils.",steps:["Connecte D8 à la résistance puis à l’anode de la LED.","Relie la cathode au GND.","Configure D8 en OUTPUT.","Alterne HIGH et LOW avec une temporisation."],solution:"const int led = 8;\nvoid setup() {\n  pinMode(led, OUTPUT);\n}\nvoid loop() {\n  digitalWrite(led, HIGH);\n  delay(1000);\n  digitalWrite(led, LOW);\n  delay(1000);\n}",explain:"La résistance limite le courant dans la LED. setup() configure la sortie une seule fois. loop() répète les deux états."},

 {title:"2. Commander une LED avec un bouton",level:"Débutant",time:"20 min",goal:"Allumer la LED pendant que le bouton est appuyé.",parts:"Arduino Uno, LED, résistance, bouton, fils.",steps:["Branche le bouton entre D2 et GND.","Configure D2 en INPUT_PULLUP.","Branche la LED avec sa résistance sur D8.","Lis l’état du bouton et commande la LED."],solution:"const int bouton = 2;\nconst int led = 8;\nvoid setup() {\n  pinMode(bouton, INPUT_PULLUP);\n  pinMode(led, OUTPUT);\n}\nvoid loop() {\n  if (digitalRead(bouton) == LOW) {\n    digitalWrite(led, HIGH);\n  } else {\n    digitalWrite(led, LOW);\n  }\n}",explain:"INPUT_PULLUP inverse la logique : LOW signifie que le bouton est appuyé car il relie l’entrée à GND."},

 {title:"3. Variateur de luminosité",level:"Débutant",time:"25 min",goal:"Régler la luminosité d’une LED avec un potentiomètre.",parts:"Potentiomètre, LED, résistance, breadboard.",steps:["Relie les extrémités du potentiomètre à 5 V et GND.","Relie son curseur à A0.","Branche la LED sur D9 avec une résistance.","Convertis la mesure 0–1023 en PWM 0–255."],solution:"const int pot = A0;\nconst int led = 9;\nvoid setup() { pinMode(led, OUTPUT); }\nvoid loop() {\n  int mesure = analogRead(pot);\n  int pwm = map(mesure, 0, 1023, 0, 255);\n  analogWrite(led, pwm);\n}",explain:"D9 est une sortie PWM sur Uno R3. map() adapte l’échelle de mesure analogique à l’échelle PWM."},

 {title:"4. Feu de circulation",level:"Débutant",time:"35 min",goal:"Simuler un feu rouge, orange et vert.",parts:"3 LED, 3 résistances, breadboard, fils.",steps:["Connecte les LED sur D8, D9 et D10 avec résistances.","Configure les trois broches en sortie.","Allume le vert, puis l’orange, puis le rouge.","Éteins les autres LED à chaque étape."],solution:"const int rouge=8, orange=9, vert=10;\nvoid setup(){\n pinMode(rouge,OUTPUT); pinMode(orange,OUTPUT); pinMode(vert,OUTPUT);\n}\nvoid loop(){\n digitalWrite(vert,HIGH); delay(4000); digitalWrite(vert,LOW);\n digitalWrite(orange,HIGH); delay(1500); digitalWrite(orange,LOW);\n digitalWrite(rouge,HIGH); delay(4000); digitalWrite(rouge,LOW);\n}",explain:"Chaque LED possède sa propre sortie et sa résistance. Les délais déterminent la durée de chaque état."},

 {title:"5. Mesurer la lumière",level:"Intermédiaire",time:"30 min",goal:"Lire une LDR et afficher la mesure dans le moniteur série.",parts:"LDR, résistance (ex. 10 kΩ), breadboard.",steps:["Réalise un diviseur de tension avec la LDR et la résistance.","Relie le point milieu à A0.","Initialise Serial à 9600 bauds.","Affiche la mesure et observe les changements."],solution:"void setup(){ Serial.begin(9600); }\nvoid loop(){\n int lumiere = analogRead(A0);\n Serial.print(\"Valeur LDR : \");\n Serial.println(lumiere);\n delay(300);\n}",explain:"La LDR change de résistance avec la lumière. Le diviseur transforme cette variation en tension mesurable. Le sens de variation dépend de la position de la LDR dans le diviseur."},

 {title:"6. Alarme de distance",level:"Intermédiaire",time:"45 min",goal:"Activer un buzzer lorsque la distance mesurée devient trop faible.",parts:"HC-SR04, buzzer adapté, fils.",steps:["Relie VCC et GND du capteur à l’alimentation adaptée.","Relie TRIG à D7 et ECHO à D6.","Mesure le temps de retour de l’impulsion.","Calcule une distance approximative et commande le buzzer."],solution:"const int trig=7, echo=6, buzzer=8;\nvoid setup(){\n pinMode(trig,OUTPUT); pinMode(echo,INPUT); pinMode(buzzer,OUTPUT);\n Serial.begin(9600);\n}\nvoid loop(){\n digitalWrite(trig,LOW); delayMicroseconds(2);\n digitalWrite(trig,HIGH); delayMicroseconds(10); digitalWrite(trig,LOW);\n long duree=pulseIn(echo,HIGH,30000);\n if(duree==0){ noTone(buzzer); Serial.println(\"Aucun echo\"); }\n else {\n   float distance=duree*0.0343/2;\n   if(distance<20) tone(buzzer,1000);\n   else noTone(buzzer);\n   Serial.println(distance);\n }\n delay(100);\n}",explain:"Le capteur mesure le temps aller-retour de l’onde. La division par deux donne le trajet aller. Le timeout évite d’attendre indéfiniment. Vérifie la compatibilité logique du module et du buzzer."},

 {title:"7. Thermomètre avec capteur analogique LM35",level:"Intermédiaire",time:"35 min",goal:"Convertir la tension analogique du LM35 en température.",parts:"LM35, fils, moniteur série.",steps:["Identifie les broches selon la fiche technique du modèle.","Alimente le capteur conformément à sa documentation.","Relie la sortie à A0 et affiche la température calculée.","Compare la mesure avec une référence raisonnable."],solution:"void setup(){ Serial.begin(9600); }\nvoid loop(){\n int valeur=analogRead(A0);\n float tension=valeur*(5.0/1023.0);\n float temperature=tension*100.0; // LM35 : environ 10 mV/°C\n Serial.print(\"Temperature : \");\n Serial.print(temperature);\n Serial.println(\" C\");\n delay(1000);\n}",explain:"Cette conversion suppose la référence ADC par défaut de 5 V et un LM35 classique dont la sensibilité est 10 mV/°C. Les résultats dépendent de la référence réelle et du modèle."},

 {title:"8. Station température et humidité",level:"Intermédiaire",time:"45 min",goal:"Lire un DHT11/DHT22 et afficher température et humidité.",parts:"Module DHT, fils, bibliothèque compatible.",steps:["Installe une bibliothèque DHT compatible depuis le gestionnaire.","Respecte le brochage et la résistance de pull-up exigée par ton module.","Initialise le capteur dans setup().","Lis les valeurs et vérifie les erreurs de lecture."],solution:"#include <DHT.h>\n#define DHTPIN 2\n#define DHTTYPE DHT11 // Remplacer par DHT22 si nécessaire\nDHT dht(DHTPIN, DHTTYPE);\nvoid setup(){ Serial.begin(9600); dht.begin(); }\nvoid loop(){\n float h=dht.readHumidity();\n float t=dht.readTemperature();\n if(isnan(h) || isnan(t)){\n   Serial.println(\"Erreur de lecture DHT\");\n } else {\n   Serial.print(\"Temperature : \"); Serial.println(t);\n   Serial.print(\"Humidite : \"); Serial.println(h);\n }\n delay(2000);\n}",explain:"Le type défini doit correspondre au capteur. La fréquence de lecture doit respecter sa fiche technique. La bibliothèque doit être installée."},

 {title:"9. Moteur à courant continu",level:"Avancé",time:"60 min",goal:"Faire tourner un petit moteur et inverser son sens avec un driver.",parts:"Moteur DC, pont en H adapté, alimentation externe, fils.",steps:["Choisis un driver adapté à la tension et au courant de démarrage du moteur.","Relie les entrées de commande aux broches Arduino.","Alimente le moteur avec une alimentation appropriée.","Relie les masses selon le schéma du driver.","Teste arrêt, sens 1 et sens 2."],solution:"// Exemple générique pour un driver à deux entrées\nconst int IN1=8, IN2=9, ENA=5;\nvoid setup(){\n pinMode(IN1,OUTPUT); pinMode(IN2,OUTPUT); pinMode(ENA,OUTPUT);\n}\nvoid loop(){\n digitalWrite(IN1,HIGH); digitalWrite(IN2,LOW);\n analogWrite(ENA,180); delay(2000);\n analogWrite(ENA,0); delay(500);\n digitalWrite(IN1,LOW); digitalWrite(IN2,HIGH);\n analogWrite(ENA,180); delay(2000);\n analogWrite(ENA,0); delay(1000);\n}",explain:"Le code dépend du modèle du driver. Le moteur ne doit jamais être alimenté directement par une broche Arduino. Prévois un driver, une alimentation moteur et une masse commune lorsque le montage l’exige."},

 {title:"10. Écran LCD I²C",level:"Avancé",time:"45 min",goal:"Afficher un message et une mesure sur un écran LCD I²C.",parts:"LCD I²C compatible, fils, bibliothèque adaptée.",steps:["Relie SDA et SCL aux broches I²C de l’Uno R3.","Installe une bibliothèque LCD compatible.","Vérifie l’adresse I²C avec un scanner si nécessaire.","Initialise l’écran et affiche les informations."],solution:"#include <Wire.h>\n#include <LiquidCrystal_I2C.h>\n// L'adresse 0x27 est fréquente, mais pas universelle.\nLiquidCrystal_I2C lcd(0x27, 16, 2);\nvoid setup(){\n lcd.init(); lcd.backlight();\n lcd.setCursor(0,0); lcd.print(\"StudyNet Arduino\");\n}\nvoid loop(){\n int valeur=analogRead(A0);\n lcd.setCursor(0,1); lcd.print(\"A0: \");\n lcd.print(valeur); lcd.print(\"    \");\n delay(300);\n}",explain:"L’adresse I²C et la bibliothèque dépendent du module. Sur Uno R3, SDA correspond à A4 et SCL à A5. Un scanner I²C permet de trouver l’adresse détectée."},

 {title:"11. Détecteur de mouvement avec PIR",level:"Intermédiaire",time:"30 min",goal:"Allumer une LED lorsqu'un mouvement est détecté.",parts:"Capteur PIR, LED, résistance 220–330 Ω, fils.",steps:["Relie VCC et GND du module PIR conformément à sa documentation.","Relie la sortie OUT du PIR à D2.","Connecte une LED avec résistance à D8.","Lis l'état du PIR avec digitalRead().","Allume la LED si le capteur détecte un mouvement."],solution:"const int pir=2;\nconst int led=8;\nvoid setup(){\n pinMode(pir,INPUT);\n pinMode(led,OUTPUT);\n Serial.begin(9600);\n}\nvoid loop(){\n int mouvement=digitalRead(pir);\n if(mouvement==HIGH){\n   digitalWrite(led,HIGH);\n   Serial.println(\"Mouvement detecte\");\n }else{\n   digitalWrite(led,LOW);\n   Serial.println(\"Aucun mouvement\");\n }\n delay(200);\n}",explain:"Le PIR fournit un signal numérique. Le programme utilise une condition pour décider d'allumer ou d'éteindre la LED. Certains modules ont besoin d'un temps de stabilisation après la mise sous tension."},

 {title:"12. Servo commandé par potentiomètre",level:"Intermédiaire",time:"40 min",goal:"Faire varier l'angle d'un servomoteur à l'aide d'un potentiomètre.",parts:"Servomoteur, potentiomètre, Arduino Uno, alimentation adaptée.",steps:["Connecte le potentiomètre à 5 V, GND et A0.","Connecte le fil de signal du servo à D9.","Alimente le servo conformément à sa documentation.","Lis le potentiomètre avec analogRead().","Convertis la valeur en angle entre 0 et 180 degrés."],solution:"#include <Servo.h>\nServo servo;\nconst int pot=A0;\nvoid setup(){\n servo.attach(9);\n}\nvoid loop(){\n int mesure=analogRead(pot);\n int angle=map(mesure,0,1023,0,180);\n servo.write(angle);\n delay(15);\n}",explain:"map() transforme la plage analogique 0–1023 en angle 0–180. Les limites réelles dépendent du servomoteur. Utilise une alimentation adaptée si le servo consomme trop pour l'Arduino et relie les masses comme prévu."},

 {title:"13. Feu intelligent avec capteur de lumière",level:"Intermédiaire",time:"45 min",goal:"Adapter automatiquement un éclairage à la luminosité mesurée.",parts:"LDR, résistance 10 kΩ, LED, résistance LED, breadboard.",steps:["Construis un diviseur de tension LDR-résistance.","Relie le point milieu à A0.","Connecte une LED à D9 avec une résistance.","Lis la valeur de luminosité.","Allume la LED si la mesure indique qu'il fait sombre."],solution:"const int ldr=A0;\nconst int led=9;\nvoid setup(){\n pinMode(led,OUTPUT);\n Serial.begin(9600);\n}\nvoid loop(){\n int lumiere=analogRead(ldr);\n Serial.println(lumiere);\n if(lumiere<350){\n   analogWrite(led,255);\n }else if(lumiere<650){\n   analogWrite(led,100);\n }else{\n   analogWrite(led,0);\n }\n delay(200);\n}",explain:"Le programme utilise if, else if et else pour choisir trois niveaux d'éclairage. Les seuils sont des exemples à ajuster selon le montage et la position de la LDR."},

 {title:"14. Moteur commandé par un bouton",level:"Avancé",time:"60 min",goal:"Démarrer et arrêter un moteur DC avec un bouton et un driver.",parts:"Moteur DC, driver adapté, bouton, alimentation moteur externe.",steps:["Relie le bouton entre D2 et GND.","Relie les entrées du driver à D8 et D9.","Relie ENA à la broche PWM D5 si le driver le permet.","Alimente le moteur avec une source adaptée.","Démarre le moteur quand le bouton est appuyé et arrête-le sinon."],solution:"const int bouton=2;\nconst int IN1=8;\nconst int IN2=9;\nconst int ENA=5;\nvoid setup(){\n pinMode(bouton,INPUT_PULLUP);\n pinMode(IN1,OUTPUT);\n pinMode(IN2,OUTPUT);\n pinMode(ENA,OUTPUT);\n}\nvoid loop(){\n if(digitalRead(bouton)==LOW){\n   digitalWrite(IN1,HIGH);\n   digitalWrite(IN2,LOW);\n   analogWrite(ENA,180);\n }else{\n   analogWrite(ENA,0);\n   digitalWrite(IN1,LOW);\n   digitalWrite(IN2,LOW);\n }\n}",explain:"Le bouton est lu avec INPUT_PULLUP : LOW signifie appuyé. Le driver commande le moteur ; la broche Arduino ne fournit que les signaux logiques. Le comportement exact de l'arrêt dépend du driver."},

 {title:"15. Mini système d'alarme : distance et buzzer",level:"Avancé",time:"60 min",goal:"Détecter un obstacle et déclencher une alarme sonore selon la distance.",parts:"HC-SR04, buzzer adapté, LED, résistance, Arduino Uno.",steps:["Connecte TRIG à D7 et ECHO à D6.","Connecte le buzzer à D8 selon ses caractéristiques.","Connecte une LED à D9 avec une résistance.","Mesure la distance avec pulseIn().","Si la distance est inférieure à 20 cm, active le buzzer et la LED."],solution:"const int trig=7,echo=6,buzzer=8,led=9;\nvoid setup(){\n pinMode(trig,OUTPUT);\n pinMode(echo,INPUT);\n pinMode(buzzer,OUTPUT);\n pinMode(led,OUTPUT);\n}\nvoid loop(){\n digitalWrite(trig,LOW);\n delayMicroseconds(2);\n digitalWrite(trig,HIGH);\n delayMicroseconds(10);\n digitalWrite(trig,LOW);\n long duree=pulseIn(echo,HIGH,30000);\n if(duree==0){\n   noTone(buzzer);\n   digitalWrite(led,LOW);\n }else{\n   float distance=duree*0.0343/2;\n   if(distance<20){\n     tone(buzzer,1000);\n     digitalWrite(led,HIGH);\n   }else{\n     noTone(buzzer);\n     digitalWrite(led,LOW);\n   }\n }\n delay(100);\n}",explain:"Le projet combine un capteur, une condition et deux sorties. Le timeout permet de gérer l'absence d'écho. Le seuil de 20 cm est modifiable selon le besoin."}
];

const projectList = document.getElementById("projectList");
projects.forEach((p) => {
 const article=document.createElement("article");
 article.className="project";
 const steps=p.steps.map(s=>`<li>${s}</li>`).join("");
 article.innerHTML=`
   <span class="project-meta">${p.level} · ${p.time}</span>
   <h3>${p.title}</h3>
   <p><strong>Objectif :</strong> ${p.goal}</p>
   <p><strong>Matériel :</strong> ${p.parts}</p>
   <details>
     <summary>Afficher les étapes de réalisation</summary>
     <ol class="content-list">${steps}</ol>
   </details>
   <details>
     <summary>Afficher la solution et le code</summary>
     <p>${p.explain}</p>
     <pre><code></code></pre>
   </details>`;
 article.querySelectorAll("details")[1].querySelector("code").textContent=p.solution;
 projectList.appendChild(article);
});

/* -------------------- BANQUE DE QUESTIONS -------------------- */
/* Questions de connaissances, de compréhension du code et d'application aux projets. */
const baseQuestions = [
["Arduino Uno","Quel est le rôle principal de l'Arduino Uno ?",["Exécuter un programme et interagir avec des composants","Remplacer un écran d'ordinateur","Stocker des fichiers vidéo","Fournir une connexion Internet automatiquement"],0,"La carte exécute le programme du microcontrôleur, lit des entrées et commande des sorties.","Débutant"],
["Microcontrôleur","Quel composant exécute le programme sur un Uno R3 classique ?",["ATmega328P","LM35","HC-SR04","LDR"],0,"L'ATmega328P est le microcontrôleur principal du Uno R3 classique.","Débutant"],
["Programmation","Quelle fonction est exécutée une seule fois au démarrage ?",["loop()","setup()","repeat()","start()"],1,"setup() initialise notamment les broches et les communications.","Débutant"],
["Programmation","Quelle fonction se répète continuellement ?",["setup()","mainMenu()","loop()","begin()"],2,"loop() est appelée en boucle tant que la carte fonctionne.","Débutant"],
["Broches","Combien de broches numériques standard possède l'Uno R3 ?",["6","8","14","20"],2,"L'Uno R3 expose les broches numériques D0 à D13, soit 14 broches.","Débutant"],
["Broches","Quelles broches sont les entrées analogiques de l'Uno R3 ?",["D0 à D5","A0 à A5","D8 à D13","A6 à A11"],1,"L'Uno R3 classique possède six entrées analogiques A0 à A5.","Débutant"],
["Broches","Quelle broche correspond à la masse ?",["VIN","5V","GND","AREF"],2,"GND est la référence de masse du circuit.","Débutant"],
["Tension","Quelle est la tension logique nominale de l'Arduino Uno R3 ?",["1,8 V","3,3 V","5 V","12 V"],2,"L'Uno R3 est une carte logique 5 V. Il faut respecter les limites des broches.","Débutant"],
["Sortie numérique","Quelle instruction configure D8 en sortie ?",["digitalWrite(8, OUTPUT)","pinMode(8, OUTPUT)","analogRead(8)","setPin(8)"],1,"pinMode(broche, OUTPUT) configure une broche comme sortie.","Débutant"],
["Sortie numérique","Quelle instruction met une sortie numérique à l'état haut ?",["digitalWrite(8, HIGH)","pinMode(8, HIGH)","analogRead(8)","delay(HIGH)"],0,"digitalWrite() écrit HIGH ou LOW sur une sortie configurée.","Débutant"],
["Entrée numérique","Quelle fonction lit l'état logique d'un bouton ?",["analogWrite()","digitalRead()","pinMode()","Serial.print()"],1,"digitalRead() retourne HIGH ou LOW.","Débutant"],
["Temporisation","Combien de temps représente delay(1000) ?",["Une milliseconde","Une seconde","Dix secondes","Une minute"],1,"delay() prend un argument en millisecondes : 1000 ms = 1 s.","Débutant"],
["LED","Pourquoi place-t-on une résistance en série avec une LED ?",["Augmenter la tension","Limiter le courant","Créer le programme","Convertir le signal en Wi-Fi"],1,"La résistance limite le courant et protège la LED et la sortie.","Débutant"],
["LED","Quelle patte d'une LED classique est généralement l'anode ?",["La patte courte","La patte longue","Le boîtier plat","Les deux pattes"],1,"La patte longue est généralement l'anode ; vérifie le composant réel.","Débutant"],
["Bouton","Avec INPUT_PULLUP, quel état lit-on généralement lorsque le bouton est relâché ?",["LOW","HIGH","PWM","1023"],1,"La résistance interne tire l'entrée vers HIGH au repos.","Intermédiaire"],
["Bouton","Avec INPUT_PULLUP, que lit-on lorsque le bouton relie la broche à GND ?",["HIGH","LOW","255","5"],1,"Le bouton appuyé relie l'entrée à la masse : l'état lu est LOW.","Intermédiaire"],
["Analogique","Quelle plage retourne analogRead() sur Uno avec la référence par défaut ?",["0 à 10","0 à 255","0 à 1023","0 à 65535"],2,"Le convertisseur analogique-numérique 10 bits donne 1024 valeurs, de 0 à 1023.","Débutant"],
["PWM","Quelles valeurs utilise analogWrite() sur Uno pour le PWM classique ?",["0 à 1","0 à 5","0 à 255","0 à 1023"],2,"La valeur PWM standard de analogWrite() sur Uno va de 0 à 255.","Intermédiaire"],
["PWM","Laquelle de ces broches Uno R3 prend en charge le PWM ?",["D4","D7","D9","D12"],2,"Les broches PWM du Uno R3 sont 3, 5, 6, 9, 10 et 11.","Intermédiaire"],
["PWM","Que signifie une valeur PWM de 0 pour une LED commandée avec analogWrite() ?",["Luminosité maximale","Sortie PWM à 0 %","Entrée analogique","Redémarrage"],1,"Une valeur 0 correspond à un rapport cyclique nul : la LED est éteinte dans ce montage.","Intermédiaire"],
["Potentiomètre","Où connecte-t-on le curseur du potentiomètre pour mesurer sa position ?",["GND uniquement","A0","RESET","TX"],1,"Le curseur fournit une tension variable qu'on peut mesurer sur A0.","Débutant"],
["map()","Quel est le rôle de map(valeur, 0, 1023, 0, 255) ?",["Lire un bouton","Convertir une plage numérique en une autre","Créer une broche","Envoyer un SMS"],1,"map() effectue une conversion linéaire d'une plage vers une autre.","Intermédiaire"],
["Série","Quelle instruction démarre la communication série à 9600 bauds ?",["Serial.begin(9600)","Serial.start(9600)","begin.Serial(9600)","Serial.read(9600)"],0,"Serial.begin() initialise le port série avec le débit choisi.","Débutant"],
["Série","Quelle instruction affiche une valeur puis passe à la ligne ?",["Serial.print()","Serial.println()","Serial.begin()","Serial.available()"],1,"println() ajoute un retour à la ligne après l'affichage.","Débutant"],
["Série","Pourquoi le débit du moniteur série doit-il correspondre à Serial.begin() ?",["Pour synchroniser la vitesse de communication","Pour alimenter la carte","Pour choisir la broche LED","Pour augmenter la mémoire"],0,"Les deux côtés doivent utiliser le même débit série pour interpréter correctement les données.","Intermédiaire"],
["C++","Quel symbole termine généralement une instruction C++ ?",["Deux-points","Point-virgule","Virgule","Point"],1,"Le point-virgule termine la plupart des instructions C++.","Débutant"],
["C++","Quel type convient à une valeur vrai/faux ?",["float","char","bool","String"],2,"bool stocke une valeur true ou false.","Débutant"],
["C++","Quel opérateur teste l'égalité de deux valeurs ?",["=","==","!=","+="],1,"== compare deux valeurs ; = affecte une valeur.","Débutant"],
["C++","Quel opérateur logique signifie ET ?",["||","!","&&","%"],2,"&& renvoie vrai si les deux conditions sont vraies.","Intermédiaire"],
["Boucles","Combien de fois cette boucle s'exécute-t-elle : for(int i=0;i<5;i++) ?",["4","5","6","À l'infini"],1,"i prend les valeurs 0, 1, 2, 3 et 4 : cinq itérations.","Intermédiaire"],
["Fonctions","Quel mot-clé indique qu'une fonction ne retourne aucune valeur ?",["null","void","empty","none"],1,"void indique que la fonction ne retourne pas de valeur.","Intermédiaire"],
["Breadboard","À quoi sert principalement une breadboard ?",["Programmer le microcontrôleur","Réaliser des connexions sans soudure","Mesurer la température","Augmenter la tension"],1,"Elle permet de construire et modifier rapidement un circuit de prototypage.","Débutant"],
["Masse commune","Pourquoi relie-t-on souvent les GND de l'Arduino et d'un module externe ?",["Pour partager une référence électrique","Pour augmenter la fréquence","Pour effacer le programme","Pour remplacer TX"],0,"Une référence commune est nécessaire pour interpréter correctement les signaux dans beaucoup de montages.","Intermédiaire"],
["Moteur","Peut-on alimenter directement un moteur DC depuis une broche Arduino ?",["Oui, toujours","Non, il faut un driver adapté","Oui, si le code est court","Seulement sur A0"],1,"Le moteur demande généralement plus de courant et peut générer des surtensions. Utilise un driver et une alimentation adaptés.","Débutant"],
["Transistor","Pourquoi utilise-t-on un transistor ou un driver ?",["Pour commander une charge que la broche ne peut pas piloter directement","Pour compiler le code","Pour mesurer une distance","Pour remplacer GND"],0,"L'étage de puissance adapte la commande logique à la charge électrique.","Intermédiaire"],
["Diode","Quel composant protège souvent un circuit contre la surtension d'une bobine ou d'un moteur ?",["Une diode de roue libre adaptée","Une LED en série sur TX","Un potentiomètre","Un bouton"],0,"Une diode de roue libre absorbe l'énergie inductive lors de la coupure, selon le montage.","Avancé"],
["HC-SR04","Quelles broches de commande utilise généralement un HC-SR04 ?",["SDA et SCL","TRIG et ECHO","MOSI et MISO","RX et TX uniquement"],1,"TRIG déclenche la mesure et ECHO fournit une impulsion liée au temps de retour.","Intermédiaire"],
["Distance","Pourquoi divise-t-on par deux le trajet calculé avec le temps ECHO du HC-SR04 ?",["L'onde fait un aller-retour","Le capteur possède deux LED","La vitesse est doublée","Pour convertir en pouces"],0,"Le temps mesuré correspond à l'aller et au retour de l'onde ultrasonore.","Intermédiaire"],
["I2C","Combien de lignes de signal principales utilise I²C ?",["1","2","4","8"],1,"I²C utilise SDA pour les données et SCL pour l'horloge.","Intermédiaire"],
["I2C","Sur quelles broches sont SDA et SCL sur un Uno R3 classique ?",["A4 et A5","D0 et D1","D2 et D3","D10 et D11"],0,"Sur Uno R3, SDA correspond à A4 et SCL à A5 ; des broches dédiées sont aussi présentes sur la carte.","Intermédiaire"],
["SPI","Quel signal SPI transporte généralement l'horloge ?",["MISO","MOSI","SCK","CS"],2,"SCK est le signal d'horloge du bus SPI.","Avancé"],
["Bibliothèques","À quoi sert une bibliothèque Arduino ?",["Réutiliser du code pour piloter des composants ou fonctions","Augmenter physiquement la tension","Remplacer la carte","Créer automatiquement le câblage"],0,"Une bibliothèque fournit des fonctions et abstractions pour faciliter le contrôle d'un périphérique.","Débutant"],
["DHT","Que peut mesurer un DHT11 ou DHT22 ?",["Distance et vitesse","Température et humidité","Courant et tension secteur","Couleur et luminosité"],1,"Ces capteurs mesurent la température et l'humidité relative.","Débutant"],
["LDR","Que fait généralement la résistance d'une LDR quand la lumière augmente ?",["Elle diminue","Elle devient infinie systématiquement","Elle produit du son","Elle devient un condensateur"],0,"La résistance d'une LDR classique diminue généralement lorsque l'éclairement augmente.","Intermédiaire"],
["Sécurité","Quelle action est recommandée avant de modifier le câblage ?",["Débrancher l'alimentation","Toucher les broches 5V et GND","Lancer un autre programme","Court-circuiter les rails"],0,"Débranche l'alimentation avant de modifier les connexions pour réduire les risques de court-circuit.","Débutant"],
["Dépannage","Le programme compile mais ne se téléverse pas. Que faut-il vérifier en premier ?",["Le port sélectionné et le type de carte","La couleur du boîtier","Le nom du projet","La valeur de A0"],0,"Vérifie le modèle de carte, le port, le câble USB de données et le pilote si nécessaire.","Intermédiaire"],
["Code","Que fait digitalWrite(8, LOW) sur une sortie configurée ?",["Met la sortie à l'état bas","Lit la broche","Configure D8 en entrée","Mesure 8 volts"],0,"LOW place la sortie à son niveau logique bas.","Débutant"],
["Code","Quel est le problème de cette instruction : pinMode(8, OUTPUT) ?",["Aucun problème en soi","Il manque toujours un delay","Elle lit une tension","Elle allume automatiquement une LED"],0,"Cette instruction est correcte si elle est utilisée dans le contexte approprié, par exemple dans setup().","Intermédiaire"],
["Code","À quoi sert pulseIn(echo, HIGH, 30000) ?",["Mesurer la durée d'une impulsion HIGH avec un timeout","Envoyer 30000 caractères","Configurer une sortie PWM","Lire A0"],0,"pulseIn mesure la durée d'un état logique et le troisième argument fixe un délai maximal en microsecondes.","Avancé"],
["Mémoire","Pourquoi éviter de créer inutilement de nombreuses String sur un petit microcontrôleur ?",["La mémoire est limitée et la fragmentation peut poser problème","Cela augmente la tension","Cela désactive USB","Cela change le brochage"],0,"La mémoire RAM est limitée. Des allocations répétées peuvent provoquer une fragmentation ; les tableaux de char peuvent être préférables dans certains projets.","Avancé"],

["Conditions","Que fait ce code si x vaut 12 : if(x > 10) ?",["Il exécute le bloc du if","Il exécute toujours else","Il arrête Arduino","Il transforme x en texte"],0,"12 est supérieur à 10, donc la condition est vraie et le bloc if est exécuté.","Débutant"],
["Conditions","Quelle est la différence entre if et else ?",["if teste une condition ; else traite le cas contraire","Ils font toujours la même chose","else est toujours exécuté en premier","if ne peut pas utiliser de comparaison"],0,"Le bloc else est exécuté lorsque la condition du if est fausse.","Débutant"],
["Conditions","Quel opérateur signifie OU logique ?",["&&","||","!=","="],1,"|| est vrai lorsqu'au moins une des deux conditions est vraie.","Intermédiaire"],
["Conditions","Que vaut l'expression (5 > 3 && 2 > 4) ?",["true","false","5","Erreur obligatoire"],1,"La première comparaison est vraie mais la deuxième est fausse. Avec &&, les deux doivent être vraies.","Intermédiaire"],
["Conditions","Que vaut l'expression (5 > 3 || 2 > 4) ?",["true","false","0","Erreur obligatoire"],0,"Avec ||, une seule condition vraie suffit. Ici 5 > 3 est vraie.","Intermédiaire"],
["Conditions","Quel bloc s'exécute si aucune condition if ou else if n'est vraie ?",["setup","else","loop","return"],1,"Le bloc else sert à traiter les autres cas lorsque toutes les conditions précédentes sont fausses.","Débutant"],
["Conditions","Quelle condition détecte une distance inférieure ou égale à 20 cm ?",["distance =< 20","distance <= 20","distance ==< 20","distance => 20"],1,"L'opérateur correct est <=, qui signifie inférieur ou égal.","Débutant"],
["Conditions","Que signifie !alarme si alarme vaut true ?",["true","false","1","Erreur"],1,"L'opérateur ! inverse une valeur booléenne : !true donne false.","Intermédiaire"],
["Boucles","Quelle boucle est adaptée pour répéter exactement 10 fois une action ?",["for","if","switch","return"],0,"for convient lorsqu'on connaît le nombre de répétitions à effectuer.","Débutant"],
["Boucles","Quelle boucle vérifie sa condition avant d'exécuter son bloc ?",["do...while","while","Les deux","Aucune"],1,"while teste la condition avant chaque exécution du bloc.","Intermédiaire"],
["Boucles","Quelle boucle exécute son bloc au moins une fois ?",["for","while","do...while","if"],2,"do...while vérifie la condition après avoir exécuté le bloc une première fois.","Intermédiaire"],
["Boucles","Que fait i++ dans une boucle ?",["Diminue i de 1","Augmente i de 1","Met i à zéro","Multiplie i par deux"],1,"i++ augmente la valeur de i d'une unité.","Débutant"],
["Boucles","Combien de fois la boucle for(int i=1; i<=4; i++) s'exécute-t-elle ?",["3","4","5","À l'infini"],1,"Les valeurs sont 1, 2, 3 et 4 : quatre répétitions.","Intermédiaire"],
["Boucles","Quel risque existe si la condition d'une boucle while reste toujours vraie ?",["La boucle peut ne jamais se terminer","La carte change de tension","Le programme se téléverse automatiquement","La LED devient analogique"],0,"Une condition qui ne devient jamais fausse peut créer une boucle infinie et empêcher les autres tâches de s'exécuter.","Intermédiaire"],
["Boucles","Quel est le résultat de ce code : for(int i=0;i<3;i++) Serial.println(i); ?",["1, 2, 3","0, 1, 2","0, 1, 2, 3","3 uniquement"],1,"La condition i < 3 exclut la valeur 3 : les valeurs affichées sont 0, 1 et 2.","Intermédiaire"],
["Fonctions","Quel est le rôle de return dans une fonction qui retourne un int ?",["Retourner une valeur au code appelant","Arrêter définitivement la carte","Configurer une broche","Démarrer le port série"],0,"return transmet la valeur calculée par la fonction à l'endroit où elle a été appelée.","Intermédiaire"],
["Fonctions","Que signifie void dans la déclaration void allumerLED() ?",["La fonction retourne un texte","La fonction ne retourne aucune valeur","La fonction ne peut pas être appelée","La fonction est une variable"],1,"void indique que la fonction ne retourne pas de résultat.","Intermédiaire"],
["LED","Pourquoi une LED ne doit-elle pas être branchée directement entre D8 et GND ?",["Le courant pourrait être trop élevé","Elle nécessite toujours I2C","Elle doit être connectée à A5","Elle ne fonctionne qu'avec un moteur"],0,"Une résistance en série limite le courant et protège la LED et la sortie de la carte.","Débutant"],
["LED","Que permet une LED RGB ?",["Afficher plusieurs couleurs par mélange rouge, vert et bleu","Mesurer une distance","Détecter un mouvement","Alimenter un moteur"],0,"Une LED RGB contient trois canaux de couleur qui peuvent être commandés séparément.","Débutant"],
["LED","Combien de canaux de couleur possède une LED RGB classique ?",["1","2","3","4"],2,"Les canaux sont rouge, vert et bleu.","Débutant"],
["LED","Sur une LED RGB à cathode commune, que représente généralement une valeur PWM élevée ?",["Une luminosité plus élevée du canal","Une extinction obligatoire","Une lecture analogique","Un changement de sens du moteur"],0,"Pour un montage classique à cathode commune, une valeur PWM élevée augmente la luminosité du canal.","Intermédiaire"],
["LDR","Quel montage permet généralement de mesurer une LDR avec A0 ?",["Un diviseur de tension","Un pont en H","Un bus SPI uniquement","Une diode de roue libre"],0,"La LDR et une résistance fixe forment un diviseur de tension dont le point central est mesuré par A0.","Intermédiaire"],
["LDR","Pourquoi faut-il ajuster le seuil d'une alarme de luminosité ?",["Les valeurs dépendent du montage et de l'environnement","Le seuil change la fréquence USB","La LDR est un moteur","Le seuil remplace la résistance"],0,"La plage mesurée dépend de la LDR, de la résistance, de l'éclairage et du câblage.","Intermédiaire"],
["LM35","Quelle est la sensibilité approximative d'un LM35 classique ?",["10 mV par degré Celsius","1 V par degré Celsius","5 V par degré Celsius","100 mV par degré Fahrenheit"],0,"Le LM35 classique délivre environ 10 mV par degré Celsius.","Intermédiaire"],
["LM35","Si la sortie d'un LM35 vaut 0,25 V, quelle température approximative indique-t-il ?",["2,5 °C","25 °C","250 °C","0,25 °C"],1,"Avec environ 10 mV/°C, 0,25 V = 250 mV correspond à environ 25 °C.","Intermédiaire"],
["DHT","Quelles grandeurs un DHT11 peut-il mesurer ?",["Température et humidité","Distance et lumière","Vitesse et courant","Pression et tension"],0,"Le DHT11 mesure la température et l'humidité relative.","Débutant"],
["DHT","Pourquoi teste-t-on isnan() après une lecture DHT ?",["Pour détecter une lecture invalide","Pour augmenter la vitesse du moteur","Pour convertir une LED RGB","Pour sélectionner le port COM"],0,"isnan() permet de vérifier si la lecture renvoie une valeur non numérique, signe d'une erreur de mesure.","Intermédiaire"],
["HC-SR04","Quel est le rôle de TRIG sur le HC-SR04 ?",["Déclencher une mesure ultrasonore","Lire une température","Alimenter le moteur","Afficher une valeur sur LCD"],0,"Une impulsion sur TRIG déclenche l'émission ultrasonore.","Intermédiaire"],
["HC-SR04","Quelle unité est utilisée par pulseIn() pour mesurer la durée ?",["Secondes","Millisecondes","Microsecondes","Minutes"],2,"pulseIn() retourne une durée en microsecondes.","Intermédiaire"],
["HC-SR04","Que signifie une durée ECHO égale à zéro avec un timeout ?",["Aucun écho valide n'a été reçu dans le délai","La distance est exactement zéro","Le capteur est forcément détruit","Le moteur est en marche"],0,"Une durée nulle peut indiquer qu'aucun écho n'a été reçu avant l'expiration du timeout.","Avancé"],
["PIR","Que détecte principalement un capteur PIR ?",["Les variations infrarouges liées au mouvement","La couleur d'un objet","La vitesse d'un moteur","La tension d'une batterie"],0,"Le PIR détecte les variations du rayonnement infrarouge dans son champ de vision.","Débutant"],
["PIR","Quel type de signal fournit généralement la sortie OUT d'un module PIR ?",["Un signal numérique","Un signal audio","Un bus I2C obligatoire","Une tension secteur"],0,"La sortie OUT est généralement un signal logique HIGH ou LOW selon la détection et la configuration.","Intermédiaire"],
["Moteur DC","Quel composant permet de changer le sens de rotation d'un moteur DC ?",["Un pont en H","Une résistance LED seule","Un capteur LDR","Un écran LCD"],0,"Un pont en H permet d'inverser la polarité appliquée au moteur.","Intermédiaire"],
["Moteur DC","Quel est le rôle de l'entrée ENA sur certains drivers de moteur ?",["Activer le canal moteur et parfois régler sa vitesse par PWM","Mesurer la température","Lire un bouton","Envoyer des données I2C"],0,"ENA est une entrée d'activation ; sur certains drivers elle peut recevoir un PWM pour régler la vitesse.","Intermédiaire"],
["Moteur DC","Pourquoi faut-il choisir un driver selon le courant de démarrage du moteur ?",["Le courant de démarrage peut être supérieur au courant en fonctionnement normal","Le moteur ne possède pas de bobines","Le PWM ne fonctionne qu'à 3 V","Le courant n'a aucune importance"],0,"Un moteur peut demander un courant élevé au démarrage ou lorsqu'il est bloqué. Le driver doit supporter ces conditions.","Avancé"],
["Moteur DC","Que fait généralement IN1=HIGH et IN2=LOW sur un pont en H ?",["Commande un sens de rotation","Mesure la distance","Allume une LED RGB","Démarre I2C"],0,"Les deux entrées déterminent le sens du courant dans le moteur ; le sens exact dépend du câblage.","Intermédiaire"],
["Servo","Quel type de grandeur commande un servomoteur classique ?",["Une position angulaire","Une luminosité","Une distance ultrasonore","Une humidité"],0,"Un servo classique reçoit un signal de commande qui détermine sa position angulaire.","Débutant"],
["Servo","Quelle bibliothèque Arduino est souvent utilisée pour un servomoteur ?",["Servo.h","DHT.h","Wire.h uniquement","LiquidCrystal_I2C.h"],0,"La bibliothèque Servo fournit des fonctions comme attach() et write().","Débutant"],
["Servo","Que fait monServo.write(90) dans un exemple de servo classique ?",["Demande une position proche de 90 degrés","Règle une vitesse à 90 km/h","Lit la broche 90","Mesure 90 volts"],0,"write(90) demande une position angulaire de 90 degrés, selon la plage du servomoteur.","Intermédiaire"],
["Moteur pas à pas","Comment se déplace un moteur pas à pas ?",["Par étapes angulaires appelées pas","Uniquement en rotation libre","En mesurant la lumière","En envoyant du son"],0,"Le moteur avance par pas successifs commandés par l'alimentation de ses bobines.","Débutant"],
["Moteur pas à pas","Pourquoi utilise-t-on un driver pour un moteur pas à pas ?",["Pour commander correctement ses bobines et gérer le courant","Pour remplacer le programme Arduino","Pour mesurer l'humidité","Pour éviter tout câblage"],0,"Un driver spécialisé gère les courants des bobines et les signaux de commande.","Intermédiaire"],
["Alimentation moteur","Pourquoi une alimentation externe peut-elle être nécessaire pour un moteur ?",["Le moteur peut demander plus de courant que la carte ne peut fournir","Arduino ne possède pas de broches numériques","Le moteur fonctionne uniquement en I2C","Le code ne peut pas commander de moteur"],0,"Les broches Arduino ne sont pas conçues pour alimenter directement un moteur.","Débutant"],
["Alimentation moteur","Dans de nombreux montages avec driver, pourquoi relie-t-on le GND de l'alimentation moteur au GND Arduino ?",["Pour partager la référence des signaux de commande","Pour augmenter la tension du moteur","Pour supprimer le driver","Pour transformer le PWM en analogique"],0,"La masse commune permet au driver d'interpréter correctement les niveaux logiques de commande, selon son schéma de connexion.","Intermédiaire"],
["Protection","Quel est le rôle d'une diode de roue libre dans un montage inductif adapté ?",["Limiter les surtensions à la coupure du courant","Augmenter la vitesse de compilation","Mesurer la lumière","Créer un signal I2C"],0,"Une diode de roue libre fournit un chemin au courant inductif lorsque le circuit est coupé. Certains drivers intègrent déjà cette protection.","Avancé"],
["PWM","Si analogWrite(9, 255) est appliqué à une LED sur une sortie PWM, quel est le résultat habituel ?",["Luminosité maximale","LED éteinte","Lecture de A0","Redémarrage"],0,"255 correspond à un rapport cyclique de 100 % sur le PWM classique de l'Uno.","Débutant"],
["PWM","Quelle valeur PWM correspond approximativement à un rapport cyclique de 50 % ?",["0","64","128","255"],2,"128 sur 255 représente approximativement la moitié de l'échelle PWM.","Intermédiaire"],
["millis","Quel est l'avantage principal de millis() par rapport à un long delay() ?",["Permettre de gérer plusieurs tâches sans bloquer la boucle","Augmenter la tension","Remplacer toutes les conditions","Supprimer le besoin de setup"],0,"millis() permet de comparer le temps écoulé tout en laissant loop() continuer à exécuter d'autres tâches.","Avancé"],
["millis","Quel type est couramment utilisé pour stocker la valeur retournée par millis() ?",["unsigned long","bool","char","float uniquement"],0,"millis() retourne un unsigned long ; ce type convient pour stocker les durées et instants en millisecondes.","Avancé"],
["Code","Que fait etatLed = !etatLed si etatLed est un bool ?",["Inverse son état logique","Met toujours true","Met toujours false","Convertit le bool en température"],0,"L'opérateur ! inverse true en false et false en true.","Intermédiaire"],
["Code","Pourquoi utilise-t-on une variable compteur dans une boucle for ?",["Pour suivre le nombre de répétitions ou l'index","Pour mesurer la tension secteur","Pour remplacer une résistance","Pour configurer le port USB"],0,"Le compteur évolue à chaque itération et permet de contrôler la répétition.","Débutant"],
["Code","Que se passe-t-il si l'on oublie compteur++ dans un while dont la condition dépend du compteur ?",["La boucle peut ne jamais se terminer","Le programme est automatiquement corrigé","Le capteur change de type","La LED devient une entrée"],0,"Si le compteur ne change pas et que la condition reste vraie, la boucle peut devenir infinie.","Intermédiaire"],
["Code","Quel est le résultat de map(512, 0, 1023, 0, 255) environ ?",["0","64","128","255"],2,"512 est environ la moitié de 1023 ; la conversion donne une valeur proche de 128.","Intermédiaire"],
["Code","Quel est le rôle de pinMode(bouton, INPUT_PULLUP) ?",["Configurer l'entrée avec une résistance interne de tirage vers HIGH","Configurer le moteur en PWM","Allumer la LED intégrée","Démarrer la liaison série"],0,"INPUT_PULLUP active une résistance interne qui maintient l'entrée à HIGH au repos.","Intermédiaire"],
["Projet","Dans un éclairage automatique avec LDR, quelle partie du programme décide si la LED doit s'allumer ?",["La condition if/else","La fonction Wire.begin()","La bibliothèque Servo","Le port USB"],0,"La condition compare la mesure de luminosité à un seuil et choisit l'état de la LED.","Débutant"],
["Projet","Dans une alarme HC-SR04, pourquoi utiliser if(distance < 20) ?",["Pour déclencher une action lorsque l'obstacle est proche","Pour changer la fréquence du port série","Pour configurer une entrée analogique","Pour choisir la carte Arduino"],0,"La condition compare la distance mesurée à un seuil de 20 cm.","Intermédiaire"],
["Projet","Quel élément est nécessaire pour piloter un moteur DC dans un robot Arduino ?",["Un driver moteur adapté","Une LDR seule","Un câble USB uniquement","Une LED RGB"],0,"Le driver fournit l'étage de puissance nécessaire pour alimenter et contrôler le moteur.","Débutant"],
["Projet","Dans un système PIR + LED, quelle instruction lit la détection ?",["digitalRead(pir)","analogWrite(pir, 255)","Serial.begin(pir)","pinMode(pir, HIGH)"],0,"digitalRead() lit l'état logique de la sortie du capteur PIR.","Intermédiaire"],
["Projet","Quel composant permet de régler manuellement l'angle d'un servo dans le projet avec potentiomètre ?",["Le potentiomètre","La LDR","Le buzzer","Le HC-SR04"],0,"Le potentiomètre fournit une mesure analogique convertie en angle avec map().","Intermédiaire"],
["Projet","Dans le projet feu de circulation, pourquoi éteindre une LED avant d'allumer la suivante ?",["Pour éviter d'afficher des états simultanés non souhaités","Pour augmenter la mémoire","Pour modifier le port USB","Pour changer le type du microcontrôleur"],0,"Le programme doit gérer les états des trois sorties afin de respecter la séquence prévue.","Débutant"],
["Projet","Dans un projet avec plusieurs capteurs, pourquoi tester chaque capteur séparément au début ?",["Pour identifier plus facilement les erreurs de câblage ou de lecture","Pour économiser les broches définitivement","Pour éviter d'écrire setup()","Pour supprimer le besoin d'alimentation"],0,"Tester séparément permet de vérifier chaque composant avant de combiner les fonctionnalités.","Intermédiaire"]
];

const variants = [
 (q)=>q,
 (q)=>({...q, question:"Dans un montage Arduino, "+q.question.charAt(0).toLowerCase()+q.question.slice(1)}),
 (q)=>({...q, question:"Choisis la bonne réponse : "+q.question}),
 (q)=>({...q, question:"Vérifie cette notion — "+q.question})
];
const questionBank=[];
baseQuestions.forEach((base,index)=>{
 variants.forEach((make,variantIndex)=>{
   const q=make({category:base[0],question:base[1],options:base[2],answer:base[3],explanation:base[4],level:base[5]});
   q.id=index*4+variantIndex+1;
   questionBank.push(q);
 });
});

function shuffle(array){
 const result=[...array];
 for(let i=result.length-1;i>0;i--){
  const j=Math.floor(Math.random()*(i+1));
  [result[i],result[j]]=[result[j],result[i]];
 }
 return result;
}
function shuffledQuestion(q){
 const order=shuffle(q.options.map((text,index)=>({text,index})));
 return {...q, options:order.map(x=>x.text), answer:order.findIndex(x=>x.index===q.answer)};
}

const modal=document.getElementById("quizModal");
const setup=document.getElementById("quizSetup");
const play=document.getElementById("quizPlay");
const result=document.getElementById("quizResult");
const countSelect=document.getElementById("questionCount");
const levelSelect=document.getElementById("quizLevel");
let quizQuestions=[],current=0,score=0,selected=null,answered=false,history=[];

document.getElementById("openQuiz").addEventListener("click",()=>{
 modal.classList.add("open");
 setup.classList.remove("hidden");play.classList.add("hidden");result.classList.add("hidden");
});
document.getElementById("closeQuiz").addEventListener("click",()=>modal.classList.remove("open"));
modal.addEventListener("click",e=>{if(e.target===modal)modal.classList.remove("open")});
document.addEventListener("keydown",e=>{if(e.key==="Escape")modal.classList.remove("open")});

document.getElementById("startQuiz").addEventListener("click",()=>{
 const wanted=Number(countSelect.value);
 const level=levelSelect.value;
 const pool=level==="all"?questionBank:questionBank.filter(q=>q.level===level);
 if(pool.length<wanted){alert("Pas assez de questions pour ce niveau.");return;}
 quizQuestions=shuffle(pool).slice(0,wanted).map(shuffledQuestion);
 current=0;score=0;selected=null;answered=false;history=[];
 setup.classList.add("hidden");result.classList.add("hidden");play.classList.remove("hidden");
 renderQuestion();
});

function renderQuestion(){
 const q=quizQuestions[current];
 selected=null;answered=false;
 document.getElementById("questionCounter").textContent=`Question ${current+1} / ${quizQuestions.length}`;
 document.getElementById("scoreLive").textContent=`Score : ${score}`;
 document.getElementById("progressBar").style.width=`${(current/quizQuestions.length)*100}%`;
 document.getElementById("questionCategory").textContent=`${q.category} · ${q.level}`;
 document.getElementById("questionText").textContent=q.question;
 const codeArea=document.getElementById("codeArea");
 codeArea.classList.add("hidden");codeArea.innerHTML="";
 const answerList=document.getElementById("answerList");answerList.innerHTML="";
 q.options.forEach((option,index)=>{
  const button=document.createElement("button");
  button.type="button";button.className="answer";
  const letter=document.createElement("span");letter.className="letter";letter.textContent=String.fromCharCode(65+index);
  const text=document.createElement("span");text.textContent=option;
  button.append(letter,text);
  button.addEventListener("click",()=>{
   if(answered)return;
   selected=index;
   answerList.querySelectorAll(".answer").forEach((el,i)=>el.classList.toggle("selected",i===index));
  });
  answerList.appendChild(button);
 });
 const feedback=document.getElementById("feedback");
 feedback.className="feedback";feedback.textContent="";
 document.getElementById("verifyAnswer").disabled=false;
 document.getElementById("nextQuestion").disabled=true;
 document.getElementById("nextQuestion").textContent=current===quizQuestions.length-1?"Voir le résultat":"Suivant →";
}
document.getElementById("verifyAnswer").addEventListener("click",()=>{
 if(selected===null){alert("Choisis une réponse avant de vérifier.");return;}
 if(answered)return;
 answered=true;
 const q=quizQuestions[current],correct=selected===q.answer;
 if(correct)score++;
 history.push({question:q.question,options:q.options,selected,answer:q.answer,correct,explanation:q.explanation,category:q.category});
 const buttons=document.querySelectorAll("#answerList .answer");
 buttons.forEach((button,index)=>{
  button.disabled=true;
  if(index===q.answer)button.classList.add("correct");
  if(index===selected && !correct)button.classList.add("wrong");
 });
 const feedback=document.getElementById("feedback");
 feedback.className=`feedback show ${correct?"good":"bad"}`;
 const title=document.createElement("strong");title.textContent=correct?"Bonne réponse !":"Réponse incorrecte.";
 const message=document.createElement("p");message.textContent=`Bonne réponse : ${q.options[q.answer]}. ${q.explanation}`;
 feedback.append(title,message);
 document.getElementById("scoreLive").textContent=`Score : ${score}`;
 document.getElementById("verifyAnswer").disabled=true;
 document.getElementById("nextQuestion").disabled=false;
});
document.getElementById("nextQuestion").addEventListener("click",()=>{
 if(!answered)return;
 if(current<quizQuestions.length-1){current++;renderQuestion();}
 else showResult();
});
function showResult(){
 play.classList.add("hidden");result.classList.remove("hidden");
 const total=quizQuestions.length,percent=Math.round(score/total*100);
 const wrong=history.filter(item=>!item.correct);
 let html=`<div class="result"><span class="kicker">Résultat final</span><div class="score">${score} / ${total}</div><h3>${percent}% de réussite</h3><p class="muted">${percent>=85?"Excellent travail !":percent>=65?"Bon travail, continue à pratiquer.":percent>=50?"Résultat encourageant : révise les notions difficiles.":"Reprends le cours et refais les projets progressivement."}</p><button class="btn btn-primary" id="retryQuiz" style="margin:18px 0">Recommencer avec de nouvelles questions</button></div>`;
 if(wrong.length===0){html+="<div class='notice'><strong>Parfait :</strong> tu as répondu correctement à toutes les questions.</div>";}
 else{
  html+=`<h3 style="margin:18px 0 10px">Révision des ${wrong.length} réponse(s) incorrecte(s)</h3>`;
  wrong.forEach((item,index)=>{
   html+=`<article class="review"><h4>${index+1}. ${escapeHTML(item.question)}</h4><p class="wrong-text"><strong>Ta réponse :</strong> ${escapeHTML(item.options[item.selected])}</p><p class="right-text"><strong>Bonne réponse :</strong> ${escapeHTML(item.options[item.answer])}</p><p><strong>Explication :</strong> ${escapeHTML(item.explanation)}</p><p class="muted">Thème : ${escapeHTML(item.category)}</p></article>`;
  });
 }
 result.innerHTML=html;
 document.getElementById("retryQuiz").addEventListener("click",()=>{
  setup.classList.remove("hidden");result.classList.add("hidden");
 });
}
function escapeHTML(value){
 return String(value).replace(/[&<>"']/g,char=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));
}
