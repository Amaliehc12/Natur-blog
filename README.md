# Natur Blog - README file


## Hjemmesidens formål og krav

Natur Blog er designet til at inspirere brugere til at tilbringe mere tid udendørs. Hjemmesiden henvender sig til både erfarne friluftslivsfans og nybegyndere, der ønsker at finde tips, tricks og inspiration til aktiviteter som camping, vandreture og madlavning over bål. Kravene til hjemmesiden inkluderer:

- **Brugervenlighed**: Siden er bygget intuitivet der gør det nemt for bruger at løse der opgaver på hjemmesiden. Den følger normale web standarder. og følger en rød trød gennem hele hjemmesiden for genkendlighed. 
- **Responsivt design**: Hjemmesiden skal fungere på både desktop og mobile enheder, så brugerne nemt kan finde den frem når de er on the go.
- **Interaktivitet**: Der er opsat noget interaktivt, i form af muligheden for at vise flere blogindlæg på siden blog.html.


## Designtilgang og og struktur

Hjemmesidens design er minimalistisk og fokuseret på brugeroplevelse, det skal gøre det nemt og hurtigt for brugeren at finde hvad de leder efter. Den er opdelt i følgende sektioner:

- **Header**: Indeholder logo, titel og navigationsmenu.
- **Main**: Inkluderer sidens indenhold, såsom introduktion, blogindlæg, vejrinformation og links til yderligere indhold.
- **Footer**: Indeholder logo og trustpilot ikon, for at brugerne kan finde andre brugers anmeldelser.

Farvetemaet og typografien er valgt for at afspejle naturens skønhed og skabe en indbydende atmosfære.


## Implementerings-, test-, validerings- og prototypingproces

Implementeringsprocessen omfattede:

1. **Wireframing**: Oprettelse af lo-fi wireframes for at visualisere layoutet og strukturen på hjemmesiden.
2. **Udvikling**: Implementering af HTML, CSS og JavaScript for at opbygge funktionalitet og design.
3. **Testing**: Gennemførelse af brugertests for at identificere eventuelle navigationsproblemer og fejl.
4. **Validering**: Sikring af, at hjemmesiden fungerer korrekt på forskellige enheder og browsere. Og at sidens var accessible.


## Anvendte teknologier til udvikling og deployment

Hjemmesiden er udviklet med følgende teknologier:

- **HTML**: Strukturering af indholdet.
- **CSS**: Styling af siden for at sikre et tiltalende udseende.
- **JavaScript**: Implementering af interaktive elementer, som vejrinformation og "Vis flere" funktionalitet.
- **GitHub Pages**: Hosting af hjemmesiden, hvilket muliggør hurtig og nem deployment.
-**Validator**: Brug af validerings tool til at sikre min kode og Api virkede, ikke havde fejl.


## Udfordringer og funktioner implementeret ud over kravene

En udfordring var at sikre korrekt CORS-understøttelse ved anmodninger til OpenWeather API. Dette blev løst ved at bruge HTTPS i API-anmodningen. 

En udfordring var min formular hvor jeg ved brug af POST method skulle gemme dataen, her havde jeg en del udfordringer med min submit_form.php. Jeg har derfor gjort brug af et gratis formular tool kaldt Freeform som gemmer data'en for mig. Her er det muligt for en ekstra betaling at lave et custom redirect til sin egen 'Thank you' side i eget design. 

Yderligere funktioner inkluderer:

- **Dynamisk vejrinformation**: Implementering af en API-integration, der viser aktuelle vejrforklaringer.
- **Interaktive elementer**: Knappen "Vis flere" for at gøre det lettere for brugerne at finde yderligere blogindlæg.


Hjemmesiden er løbende blevet opdateret med brugerfeedback for at forbedre oplevelsen.
