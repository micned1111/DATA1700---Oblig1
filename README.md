# DATA1700---Oblig1

OsloMet brukernavn: s373624

GitHub brukernavn: micned1111

GitHub repo URL: https://github.com/micned1111/DATA1700---Oblig1

Fullt navn: Michael Nedgård Isaksen

Beskrivelse av applikasjon:
    * Jeg syns jeg klarte oppgaven bra der sluttresultatet fungerer som det skal
    * I stedet for å legge feilmeldingene til siden la jeg de under input-elementene 
    * For å posisjonere input-boksene på linje brukte jeg style og flyttet dem "manuelt"
      - Sikkert en bedre måte å gjøre det på
    * I js-filen valgte jeg å lage funksjoner for å sjekke hvert datafelt 
      - Disse funksjonene fikk dermed ulike input-validering 
    * I hoved-funksjonen la jeg disse funksjonene i en liste
    * Jeg lagde også en NodeList (samme som array) for å hente inputene 
      - Dermed kan jeg konsekvent sette riktig funksjon sammen med riktig felt
        for å sjekke at input-data blir akseptert 
    * Til slutt hadde jeg en liste som inneholder om feltene er akseptert eller ei
       - Denne listen blir konsekvent gått gjennom, og dersom alt er true vil 
         et objekt opprettes med riktige verdier og lagt inn i en liste
       - Til slutt blir hvert billett-objekt skrivet ut i tabellen
       - Deretter blir hvert felt resetet 
       - Et objekt blir ikke opprettet dersom et av input-feltene er feil
    * Brukte simpel jQuery for å gi litt design så sluttresultatet ble litt bedre