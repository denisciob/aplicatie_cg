// =========================================================
// BAZA DE ÎNTREBĂRI
//
// Fiecare întrebare e o „fișă” între acolade { }, urmată de virgulă.
// - domeniu:     istorie, biologie, geografie, aviatie, educatie-financiara,
//                socio-politica, nutritie, astronomie, fizica
// - dificultate: usor, mediu sau greu
// - variante:    exact 4, între ghilimele, despărțite prin virgulă
// - corect:      scris EXACT ca una dintre variante
//
// Întrebările noi se lipesc la final, în locul marcat „LIPEȘTE AICI”.
// =========================================================

const INTREBARI = [

  // =======================================================
  // ISTORIE (100 de întrebări)
  // =======================================================

  // ---------- ISTORIE: UȘOR (20) ----------
  {
    domeniu: "istorie",
    dificultate: "usor",
    intrebare: "În ce an a avut loc Marea Unire de la Alba Iulia?",
    variante: ["1859", "1877", "1918", "1920"],
    corect: "1918",
    explicatie: "La 1 decembrie 1918, Adunarea de la Alba Iulia a votat unirea Transilvaniei cu România. De aceea 1 decembrie este Ziua Națională a României."
  },
  {
    domeniu: "istorie",
    dificultate: "usor",
    intrebare: "Cine a fost domnitorul ales în 1859 atât în Moldova, cât și în Țara Românească?",
    variante: ["Alexandru Ioan Cuza", "Carol I", "Barbu Știrbei", "Mihail Kogălniceanu"],
    corect: "Alexandru Ioan Cuza",
    explicatie: "Cuza a fost ales întâi în Moldova (5 ianuarie), apoi în Țara Românească (24 ianuarie 1859). Marile Puteri interziseseră unirea, dar nu și alegerea aceluiași om în ambele țări."
  },
  {
    domeniu: "istorie",
    dificultate: "usor",
    intrebare: "Ce domnitor a unit în 1600, pentru prima dată, Țara Românească, Transilvania și Moldova?",
    variante: ["Ștefan cel Mare", "Mihai Viteazul", "Vlad Țepeș", "Mircea cel Bătrân"],
    corect: "Mihai Viteazul",
    explicatie: "Unirea lui Mihai Viteazul a durat puțin. Domnitorul a fost ucis în 1601, la Câmpia Turzii."
  },
  {
    domeniu: "istorie",
    dificultate: "usor",
    intrebare: "În ce an a căzut Zidul Berlinului?",
    variante: ["1987", "1989", "1990", "1991"],
    corect: "1989",
    explicatie: "Zidul a căzut la 9 noiembrie 1989, după ce despărțise orașul vreme de 28 de ani. Fusese construit în 1961."
  },
  {
    domeniu: "istorie",
    dificultate: "usor",
    intrebare: "Cine a fost primul om care a pășit pe Lună?",
    variante: ["Buzz Aldrin", "Iuri Gagarin", "Neil Armstrong", "Michael Collins"],
    corect: "Neil Armstrong",
    explicatie: "Armstrong a coborât pe Lună la 20 iulie 1969, cu misiunea Apollo 11. Buzz Aldrin l-a urmat, iar Michael Collins a rămas pe orbită, în modulul de comandă."
  },
  {
    domeniu: "istorie",
    dificultate: "usor",
    intrebare: "În ce an a început Primul Război Mondial?",
    variante: ["1912", "1914", "1916", "1918"],
    corect: "1914",
    explicatie: "Scânteia a fost asasinarea arhiducelui Franz Ferdinand la Sarajevo, la 28 iunie 1914. Războiul a izbucnit o lună mai târziu."
  },
  {
    domeniu: "istorie",
    dificultate: "usor",
    intrebare: "Ce împărat roman a cucerit Dacia?",
    variante: ["Augustus", "Nero", "Hadrian", "Traian"],
    corect: "Traian",
    explicatie: "Traian i-a învins pe daci în două războaie (101-102 și 105-106). Columna lui Traian din Roma prezintă aceste lupte ca o adevărată bandă desenată în piatră."
  },
  {
    domeniu: "istorie",
    dificultate: "usor",
    intrebare: "Care a fost regele dac învins de împăratul Traian?",
    variante: ["Decebal", "Burebista", "Dromihete", "Deceneu"],
    corect: "Decebal",
    explicatie: "În anul 106, Decebal și-a luat viața pentru a nu fi capturat și dus în triumf la Roma."
  },
  {
    domeniu: "istorie",
    dificultate: "usor",
    intrebare: "Ce navigator a ajuns în America în 1492, în slujba Spaniei?",
    variante: ["Vasco da Gama", "Cristofor Columb", "Fernando Magellan", "Amerigo Vespucci"],
    corect: "Cristofor Columb",
    explicatie: "Columb a crezut până la moarte că ajunsese în Asia. Continentul a primit numele lui Amerigo Vespucci, care a înțeles că este vorba de o lume nouă."
  },
  {
    domeniu: "istorie",
    dificultate: "usor",
    intrebare: "Ce eveniment a început odată cu căderea Bastiliei, la 14 iulie 1789?",
    variante: ["Revoluția Americană", "Revoluția Rusă", "Revoluția Franceză", "Revoluția de la 1848"],
    corect: "Revoluția Franceză",
    explicatie: "Bastilia era o închisoare din Paris și un simbol al puterii absolute a regelui. Ziua de 14 iulie este azi ziua națională a Franței."
  },
  {
    domeniu: "istorie",
    dificultate: "usor",
    intrebare: "Cine a condus România comunistă între 1965 și 1989?",
    variante: ["Gheorghe Gheorghiu-Dej", "Nicolae Ceaușescu", "Petru Groza", "Ion Iliescu"],
    corect: "Nicolae Ceaușescu",
    explicatie: "Ceaușescu a fost înlăturat de Revoluția din decembrie 1989. A fost executat la Târgoviște, pe 25 decembrie."
  },
  {
    domeniu: "istorie",
    dificultate: "usor",
    intrebare: "În ce oraș a început Revoluția Română din decembrie 1989?",
    variante: ["București", "Cluj-Napoca", "Iași", "Timișoara"],
    corect: "Timișoara",
    explicatie: "Protestele au pornit pe 16 decembrie 1989, când oamenii s-au strâns să-l apere pe pastorul László Tőkés de evacuare."
  },
  {
    domeniu: "istorie",
    dificultate: "usor",
    intrebare: "Cine a fost primul om care a zburat în spațiu?",
    variante: ["Iuri Gagarin", "Neil Armstrong", "Valentina Tereșkova", "Alexei Leonov"],
    corect: "Iuri Gagarin",
    explicatie: "Gagarin a ocolit Pământul pe 12 aprilie 1961, într-un zbor de aproximativ 108 minute. Valentina Tereșkova a devenit prima femeie în spațiu doi ani mai târziu."
  },
  {
    domeniu: "istorie",
    dificultate: "usor",
    intrebare: "Asupra cărui oraș a fost lansată prima bombă atomică folosită într-un război?",
    variante: ["Nagasaki", "Tokyo", "Hiroshima", "Osaka"],
    corect: "Hiroshima",
    explicatie: "Bomba a fost lansată pe 6 august 1945. A doua a lovit Nagasaki trei zile mai târziu, iar Japonia a capitulat în scurt timp."
  },
  {
    domeniu: "istorie",
    dificultate: "usor",
    intrebare: "Ce rege macedonean a creat un imperiu care se întindea din Grecia până în India?",
    variante: ["Filip al II-lea", "Alexandru cel Mare", "Darius I", "Iulius Cezar"],
    corect: "Alexandru cel Mare",
    explicatie: "Alexandru l-a avut profesor pe filosoful Aristotel. A cucerit un imperiu uriaș și a murit la numai 32 de ani."
  },
  {
    domeniu: "istorie",
    dificultate: "usor",
    intrebare: "Ce oraș roman a fost îngropat sub cenușă la erupția Vezuviului din anul 79 d.Hr.?",
    variante: ["Cartagina", "Ostia", "Sparta", "Pompei"],
    corect: "Pompei",
    explicatie: "Cenușa a conservat orașul atât de bine încât azi se pot vedea străzi, case și picturi murale din acea vreme. Erupția a fost descrisă de un martor ocular, Pliniu cel Tânăr."
  },
  {
    domeniu: "istorie",
    dificultate: "usor",
    intrebare: "În ce an s-a încheiat Al Doilea Război Mondial?",
    variante: ["1939", "1943", "1945", "1947"],
    corect: "1945",
    explicatie: "În Europa, războiul s-a încheiat pe 8 mai 1945, odată cu capitularea Germaniei. În Asia, Japonia a semnat capitularea pe 2 septembrie 1945."
  },
  {
    domeniu: "istorie",
    dificultate: "usor",
    intrebare: "Cine a fost primul președinte al Statelor Unite ale Americii?",
    variante: ["Abraham Lincoln", "Thomas Jefferson", "George Washington", "Benjamin Franklin"],
    corect: "George Washington",
    explicatie: "Washington a condus țara între 1789 și 1797 și a refuzat un al treilea mandat. Tradiția celor două mandate a fost respectată aproape 150 de ani."
  },
  {
    domeniu: "istorie",
    dificultate: "usor",
    intrebare: "Ce vas de pasageri s-a scufundat în 1912, după ce a lovit un aisberg?",
    variante: ["Lusitania", "Titanic", "Britannic", "Queen Mary"],
    corect: "Titanic",
    explicatie: "Titanicul era la prima sa călătorie, de la Southampton spre New York. Peste 1.500 de oameni au murit, în parte pentru că bărcile de salvare nu ajungeau pentru toți."
  },
  {
    domeniu: "istorie",
    dificultate: "usor",
    intrebare: "Cine a fost primul președinte al României ales după căderea comunismului?",
    variante: ["Petre Roman", "Emil Constantinescu", "Traian Băsescu", "Ion Iliescu"],
    corect: "Ion Iliescu",
    explicatie: "Iliescu a câștigat alegerile din 20 mai 1990, primele alegeri libere după 1989. Petre Roman a fost primul prim-ministru al acelei perioade."
  },

  // ---------- ISTORIE: MEDIU (48) ----------
  {
    domeniu: "istorie",
    dificultate: "mediu",
    intrebare: "În ce an și-a proclamat România independența de stat?",
    variante: ["1859", "1866", "1877", "1881"],
    corect: "1877",
    explicatie: "Independența a fost proclamată pe 9 mai 1877 și câștigată pe câmpul de luptă, împotriva Imperiului Otoman. Marile Puteri au recunoscut-o la Congresul de la Berlin din 1878."
  },
  {
    domeniu: "istorie",
    dificultate: "mediu",
    intrebare: "Cine a fost primul rege al României?",
    variante: ["Ferdinand I", "Carol I", "Carol al II-lea", "Mihai I"],
    corect: "Carol I",
    explicatie: "Carol I a venit ca domnitor în 1866 și a devenit rege în 1881. Cu 48 de ani la conducere, a avut cea mai lungă domnie din istoria României."
  },
  {
    domeniu: "istorie",
    dificultate: "mediu",
    intrebare: "În ce război a avut loc bătălia de la Mărășești?",
    variante: ["Războiul de Independență", "Primul Război Mondial", "Al Doilea Război Mondial", "Al Doilea Război Balcanic"],
    corect: "Primul Război Mondial",
    explicatie: "În vara anului 1917, armata română condusă de generalul Eremia Grigorescu a oprit aici ofensiva germană. Deviza luptei a fost „Pe aici nu se trece!”."
  },
  {
    domeniu: "istorie",
    dificultate: "mediu",
    intrebare: "Ce imperiu a cucerit Constantinopolul în 1453?",
    variante: ["Imperiul Mongol", "Imperiul Persan", "Califatul Abbasid", "Imperiul Otoman"],
    corect: "Imperiul Otoman",
    explicatie: "Cucerirea, condusă de sultanul Mahomed al II-lea, a pus capăt Imperiului Bizantin. Mulți istorici o folosesc ca reper pentru sfârșitul Evului Mediu."
  },
  {
    domeniu: "istorie",
    dificultate: "mediu",
    intrebare: "Ce document a fost acceptat în 1215 de regele Ioan al Angliei, limitând puterea regală?",
    variante: ["Magna Carta", "Bill of Rights", "Habeas Corpus Act", "Declarația Drepturilor Omului"],
    corect: "Magna Carta",
    explicatie: "Magna Carta a stabilit ideea că nici regele nu este mai presus de lege. Câteva dintre prevederile ei sunt valabile și astăzi în Anglia."
  },
  {
    domeniu: "istorie",
    dificultate: "mediu",
    intrebare: "În ce an a avut loc actul de la 23 August, prin care România a întors armele împotriva Germaniei?",
    variante: ["1941", "1943", "1944", "1945"],
    corect: "1944",
    explicatie: "Pe 23 august 1944, regele Mihai I l-a arestat pe mareșalul Ion Antonescu, iar România a trecut de partea Aliaților."
  },
  {
    domeniu: "istorie",
    dificultate: "mediu",
    intrebare: "Ce bătălie din 1815 a pus capăt definitiv domniei lui Napoleon?",
    variante: ["Austerlitz", "Waterloo", "Leipzig", "Borodino"],
    corect: "Waterloo",
    explicatie: "Waterloo se află azi în Belgia. După înfrângere, Napoleon a fost exilat pe insula Sfânta Elena, unde a și murit."
  },
  {
    domeniu: "istorie",
    dificultate: "mediu",
    intrebare: "Ce domnitor al Țării Românești este cunoscut sub porecla „Țepeș”?",
    variante: ["Mircea cel Bătrân", "Radu cel Frumos", "Vlad al III-lea", "Neagoe Basarab"],
    corect: "Vlad al III-lea",
    explicatie: "Numele „Dracula” vine de la tatăl lui, Vlad Dracul, membru al Ordinului Dragonului. Bram Stoker l-a folosit în romanul său din 1897."
  },
  {
    domeniu: "istorie",
    dificultate: "mediu",
    intrebare: "Ce provincie s-a unit prima cu România în 1918, prin votul Sfatului Țării?",
    variante: ["Bucovina", "Transilvania", "Basarabia", "Banatul"],
    corect: "Basarabia",
    explicatie: "Basarabia s-a unit pe 27 martie 1918. Au urmat Bucovina, pe 28 noiembrie, și Transilvania, pe 1 decembrie."
  },
  {
    domeniu: "istorie",
    dificultate: "mediu",
    intrebare: "Ce tratat de pace a fost semnat cu Germania în 1919, după Primul Război Mondial?",
    variante: ["Tratatul de la Trianon", "Tratatul de la Versailles", "Pacea Westfalică", "Tratatul de la Paris"],
    corect: "Tratatul de la Versailles",
    explicatie: "Tratatul de la Versailles a impus Germaniei condiții foarte dure. Tratatul de la Trianon (1920), încheiat cu Ungaria, a recunoscut unirea Transilvaniei cu România."
  },
  {
    domeniu: "istorie",
    dificultate: "mediu",
    intrebare: "Ce lider a condus lupta pentru independența Indiei prin rezistență nonviolentă?",
    variante: ["Jawaharlal Nehru", "Mahatma Gandhi", "Indira Gandhi", "Rabindranath Tagore"],
    corect: "Mahatma Gandhi",
    explicatie: "Una dintre cele mai cunoscute acțiuni ale lui Gandhi a fost Marșul sării din 1930. India a devenit independentă în 1947, iar Gandhi a fost asasinat în anul următor."
  },
  {
    domeniu: "istorie",
    dificultate: "mediu",
    intrebare: "Cine a fost primul președinte de culoare al Africii de Sud?",
    variante: ["Desmond Tutu", "F. W. de Klerk", "Kofi Annan", "Nelson Mandela"],
    corect: "Nelson Mandela",
    explicatie: "Mandela a petrecut 27 de ani în închisoare și a devenit președinte în 1994. Împărțise Premiul Nobel pentru Pace din 1993 cu F. W. de Klerk."
  },
  {
    domeniu: "istorie",
    dificultate: "mediu",
    intrebare: "În ce război a luptat Ioana d'Arc?",
    variante: ["Războiul de 100 de ani", "Războiul de 30 de ani", "Războiul celor Două Roze", "Cruciada a IV-a"],
    corect: "Războiul de 100 de ani",
    explicatie: "Ioana a condus armata franceză împotriva englezilor. A fost arsă pe rug în 1431, la doar 19 ani, și declarată sfântă în 1920."
  },
  {
    domeniu: "istorie",
    dificultate: "mediu",
    intrebare: "În ce an a avut loc Criza rachetelor din Cuba?",
    variante: ["1959", "1961", "1962", "1968"],
    corect: "1962",
    explicatie: "Timp de 13 zile din octombrie 1962, SUA și URSS au fost la un pas de un război nuclear. Criza s-a încheiat cu un acord între Kennedy și Hrușciov."
  },
  {
    domeniu: "istorie",
    dificultate: "mediu",
    intrebare: "Ce țară a lansat în 1957 primul satelit artificial, Sputnik 1?",
    variante: ["SUA", "Marea Britanie", "Franța", "URSS"],
    corect: "URSS",
    explicatie: "Lansarea Sputnik a declanșat cursa spațială. Ca răspuns, americanii au înființat NASA în anul următor."
  },
  {
    domeniu: "istorie",
    dificultate: "mediu",
    intrebare: "Ce rege a unificat pentru prima dată triburile geto-dacilor, în secolul I î.Hr.?",
    variante: ["Decebal", "Burebista", "Dromihete", "Deceneu"],
    corect: "Burebista",
    explicatie: "Burebista a fost contemporan cu Iulius Cezar, care plănuia o campanie împotriva lui. Deceneu a fost marele preot și sfetnicul său."
  },
  {
    domeniu: "istorie",
    dificultate: "mediu",
    intrebare: "Cine a declanșat Reforma Protestantă în 1517, prin cele 95 de teze?",
    variante: ["Jean Calvin", "Jan Hus", "Martin Luther", "Erasmus din Rotterdam"],
    corect: "Martin Luther",
    explicatie: "Ideile lui Luther s-au răspândit rapid datorită tiparului, inventat de curând. Tot el a tradus Biblia în limba germană."
  },
  {
    domeniu: "istorie",
    dificultate: "mediu",
    intrebare: "Ce om politic a condus unificarea Germaniei în 1871?",
    variante: ["Otto von Bismarck", "Wilhelm al II-lea", "Klemens von Metternich", "Frederic cel Mare"],
    corect: "Otto von Bismarck",
    explicatie: "Bismarck era supranumit „cancelarul de fier”. Imperiul German a fost proclamat chiar la Versailles, în Sala Oglinzilor."
  },
  {
    domeniu: "istorie",
    dificultate: "mediu",
    intrebare: "Ce epidemie a ucis aproximativ o treime din populația Europei la mijlocul secolului al XIV-lea?",
    variante: ["Variola", "Ciuma neagră", "Holera", "Gripa spaniolă"],
    corect: "Ciuma neagră",
    explicatie: "Boala era răspândită de puricii șobolanilor. Cuvântul „carantină” vine din italiană, de la cele 40 de zile de izolare impuse corăbiilor."
  },
  {
    domeniu: "istorie",
    dificultate: "mediu",
    intrebare: "Ce general cartaginez a trecut Alpii cu elefanți pentru a ataca Roma?",
    variante: ["Hamilcar Barca", "Pyrrhus", "Scipio Africanul", "Hannibal"],
    corect: "Hannibal",
    explicatie: "Hannibal a trecut Alpii în 218 î.Hr. și a câștigat mai multe bătălii mari pe teritoriul Italiei. A fost învins în cele din urmă de Scipio Africanul, la Zama."
  },
  {
    domeniu: "istorie",
    dificultate: "mediu",
    intrebare: "Ce conducător al Revoluției de la 1848 din Transilvania era numit „Craiul Munților”?",
    variante: ["Avram Iancu", "Nicolae Bălcescu", "Tudor Vladimirescu", "Horea"],
    corect: "Avram Iancu",
    explicatie: "Avram Iancu i-a condus pe moți în luptele din Munții Apuseni. Zona în care a trăit se numește azi Țara lui Avram Iancu."
  },
  {
    domeniu: "istorie",
    dificultate: "mediu",
    intrebare: "Ce domnitor a câștigat bătălia de la Vaslui (1475) împotriva otomanilor?",
    variante: ["Petru Rareș", "Ștefan cel Mare", "Alexandru cel Bun", "Vasile Lupu"],
    corect: "Ștefan cel Mare",
    explicatie: "După această victorie, Papa Sixtus al IV-lea l-a numit pe Ștefan „atlet al lui Hristos”. Ștefan este înmormântat la Mănăstirea Putna, pe care a ctitorit-o."
  },
  {
    domeniu: "istorie",
    dificultate: "mediu",
    intrebare: "Cine a condus mișcarea revoluționară din 1821 din Țara Românească?",
    variante: ["Horea", "Avram Iancu", "Nicolae Bălcescu", "Tudor Vladimirescu"],
    corect: "Tudor Vladimirescu",
    explicatie: "După mișcarea lui Tudor, din 1822 tronul a revenit domnitorilor pământeni. Așa s-a încheiat perioada domniilor fanariote."
  },
  {
    domeniu: "istorie",
    dificultate: "mediu",
    intrebare: "Pentru ce faraon a fost construită Marea Piramidă de la Giza?",
    variante: ["Tutankhamon", "Keops", "Ramses al II-lea", "Akhenaton"],
    corect: "Keops",
    explicatie: "Piramida avea inițial aproximativ 146 de metri înălțime. A rămas cea mai înaltă construcție făcută de om timp de aproape 3.800 de ani."
  },
  {
    domeniu: "istorie",
    dificultate: "mediu",
    intrebare: "Ce civilizație a construit orașul Machu Picchu, din Munții Anzi?",
    variante: ["Aztecii", "Mayașii", "Incașii", "Olmecii"],
    corect: "Incașii",
    explicatie: "Orașul a fost construit în secolul al XV-lea, pe un vârf de munte din Peru. A devenit cunoscut în toată lumea abia în 1911, prin exploratorul american Hiram Bingham."
  },
  {
    domeniu: "istorie",
    dificultate: "mediu",
    intrebare: "Ce domnitor a ctitorit biserica Mănăstirii Curtea de Argeș, de care se leagă legenda Meșterului Manole?",
    variante: ["Mircea cel Bătrân", "Neagoe Basarab", "Matei Basarab", "Constantin Brâncoveanu"],
    corect: "Neagoe Basarab",
    explicatie: "Biserica a fost sfințită în 1517. Potrivit legendei, Meșterul Manole și-a zidit soția în pereți, ca zidurile să nu se mai prăbușească."
  },
  {
    domeniu: "istorie",
    dificultate: "mediu",
    intrebare: "Ce domnitor al Țării Românești a luptat la Rovine, în 1395, împotriva sultanului Baiazid I?",
    variante: ["Mircea cel Bătrân", "Vlad Dracul", "Dan I", "Radu cel Mare"],
    corect: "Mircea cel Bătrân",
    explicatie: "Baiazid era supranumit „Fulgerul”, pentru rapiditatea campaniilor sale. Mircea a domnit, cu o scurtă întrerupere, între 1386 și 1418."
  },
  {
    domeniu: "istorie",
    dificultate: "mediu",
    intrebare: "Unde l-a înfruntat Mihai Viteazul pe Sinan Pașa, în august 1595, lângă podul de peste Neajlov?",
    variante: ["Șelimbăr", "Călugăreni", "Guruslău", "Mirăslău"],
    corect: "Călugăreni",
    explicatie: "Lupta s-a dat într-o zonă mlăștinoasă, unde armata otomană, mult mai numeroasă, nu se putea desfășura. Celelalte trei sunt tot bătălii ale lui Mihai, din anii următori."
  },
  {
    domeniu: "istorie",
    dificultate: "mediu",
    intrebare: "Cât timp a domnit Ștefan cel Mare în Moldova?",
    variante: ["27 de ani", "37 de ani", "47 de ani", "57 de ani"],
    corect: "47 de ani",
    explicatie: "Ștefan a domnit între 1457 și 1504. A ridicat numeroase mănăstiri și biserici, multe dintre ele după câte o bătălie."
  },
  {
    domeniu: "istorie",
    dificultate: "mediu",
    intrebare: "În ce an a devenit Bucureștiul capitala unică a Principatelor Unite?",
    variante: ["1859", "1866", "1881", "1862"],
    corect: "1862",
    explicatie: "Până atunci, Moldova și Țara Românească aveau guverne și adunări separate, la Iași și la București. Unificarea lor deplină a venit la trei ani după dubla alegere a lui Cuza."
  },
  {
    domeniu: "istorie",
    dificultate: "mediu",
    intrebare: "Cum a fost numită alianța politică ce l-a obligat pe Cuza să abdice, în 1866?",
    variante: ["Monstruoasa coaliție", "Partidul Național", "Junimea", "Frăția"],
    corect: "Monstruoasa coaliție",
    explicatie: "Era o alianță între conservatori și liberali radicali, adversari în rest. Cuza a fost forțat să abdice în noaptea de 11 februarie 1866 și a murit în exil, la Heidelberg, în 1873."
  },
  {
    domeniu: "istorie",
    dificultate: "mediu",
    intrebare: "Ce redută otomană au cucerit trupele române în 1877, în timpul asediului Plevnei?",
    variante: ["Rahova", "Grivița", "Smârdan", "Vidin"],
    corect: "Grivița",
    explicatie: "Grivița a fost cucerită pe 30 august 1877. Plevna a capitulat la sfârșitul anului, iar comandantul otoman Osman Pașa a fost luat prizonier."
  },
  {
    domeniu: "istorie",
    dificultate: "mediu",
    intrebare: "În ce an a intrat România în Primul Război Mondial?",
    variante: ["1914", "1915", "1916", "1917"],
    corect: "1916",
    explicatie: "România a intrat în război în august 1916, de partea Antantei, cu scopul de a elibera Transilvania. În decembrie același an, Bucureștiul a fost ocupat de trupele germane."
  },
  {
    domeniu: "istorie",
    dificultate: "mediu",
    intrebare: "Al cărui monarh era nepoată regina Maria a României?",
    variante: ["Țarul Nicolae al II-lea", "Împăratul Franz Joseph", "Kaiserul Wilhelm I", "Regina Victoria a Marii Britanii"],
    corect: "Regina Victoria a Marii Britanii",
    explicatie: "În Primul Război Mondial, Maria a îngrijit răniții pe front. În 1919 a mers la Paris ca să susțină cauza României Mari în fața Marilor Puteri."
  },
  {
    domeniu: "istorie",
    dificultate: "mediu",
    intrebare: "Ce prim-ministru a condus delegația României la Conferința de Pace de la Paris, din 1919?",
    variante: ["Ion I. C. Brătianu", "Take Ionescu", "Iuliu Maniu", "Nicolae Titulescu"],
    corect: "Ion I. C. Brătianu",
    explicatie: "Brătianu a fost nemulțumit de felul în care Marile Puteri tratau statele mici și a părăsit conferința în semn de protest."
  },
  {
    domeniu: "istorie",
    dificultate: "mediu",
    intrebare: "Cum s-a numit programul prin care SUA au ajutat refacerea Europei după Al Doilea Război Mondial?",
    variante: ["Doctrina Truman", "Planul Marshall", "New Deal", "Planul Schuman"],
    corect: "Planul Marshall",
    explicatie: "Programul poartă numele secretarului de stat George Marshall. URSS a interzis țărilor din Europa de Est, inclusiv României, să participe."
  },
  {
    domeniu: "istorie",
    dificultate: "mediu",
    intrebare: "Ce partid a preluat puterea în Rusia în octombrie 1917?",
    variante: ["Menșevicii", "Socialiștii-revoluționari", "Bolșevicii", "Cadeții"],
    corect: "Bolșevicii",
    explicatie: "După calendarul nostru, Revoluția din Octombrie a avut loc în noiembrie 1917, pentru că Rusia folosea atunci calendarul iulian. Liderul bolșevicilor era Lenin."
  },
  {
    domeniu: "istorie",
    dificultate: "mediu",
    intrebare: "Cum este numit valul de revoluții care a cuprins Europa în 1848?",
    variante: ["Epoca Luminilor", "Restaurația", "Belle Époque", "Primăvara popoarelor"],
    corect: "Primăvara popoarelor",
    explicatie: "Revoluțiile au izbucnit aproape simultan în Franța, statele germane, Imperiul Habsburgic, Italia și Principatele Române. Cele mai multe au fost înfrânte până în 1849."
  },
  {
    domeniu: "istorie",
    dificultate: "mediu",
    intrebare: "Ce președinte american a condus SUA în timpul Războiului Civil?",
    variante: ["Abraham Lincoln", "Ulysses S. Grant", "Andrew Johnson", "Jefferson Davis"],
    corect: "Abraham Lincoln",
    explicatie: "Lincoln a semnat Proclamația de Emancipare în 1863. A fost asasinat în aprilie 1865, la câteva zile după ce armata Sudului se predase."
  },
  {
    domeniu: "istorie",
    dificultate: "mediu",
    intrebare: "Cine a scris cea mai mare parte a Declarației de Independență a SUA (1776)?",
    variante: ["George Washington", "Thomas Jefferson", "Benjamin Franklin", "John Adams"],
    corect: "Thomas Jefferson",
    explicatie: "Declarația a fost adoptată pe 4 iulie 1776, ziua sărbătorită azi ca Ziua Independenței. Jefferson a devenit mai târziu al treilea președinte al SUA."
  },
  {
    domeniu: "istorie",
    dificultate: "mediu",
    intrebare: "În ce an s-a încoronat Napoleon Bonaparte împărat al francezilor?",
    variante: ["1799", "1808", "1804", "1812"],
    corect: "1804",
    explicatie: "La ceremonia de la Notre-Dame, Napoleon și-a pus singur coroana pe cap, deși Papa Pius al VII-lea era de față. În 1799 preluase puterea ca prim-consul."
  },
  {
    domeniu: "istorie",
    dificultate: "mediu",
    intrebare: "Ce inventator scoțian a perfecționat mașina cu abur, simbol al Revoluției Industriale?",
    variante: ["George Stephenson", "Thomas Newcomen", "Michael Faraday", "James Watt"],
    corect: "James Watt",
    explicatie: "Newcomen construise o mașină cu abur mai veche, dar mult mai puțin eficientă. Unitatea de măsură pentru putere, wattul, poartă numele lui Watt."
  },
  {
    domeniu: "istorie",
    dificultate: "mediu",
    intrebare: "Ce rege al Franței era supranumit „Regele Soare”?",
    variante: ["Ludovic al XIV-lea", "Ludovic al XIII-lea", "Ludovic al XV-lea", "Ludovic al XVI-lea"],
    corect: "Ludovic al XIV-lea",
    explicatie: "Ludovic al XIV-lea a domnit 72 de ani, cea mai lungă domnie din istoria Franței. Tot el a transformat Versailles-ul în reședința regală."
  },
  {
    domeniu: "istorie",
    dificultate: "mediu",
    intrebare: "Ce rege al Angliei a avut șase soții și a rupt legătura cu Biserica Catolică?",
    variante: ["Richard al III-lea", "Henric al VIII-lea", "Eduard al VI-lea", "Henric al VII-lea"],
    corect: "Henric al VIII-lea",
    explicatie: "Papa a refuzat să-i anuleze prima căsătorie, așa că Henric a creat Biserica Anglicană și a devenit conducătorul ei."
  },
  {
    domeniu: "istorie",
    dificultate: "mediu",
    intrebare: "În ce stațiune din Crimeea s-au întâlnit Roosevelt, Churchill și Stalin în februarie 1945?",
    variante: ["Potsdam", "Teheran", "Ialta", "Sevastopol"],
    corect: "Ialta",
    explicatie: "Liderii au discutat organizarea Europei după război. Teheran (1943) și Potsdam (vara lui 1945) au fost alte două conferințe ale Aliaților."
  },
  {
    domeniu: "istorie",
    dificultate: "mediu",
    intrebare: "În ce an a devenit Adolf Hitler cancelar al Germaniei?",
    variante: ["1929", "1936", "1939", "1933"],
    corect: "1933",
    explicatie: "Hitler a fost numit cancelar pe 30 ianuarie 1933. În câteva luni a desființat celelalte partide și a instaurat dictatura nazistă."
  },
  {
    domeniu: "istorie",
    dificultate: "mediu",
    intrebare: "Ce atac a adus SUA în Al Doilea Război Mondial, în decembrie 1941?",
    variante: ["Atacul japonez de la Pearl Harbor", "Scufundarea vasului Lusitania", "Invadarea Poloniei", "Bătălia de la Midway"],
    corect: "Atacul japonez de la Pearl Harbor",
    explicatie: "Baza navală americană din Hawaii a fost atacată pe 7 decembrie 1941. A doua zi, SUA au declarat război Japoniei."
  },
  {
    domeniu: "istorie",
    dificultate: "mediu",
    intrebare: "Ce bătălie din iarna 1942–1943 este considerată punctul de cotitură al războiului pe Frontul de Est?",
    variante: ["Kursk", "Stalingrad", "Moscova", "Leningrad"],
    corect: "Stalingrad",
    explicatie: "Armata a 6-a germană a fost încercuită și s-a predat în februarie 1943. Și armatele române au suferit pierderi foarte mari în această bătălie."
  },

  // ---------- ISTORIE: GREU (32) ----------
  {
    domeniu: "istorie",
    dificultate: "greu",
    intrebare: "Ce rege al României a fost încoronat la Alba Iulia în 1922, ca suveran al României Mari?",
    variante: ["Carol I", "Ferdinand I", "Carol al II-lea", "Mihai I"],
    corect: "Ferdinand I",
    explicatie: "Ferdinand și regina Maria au fost încoronați pe 15 octombrie 1922. Catedrala Încoronării din Alba Iulia a fost construită special pentru această ceremonie."
  },
  {
    domeniu: "istorie",
    dificultate: "greu",
    intrebare: "Unde a fost citită proclamația care a declanșat Revoluția de la 1848 în Țara Românească?",
    variante: ["Blaj", "Islaz", "Iași", "Craiova"],
    corect: "Islaz",
    explicatie: "Proclamația de la Islaz a fost citită în iunie 1848 și cerea, printre altele, egalitatea în drepturi. Blajul a fost locul marii adunări a românilor din Transilvania."
  },
  {
    domeniu: "istorie",
    dificultate: "greu",
    intrebare: "Ce lege din 1864, din vremea lui Cuza, a dat pământ țăranilor?",
    variante: ["Legea secularizării averilor mănăstirești", "Legea instrucțiunii publice", "Legea rurală", "Codul Calimachi"],
    corect: "Legea rurală",
    explicatie: "Adunarea se opunea reformei, așa că în mai 1864 Cuza a dizolvat-o printr-o lovitură de stat. Abia după aceea a putut aplica Legea rurală."
  },
  {
    domeniu: "istorie",
    dificultate: "greu",
    intrebare: "Ce om politic a declarat în Parlament, la 9 mai 1877, independența României?",
    variante: ["Ion C. Brătianu", "Mihail Kogălniceanu", "Lascăr Catargiu", "Ion Ghica"],
    corect: "Mihail Kogălniceanu",
    explicatie: "Kogălniceanu era atunci ministru de externe. Discursul lui a rămas celebru prin ideea că România este o națiune de sine stătătoare."
  },
  {
    domeniu: "istorie",
    dificultate: "greu",
    intrebare: "Cine a prezidat Marea Adunare Națională de la Alba Iulia, la 1 decembrie 1918?",
    variante: ["Iuliu Maniu", "Vasile Goldiș", "Alexandru Vaida-Voevod", "Gheorghe Pop de Băsești"],
    corect: "Gheorghe Pop de Băsești",
    explicatie: "Pop de Băsești, unul dintre veteranii luptei naționale, a condus adunarea. Rezoluția Unirii a fost citită de Vasile Goldiș."
  },
  {
    domeniu: "istorie",
    dificultate: "greu",
    intrebare: "Ce imperiu a anexat Basarabia în 1812?",
    variante: ["Imperiul Rus", "Imperiul Otoman", "Imperiul Habsburgic", "Regatul Poloniei"],
    corect: "Imperiul Rus",
    explicatie: "Anexarea s-a făcut prin Pacea de la București, la sfârșitul unui război ruso-turc. Rusia a primit partea Moldovei dintre Prut și Nistru."
  },
  {
    domeniu: "istorie",
    dificultate: "greu",
    intrebare: "Care a fost capitala provinciei romane Dacia?",
    variante: ["Sarmizegetusa Regia", "Apulum", "Ulpia Traiana Sarmizegetusa", "Napoca"],
    corect: "Ulpia Traiana Sarmizegetusa",
    explicatie: "Capitala romană a fost construită la câteva zeci de kilometri de vechea capitală dacică. Sarmizegetusa Regia, din Munții Orăștiei, fusese capitala lui Decebal."
  },
  {
    domeniu: "istorie",
    dificultate: "greu",
    intrebare: "Ce împărat, primul care a unificat China, a fost îngropat alături de o armată de soldați din teracotă?",
    variante: ["Kublai Han", "Ginghis Han", "Puyi", "Qin Shi Huang"],
    corect: "Qin Shi Huang",
    explicatie: "Armata de teracotă a fost descoperită în 1974 de niște țărani care săpau o fântână. Are aproximativ 8.000 de soldați, cai și care de luptă."
  },
  {
    domeniu: "istorie",
    dificultate: "greu",
    intrebare: "Codul lui Hammurabi, una dintre cele mai vechi culegeri de legi scrise, provine din ce civilizație?",
    variante: ["Egipteană", "Babiloniană", "Hitită", "Persană"],
    corect: "Babiloniană",
    explicatie: "Legile au fost sculptate pe o stelă de piatră care se află azi la Muzeul Luvru. Codul conține celebrul principiu „ochi pentru ochi”."
  },
  {
    domeniu: "istorie",
    dificultate: "greu",
    intrebare: "Ce împărat roman a mutat capitala imperiului în orașul Bizanț, redenumit apoi după numele lui?",
    variante: ["Iustinian", "Constantin cel Mare", "Teodosie I", "Dioclețian"],
    corect: "Constantin cel Mare",
    explicatie: "Constantinopolul a fost inaugurat în anul 330 și se numește azi Istanbul. Tot Constantin le-a dat creștinilor libertate de cult, prin Edictul de la Milano (313)."
  },
  {
    domeniu: "istorie",
    dificultate: "greu",
    intrebare: "Cum se numește ruptura din 1054 dintre Biserica de Răsărit și cea de Apus?",
    variante: ["Reforma", "Marea Schismă", "Conciliul de la Niceea", "Edictul de la Milano"],
    corect: "Marea Schismă",
    explicatie: "În urma Marii Schisme s-au despărțit Biserica Ortodoxă și Biserica Catolică. Abia în 1965 cele două au ridicat oficial excomunicările reciproce din 1054."
  },
  {
    domeniu: "istorie",
    dificultate: "greu",
    intrebare: "Ce domnitor al Țării Românești a fost executat la Istanbul în 1714, împreună cu cei patru fii ai săi?",
    variante: ["Șerban Cantacuzino", "Matei Basarab", "Constantin Brâncoveanu", "Dimitrie Cantemir"],
    corect: "Constantin Brâncoveanu",
    explicatie: "Potrivit tradiției, Brâncoveanu și fiii lui au refuzat să treacă la islam pentru a-și salva viața. Biserica Ortodoxă i-a declarat sfinți în 1992, iar stilul arhitectural „brâncovenesc” îi poartă numele."
  },
  {
    domeniu: "istorie",
    dificultate: "greu",
    intrebare: "Ce domnitor al Moldovei a scris lucrarea „Descriptio Moldaviae”?",
    variante: ["Miron Costin", "Grigore Ureche", "Vasile Lupu", "Dimitrie Cantemir"],
    corect: "Dimitrie Cantemir",
    explicatie: "Cantemir a scris-o la cererea Academiei din Berlin, al cărei membru devenise în 1714. A fost primul român membru al unei academii străine."
  },
  {
    domeniu: "istorie",
    dificultate: "greu",
    intrebare: "Din ce sat a pornit, în februarie 1907, marea răscoală țărănească din România?",
    variante: ["Bobâlna", "Flămânzi", "Mărășești", "Islaz"],
    corect: "Flămânzi",
    explicatie: "Răscoala a început în satul Flămânzi, din județul Botoșani, și s-a întins apoi în toată țara. A fost înăbușită de armată, iar numărul victimelor este și azi discutat de istorici."
  },
  {
    domeniu: "istorie",
    dificultate: "greu",
    intrebare: "Ce diplomat român a fost ales de două ori președinte al Adunării Societății Națiunilor?",
    variante: ["Take Ionescu", "Grigore Gafencu", "Nicolae Titulescu", "Ion G. Duca"],
    corect: "Nicolae Titulescu",
    explicatie: "Titulescu a fost ales în 1930 și în 1931. Ca ministru de externe, în anii '30, a susținut un sistem de securitate colectivă în Europa."
  },
  {
    domeniu: "istorie",
    dificultate: "greu",
    intrebare: "Ce tratat a încheiat, în 1648, Războiul de 30 de ani?",
    variante: ["Tratatul de la Utrecht", "Pacea de la Augsburg", "Congresul de la Viena", "Pacea Westfalică"],
    corect: "Pacea Westfalică",
    explicatie: "Mulți istorici consideră această pace începutul sistemului modern al statelor suverane. Războiul devastase mai ales teritoriile germane."
  },
  {
    domeniu: "istorie",
    dificultate: "greu",
    intrebare: "Ce întâlnire a marilor puteri a refăcut harta Europei după înfrângerea lui Napoleon?",
    variante: ["Congresul de la Viena", "Congresul de la Berlin", "Conferința de la Ialta", "Pacea de la Amiens"],
    corect: "Congresul de la Viena",
    explicatie: "Congresul a fost condus în mare parte de cancelarul austriac Metternich. Lucrările au continuat chiar și în timpul celor „O sută de zile” ale lui Napoleon."
  },
  {
    domeniu: "istorie",
    dificultate: "greu",
    intrebare: "Ce domnitor al Moldovei a fost numit „cel Bun” și a domnit 32 de ani, la începutul secolului al XV-lea?",
    variante: ["Petru Mușat", "Alexandru cel Bun", "Roman I", "Ilie I"],
    corect: "Alexandru cel Bun",
    explicatie: "Sub domnia lui, Moldova a avut o lungă perioadă de pace și prosperitate. Ștefan cel Mare era nepotul lui de fiu."
  },
  {
    domeniu: "istorie",
    dificultate: "greu",
    intrebare: "Ce domnitor a învins armata regelui Ungariei la Posada, în 1330?",
    variante: ["Mircea cel Bătrân", "Vladislav Vlaicu", "Basarab I", "Litovoi"],
    corect: "Basarab I",
    explicatie: "Regele Carol Robert de Anjou a scăpat cu greu, schimbându-și însemnele cu un cavaler. Basarab I este considerat întemeietorul Țării Românești independente."
  },
  {
    domeniu: "istorie",
    dificultate: "greu",
    intrebare: "Ce voievod din Maramureș a obținut, în jurul anului 1359, independența Moldovei față de Ungaria?",
    variante: ["Dragoș", "Petru I Mușat", "Alexandru cel Bun", "Bogdan I"],
    corect: "Bogdan I",
    explicatie: "Potrivit legendei, Dragoș, un alt voievod maramureșean, ar fi ajuns în Moldova urmărind un zimbru. Bogdan I este considerat întemeietorul Moldovei independente."
  },
  {
    domeniu: "istorie",
    dificultate: "greu",
    intrebare: "Cine au fost conducătorii răscoalei țăranilor români din Transilvania, din 1784?",
    variante: ["Horea, Cloșca și Crișan", "Avram Iancu, Axente Sever și Simion Balint", "Tudor Vladimirescu și Iordache Olimpiotul", "Gheorghe Doja și Antal Budai"],
    corect: "Horea, Cloșca și Crișan",
    explicatie: "Horea și Cloșca au fost executați prin tragere pe roată la Alba Iulia, în 1785. Crișan și-a luat viața în închisoare, înainte de execuție."
  },
  {
    domeniu: "istorie",
    dificultate: "greu",
    intrebare: "Ce mișcare culturală din secolul al XVIII-lea a susținut originea latină a românilor din Transilvania?",
    variante: ["Junimea", "Școala Ardeleană", "Sămănătorismul", "Poporanismul"],
    corect: "Școala Ardeleană",
    explicatie: "Printre reprezentanții ei s-au numărat Samuil Micu, Gheorghe Șincai și Petru Maior. Ei au promovat și scrierea limbii române cu alfabet latin."
  },
  {
    domeniu: "istorie",
    dificultate: "greu",
    intrebare: "Ce documente, adoptate sub ocupație rusă în 1831–1832, au funcționat ca primele constituții ale Țării Românești și Moldovei?",
    variante: ["Convenția de la Paris", "Statutul Dezvoltător", "Regulamentele Organice", "Pravila lui Vasile Lupu"],
    corect: "Regulamentele Organice",
    explicatie: "Au fost elaborate sub conducerea generalului rus Pavel Kiseleff. Una dintre cele mai cunoscute artere din București, Șoseaua Kiseleff, îi poartă numele."
  },
  {
    domeniu: "istorie",
    dificultate: "greu",
    intrebare: "Ce act al Marilor Puteri, din 1858, prevedea că Moldova și Țara Românească vor avea doi domnitori separați?",
    variante: ["Tratatul de la Adrianopol", "Congresul de la Berlin", "Regulamentul Organic", "Convenția de la Paris"],
    corect: "Convenția de la Paris",
    explicatie: "Românii au ocolit această prevedere alegându-l pe Alexandru Ioan Cuza în ambele principate, în ianuarie 1859."
  },
  {
    domeniu: "istorie",
    dificultate: "greu",
    intrebare: "Ce teritoriu a obținut România de la Bulgaria prin Pacea de la București, din 1913?",
    variante: ["Cadrilaterul", "Bucovina", "Banatul", "Basarabia"],
    corect: "Cadrilaterul",
    explicatie: "Cadrilaterul, sudul Dobrogei, cuprindea județele Durostor și Caliacra. România l-a cedat înapoi Bulgariei în 1940, prin Tratatul de la Craiova."
  },
  {
    domeniu: "istorie",
    dificultate: "greu",
    intrebare: "Prin ce act a pierdut România nordul Transilvaniei, în august 1940?",
    variante: ["Pactul Ribbentrop-Molotov", "Dictatul de la Viena", "Tratatul de la Craiova", "Tratatul de la Trianon"],
    corect: "Dictatul de la Viena",
    explicatie: "Hotărârea a fost impusă României de Germania și Italia. Nordul Transilvaniei a revenit României după război, iar granița a fost confirmată prin Tratatul de Pace de la Paris, din 1947."
  },
  {
    domeniu: "istorie",
    dificultate: "greu",
    intrebare: "Ce acord germano-sovietic din 1939 conținea un protocol secret prin care Basarabia intra în sfera de influență a URSS?",
    variante: ["Acordul de la München", "Pactul Tripartit", "Pactul Ribbentrop-Molotov", "Pactul Briand-Kellogg"],
    corect: "Pactul Ribbentrop-Molotov",
    explicatie: "Pactul a fost semnat în august 1939. În iunie 1940, URSS a cerut printr-un ultimatum Basarabia și nordul Bucovinei, iar România a cedat."
  },
  {
    domeniu: "istorie",
    dificultate: "greu",
    intrebare: "Cine a condus Partidul Comunist Român înainte de Nicolae Ceaușescu, până la moartea sa, în 1965?",
    variante: ["Ana Pauker", "Petru Groza", "Lucrețiu Pătrășcanu", "Gheorghe Gheorghiu-Dej"],
    corect: "Gheorghe Gheorghiu-Dej",
    explicatie: "În timpul lui au avut loc colectivizarea agriculturii și primele lucrări la Canalul Dunăre–Marea Neagră, făcute cu deținuți politici. În 1958, trupele sovietice s-au retras din România."
  },
  {
    domeniu: "istorie",
    dificultate: "greu",
    intrebare: "Ce petiție, trimisă în 1892 împăratului Franz Joseph, cerea drepturi pentru românii din Transilvania?",
    variante: ["Memorandumul", "Supplex Libellus Valachorum", "Petiția de la Blaj", "Proclamația de la Islaz"],
    corect: "Memorandumul",
    explicatie: "Împăratul nu a primit delegația. Autorii Memorandumului au fost judecați la Cluj, în 1894, și condamnați la închisoare. Supplex Libellus Valachorum fusese o petiție asemănătoare, din 1791."
  },
  {
    domeniu: "istorie",
    dificultate: "greu",
    intrebare: "Ce oraș grecesc antic de pe țărmul Mării Negre se afla pe locul actualei Mangalia?",
    variante: ["Histria", "Callatis", "Tomis", "Argamum"],
    corect: "Callatis",
    explicatie: "Histria, întemeiată în secolul al VII-lea î.Hr., este cel mai vechi oraș atestat de pe teritoriul României. Tomis se afla pe locul Constanței."
  },
  {
    domeniu: "istorie",
    dificultate: "greu",
    intrebare: "Ce familii nobile s-au luptat pentru tronul Angliei în Războiul celor Două Roze?",
    variante: ["Tudor și Stuart", "Plantagenet și Windsor", "Lancaster și York", "Habsburg și Bourbon"],
    corect: "Lancaster și York",
    explicatie: "Războiul s-a încheiat în 1485, când Henric Tudor a câștigat bătălia de la Bosworth și a devenit regele Henric al VII-lea."
  },
  {
    domeniu: "istorie",
    dificultate: "greu",
    intrebare: "Ce împărat bizantin a construit catedrala Sfânta Sofia din Constantinopol, în forma ei actuală?",
    variante: ["Constantin cel Mare", "Teodosie al II-lea", "Heraclius", "Iustinian"],
    corect: "Iustinian",
    explicatie: "Catedrala a fost terminată în anul 537. A rămas aproape o mie de ani cea mai mare biserică din lume."
  },

  // =======================================================
  // BIOLOGIE (100 de întrebări)
  // =======================================================

  // ---------- BIOLOGIE: UȘOR (20) ----------
  {
    domeniu: "biologie",
    dificultate: "usor",
    intrebare: "Ce organ pompează sângele în tot corpul?",
    variante: ["Plămânii", "Inima", "Ficatul", "Rinichii"],
    corect: "Inima",
    explicatie: "Inima unui adult bate de aproximativ 100.000 de ori pe zi. Într-o viață, asta înseamnă peste două miliarde și jumătate de bătăi."
  },
  {
    domeniu: "biologie",
    dificultate: "usor",
    intrebare: "Care este cel mai mare organ al corpului uman?",
    variante: ["Ficatul", "Creierul", "Pielea", "Intestinul subțire"],
    corect: "Pielea",
    explicatie: "La un adult, pielea acoperă aproximativ 2 metri pătrați și cântărește câteva kilograme. Ficatul este cel mai mare organ din interiorul corpului."
  },
  {
    domeniu: "biologie",
    dificultate: "usor",
    intrebare: "Ce gaz eliberează plantele în timpul fotosintezei?",
    variante: ["Oxigen", "Dioxid de carbon", "Azot", "Hidrogen"],
    corect: "Oxigen",
    explicatie: "Plantele folosesc lumina, apa și dioxidul de carbon ca să producă zahăr, iar oxigenul rezultă ca „deșeu”. O mare parte din oxigenul planetei vine de la algele microscopice din oceane."
  },
  {
    domeniu: "biologie",
    dificultate: "usor",
    intrebare: "Câte oase are scheletul unui om adult?",
    variante: ["186", "206", "226", "256"],
    corect: "206",
    explicatie: "Un nou-născut are aproape 300 de oase, care se sudează pe măsură ce crește. Peste jumătate din oasele adultului se află în mâini și picioare."
  },
  {
    domeniu: "biologie",
    dificultate: "usor",
    intrebare: "Care este cel mai mare animal care trăiește astăzi pe Pământ?",
    variante: ["Elefantul african", "Rechinul-balenă", "Cașalotul", "Balena albastră"],
    corect: "Balena albastră",
    explicatie: "Balena albastră poate ajunge la aproximativ 30 de metri lungime. Doar inima ei cântărește în jur de 180 de kilograme."
  },
  {
    domeniu: "biologie",
    dificultate: "usor",
    intrebare: "Ce fel de animal este delfinul?",
    variante: ["Pește", "Mamifer", "Reptilă", "Amfibian"],
    corect: "Mamifer",
    explicatie: "Delfinii respiră aer printr-o nară din vârful capului și își alăptează puii. Pot dormi cu o singură jumătate a creierului odată, ca să poată ieși în continuare la suprafață să respire."
  },
  {
    domeniu: "biologie",
    dificultate: "usor",
    intrebare: "În ce parte a celulei se află cea mai mare parte a ADN-ului?",
    variante: ["Membrana celulară", "Ribozomi", "Nucleu", "Citoplasmă"],
    corect: "Nucleu",
    explicatie: "Dacă ADN-ul dintr-o singură celulă umană ar fi întins, ar avea în jur de 2 metri. Totuși, încape într-un nucleu atât de mic încât nu se vede cu ochiul liber."
  },
  {
    domeniu: "biologie",
    dificultate: "usor",
    intrebare: "Ce organ produce insulina?",
    variante: ["Ficatul", "Stomacul", "Splina", "Pancreasul"],
    corect: "Pancreasul",
    explicatie: "Insulina ajută zahărul din sânge să intre în celule. Când pancreasul nu mai produce insulină, apare diabetul de tip 1."
  },
  {
    domeniu: "biologie",
    dificultate: "usor",
    intrebare: "Care este cel mai rapid animal de uscat?",
    variante: ["Ghepardul", "Leul", "Antilopa", "Calul"],
    corect: "Ghepardul",
    explicatie: "Ghepardul atinge în jur de 100 km/h, dar poate alerga așa doar câteva sute de metri. După un sprint are nevoie de odihnă ca să-și revină."
  },
  {
    domeniu: "biologie",
    dificultate: "usor",
    intrebare: "Ce vitamină produce corpul atunci când pielea stă la soare?",
    variante: ["Vitamina A", "Vitamina C", "Vitamina D", "Vitamina K"],
    corect: "Vitamina D",
    explicatie: "Vitamina D ajută corpul să absoarbă calciul, deci e importantă pentru oase. Iarna, când soarele e mai slab, mulți oameni au valori scăzute."
  },
  {
    domeniu: "biologie",
    dificultate: "usor",
    intrebare: "Ce pasăre mare, cu o pungă mare sub cioc, trăiește în colonii în Delta Dunării?",
    variante: ["Cormoranul", "Pelicanul", "Stârcul cenușiu", "Lebăda"],
    corect: "Pelicanul",
    explicatie: "Delta Dunării găzduiește cea mai mare colonie de pelicani comuni din Europa. Punga de sub cioc le servește drept plasă de pescuit."
  },
  {
    domeniu: "biologie",
    dificultate: "usor",
    intrebare: "Câte camere are inima omului?",
    variante: ["2", "3", "4", "6"],
    corect: "4",
    explicatie: "Două atrii primesc sângele, iar două ventricule îl pompează mai departe. Inima unei broaște are doar trei camere."
  },
  {
    domeniu: "biologie",
    dificultate: "usor",
    intrebare: "În ce organ trece oxigenul din aer în sânge?",
    variante: ["Inima", "Traheea", "Ficatul", "Plămânii"],
    corect: "Plămânii",
    explicatie: "Schimbul se face în alveole, niște săculeți microscopici plini cu aer. Plămânii unui adult au sute de milioane de alveole."
  },
  {
    domeniu: "biologie",
    dificultate: "usor",
    intrebare: "Ce reptilă își poate schimba culoarea și are ochi care se mișcă independent unul de altul?",
    variante: ["Cameleonul", "Iguana", "Gecko", "Șopârla de câmp"],
    corect: "Cameleonul",
    explicatie: "Cameleonul își schimbă culoarea mai ales ca să comunice cu alți cameleoni și să-și regleze temperatura. Camuflajul este doar o parte din poveste."
  },
  {
    domeniu: "biologie",
    dificultate: "usor",
    intrebare: "Cum se numește transformarea unei omizi în fluture?",
    variante: ["Mitoză", "Mutație", "Fotosinteză", "Metamorfoză"],
    corect: "Metamorfoză",
    explicatie: "Între omidă și fluture există etapa de crisalidă. În interiorul ei, corpul insectei se reorganizează aproape complet."
  },
  {
    domeniu: "biologie",
    dificultate: "usor",
    intrebare: "Care este cel mai mare carnivor sălbatic din România?",
    variante: ["Lupul", "Ursul brun", "Râsul", "Mistrețul"],
    corect: "Ursul brun",
    explicatie: "România are cea mai mare populație de urși bruni din Uniunea Europeană. Deși face parte din ordinul carnivorelor, ursul mănâncă mai ales plante, fructe de pădure și insecte."
  },
  {
    domeniu: "biologie",
    dificultate: "usor",
    intrebare: "Ce celule din sânge transportă oxigenul?",
    variante: ["Globulele albe", "Globulele roșii", "Trombocitele", "Neuronii"],
    corect: "Globulele roșii",
    explicatie: "Culoarea roșie vine de la hemoglobină, o proteină care conține fier. O globulă roșie trăiește în jur de 120 de zile."
  },
  {
    domeniu: "biologie",
    dificultate: "usor",
    intrebare: "Ce studiază ornitologia?",
    variante: ["Insectele", "Peștii", "Păsările", "Fosilele"],
    corect: "Păsările",
    explicatie: "Cuvântul vine din grecescul „ornis”, care înseamnă pasăre. Insectele sunt studiate de entomologie, iar peștii de ihtiologie."
  },
  {
    domeniu: "biologie",
    dificultate: "usor",
    intrebare: "Cine a propus teoria evoluției prin selecție naturală?",
    variante: ["Gregor Mendel", "Louis Pasteur", "Jean-Baptiste Lamarck", "Charles Darwin"],
    corect: "Charles Darwin",
    explicatie: "Darwin și-a format ideile în timpul unei călătorii de cinci ani cu nava Beagle, care a trecut și prin Insulele Galápagos. Cartea lui, „Originea speciilor”, a apărut în 1859."
  },
  {
    domeniu: "biologie",
    dificultate: "usor",
    intrebare: "Ce parte a plantei absoarbe apa din sol?",
    variante: ["Frunza", "Rădăcina", "Tulpina", "Floarea"],
    corect: "Rădăcina",
    explicatie: "Pe rădăcini cresc perișori absorbanți foarte subțiri. Ei măresc mult suprafața prin care apa intră în plantă."
  },

  // ---------- BIOLOGIE: MEDIU (48) ----------
  {
    domeniu: "biologie",
    dificultate: "mediu",
    intrebare: "Ce grupă de sânge este numită „donator universal”?",
    variante: ["AB pozitiv", "A negativ", "0 negativ", "B pozitiv"],
    corect: "0 negativ",
    explicatie: "În urgențe, sângele 0 negativ poate fi dat aproape oricui. Grupa AB pozitiv este, invers, „primitor universal”."
  },
  {
    domeniu: "biologie",
    dificultate: "mediu",
    intrebare: "Ce parte a celulei este numită „uzina energetică” a acesteia?",
    variante: ["Mitocondria", "Ribozomul", "Aparatul Golgi", "Lizozomul"],
    corect: "Mitocondria",
    explicatie: "Mitocondriile au propriul lor ADN. Pe acesta îl moștenim aproape întotdeauna doar de la mamă."
  },
  {
    domeniu: "biologie",
    dificultate: "mediu",
    intrebare: "Cine a descoperit penicilina, în 1928?",
    variante: ["Louis Pasteur", "Alexander Fleming", "Robert Koch", "Edward Jenner"],
    corect: "Alexander Fleming",
    explicatie: "Fleming a observat că un mucegai apărut din întâmplare pe o cutie de cultură omora bacteriile din jur. Penicilina a ajuns să fie produsă în masă abia în timpul celui de-Al Doilea Război Mondial."
  },
  {
    domeniu: "biologie",
    dificultate: "mediu",
    intrebare: "Cine este considerat părintele geneticii, datorită experimentelor sale cu mazăre?",
    variante: ["Charles Darwin", "James Watson", "Gregor Mendel", "Thomas Morgan"],
    corect: "Gregor Mendel",
    explicatie: "Mendel era călugăr și și-a făcut experimentele în grădina mănăstirii. Importanța descoperirilor lui a fost înțeleasă abia în 1900, după moartea sa."
  },
  {
    domeniu: "biologie",
    dificultate: "mediu",
    intrebare: "Ce formă are molecula de ADN?",
    variante: ["Spirală simplă", "Triplu helix", "Lanț drept", "Dublu helix"],
    corect: "Dublu helix",
    explicatie: "Structura a fost descrisă în 1953 de James Watson și Francis Crick. Ei s-au folosit de imaginile cu raze X obținute de Rosalind Franklin."
  },
  {
    domeniu: "biologie",
    dificultate: "mediu",
    intrebare: "Care este cel mai mare mamifer de uscat din Europa, readus în ultimii ani în Carpații românești?",
    variante: ["Ursul brun", "Zimbrul", "Cerbul carpatin", "Elanul"],
    corect: "Zimbrul",
    explicatie: "Zimbrul poate fi văzut în rezervația de la Vânători-Neamț. Din 2014, câteva turme au fost eliberate în sălbăticie, în Munții Țarcu."
  },
  {
    domeniu: "biologie",
    dificultate: "mediu",
    intrebare: "Ce boală a fost declarată eradicată în toată lumea în 1980, datorită vaccinării?",
    variante: ["Poliomielita", "Rujeola", "Tuberculoza", "Variola"],
    corect: "Variola",
    explicatie: "Variola este singura boală umană eradicată complet. Chiar primul vaccin din istorie, creat de Edward Jenner în 1796, era împotriva ei."
  },
  {
    domeniu: "biologie",
    dificultate: "mediu",
    intrebare: "Ce om de știință român a primit Premiul Nobel pentru Medicină în 1974?",
    variante: ["George Emil Palade", "Victor Babeș", "Nicolae Paulescu", "Ana Aslan"],
    corect: "George Emil Palade",
    explicatie: "Palade a fost premiat pentru descoperiri despre structura celulei. Ribozomii au fost numiți la început „granulele lui Palade”."
  },
  {
    domeniu: "biologie",
    dificultate: "mediu",
    intrebare: "Câți cromozomi are o celulă obișnuită a corpului uman?",
    variante: ["23", "44", "46", "48"],
    corect: "46",
    explicatie: "Cromozomii vin în 23 de perechi: jumătate de la mamă, jumătate de la tată. Cimpanzeii au 48 de cromozomi."
  },
  {
    domeniu: "biologie",
    dificultate: "mediu",
    intrebare: "Ce parte a creierului se ocupă în principal de echilibru și de coordonarea mișcărilor?",
    variante: ["Hipotalamusul", "Cerebelul", "Lobul frontal", "Bulbul rahidian"],
    corect: "Cerebelul",
    explicatie: "Cerebelul reprezintă doar în jur de 10% din volumul creierului. Totuși, conține mai mult de jumătate din neuronii acestuia."
  },
  {
    domeniu: "biologie",
    dificultate: "mediu",
    intrebare: "Ce mamifer are cea mai lungă sarcină?",
    variante: ["Balena albastră", "Girafa", "Rinocerul", "Elefantul"],
    corect: "Elefantul",
    explicatie: "Femela de elefant își poartă puiul aproximativ 22 de luni. La naștere, puiul cântărește în jur de 100 de kilograme."
  },
  {
    domeniu: "biologie",
    dificultate: "mediu",
    intrebare: "Ce organ poate crește la loc chiar după ce i se îndepărtează mai mult de jumătate?",
    variante: ["Ficatul", "Inima", "Creierul", "Pancreasul"],
    corect: "Ficatul",
    explicatie: "Datorită acestei puteri de regenerare, un om sănătos poate dona o parte din ficat. Atât la donator, cât și la primitor, ficatul crește apoi la loc."
  },
  {
    domeniu: "biologie",
    dificultate: "mediu",
    intrebare: "Cum se numesc organismele care își produc singure hrana, de exemplu prin fotosinteză?",
    variante: ["Heterotrofe", "Autotrofe", "Parazite", "Saprofite"],
    corect: "Autotrofe",
    explicatie: "Plantele, algele și unele bacterii sunt autotrofe. Animalele și ciupercile sunt heterotrofe, adică se hrănesc cu alte organisme."
  },
  {
    domeniu: "biologie",
    dificultate: "mediu",
    intrebare: "Cu cine sunt mai apropiate ciupercile, ca înrudire?",
    variante: ["Plantele", "Bacteriile", "Animalele", "Algele"],
    corect: "Animalele",
    explicatie: "Ciupercile nu fac fotosinteză, iar peretele lor celular conține chitină, aceeași substanță din carapacea insectelor. Studiile genetice arată că sunt mai înrudite cu animalele decât cu plantele."
  },
  {
    domeniu: "biologie",
    dificultate: "mediu",
    intrebare: "Cum se numesc unitățile microscopice care filtrează sângele în rinichi?",
    variante: ["Alveolele", "Neuronii", "Nefronii", "Vilozitățile"],
    corect: "Nefronii",
    explicatie: "Fiecare rinichi are în jur de un milion de nefroni. Împreună, rinichii filtrează zilnic circa 180 de litri de lichid, dar doar 1-2 litri devin urină."
  },
  {
    domeniu: "biologie",
    dificultate: "mediu",
    intrebare: "Care este singurul mamifer capabil de zbor adevărat?",
    variante: ["Veverița zburătoare", "Lemurul zburător", "Ornitorincul", "Liliacul"],
    corect: "Liliacul",
    explicatie: "Veverițele „zburătoare” doar planează de pe un copac pe altul. Mulți lilieci se orientează în întuneric prin ecolocație: scot sunete și ascultă ecoul."
  },
  {
    domeniu: "biologie",
    dificultate: "mediu",
    intrebare: "Cum se numește diviziunea prin care o celulă formează două celule identice?",
    variante: ["Mitoza", "Meioza", "Osmoza", "Fecundația"],
    corect: "Mitoza",
    explicatie: "Prin mitoză corpul crește și își repară țesuturile. Meioza, în schimb, produce celulele sexuale, cu jumătate din numărul de cromozomi."
  },
  {
    domeniu: "biologie",
    dificultate: "mediu",
    intrebare: "Ce hormon pregătește corpul pentru „luptă sau fugă”, crescând rapid pulsul?",
    variante: ["Insulina", "Adrenalina", "Melatonina", "Estrogenul"],
    corect: "Adrenalina",
    explicatie: "Adrenalina este produsă de glandele suprarenale, așezate deasupra rinichilor. Efectele ei apar în doar câteva secunde."
  },
  {
    domeniu: "biologie",
    dificultate: "mediu",
    intrebare: "Ce hormon reglează somnul și este produs mai ales când se întunecă?",
    variante: ["Adrenalina", "Insulina", "Testosteronul", "Melatonina"],
    corect: "Melatonina",
    explicatie: "Melatonina este produsă de glanda pineală, din creier. Lumina ecranelor seara îi poate întârzia producerea și ne poate strica somnul."
  },
  {
    domeniu: "biologie",
    dificultate: "mediu",
    intrebare: "Din icrele căror pești se obține caviarul negru?",
    variante: ["Sturionii", "Somnii", "Știucile", "Crapii"],
    corect: "Sturionii",
    explicatie: "În Dunăre trăiesc mai multe specii de sturioni, precum morunul și nisetrul. Din cauza pescuitului excesiv, pescuitul lor comercial este interzis în România."
  },
  {
    domeniu: "biologie",
    dificultate: "mediu",
    intrebare: "Ce naturalist român dă numele Muzeului Național de Istorie Naturală din București?",
    variante: ["Emil Racoviță", "Grigore Antipa", "Victor Babeș", "Ion Ionescu de la Brad"],
    corect: "Grigore Antipa",
    explicatie: "Antipa a fost printre primii din lume care au expus animalele în diorame, adică în decoruri care le redau mediul natural. A condus muzeul mai mult de 50 de ani."
  },
  {
    domeniu: "biologie",
    dificultate: "mediu",
    intrebare: "Cum se numesc singurele mamifere care depun ouă?",
    variante: ["Marsupialele", "Monotremele", "Rozătoarele", "Cetaceele"],
    corect: "Monotremele",
    explicatie: "Din acest grup fac parte ornitorincul și echidna, care trăiesc în Australia și Noua Guinee. Masculul de ornitorinc are un pinten veninos la picioarele din spate."
  },
  {
    domeniu: "biologie",
    dificultate: "mediu",
    intrebare: "Ce provoacă gripa?",
    variante: ["O bacterie", "Un virus", "O ciupercă", "Un parazit"],
    corect: "Un virus",
    explicatie: "Antibioticele distrug bacteriile, dar nu au niciun efect asupra virusurilor. De aceea nu vindecă gripa sau răceala."
  },
  {
    domeniu: "biologie",
    dificultate: "mediu",
    intrebare: "Ce animal are trei inimi?",
    variante: ["Caracatița", "Steaua de mare", "Meduza", "Rechinul"],
    corect: "Caracatița",
    explicatie: "Două inimi pompează sângele prin branhii, iar a treia îl trimite în restul corpului. Sângele caracatiței este albastru, pentru că transportă oxigenul cu ajutorul cuprului."
  },
  {
    domeniu: "biologie",
    dificultate: "mediu",
    intrebare: "Ce plantă carnivoră își închide frunzele ca pe o capcană când le atinge o insectă?",
    variante: ["Roua cerului", "Dioneea", "Cactusul", "Mimoza"],
    corect: "Dioneea",
    explicatie: "Capcana se închide doar dacă perișorii sensibili de pe frunze sunt atinși de două ori, la scurt timp. Așa planta nu se închide degeaba din cauza unei picături de ploaie."
  },
  {
    domeniu: "biologie",
    dificultate: "mediu",
    intrebare: "În ce parte a ochiului se află celulele sensibile la lumină?",
    variante: ["Cristalinul", "Retina", "Corneea", "Irisul"],
    corect: "Retina",
    explicatie: "Conurile din retină ne permit să vedem culorile, iar bastonașele lucrează mai bine în lumină slabă. De aceea, noaptea vedem lumea mai ales în nuanțe de gri."
  },
  {
    domeniu: "biologie",
    dificultate: "mediu",
    intrebare: "Ce parte a celulei vegetale conține clorofila și face fotosinteza?",
    variante: ["Cloroplastul", "Mitocondria", "Vacuola", "Ribozomul"],
    corect: "Cloroplastul",
    explicatie: "Cloroplastele au propriul lor ADN, la fel ca mitocondriile. Se crede că provin din bacterii care au început să trăiască în interiorul altor celule, acum mai bine de un miliard de ani."
  },
  {
    domeniu: "biologie",
    dificultate: "mediu",
    intrebare: "Ce structuri din celulă produc proteinele?",
    variante: ["Lizozomii", "Ribozomii", "Centrozomii", "Peroxizomii"],
    corect: "Ribozomii",
    explicatie: "Ribozomii citesc instrucțiunile din ARN-ul mesager și leagă aminoacizii unul de altul, în ordinea corectă."
  },
  {
    domeniu: "biologie",
    dificultate: "mediu",
    intrebare: "Câți aminoacizi folosește în mod obișnuit corpul uman ca să construiască proteine?",
    variante: ["12", "46", "20", "64"],
    corect: "20",
    explicatie: "Dintre aceștia, 9 sunt „esențiali”: corpul nu îi poate produce, așa că trebuie să-i primească din alimente. 64 este numărul de combinații posibile ale codului genetic."
  },
  {
    domeniu: "biologie",
    dificultate: "mediu",
    intrebare: "Care dintre aceste grupe de vitamine se dizolvă în grăsimi?",
    variante: ["B și C", "Doar vitamina C", "Toate vitaminele B", "A, D, E și K"],
    corect: "A, D, E și K",
    explicatie: "Aceste vitamine se absorb mai bine când sunt consumate cu puțină grăsime. Spre deosebire de vitaminele B și C, excesul lor se poate acumula în corp."
  },
  {
    domeniu: "biologie",
    dificultate: "mediu",
    intrebare: "Ce boală este provocată, cel mai des, de lipsa fierului din alimentație?",
    variante: ["Anemia", "Rahitismul", "Scorbutul", "Pelagra"],
    corect: "Anemia",
    explicatie: "Fierul intră în compoziția hemoglobinei. Fără destul fier, sângele transportă mai puțin oxigen, iar omul obosește ușor."
  },
  {
    domeniu: "biologie",
    dificultate: "mediu",
    intrebare: "Cum se numește pigmentul care dă culoarea pielii și a părului?",
    variante: ["Melatonina", "Melanina", "Keratina", "Hemoglobina"],
    corect: "Melanina",
    explicatie: "Melanina protejează pielea de razele ultraviolete; de aceea pielea se bronzează la soare. Keratina este proteina din care sunt făcute părul și unghiile."
  },
  {
    domeniu: "biologie",
    dificultate: "mediu",
    intrebare: "Care este cea mai abundentă proteină din corpul uman?",
    variante: ["Hemoglobina", "Keratina", "Colagenul", "Actina"],
    corect: "Colagenul",
    explicatie: "Colagenul se găsește în piele, oase, tendoane și cartilaje. Pentru producerea lui, corpul are nevoie de vitamina C."
  },
  {
    domeniu: "biologie",
    dificultate: "mediu",
    intrebare: "Cum se numește locul de contact prin care un neuron transmite semnalul altui neuron?",
    variante: ["Axonul", "Dendrita", "Mielina", "Sinapsa"],
    corect: "Sinapsa",
    explicatie: "Creierul uman are aproximativ 86 de miliarde de neuroni. Fiecare dintre ei poate forma mii de sinapse."
  },
  {
    domeniu: "biologie",
    dificultate: "mediu",
    intrebare: "Ce glandă, cât un bob de mazăre, controlează activitatea multor alte glande?",
    variante: ["Hipofiza", "Tiroida", "Epifiza", "Suprarenala"],
    corect: "Hipofiza",
    explicatie: "Hipofiza se află la baza creierului și este numită uneori „glanda-șefă”. Produce, printre altele, hormonul de creștere."
  },
  {
    domeniu: "biologie",
    dificultate: "mediu",
    intrebare: "Ce glandă din gât produce hormoni care reglează metabolismul și are nevoie de iod?",
    variante: ["Timusul", "Tiroida", "Paratiroidele", "Hipofiza"],
    corect: "Tiroida",
    explicatie: "Lipsa iodului poate duce la mărirea tiroidei, numită gușă. De aceea, sarea de bucătărie este adesea iodată."
  },
  {
    domeniu: "biologie",
    dificultate: "mediu",
    intrebare: "Câți dinți are de obicei un adult, cu tot cu măselele de minte?",
    variante: ["28", "30", "32", "36"],
    corect: "32",
    explicatie: "Copiii au 20 de dinți de lapte. Smalțul dinților este cel mai dur țesut din corpul omenesc."
  },
  {
    domeniu: "biologie",
    dificultate: "mediu",
    intrebare: "În ce parte a tubului digestiv sunt absorbite cele mai multe substanțe hrănitoare?",
    variante: ["Stomacul", "Intestinul gros", "Duodenul", "Intestinul subțire"],
    corect: "Intestinul subțire",
    explicatie: "Peretele lui are milioane de pliuri mici, numite vilozități, care măresc enorm suprafața de absorbție. Duodenul este doar prima lui porțiune, unde se amestecă hrana cu bila și sucul pancreatic."
  },
  {
    domeniu: "biologie",
    dificultate: "mediu",
    intrebare: "Ce enzimă din salivă începe digestia amidonului?",
    variante: ["Amilaza", "Pepsina", "Lipaza", "Tripsina"],
    corect: "Amilaza",
    explicatie: "De aceea, o bucată de pâine mestecată mult timp începe să aibă un gust dulce. Pepsina digeră proteinele, în stomac."
  },
  {
    domeniu: "biologie",
    dificultate: "mediu",
    intrebare: "Ce acid se găsește în sucul gastric din stomac?",
    variante: ["Acidul sulfuric", "Acidul clorhidric", "Acidul citric", "Acidul lactic"],
    corect: "Acidul clorhidric",
    explicatie: "Stomacul se protejează de propriul acid cu un strat gros de mucus. Celulele care îi căptușesc peretele se reînnoiesc la câteva zile."
  },
  {
    domeniu: "biologie",
    dificultate: "mediu",
    intrebare: "Ce animal are cel mai greu creier de pe Pământ?",
    variante: ["Elefantul african", "Balena albastră", "Cașalotul", "Delfinul"],
    corect: "Cașalotul",
    explicatie: "Creierul cașalotului cântărește aproximativ 8 kilograme, de peste cinci ori mai mult decât cel al omului."
  },
  {
    domeniu: "biologie",
    dificultate: "mediu",
    intrebare: "Ce pasăre care nu poate zbura este simbolul Noii Zeelande?",
    variante: ["Emu", "Casuarul", "Nandu", "Kiwi"],
    corect: "Kiwi",
    explicatie: "Kiwi are nările în vârful ciocului, cu care își caută hrana în pământ. Locuitorii Noii Zeelande sunt numiți adesea „kiwi”."
  },
  {
    domeniu: "biologie",
    dificultate: "mediu",
    intrebare: "Care este cel mai mare pește din lume?",
    variante: ["Rechinul-balenă", "Rechinul alb", "Morunul", "Peștele-lună"],
    corect: "Rechinul-balenă",
    explicatie: "Rechinul-balenă poate depăși 12 metri, dar se hrănește doar cu plancton și peștișori, pe care îi filtrează din apă."
  },
  {
    domeniu: "biologie",
    dificultate: "mediu",
    intrebare: "Ce specie de urs se hrănește aproape numai cu bambus?",
    variante: ["Ursul malaiezian", "Panda uriaș", "Ursul cu ochelari", "Ursul negru asiatic"],
    corect: "Panda uriaș",
    explicatie: "Deși face parte din ordinul carnivorelor, peste 99% din hrana lui este bambus. Ca să-și acopere nevoile, mănâncă aproape toată ziua."
  },
  {
    domeniu: "biologie",
    dificultate: "mediu",
    intrebare: "Cum se numește starea de somn adânc în care petrec iarna animale precum ariciul sau marmota?",
    variante: ["Estivație", "Migrație", "Hibernare", "Năpârlire"],
    corect: "Hibernare",
    explicatie: "În timpul hibernării, ritmul inimii și temperatura corpului scad foarte mult. La urs temperatura scade puțin, așa că unii biologi numesc starea lui „somn de iarnă”."
  },
  {
    domeniu: "biologie",
    dificultate: "mediu",
    intrebare: "Ce plantă ocrotită, cu flori albe-argintii pufoase, crește pe stâncile din munții înalți ai României?",
    variante: ["Bujorul de munte", "Ghințura galbenă", "Sângele-voinicului", "Floarea de colț"],
    corect: "Floarea de colț",
    explicatie: "Floarea de colț este una dintre primele plante ocrotite prin lege în România. Bujorul de munte, cu flori roz, este și el ocrotit."
  },
  {
    domeniu: "biologie",
    dificultate: "mediu",
    intrebare: "Cărei clase de animale îi aparțin păianjenii?",
    variante: ["Arahnide", "Insecte", "Crustacee", "Miriapode"],
    corect: "Arahnide",
    explicatie: "Spre deosebire de insecte, care au șase picioare, arahnidele au opt. Din aceeași clasă fac parte scorpionii și căpușele."
  },
  {
    domeniu: "biologie",
    dificultate: "mediu",
    intrebare: "Ce fel de organism este drojdia folosită la pâine?",
    variante: ["O bacterie", "O ciupercă", "O algă", "Un virus"],
    corect: "O ciupercă",
    explicatie: "Drojdia descompune zahărul și eliberează dioxid de carbon, care face aluatul să crească. Același proces stă la baza producerii vinului și a berii."
  },

  // ---------- BIOLOGIE: GREU (32) ----------
  {
    domeniu: "biologie",
    dificultate: "greu",
    intrebare: "Ce om de știință român a scris, împreună cu francezul Victor Cornil, primul tratat de bacteriologie din lume (1885)?",
    variante: ["Ioan Cantacuzino", "Victor Babeș", "Grigore Antipa", "Emil Racoviță"],
    corect: "Victor Babeș",
    explicatie: "Numele lui a fost dat genului Babesia, un grup de paraziți care atacă globulele roșii ale animalelor și, mai rar, ale oamenilor. Un spital și o universitate de medicină din Timișoara îi poartă numele."
  },
  {
    domeniu: "biologie",
    dificultate: "greu",
    intrebare: "Ce biolog român a participat la expediția Belgica în Antarctica (1897-1899) și a fondat știința vieții din peșteri?",
    variante: ["Grigore Antipa", "Emil Racoviță", "Victor Babeș", "Nicolae Paulescu"],
    corect: "Emil Racoviță",
    explicatie: "Această știință se numește biospeologie. Racoviță a fondat la Cluj, în 1920, primul institut de speologie din lume."
  },
  {
    domeniu: "biologie",
    dificultate: "greu",
    intrebare: "Ce element chimic se află în centrul moleculei de clorofilă?",
    variante: ["Fier", "Calciu", "Magneziu", "Zinc"],
    corect: "Magneziu",
    explicatie: "Hemoglobina din sângele nostru are o structură asemănătoare. Diferența principală este că în centrul ei se află fier."
  },
  {
    domeniu: "biologie",
    dificultate: "greu",
    intrebare: "Ce medic român a descris în 1921 „pancreina”, o substanță extrasă din pancreas care scădea zahărul din sânge?",
    variante: ["Victor Babeș", "Ioan Cantacuzino", "George Emil Palade", "Nicolae Paulescu"],
    corect: "Nicolae Paulescu",
    explicatie: "Pancreina lui Paulescu era, de fapt, un extract care conținea insulină. Premiul Nobel din 1923 pentru descoperirea insulinei a revenit cercetătorilor Banting și Macleod, de la Toronto."
  },
  {
    domeniu: "biologie",
    dificultate: "greu",
    intrebare: "Care este cel mai mare organ limfatic al corpului uman?",
    variante: ["Splina", "Timusul", "Amigdalele", "Ficatul"],
    corect: "Splina",
    explicatie: "Splina filtrează sângele și distruge globulele roșii îmbătrânite. Se poate trăi și fără ea, dar riscul de infecții crește."
  },
  {
    domeniu: "biologie",
    dificultate: "greu",
    intrebare: "Care este cel mai mic os din corpul uman?",
    variante: ["Ciocanul", "Nicovala", "Scărița", "Falanga degetului mic"],
    corect: "Scărița",
    explicatie: "Scărița se află în urechea mijlocie și are în jur de 3 milimetri. Împreună cu ciocanul și nicovala, duce vibrațiile sunetului spre urechea internă."
  },
  {
    domeniu: "biologie",
    dificultate: "greu",
    intrebare: "Cum se numește procesul prin care plantele elimină apă sub formă de vapori, prin frunze?",
    variante: ["Fotosinteză", "Transpirație", "Respirație", "Gutație"],
    corect: "Transpirație",
    explicatie: "Apa iese prin pori microscopici numiți stomate. Cea mai mare parte a apei absorbite de rădăcini nu rămâne în plantă, ci se evaporă prin frunze."
  },
  {
    domeniu: "biologie",
    dificultate: "greu",
    intrebare: "Ce boală este provocată de bacteria descoperită de Robert Koch în 1882?",
    variante: ["Holera", "Antraxul", "Ciuma", "Tuberculoza"],
    corect: "Tuberculoza",
    explicatie: "Koch și-a anunțat descoperirea pe 24 martie 1882. De aceea, 24 martie este azi Ziua Mondială de Luptă împotriva Tuberculozei."
  },
  {
    domeniu: "biologie",
    dificultate: "greu",
    intrebare: "Ce structuri leagă mușchii de oase?",
    variante: ["Tendoanele", "Ligamentele", "Cartilajele", "Meniscurile"],
    corect: "Tendoanele",
    explicatie: "Ligamentele, în schimb, leagă oasele între ele. Cel mai puternic tendon din corp este tendonul lui Ahile, de la călcâi."
  },
  {
    domeniu: "biologie",
    dificultate: "greu",
    intrebare: "Cum se numește relația dintre două organisme din care ambele au de câștigat, ca în cazul lichenilor?",
    variante: ["Parazitism", "Competiție", "Mutualism", "Prădătorism"],
    corect: "Mutualism",
    explicatie: "Lichenul este o asociere între o ciupercă și o algă: alga produce hrana, iar ciuperca îi oferă adăpost și umiditate. Lichenii cresc greu în aer poluat, așa că sunt un semn de aer curat."
  },
  {
    domeniu: "biologie",
    dificultate: "greu",
    intrebare: "Lipsa cărei vitamine provoca scorbutul, boala marinarilor din trecut?",
    variante: ["Vitamina A", "Vitamina B12", "Vitamina D", "Vitamina C"],
    corect: "Vitamina C",
    explicatie: "În 1747, medicul scoțian James Lind a arătat că citricele vindecă boala. Mai târziu, marinarii britanici au primit suc de lămâie verde (lime), de unde porecla lor, „limeys”."
  },
  {
    domeniu: "biologie",
    dificultate: "greu",
    intrebare: "Ce organ produce bila?",
    variante: ["Vezica biliară", "Ficatul", "Pancreasul", "Stomacul"],
    corect: "Ficatul",
    explicatie: "Vezica biliară doar depozitează bila. O eliberează în intestin când mâncăm, mai ales alimente grase."
  },
  {
    domeniu: "biologie",
    dificultate: "greu",
    intrebare: "Ce pasăre atinge cea mai mare viteză în picaj?",
    variante: ["Vulturul pleșuv", "Drepneaua neagră", "Șoimul călător", "Barza albă"],
    corect: "Șoimul călător",
    explicatie: "În picaj, șoimul călător poate depăși 300 km/h, ceea ce îl face cel mai rapid animal de pe Pământ. Drepneaua neagră este printre cele mai rapide păsări în zbor orizontal."
  },
  {
    domeniu: "biologie",
    dificultate: "greu",
    intrebare: "Care element chimic are cea mai mare pondere în masa corpului uman?",
    variante: ["Carbonul", "Oxigenul", "Hidrogenul", "Azotul"],
    corect: "Oxigenul",
    explicatie: "Oxigenul reprezintă aproximativ 65% din masa corpului, mai ales pentru că suntem formați în mare parte din apă. Ca număr de atomi, pe primul loc este hidrogenul."
  },
  {
    domeniu: "biologie",
    dificultate: "greu",
    intrebare: "Ce strat gras învelește multe fibre nervoase și grăbește transmiterea impulsurilor?",
    variante: ["Membrana bazală", "Pericardul", "Teaca de mielină", "Periostul"],
    corect: "Teaca de mielină",
    explicatie: "Pe fibrele cu mielină, impulsurile pot depăși 100 de metri pe secundă. Scleroza multiplă este o boală în care această teacă este distrusă."
  },
  {
    domeniu: "biologie",
    dificultate: "greu",
    intrebare: "Ce boală genetică, frecventă cândva în familiile regale europene, împiedică sângele să se coaguleze normal?",
    variante: ["Anemia falciformă", "Talasemia", "Leucemia", "Hemofilia"],
    corect: "Hemofilia",
    explicatie: "Regina Victoria a transmis gena mai multor case regale, inclusiv celei a Rusiei, prin nepoata ei, țarina Alexandra. Boala apare aproape numai la bărbați."
  },
  {
    domeniu: "biologie",
    dificultate: "greu",
    intrebare: "Ce cromozomi de sex are, de obicei, un bărbat?",
    variante: ["XY", "XX", "XXY", "YY"],
    corect: "XY",
    explicatie: "Femeile au de obicei doi cromozomi X. Cromozomul Y este mult mai mic și conține doar câteva zeci de gene."
  },
  {
    domeniu: "biologie",
    dificultate: "greu",
    intrebare: "Cine a descris circulația sângelui în corp, în 1628?",
    variante: ["Andreas Vesalius", "William Harvey", "Galen", "Hipocrate"],
    corect: "William Harvey",
    explicatie: "Harvey a arătat că inima pompează sângele printr-un circuit închis. Până atunci, mulți medici credeau, după Galen, că sângele se produce continuu în ficat."
  },
  {
    domeniu: "biologie",
    dificultate: "greu",
    intrebare: "Cine a creat primul vaccin împotriva turbării, în 1885?",
    variante: ["Robert Koch", "Edward Jenner", "Louis Pasteur", "Joseph Lister"],
    corect: "Louis Pasteur",
    explicatie: "Primul pacient a fost un băiat de 9 ani, Joseph Meister, mușcat de un câine turbat. Pasteur a inventat și pasteurizarea, încălzirea alimentelor ca să fie omorâți microbii."
  },
  {
    domeniu: "biologie",
    dificultate: "greu",
    intrebare: "Ce om de știință olandez a văzut primul bacteriile la microscop, în secolul al XVII-lea?",
    variante: ["Robert Hooke", "Christiaan Huygens", "Marcello Malpighi", "Antonie van Leeuwenhoek"],
    corect: "Antonie van Leeuwenhoek",
    explicatie: "Își construia singur microscoapele și numea ființele minuscule „animalcule”. Robert Hooke a folosit primul cuvântul „celulă”."
  },
  {
    domeniu: "biologie",
    dificultate: "greu",
    intrebare: "Ce naturalist suedez a creat sistemul de denumire a speciilor prin două nume latinești, precum Homo sapiens?",
    variante: ["Carl Linné", "Georges Cuvier", "Comte de Buffon", "Jean-Baptiste Lamarck"],
    corect: "Carl Linné",
    explicatie: "Sistemul se numește nomenclatură binară: primul nume arată genul, iar al doilea specia."
  },
  {
    domeniu: "biologie",
    dificultate: "greu",
    intrebare: "Ce medic român a creat Gerovitalul, un preparat împotriva îmbătrânirii?",
    variante: ["Ioan Cantacuzino", "Ana Aslan", "Sofia Ionescu", "Maria Cutzarida"],
    corect: "Ana Aslan",
    explicatie: "Institutul de Geriatrie de la București, înființat de ea în 1952, a fost printre primele de acest fel din lume."
  },
  {
    domeniu: "biologie",
    dificultate: "greu",
    intrebare: "Ce medic este considerat fondatorul endocrinologiei românești, iar institutul național de profil îi poartă numele?",
    variante: ["Gheorghe Marinescu", "Nicolae Paulescu", "Constantin Ion Parhon", "Ioan Cantacuzino"],
    corect: "Constantin Ion Parhon",
    explicatie: "Parhon a fost și primul șef al statului după proclamarea Republicii Populare Române, ca președinte al prezidiului legislativ, între 1948 și 1952."
  },
  {
    domeniu: "biologie",
    dificultate: "greu",
    intrebare: "Ce medic român a descris, împreună cu Paul Blocq, în 1892, plăcile din creier legate mai târziu de boala Alzheimer?",
    variante: ["Victor Babeș", "Ioan Cantacuzino", "Constantin Ion Parhon", "Gheorghe Marinescu"],
    corect: "Gheorghe Marinescu",
    explicatie: "Marinescu este considerat fondatorul școlii românești de neurologie. A realizat și unele dintre primele filme științifice din lume, despre tulburările de mers."
  },
  {
    domeniu: "biologie",
    dificultate: "greu",
    intrebare: "Ce parte a urechii interne, în formă de melc, transformă sunetele în impulsuri nervoase?",
    variante: ["Cohleea", "Timpanul", "Trompa lui Eustachio", "Canalele semicirculare"],
    corect: "Cohleea",
    explicatie: "Canalele semicirculare se află tot în urechea internă, dar se ocupă de echilibru, nu de auz."
  },
  {
    domeniu: "biologie",
    dificultate: "greu",
    intrebare: "Ce celule ale sistemului imunitar produc anticorpi?",
    variante: ["Limfocitele T", "Limfocitele B", "Trombocitele", "Macrofagele"],
    corect: "Limfocitele B",
    explicatie: "Limfocitele T distrug direct celulele infectate, iar macrofagele înghit microbii. Vaccinurile „antrenează” limfocitele să recunoască un microb înaintea primei infecții."
  },
  {
    domeniu: "biologie",
    dificultate: "greu",
    intrebare: "Câți litri de sânge are, aproximativ, un adult?",
    variante: ["2 litri", "8 litri", "5 litri", "12 litri"],
    corect: "5 litri",
    explicatie: "Sângele reprezintă aproximativ 7-8% din greutatea corpului. În repaus, inima pompează toată această cantitate prin corp cam o dată pe minut."
  },
  {
    domeniu: "biologie",
    dificultate: "greu",
    intrebare: "Ce vierme plat poate crește un animal întreg dintr-o bucată foarte mică din corpul său?",
    variante: ["Râma", "Lipitoarea", "Tenia", "Planaria"],
    corect: "Planaria",
    explicatie: "O bucată de câteva sute de ori mai mică decât animalul poate forma o planarie nouă, cu tot cu creier. De aceea este folosită des în studiile despre regenerare."
  },
  {
    domeniu: "biologie",
    dificultate: "greu",
    intrebare: "Ce plantă are cea mai mare floare individuală din lume?",
    variante: ["Rafflesia", "Floarea-cadavru (Amorphophallus)", "Nufărul gigant Victoria", "Lotusul"],
    corect: "Rafflesia",
    explicatie: "Floarea poate avea aproape un metru în diametru și miroase a carne stricată, ca să atragă muștele care o polenizează. Floarea-cadavru are, de fapt, o inflorescență formată din multe flori mici."
  },
  {
    domeniu: "biologie",
    dificultate: "greu",
    intrebare: "Ce specie de copac are cele mai înalte exemplare cunoscute din lume?",
    variante: ["Eucaliptul regal", "Sequoia de coastă", "Sequoia gigantică", "Bradul Douglas"],
    corect: "Sequoia de coastă",
    explicatie: "Cel mai înalt exemplar cunoscut, numit Hyperion, are peste 115 metri. Locul exact în care crește este ținut secret, ca să fie protejat."
  },
  {
    domeniu: "biologie",
    dificultate: "greu",
    intrebare: "Ce pasăre are cea mai lungă migrație anuală?",
    variante: ["Barza albă", "Albatrosul călător", "Chira polară", "Rândunica"],
    corect: "Chira polară",
    explicatie: "Chira polară zboară în fiecare an din Arctica până în Antarctica și înapoi, zeci de mii de kilometri. Astfel prinde două veri în fiecare an."
  },
  {
    domeniu: "biologie",
    dificultate: "greu",
    intrebare: "Sub ce formă își depozitează plantele zahărul produs prin fotosinteză?",
    variante: ["Glicogen", "Celuloză", "Chitină", "Amidon"],
    corect: "Amidon",
    explicatie: "Animalele și ciupercile își depozitează zahărul sub formă de glicogen. Cartofii și cerealele sunt bogate în amidon."
  },

  // =======================================================
  // GEOGRAFIE (100 de întrebări)
  // =======================================================

  // ---------- GEOGRAFIE: UȘOR (20) ----------
  {
    domeniu: "geografie",
    dificultate: "usor",
    intrebare: "Care este cel mai mare ocean al planetei?",
    variante: ["Oceanul Atlantic", "Oceanul Indian", "Oceanul Pacific", "Oceanul Arctic"],
    corect: "Oceanul Pacific",
    explicatie: "Pacificul acoperă aproximativ o treime din suprafața Pământului. Este mai întins decât tot uscatul planetei la un loc."
  },
  {
    domeniu: "geografie",
    dificultate: "usor",
    intrebare: "Care este cel mai înalt munte din lume?",
    variante: ["K2", "Everest", "Kilimanjaro", "Mont Blanc"],
    corect: "Everest",
    explicatie: "Everestul are 8.849 de metri și se află la granița dintre Nepal și China. Prima ascensiune confirmată a fost făcută în 1953 de Edmund Hillary și Tenzing Norgay."
  },
  {
    domeniu: "geografie",
    dificultate: "usor",
    intrebare: "Care este cel mai înalt vârf din România?",
    variante: ["Negoiu", "Omu", "Pietrosul Rodnei", "Moldoveanu"],
    corect: "Moldoveanu",
    explicatie: "Vârful Moldoveanu are 2.544 de metri și se află în Munții Făgăraș. Pe locul al doilea este vecinul lui, Negoiu, cu 2.535 de metri."
  },
  {
    domeniu: "geografie",
    dificultate: "usor",
    intrebare: "Ce fluviu formează o deltă în România, înainte de a se vărsa în Marea Neagră?",
    variante: ["Prutul", "Dunărea", "Nistrul", "Siretul"],
    corect: "Dunărea",
    explicatie: "Delta Dunării este a doua deltă ca mărime din Europa, după cea a Volgăi. Din 1991 face parte din patrimoniul mondial UNESCO."
  },
  {
    domeniu: "geografie",
    dificultate: "usor",
    intrebare: "Care este cel mai mare deșert fierbinte din lume?",
    variante: ["Gobi", "Kalahari", "Atacama", "Sahara"],
    corect: "Sahara",
    explicatie: "Sahara are aproape suprafața Statelor Unite. Dacă punem la socoteală și deșerturile reci, cel mai mare deșert este Antarctica."
  },
  {
    domeniu: "geografie",
    dificultate: "usor",
    intrebare: "Care este cea mai mare țară din lume ca suprafață?",
    variante: ["Canada", "China", "Rusia", "SUA"],
    corect: "Rusia",
    explicatie: "Rusia se întinde pe 11 fusuri orare. Este de aproape două ori mai mare decât Canada, a doua țară ca suprafață."
  },
  {
    domeniu: "geografie",
    dificultate: "usor",
    intrebare: "Ce țară are forma unei cizme?",
    variante: ["Italia", "Grecia", "Portugalia", "Croația"],
    corect: "Italia",
    explicatie: "„Vârful” cizmei este regiunea Calabria. Insula Sicilia arată ca o minge pe care cizma tocmai o lovește."
  },
  {
    domeniu: "geografie",
    dificultate: "usor",
    intrebare: "Ce munți străbat România în formă de arc?",
    variante: ["Alpii", "Balcanii", "Carpații", "Pirineii"],
    corect: "Carpații",
    explicatie: "Aproximativ jumătate din lanțul Carpaților se află pe teritoriul României. Restul trece prin Ucraina, Polonia, Slovacia, Ungaria, Cehia, Austria și Serbia."
  },
  {
    domeniu: "geografie",
    dificultate: "usor",
    intrebare: "Ce țară are cea mai mare populație din lume?",
    variante: ["China", "SUA", "India", "Indonezia"],
    corect: "India",
    explicatie: "Potrivit estimărilor ONU, India a depășit China în 2023. Fiecare dintre cele două țări are peste 1,4 miliarde de locuitori."
  },
  {
    domeniu: "geografie",
    dificultate: "usor",
    intrebare: "Ce oraș este supranumit „Orașul Luminilor”?",
    variante: ["Roma", "Paris", "Viena", "Londra"],
    corect: "Paris",
    explicatie: "Porecla vine de la rolul Parisului în Epoca Luminilor, dar și de la faptul că a fost printre primele mari orașe cu străzi iluminate."
  },
  {
    domeniu: "geografie",
    dificultate: "usor",
    intrebare: "Care este cel mai mic stat din lume?",
    variante: ["Monaco", "San Marino", "Liechtenstein", "Vatican"],
    corect: "Vatican",
    explicatie: "Vaticanul are mai puțin de jumătate de kilometru pătrat și se află în interiorul orașului Roma. Monaco, al doilea cel mai mic stat, are aproximativ 2 km²."
  },
  {
    domeniu: "geografie",
    dificultate: "usor",
    intrebare: "Ce țară este numită „Țara Soarelui Răsare”?",
    variante: ["China", "Japonia", "Coreea de Sud", "Thailanda"],
    corect: "Japonia",
    explicatie: "Numele japonez al țării, Nihon sau Nippon, înseamnă „originea soarelui”. Privită din China, Japonia se află spre răsărit."
  },
  {
    domeniu: "geografie",
    dificultate: "usor",
    intrebare: "Care este capitala Canadei?",
    variante: ["Toronto", "Montreal", "Ottawa", "Vancouver"],
    corect: "Ottawa",
    explicatie: "Ottawa a fost aleasă capitală în 1857 de regina Victoria. Se află la granița dintre zona vorbitoare de engleză și cea vorbitoare de franceză."
  },
  {
    domeniu: "geografie",
    dificultate: "usor",
    intrebare: "Care este capitala Turciei?",
    variante: ["Istanbul", "Ankara", "Izmir", "Antalya"],
    corect: "Ankara",
    explicatie: "Ankara a devenit capitală în 1923, odată cu înființarea Republicii Turcia de către Mustafa Kemal Atatürk. Istanbulul a rămas cel mai mare oraș al țării."
  },
  {
    domeniu: "geografie",
    dificultate: "usor",
    intrebare: "Ce râu formează granița dintre România și Republica Moldova?",
    variante: ["Siretul", "Nistrul", "Mureșul", "Prutul"],
    corect: "Prutul",
    explicatie: "Aproape toată granița dintre cele două țări urmează cursul Prutului. Râul se varsă apoi în Dunăre, lângă Galați."
  },
  {
    domeniu: "geografie",
    dificultate: "usor",
    intrebare: "Ce canal leagă Oceanul Atlantic de Oceanul Pacific?",
    variante: ["Canalul Suez", "Canalul Panama", "Canalul Kiel", "Canalul Corint"],
    corect: "Canalul Panama",
    explicatie: "Canalul a fost inaugurat în 1914. Fără el, navele ar trebui să ocolească toată America de Sud."
  },
  {
    domeniu: "geografie",
    dificultate: "usor",
    intrebare: "Ce linie imaginară împarte Pământul în emisfera nordică și emisfera sudică?",
    variante: ["Meridianul Greenwich", "Tropicul Racului", "Ecuatorul", "Cercul Polar"],
    corect: "Ecuatorul",
    explicatie: "Ecuatorul are aproximativ 40.000 de kilometri lungime. Țara Ecuador își ia numele chiar de la el."
  },
  {
    domeniu: "geografie",
    dificultate: "usor",
    intrebare: "Prin ce oraș trece meridianul zero (meridianul Greenwich)?",
    variante: ["Paris", "Londra", "Roma", "Madrid"],
    corect: "Londra",
    explicatie: "Meridianul zero trece prin Observatorul Regal din Greenwich, un cartier al Londrei. A fost ales în 1884, la o conferință internațională de la Washington."
  },
  {
    domeniu: "geografie",
    dificultate: "usor",
    intrebare: "Ce două țări sunt despărțite de Munții Pirinei?",
    variante: ["Franța și Italia", "Spania și Portugalia", "Franța și Spania", "Elveția și Italia"],
    corect: "Franța și Spania",
    explicatie: "În Pirinei se află micul stat Andorra. Are doi conducători în același timp: președintele Franței și un episcop spaniol."
  },
  {
    domeniu: "geografie",
    dificultate: "usor",
    intrebare: "Care este cea mai mare insulă din lume?",
    variante: ["Groenlanda", "Madagascar", "Borneo", "Marea Britanie"],
    corect: "Groenlanda",
    explicatie: "Australia este mai mare, dar este considerată continent. Groenlanda aparține Danemarcei, iar cea mai mare parte a ei este acoperită de gheață."
  },

  // ---------- GEOGRAFIE: MEDIU (48) ----------
  {
    domeniu: "geografie",
    dificultate: "mediu",
    intrebare: "Care este capitala Australiei?",
    variante: ["Sydney", "Melbourne", "Canberra", "Perth"],
    corect: "Canberra",
    explicatie: "Canberra a fost construită special ca să fie capitală. A fost un compromis între marile orașe rivale Sydney și Melbourne."
  },
  {
    domeniu: "geografie",
    dificultate: "mediu",
    intrebare: "Care este cel mai lung fluviu din Europa?",
    variante: ["Dunărea", "Volga", "Rinul", "Niprul"],
    corect: "Volga",
    explicatie: "Volga are aproximativ 3.500 de kilometri, curge numai prin Rusia și se varsă în Marea Caspică. Dunărea este al doilea fluviu ca lungime din Europa."
  },
  {
    domeniu: "geografie",
    dificultate: "mediu",
    intrebare: "Care este cel mai mare lac din România?",
    variante: ["Lacul Snagov", "Lacul Razim", "Lacul Sfânta Ana", "Lacul Techirghiol"],
    corect: "Lacul Razim",
    explicatie: "Razim este, de fapt, o lagună aflată în sudul Deltei Dunării. Sfânta Ana este singurul lac vulcanic păstrat în România."
  },
  {
    domeniu: "geografie",
    dificultate: "mediu",
    intrebare: "Pe ce continent se află cea mai mare parte a teritoriului Rusiei?",
    variante: ["Europa", "Asia", "Pe ambele în mod egal", "America de Nord"],
    corect: "Asia",
    explicatie: "Aproximativ trei sferturi din teritoriul Rusiei se află în Asia. Totuși, majoritatea populației trăiește în partea europeană."
  },
  {
    domeniu: "geografie",
    dificultate: "mediu",
    intrebare: "Care este cel mai înalt munte din Africa?",
    variante: ["Muntele Kenya", "Kilimanjaro", "Masivul Ruwenzori", "Muntele Cameroon"],
    corect: "Kilimanjaro",
    explicatie: "Kilimanjaro, din Tanzania, are 5.895 de metri și este un vulcan inactiv. Deși e aproape de Ecuator, pe vârful lui există ghețari."
  },
  {
    domeniu: "geografie",
    dificultate: "mediu",
    intrebare: "Ce canal leagă Marea Mediterană de Marea Roșie?",
    variante: ["Canalul Panama", "Canalul Corint", "Canalul Suez", "Canalul Kiel"],
    corect: "Canalul Suez",
    explicatie: "Canalul Suez a fost inaugurat în 1869. Datorită lui, navele pot merge din Europa în Asia fără să ocolească Africa."
  },
  {
    domeniu: "geografie",
    dificultate: "mediu",
    intrebare: "Ce oraș din România este traversat de canalul Bega?",
    variante: ["Arad", "Oradea", "Timișoara", "Craiova"],
    corect: "Timișoara",
    explicatie: "Canalul Bega a fost construit în secolul al XVIII-lea, pe vremea administrației habsburgice. În 1884, Timișoara a fost unul dintre primele orașe din Europa cu străzi iluminate electric."
  },
  {
    domeniu: "geografie",
    dificultate: "mediu",
    intrebare: "Care este cea mai mare țară din Africa ca suprafață?",
    variante: ["Egipt", "Nigeria", "Republica Democratică Congo", "Algeria"],
    corect: "Algeria",
    explicatie: "Algeria a devenit cea mai mare țară a Africii în 2011, după ce Sudanul s-a împărțit în două. Peste 80% din teritoriul ei este acoperit de Sahara."
  },
  {
    domeniu: "geografie",
    dificultate: "mediu",
    intrebare: "Ce țară are cea mai lungă linie de coastă din lume?",
    variante: ["Rusia", "Norvegia", "Canada", "Australia"],
    corect: "Canada",
    explicatie: "Coasta Canadei măsoară peste 200.000 de kilometri. Lungimea uriașă vine mai ales de la miile de insule din nordul țării."
  },
  {
    domeniu: "geografie",
    dificultate: "mediu",
    intrebare: "Ce strâmtoare desparte Europa de Africa?",
    variante: ["Strâmtoarea Gibraltar", "Bosforul", "Dardanelele", "Strâmtoarea Messina"],
    corect: "Strâmtoarea Gibraltar",
    explicatie: "În cel mai îngust punct, strâmtoarea are doar aproximativ 14 kilometri. Pe vreme bună, din sudul Spaniei se vede coasta Marocului."
  },
  {
    domeniu: "geografie",
    dificultate: "mediu",
    intrebare: "Ce strâmtoare traversează orașul Istanbul, despărțind Europa de Asia?",
    variante: ["Dardanelele", "Bosforul", "Strâmtoarea Gibraltar", "Strâmtoarea Otranto"],
    corect: "Bosforul",
    explicatie: "Bosforul leagă Marea Neagră de Marea Marmara. Istanbulul este unul dintre puținele orașe mari așezate pe două continente."
  },
  {
    domeniu: "geografie",
    dificultate: "mediu",
    intrebare: "Unde se află cel mai adânc punct cunoscut al oceanelor?",
    variante: ["Groapa Puerto Rico", "Groapa Tonga", "Groapa Java", "Groapa Marianelor"],
    corect: "Groapa Marianelor",
    explicatie: "Abisul Challenger, din Groapa Marianelor, are aproape 11.000 de metri adâncime. Dacă Everestul ar fi pus acolo, vârful lui ar rămâne la peste 2 kilometri sub apă."
  },
  {
    domeniu: "geografie",
    dificultate: "mediu",
    intrebare: "Unde se află cel mai jos punct de pe uscat?",
    variante: ["Valea Morții", "Marea Moartă", "Marea Caspică", "Depresiunea Qattara"],
    corect: "Marea Moartă",
    explicatie: "Țărmul Mării Moarte se află la peste 400 de metri sub nivelul mării. Apa ei e atât de sărată încât oamenii plutesc fără niciun efort."
  },
  {
    domeniu: "geografie",
    dificultate: "mediu",
    intrebare: "Care este cel mai mare lac din lume ca suprafață?",
    variante: ["Lacul Superior", "Lacul Victoria", "Marea Caspică", "Lacul Baikal"],
    corect: "Marea Caspică",
    explicatie: "Deși i se spune „mare”, Caspica este un lac închis, fără legătură cu oceanul. Lacul Superior, din America de Nord, este cel mai mare lac cu apă dulce ca suprafață."
  },
  {
    domeniu: "geografie",
    dificultate: "mediu",
    intrebare: "Bratislava este capitala cărei țări?",
    variante: ["Slovenia", "Slovacia", "Cehia", "Croația"],
    corect: "Slovacia",
    explicatie: "Bratislava este singura capitală din lume care se învecinează cu alte două state: Austria și Ungaria. Este și una dintre cele patru capitale prin care trece Dunărea."
  },
  {
    domeniu: "geografie",
    dificultate: "mediu",
    intrebare: "Ce munți marchează, în Rusia, granița dintre Europa și Asia?",
    variante: ["Munții Caucaz", "Munții Altai", "Munții Urali", "Munții Carpați"],
    corect: "Munții Urali",
    explicatie: "Uralii se întind pe aproximativ 2.500 de kilometri, de la nord la sud. Sunt munți foarte vechi, tociți de vreme, de aceea nu sunt foarte înalți."
  },
  {
    domeniu: "geografie",
    dificultate: "mediu",
    intrebare: "Ce râu trece prin Paris?",
    variante: ["Loara", "Ronul", "Sena", "Rinul"],
    corect: "Sena",
    explicatie: "Pe malurile Senei se află multe dintre monumentele Parisului, de la Notre-Dame la Luvru. Malurile râului din centrul orașului sunt în patrimoniul UNESCO."
  },
  {
    domeniu: "geografie",
    dificultate: "mediu",
    intrebare: "Ce fluviu străbate cele mai multe țări din lume?",
    variante: ["Dunărea", "Nilul", "Rinul", "Amazonul"],
    corect: "Dunărea",
    explicatie: "Dunărea trece prin 10 țări. Străbate și patru capitale: Viena, Bratislava, Budapesta și Belgrad."
  },
  {
    domeniu: "geografie",
    dificultate: "mediu",
    intrebare: "Care este cel mai mare port al României?",
    variante: ["Galați", "Brăila", "Mangalia", "Constanța"],
    corect: "Constanța",
    explicatie: "Constanța este cel mai mare port de la Marea Neagră. În Antichitate orașul se numea Tomis, iar acolo a trăit în exil poetul roman Ovidiu."
  },
  {
    domeniu: "geografie",
    dificultate: "mediu",
    intrebare: "Ce munți traversează drumul Transfăgărășan?",
    variante: ["Munții Bucegi", "Munții Făgăraș", "Munții Parâng", "Munții Retezat"],
    corect: "Munții Făgăraș",
    explicatie: "Drumul a fost construit între 1970 și 1974. Urcă până la aproximativ 2.040 de metri, lângă Lacul Bâlea."
  },
  {
    domeniu: "geografie",
    dificultate: "mediu",
    intrebare: "Care este primul parc național înființat în România?",
    variante: ["Retezat", "Piatra Craiului", "Ceahlău", "Bucegi"],
    corect: "Retezat",
    explicatie: "Parcul Național Retezat a fost înființat în 1935. Aici se află lacul Bucura, cel mai mare lac glaciar din România."
  },
  {
    domeniu: "geografie",
    dificultate: "mediu",
    intrebare: "Pe ce continent se află deșertul Atacama, unul dintre cele mai uscate locuri de pe Pământ?",
    variante: ["Africa", "Asia", "Australia", "America de Sud"],
    corect: "America de Sud",
    explicatie: "Atacama se află în Chile, iar în unele zone ale lui aproape că nu plouă niciodată. Solul seamănă atât de mult cu cel de pe Marte încât NASA își testează aici roboții."
  },
  {
    domeniu: "geografie",
    dificultate: "mediu",
    intrebare: "Ce țară este formată din peste 17.000 de insule?",
    variante: ["Filipine", "Indonezia", "Japonia", "Grecia"],
    corect: "Indonezia",
    explicatie: "Indonezia este cea mai mare țară formată numai din insule. Pe Java, insula ei principală, trăiește mai mult de jumătate din populație."
  },
  {
    domeniu: "geografie",
    dificultate: "mediu",
    intrebare: "Care este cel mai lung lanț muntos de pe uscat?",
    variante: ["Himalaya", "Munții Stâncoși", "Anzii", "Munții Urali"],
    corect: "Anzii",
    explicatie: "Anzii se întind pe aproximativ 7.000 de kilometri, de-a lungul întregii coaste de vest a Americii de Sud. Himalaya este mai înaltă, dar mult mai scurtă."
  },
  {
    domeniu: "geografie",
    dificultate: "mediu",
    intrebare: "Reykjavik este capitala cărei țări?",
    variante: ["Norvegia", "Islanda", "Finlanda", "Danemarca"],
    corect: "Islanda",
    explicatie: "Reykjavik este cea mai nordică capitală a unui stat independent. Mare parte din casele orașului sunt încălzite cu apă caldă din izvoare geotermale."
  },
  {
    domeniu: "geografie",
    dificultate: "mediu",
    intrebare: "Care este cel mai populat continent?",
    variante: ["Africa", "Europa", "America de Nord", "Asia"],
    corect: "Asia",
    explicatie: "În Asia trăiește aproximativ 60% din populația lumii. Africa, al doilea continent ca populație, are cea mai rapidă creștere."
  },
  {
    domeniu: "geografie",
    dificultate: "mediu",
    intrebare: "Care este cel mai lung râu care izvorăște și se varsă pe teritoriul României?",
    variante: ["Oltul", "Mureșul", "Siretul", "Jiul"],
    corect: "Oltul",
    explicatie: "Oltul izvorăște din Munții Hășmaș și se varsă în Dunăre lângă Turnu Măgurele. Mureșul este mai lung, dar se varsă în Tisa, pe teritoriul Ungariei, iar Siretul izvorăște din Ucraina."
  },
  {
    domeniu: "geografie",
    dificultate: "mediu",
    intrebare: "Ce râu traversează orașul Cluj-Napoca?",
    variante: ["Mureșul", "Someșul Mic", "Crișul Repede", "Arieșul"],
    corect: "Someșul Mic",
    explicatie: "Crișul Repede trece prin Oradea, iar Mureșul prin Târgu Mureș și Arad. Arieșul trece prin Turda, nu departe de Cluj."
  },
  {
    domeniu: "geografie",
    dificultate: "mediu",
    intrebare: "Pe ce râu se află orașul Bacău?",
    variante: ["Trotuș", "Moldova", "Bistrița", "Bârlad"],
    corect: "Bistrița",
    explicatie: "La câțiva kilometri de oraș, Bistrița se varsă în Siret. Bacăul are și un aeroport, care poartă numele compozitorului George Enescu."
  },
  {
    domeniu: "geografie",
    dificultate: "mediu",
    intrebare: "Ce lac de acumulare se află pe Bistrița, la poalele Ceahlăului?",
    variante: ["Lacul Vidraru", "Lacul Colibița", "Lacul Siriu", "Lacul Izvorul Muntelui"],
    corect: "Lacul Izvorul Muntelui",
    explicatie: "Lacul s-a format după construirea barajului de la Bicaz, terminat în 1960. A fost una dintre primele mari hidrocentrale din România."
  },
  {
    domeniu: "geografie",
    dificultate: "mediu",
    intrebare: "Care este cel mai mare lac de acumulare din România?",
    variante: ["Porțile de Fier", "Izvorul Muntelui", "Vidraru", "Stânca-Costești"],
    corect: "Porțile de Fier",
    explicatie: "Lacul s-a format în urma barajului construit împreună de România și Iugoslavia, terminat în 1972. Sub ape a rămas insula Ada Kaleh, locuită de o comunitate turcă."
  },
  {
    domeniu: "geografie",
    dificultate: "mediu",
    intrebare: "Ce lac de acumulare se află pe Argeș, aproape de Cetatea Poenari, pe drumul Transfăgărășanului?",
    variante: ["Lacul Bâlea", "Lacul Vidraru", "Lacul Izvorul Muntelui", "Lacul Siriu"],
    corect: "Lacul Vidraru",
    explicatie: "Barajul Vidraru a fost terminat în 1966 și are 166 de metri înălțime. Lacul Bâlea, tot de pe Transfăgărășan, este un lac glaciar natural."
  },
  {
    domeniu: "geografie",
    dificultate: "mediu",
    intrebare: "Ce strâmtoare desparte Asia de America de Nord?",
    variante: ["Strâmtoarea Magellan", "Strâmtoarea Hormuz", "Strâmtoarea Bering", "Strâmtoarea Malacca"],
    corect: "Strâmtoarea Bering",
    explicatie: "În cel mai îngust punct are aproximativ 82 de kilometri. În epoca glaciară, aici exista o fâșie de uscat pe care primii oameni au ajuns în America."
  },
  {
    domeniu: "geografie",
    dificultate: "mediu",
    intrebare: "Prin ce strâmtoare trece o mare parte din petrolul exportat din Golful Persic?",
    variante: ["Strâmtoarea Bab el-Mandeb", "Strâmtoarea Malacca", "Bosforul", "Strâmtoarea Hormuz"],
    corect: "Strâmtoarea Hormuz",
    explicatie: "Strâmtoarea se află între Iran și Oman. Prin ea trece aproximativ o cincime din petrolul consumat în lume."
  },
  {
    domeniu: "geografie",
    dificultate: "mediu",
    intrebare: "Care este cea mai mare țară din America de Sud?",
    variante: ["Brazilia", "Argentina", "Peru", "Columbia"],
    corect: "Brazilia",
    explicatie: "Brazilia ocupă aproape jumătate din continent. Se învecinează cu toate țările sud-americane, cu excepția Chile și a Ecuadorului."
  },
  {
    domeniu: "geografie",
    dificultate: "mediu",
    intrebare: "Care este capitala Braziliei?",
    variante: ["Rio de Janeiro", "Brasília", "São Paulo", "Salvador"],
    corect: "Brasília",
    explicatie: "Brasília a fost construită special ca să fie capitală și a fost inaugurată în 1960. Văzut de sus, planul orașului seamănă cu un avion sau cu o pasăre."
  },
  {
    domeniu: "geografie",
    dificultate: "mediu",
    intrebare: "Ce oraș are rolul de capitală a Elveției?",
    variante: ["Zürich", "Geneva", "Berna", "Basel"],
    corect: "Berna",
    explicatie: "Oficial, Elveția nu are o capitală, iar Berna este numită „oraș federal”. Țara are patru limbi oficiale: germana, franceza, italiana și romanșa."
  },
  {
    domeniu: "geografie",
    dificultate: "mediu",
    intrebare: "Care este capitala Noii Zeelande?",
    variante: ["Auckland", "Christchurch", "Dunedin", "Wellington"],
    corect: "Wellington",
    explicatie: "Wellington este cea mai sudică capitală a unui stat independent. Auckland este cel mai mare oraș al țării."
  },
  {
    domeniu: "geografie",
    dificultate: "mediu",
    intrebare: "Care este capitala Marocului?",
    variante: ["Rabat", "Casablanca", "Marrakech", "Fes"],
    corect: "Rabat",
    explicatie: "Rabat se află pe coasta Atlanticului. Casablanca este cel mai mare oraș și principalul port al țării."
  },
  {
    domeniu: "geografie",
    dificultate: "mediu",
    intrebare: "Care este capitala Vietnamului?",
    variante: ["Ho Chi Minh", "Hanoi", "Da Nang", "Hue"],
    corect: "Hanoi",
    explicatie: "Orașul Ho Chi Minh, fostul Saigon, este cel mai mare oraș al țării. Hue a fost capitala imperială a Vietnamului până în 1945."
  },
  {
    domeniu: "geografie",
    dificultate: "mediu",
    intrebare: "Care este cel mai înalt vârf din Munții Caucaz, considerat adesea cel mai înalt din Europa?",
    variante: ["Mont Blanc", "Kazbek", "Elbrus", "Ararat"],
    corect: "Elbrus",
    explicatie: "Elbrus este un vulcan inactiv, cu 5.642 de metri. Mont Blanc, cu aproximativ 4.800 de metri, este cel mai înalt vârf din Alpi."
  },
  {
    domeniu: "geografie",
    dificultate: "mediu",
    intrebare: "Ce deșert acoperă o mare parte din Mongolia și nordul Chinei?",
    variante: ["Taklamakan", "Karakum", "Thar", "Gobi"],
    corect: "Gobi",
    explicatie: "Gobi este un deșert rece, unde iarna temperaturile pot coborî sub -40 °C. Aici au fost găsite, în anii 1920, primele ouă fosile recunoscute ca fiind de dinozaur."
  },
  {
    domeniu: "geografie",
    dificultate: "mediu",
    intrebare: "Care este cea mai mare insulă din Marea Mediterană?",
    variante: ["Sicilia", "Sardinia", "Cipru", "Corsica"],
    corect: "Sicilia",
    explicatie: "Pe Sicilia se află Etna, cel mai înalt vulcan activ din Europa."
  },
  {
    domeniu: "geografie",
    dificultate: "mediu",
    intrebare: "Care este cel mai lung fluviu din Asia?",
    variante: ["Fluviul Galben", "Yangtze", "Mekong", "Gange"],
    corect: "Yangtze",
    explicatie: "Pe Yangtze se află barajul Trei Defileuri, cea mai mare hidrocentrală din lume. Fluviul Galben este al doilea ca lungime din China."
  },
  {
    domeniu: "geografie",
    dificultate: "mediu",
    intrebare: "Care este al doilea ocean ca mărime al planetei?",
    variante: ["Oceanul Indian", "Oceanul Arctic", "Oceanul Atlantic", "Oceanul Sudic"],
    corect: "Oceanul Atlantic",
    explicatie: "Atlanticul se lărgește cu câțiva centimetri pe an, pentru că plăcile tectonice de pe cele două maluri se îndepărtează."
  },
  {
    domeniu: "geografie",
    dificultate: "mediu",
    intrebare: "Ce lanț muntos s-a format prin ciocnirea plăcii Indiei cu placa Eurasiei?",
    variante: ["Munții Urali", "Alpii", "Munții Altai", "Himalaya"],
    corect: "Himalaya",
    explicatie: "Ciocnirea continuă și astăzi, așa că Himalaya încă se înalță cu câțiva milimetri pe an. Alpii s-au format tot printr-o ciocnire, dar între placa Africii și cea a Eurasiei."
  },
  {
    domeniu: "geografie",
    dificultate: "mediu",
    intrebare: "Ce fenomen face ca apa mării să urce și să coboare, de obicei de două ori pe zi?",
    variante: ["Mareele", "Curenții oceanici", "Valurile de tsunami", "Vântul de mare"],
    corect: "Mareele",
    explicatie: "Mareele sunt produse mai ales de atracția Lunii. În Marea Neagră sunt atât de mici încât aproape nu se observă."
  },
  {
    domeniu: "geografie",
    dificultate: "mediu",
    intrebare: "Care este cel mai înalt munte din America de Sud?",
    variante: ["Chimborazo", "Aconcagua", "Huascarán", "Ojos del Salado"],
    corect: "Aconcagua",
    explicatie: "Aconcagua, din Argentina, are aproape 7.000 de metri. Este cel mai înalt munte din afara Asiei."
  },

  // ---------- GEOGRAFIE: GREU (32) ----------
  {
    domeniu: "geografie",
    dificultate: "greu",
    intrebare: "Ce țară are cele mai multe fusuri orare, dacă punem la socoteală și teritoriile de peste mări?",
    variante: ["Rusia", "SUA", "China", "Franța"],
    corect: "Franța",
    explicatie: "Franța are 12 fusuri orare, datorită teritoriilor de peste mări, precum Polinezia Franceză sau Guyana Franceză. Rusia are 11, iar China folosește o singură oră pentru toată țara."
  },
  {
    domeniu: "geografie",
    dificultate: "greu",
    intrebare: "Care este cel mai adânc lac din lume?",
    variante: ["Lacul Tanganyika", "Lacul Baikal", "Marea Caspică", "Lacul Superior"],
    corect: "Lacul Baikal",
    explicatie: "Lacul Baikal, din Siberia, are peste 1.600 de metri adâncime. Conține aproximativ o cincime din toată apa dulce de suprafață a planetei."
  },
  {
    domeniu: "geografie",
    dificultate: "greu",
    intrebare: "Ce țară din America de Sud nu are ieșire la mare și are două capitale?",
    variante: ["Paraguay", "Ecuador", "Bolivia", "Peru"],
    corect: "Bolivia",
    explicatie: "Sucre este capitala oficială, iar La Paz este sediul guvernului. La Paz se află la aproximativ 3.600 de metri, fiind cel mai înalt sediu de guvern din lume."
  },
  {
    domeniu: "geografie",
    dificultate: "greu",
    intrebare: "Ce peșteră din Munții Apuseni adăpostește unul dintre cei mai mari ghețari subterani din Europa?",
    variante: ["Peștera Urșilor", "Peștera Muierilor", "Peștera Scărișoara", "Peștera Polovragi"],
    corect: "Peștera Scărișoara",
    explicatie: "Cele mai vechi straturi de gheață din Peștera Scărișoara au peste 10.000 de ani. Cercetătorii le studiază ca să afle cum era clima în trecut."
  },
  {
    domeniu: "geografie",
    dificultate: "greu",
    intrebare: "Care este cel mai mare județ al României ca suprafață?",
    variante: ["Suceava", "Timiș", "Constanța", "Bihor"],
    corect: "Timiș",
    explicatie: "Timișul depășește la limită Suceava, al doilea județ ca suprafață. Diferența dintre ele este de doar aproximativ 150 de kilometri pătrați."
  },
  {
    domeniu: "geografie",
    dificultate: "greu",
    intrebare: "Care este cel mai estic oraș al României?",
    variante: ["Tulcea", "Sulina", "Constanța", "Mangalia"],
    corect: "Sulina",
    explicatie: "Sulina se află acolo unde brațul cu același nume al Dunării se varsă în Marea Neagră. Orașul nu are legătură rutieră și poate fi atins doar pe apă."
  },
  {
    domeniu: "geografie",
    dificultate: "greu",
    intrebare: "Ce râu se varsă în Dunăre la Belgrad?",
    variante: ["Drava", "Tisa", "Sava", "Morava"],
    corect: "Sava",
    explicatie: "Cetatea Belgradului se află chiar pe promontoriul de la confluența celor două ape. Numele orașului înseamnă „orașul alb”."
  },
  {
    domeniu: "geografie",
    dificultate: "greu",
    intrebare: "Cum se numește cea mai îngustă porțiune a Dunării, din defileul de la Porțile de Fier?",
    variante: ["Cheile Bicazului", "Cheile Turzii", "Cazanele Dunării", "Clisura Nerei"],
    corect: "Cazanele Dunării",
    explicatie: "La Cazanele Mari, fluviul se strânge la aproximativ 150 de metri lățime. Pe malul românesc se află chipul lui Decebal sculptat în stâncă, înalt de 55 de metri."
  },
  {
    domeniu: "geografie",
    dificultate: "greu",
    intrebare: "Care este cel mai mare fluviu din lume după cantitatea de apă pe care o transportă?",
    variante: ["Nilul", "Yangtze", "Mississippi", "Amazonul"],
    corect: "Amazonul",
    explicatie: "Amazonul aduce în ocean aproximativ o cincime din toată apa dulce vărsată de râurile lumii. La vărsare este atât de lat încât un mal nu se vede de pe celălalt."
  },
  {
    domeniu: "geografie",
    dificultate: "greu",
    intrebare: "Ce țară are un drapel care nu are patru laturi?",
    variante: ["Bhutan", "Nepal", "Elveția", "Vatican"],
    corect: "Nepal",
    explicatie: "Drapelul Nepalului este format din două triunghiuri suprapuse, care amintesc de vârfurile Himalayei. Drapelele Elveției și Vaticanului sunt pătrate."
  },
  {
    domeniu: "geografie",
    dificultate: "greu",
    intrebare: "Care este al doilea cel mai înalt munte din lume?",
    variante: ["K2", "Kangchenjunga", "Lhotse", "Makalu"],
    corect: "K2",
    explicatie: "K2 are 8.611 metri și se află la granița dintre Pakistan și China. Este considerat mult mai greu și mai periculos de urcat decât Everestul."
  },
  {
    domeniu: "geografie",
    dificultate: "greu",
    intrebare: "Cum se numește capul din extremitatea sudică a Americii de Sud, temut de marinari?",
    variante: ["Capul Bunei Speranțe", "Capul Verde", "Capul Horn", "Capul Nord"],
    corect: "Capul Horn",
    explicatie: "Înainte de Canalul Panama, navele care mergeau din Atlantic în Pacific trebuiau să ocolească acest cap. Vânturile și valurile de acolo sunt printre cele mai periculoase din lume."
  },
  {
    domeniu: "geografie",
    dificultate: "greu",
    intrebare: "În ce țară europeană aproximativ un sfert din teritoriu se află sub nivelul mării?",
    variante: ["Belgia", "Danemarca", "Țările de Jos", "Germania"],
    corect: "Țările de Jos",
    explicatie: "Olandezii au câștigat pământ de la mare cu ajutorul digurilor. Celebrele mori de vânt erau folosite, printre altele, ca să pompeze apa de pe câmpuri."
  },
  {
    domeniu: "geografie",
    dificultate: "greu",
    intrebare: "Care este cel mai înalt oraș din România?",
    variante: ["Sinaia", "Predeal", "Bușteni", "Vatra Dornei"],
    corect: "Predeal",
    explicatie: "Predealul se află la peste 1.000 de metri altitudine. Orașul stă chiar în trecătoarea dintre Valea Prahovei și Țara Bârsei."
  },
  {
    domeniu: "geografie",
    dificultate: "greu",
    intrebare: "În ce munți din România se află cel mai mare crater vulcanic din țară?",
    variante: ["Munții Harghita", "Munții Gutâi", "Munții Călimani", "Munții Ciomatu"],
    corect: "Munții Călimani",
    explicatie: "Craterul are aproximativ 10 kilometri în diametru. Munții Călimani fac parte din cel mai lung lanț vulcanic din Europa, care se întinde din Oaș până în Harghita."
  },
  {
    domeniu: "geografie",
    dificultate: "greu",
    intrebare: "Care este cel mai sudic oraș al României?",
    variante: ["Giurgiu", "Turnu Măgurele", "Calafat", "Zimnicea"],
    corect: "Zimnicea",
    explicatie: "Zimnicea se află pe malul Dunării, în județul Teleorman. Cel mai nordic oraș al țării este Sighetu Marmației."
  },
  {
    domeniu: "geografie",
    dificultate: "greu",
    intrebare: "În ce munți se află cel mai înalt vârf din Carpații Orientali?",
    variante: ["Munții Rodnei", "Munții Călimani", "Munții Ceahlău", "Munții Maramureșului"],
    corect: "Munții Rodnei",
    explicatie: "Vârful Pietrosul Rodnei are 2.303 metri. În munții Rodnei se văd încă urmele ghețarilor din ultima glaciațiune."
  },
  {
    domeniu: "geografie",
    dificultate: "greu",
    intrebare: "Ce depresiune din Carpați este cunoscută și sub numele de Țara Bârsei?",
    variante: ["Depresiunea Făgărașului", "Depresiunea Brașovului", "Depresiunea Hațegului", "Depresiunea Maramureșului"],
    corect: "Depresiunea Brașovului",
    explicatie: "Zona a fost colonizată la începutul secolului al XIII-lea de cavalerii teutoni. Numele vine de la râul Bârsa, care o străbate."
  },
  {
    domeniu: "geografie",
    dificultate: "greu",
    intrebare: "În ce zonă din România au fost găsite fosilele „dinozaurilor pitici”, studiate de baronul Franz Nopcsa?",
    variante: ["Țara Bârsei", "Dobrogea", "Țara Hațegului", "Maramureș"],
    corect: "Țara Hațegului",
    explicatie: "Pe vremea dinozaurilor, zona era o insulă, iar animalele de acolo au devenit mai mici decât rudele lor de pe continent. Azi aici se află un geoparc UNESCO."
  },
  {
    domeniu: "geografie",
    dificultate: "greu",
    intrebare: "Ce lac sărat din Dobrogea este cunoscut pentru nămolul folosit în tratamente?",
    variante: ["Lacul Siutghiol", "Lacul Razim", "Lacul Babadag", "Lacul Techirghiol"],
    corect: "Lacul Techirghiol",
    explicatie: "Apa lacului este de câteva ori mai sărată decât cea a Mării Negre. Nămolul lui este folosit mai ales pentru tratarea afecțiunilor reumatice."
  },
  {
    domeniu: "geografie",
    dificultate: "greu",
    intrebare: "Ce țară este traversată atât de Ecuator, cât și de Tropicul Capricornului?",
    variante: ["Brazilia", "Columbia", "Peru", "Indonezia"],
    corect: "Brazilia",
    explicatie: "Brazilia este singura țară prin care trec ambele linii. Ecuatorul trece prin apropierea gurii de vărsare a Amazonului."
  },
  {
    domeniu: "geografie",
    dificultate: "greu",
    intrebare: "Care este cel mai mare lac din Africa?",
    variante: ["Lacul Tanganyika", "Lacul Victoria", "Lacul Malawi", "Lacul Ciad"],
    corect: "Lacul Victoria",
    explicatie: "Lacul Victoria este împărțit între Uganda, Kenya și Tanzania. Este considerat sursa principală a Nilului Alb."
  },
  {
    domeniu: "geografie",
    dificultate: "greu",
    intrebare: "Pe ce fluviu se află Cascada Victoria?",
    variante: ["Congo", "Nil", "Zambezi", "Limpopo"],
    corect: "Zambezi",
    explicatie: "Cascada se află la granița dintre Zambia și Zimbabwe. Localnicii o numesc „Fumul care tună”, din cauza norului de stropi care se vede de departe."
  },
  {
    domeniu: "geografie",
    dificultate: "greu",
    intrebare: "Care este cea mai înaltă cascadă din lume?",
    variante: ["Niagara", "Iguazú", "Cascada Victoria", "Salto Ángel"],
    corect: "Salto Ángel",
    explicatie: "Apa cade aproape 1.000 de metri, de pe un platou din Venezuela. Cascada poartă numele pilotului american Jimmie Angel, care a zburat deasupra ei în anii 1930."
  },
  {
    domeniu: "geografie",
    dificultate: "greu",
    intrebare: "Ce țară se află în întregime în interiorul Africii de Sud?",
    variante: ["Lesotho", "Eswatini", "Botswana", "Namibia"],
    corect: "Lesotho",
    explicatie: "Lesotho este și singurul stat independent aflat în întregime la peste 1.000 de metri altitudine. Eswatini are graniță și cu Mozambicul."
  },
  {
    domeniu: "geografie",
    dificultate: "greu",
    intrebare: "Care este cel mai mic stat independent din America de Sud?",
    variante: ["Uruguay", "Suriname", "Guyana", "Paraguay"],
    corect: "Suriname",
    explicatie: "Suriname a fost colonie olandeză, iar limba oficială este neerlandeza. Guyana Franceză, mai mică, nu este stat independent, ci face parte din Franța."
  },
  {
    domeniu: "geografie",
    dificultate: "greu",
    intrebare: "Ce munte este cel mai înalt din lume dacă îl măsurăm de la baza aflată pe fundul oceanului?",
    variante: ["Everest", "Kilimanjaro", "Mauna Kea", "Elbrus"],
    corect: "Mauna Kea",
    explicatie: "Mauna Kea, din Hawaii, are peste 10.000 de metri de la bază, dar doar aproximativ 4.200 de metri deasupra nivelului mării."
  },
  {
    domeniu: "geografie",
    dificultate: "greu",
    intrebare: "Ce linie imaginară urmează, în linii mari, meridianul de 180°?",
    variante: ["Ecuatorul", "Tropicul Capricornului", "Meridianul Greenwich", "Linia internațională de schimbare a datei"],
    corect: "Linia internațională de schimbare a datei",
    explicatie: "Când o traversezi spre vest, sari peste o zi din calendar, iar spre est retrăiești aceeași zi. Linia face ocoluri, ca să nu împartă aceeași țară în două date."
  },
  {
    domeniu: "geografie",
    dificultate: "greu",
    intrebare: "Ce fluviu izvorăște din Alpii elvețieni și se varsă în Marea Nordului, prin Țările de Jos?",
    variante: ["Rinul", "Elba", "Ronul", "Meuse"],
    corect: "Rinul",
    explicatie: "La vărsarea Rinului se află Rotterdam, cel mai mare port din Europa. Ronul izvorăște tot din Elveția, dar curge spre Marea Mediterană."
  },
  {
    domeniu: "geografie",
    dificultate: "greu",
    intrebare: "Care este cel mai întins podiș din România, aflat în estul țării, între Siret și Prut?",
    variante: ["Podișul Transilvaniei", "Podișul Moldovei", "Podișul Getic", "Podișul Dobrogei"],
    corect: "Podișul Moldovei",
    explicatie: "Printre subunitățile lui se numără Podișul Sucevei, Câmpia Moldovei și Podișul Bârladului."
  },
  {
    domeniu: "geografie",
    dificultate: "greu",
    intrebare: "Cum se numește vântul rece și uscat care bate iarna în Moldova și în Bărăgan, dinspre nord-est?",
    variante: ["Austrul", "Foehnul", "Crivățul", "Băltărețul"],
    corect: "Crivățul",
    explicatie: "Crivățul aduce viscol și geruri. Austrul este un vânt uscat care bate dinspre vest și sud-vest, mai ales în Oltenia și Muntenia."
  },
  {
    domeniu: "geografie",
    dificultate: "greu",
    intrebare: "În ce județ se află cea mai mare parte a Deltei Dunării?",
    variante: ["Constanța", "Galați", "Brăila", "Tulcea"],
    corect: "Tulcea",
    explicatie: "Peste 80% din Delta Dunării se află în România, iar restul în Ucraina. Reședința județului, Tulcea, este numită „poarta Deltei”."
  },

  // =======================================================
  // AVIAȚIE (100 de întrebări)
  // =======================================================

  // ---------- AVIAȚIE: UȘOR (20) ----------
  {
    domeniu: "aviatie",
    dificultate: "usor",
    intrebare: "Cine a realizat, în 1903, primul zbor controlat cu un avion cu motor?",
    variante: ["Frații Montgolfier", "Frații Wright", "Louis Blériot", "Alberto Santos-Dumont"],
    corect: "Frații Wright",
    explicatie: "Zborul de pe 17 decembrie 1903, de la Kitty Hawk, a durat 12 secunde și a acoperit circa 37 de metri. Distanța e mai mică decât anvergura aripilor unui Boeing 747."
  },
  {
    domeniu: "aviatie",
    dificultate: "usor",
    intrebare: "Ce pionier român al aviației dă numele aeroportului de la Otopeni?",
    variante: ["Aurel Vlaicu", "Traian Vuia", "Henri Coandă", "Mihail Kogălniceanu"],
    corect: "Henri Coandă",
    explicatie: "Aeroportul Internațional Henri Coandă este cel mai aglomerat aeroport din România. Coandă a fost unul dintre pionierii aviației și ai aerodinamicii."
  },
  {
    domeniu: "aviatie",
    dificultate: "usor",
    intrebare: "Ce instrument arată înălțimea la care zboară avionul?",
    variante: ["Vitezometrul", "Busola", "Variometrul", "Altimetrul"],
    corect: "Altimetrul",
    explicatie: "Altimetrul clasic este, de fapt, un barometru. Măsoară presiunea aerului, care scade pe măsură ce avionul urcă."
  },
  {
    domeniu: "aviatie",
    dificultate: "usor",
    intrebare: "Ce parte a avionului creează forța care îl ține în aer?",
    variante: ["Aripile", "Motoarele", "Fuselajul", "Trenul de aterizare"],
    corect: "Aripile",
    explicatie: "Forța se numește portanță. Datorită formei aripii și unghiului ei față de aer, presiunea deasupra aripii este mai mică decât cea de dedesubt."
  },
  {
    domeniu: "aviatie",
    dificultate: "usor",
    intrebare: "De ce culoare este, de fapt, „cutia neagră” a unui avion?",
    variante: ["Neagră", "Portocalie", "Roșie", "Argintie"],
    corect: "Portocalie",
    explicatie: "Este vopsită în portocaliu aprins ca să fie găsită ușor după un accident. Avioanele au de fapt două: una înregistrează datele de zbor, iar cealaltă sunetele din cabina piloților."
  },
  {
    domeniu: "aviatie",
    dificultate: "usor",
    intrebare: "Ce avion de pasageri supersonic a zburat între 1976 și 2003?",
    variante: ["Boeing 747", "Airbus A380", "Concorde", "Tupolev Tu-154"],
    corect: "Concorde",
    explicatie: "Concorde zbura de la Londra sau Paris la New York în aproximativ trei ore și jumătate. La zborurile spre New York, pasagerii aterizau la o oră locală mai devreme decât cea la care plecaseră."
  },
  {
    domeniu: "aviatie",
    dificultate: "usor",
    intrebare: "Care este cel mai mare avion de pasageri construit în serie?",
    variante: ["Boeing 747", "Boeing 777", "Antonov An-225", "Airbus A380"],
    corect: "Airbus A380",
    explicatie: "A380 are două etaje pe toată lungimea și poate lua peste 800 de pasageri. Producția lui s-a oprit în 2021."
  },
  {
    domeniu: "aviatie",
    dificultate: "usor",
    intrebare: "Ce fel de aeronavă era Hindenburg, distrusă de un incendiu în 1937?",
    variante: ["Dirijabil", "Hidroavion", "Balon cu aer cald", "Planor"],
    corect: "Dirijabil",
    explicatie: "Hindenburg era umplut cu hidrogen, un gaz foarte inflamabil. Dezastrul a pus practic capăt epocii dirijabilelor de pasageri."
  },
  {
    domeniu: "aviatie",
    dificultate: "usor",
    intrebare: "Cine a inventat balonul cu aer cald, în 1783?",
    variante: ["Frații Wright", "Frații Lumière", "Frații Montgolfier", "Otto Lilienthal"],
    corect: "Frații Montgolfier",
    explicatie: "Primii pasageri ai unui balon Montgolfier au fost o oaie, o rață și un cocoș, la Versailles. Oamenii au zburat pentru prima dată cu balonul cam două luni mai târziu."
  },
  {
    domeniu: "aviatie",
    dificultate: "usor",
    intrebare: "Cine a traversat primul Oceanul Atlantic singur, cu avionul, fără escală?",
    variante: ["Charles Lindbergh", "Amelia Earhart", "Howard Hughes", "Louis Blériot"],
    corect: "Charles Lindbergh",
    explicatie: "Zborul de la New York la Paris, din mai 1927, a durat aproximativ 33 de ore și jumătate. Avionul lui se numea Spirit of St. Louis."
  },
  {
    domeniu: "aviatie",
    dificultate: "usor",
    intrebare: "Ce aviatoare americană a dispărut în 1937, în timp ce încerca să facă înconjurul lumii?",
    variante: ["Bessie Coleman", "Amelia Earhart", "Jacqueline Cochran", "Harriet Quimby"],
    corect: "Amelia Earhart",
    explicatie: "În 1932, Earhart devenise prima femeie care a traversat singură Atlanticul cu avionul. Avionul ei dispărut deasupra Pacificului nu a fost găsit niciodată."
  },
  {
    domeniu: "aviatie",
    dificultate: "usor",
    intrebare: "Cum se spune literei „C” în alfabetul fonetic folosit în aviație?",
    variante: ["Carlos", "Cocoa", "Charlie", "Coca"],
    corect: "Charlie",
    explicatie: "Alfabetul fonetic internațional a fost adoptat în anii 1950, ca literele să nu fie încurcate prin radio. Așa, A devine „Alfa”, B „Bravo”, iar C „Charlie”."
  },
  {
    domeniu: "aviatie",
    dificultate: "usor",
    intrebare: "Ce cuvânt spune un pilot prin radio când are o urgență gravă, care îi pune viața în pericol?",
    variante: ["Pan-pan", "Mayday", "Roger", "Wilco"],
    corect: "Mayday",
    explicatie: "Cuvântul vine din francezul „m'aider” („ajutați-mă”) și se repetă de trei ori. Pentru urgențe mai puțin grave se folosește „Pan-pan”."
  },
  {
    domeniu: "aviatie",
    dificultate: "usor",
    intrebare: "Ce înseamnă „Roger” în comunicările radio din aviație?",
    variante: ["Repetă mesajul", "Urgență", "Am recepționat mesajul", "Sfârșitul conversației"],
    corect: "Am recepționat mesajul",
    explicatie: "Vine de la litera R, de la „received”, care în vechiul alfabet fonetic se spunea „Roger”. Expresia a rămas în uz și după schimbarea alfabetului."
  },
  {
    domeniu: "aviatie",
    dificultate: "usor",
    intrebare: "Ce român a zburat în 1906, lângă Paris, cu un avion care a decolat folosind doar mijloacele proprii?",
    variante: ["Traian Vuia", "Aurel Vlaicu", "Henri Coandă", "Gogu Constantinescu"],
    corect: "Traian Vuia",
    explicatie: "Pe 18 martie 1906, la Montesson, avionul lui Vuia a decolat fără catapultă și a zburat aproximativ 12 metri. Aeroportul din Timișoara îi poartă numele."
  },
  {
    domeniu: "aviatie",
    dificultate: "usor",
    intrebare: "Ce aviator român a murit în 1913, încercând să treacă Carpații cu avionul?",
    variante: ["Traian Vuia", "Henri Coandă", "Smaranda Brăescu", "Aurel Vlaicu"],
    corect: "Aurel Vlaicu",
    explicatie: "Vlaicu a murit pe 13 septembrie 1913, lângă Câmpina. Cu un an înainte, câștigase mai multe premii la un concurs aviatic de la Aspern, lângă Viena."
  },
  {
    domeniu: "aviatie",
    dificultate: "usor",
    intrebare: "Cum se numește pilotul care zboară alături de comandant?",
    variante: ["Navigator", "Copilot", "Dispecer", "Mecanic de bord"],
    corect: "Copilot",
    explicatie: "Comandantul stă de obicei pe scaunul din stânga, iar copilotul în dreapta. Cei doi primesc adesea mâncare diferită, ca să nu se îmbolnăvească amândoi în același timp."
  },
  {
    domeniu: "aviatie",
    dificultate: "usor",
    intrebare: "Ce instrument simplu arată direcția nordului, chiar și fără curent electric?",
    variante: ["Altimetrul", "Vitezometrul", "Busola", "Orizontul artificial"],
    corect: "Busola",
    explicatie: "Busola magnetică funcționează fără electricitate. De aceea se află la bord chiar și în avioanele moderne, ca instrument de rezervă."
  },
  {
    domeniu: "aviatie",
    dificultate: "usor",
    intrebare: "De unde dirijează controlorii traficul avioanelor din jurul aeroportului?",
    variante: ["Turnul de control", "Hangar", "Terminal", "Pistă"],
    corect: "Turnul de control",
    explicatie: "Controlorii de trafic aerian le dau piloților permisiunea de decolare și de aterizare. În aviația internațională, comunicările radio se fac în limba engleză."
  },
  {
    domeniu: "aviatie",
    dificultate: "usor",
    intrebare: "Ce aeronavă fără motor zboară folosind curenții de aer?",
    variante: ["Dirijabilul", "Autogirul", "Ultraușorul", "Planorul"],
    corect: "Planorul",
    explicatie: "Planoarele câștigă înălțime cu ajutorul curenților de aer cald care urcă, numiți termice. Recordul de distanță cu planorul depășește 3.000 de kilometri."
  },

  // ---------- AVIAȚIE: MEDIU (48) ----------
  {
    domeniu: "aviatie",
    dificultate: "mediu",
    intrebare: "Cine a traversat primul Canalul Mânecii cu avionul, în 1909?",
    variante: ["Louis Blériot", "Frații Wright", "Charles Lindbergh", "Roland Garros"],
    corect: "Louis Blériot",
    explicatie: "Zborul de la Calais la Dover a durat aproximativ 37 de minute. Blériot a câștigat astfel un premiu de 1.000 de lire, oferit de ziarul Daily Mail."
  },
  {
    domeniu: "aviatie",
    dificultate: "mediu",
    intrebare: "Ce aeroport din București, numit după un pionier român al aviației, este folosit azi mai ales pentru zboruri private și de afaceri?",
    variante: ["Henri Coandă", "Aurel Vlaicu", "Mihail Kogălniceanu", "Traian Vuia"],
    corect: "Aurel Vlaicu",
    explicatie: "Aeroportul Aurel Vlaicu, cunoscut și ca Băneasa, funcționează din anii 1920. Din 2012, zborurile comerciale regulate s-au mutat la Otopeni."
  },
  {
    domeniu: "aviatie",
    dificultate: "mediu",
    intrebare: "Care este avionul construit în cele mai multe exemplare din istorie?",
    variante: ["Boeing 737", "Cessna 172", "Piper Cub", "Spitfire"],
    corect: "Cessna 172",
    explicatie: "Din anii 1950 s-au construit peste 44.000 de exemplare. Multe școli de zbor din lume îl folosesc pentru pregătirea piloților."
  },
  {
    domeniu: "aviatie",
    dificultate: "mediu",
    intrebare: "Cine a depășit primul, oficial, viteza sunetului cu un avion?",
    variante: ["Neil Armstrong", "Chuck Yeager", "Iuri Gagarin", "Charles Lindbergh"],
    corect: "Chuck Yeager",
    explicatie: "Pe 14 octombrie 1947, Yeager a zburat cu avionul-rachetă Bell X-1. Îl botezase „Glamorous Glennis”, după numele soției lui."
  },
  {
    domeniu: "aviatie",
    dificultate: "mediu",
    intrebare: "Ce avion de vânătoare, folosit de România zeci de ani, a fost retras din serviciu în 2023?",
    variante: ["F-16", "IAR-93", "MiG-29", "MiG-21 LanceR"],
    corect: "MiG-21 LanceR",
    explicatie: "MiG-21 a zburat în Forțele Aeriene Române 61 de ani, din 1962 până în mai 2023. „LanceR” este numele variantei modernizate în anii 1990."
  },
  {
    domeniu: "aviatie",
    dificultate: "mediu",
    intrebare: "Ce fenomen din aerodinamică poartă numele unui inventator român?",
    variante: ["Efectul Doppler", "Efectul Coandă", "Efectul Venturi", "Efectul Magnus"],
    corect: "Efectul Coandă",
    explicatie: "Un jet de aer sau de lichid tinde să rămână „lipit” de o suprafață curbă din apropiere. Îl poți vedea când apropii o lingură de jetul de apă de la robinet."
  },
  {
    domeniu: "aviatie",
    dificultate: "mediu",
    intrebare: "Cum se numește mișcarea prin care avionul își înclină aripile, una în sus și cealaltă în jos?",
    variante: ["Ruliu", "Tangaj", "Girație", "Derivă"],
    corect: "Ruliu",
    explicatie: "Ruliul se comandă din eleroane, tangajul (botul în sus sau în jos) din profundor, iar girația (botul la stânga sau la dreapta) din direcție, cu palonierele."
  },
  {
    domeniu: "aviatie",
    dificultate: "mediu",
    intrebare: "Ce instrument îi arată pilotului poziția avionului față de orizont, chiar și în nori?",
    variante: ["Altimetrul", "Variometrul", "Orizontul artificial", "Vitezometrul"],
    corect: "Orizontul artificial",
    explicatie: "Fără vizibilitate, simțurile îl pot păcăli ușor pe pilot, care poate crede că zboară drept deși e înclinat. De aceea, acest instrument este esențial în zborul prin nori."
  },
  {
    domeniu: "aviatie",
    dificultate: "mediu",
    intrebare: "Pe ce lege a fizicii se bazează motorul cu reacție?",
    variante: ["Legea lui Arhimede", "Legea lui Pascal", "Legea lui Ohm", "Principiul acțiunii și reacțiunii"],
    corect: "Principiul acțiunii și reacțiunii",
    explicatie: "Este a treia lege a lui Newton. Motorul aruncă gazele cu mare viteză în spate, iar avionul este împins înainte."
  },
  {
    domeniu: "aviatie",
    dificultate: "mediu",
    intrebare: "Ce arată numerele mari pictate la capetele pistelor, de exemplu „09” sau „27”?",
    variante: ["Direcția pistei, în zeci de grade", "Lungimea pistei, în sute de metri", "Numărul de ordine al pistei", "Altitudinea aeroportului"],
    corect: "Direcția pistei, în zeci de grade",
    explicatie: "Pista „09” este orientată spre est (90 de grade), iar capătul ei opus se numește „27” (270 de grade). Numerele se schimbă uneori, pentru că nordul magnetic se deplasează lent."
  },
  {
    domeniu: "aviatie",
    dificultate: "mediu",
    intrebare: "De ce este presurizată cabina unui avion de linie?",
    variante: ["Ca avionul să consume mai puțin", "Ca pasagerii să poată respira normal la mare înălțime", "Ca să nu se audă motoarele", "Ca să nu se formeze gheață pe aripi"],
    corect: "Ca pasagerii să poată respira normal la mare înălțime",
    explicatie: "La 11.000 de metri, presiunea aerului este de peste patru ori mai mică decât la sol. În cabină se păstrează o presiune ca la aproximativ 2.000-2.400 de metri altitudine."
  },
  {
    domeniu: "aviatie",
    dificultate: "mediu",
    intrebare: "Care este compania aeriană națională a României?",
    variante: ["Blue Air", "TAROM", "Wizz Air", "Carpatair"],
    corect: "TAROM",
    explicatie: "Numele vine de la „Transporturile Aeriene Române”. Compania poartă acest nume din 1954."
  },
  {
    domeniu: "aviatie",
    dificultate: "mediu",
    intrebare: "Ce avion de linie, supranumit „Regina cerului”, este recunoscut după „cocoașa” din partea din față?",
    variante: ["Airbus A380", "Boeing 707", "McDonnell Douglas DC-10", "Boeing 747"],
    corect: "Boeing 747",
    explicatie: "Boeing 747 a zburat prima dată în 1969. Cabina piloților a fost ridicată sus, în „cocoașă”, ca botul avionului să poată fi deschis pentru încărcarea mărfurilor."
  },
  {
    domeniu: "aviatie",
    dificultate: "mediu",
    intrebare: "Ce bombardier american are forma unei aripi zburătoare și este foarte greu de detectat de radar?",
    variante: ["B-2 Spirit", "B-52 Stratofortress", "F-16 Fighting Falcon", "C-130 Hercules"],
    corect: "B-2 Spirit",
    explicatie: "B-2 poate zbura peste 10.000 de kilometri fără să realimenteze. S-au construit doar 21 de exemplare, fiecare costând peste un miliard de dolari."
  },
  {
    domeniu: "aviatie",
    dificultate: "mediu",
    intrebare: "Ce avion de vânătoare american folosesc acum Forțele Aeriene Române?",
    variante: ["F-15 Eagle", "F-16 Fighting Falcon", "F/A-18 Hornet", "F-22 Raptor"],
    corect: "F-16 Fighting Falcon",
    explicatie: "România a primit primele F-16 în 2016, cumpărate din Portugalia. Ulterior a cumpărat și avioane F-16 din Norvegia."
  },
  {
    domeniu: "aviatie",
    dificultate: "mediu",
    intrebare: "Ce patrulă acrobatică a Forțelor Aeriene ale SUA zboară cu avioane F-16?",
    variante: ["Blue Angels", "Red Arrows", "Thunderbirds", "Frecce Tricolori"],
    corect: "Thunderbirds",
    explicatie: "Blue Angels aparțin Marinei americane, iar Red Arrows sunt patrula Forțelor Aeriene Regale britanice. Frecce Tricolori sunt patrula Italiei."
  },
  {
    domeniu: "aviatie",
    dificultate: "mediu",
    intrebare: "Din ce sunt formate dârele albe lăsate pe cer de avioane?",
    variante: ["Fum de la combustibilul ars", "Cristale de gheață", "Substanțe chimice pulverizate", "Aer comprimat"],
    corect: "Cristale de gheață",
    explicatie: "Gazele fierbinți din motoare conțin vapori de apă, care la înălțime îngheață repede. E același fenomen ca aburul respirației noastre iarna."
  },
  {
    domeniu: "aviatie",
    dificultate: "mediu",
    intrebare: "Ce avion românesc de antrenament cu reacție este folosit pentru pregătirea piloților militari?",
    variante: ["IAR 99 Șoim", "IAR 80", "IAR-93", "Iak-52"],
    corect: "IAR 99 Șoim",
    explicatie: "IAR 99 Șoim este construit la Craiova și a zburat prima dată în 1985. Iak-52, folosit și el la instruire, are motor cu elice."
  },
  {
    domeniu: "aviatie",
    dificultate: "mediu",
    intrebare: "Ce conte german a dat numele dirijabilelor rigide?",
    variante: ["Otto Lilienthal", "Hugo Junkers", "Claude Dornier", "Ferdinand von Zeppelin"],
    corect: "Ferdinand von Zeppelin",
    explicatie: "Primul lui dirijabil a zburat în 1900, deasupra lacului Constanța, de la granița dintre Germania, Elveția și Austria. De atunci, dirijabilele rigide se numesc „zepeline”."
  },
  {
    domeniu: "aviatie",
    dificultate: "mediu",
    intrebare: "Ce licență permite unei persoane să piloteze un avion în scop privat, fără să fie plătită?",
    variante: ["CPL", "ATPL", "PPL", "IR"],
    corect: "PPL",
    explicatie: "PPL vine de la „Private Pilot Licence”. Piloții de linie au nevoie de ATPL, cea mai înaltă licență de pilot."
  },
  {
    domeniu: "aviatie",
    dificultate: "mediu",
    intrebare: "Cum se numește numărul care arată de câte ori zboară un avion mai repede decât sunetul?",
    variante: ["Numărul Mach", "Nodul", "Numărul Reynolds", "Scara Beaufort"],
    corect: "Numărul Mach",
    explicatie: "Numele vine de la fizicianul austriac Ernst Mach. Viteza sunetului scade odată cu temperatura, așa că Mach 1 nu înseamnă aceeași viteză la orice altitudine."
  },
  {
    domeniu: "aviatie",
    dificultate: "mediu",
    intrebare: "Ce înseamnă un nod, unitatea de viteză folosită în aviație?",
    variante: ["Un kilometru pe oră", "O milă terestră pe oră", "Un metru pe secundă", "O milă marină pe oră"],
    corect: "O milă marină pe oră",
    explicatie: "Un nod înseamnă 1,852 km/h. Numele vine de la marinari, care măsurau viteza navei cu o frânghie cu noduri aruncată în apă."
  },
  {
    domeniu: "aviatie",
    dificultate: "mediu",
    intrebare: "Ce aeroport de lângă Constanța poartă numele unui mare om politic român?",
    variante: ["Mihail Kogălniceanu", "Ion C. Brătianu", "Alexandru Ioan Cuza", "Nicolae Titulescu"],
    corect: "Mihail Kogălniceanu",
    explicatie: "Lângă aeroport funcționează și o bază aeriană folosită de forțele NATO. Kogălniceanu a fost cel care a citit în Parlament declarația de independență din 1877."
  },
  {
    domeniu: "aviatie",
    dificultate: "mediu",
    intrebare: "Ce culoare are lumina de poziție de pe aripa stângă a unui avion?",
    variante: ["Verde", "Roșie", "Albă", "Albastră"],
    corect: "Roșie",
    explicatie: "Pe aripa dreaptă lumina este verde, la fel ca la nave. Așa, noaptea, un pilot își poate da seama încotro se îndreaptă alt avion."
  },
  {
    domeniu: "aviatie",
    dificultate: "mediu",
    intrebare: "Cum se numește depunerea de gheață pe aripile unui avion?",
    variante: ["Turbulență", "Forfecarea vântului", "Ceață", "Givraj"],
    corect: "Givraj",
    explicatie: "Gheața schimbă forma aripii și o îngreunează, așa că avionul pierde din portanță. De aceea, iarna, avioanele sunt stropite înainte de decolare cu lichide speciale de degivrare."
  },
  {
    domeniu: "aviatie",
    dificultate: "mediu",
    intrebare: "Ce înseamnă „ora Zulu” în aviație?",
    variante: ["Ora universală (UTC)", "Ora locală a aeroportului", "Ora decolării", "Ora de noapte"],
    corect: "Ora universală (UTC)",
    explicatie: "Aviația folosește peste tot aceeași oră, ca să nu existe confuzii între fusurile orare. „Zulu” este cuvântul pentru litera Z în alfabetul fonetic."
  },
  {
    domeniu: "aviatie",
    dificultate: "mediu",
    intrebare: "Cum se numesc suprafețele mobile de pe partea din spate a aripii, coborâte pentru a crește portanța la decolare și aterizare?",
    variante: ["Flapsurile", "Eleroanele", "Spoilerele", "Compensatoarele"],
    corect: "Flapsurile",
    explicatie: "Flapsurile măresc curbura, iar uneori și suprafața aripii, permițând zborul la viteze mai mici. Eleroanele, aflate tot pe aripă, înclină avionul."
  },
  {
    domeniu: "aviatie",
    dificultate: "mediu",
    intrebare: "Ce instrument arată cât de repede urcă sau coboară avionul?",
    variante: ["Altimetrul", "Variometrul", "Vitezometrul", "Indicatorul de viraj"],
    corect: "Variometrul",
    explicatie: "Variometrul este foarte important pentru piloții de planor, care îl folosesc ca să găsească curenții de aer ascendenți."
  },
  {
    domeniu: "aviatie",
    dificultate: "mediu",
    intrebare: "În ce unitate se măsoară de obicei altitudinea în aviația internațională?",
    variante: ["Metri", "Mile marine", "Picioare", "Yarzi"],
    corect: "Picioare",
    explicatie: "Un picior are aproximativ 30 de centimetri. Un avion de linie zboară de obicei la 35.000-39.000 de picioare, adică în jur de 11-12 kilometri."
  },
  {
    domeniu: "aviatie",
    dificultate: "mediu",
    intrebare: "Ce vânt este cel mai favorabil la decolare și la aterizare?",
    variante: ["Vântul din spate", "Vântul lateral", "Vântul dinspre dreapta, la 45 de grade", "Vântul din față"],
    corect: "Vântul din față",
    explicatie: "Vântul din față mărește viteza aerului peste aripi fără ca avionul să ruleze mai repede pe sol, așa că e nevoie de mai puțină pistă. De aceea, pistele sunt orientate după vânturile dominante."
  },
  {
    domeniu: "aviatie",
    dificultate: "mediu",
    intrebare: "Ce obiect de pe aerodrom arată direcția și tăria vântului, printr-un con de pânză?",
    variante: ["Mâneca de vânt", "Farul rotativ", "Radarul meteo", "Balizajul pistei"],
    corect: "Mâneca de vânt",
    explicatie: "Cu cât vântul e mai puternic, cu atât mâneca stă mai orizontal. Este folosită mai ales pe aerodromurile mici."
  },
  {
    domeniu: "aviatie",
    dificultate: "mediu",
    intrebare: "Ce sistem ghidează avionul prin semnale radio pe direcția și panta corectă de aterizare, chiar și pe vizibilitate redusă?",
    variante: ["TCAS", "ILS", "ACARS", "ELT"],
    corect: "ILS",
    explicatie: "ILS vine de la „Instrument Landing System”. Pe aeroporturile bine echipate, cu avioane și piloți certificați, se poate ateriza aproape fără vizibilitate."
  },
  {
    domeniu: "aviatie",
    dificultate: "mediu",
    intrebare: "Ce combustibil folosesc majoritatea avioanelor de linie cu reacție?",
    variante: ["Benzină de aviație (AVGAS)", "Motorină", "Kerosen", "Gaz natural lichefiat"],
    corect: "Kerosen",
    explicatie: "Avioanele mici cu motor cu pistoane folosesc de obicei benzină de aviație, numită AVGAS. Combustibilul avioanelor cu reacție se numește Jet A-1."
  },
  {
    domeniu: "aviatie",
    dificultate: "mediu",
    intrebare: "Ce avion de vânătoare britanic a devenit simbolul Bătăliei Angliei, din 1940?",
    variante: ["Messerschmitt Bf 109", "P-51 Mustang", "Gloster Meteor", "Supermarine Spitfire"],
    corect: "Supermarine Spitfire",
    explicatie: "Bătălia Angliei a fost prima mare bătălie purtată aproape numai în aer. Hurricane, alt avion britanic, a doborât de fapt mai multe avioane germane decât Spitfire."
  },
  {
    domeniu: "aviatie",
    dificultate: "mediu",
    intrebare: "Ce avion de transport, poreclit „Dakota”, a făcut zborurile cu pasageri profitabile în anii 1930?",
    variante: ["Douglas DC-3", "Boeing 707", "Lockheed Constellation", "Junkers Ju 52"],
    corect: "Douglas DC-3",
    explicatie: "DC-3 a zburat prima dată în 1935. Unele exemplare zboară și astăzi, la peste 90 de ani de la apariție."
  },
  {
    domeniu: "aviatie",
    dificultate: "mediu",
    intrebare: "Care a fost primul avion de linie cu reacție intrat în serviciu, în 1952?",
    variante: ["Boeing 707", "de Havilland Comet", "Tupolev Tu-104", "Sud Aviation Caravelle"],
    corect: "de Havilland Comet",
    explicatie: "Comet a avut mai multe accidente provocate de oboseala metalului, care pornea de la colțurile ferestrelor. De atunci, hublourile avioanelor au colțuri rotunjite."
  },
  {
    domeniu: "aviatie",
    dificultate: "mediu",
    intrebare: "Ce avion de recunoaștere zbura la peste Mach 3 și deține recordul de viteză pentru avioane cu reacție cu pilot?",
    variante: ["U-2", "MiG-25", "SR-71 Blackbird", "F-22 Raptor"],
    corect: "SR-71 Blackbird",
    explicatie: "În 1976 a atins aproximativ 3.530 km/h, record încă nedepășit. La viteza maximă, fuselajul se încălzea atât de tare încât se dilata în zbor."
  },
  {
    domeniu: "aviatie",
    dificultate: "mediu",
    intrebare: "Ce aeroport european are codul LHR?",
    variante: ["Paris Charles de Gaulle", "Frankfurt", "Amsterdam Schiphol", "Londra Heathrow"],
    corect: "Londra Heathrow",
    explicatie: "Codurile de trei litere sunt stabilite de IATA. Aeroportul Henri Coandă are codul OTP, de la Otopeni."
  },
  {
    domeniu: "aviatie",
    dificultate: "mediu",
    intrebare: "Ce înseamnă zborul VFR?",
    variante: ["Zbor după reguli vizuale", "Zbor după instrumente", "Zbor de noapte", "Zbor fără radio"],
    corect: "Zbor după reguli vizuale",
    explicatie: "În zborul VFR, pilotul se orientează privind afară și trebuie să evite norii. Pentru zborul prin nori este nevoie de zbor instrumental (IFR)."
  },
  {
    domeniu: "aviatie",
    dificultate: "mediu",
    intrebare: "Ce tip de nor este cel mai periculos pentru avioane, fiind asociat cu furtuni și grindină?",
    variante: ["Cumulus", "Cumulonimbus", "Nimbostratus", "Altostratus"],
    corect: "Cumulonimbus",
    explicatie: "Un Cumulonimbus poate avea peste 10 kilometri înălțime și ascunde curenți verticali foarte puternici. Piloții îl ocolesc la zeci de kilometri distanță."
  },
  {
    domeniu: "aviatie",
    dificultate: "mediu",
    intrebare: "Cum se numește situația în care temperatura aerului crește cu altitudinea, invers decât de obicei?",
    variante: ["Front rece", "Convecție", "Inversiune termică", "Advecție"],
    corect: "Inversiune termică",
    explicatie: "În mod normal, aerul se răcește cu aproximativ 6,5 °C la fiecare 1.000 de metri. Inversiunile țin ceața și poluarea aproape de sol."
  },
  {
    domeniu: "aviatie",
    dificultate: "mediu",
    intrebare: "Cum se numește figura acrobatică în care avionul face un cerc complet în plan vertical?",
    variante: ["Tonou", "Ranversare", "Glisadă", "Looping"],
    corect: "Looping",
    explicatie: "Primul looping cu avionul a fost executat în 1913 de pilotul rus Piotr Nesterov. La tonou, avionul se rotește în jurul axei lungi."
  },
  {
    domeniu: "aviatie",
    dificultate: "mediu",
    intrebare: "Cum se numește coborârea în spirală a unui avion angajat, care se rotește în jurul axei verticale?",
    variante: ["Vrie", "Looping", "Tonou", "Ranversare"],
    corect: "Vrie",
    explicatie: "Vria apare când o aripă este mai angajată decât cealaltă. Ieșirea din vrie se exersează în școlile de pilotaj."
  },
  {
    domeniu: "aviatie",
    dificultate: "mediu",
    intrebare: "Ce avion de vânătoare britanic putea decola și ateriza vertical, rotindu-și jeturile motorului?",
    variante: ["Tornado", "Harrier", "Eurofighter Typhoon", "Hawk"],
    corect: "Harrier",
    explicatie: "Harrier a intrat în serviciu în 1969. Urmașul lui modern cu aceeași capacitate este F-35B."
  },
  {
    domeniu: "aviatie",
    dificultate: "mediu",
    intrebare: "Ce aeronavă militară americană are rotoare care se înclină din poziția de elicopter în cea de avion?",
    variante: ["CH-47 Chinook", "UH-60 Black Hawk", "V-22 Osprey", "AH-64 Apache"],
    corect: "V-22 Osprey",
    explicatie: "La decolare, rotoarele stau vertical, ca la un elicopter. În zbor se înclină înainte și funcționează ca elicele unui avion."
  },
  {
    domeniu: "aviatie",
    dificultate: "mediu",
    intrebare: "Cu ce gaz neinflamabil sunt umplute dirijabilele moderne?",
    variante: ["Hidrogen", "Azot", "Neon", "Heliu"],
    corect: "Heliu",
    explicatie: "Heliul este al doilea cel mai ușor gaz, după hidrogen, și nu arde. Dirijabilele vechi, precum Hindenburg, foloseau hidrogen."
  },
  {
    domeniu: "aviatie",
    dificultate: "mediu",
    intrebare: "Ce tub montat în exteriorul avionului măsoară presiunea aerului, din care se calculează viteza?",
    variante: ["Tubul Pitot", "Tubul Venturi", "Tubul Bourdon", "Tubul Geiger"],
    corect: "Tubul Pitot",
    explicatie: "Dacă tubul Pitot se înfundă cu gheață, vitezometrul arată valori greșite. De aceea, tubul este încălzit electric în zbor."
  },
  {
    domeniu: "aviatie",
    dificultate: "mediu",
    intrebare: "Ce sistem de navigație prin satelit a fost creat de armata Statelor Unite?",
    variante: ["Galileo", "GPS", "GLONASS", "BeiDou"],
    corect: "GPS",
    explicatie: "Galileo este sistemul Uniunii Europene, GLONASS cel rusesc, iar BeiDou cel chinezesc. GPS a devenit complet funcțional în 1995."
  },

  // ---------- AVIAȚIE: GREU (32) ----------
  {
    domeniu: "aviatie",
    dificultate: "greu",
    intrebare: "Ce avion de vânătoare a fost proiectat și construit în România înainte de Al Doilea Război Mondial?",
    variante: ["IAR 80", "IAR-93", "IAR 330", "Messerschmitt Bf 109"],
    corect: "IAR 80",
    explicatie: "IAR 80 a fost construit la Brașov, de Industria Aeronautică Română, și a zburat prima dată în 1939. A fost folosit pe front de aviația română în timpul războiului."
  },
  {
    domeniu: "aviatie",
    dificultate: "greu",
    intrebare: "Ce inventator român a creat sistemul care permitea mitralierelor să tragă printre palele elicei, în Primul Război Mondial?",
    variante: ["Henri Coandă", "Traian Vuia", "Gogu Constantinescu", "Aurel Vlaicu"],
    corect: "Gogu Constantinescu",
    explicatie: "Sistemul lui folosea pulsuri de presiune transmise printr-un lichid, după teoria sonicității creată chiar de el. A fost montat pe mii de avioane britanice."
  },
  {
    domeniu: "aviatie",
    dificultate: "greu",
    intrebare: "Ce parașutistă română a stabilit în 1932 un record mondial, sărind de la peste 7.000 de metri?",
    variante: ["Smaranda Brăescu", "Marina Știrbey", "Nadia Russo", "Elena Caragiani"],
    corect: "Smaranda Brăescu",
    explicatie: "Saltul a avut loc în Statele Unite, la Sacramento. Smaranda Brăescu a fost și prima femeie parașutist din România."
  },
  {
    domeniu: "aviatie",
    dificultate: "greu",
    intrebare: "Cum se numește pierderea bruscă a portanței, când aripa întâlnește aerul sub un unghi prea mare?",
    variante: ["Vrie", "Angajare", "Derapaj", "Turbulență"],
    corect: "Angajare",
    explicatie: "Angajarea depinde de unghiul aripii față de aer, nu doar de viteză. Un avion se poate angaja la orice viteză, dacă unghiul devine prea mare."
  },
  {
    domeniu: "aviatie",
    dificultate: "greu",
    intrebare: "Ce elicopter, construit sub licență franceză la Brașov, folosesc de zeci de ani Forțele Aeriene Române?",
    variante: ["Mi-17", "Black Hawk", "IAR 330 Puma", "Apache"],
    corect: "IAR 330 Puma",
    explicatie: "Producția a început în anii 1970, sub licența firmei franceze Aérospatiale. Elicopterul este folosit pentru transport, salvare și misiuni militare."
  },
  {
    domeniu: "aviatie",
    dificultate: "greu",
    intrebare: "Ce avion de atac a fost proiectat împreună de România și Iugoslavia?",
    variante: ["IAR 80", "IAR-93", "IAR 99", "MiG-21"],
    corect: "IAR-93",
    explicatie: "În Iugoslavia, avionul s-a numit J-22 Orao, adică „vultur”. Primul zbor a avut loc în 1974."
  },
  {
    domeniu: "aviatie",
    dificultate: "greu",
    intrebare: "Ce avion de antrenament cu elice, folosit de piloții militari români, a fost fabricat la Bacău?",
    variante: ["IAR 99", "Cessna 172", "IAR 823", "Iak-52"],
    corect: "Iak-52",
    explicatie: "Fabrica Aerostar din Bacău a produs peste 1.800 de avioane Iak-52, începând din anii 1970. Multe au fost exportate în fosta Uniune Sovietică."
  },
  {
    domeniu: "aviatie",
    dificultate: "greu",
    intrebare: "Ce pionier german a făcut peste 2.000 de zboruri cu planorul în anii 1890?",
    variante: ["Otto Lilienthal", "Ferdinand von Zeppelin", "Hugo Junkers", "Wilhelm Kress"],
    corect: "Otto Lilienthal",
    explicatie: "Lilienthal a murit în 1896, după un accident cu planorul. Frații Wright au spus că munca lui i-a inspirat."
  },
  {
    domeniu: "aviatie",
    dificultate: "greu",
    intrebare: "Ce inginer născut la Kiev a construit primul avion cu patru motoare și, mai târziu, primul elicopter produs în serie?",
    variante: ["Andrei Tupolev", "Mihail Mil", "Igor Sikorsky", "Hugo Junkers"],
    corect: "Igor Sikorsky",
    explicatie: "Avionul cu patru motoare a zburat în Rusia, în 1913. După ce a emigrat în SUA, Sikorsky a construit R-4, primul elicopter produs în serie, în 1942."
  },
  {
    domeniu: "aviatie",
    dificultate: "greu",
    intrebare: "Cum se numea escadrila sanitară a aviației române din Al Doilea Război Mondial, în care zburau și femei pilot?",
    variante: ["Escadrila Roșie", "Escadrila Albă", "Escadrila Șoimilor", "Escadrila Vulturilor"],
    corect: "Escadrila Albă",
    explicatie: "Avioanele ei, vopsite în alb, cu cruce roșie, transportau răniții de pe front. Printre pilotele escadrilei s-au aflat Marina Știrbey și Nadia Russo."
  },
  {
    domeniu: "aviatie",
    dificultate: "greu",
    intrebare: "Ce pilot militar român a zburat în spațiu în 1981?",
    variante: ["Dumitru Prunariu", "Horia Agarici", "Alexandru Papană", "Constantin Cantacuzino"],
    corect: "Dumitru Prunariu",
    explicatie: "Prunariu a zburat aproape opt zile, în mai 1981, cu nava sovietică Soiuz 40 și stația Saliut 6. Mai târziu a condus Agenția Spațială Română."
  },
  {
    domeniu: "aviatie",
    dificultate: "greu",
    intrebare: "Ce anunță un pilot când setează codul 7700 pe transponder?",
    variante: ["O deturnare", "Pierderea legăturii radio", "O urgență", "Un zbor de școală"],
    corect: "O urgență",
    explicatie: "Codul 7500 anunță o deturnare, iar 7600 pierderea legăturii radio. Pe radar, avionul cu cod 7700 apare imediat evidențiat."
  },
  {
    domeniu: "aviatie",
    dificultate: "greu",
    intrebare: "Care a fost cel mai greu avion construit vreodată?",
    variante: ["Airbus A380", "Antonov An-225", "Boeing 747-8", "Hughes H-4 Hercules"],
    corect: "Antonov An-225",
    explicatie: "An-225 Mriya putea decola cu aproximativ 640 de tone. S-a construit un singur exemplar, distrus în 2022 pe aeroportul Hostomel, în timpul războiului din Ucraina."
  },
  {
    domeniu: "aviatie",
    dificultate: "greu",
    intrebare: "Ce principiu al fizicii spune că aerul care curge mai repede apasă mai puțin, explicând parțial portanța aripii?",
    variante: ["Principiul lui Arhimede", "Principiul lui Pascal", "Principiul lui Bernoulli", "Legea lui Hooke"],
    corect: "Principiul lui Bernoulli",
    explicatie: "Aerul de deasupra aripii curge mai repede, deci apasă mai puțin decât cel de dedesubt. Portanța se explică și prin faptul că aripa împinge aerul în jos."
  },
  {
    domeniu: "aviatie",
    dificultate: "greu",
    intrebare: "Ce înseamnă viteza „V1” la decolarea unui avion de linie?",
    variante: ["Viteza maximă admisă cu flapsurile scoase", "Viteza la care se strânge trenul de aterizare", "Viteza după care decolarea nu mai poate fi întreruptă în siguranță", "Viteza minimă de croazieră"],
    corect: "Viteza după care decolarea nu mai poate fi întreruptă în siguranță",
    explicatie: "Dacă apare o problemă după V1, piloții continuă decolarea, pentru că nu mai au destulă pistă ca să oprească. Urmează VR, viteza la care se ridică botul."
  },
  {
    domeniu: "aviatie",
    dificultate: "greu",
    intrebare: "Ce arată sistemul de lumini PAPI, de lângă pistă, când pilotul vede două lumini albe și două roșii?",
    variante: ["Că avionul este prea sus", "Că pista este închisă", "Că vântul bate lateral", "Că avionul este pe panta corectă de apropiere"],
    corect: "Că avionul este pe panta corectă de apropiere",
    explicatie: "Patru lumini roșii înseamnă că avionul este prea jos, iar patru albe că este prea sus."
  },
  {
    domeniu: "aviatie",
    dificultate: "greu",
    intrebare: "Ce sistem de la bordul avioanelor le spune piloților să urce sau să coboare ca să evite o coliziune cu alt avion?",
    variante: ["TCAS", "GPWS", "ILS", "VOR"],
    corect: "TCAS",
    explicatie: "Avioanele implicate primesc instrucțiuni opuse: unul urcă, celălalt coboară. GPWS avertizează, în schimb, apropierea periculoasă de sol."
  },
  {
    domeniu: "aviatie",
    dificultate: "greu",
    intrebare: "Ce avion de spionaj american a fost doborât deasupra URSS în 1960, cu pilotul Francis Gary Powers?",
    variante: ["SR-71", "U-2", "B-52", "F-104"],
    corect: "U-2",
    explicatie: "Incidentul a provocat o criză diplomatică între cele două superputeri. Powers a fost schimbat, în 1962, cu un spion sovietic."
  },
  {
    domeniu: "aviatie",
    dificultate: "greu",
    intrebare: "Ce stație de radionavigație de la sol îi arată pilotului pe ce direcție (radial) se află față de ea?",
    variante: ["DME", "NDB", "VOR", "ILS"],
    corect: "VOR",
    explicatie: "DME, instalat adesea împreună cu VOR, arată distanța până la stație. NDB este un tip de radiofar mai vechi."
  },
  {
    domeniu: "aviatie",
    dificultate: "greu",
    intrebare: "Ce valori are atmosfera standard internațională (ISA) la nivelul mării?",
    variante: ["0 °C și 1000 hPa", "20 °C și 1020 hPa", "10 °C și 990 hPa", "15 °C și 1013,25 hPa"],
    corect: "15 °C și 1013,25 hPa",
    explicatie: "Atmosfera standard este un model folosit, printre altele, pentru calibrarea altimetrelor. Vremea reală diferă aproape mereu de ea."
  },
  {
    domeniu: "aviatie",
    dificultate: "greu",
    intrebare: "Ce setare a altimetrului îl face să arate altitudinea față de nivelul mării?",
    variante: ["QNH", "QFE", "QNE", "QDM"],
    corect: "QNH",
    explicatie: "Cu QFE, altimetrul arată zero pe pista aerodromului. Aceste coduri provin din vechile prescurtări folosite în telegrafie."
  },
  {
    domeniu: "aviatie",
    dificultate: "greu",
    intrebare: "Cine a fost prima femeie din lume care a obținut brevet de pilot, în 1910?",
    variante: ["Harriet Quimby", "Raymonde de Laroche", "Bessie Coleman", "Hélène Dutrieu"],
    corect: "Raymonde de Laroche",
    explicatie: "Baroana franceză și-a primit brevetul în martie 1910. Harriet Quimby a fost, în 1911, prima femeie cu brevet de pilot din SUA."
  },
  {
    domeniu: "aviatie",
    dificultate: "greu",
    intrebare: "Ce avion de linie britanic a fost construit sub licență la București, în anii 1980, sub numele ROMBAC?",
    variante: ["Boeing 737", "Hawker Siddeley Trident", "BAC One-Eleven", "Vickers Viscount"],
    corect: "BAC One-Eleven",
    explicatie: "Au fost terminate doar nouă exemplare, la uzina Romaero de la Băneasa. A fost unul dintre cele mai ambițioase proiecte ale industriei aeronautice românești."
  },
  {
    domeniu: "aviatie",
    dificultate: "greu",
    intrebare: "Cine a realizat, în 1933, primul zbor solitar în jurul lumii?",
    variante: ["Charles Lindbergh", "Howard Hughes", "Amelia Earhart", "Wiley Post"],
    corect: "Wiley Post",
    explicatie: "Zborul a durat aproape opt zile. Post a contribuit și la dezvoltarea costumului presurizat pentru zborul la mare altitudine."
  },
  {
    domeniu: "aviatie",
    dificultate: "greu",
    intrebare: "Ce pilot de vânătoare român, supranumit „Bâzu”, a ajutat în 1944 la salvarea a peste o mie de aviatori americani?",
    variante: ["Constantin Cantacuzino", "Alexandru Șerbănescu", "Horia Agarici", "Ioan Dicezare"],
    corect: "Constantin Cantacuzino",
    explicatie: "În august 1944, după ce România a trecut de partea Aliaților, a zburat în Italia cu un ofițer american ascuns în avionul său. Așa a fost organizată evacuarea prizonierilor americani din România."
  },
  {
    domeniu: "aviatie",
    dificultate: "greu",
    intrebare: "Ce operațiune aeriană a aprovizionat Berlinul de Vest în 1948–1949?",
    variante: ["Operațiunea Overlord", "Podul aerian de la Berlin", "Operațiunea Barbarossa", "Planul Marshall"],
    corect: "Podul aerian de la Berlin",
    explicatie: "Timp de aproape un an, avioane americane și britanice au adus hrană și cărbune orașului blocat de sovietici. În perioada de vârf, la Berlin ateriza un avion la câteva minute."
  },
  {
    domeniu: "aviatie",
    dificultate: "greu",
    intrebare: "Cum se numea bombardierul B-29 care a lansat bomba atomică asupra Hiroshimei?",
    variante: ["Bockscar", "Memphis Belle", "Enola Gay", "Spirit of St. Louis"],
    corect: "Enola Gay",
    explicatie: "Avionul a fost botezat după mama pilotului, Paul Tibbets. Bomba de la Nagasaki a fost lansată de alt B-29, numit Bockscar."
  },
  {
    domeniu: "aviatie",
    dificultate: "greu",
    intrebare: "Ce avion sovietic a fost primul avion de pasageri supersonic care a zburat, înaintea Concorde?",
    variante: ["Tupolev Tu-154", "Ilyushin Il-62", "Yakovlev Yak-42", "Tupolev Tu-144"],
    corect: "Tupolev Tu-144",
    explicatie: "Tu-144 a zburat prima dată pe 31 decembrie 1968, cu două luni înaintea Concorde. A transportat însă pasageri foarte puțin timp."
  },
  {
    domeniu: "aviatie",
    dificultate: "greu",
    intrebare: "Cum se numește fenomenul prin care un avion „plutește” deasupra pistei, foarte aproape de sol, la aterizare?",
    variante: ["Efectul de sol", "Efectul Coandă", "Efectul Doppler", "Efectul giroscopic"],
    corect: "Efectul de sol",
    explicatie: "Aproape de sol, vârtejurile de la vârful aripilor se micșorează, așa că aripa produce mai multă portanță și mai puțină rezistență."
  },
  {
    domeniu: "aviatie",
    dificultate: "greu",
    intrebare: "Cum se numesc vârtejurile lăsate în urmă de aripile unui avion mare, periculoase pentru avioanele care vin din spate?",
    variante: ["Forfecarea vântului", "Turbulența de siaj", "Turbulența în aer clar", "Rafalele de front"],
    corect: "Turbulența de siaj",
    explicatie: "Din cauza lor, controlorii lasă o distanță minimă între avioane la decolare și aterizare, mai mare în spatele avioanelor grele."
  },
  {
    domeniu: "aviatie",
    dificultate: "greu",
    intrebare: "Ce avion a înconjurat Pământul în 1986 fără escală și fără să realimenteze?",
    variante: ["Solar Impulse 2", "Spirit of St. Louis", "Rutan Voyager", "Lockheed Vega"],
    corect: "Rutan Voyager",
    explicatie: "Zborul a durat nouă zile, cu Dick Rutan și Jeana Yeager la bord. Aproape tot avionul era, de fapt, un rezervor de combustibil."
  },
  {
    domeniu: "aviatie",
    dificultate: "greu",
    intrebare: "Ce avion a făcut înconjurul lumii între 2015 și 2016, folosind doar energie solară?",
    variante: ["Rutan Voyager", "Helios", "Gossamer Albatross", "Solar Impulse 2"],
    corect: "Solar Impulse 2",
    explicatie: "Zborul s-a făcut în etape. Avionul stoca energia solară în baterii, ca să poată zbura și noaptea."
  },

  // =======================================================
  // EDUCAȚIE FINANCIARĂ (100 de întrebări)
  // =======================================================

  // ---------- EDUCAȚIE FINANCIARĂ: UȘOR (20) ----------
  {
    domeniu: "educatie-financiara",
    dificultate: "usor",
    intrebare: "Cum se numește creșterea generală a prețurilor într-o economie?",
    variante: ["Deflație", "Inflație", "Recesiune", "Devalorizare"],
    corect: "Inflație",
    explicatie: "Dacă inflația este de 10% pe an, un coș de produse care costa 100 de lei ajunge să coste 110 lei. Cu aceiași bani poți cumpăra mai puțin."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "usor",
    intrebare: "Ce este „RON”?",
    variante: ["Codul internațional al leului românesc", "O bancă românească", "Un impozit", "Un tip de card"],
    corect: "Codul internațional al leului românesc",
    explicatie: "Codurile monedelor au câte trei litere. La RON, „RO” vine de la România, iar „N” de la „nou”."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "usor",
    intrebare: "Ce instituție emite bancnotele și monedele leului românesc?",
    variante: ["Ministerul Finanțelor", "ANAF", "Banca Națională a României", "Bursa de Valori București"],
    corect: "Banca Națională a României",
    explicatie: "Pe lângă emiterea banilor, rolul principal al BNR este să mențină stabilitatea prețurilor. Sediul ei istoric se află pe strada Lipscani din București."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "usor",
    intrebare: "Cum se numește suma pe care o plătești în plus băncii pentru un împrumut?",
    variante: ["Dobândă", "Dividend", "Impozit", "Avans"],
    corect: "Dobândă",
    explicatie: "Când depui bani la bancă, situația se inversează: banca îți plătește ție dobândă. Dobânda este, practic, prețul banilor împrumutați."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "usor",
    intrebare: "Ce este un buget personal?",
    variante: ["Un împrumut de la bancă", "Un plan al veniturilor și cheltuielilor", "Un cont de economii", "Un impozit anual"],
    corect: "Un plan al veniturilor și cheltuielilor",
    explicatie: "Cea mai simplă metodă este să notezi o lună tot ce cheltuiești. Mulți oameni descoperă astfel cheltuieli mici care, adunate, înseamnă sume mari."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "usor",
    intrebare: "Cât recomandă de obicei specialiștii să ai pus deoparte ca fond de urgență?",
    variante: ["Cheltuielile pe o săptămână", "Cheltuielile pe 3-6 luni", "Cheltuielile pe 5 ani", "Nimic, e mai bine să iei un credit"],
    corect: "Cheltuielile pe 3-6 luni",
    explicatie: "Fondul de urgență te ajută dacă rămâi fără venit sau apare o cheltuială neprevăzută, fără să te împrumuți. Banii trebuie să stea într-un loc de unde pot fi scoși repede."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "usor",
    intrebare: "Care este diferența principală dintre un card de debit și unul de credit?",
    variante: ["Cardul de credit nu merge online", "Cu cardul de debit plătești din banii tăi, cu cel de credit din banii băncii", "Cardul de debit are mereu dobândă", "Nu există nicio diferență"],
    corect: "Cu cardul de debit plătești din banii tăi, cu cel de credit din banii băncii",
    explicatie: "Dacă returnezi suma cheltuită cu cardul de credit în perioada de grație, de obicei nu plătești dobândă. După această perioadă, dobânzile sunt de regulă mari."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "usor",
    intrebare: "Ce reprezintă o acțiune cumpărată la bursă?",
    variante: ["O parte din proprietatea unei companii", "Un împrumut dat statului", "Un cont bancar", "O poliță de asigurare"],
    corect: "O parte din proprietatea unei companii",
    explicatie: "Cine are acțiuni devine coproprietar al firmei, chiar și cu o parte foarte mică. Prețul acțiunii crește sau scade după cum merge firma și după ce cred investitorii despre viitorul ei."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "usor",
    intrebare: "Ce înseamnă să-ți diversifici investițiile?",
    variante: ["Să investești totul într-o singură firmă", "Să împarți banii între mai multe investiții diferite", "Să ții toți banii acasă", "Să investești doar în aur"],
    corect: "Să împarți banii între mai multe investiții diferite",
    explicatie: "Ideea se rezumă prin proverbul „nu pune toate ouăle în același coș”. Dacă o investiție merge prost, celelalte pot compensa pierderea."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "usor",
    intrebare: "Ce instituție colectează taxele și impozitele în România?",
    variante: ["BNR", "ANAF", "Institutul Național de Statistică", "Curtea de Conturi"],
    corect: "ANAF",
    explicatie: "ANAF vine de la Agenția Națională de Administrare Fiscală. Prin platforma online SPV, oamenii își pot trimite declarațiile fără să meargă la ghișeu."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "usor",
    intrebare: "Ce este un credit ipotecar?",
    variante: ["Un credit pentru studii", "Un împrumut pentru o locuință, garantat chiar cu locuința", "Un card de cumpărături", "Un credit fără dobândă"],
    corect: "Un împrumut pentru o locuință, garantat chiar cu locuința",
    explicatie: "Dacă împrumutul nu este plătit, banca poate vinde locuința ca să-și recupereze banii. Astfel de credite se dau de obicei pe 20-30 de ani."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "usor",
    intrebare: "Ce înseamnă dobânda compusă („dobândă la dobândă”)?",
    variante: ["Dobânda se calculează și pentru dobânda deja câștigată", "Dobânda se plătește de două ori", "Dobânda scade în fiecare an", "Două bănci împart aceeași dobândă"],
    corect: "Dobânda se calculează și pentru dobânda deja câștigată",
    explicatie: "Cu cât banii stau mai mult investiți, cu atât efectul devine mai puternic. Citatul care o numește „a opta minune a lumii” e atribuit des lui Einstein, dar nu există dovezi că l-ar fi spus."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "usor",
    intrebare: "Primești un SMS „de la bancă” care îți cere să introduci datele cardului pe un link. Ce faci?",
    variante: ["Introduc datele repede, să nu se blocheze contul", "Nu deschid linkul și sun la bancă, la numărul oficial", "Răspund la SMS cu PIN-ul", "Trimit mesajul prietenilor"],
    corect: "Nu deschid linkul și sun la bancă, la numărul oficial",
    explicatie: "Băncile nu cer niciodată PIN-ul, parola sau codurile de confirmare prin SMS, e-mail sau telefon. Această înșelătorie se numește phishing."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "usor",
    intrebare: "Ce este IBAN-ul?",
    variante: ["Codul PIN al cardului", "Un tip de credit", "Codul unic al unui cont bancar", "Numele băncii centrale"],
    corect: "Codul unic al unui cont bancar",
    explicatie: "În România, IBAN-ul are 24 de caractere și începe cu „RO”. Ai nevoie de el ca să primești bani prin transfer bancar."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "usor",
    intrebare: "Cum se numește partea din profitul unei companii plătită acționarilor?",
    variante: ["Dobândă", "Dividend", "Comision", "Salariu"],
    corect: "Dividend",
    explicatie: "Nu toate companiile plătesc dividende. Unele preferă să folosească profitul pentru a crește și mai mult."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "usor",
    intrebare: "Ce înseamnă „salariul net”?",
    variante: ["Salariul trecut în contract, înainte de taxe", "Suma primită efectiv, după reținerea taxelor", "Bonusul de la final de an", "Salariul minim pe economie"],
    corect: "Suma primită efectiv, după reținerea taxelor",
    explicatie: "Salariul brut este suma din contract, din care se rețin contribuțiile și impozitul. Diferența dintre brut și net poate fi destul de mare."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "usor",
    intrebare: "Ce asigurare auto este obligatorie în România?",
    variante: ["CASCO", "RCA", "Asigurarea de viață", "Asigurarea de călătorie"],
    corect: "RCA",
    explicatie: "RCA acoperă pagubele pe care le produci altora, nu pe cele ale propriei mașini. Pentru propria mașină există CASCO, care este opțională."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "usor",
    intrebare: "Cum se numește piața organizată unde se cumpără și se vând acțiuni?",
    variante: ["Casa de schimb", "Trezoreria", "Banca centrală", "Bursa de valori"],
    corect: "Bursa de valori",
    explicatie: "Bursa de Valori București a fost înființată în 1882. A fost închisă în perioada comunistă și redeschisă în 1995."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "usor",
    intrebare: "În general, ce legătură există între riscul și câștigul posibil al unei investiții?",
    variante: ["Câștigul posibil mai mare vine cu risc mai mare", "Cele mai sigure investiții câștigă cel mai mult", "Nu există nicio legătură", "Riscul scade când câștigul crește"],
    corect: "Câștigul posibil mai mare vine cu risc mai mare",
    explicatie: "De aceea, ofertele care promit câștiguri mari și sigure în timp scurt sunt aproape întotdeauna un semn de înșelătorie."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "usor",
    intrebare: "Ce instituție emite moneda euro?",
    variante: ["Comisia Europeană", "Banca Mondială", "Banca Centrală Europeană", "Fondul Monetar Internațional"],
    corect: "Banca Centrală Europeană",
    explicatie: "Banca Centrală Europeană are sediul la Frankfurt. România face parte din Uniunea Europeană, dar folosește în continuare leul."
  },

  // ---------- EDUCAȚIE FINANCIARĂ: MEDIU (48) ----------
  {
    domeniu: "educatie-financiara",
    dificultate: "mediu",
    intrebare: "Ce este o obligațiune?",
    variante: ["O parte dintr-o firmă", "Un împrumut dat unei companii sau statului", "Un tip de card", "O asigurare de viață"],
    corect: "Un împrumut dat unei companii sau statului",
    explicatie: "Cine cumpără o obligațiune își primește banii înapoi la o dată stabilită, plus o dobândă numită cupon. În general, obligațiunile sunt considerate mai puțin riscante decât acțiunile."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "mediu",
    intrebare: "Ce sunt titlurile de stat Tezaur și Fidelis?",
    variante: ["Acțiuni ale firmelor de stat", "Credite pentru locuințe", "Împrumuturi pe care populația le dă statului român", "Asigurări de viață"],
    corect: "Împrumuturi pe care populația le dă statului român",
    explicatie: "Tezaur se poate cumpăra, de exemplu, de la Poștă sau online, iar Fidelis se cumpără și se vinde la Bursa de Valori București. Statul folosește banii ca să-și finanțeze cheltuielile."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "mediu",
    intrebare: "Ce arată DAE la un credit?",
    variante: ["Doar dobânda fixă", "Costul total anual al creditului, cu toate comisioanele", "Avansul necesar", "Durata creditului"],
    corect: "Costul total anual al creditului, cu toate comisioanele",
    explicatie: "DAE înseamnă dobânda anuală efectivă. Două credite cu aceeași dobândă pot avea DAE diferită din cauza comisioanelor, de aceea DAE e cifra bună pentru comparat oferte."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "mediu",
    intrebare: "În 2005, leul a fost denominat. Câți lei vechi a valorat un leu nou?",
    variante: ["100", "1.000", "10.000", "100.000"],
    corect: "10.000",
    explicatie: "De la 1 iulie 2005, 10.000 de lei vechi au devenit 1 leu nou. Prețurile nu s-au schimbat de fapt, doar s-au tăiat patru zerouri."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "mediu",
    intrebare: "La ce folosește „regula lui 72”?",
    variante: ["Arată vârsta de pensionare", "Estimează în câți ani se dublează banii investiți", "Calculează impozitul pe salariu", "Stabilește dobânda maximă"],
    corect: "Estimează în câți ani se dublează banii investiți",
    explicatie: "Împarți 72 la câștigul anual, în procente. La 6% pe an, banii se dublează în aproximativ 12 ani."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "mediu",
    intrebare: "Depui 1.000 de lei cu o dobândă compusă de 10% pe an. Câți lei ai după doi ani?",
    variante: ["1.020", "1.100", "1.200", "1.210"],
    corect: "1.210",
    explicatie: "După primul an ai 1.100 de lei. În al doilea an primești 10% din 1.100, adică 110 lei, nu doar 100."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "mediu",
    intrebare: "Cum se definește, de obicei, o recesiune?",
    variante: ["O zi proastă la bursă", "Două trimestre la rând în care PIB-ul scade", "O lună cu prețuri mari", "Creșterea salariilor"],
    corect: "Două trimestre la rând în care PIB-ul scade",
    explicatie: "Este o regulă practică folosită des de economiști și jurnaliști. În timpul recesiunilor, de obicei crește șomajul."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "mediu",
    intrebare: "Ce măsoară PIB-ul?",
    variante: ["Datoria unei țări", "Valoarea bunurilor și serviciilor produse într-o țară într-o perioadă", "Numărul de locuitori", "Banii din băncile unei țări"],
    corect: "Valoarea bunurilor și serviciilor produse într-o țară într-o perioadă",
    explicatie: "PIB înseamnă Produsul Intern Brut. Împărțit la numărul de locuitori, dă PIB-ul pe cap de locuitor, folosit ca să comparăm nivelul de trai între țări."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "mediu",
    intrebare: "Ce este deflația?",
    variante: ["Scăderea generală a prețurilor", "Creșterea generală a prețurilor", "Scăderea salariilor", "Creșterea șomajului"],
    corect: "Scăderea generală a prețurilor",
    explicatie: "Pare un lucru bun, dar deflația de durată poate fi periculoasă. Oamenii amână cumpărăturile, așteptând prețuri și mai mici, iar economia încetinește."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "mediu",
    intrebare: "Ce înseamnă o „piață bull” la bursă?",
    variante: ["O piață în scădere", "O piață în creștere", "O piață agricolă", "O piață închisă"],
    corect: "O piață în creștere",
    explicatie: "Taurul (bull) lovește cu coarnele de jos în sus, iar ursul (bear) lovește cu laba de sus în jos. De aici, „piața bear” este o piață în scădere."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "mediu",
    intrebare: "Ce face un fond de investiții pe indice (de exemplu, un ETF pe indice)?",
    variante: ["Cumpără toate acțiunile dintr-un indice bursier", "Investește doar în aur", "Acordă credite", "Alege o singură acțiune norocoasă"],
    corect: "Cumpără toate acțiunile dintr-un indice bursier",
    explicatie: "În loc să alegi singur acțiuni, cumperi dintr-odată o „felie” din zeci sau sute de companii. Costurile acestor fonduri sunt, de obicei, mici."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "mediu",
    intrebare: "Ce indice bursier urmărește 500 dintre cele mai mari companii americane?",
    variante: ["Dow Jones", "S&P 500", "DAX", "Nikkei 225"],
    corect: "S&P 500",
    explicatie: "Dow Jones urmărește doar 30 de mari companii americane și este unul dintre cei mai vechi indici bursieri. DAX este principalul indice al Germaniei."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "mediu",
    intrebare: "Cum se numește principalul indice al Bursei de Valori București?",
    variante: ["FTSE", "CAC 40", "DAX", "BET"],
    corect: "BET",
    explicatie: "BET urmărește cele mai tranzacționate companii românești de la bursă. Numele vine de la „Bucharest Exchange Trading”."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "mediu",
    intrebare: "Ce înseamnă lichiditatea unei investiții?",
    variante: ["Cât de repede poate fi transformată în bani, fără pierderi mari", "Cât de profitabilă este", "Cât costă administrarea ei", "Cât de veche este"],
    corect: "Cât de repede poate fi transformată în bani, fără pierderi mari",
    explicatie: "Banii din cont sunt foarte lichizi. O casă, în schimb, poate dura luni de zile până se vinde."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "mediu",
    intrebare: "Ce garantează Fondul de Garantare a Depozitelor Bancare?",
    variante: ["Toate investițiile la bursă", "Creditele luate de la bancă", "Depozitele de până la echivalentul a 100.000 de euro, de persoană, la fiecare bancă", "Valoarea acțiunilor băncii"],
    corect: "Depozitele de până la echivalentul a 100.000 de euro, de persoană, la fiecare bancă",
    explicatie: "Dacă o bancă dă faliment, fondul le dă oamenilor banii înapoi, până la această limită. Regula este aceeași în toată Uniunea Europeană."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "mediu",
    intrebare: "Ce propune regula de buget „50/30/20”?",
    variante: ["50% nevoi, 30% dorințe, 20% economii", "50% economii, 30% chirie, 20% mâncare", "50% impozite, 30% nevoi, 20% distracție", "Să cheltui maximum 50 de lei pe zi"],
    corect: "50% nevoi, 30% dorințe, 20% economii",
    explicatie: "Regula a fost popularizată de politiciana americană Elizabeth Warren, într-o carte scrisă împreună cu fiica ei. Este un punct de plecare, nu o lege."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "mediu",
    intrebare: "Ce este Pilonul II de pensii?",
    variante: ["Pensia de stat", "O parte din contribuția la pensie, investită de o firmă privată în contul tău", "O pensie facultativă", "Un ajutor social"],
    corect: "O parte din contribuția la pensie, investită de o firmă privată în contul tău",
    explicatie: "Pilonul II a fost introdus în România în 2008. Spre deosebire de pensia de stat, banii strânși acolo sunt proprietatea ta și pot fi moșteniți."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "mediu",
    intrebare: "Ce înseamnă sfatul „plătește-te mai întâi pe tine”?",
    variante: ["Să-ți cumperi ceva frumos din fiecare salariu", "Să pui deoparte economiile imediat ce primești venitul", "Să-ți plătești întâi datoriile prietenilor", "Să nu plătești facturile"],
    corect: "Să pui deoparte economiile imediat ce primești venitul",
    explicatie: "Mulți oameni își setează un transfer automat spre economii chiar în ziua salariului. Așa nu mai sunt tentați să cheltuiască banii."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "mediu",
    intrebare: "Ce păstrează Biroul de Credit?",
    variante: ["Istoricul de plată al creditelor oamenilor", "Rezerva de aur a țării", "Declarațiile de impozit", "Bancnotele scoase din uz"],
    corect: "Istoricul de plată al creditelor oamenilor",
    explicatie: "Băncile îl consultă înainte să dea un împrumut. Întârzierile la plată rămân în evidență câțiva ani și pot face mai greu de obținut un credit nou."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "mediu",
    intrebare: "Ce este leasingul?",
    variante: ["Un depozit bancar", "Folosirea unui bun plătind rate, cu posibilitatea de a-l deține la final", "O asigurare pentru mașină", "Un tip de impozit"],
    corect: "Folosirea unui bun plătind rate, cu posibilitatea de a-l deține la final",
    explicatie: "Leasingul este folosit des pentru mașini, mai ales de firme. Până la ultima rată, bunul aparține de obicei firmei de leasing."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "mediu",
    intrebare: "Ce este avansul la un credit?",
    variante: ["Ultima rată a creditului", "Suma plătită din banii tăi la început", "Comisionul băncii", "Dobânda pe primul an"],
    corect: "Suma plătită din banii tăi la început",
    explicatie: "Cu cât avansul este mai mare, cu atât împrumuți mai puțin. Asta înseamnă și mai puțină dobândă plătită în total."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "mediu",
    intrebare: "Ce este o schemă Ponzi?",
    variante: ["Un tip de credit ipotecar", "O înșelătorie în care primii investitori sunt plătiți din banii celor noi", "Un fond de pensii", "O metodă de economisire"],
    corect: "O înșelătorie în care primii investitori sunt plătiți din banii celor noi",
    explicatie: "Numele vine de la Charles Ponzi, care a păcălit mii de oameni în SUA, în 1920. Schema se prăbușește când nu mai vin investitori noi."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "mediu",
    intrebare: "Ce joc piramidal a atras milioane de români la începutul anilor 1990?",
    variante: ["FNI", "Caritas", "Bancorex", "Dacia Felix"],
    corect: "Caritas",
    explicatie: "Caritas a pornit din Cluj, în 1992, și promitea că dă înapoi de opt ori suma depusă, după trei luni. S-a prăbușit în 1994, iar cei mai mulți participanți și-au pierdut banii."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "mediu",
    intrebare: "Ce economist scoțian a scris „Avuția națiunilor” (1776), considerată baza economiei moderne?",
    variante: ["John Maynard Keynes", "Karl Marx", "Adam Smith", "David Ricardo"],
    corect: "Adam Smith",
    explicatie: "Smith a descris prin expresia „mâna invizibilă” felul în care piața se poate echilibra singură. Chipul lui a apărut pe bancnota britanică de 20 de lire."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "mediu",
    intrebare: "Ce investitor american este supranumit „Oracolul din Omaha”?",
    variante: ["George Soros", "Warren Buffett", "Bill Gates", "Elon Musk"],
    corect: "Warren Buffett",
    explicatie: "Buffett este cunoscut pentru investițiile pe termen lung în companii solide. Și-a cumpărat prima acțiune la doar 11 ani."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "mediu",
    intrebare: "Ce criză financiară a izbucnit odată cu falimentul băncii Lehman Brothers?",
    variante: ["Marea Depresiune", "Criza petrolului din 1973", "Criza financiară din 2008", "Criza datoriilor din 1982"],
    corect: "Criza financiară din 2008",
    explicatie: "Lehman Brothers a dat faliment în septembrie 2008, cel mai mare faliment din istoria SUA. Criza a pornit de la credite pentru case acordate unor oameni care nu le puteau plăti."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "mediu",
    intrebare: "Ce este Pilonul III de pensii?",
    variante: ["O pensie privată facultativă, la care alegi dacă și cât contribui", "Pensia de stat, plătită din contribuțiile obligatorii", "Partea obligatorie din contribuție, administrată privat", "Un ajutor plătit în perioada de șomaj"],
    corect: "O pensie privată facultativă, la care alegi dacă și cât contribui",
    explicatie: "Contribuțiile pot fi plătite de tine sau de angajator. O parte din ele poate fi dedusă fiscal, în anumite limite. Partea obligatorie administrată privat este Pilonul II."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "mediu",
    intrebare: "Ce arată randamentul unei investiții?",
    variante: ["Suma totală investită", "Câștigul raportat la suma investită", "Comisionul plătit brokerului", "Numărul de acțiuni deținute"],
    corect: "Câștigul raportat la suma investită",
    explicatie: "Dacă investești 1.000 de lei și după un an ai 1.080 de lei, randamentul este de 8%. Randamentul se exprimă de obicei în procente pe an."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "mediu",
    intrebare: "Ce este cursul de schimb valutar?",
    variante: ["Dobânda plătită pentru un depozit în valută", "Comisionul unei case de schimb", "Prețul unei monede exprimat într-o altă monedă", "Inflația dintr-o țară străină"],
    corect: "Prețul unei monede exprimat într-o altă monedă",
    explicatie: "Cursul oficial al leului este publicat zilnic de BNR. Casele de schimb cumpără și vând valuta la prețuri diferite, iar diferența este câștigul lor."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "mediu",
    intrebare: "Ce este un credit de nevoi personale?",
    variante: ["Un credit pentru cumpărarea unei locuințe", "Un credit acordat numai firmelor", "Un împrumut fără dobândă de la stat", "Un împrumut pe care îl poți folosi pentru orice, de obicei fără ipotecă"],
    corect: "Un împrumut pe care îl poți folosi pentru orice, de obicei fără ipotecă",
    explicatie: "Pentru că banca nu are o casă drept garanție, riscul ei este mai mare. De aceea, dobânda este de obicei mai mare decât la un credit ipotecar."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "mediu",
    intrebare: "Ce este descoperitul de cont (overdraft)?",
    variante: ["Posibilitatea de a cheltui mai mult decât ai în cont, până la o limită", "O taxă pentru închiderea contului", "Un cont de economii cu dobândă mare", "Blocarea cardului după trei PIN-uri greșite"],
    corect: "Posibilitatea de a cheltui mai mult decât ai în cont, până la o limită",
    explicatie: "Practic, este un mic împrumut atașat contului curent. Dobânzile la descoperitul de cont sunt de obicei destul de mari."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "mediu",
    intrebare: "Ce înseamnă să refinanțezi un credit?",
    variante: ["Să amâni plata ratelor câteva luni", "Să iei un credit nou, în condiții mai bune, ca să-l închizi pe cel vechi", "Să mărești suma creditului existent", "Să transferi creditul pe numele altei persoane"],
    corect: "Să iei un credit nou, în condiții mai bune, ca să-l închizi pe cel vechi",
    explicatie: "Refinanțarea merită de obicei când dobânzile au scăzut sau când găsești o ofertă mai bună. Trebuie luate în calcul și comisioanele noului credit."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "mediu",
    intrebare: "Ce înseamnă rambursarea anticipată a unui credit?",
    variante: ["Plata primei rate înainte de semnarea contractului", "Amânarea plății ratelor", "Plata creditului sau a unei părți din el înainte de termen", "Plata avansului"],
    corect: "Plata creditului sau a unei părți din el înainte de termen",
    explicatie: "Astfel plătești mai puțină dobândă în total. Poți alege, de obicei, fie să scazi rata lunară, fie să scurtezi perioada creditului."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "mediu",
    intrebare: "Ce face un card cu cashback?",
    variante: ["Îți permite să scoți numerar fără comision de la orice bancomat", "Îți dă un credit fără dobândă", "Îți convertește automat banii în euro", "Îți returnează un mic procent din suma cheltuită"],
    corect: "Îți returnează un mic procent din suma cheltuită",
    explicatie: "De exemplu, la un cashback de 1%, pentru 500 de lei cheltuiți primești înapoi 5 lei."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "mediu",
    intrebare: "Ce este o franciză, în afaceri?",
    variante: ["Dreptul de a folosi numele și modelul de afaceri al unei companii, contra unei taxe", "Un tip de asigurare pentru firme", "O reducere de taxe pentru firmele noi", "Un împrumut fără dobândă pentru afaceri"],
    corect: "Dreptul de a folosi numele și modelul de afaceri al unei companii, contra unei taxe",
    explicatie: "Multe restaurante fast-food funcționează așa: proprietarul local plătește companiei-mamă o taxă și o parte din vânzări."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "mediu",
    intrebare: "Ce înseamnă PFA?",
    variante: ["Plan financiar anual", "Persoană fizică autorizată", "Pensie facultativă asigurată", "Plată fiscală anticipată"],
    corect: "Persoană fizică autorizată",
    explicatie: "Un PFA îi permite unei persoane să lucreze pe cont propriu, fără să înființeze o firmă. Veniturile se declară anual la ANAF."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "mediu",
    intrebare: "Ce înseamnă „răspundere limitată” la un SRL?",
    variante: ["Firma poate avea cel mult zece angajați", "Firma nu plătește impozit pe profit", "Asociații răspund pentru datoriile firmei doar cu banii aduși în firmă", "Asociații nu pot fi trași la răspundere în niciun fel"],
    corect: "Asociații răspund pentru datoriile firmei doar cu banii aduși în firmă",
    explicatie: "În principiu, bunurile personale ale asociaților nu pot fi luate pentru datoriile firmei. Există însă excepții, de exemplu în caz de fraudă."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "mediu",
    intrebare: "Ce taxă este inclusă în prețul majorității produselor din magazine?",
    variante: ["Impozitul pe venit", "Contribuția la pensie", "Impozitul pe profit", "TVA"],
    corect: "TVA",
    explicatie: "TVA este plătită de cumpărătorul final, dar este colectată de firme și virată statului. Cota poate fi mai mică pentru unele produse, precum alimentele sau medicamentele."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "mediu",
    intrebare: "Ce este Declarația unică?",
    variante: ["Formularul anual prin care declari la ANAF veniturile din afara salariului", "Contractul de muncă înregistrat la ITM", "Formularul pentru deschiderea unui cont bancar", "Declarația de avere a demnitarilor"],
    corect: "Formularul anual prin care declari la ANAF veniturile din afara salariului",
    explicatie: "O depun, de exemplu, cei care au venituri din chirii, din activități pe cont propriu sau din investiții."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "mediu",
    intrebare: "Ce face un broker de bursă?",
    variante: ["Stabilește prețul acțiunilor", "Cumpără și vinde investiții în numele clienților", "Emite bancnotele țării", "Garantează depozitele bancare"],
    corect: "Cumpără și vinde investiții în numele clienților",
    explicatie: "Ca să cumperi acțiuni la Bursa de Valori București, ai nevoie de un cont la un broker autorizat. Brokerul ia de obicei un comision la fiecare tranzacție."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "mediu",
    intrebare: "Ce instituție supraveghează în România piața de capital, asigurările și pensiile private?",
    variante: ["BNR", "ANAF", "ASF", "ANPC"],
    corect: "ASF",
    explicatie: "ASF vine de la Autoritatea de Supraveghere Financiară. Băncile sunt supravegheate, în schimb, de BNR."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "mediu",
    intrebare: "Ce instituție apără drepturile clienților înșelați de un magazin?",
    variante: ["ASF", "ANAF", "Curtea de Conturi", "ANPC"],
    corect: "ANPC",
    explicatie: "ANPC vine de la Autoritatea Națională pentru Protecția Consumatorilor. La cumpărăturile online din UE ai de regulă 14 zile ca să returnezi produsul, fără să explici de ce."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "mediu",
    intrebare: "Cum se calculează capitalizarea bursieră a unei companii?",
    variante: ["Prețul unei acțiuni înmulțit cu numărul total de acțiuni", "Profitul anual înmulțit cu zece", "Valoarea clădirilor și utilajelor firmei", "Suma salariilor plătite într-un an"],
    corect: "Prețul unei acțiuni înmulțit cu numărul total de acțiuni",
    explicatie: "Capitalizarea arată cât valorează compania la bursă, în acel moment. Este folosită ca să comparăm mărimea companiilor listate."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "mediu",
    intrebare: "Ce înseamnă IPO pentru o companie?",
    variante: ["Retragerea companiei de la bursă", "Prima vânzare publică a acțiunilor ei, la bursă", "Plata primului dividend", "Falimentul companiei"],
    corect: "Prima vânzare publică a acțiunilor ei, la bursă",
    explicatie: "IPO vine din engleză, de la „Initial Public Offering”. Una dintre cele mai mari listări din România a fost cea a Hidroelectrica, în 2023."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "mediu",
    intrebare: "Ce este un fond mutual de investiții?",
    variante: ["Un cont de economii garantat de stat", "Un împrumut colectiv luat de o asociație", "Banii mai multor investitori, administrați împreună de profesioniști", "Un fond de pensii obligatoriu"],
    corect: "Banii mai multor investitori, administrați împreună de profesioniști",
    explicatie: "Investitorii cumpără „unități de fond”, a căror valoare crește sau scade odată cu investițiile fondului. Administratorul ia un comision anual."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "mediu",
    intrebare: "Ce înseamnă volatilitatea unei acțiuni?",
    variante: ["Numărul de acționari", "Dividendul plătit pe an", "Vechimea companiei la bursă", "Cât de mult și cât de des îi variază prețul"],
    corect: "Cât de mult și cât de des îi variază prețul",
    explicatie: "O acțiune foarte volatilă poate crește sau scădea mult într-o singură zi. Volatilitatea mare înseamnă, de obicei, și risc mai mare."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "mediu",
    intrebare: "Ce înseamnă dobânda fixă la un credit?",
    variante: ["O dobândă care rămâne aceeași pe o perioadă stabilită", "O dobândă care urmează un indice precum IRCC", "O dobândă care scade automat în fiecare an", "O dobândă plătită o singură dată, la final"],
    corect: "O dobândă care rămâne aceeași pe o perioadă stabilită",
    explicatie: "Dobânda variabilă se modifică în funcție de un indice, precum IRCC sau EURIBOR. Multe bănci oferă dobândă fixă în primii ani, apoi variabilă."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "mediu",
    intrebare: "Ce asigurare de locuință este obligatorie în România?",
    variante: ["Polița RCA", "Polița PAD", "Polița CASCO", "Asigurarea de viață"],
    corect: "Polița PAD",
    explicatie: "Polița PAD acoperă locuința, până la o anumită sumă, în caz de cutremur, inundație sau alunecare de teren."
  },

  // ---------- EDUCAȚIE FINANCIARĂ: GREU (32) ----------
  {
    domeniu: "educatie-financiara",
    dificultate: "greu",
    intrebare: "Ce indice, introdus în 2019, se folosește în România pentru dobânda variabilă a creditelor noi în lei pentru populație?",
    variante: ["ROBOR", "IRCC", "EURIBOR", "DAE"],
    corect: "IRCC",
    explicatie: "IRCC se calculează din dobânzile tranzacțiilor dintre bănci din trecut, așa că reacționează mai încet decât ROBOR la schimbările din piață."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "greu",
    intrebare: "Ce eveniment a declanșat Marea Depresiune?",
    variante: ["Primul Război Mondial", "Prăbușirea bursei de pe Wall Street, din 1929", "Criza petrolului", "Falimentul băncii Lehman Brothers"],
    corect: "Prăbușirea bursei de pe Wall Street, din 1929",
    explicatie: "Ziua de 29 octombrie 1929 a rămas cunoscută drept „Marțea Neagră”. În SUA, șomajul a ajuns apoi la aproximativ un sfert din forța de muncă."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "greu",
    intrebare: "În ce țară a avut loc „mania lalelelor”, una dintre primele bule speculative celebre?",
    variante: ["Franța", "Anglia", "Țările de Jos", "Turcia"],
    corect: "Țările de Jos",
    explicatie: "Potrivit relatărilor din epocă, în 1637 unii bulbi de lalele rare s-au vândut pe prețul unei case. Apoi prețurile s-au prăbușit brusc."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "greu",
    intrebare: "În ce an a fost înființată Banca Națională a României?",
    variante: ["1859", "1880", "1918", "1948"],
    corect: "1880",
    explicatie: "BNR a fost înființată în timpul domniei lui Carol I, la inițiativa lui Ion C. Brătianu. Leul devenise moneda națională în 1867."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "greu",
    intrebare: "Cum se numește situația în care economia stagnează, dar prețurile cresc puternic în același timp?",
    variante: ["Deflație", "Stagflație", "Hiperinflație", "Recesiune"],
    corect: "Stagflație",
    explicatie: "Termenul a devenit cunoscut în anii 1970, după crizele petrolului. Este greu de combătut, pentru că măsurile împotriva inflației pot încetini și mai mult economia."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "greu",
    intrebare: "Ce țară a emis o bancnotă de 100 de trilioane de dolari, din cauza hiperinflației?",
    variante: ["Venezuela", "Argentina", "Germania", "Zimbabwe"],
    corect: "Zimbabwe",
    explicatie: "Bancnota a apărut în 2009. La apogeul crizei, prețurile se dublau aproape în fiecare zi."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "greu",
    intrebare: "Ce sistem monetar s-a încheiat în 1971, când SUA au încetat să schimbe dolarii în aur?",
    variante: ["Sistemul Bretton Woods", "Etalonul argint", "Uniunea Monetară Latină", "Sistemul Monetar European"],
    corect: "Sistemul Bretton Woods",
    explicatie: "Sistemul fusese creat în 1944 și lega monedele lumii de dolar, iar dolarul de aur. La aceeași conferință au fost înființate FMI și Banca Mondială."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "greu",
    intrebare: "Ce criptomonedă a fost lansată în 2009 de cineva care folosea pseudonimul Satoshi Nakamoto?",
    variante: ["Ethereum", "Bitcoin", "Dogecoin", "Litecoin"],
    corect: "Bitcoin",
    explicatie: "Pot exista cel mult 21 de milioane de bitcoini. Identitatea reală a lui Satoshi Nakamoto nu este cunoscută nici azi."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "greu",
    intrebare: "În ce regat au apărut primele monede metalice cunoscute, în secolul al VII-lea î.Hr.?",
    variante: ["Egipt", "Lidia", "Babilon", "Persia"],
    corect: "Lidia",
    explicatie: "Erau făcute din electrum, un aliaj natural de aur și argint. Regele Cresus al Lidiei a rămas în expresia „bogat ca Cresus”."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "greu",
    intrebare: "Unde au fost folosiți pentru prima dată banii de hârtie?",
    variante: ["China", "Italia", "Anglia", "Egipt"],
    corect: "China",
    explicatie: "Bancnotele au apărut în China în jurul secolului al XI-lea. Marco Polo a descris cu uimire, în relatările lui, folosirea banilor de hârtie."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "greu",
    intrebare: "Ce este costul de oportunitate?",
    variante: ["Prețul unei acțiuni", "Valoarea celei mai bune alternative la care renunți când alegi ceva", "Comisionul unei bănci", "Costul unui credit"],
    corect: "Valoarea celei mai bune alternative la care renunți când alegi ceva",
    explicatie: "Dacă petreci o seară la film, costul de oportunitate poate fi banii pe care i-ai fi câștigat lucrând în seara aceea. Orice alegere are un astfel de cost, chiar dacă nu se vede."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "greu",
    intrebare: "Ce economist britanic a susținut că statul ar trebui să cheltuiască mai mult în perioadele de criză, ca să susțină economia?",
    variante: ["Adam Smith", "John Maynard Keynes", "Milton Friedman", "Friedrich Hayek"],
    corect: "John Maynard Keynes",
    explicatie: "Ideile lui au influențat politicile economice de după Marea Depresiune. Tot el a scris celebra frază „pe termen lung, toți suntem morți”."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "greu",
    intrebare: "Ce instituție internațională acordă împrumuturi statelor aflate în criză financiară?",
    variante: ["Banca Centrală Europeană", "Fondul Monetar Internațional", "Organizația Mondială a Comerțului", "NATO"],
    corect: "Fondul Monetar Internațional",
    explicatie: "FMI are sediul la Washington. România a încheiat un acord de împrumut cu FMI în 2009, în timpul crizei economice."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "greu",
    intrebare: "Depozitul tău aduce 5% pe an, iar inflația este de 7%. Ce se întâmplă cu puterea de cumpărare a banilor tăi?",
    variante: ["Crește", "Rămâne la fel", "Scade", "Se dublează"],
    corect: "Scade",
    explicatie: "Câștigul real este de aproximativ 5% - 7% = -2% pe an. Ai mai mulți lei, dar cu ei poți cumpăra mai puține lucruri."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "greu",
    intrebare: "Ce se întâmplă de obicei cu prețul obligațiunilor existente când dobânzile din piață cresc?",
    variante: ["Crește", "Rămâne neschimbat", "Scade", "Se dublează"],
    corect: "Scade",
    explicatie: "O obligațiune mai veche plătește o dobândă mai mică decât cele noi, așa că investitorii vor plăti mai puțin pentru ea."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "greu",
    intrebare: "Ce este rata de politică monetară a BNR?",
    variante: ["Cursul oficial al euro", "Inflația anuală", "Impozitul pe dobânzi", "Dobânda de referință stabilită de banca centrală"],
    corect: "Dobânda de referință stabilită de banca centrală",
    explicatie: "Când BNR crește această dobândă, creditele se scumpesc și cheltuielile scad, ceea ce ajută la reducerea inflației."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "greu",
    intrebare: "Ce înseamnă relaxarea cantitativă (quantitative easing)?",
    variante: ["Cumpărarea masivă de obligațiuni de către banca centrală, ca să pună bani în economie", "Reducerea impozitelor pe venit", "Tipărirea de bancnote cu valoare mai mică", "Interzicerea creditelor în valută"],
    corect: "Cumpărarea masivă de obligațiuni de către banca centrală, ca să pună bani în economie",
    explicatie: "Băncile centrale mari, precum Rezerva Federală americană și BCE, au folosit mult această metodă după criza din 2008 și în timpul pandemiei."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "greu",
    intrebare: "Cum se numește banca centrală a Statelor Unite?",
    variante: ["Trezoreria SUA", "Rezerva Federală", "Banca Mondială", "Banca Americii"],
    corect: "Rezerva Federală",
    explicatie: "Rezerva Federală a fost înființată în 1913. Este formată din 12 bănci regionale și un consiliu central, la Washington."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "greu",
    intrebare: "Ce spune „legea lui Gresham”?",
    variante: ["Prețurile cresc când crește cantitatea de bani", "Oferta își creează singură cererea", "Banii „răi” îi scot din circulație pe cei „buni”", "Banii pierd din valoare în timp"],
    corect: "Banii „răi” îi scot din circulație pe cei „buni”",
    explicatie: "Când circulau monede de aur și argint cu aceeași valoare oficială, oamenii le păstrau pe cele mai valoroase și le cheltuiau pe cele de calitate slabă."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "greu",
    intrebare: "Ce economist american a susținut că inflația apare când banca centrală pune prea mulți bani în circulație?",
    variante: ["John Maynard Keynes", "Paul Krugman", "John Kenneth Galbraith", "Milton Friedman"],
    corect: "Milton Friedman",
    explicatie: "Friedman a primit Premiul Nobel pentru Economie în 1976. Fraza lui celebră spune că inflația este întotdeauna și peste tot un fenomen monetar."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "greu",
    intrebare: "Ce idee ilustrează curba Laffer?",
    variante: ["Peste un anumit nivel al impozitelor, veniturile statului pot scădea", "Inflația scade atunci când crește șomajul", "Prețurile cresc odată cu salariile", "Cererea scade când prețul crește"],
    corect: "Peste un anumit nivel al impozitelor, veniturile statului pot scădea",
    explicatie: "La 0% impozit, statul nu încasează nimic, iar la 100% nimeni nu ar mai avea motiv să muncească oficial. Undeva între ele se află nivelul care aduce încasări maxime."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "greu",
    intrebare: "Ce criză financiară a lovit în 1997 țări precum Thailanda, Indonezia și Coreea de Sud?",
    variante: ["Criza financiară globală", "Criza financiară asiatică", "Criza petrolului", "Criza datoriilor din zona euro"],
    corect: "Criza financiară asiatică",
    explicatie: "Criza a început în Thailanda, după prăbușirea monedei naționale, bahtul, și s-a extins rapid în regiune."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "greu",
    intrebare: "Ce stat european a primit trei programe de salvare de la UE și FMI, între 2010 și 2018?",
    variante: ["Irlanda", "Portugalia", "Grecia", "Cipru"],
    corect: "Grecia",
    explicatie: "Irlanda, Portugalia și Cipru au primit și ele ajutor, dar câte un singur program. Grecia a primit trei, în schimbul unor măsuri dure de austeritate."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "greu",
    intrebare: "Ce bancă de stat românească s-a prăbușit în 1999, cu pierderi mari acoperite de buget?",
    variante: ["BCR", "CEC", "BRD", "Bancorex"],
    corect: "Bancorex",
    explicatie: "Bancorex acordase multe credite care nu au mai fost returnate. Ce a rămas din bancă a fost preluat de BCR."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "greu",
    intrebare: "Ce fond de investiții românesc a suspendat plățile în anul 2000, afectând sute de mii de investitori?",
    variante: ["FNI", "Caritas", "Fondul Proprietății de Stat", "Fondul Proprietatea"],
    corect: "FNI",
    explicatie: "FNI vine de la Fondul Național de Investiții. Raportase câștiguri nerealiste, iar mulți investitori nu și-au mai recuperat banii."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "greu",
    intrebare: "Ce este inflația de bază?",
    variante: ["Inflația dintr-un singur an de bază", "Inflația calculată fără prețurile cele mai volatile, precum energia și unele alimente", "Inflația minimă impusă prin lege", "Inflația măsurată doar la produsele de bază"],
    corect: "Inflația calculată fără prețurile cele mai volatile, precum energia și unele alimente",
    explicatie: "Băncile centrale o urmăresc ca să vadă tendința reală a prețurilor, fără efectul de moment al unei scumpiri bruște la carburanți sau legume."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "greu",
    intrebare: "Ce înseamnă impozitarea progresivă?",
    variante: ["Toată lumea plătește același procent", "Impozitul scade în fiecare an", "Procentul de impozit crește odată cu venitul", "Doar firmele plătesc impozit"],
    corect: "Procentul de impozit crește odată cu venitul",
    explicatie: "Opusul ei este cota unică, în care toată lumea plătește același procent, indiferent de venit."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "greu",
    intrebare: "Ce nivel maxim al datoriei publice recomandă regulile UE, ca procent din PIB?",
    variante: ["30%", "90%", "100%", "60%"],
    corect: "60%",
    explicatie: "Pragul a fost stabilit prin Tratatul de la Maastricht. Multe state membre îl depășesc în prezent."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "greu",
    intrebare: "Ce limită a deficitului bugetar anual stabilesc regulile UE, ca procent din PIB?",
    variante: ["3%", "1%", "5%", "10%"],
    corect: "3%",
    explicatie: "Deficitul apare când statul cheltuiește mai mult decât încasează într-un an. Statele care depășesc mult limita pot intra în procedura de deficit excesiv."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "greu",
    intrebare: "Ce înseamnă vânzarea în lipsă (short selling)?",
    variante: ["Vinzi acțiuni sub prețul de cumpărare", "Vinzi acțiuni împrumutate, sperând să le cumperi înapoi mai ieftin", "Cumperi acțiuni pe credit", "Vinzi acțiunile înainte de plata dividendului"],
    corect: "Vinzi acțiuni împrumutate, sperând să le cumperi înapoi mai ieftin",
    explicatie: "Dacă prețul crește în loc să scadă, pierderea poate fi, teoretic, nelimitată. Filmul „The Big Short” arată investitori care au pariat astfel împotriva pieței imobiliare înainte de 2008."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "greu",
    intrebare: "În ce an au intrat în circulație bancnotele și monedele euro?",
    variante: ["1999", "2004", "2002", "2007"],
    corect: "2002",
    explicatie: "Euro exista din 1999, dar doar pentru plăți electronice. Bancnotele și monedele au apărut pe 1 ianuarie 2002."
  },
  {
    domeniu: "educatie-financiara",
    dificultate: "greu",
    intrebare: "Ce a creat Muhammad Yunus, laureat al Premiului Nobel pentru Pace în 2006?",
    variante: ["Primul card de credit", "Prima bursă electronică", "Primul fond de pensii privat", "Un sistem de microcredite pentru oamenii foarte săraci"],
    corect: "Un sistem de microcredite pentru oamenii foarte săraci",
    explicatie: "Grameen Bank, fondată de el în Bangladesh, dă împrumuturi mici, fără garanții, mai ales femeilor. Yunus și banca au primit premiul împreună."
  },

  // =======================================================
  // SOCIO-POLITICĂ (100 de întrebări)
  // =======================================================

  // ---------- SOCIO-POLITICĂ: UȘOR (20) ----------
  {
    domeniu: "socio-politica",
    dificultate: "usor",
    intrebare: "Câți ani durează mandatul președintelui României?",
    variante: ["4 ani", "5 ani", "6 ani", "7 ani"],
    corect: "5 ani",
    explicatie: "Până în 2004, mandatul era de 4 ani; a fost prelungit prin revizuirea Constituției din 2003. Un președinte poate avea cel mult două mandate."
  },
  {
    domeniu: "socio-politica",
    dificultate: "usor",
    intrebare: "Din ce camere este format Parlamentul României?",
    variante: ["Senatul și Guvernul", "Camera Deputaților și Senatul", "Camera Deputaților și Curtea Constituțională", "Adunarea Națională și Consiliul de Stat"],
    corect: "Camera Deputaților și Senatul",
    explicatie: "Un parlament cu două camere se numește bicameral. Parlamentul României este ales o dată la patru ani."
  },
  {
    domeniu: "socio-politica",
    dificultate: "usor",
    intrebare: "Unde își are sediul oficial președintele României?",
    variante: ["Palatul Victoria", "Palatul Parlamentului", "Palatul Cotroceni", "Palatul Regal"],
    corect: "Palatul Cotroceni",
    explicatie: "Palatul Cotroceni a fost reședința familiei regale a României. O parte din el funcționează astăzi ca muzeu."
  },
  {
    domeniu: "socio-politica",
    dificultate: "usor",
    intrebare: "De la ce vârstă au drept de vot cetățenii români?",
    variante: ["16 ani", "18 ani", "20 de ani", "21 de ani"],
    corect: "18 ani",
    explicatie: "Constituția descrie votul ca universal, egal, direct, secret și liber exprimat. Câteva țări, precum Austria, permit votul de la 16 ani."
  },
  {
    domeniu: "socio-politica",
    dificultate: "usor",
    intrebare: "În ce an a aderat România la Uniunea Europeană?",
    variante: ["2004", "2007", "2010", "2013"],
    corect: "2007",
    explicatie: "România și Bulgaria au intrat în UE pe 1 ianuarie 2007. Croația a urmat în 2013."
  },
  {
    domeniu: "socio-politica",
    dificultate: "usor",
    intrebare: "În ce an a devenit România membră NATO?",
    variante: ["1999", "2004", "2007", "2009"],
    corect: "2004",
    explicatie: "România a aderat în martie 2004, odată cu alte șase state din Europa Centrală și de Est. Printre ele s-au aflat Bulgaria și cele trei țări baltice."
  },
  {
    domeniu: "socio-politica",
    dificultate: "usor",
    intrebare: "Ce înseamnă cuvântul „democrație”, din greaca veche?",
    variante: ["Puterea regelui", "Puterea celor bogați", "Puterea poporului", "Puterea zeilor"],
    corect: "Puterea poporului",
    explicatie: "Cuvântul vine din „demos” (popor) și „kratos” (putere). Democrația s-a născut în Atena antică, la sfârșitul secolului al VI-lea î.Hr."
  },
  {
    domeniu: "socio-politica",
    dificultate: "usor",
    intrebare: "Ce organizație internațională a fost înființată în 1945 pentru menținerea păcii în lume?",
    variante: ["NATO", "ONU", "Uniunea Europeană", "Liga Națiunilor"],
    corect: "ONU",
    explicatie: "ONU a luat locul Ligii Națiunilor, care nu reușise să împiedice Al Doilea Război Mondial. Sediul ei principal este la New York."
  },
  {
    domeniu: "socio-politica",
    dificultate: "usor",
    intrebare: "În ce oraș se află majoritatea instituțiilor Uniunii Europene, precum Comisia Europeană?",
    variante: ["Paris", "Berlin", "Viena", "Bruxelles"],
    corect: "Bruxelles",
    explicatie: "Parlamentul European își ține sesiunile plenare atât la Strasbourg, cât și la Bruxelles. Curtea de Justiție a UE se află la Luxemburg."
  },
  {
    domeniu: "socio-politica",
    dificultate: "usor",
    intrebare: "Ce instituție verifică dacă legile respectă Constituția României?",
    variante: ["Curtea Constituțională", "Înalta Curte de Casație și Justiție", "Curtea de Conturi", "Avocatul Poporului"],
    corect: "Curtea Constituțională",
    explicatie: "Deciziile ei sunt obligatorii. O lege declarată neconstituțională nu mai poate fi aplicată în forma respectivă."
  },
  {
    domeniu: "socio-politica",
    dificultate: "usor",
    intrebare: "Câte state membre are Uniunea Europeană după ieșirea Regatului Unit?",
    variante: ["25", "27", "28", "30"],
    corect: "27",
    explicatie: "Regatul Unit a ieșit din UE pe 31 ianuarie 2020, după referendumul din 2016. Momentul a fost numit „Brexit”."
  },
  {
    domeniu: "socio-politica",
    dificultate: "usor",
    intrebare: "Cum se numește principiul prin care puterea în stat este împărțită între legislativ, executiv și judecătoresc?",
    variante: ["Centralizarea", "Separația puterilor", "Monarhia absolută", "Federalismul"],
    corect: "Separația puterilor",
    explicatie: "Ideea a fost formulată clar de filosoful francez Montesquieu, în 1748, în lucrarea „Despre spiritul legilor”. Fiecare putere le controlează și le limitează pe celelalte."
  },
  {
    domeniu: "socio-politica",
    dificultate: "usor",
    intrebare: "Ce culori are drapelul României, de la lance spre margine?",
    variante: ["Roșu, galben, albastru", "Galben, albastru, roșu", "Albastru, galben, roșu", "Albastru, roșu, galben"],
    corect: "Albastru, galben, roșu",
    explicatie: "Drapelul Ciadului are aproape aceleași culori, în aceeași ordine. Diferența constă doar într-o nuanță puțin diferită de albastru."
  },
  {
    domeniu: "socio-politica",
    dificultate: "usor",
    intrebare: "Care este imnul național al României?",
    variante: ["Hora Unirii", "Deșteaptă-te, române!", "Trei culori", "Pe-al nostru steag e scris Unire"],
    corect: "Deșteaptă-te, române!",
    explicatie: "Versurile au fost scrise de Andrei Mureșanu, în timpul Revoluției de la 1848. A devenit imn național după Revoluția din 1989."
  },
  {
    domeniu: "socio-politica",
    dificultate: "usor",
    intrebare: "Cine conduce Guvernul României?",
    variante: ["Președintele", "Prim-ministrul", "Președintele Senatului", "Guvernatorul BNR"],
    corect: "Prim-ministrul",
    explicatie: "Președintele desemnează un candidat pentru funcția de prim-ministru. Guvernul trebuie apoi să primească votul de încredere al Parlamentului."
  },
  {
    domeniu: "socio-politica",
    dificultate: "usor",
    intrebare: "Ce este un referendum?",
    variante: ["Un vot prin care cetățenii decid direct asupra unei probleme", "O ședință a Guvernului", "Un proces la Curtea Constituțională", "Un impozit pe vot"],
    corect: "Un vot prin care cetățenii decid direct asupra unei probleme",
    explicatie: "Actuala Constituție a României a fost adoptată prin referendum, pe 8 decembrie 1991. De atunci, 8 decembrie este Ziua Constituției."
  },
  {
    domeniu: "socio-politica",
    dificultate: "usor",
    intrebare: "Ce document, adoptat de ONU în 1948, enumeră drepturile fundamentale ale tuturor oamenilor?",
    variante: ["Magna Carta", "Carta ONU", "Declarația Universală a Drepturilor Omului", "Convenția de la Geneva"],
    corect: "Declarația Universală a Drepturilor Omului",
    explicatie: "Declarația a fost adoptată pe 10 decembrie 1948, zi sărbătorită azi drept Ziua Drepturilor Omului. Comisia care a redactat-o a fost condusă de Eleanor Roosevelt."
  },
  {
    domeniu: "socio-politica",
    dificultate: "usor",
    intrebare: "Ce instituție îi apără pe cetățeni atunci când drepturile le sunt încălcate de autorități?",
    variante: ["Curtea de Conturi", "Avocatul Poporului", "Prefectura", "Banca Națională"],
    corect: "Avocatul Poporului",
    explicatie: "Avocatul Poporului este numit de Parlament, pentru un mandat de 5 ani. Oricine îi poate trimite o petiție, gratuit."
  },
  {
    domeniu: "socio-politica",
    dificultate: "usor",
    intrebare: "Ce formă de guvernământ are România?",
    variante: ["Monarhie constituțională", "Monarhie absolută", "Republică", "Imperiu"],
    corect: "Republică",
    explicatie: "România a devenit republică pe 30 decembrie 1947, când regele Mihai I a fost obligat să abdice. Până atunci fusese regat, din 1881."
  },
  {
    domeniu: "socio-politica",
    dificultate: "usor",
    intrebare: "Câte județe are România, fără Municipiul București?",
    variante: ["39", "40", "41", "42"],
    corect: "41",
    explicatie: "Municipiul București are un statut separat și este împărțit în șase sectoare. Fiecare sector are propriul primar."
  },

  // ---------- SOCIO-POLITICĂ: MEDIU (48) ----------
  {
    domeniu: "socio-politica",
    dificultate: "mediu",
    intrebare: "Cine reprezintă Guvernul în fiecare județ?",
    variante: ["Primarul", "Prefectul", "Președintele consiliului județean", "Senatorul"],
    corect: "Prefectul",
    explicatie: "Prefectul este numit de Guvern. Primarii și consiliile locale și județene sunt, în schimb, aleși direct de cetățeni."
  },
  {
    domeniu: "socio-politica",
    dificultate: "mediu",
    intrebare: "Ce se întâmplă când Parlamentul adoptă o moțiune de cenzură?",
    variante: ["Este suspendat președintele", "Este demis Guvernul", "Este dizolvat Parlamentul", "Se adoptă o lege nouă"],
    corect: "Este demis Guvernul",
    explicatie: "Moțiunea trebuie votată de majoritatea tuturor deputaților și senatorilor, reuniți în ședință comună. Este principalul mijloc prin care Parlamentul controlează Guvernul."
  },
  {
    domeniu: "socio-politica",
    dificultate: "mediu",
    intrebare: "Ce vârstă minimă trebuie să aibă un candidat la funcția de președinte al României?",
    variante: ["30 de ani", "35 de ani", "40 de ani", "45 de ani"],
    corect: "35 de ani",
    explicatie: "Pentru Camera Deputaților vârsta minimă este de 23 de ani, iar pentru Senat de 33 de ani."
  },
  {
    domeniu: "socio-politica",
    dificultate: "mediu",
    intrebare: "Câți membri permanenți are Consiliul de Securitate al ONU?",
    variante: ["3", "5", "7", "10"],
    corect: "5",
    explicatie: "SUA, Rusia, China, Franța și Regatul Unit au drept de veto. Oricare dintre ele poate bloca o hotărâre a Consiliului."
  },
  {
    domeniu: "socio-politica",
    dificultate: "mediu",
    intrebare: "Ce articol al Tratatului NATO spune că un atac împotriva unui membru este un atac împotriva tuturor?",
    variante: ["Articolul 1", "Articolul 5", "Articolul 10", "Articolul 42"],
    corect: "Articolul 5",
    explicatie: "Articolul 5 a fost invocat o singură dată, după atacurile teroriste din 11 septembrie 2001 asupra SUA."
  },
  {
    domeniu: "socio-politica",
    dificultate: "mediu",
    intrebare: "În ce an a fost înființată NATO?",
    variante: ["1945", "1949", "1955", "1961"],
    corect: "1949",
    explicatie: "Tratatul a fost semnat la Washington de 12 state fondatoare. Sediul alianței se află azi la Bruxelles."
  },
  {
    domeniu: "socio-politica",
    dificultate: "mediu",
    intrebare: "Ce tratat din 1957 a pus bazele Comunității Economice Europene, strămoșul Uniunii Europene?",
    variante: ["Tratatul de la Maastricht", "Tratatul de la Lisabona", "Tratatul de la Roma", "Tratatul de la Paris"],
    corect: "Tratatul de la Roma",
    explicatie: "L-au semnat șase state: Franța, Germania de Vest, Italia, Belgia, Olanda și Luxemburg. Numele de „Uniunea Europeană” a apărut abia prin Tratatul de la Maastricht, din 1992."
  },
  {
    domeniu: "socio-politica",
    dificultate: "mediu",
    intrebare: "În ce oraș se află Curtea Europeană a Drepturilor Omului (CEDO)?",
    variante: ["Haga", "Strasbourg", "Luxemburg", "Bruxelles"],
    corect: "Strasbourg",
    explicatie: "CEDO aparține Consiliului Europei, o organizație diferită de Uniunea Europeană, din care fac parte peste 40 de state. Orice cetățean se poate adresa Curții după ce a trecut prin instanțele din țara lui."
  },
  {
    domeniu: "socio-politica",
    dificultate: "mediu",
    intrebare: "În ce oraș se află Curtea Internațională de Justiție a ONU?",
    variante: ["Geneva", "New York", "Haga", "Viena"],
    corect: "Haga",
    explicatie: "Curtea judecă disputele dintre state. Tot la Haga se află și Curtea Penală Internațională, care judecă persoane acuzate de crime grave."
  },
  {
    domeniu: "socio-politica",
    dificultate: "mediu",
    intrebare: "În ce oraș se decernează Premiul Nobel pentru Pace?",
    variante: ["Stockholm", "Oslo", "Geneva", "Copenhaga"],
    corect: "Oslo",
    explicatie: "Celelalte premii Nobel se decernează la Stockholm. Alfred Nobel a cerut în testament ca premiul pentru pace să fie acordat de un comitet norvegian."
  },
  {
    domeniu: "socio-politica",
    dificultate: "mediu",
    intrebare: "Cine a fondat Crucea Roșie?",
    variante: ["Florence Nightingale", "Henry Dunant", "Alfred Nobel", "Clara Barton"],
    corect: "Henry Dunant",
    explicatie: "Dunant a fost impresionat de suferința răniților din bătălia de la Solferino, din 1859. În 1901 a primit, împreună cu Frédéric Passy, primul Premiu Nobel pentru Pace."
  },
  {
    domeniu: "socio-politica",
    dificultate: "mediu",
    intrebare: "Care a fost prima țară care le-a dat femeilor drept de vot la alegerile naționale?",
    variante: ["SUA", "Regatul Unit", "Noua Zeelandă", "Franța"],
    corect: "Noua Zeelandă",
    explicatie: "Noua Zeelandă a făcut acest pas în 1893. În Elveția, femeile au putut vota la alegerile federale abia în 1971."
  },
  {
    domeniu: "socio-politica",
    dificultate: "mediu",
    intrebare: "De unde vin termenii politici „stânga” și „dreapta”?",
    variante: ["De la locul ocupat de deputați în Adunarea Națională a Franței, în 1789", "De la mâna cu care votau senatorii romani", "De la laturile unei hărți a Europei", "De la două partide englezești"],
    corect: "De la locul ocupat de deputați în Adunarea Națională a Franței, în 1789",
    explicatie: "Susținătorii regelui stăteau în dreapta președintelui adunării, iar cei care voiau schimbări mai radicale, în stânga."
  },
  {
    domeniu: "socio-politica",
    dificultate: "mediu",
    intrebare: "Cine a scris „Principele”, o lucrare celebră despre cum se câștigă și se păstrează puterea?",
    variante: ["Thomas Hobbes", "Platon", "Niccolò Machiavelli", "John Locke"],
    corect: "Niccolò Machiavelli",
    explicatie: "Cartea a fost scrisă în 1513 și publicată abia după moartea autorului. De la numele lui vine cuvântul „machiavelic”."
  },
  {
    domeniu: "socio-politica",
    dificultate: "mediu",
    intrebare: "Ce filosof grec a scris „Republica”, în care descrie un stat ideal condus de filosofi?",
    variante: ["Aristotel", "Platon", "Socrate", "Herodot"],
    corect: "Platon",
    explicatie: "Platon a fost elevul lui Socrate și profesorul lui Aristotel. Aristotel a scris, la rândul lui, lucrarea „Politica”."
  },
  {
    domeniu: "socio-politica",
    dificultate: "mediu",
    intrebare: "Cine a scris lucrarea „Contractul social” (1762)?",
    variante: ["Jean-Jacques Rousseau", "Voltaire", "Montesquieu", "Thomas Hobbes"],
    corect: "Jean-Jacques Rousseau",
    explicatie: "Rousseau susținea că puterea legitimă vine din voința generală a poporului. Ideile lui au influențat Revoluția Franceză."
  },
  {
    domeniu: "socio-politica",
    dificultate: "mediu",
    intrebare: "Cine a rostit, în 1963, discursul „I Have a Dream”?",
    variante: ["Malcolm X", "John F. Kennedy", "Martin Luther King Jr.", "Barack Obama"],
    corect: "Martin Luther King Jr.",
    explicatie: "Discursul a fost rostit la Washington, în fața a peste 250.000 de oameni. Un an mai târziu, King a primit Premiul Nobel pentru Pace."
  },
  {
    domeniu: "socio-politica",
    dificultate: "mediu",
    intrebare: "Ce om politic britanic a folosit, în 1946, expresia „Cortina de fier” pentru împărțirea Europei?",
    variante: ["Winston Churchill", "Clement Attlee", "Neville Chamberlain", "Margaret Thatcher"],
    corect: "Winston Churchill",
    explicatie: "Churchill a ținut discursul la Fulton, în SUA. Expresia descria granița dintre Europa de Vest și țările controlate de Uniunea Sovietică."
  },
  {
    domeniu: "socio-politica",
    dificultate: "mediu",
    intrebare: "Ce alianță militară a statelor comuniste a existat între 1955 și 1991?",
    variante: ["CAER", "Pactul de la Varșovia", "Liga Arabă", "Mișcarea de Nealiniere"],
    corect: "Pactul de la Varșovia",
    explicatie: "Pactul a fost creat după intrarea Germaniei de Vest în NATO. S-a desființat în 1991, după căderea regimurilor comuniste; CAER era organizația economică a acelorași state."
  },
  {
    domeniu: "socio-politica",
    dificultate: "mediu",
    intrebare: "În ce clădire își are sediul Guvernul României?",
    variante: ["Palatul Victoria", "Palatul Cotroceni", "Palatul Parlamentului", "Palatul Șuțu"],
    corect: "Palatul Victoria",
    explicatie: "Clădirea a fost proiectată în anii 1930 de arhitectul Duiliu Marcu. Clădirea se află în Piața Victoriei din București."
  },
  {
    domeniu: "socio-politica",
    dificultate: "mediu",
    intrebare: "Ce clădire din București găzduiește Parlamentul României?",
    variante: ["Ateneul Român", "Palatul Victoria", "Palatul CEC", "Palatul Parlamentului"],
    corect: "Palatul Parlamentului",
    explicatie: "A fost construit în anii 1980 sub numele de „Casa Poporului”. Este a doua cea mai mare clădire administrativă din lume, după Pentagon."
  },
  {
    domeniu: "socio-politica",
    dificultate: "mediu",
    intrebare: "Cum se numesc statele formate din state sau landuri care au propriile parlamente și legi, precum SUA sau Germania?",
    variante: ["Monarhii", "State unitare", "Federații", "Teocrații"],
    corect: "Federații",
    explicatie: "Într-o federație, puterea este împărțită între guvernul central și statele componente. România este, în schimb, un stat unitar."
  },
  {
    domeniu: "socio-politica",
    dificultate: "mediu",
    intrebare: "Care dintre aceste țări este o monarhie constituțională?",
    variante: ["Franța", "Germania", "Italia", "Spania"],
    corect: "Spania",
    explicatie: "Într-o monarhie constituțională, regele are mai ales un rol simbolic, iar țara este condusă de un guvern ales. Suedia, Norvegia și Regatul Unit sunt tot monarhii constituționale."
  },
  {
    domeniu: "socio-politica",
    dificultate: "mediu",
    intrebare: "Ce prag electoral trebuie să depășească un partid ca să intre în Parlamentul României?",
    variante: ["3%", "5%", "7%", "10%"],
    corect: "5%",
    explicatie: "Pentru alianțele formate din mai multe partide, pragul este mai mare. Pragul are rolul de a împiedica fărâmițarea excesivă a Parlamentului."
  },
  {
    domeniu: "socio-politica",
    dificultate: "mediu",
    intrebare: "Din ce an face România parte complet din spațiul Schengen, inclusiv la frontierele terestre?",
    variante: ["2007", "2019", "2024", "2025"],
    corect: "2025",
    explicatie: "Din martie 2024 au dispărut controalele pentru zborurile și călătoriile pe mare. De la 1 ianuarie 2025 au dispărut și cele de la frontierele terestre cu statele Schengen."
  },
  {
    domeniu: "socio-politica",
    dificultate: "mediu",
    intrebare: "Ce scriitor a creat personajul „Big Brother”, simbol al supravegherii totale?",
    variante: ["Aldous Huxley", "George Orwell", "Ray Bradbury", "Franz Kafka"],
    corect: "George Orwell",
    explicatie: "Romanul „1984” a apărut în 1949. Cuvântul „orwellian” descrie azi un stat care își controlează și își supraveghează cetățenii."
  },
  {
    domeniu: "socio-politica",
    dificultate: "mediu",
    intrebare: "Ce instituție a Uniunii Europene este aleasă direct de cetățeni?",
    variante: ["Parlamentul European", "Comisia Europeană", "Consiliul European", "Curtea de Justiție a UE"],
    corect: "Parlamentul European",
    explicatie: "Alegerile au loc o dată la cinci ani. Primele alegeri directe pentru Parlamentul European au avut loc în 1979."
  },
  {
    domeniu: "socio-politica",
    dificultate: "mediu",
    intrebare: "Ce este Consiliul Europei, cu sediul la Strasbourg?",
    variante: ["Reuniunea șefilor de stat și de guvern ai UE", "O organizație separată de UE, dedicată drepturilor omului și democrației", "Guvernul Uniunii Europene", "Banca centrală a Uniunii Europene"],
    corect: "O organizație separată de UE, dedicată drepturilor omului și democrației",
    explicatie: "Consiliul Europei a fost înființat în 1949, iar România a aderat în 1993. Reuniunea liderilor UE se numește, în schimb, Consiliul European."
  },
  {
    domeniu: "socio-politica",
    dificultate: "mediu",
    intrebare: "Ce instituție a UE propune noile legi europene?",
    variante: ["Parlamentul European", "Curtea de Conturi Europeană", "Comisia Europeană", "Banca Centrală Europeană"],
    corect: "Comisia Europeană",
    explicatie: "Fiecare stat membru are câte un comisar. Legile propuse sunt adoptate apoi de Parlamentul European și de Consiliul UE."
  },
  {
    domeniu: "socio-politica",
    dificultate: "mediu",
    intrebare: "Care este instanța supremă a României, care asigură aplicarea unitară a legii?",
    variante: ["Curtea Constituțională", "Curtea de Apel București", "Curtea de Conturi", "Înalta Curte de Casație și Justiție"],
    corect: "Înalta Curte de Casație și Justiție",
    explicatie: "Curtea Constituțională nu judecă procese obișnuite, ci verifică dacă legile respectă Constituția."
  },
  {
    domeniu: "socio-politica",
    dificultate: "mediu",
    intrebare: "Ce instituție verifică modul în care sunt cheltuiți banii publici în România?",
    variante: ["Curtea de Conturi", "ANAF", "Curtea Constituțională", "Avocatul Poporului"],
    corect: "Curtea de Conturi",
    explicatie: "Curtea de Conturi prezintă anual Parlamentului un raport cu neregulile găsite în folosirea banilor publici."
  },
  {
    domeniu: "socio-politica",
    dificultate: "mediu",
    intrebare: "Ce instituție garantează independența justiției în România?",
    variante: ["Ministerul Justiției", "Consiliul Superior al Magistraturii", "Avocatul Poporului", "Curtea de Conturi"],
    corect: "Consiliul Superior al Magistraturii",
    explicatie: "CSM se ocupă, printre altele, de cariera judecătorilor și a procurorilor: numiri, promovări și sancțiuni."
  },
  {
    domeniu: "socio-politica",
    dificultate: "mediu",
    intrebare: "Ce parchet specializat investighează în România corupția la nivel înalt?",
    variante: ["DIICOT", "ANI", "DNA", "SRI"],
    corect: "DNA",
    explicatie: "DNA vine de la Direcția Națională Anticorupție. DIICOT se ocupă de criminalitatea organizată și de terorism, iar ANI verifică averile și conflictele de interese."
  },
  {
    domeniu: "socio-politica",
    dificultate: "mediu",
    intrebare: "Cine promulgă legile adoptate de Parlamentul României?",
    variante: ["Prim-ministrul", "Curtea Constituțională", "Președintele Senatului", "Președintele"],
    corect: "Președintele",
    explicatie: "Înainte de promulgare, președintele poate retrimite legea o singură dată Parlamentului sau o poate trimite la Curtea Constituțională."
  },
  {
    domeniu: "socio-politica",
    dificultate: "mediu",
    intrebare: "Ce act poate adopta Guvernul în situații extraordinare, cu putere de lege?",
    variante: ["Ordonanța de urgență", "Hotărârea de Guvern", "Decretul prezidențial", "Rezoluția parlamentară"],
    corect: "Ordonanța de urgență",
    explicatie: "Ordonanța de urgență intră în vigoare foarte repede, după ce este trimisă Parlamentului și publicată. Parlamentul o aprobă sau o respinge ulterior, printr-o lege."
  },
  {
    domeniu: "socio-politica",
    dificultate: "mediu",
    intrebare: "Ce instituție, condusă de președinte, coordonează apărarea și securitatea României?",
    variante: ["SRI", "CSAT", "Ministerul Apărării Naționale", "Statul Major al Apărării"],
    corect: "CSAT",
    explicatie: "CSAT vine de la Consiliul Suprem de Apărare a Țării. Prim-ministrul este vicepreședintele consiliului."
  },
  {
    domeniu: "socio-politica",
    dificultate: "mediu",
    intrebare: "Câți membri are Senatul Statelor Unite?",
    variante: ["50", "435", "100", "535"],
    corect: "100",
    explicatie: "Fiecare dintre cele 50 de state are câte doi senatori, indiferent de populație. Camera Reprezentanților are 435 de membri."
  },
  {
    domeniu: "socio-politica",
    dificultate: "mediu",
    intrebare: "Cum este ales președintele Statelor Unite?",
    variante: ["Direct, de majoritatea voturilor din toată țara", "De Congres", "De Curtea Supremă", "Prin Colegiul Electoral, format din electori ai fiecărui stat"],
    corect: "Prin Colegiul Electoral, format din electori ai fiecărui stat",
    explicatie: "Un candidat poate câștiga cu mai puține voturi la nivel național decât rivalul lui, cum s-a întâmplat în 2000 și în 2016."
  },
  {
    domeniu: "socio-politica",
    dificultate: "mediu",
    intrebare: "Ce este impeachmentul, în sistemul american?",
    variante: ["Punerea sub acuzare a unui înalt demnitar, care poate duce la demiterea lui", "Votul de încredere pentru guvern", "Dizolvarea Congresului", "Amânarea alegerilor"],
    corect: "Punerea sub acuzare a unui înalt demnitar, care poate duce la demiterea lui",
    explicatie: "Camera Reprezentanților votează punerea sub acuzare, iar Senatul judecă și poate decide demiterea."
  },
  {
    domeniu: "socio-politica",
    dificultate: "mediu",
    intrebare: "Ce cameră a Parlamentului britanic nu este aleasă de cetățeni?",
    variante: ["Camera Comunelor", "Camera Lorzilor", "Consiliul Privat", "Parlamentul Scoțian"],
    corect: "Camera Lorzilor",
    explicatie: "Membrii ei sunt numiți, de cele mai multe ori pe viață, iar unii ocupă locul prin funcție, cum ar fi unii episcopi. Camera Comunelor este aleasă prin vot."
  },
  {
    domeniu: "socio-politica",
    dificultate: "mediu",
    intrebare: "Care este adresa reședinței oficiale a prim-ministrului britanic?",
    variante: ["11 Downing Street", "Palatul Westminster", "10 Downing Street", "Clarence House"],
    corect: "10 Downing Street",
    explicatie: "Ușa neagră cu numărul 10 nu poate fi deschisă din exterior, pentru că nu are clanță sau broască pe dinafară. La numărul 11 locuiește, de obicei, ministrul de finanțe."
  },
  {
    domeniu: "socio-politica",
    dificultate: "mediu",
    intrebare: "În ce palat își are sediul președintele Franței?",
    variante: ["Palatul Matignon", "Palatul Luxembourg", "Palatul Bourbon", "Palatul Élysée"],
    corect: "Palatul Élysée",
    explicatie: "Palatul Matignon este reședința prim-ministrului. Palatul Luxembourg găzduiește Senatul, iar Palatul Bourbon Adunarea Națională."
  },
  {
    domeniu: "socio-politica",
    dificultate: "mediu",
    intrebare: "Cum se numește camera aleasă direct a parlamentului federal al Germaniei?",
    variante: ["Bundesrat", "Reichstag", "Bundestag", "Landtag"],
    corect: "Bundestag",
    explicatie: "Bundestagul se reunește în clădirea Reichstag din Berlin, a cărei cupolă de sticlă poate fi vizitată de public. Bundesratul reprezintă landurile, iar Landtag este numele parlamentelor acestora."
  },
  {
    domeniu: "socio-politica",
    dificultate: "mediu",
    intrebare: "Ce sistem de vot se folosește la alegerile pentru Camera Comunelor din Marea Britanie?",
    variante: ["Vot pe liste de partid, cu locuri împărțite proporțional", "Câștigă candidatul cu cele mai multe voturi din fiecare circumscripție", "Doi candidați intră mereu în turul doi", "Parlamentarii sunt numiți de rege"],
    corect: "Câștigă candidatul cu cele mai multe voturi din fiecare circumscripție",
    explicatie: "Sistemul favorizează partidele mari, pentru că voturile date candidaților care pierd într-o circumscripție nu aduc niciun loc."
  },
  {
    domeniu: "socio-politica",
    dificultate: "mediu",
    intrebare: "În care dintre aceste țări votul este obligatoriu, iar absența poate fi amendată?",
    variante: ["Regatul Unit", "Germania", "Australia", "Statele Unite"],
    corect: "Australia",
    explicatie: "Votul obligatoriu există în Australia din anii 1920. Prezența la vot depășește de obicei 90%."
  },
  {
    domeniu: "socio-politica",
    dificultate: "mediu",
    intrebare: "Ce înseamnă cvorumul, într-o ședință a Parlamentului?",
    variante: ["Numărul de voturi necesar pentru o lege constituțională", "Timpul maxim de vorbire al unui parlamentar", "Lista legilor discutate în ziua respectivă", "Numărul minim de membri prezenți pentru ca deciziile să fie valabile"],
    corect: "Numărul minim de membri prezenți pentru ca deciziile să fie valabile",
    explicatie: "În Parlamentul României, ședințele au loc legal dacă este prezentă majoritatea membrilor fiecărei camere."
  },
  {
    domeniu: "socio-politica",
    dificultate: "mediu",
    intrebare: "Ce este o coaliție de guvernare?",
    variante: ["O alianță a mai multor partide care formează împreună o majoritate", "Un guvern format numai din tehnocrați", "Un partid care câștigă singur majoritatea", "O alianță a partidelor din opoziție"],
    corect: "O alianță a mai multor partide care formează împreună o majoritate",
    explicatie: "Coalițiile sunt frecvente acolo unde sistemul electoral este proporțional, iar un singur partid obține rar majoritatea."
  },
  {
    domeniu: "socio-politica",
    dificultate: "mediu",
    intrebare: "Ce a fost apartheidul?",
    variante: ["O mișcare pentru independența Indiei", "Sistemul legal de segregare rasială din Africa de Sud", "Un tip de monarhie africană", "Politica de neutralitate a Elveției"],
    corect: "Sistemul legal de segregare rasială din Africa de Sud",
    explicatie: "Apartheidul a fost introdus oficial în 1948 și desființat la începutul anilor '90. În limba afrikaans, cuvântul înseamnă „separare”."
  },

  // ---------- SOCIO-POLITICĂ: GREU (32) ----------
  {
    domeniu: "socio-politica",
    dificultate: "greu",
    intrebare: "În ce an a deținut România, pentru prima dată, președinția Consiliului Uniunii Europene?",
    variante: ["2007", "2014", "2019", "2023"],
    corect: "2019",
    explicatie: "Președinția se schimbă o dată la șase luni, prin rotație între statele membre; România a deținut-o în prima jumătate a lui 2019. În acea perioadă, la Sibiu a avut loc un summit al liderilor europeni."
  },
  {
    domeniu: "socio-politica",
    dificultate: "greu",
    intrebare: "În ce an a fost adoptată prima constituție modernă a României, inspirată de cea a Belgiei?",
    variante: ["1848", "1859", "1866", "1923"],
    corect: "1866",
    explicatie: "Constituția a fost adoptată odată cu venirea lui Carol I. A rămas în vigoare, cu modificări, până în 1923."
  },
  {
    domeniu: "socio-politica",
    dificultate: "greu",
    intrebare: "Câți judecători are Curtea Constituțională a României?",
    variante: ["7", "9", "11", "15"],
    corect: "9",
    explicatie: "Trei judecători sunt numiți de Camera Deputaților, trei de Senat și trei de președinte. Mandatul lor durează 9 ani și nu poate fi reînnoit."
  },
  {
    domeniu: "socio-politica",
    dificultate: "greu",
    intrebare: "Cum se numește practica de a trasa granițele circumscripțiilor electorale astfel încât să favorizeze un anumit partid?",
    variante: ["Filibuster", "Lobby", "Gerrymandering", "Impeachment"],
    corect: "Gerrymandering",
    explicatie: "Termenul vine de la guvernatorul american Elbridge Gerry și de la o circumscripție desenată în 1812. Forma ei semăna cu o salamandră („salamander”)."
  },
  {
    domeniu: "socio-politica",
    dificultate: "greu",
    intrebare: "De unde vine cuvântul „candidat”?",
    variante: ["De la toga albă purtată la Roma de cei care cereau o funcție", "De la un rege numit Candid", "De la cuvântul grecesc pentru vot", "De la candelele aprinse la numărarea voturilor"],
    corect: "De la toga albă purtată la Roma de cei care cereau o funcție",
    explicatie: "În latină, „candidus” înseamnă „alb strălucitor”. Romanii care cereau o funcție publică își albeau toga cu cretă, ca să iasă în evidență."
  },
  {
    domeniu: "socio-politica",
    dificultate: "greu",
    intrebare: "Ce era ostracismul în Atena antică?",
    variante: ["Un impozit pe pământ", "Exilarea unui cetățean prin votul celorlalți", "Alegerea regelui", "O sărbătoare religioasă"],
    corect: "Exilarea unui cetățean prin votul celorlalți",
    explicatie: "Atenienii scriau numele celui pe care voiau să-l alunge pe cioburi de ceramică, numite „ostraka”. Cel ales trebuia să plece din oraș pentru zece ani."
  },
  {
    domeniu: "socio-politica",
    dificultate: "greu",
    intrebare: "Cine a scris „Leviatanul” (1651), lucrare care susține că oamenii acceptă un conducător puternic ca să scape de haos?",
    variante: ["John Locke", "Montesquieu", "Thomas Hobbes", "Niccolò Machiavelli"],
    corect: "Thomas Hobbes",
    explicatie: "Hobbes descria viața fără stat ca fiind „solitară, săracă, urâtă, brutală și scurtă”. Leviatanul, monstrul biblic din titlu, simboliza statul atotputernic."
  },
  {
    domeniu: "socio-politica",
    dificultate: "greu",
    intrebare: "Ce gânditoare a scris „Originile totalitarismului” (1951)?",
    variante: ["Simone de Beauvoir", "Hannah Arendt", "Ayn Rand", "Rosa Luxemburg"],
    corect: "Hannah Arendt",
    explicatie: "Arendt a analizat nazismul și stalinismul ca forme ale aceluiași tip de regim. Tot ea a lansat expresia „banalitatea răului”."
  },
  {
    domeniu: "socio-politica",
    dificultate: "greu",
    intrebare: "Ce lucrare au publicat Karl Marx și Friedrich Engels în 1848?",
    variante: ["Capitalul", "Manifestul Partidului Comunist", "Contractul social", "Avuția națiunilor"],
    corect: "Manifestul Partidului Comunist",
    explicatie: "Manifestul se încheie cu îndemnul „Proletari din toate țările, uniți-vă!”. „Capitalul”, cea mai amplă lucrare a lui Marx, a apărut abia în 1867."
  },
  {
    domeniu: "socio-politica",
    dificultate: "greu",
    intrebare: "Ce țară a creat, în 1809, prima instituție de tip ombudsman, care apără cetățenii de abuzurile autorităților?",
    variante: ["Elveția", "Anglia", "Olanda", "Suedia"],
    corect: "Suedia",
    explicatie: "Cuvântul „ombudsman” vine din suedeză și înseamnă „reprezentant”. În România, instituția se numește Avocatul Poporului."
  },
  {
    domeniu: "socio-politica",
    dificultate: "greu",
    intrebare: "Care a fost prima țară din Europa care le-a dat femeilor atât dreptul de a vota, cât și pe cel de a fi alese în parlament?",
    variante: ["Regatul Unit", "Finlanda", "Franța", "Elveția"],
    corect: "Finlanda",
    explicatie: "Finlanda a făcut acest pas în 1906. La alegerile din anul următor, în parlament au intrat 19 femei, primele deputate alese din lume."
  },
  {
    domeniu: "socio-politica",
    dificultate: "greu",
    intrebare: "În ce an au votat femeile din România, pentru prima dată, în condiții egale cu bărbații la alegerile parlamentare?",
    variante: ["1918", "1929", "1938", "1946"],
    corect: "1946",
    explicatie: "Înainte, din 1929, doar unele femei puteau vota la alegerile locale, cu anumite condiții. Dreptul egal de vot a fost aplicat la alegerile din noiembrie 1946."
  },
  {
    domeniu: "socio-politica",
    dificultate: "greu",
    intrebare: "Ce eveniment din august 1968 a fost condamnat public de conducerea României, deși țara făcea parte din Pactul de la Varșovia?",
    variante: ["Construirea Zidului Berlinului", "Invadarea Cehoslovaciei", "Revoluția din Ungaria", "Criza rachetelor din Cuba"],
    corect: "Invadarea Cehoslovaciei",
    explicatie: "Pe 21 august 1968, într-un discurs ținut în fața unei mulțimi uriașe din București, conducerea comunistă a criticat invazia. Gestul a adus României simpatie în Occident."
  },
  {
    domeniu: "socio-politica",
    dificultate: "greu",
    intrebare: "Ce urmează, potrivit Constituției României, după ce Parlamentul îl suspendă pe președinte?",
    variante: ["Președintele este demis automat", "Un referendum pentru demiterea lui, în cel mult 30 de zile", "Guvernul preia toate atribuțiile", "Alegeri parlamentare anticipate"],
    corect: "Un referendum pentru demiterea lui, în cel mult 30 de zile",
    explicatie: "Cât timp președintele este suspendat, atribuțiile lui sunt preluate interimar de președintele Senatului. Dacă demiterea nu este aprobată la referendum, președintele își reia funcția."
  },
  {
    domeniu: "socio-politica",
    dificultate: "greu",
    intrebare: "Ce adunare, fondată în anul 930, este considerată unul dintre cele mai vechi parlamente din lume?",
    variante: ["Sejmul, în Polonia", "Riksdagul, în Suedia", "Althingul, în Islanda", "Parlamentul englez"],
    corect: "Althingul, în Islanda",
    explicatie: "Adunarea se întrunea în aer liber, la Thingvellir, într-o vale aflată între două plăci tectonice."
  },
  {
    domeniu: "socio-politica",
    dificultate: "greu",
    intrebare: "Ce înseamnă coabitarea, în politica franceză?",
    variante: ["Doi președinți conduc împreună țara", "Parlamentul are două camere", "Guvernul este format din toate partidele", "Președintele și guvernul provin din tabere politice opuse"],
    corect: "Președintele și guvernul provin din tabere politice opuse",
    explicatie: "Prima coabitare a început în 1986, când președintele socialist François Mitterrand a numit un guvern de dreapta, condus de Jacques Chirac."
  },
  {
    domeniu: "socio-politica",
    dificultate: "greu",
    intrebare: "Ce mișcare, condusă de Lech Wałęsa, a contribuit decisiv la căderea comunismului în Polonia?",
    variante: ["Solidaritatea", "Carta 77", "Forumul Civic", "Perestroika"],
    corect: "Solidaritatea",
    explicatie: "Solidaritatea a pornit în 1980 ca sindicat liber, la șantierul naval din Gdańsk. Carta 77 și Forumul Civic au fost mișcări din Cehoslovacia."
  },
  {
    domeniu: "socio-politica",
    dificultate: "greu",
    intrebare: "Cum s-a numit politica de deschidere și transparență lansată de Mihail Gorbaciov?",
    variante: ["Perestroika", "Glasnost", "Destindere", "Destalinizare"],
    corect: "Glasnost",
    explicatie: "Perestroika însemna „restructurarea” economiei. Cele două politici au contribuit, fără ca Gorbaciov să fi vrut asta, la destrămarea URSS, în 1991."
  },
  {
    domeniu: "socio-politica",
    dificultate: "greu",
    intrebare: "Ce revoluție pașnică a pus capăt comunismului în Cehoslovacia, în 1989?",
    variante: ["Primăvara de la Praga", "Revoluția Portocalie", "Revoluția de Catifea", "Revoluția Garoafelor"],
    corect: "Revoluția de Catifea",
    explicatie: "Dramaturgul Václav Havel a devenit președinte în decembrie 1989. Primăvara de la Praga fusese o încercare de reformă, înăbușită în 1968."
  },
  {
    domeniu: "socio-politica",
    dificultate: "greu",
    intrebare: "Ce tratat, intrat în vigoare în 2009, a creat funcția de președinte permanent al Consiliului European?",
    variante: ["Tratatul de la Nisa", "Tratatul de la Amsterdam", "Tratatul de la Maastricht", "Tratatul de la Lisabona"],
    corect: "Tratatul de la Lisabona",
    explicatie: "Tot acest tratat a introdus articolul 50, procedura prin care un stat poate ieși din UE, folosită de Regatul Unit."
  },
  {
    domeniu: "socio-politica",
    dificultate: "greu",
    intrebare: "Ce declarație din 9 mai 1950 este considerată actul de naștere al construcției europene?",
    variante: ["Declarația Schuman", "Doctrina Truman", "Discursul de la Fulton", "Declarația de la Messina"],
    corect: "Declarația Schuman",
    explicatie: "Ministrul francez de externe Robert Schuman a propus punerea în comun a producției de cărbune și oțel a Franței și Germaniei. De aceea, 9 mai este Ziua Europei."
  },
  {
    domeniu: "socio-politica",
    dificultate: "greu",
    intrebare: "Ce document din martie 1990 cerea, la punctul 8, ca foștii activiști comuniști să nu poată candida la alegeri?",
    variante: ["Scrisoarea celor șase", "Proclamația de la Timișoara", "Proclamația de la Islaz", "Declarația de la Snagov"],
    corect: "Proclamația de la Timișoara",
    explicatie: "Documentul a fost citit pe 11 martie 1990, în Piața Operei din Timișoara. Punctul 8 a devenit una dintre principalele revendicări ale protestului din Piața Universității."
  },
  {
    domeniu: "socio-politica",
    dificultate: "greu",
    intrebare: "Ce scrisoare din martie 1989, semnată de șase foști lideri comuniști, a criticat public politica lui Ceaușescu?",
    variante: ["Proclamația de la Timișoara", "Memorandumul", "Scrisoarea celor șase", "Carta 77"],
    corect: "Scrisoarea celor șase",
    explicatie: "Scrisoarea a fost difuzată de Radio Europa Liberă și de BBC. Semnatarii au fost apoi arestați la domiciliu sau puși sub supraveghere."
  },
  {
    domeniu: "socio-politica",
    dificultate: "greu",
    intrebare: "Ce francez este considerat unul dintre principalii părinți fondatori ai Uniunii Europene și a inspirat Declarația Schuman?",
    variante: ["Charles de Gaulle", "Jacques Delors", "François Mitterrand", "Jean Monnet"],
    corect: "Jean Monnet",
    explicatie: "Monnet a fost primul președinte al Înaltei Autorități a Comunității Europene a Cărbunelui și Oțelului. Jacques Delors a condus, mult mai târziu, Comisia Europeană."
  },
  {
    domeniu: "socio-politica",
    dificultate: "greu",
    intrebare: "Ce principiu al UE spune că deciziile trebuie luate cât mai aproape de cetățeni, la nivel european doar când e mai eficient?",
    variante: ["Subsidiaritatea", "Proporționalitatea", "Solidaritatea", "Unanimitatea"],
    corect: "Subsidiaritatea",
    explicatie: "UE intervine doar acolo unde statele, regiunile sau autoritățile locale nu pot rezolva la fel de bine o problemă."
  },
  {
    domeniu: "socio-politica",
    dificultate: "greu",
    intrebare: "Ce document din 1689 a limitat puterea monarhiei engleze, după „Revoluția Glorioasă”?",
    variante: ["Magna Carta", "Bill of Rights", "Habeas Corpus Act", "Petiția Drepturilor"],
    corect: "Bill of Rights",
    explicatie: "Documentul i-a interzis regelui să ridice taxe sau să țină o armată în timp de pace fără acordul Parlamentului."
  },
  {
    domeniu: "socio-politica",
    dificultate: "greu",
    intrebare: "Ce lege engleză din 1679 interzicea ținerea cuiva în arest fără a fi adus în fața unui judecător?",
    variante: ["Bill of Rights", "Magna Carta", "Habeas Corpus Act", "Actul de Unire"],
    corect: "Habeas Corpus Act",
    explicatie: "Expresia latină înseamnă, aproximativ, „să ai corpul”: autoritățile trebuie să prezinte persoana arestată în fața instanței."
  },
  {
    domeniu: "socio-politica",
    dificultate: "greu",
    intrebare: "Ce filosof englez a susținut că oamenii au drepturi naturale la viață, libertate și proprietate?",
    variante: ["Thomas Hobbes", "Edmund Burke", "Jeremy Bentham", "John Locke"],
    corect: "John Locke",
    explicatie: "Ideile lui au influențat puternic Declarația de Independență a SUA. Locke este considerat unul dintre părinții liberalismului."
  },
  {
    domeniu: "socio-politica",
    dificultate: "greu",
    intrebare: "Ce gânditor francez a scris „Despre democrația în America” (1835)?",
    variante: ["Alexis de Tocqueville", "Montesquieu", "Voltaire", "Benjamin Constant"],
    corect: "Alexis de Tocqueville",
    explicatie: "Tocqueville a plecat în SUA ca să studieze închisorile americane. În carte a avertizat asupra pericolului numit „tirania majorității”."
  },
  {
    domeniu: "socio-politica",
    dificultate: "greu",
    intrebare: "Ce gânditor britanic a scris „Despre libertate” (1859), apărând libertatea de exprimare?",
    variante: ["John Locke", "John Stuart Mill", "Thomas Paine", "Edmund Burke"],
    corect: "John Stuart Mill",
    explicatie: "Mill a formulat „principiul vătămării”: statul poate limita libertatea cuiva doar ca să împiedice rănirea altora. A fost și printre primii parlamentari care au cerut votul femeilor."
  },
  {
    domeniu: "socio-politica",
    dificultate: "greu",
    intrebare: "Ce revoluție din 1956 a fost înăbușită de tancurile sovietice?",
    variante: ["Primăvara de la Praga", "Revolta din Berlinul de Est", "Revoluția din Ungaria", "Revoluția de Catifea"],
    corect: "Revoluția din Ungaria",
    explicatie: "Revoluția a început la Budapesta, pe 23 octombrie 1956. Liderul ei, Imre Nagy, a fost executat în 1958."
  },
  {
    domeniu: "socio-politica",
    dificultate: "greu",
    intrebare: "Ce revoluție din 1974 a pus capăt dictaturii din Portugalia, aproape fără vărsare de sânge?",
    variante: ["Revoluția de Catifea", "Revoluția Trandafirilor", "Revoluția Portocalie", "Revoluția Garoafelor"],
    corect: "Revoluția Garoafelor",
    explicatie: "Oamenii au pus garoafe roșii în țevile puștilor soldaților. Revoluția Trandafirilor a avut loc în Georgia, în 2003."
  },

  // =======================================================
  // NUTRIȚIE (100 de întrebări)
  // =======================================================

  // ---------- NUTRIȚIE: UȘOR (20) ----------
  {
    domeniu: "nutritie",
    dificultate: "usor",
    intrebare: "Ce nutrienți sunt principala sursă de energie rapidă pentru corp?",
    variante: ["Glucidele (carbohidrații)", "Vitaminele", "Mineralele", "Fibrele"],
    corect: "Glucidele (carbohidrații)",
    explicatie: "Glucidele se transformă în glucoză, combustibilul preferat al creierului. Creierul folosește aproximativ o cincime din energia corpului, deși reprezintă doar 2% din greutate."
  },
  {
    domeniu: "nutritie",
    dificultate: "usor",
    intrebare: "Ce zahăr se găsește în mod natural în lapte?",
    variante: ["Lactoza", "Fructoza", "Zaharoza", "Maltoza"],
    corect: "Lactoza",
    explicatie: "Ca să fie digerată, lactoza are nevoie de o enzimă numită lactază. Mulți adulți produc tot mai puțină lactază, ceea ce duce la intoleranță la lactoză."
  },
  {
    domeniu: "nutritie",
    dificultate: "usor",
    intrebare: "Ce zahăr natural dă gustul dulce fructelor și mierii?",
    variante: ["Fructoza", "Lactoza", "Maltoza", "Amidonul"],
    corect: "Fructoza",
    explicatie: "Fructoza este cel mai dulce zahăr natural. Zahărul de masă (zaharoza) este format dintr-o moleculă de glucoză legată de una de fructoză."
  },
  {
    domeniu: "nutritie",
    dificultate: "usor",
    intrebare: "Ce proteină din grâu, orz și secară le face rău persoanelor cu boală celiacă?",
    variante: ["Glutenul", "Cazeina", "Albumina", "Colagenul"],
    corect: "Glutenul",
    explicatie: "În boala celiacă, glutenul declanșează o reacție a sistemului imunitar care afectează intestinul. Boala afectează în jur de 1% din oameni, iar tratamentul este o dietă complet fără gluten."
  },
  {
    domeniu: "nutritie",
    dificultate: "usor",
    intrebare: "Care dintre aceste băuturi conține cafeină?",
    variante: ["Ceaiul negru", "Laptele", "Sucul de mere", "Ceaiul de mușețel"],
    corect: "Ceaiul negru",
    explicatie: "Substanța din ceai numită uneori „teină” este, de fapt, aceeași moleculă cu cafeina. Ceaiurile din plante, precum mușețelul, nu conțin cafeină."
  },
  {
    domeniu: "nutritie",
    dificultate: "usor",
    intrebare: "Ce fel de grăsimi se găsesc din abundență în peștii grași, precum somonul și macroul?",
    variante: ["Acizii grași omega-3", "Grăsimile trans", "Grăsimile saturate", "Colesterolul"],
    corect: "Acizii grași omega-3",
    explicatie: "Omega-3 sunt importanți pentru inimă și creier. Corpul nu îi poate produce singur, așa că trebuie primiți din alimentație."
  },
  {
    domeniu: "nutritie",
    dificultate: "usor",
    intrebare: "Ce legumă portocalie este bogată în betacaroten, din care corpul produce vitamina A?",
    variante: ["Morcovul", "Castravetele", "Ceapa", "Varza albă"],
    corect: "Morcovul",
    explicatie: "Se spune că mitul că morcovii te fac să vezi pe întuneric a fost răspândit de britanici în Al Doilea Război Mondial, ca să ascundă existența radarului. Totuși, lipsa vitaminei A chiar duce la vedere slabă noaptea."
  },
  {
    domeniu: "nutritie",
    dificultate: "usor",
    intrebare: "Ce fruct galben este cunoscut ca sursă bună de potasiu?",
    variante: ["Banana", "Lămâia", "Ananasul", "Gutuia"],
    corect: "Banana",
    explicatie: "Potasiul ajută mușchii și inima să funcționeze. Cartofii și fasolea au, de fapt, chiar mai mult potasiu decât bananele."
  },
  {
    domeniu: "nutritie",
    dificultate: "usor",
    intrebare: "Ce mineral, prezent mai ales în lactate, întărește oasele și dinții?",
    variante: ["Calciul", "Fierul", "Sodiul", "Iodul"],
    corect: "Calciul",
    explicatie: "Aproximativ 99% din calciul din corp se află în oase și dinți. Calciu se găsește și în legumele cu frunze verzi, în migdale și în sardine."
  },
  {
    domeniu: "nutritie",
    dificultate: "usor",
    intrebare: "Din ce plantă se obține ciocolata?",
    variante: ["Arborele de cacao", "Arborele de cafea", "Palmierul", "Trestia de zahăr"],
    corect: "Arborele de cacao",
    explicatie: "Boabele de cacao sunt fermentate, uscate și prăjite. Ciocolata conține teobromină, o substanță toxică pentru câini."
  },
  {
    domeniu: "nutritie",
    dificultate: "usor",
    intrebare: "Care este cel mai scump condiment din lume, obținut din pistilurile unei flori?",
    variante: ["Șofranul", "Vanilia", "Scorțișoara", "Cardamomul"],
    corect: "Șofranul",
    explicatie: "Pentru un kilogram de șofran sunt necesare peste 100.000 de flori, culese de mână."
  },
  {
    domeniu: "nutritie",
    dificultate: "usor",
    intrebare: "Ce băutură tradițională românească se obține, de obicei, prin distilarea prunelor?",
    variante: ["Țuica", "Vișinata", "Pelinul", "Afinata"],
    corect: "Țuica",
    explicatie: "Țuica distilată de două ori, mai tare, este numită palincă în Transilvania și Maramureș. Vișinata și afinata sunt lichioruri din fructe, nu distilate."
  },
  {
    domeniu: "nutritie",
    dificultate: "usor",
    intrebare: "Ce substanță face ca ardeiul iute să „ardă” în gură?",
    variante: ["Capsaicina", "Piperina", "Alicina", "Cafeina"],
    corect: "Capsaicina",
    explicatie: "Iuțeala ardeilor se măsoară pe scara Scoville. Laptele calmează arsura mai bine decât apa, pentru că o proteină din el, cazeina, leagă capsaicina."
  },
  {
    domeniu: "nutritie",
    dificultate: "usor",
    intrebare: "Ce aliment produs de albine practic nu se strică, dacă este păstrat corect?",
    variante: ["Mierea", "Polenul", "Lăptișorul de matcă", "Propolisul"],
    corect: "Mierea",
    explicatie: "În morminte egiptene s-au găsit vase cu miere veche de mii de ani, încă bună de mâncat. Mierea are puțină apă și este ușor acidă, așa că microbii nu se pot dezvolta în ea."
  },
  {
    domeniu: "nutritie",
    dificultate: "usor",
    intrebare: "Care dintre acestea este, botanic, un fruct, deși îl gătim ca pe o legumă?",
    variante: ["Roșia", "Morcovul", "Cartoful", "Ceapa"],
    corect: "Roșia",
    explicatie: "Botanic, fructul este partea plantei care conține semințele. Tot fructe sunt și castravetele, ardeiul și vânăta."
  },
  {
    domeniu: "nutritie",
    dificultate: "usor",
    intrebare: "Ce parte a hranei ajută digestia, deși corpul nu o poate digera?",
    variante: ["Fibrele", "Proteinele", "Grăsimile", "Vitaminele"],
    corect: "Fibrele",
    explicatie: "Fibrele hrănesc bacteriile bune din intestin și dau senzația de sațietate. Se găsesc mai ales în cerealele integrale, legume, fructe și leguminoase."
  },
  {
    domeniu: "nutritie",
    dificultate: "usor",
    intrebare: "Cât la sută din corpul unui adult este format din apă, aproximativ?",
    variante: ["60%", "30%", "45%", "85%"],
    corect: "60%",
    explicatie: "Bebelușii au și mai multă apă, în jur de 75%. Creierul și inima conțin aproximativ trei sferturi apă."
  },
  {
    domeniu: "nutritie",
    dificultate: "usor",
    intrebare: "Ce fruct tropical verde, cu un sâmbure mare, este bogat în grăsimi?",
    variante: ["Avocado", "Mango", "Papaya", "Fructul pasiunii"],
    corect: "Avocado",
    explicatie: "Grăsimile din avocado sunt mai ales mononesaturate, ca cele din uleiul de măsline."
  },
  {
    domeniu: "nutritie",
    dificultate: "usor",
    intrebare: "Ce țară produce cel mai mult sirop de arțar?",
    variante: ["Canada", "Statele Unite", "Norvegia", "Japonia"],
    corect: "Canada",
    explicatie: "Provincia Quebec produce singură cea mai mare parte din siropul de arțar al lumii. Frunza de arțar apare chiar pe steagul Canadei."
  },
  {
    domeniu: "nutritie",
    dificultate: "usor",
    intrebare: "Din ce se face astăzi, de obicei, mămăliga?",
    variante: ["Din făină de porumb", "Din făină de grâu", "Din orz", "Din ovăz"],
    corect: "Din făină de porumb",
    explicatie: "Înainte ca porumbul să se răspândească în țările române, în secolele al XVII-lea și al XVIII-lea, mămăliga se făcea din mei."
  },

  // ---------- NUTRIȚIE: MEDIU (48) ----------
  {
    domeniu: "nutritie",
    dificultate: "mediu",
    intrebare: "Câte kilocalorii aduce, aproximativ, un gram de grăsime?",
    variante: ["9", "4", "7", "12"],
    corect: "9",
    explicatie: "Proteinele și glucidele aduc aproximativ 4 kcal pe gram, iar alcoolul 7. De aceea, alimentele grase sunt foarte bogate în energie."
  },
  {
    domeniu: "nutritie",
    dificultate: "mediu",
    intrebare: "Ce vitamină se găsește aproape numai în alimentele de origine animală, fiind o problemă pentru vegani?",
    variante: ["Vitamina B12", "Vitamina C", "Vitamina K", "Vitamina E"],
    corect: "Vitamina B12",
    explicatie: "Vitamina B12 este produsă, de fapt, de bacterii. Veganii o iau de obicei din suplimente sau din alimente îmbogățite."
  },
  {
    domeniu: "nutritie",
    dificultate: "mediu",
    intrebare: "Ce vitamină este necesară pentru coagularea sângelui și se găsește în legumele cu frunze verzi?",
    variante: ["Vitamina K", "Vitamina A", "Vitamina B1", "Vitamina D"],
    corect: "Vitamina K",
    explicatie: "Litera K vine de la cuvântul german „Koagulation”. Nou-născuții primesc de obicei o doză de vitamina K imediat după naștere."
  },
  {
    domeniu: "nutritie",
    dificultate: "mediu",
    intrebare: "Ce vitamină din grupul B este recomandată în sarcină, pentru dezvoltarea corectă a sistemului nervos al copilului?",
    variante: ["Acidul folic (B9)", "Vitamina B12", "Vitamina B1", "Vitamina B6"],
    corect: "Acidul folic (B9)",
    explicatie: "Acidul folic reduce riscul unor malformații ale coloanei vertebrale și ale creierului. Se găsește în legumele cu frunze verzi, linte și citrice."
  },
  {
    domeniu: "nutritie",
    dificultate: "mediu",
    intrebare: "Lipsa cărei vitamine provoacă beriberi, boală frecventă cândva la oamenii hrăniți mai ales cu orez decorticat?",
    variante: ["Vitamina B1", "Vitamina C", "Vitamina D", "Vitamina A"],
    corect: "Vitamina B1",
    explicatie: "Prin decorticare, orezul își pierde învelișul, unde se află cea mai mare parte a vitaminei B1, numită și tiamină."
  },
  {
    domeniu: "nutritie",
    dificultate: "mediu",
    intrebare: "Ce boală a fost răspândită în secolul al XIX-lea în satele românești unde oamenii mâncau aproape numai mămăligă?",
    variante: ["Pelagra", "Scorbutul", "Rahitismul", "Beriberi"],
    corect: "Pelagra",
    explicatie: "Pelagra este provocată de lipsa vitaminei B3 (niacina). Popoarele din America pregăteau porumbul cu cenușă sau var, ceea ce elibera niacina, dar europenii nu au preluat metoda."
  },
  {
    domeniu: "nutritie",
    dificultate: "mediu",
    intrebare: "Ce fruct, care crește și în România, are de câteva ori mai multă vitamina C decât portocalele?",
    variante: ["Cătina", "Mura", "Afina", "Fragul"],
    corect: "Cătina",
    explicatie: "Cătina crește mai ales pe dealurile și în nisipurile din sud-estul țării. Și măceșele sunt foarte bogate în vitamina C."
  },
  {
    domeniu: "nutritie",
    dificultate: "mediu",
    intrebare: "Ce vitamină ajută corpul să absoarbă fierul din legume și cereale?",
    variante: ["Vitamina C", "Vitamina D", "Vitamina E", "Vitamina B12"],
    corect: "Vitamina C",
    explicatie: "Fierul din plante se absoarbe mai greu decât cel din carne. Un pahar de suc de portocale sau o salată cu ardei gras la masă pot ajuta."
  },
  {
    domeniu: "nutritie",
    dificultate: "mediu",
    intrebare: "Ce grăsimi, formate prin hidrogenarea industrială a uleiurilor, sunt considerate cele mai dăunătoare pentru inimă?",
    variante: ["Grăsimile trans", "Grăsimile mononesaturate", "Acizii grași omega-3", "Acizii grași omega-6"],
    corect: "Grăsimile trans",
    explicatie: "Grăsimile trans cresc colesterolul „rău” și îl scad pe cel „bun”. Din 2021, Uniunea Europeană limitează strict cantitatea lor în alimente."
  },
  {
    domeniu: "nutritie",
    dificultate: "mediu",
    intrebare: "Ce tip de colesterol este numit popular „colesterolul bun”?",
    variante: ["HDL", "LDL", "VLDL", "Trigliceridele"],
    corect: "HDL",
    explicatie: "HDL duce colesterolul de la artere spre ficat, care îl elimină. LDL, „colesterolul rău”, se poate depune pe pereții arterelor."
  },
  {
    domeniu: "nutritie",
    dificultate: "mediu",
    intrebare: "Ce grăsimi sunt, de obicei, solide la temperatura camerei, precum untul sau untura?",
    variante: ["Grăsimile saturate", "Grăsimile nesaturate", "Acizii grași omega-3", "Grăsimile mononesaturate"],
    corect: "Grăsimile saturate",
    explicatie: "Uleiurile vegetale lichide conțin mai ales grăsimi nesaturate. O excepție este uleiul de cocos, bogat în grăsimi saturate și solid sub aproximativ 24 °C."
  },
  {
    domeniu: "nutritie",
    dificultate: "mediu",
    intrebare: "Ce cantitate maximă de sare pe zi recomandă Organizația Mondială a Sănătății pentru un adult?",
    variante: ["Mai puțin de 5 grame", "Mai puțin de 15 grame", "Mai puțin de 25 de grame", "Mai puțin de 1 gram"],
    corect: "Mai puțin de 5 grame",
    explicatie: "În multe țări, oamenii consumă aproape dublu. Cea mai mare parte a sării vine din alimente procesate, precum pâinea, mezelurile și brânzeturile."
  },
  {
    domeniu: "nutritie",
    dificultate: "mediu",
    intrebare: "Ce element din sarea de bucătărie este legat de creșterea tensiunii arteriale?",
    variante: ["Sodiul", "Clorul", "Iodul", "Potasiul"],
    corect: "Sodiul",
    explicatie: "Sarea, adică clorura de sodiu, conține aproximativ 40% sodiu. Potasiul are, în schimb, un efect opus asupra tensiunii."
  },
  {
    domeniu: "nutritie",
    dificultate: "mediu",
    intrebare: "Ce indice arată cât de repede crește glicemia după ce mănânci un aliment?",
    variante: ["Indicele glicemic", "Indicele de masă corporală", "Scara Scoville", "Densitatea calorică"],
    corect: "Indicele glicemic",
    explicatie: "Pâinea albă și piureul de cartofi au indice glicemic mare, iar leguminoasele și majoritatea legumelor au indice glicemic mic."
  },
  {
    domeniu: "nutritie",
    dificultate: "mediu",
    intrebare: "Cum se calculează indicele de masă corporală (IMC)?",
    variante: ["Greutatea în kilograme împărțită la pătratul înălțimii în metri", "Greutatea împărțită la înălțime", "Înălțimea înmulțită cu greutatea", "Greutatea minus înălțimea în centimetri"],
    corect: "Greutatea în kilograme împărțită la pătratul înălțimii în metri",
    explicatie: "IMC-ul nu face diferența între mușchi și grăsime. De aceea, un sportiv foarte musculos poate avea un IMC mare deși este sănătos."
  },
  {
    domeniu: "nutritie",
    dificultate: "mediu",
    intrebare: "Care dintre aceste cereale nu conține gluten?",
    variante: ["Orezul", "Grâul", "Orzul", "Secara"],
    corect: "Orezul",
    explicatie: "Nici porumbul, hrișca și quinoa nu conțin gluten. Hrișca nici măcar nu este o cereală: este sămânța unei plante înrudite cu măcrișul și reventul."
  },
  {
    domeniu: "nutritie",
    dificultate: "mediu",
    intrebare: "Ce plantă din Anzi este apreciată pentru proteinele ei „complete”, cu toți aminoacizii esențiali în proporții bune?",
    variante: ["Quinoa", "Orezul brun", "Meiul", "Ovăzul"],
    corect: "Quinoa",
    explicatie: "Incașii numeau quinoa „mama tuturor cerealelor”. ONU a declarat anul 2013 „Anul Internațional al Quinoa”."
  },
  {
    domeniu: "nutritie",
    dificultate: "mediu",
    intrebare: "Din ce plantă se obține tofu?",
    variante: ["Soia", "Năutul", "Lintea", "Mazărea"],
    corect: "Soia",
    explicatie: "Soia este una dintre puținele plante cu proteine „complete”. Tofu se obține prin închegarea laptelui de soia, într-un fel asemănător cu facerea brânzei."
  },
  {
    domeniu: "nutritie",
    dificultate: "mediu",
    intrebare: "Din ce familie de plante fac parte arahidele (alunele americane)?",
    variante: ["Leguminoase, ca fasolea și mazărea", "Nuci, ca nucul și alunul", "Cereale, ca grâul", "Rădăcinoase, ca morcovul"],
    corect: "Leguminoase, ca fasolea și mazărea",
    explicatie: "Spre deosebire de nucile adevărate, arahidele se coc sub pământ. Alergia la arahide este una dintre cele mai frecvente alergii alimentare."
  },
  {
    domeniu: "nutritie",
    dificultate: "mediu",
    intrebare: "Ce sunt probioticele?",
    variante: ["Bacterii vii, benefice pentru intestin", "Fibre care hrănesc bacteriile din intestin", "Vitamine produse în laborator", "Antibiotice naturale din plante"],
    corect: "Bacterii vii, benefice pentru intestin",
    explicatie: "Probioticele se găsesc în iaurt, chefir și murăturile fermentate natural. Fibrele care hrănesc aceste bacterii se numesc prebiotice."
  },
  {
    domeniu: "nutritie",
    dificultate: "mediu",
    intrebare: "Din ce se face borșul folosit la acrirea ciorbelor românești?",
    variante: ["Din tărâțe de grâu fermentate", "Din oțet de mere", "Din zer de lapte", "Din zeamă de lămâie"],
    corect: "Din tărâțe de grâu fermentate",
    explicatie: "Tărâțele sunt lăsate la fermentat în apă câteva zile. Borșul conține bacterii lactice, la fel ca murăturile."
  },
  {
    domeniu: "nutritie",
    dificultate: "mediu",
    intrebare: "Ce gust de bază, identificat în Japonia, este dat de glutamat?",
    variante: ["Umami", "Amarul", "Acrul", "Săratul"],
    corect: "Umami",
    explicatie: "Gustul a fost identificat în 1908 de chimistul Kikunae Ikeda, într-o supă de alge. Se regăsește în parmezan, roșii coapte și sosul de soia."
  },
  {
    domeniu: "nutritie",
    dificultate: "mediu",
    intrebare: "Ce înseamnă litera „E” din codurile aditivilor alimentari, precum E330?",
    variante: ["Europa", "Energie", "Esențial", "Extract"],
    corect: "Europa",
    explicatie: "Codul E arată că aditivul a fost evaluat și aprobat în Uniunea Europeană. Nu toți aditivii E sunt artificiali: unii sunt substanțe naturale, precum coloranții din plante."
  },
  {
    domeniu: "nutritie",
    dificultate: "mediu",
    intrebare: "Ce îndulcitor natural, practic fără calorii, se obține din frunzele unei plante din America de Sud?",
    variante: ["Stevia", "Aspartamul", "Zaharina", "Sorbitolul"],
    corect: "Stevia",
    explicatie: "Stevia este de câteva sute de ori mai dulce decât zahărul. Popoarele guarani o foloseau de secole ca să își îndulcească băuturile."
  },
  {
    domeniu: "nutritie",
    dificultate: "mediu",
    intrebare: "Ce bacterie poate produce o toxină foarte periculoasă în conservele făcute greșit în casă?",
    variante: ["Clostridium botulinum", "Salmonella", "Listeria", "Lactobacillus"],
    corect: "Clostridium botulinum",
    explicatie: "Boala se numește botulism și poate paraliza mușchii. Conservele bombate nu trebuie consumate niciodată."
  },
  {
    domeniu: "nutritie",
    dificultate: "mediu",
    intrebare: "Ce bacterie se transmite des prin ouă crude și carne de pui insuficient gătită?",
    variante: ["Salmonella", "Clostridium botulinum", "Lactobacillus", "Bifidobacterium"],
    corect: "Salmonella",
    explicatie: "Salmonella este distrusă prin gătire completă. Ustensilele folosite pentru carne crudă trebuie spălate înainte de a fi folosite pentru alte alimente."
  },
  {
    domeniu: "nutritie",
    dificultate: "mediu",
    intrebare: "Ce substanță toxică apare în cartofii înverziți sau încolțiți?",
    variante: ["Solanina", "Capsaicina", "Histamina", "Cafeina"],
    corect: "Solanina",
    explicatie: "Cartofii fac parte din aceeași familie cu roșiile și vinetele. Părțile verzi și colții trebuie îndepărtați înainte de gătit."
  },
  {
    domeniu: "nutritie",
    dificultate: "mediu",
    intrebare: "Ce pigment dă culoarea roșie roșiilor și pepenilor roșii?",
    variante: ["Licopenul", "Betacarotenul", "Clorofila", "Antocianii"],
    corect: "Licopenul",
    explicatie: "Licopenul se absoarbe mai bine din roșiile gătite, de exemplu din bulion, decât din cele crude."
  },
  {
    domeniu: "nutritie",
    dificultate: "mediu",
    intrebare: "De unde le vine flamingilor culoarea roz?",
    variante: ["Din pigmenții din algele și crustaceele pe care le mănâncă", "Din culoarea apei în care trăiesc", "Din vasele de sânge de sub pene", "Așa se nasc, cu penele roz"],
    corect: "Din pigmenții din algele și crustaceele pe care le mănâncă",
    explicatie: "Puii de flamingo se nasc cenușii. În grădinile zoologice, hrana lor este îmbogățită cu pigmenți, ca să nu-și piardă culoarea."
  },
  {
    domeniu: "nutritie",
    dificultate: "mediu",
    intrebare: "Ce condiment se obține din scoarța unor arbori din Asia?",
    variante: ["Scorțișoara", "Nucșoara", "Cuișoarele", "Vanilia"],
    corect: "Scorțișoara",
    explicatie: "Cuișoarele sunt boboci de flori uscați, iar nucșoara este sămânța unui arbore tropical."
  },
  {
    domeniu: "nutritie",
    dificultate: "mediu",
    intrebare: "Din ce fel de plantă se obține vanilia?",
    variante: ["Dintr-o orhidee", "Dintr-un palmier", "Dintr-un arbust de cacao", "Dintr-o plantă de piper"],
    corect: "Dintr-o orhidee",
    explicatie: "În majoritatea plantațiilor, florile de vanilie trebuie polenizate de mână. De aceea vanilia este al doilea cel mai scump condiment, după șofran."
  },
  {
    domeniu: "nutritie",
    dificultate: "mediu",
    intrebare: "Ce au în comun piperul negru, cel verde și cel alb?",
    variante: ["Provin din aceeași plantă, culese și prelucrate diferit", "Provin din trei plante diferite", "Piperul alb este artificial", "Doar piperul negru este piper adevărat"],
    corect: "Provin din aceeași plantă, culese și prelucrate diferit",
    explicatie: "Piperul verde este cules necopt, cel negru este fructul necopt uscat la soare, iar cel alb este sămânța fără coajă, din fructul copt."
  },
  {
    domeniu: "nutritie",
    dificultate: "mediu",
    intrebare: "Ce substanță din usturoi îi dă mirosul puternic?",
    variante: ["Alicina", "Capsaicina", "Piperina", "Mentolul"],
    corect: "Alicina",
    explicatie: "Alicina se formează abia când usturoiul este tăiat sau zdrobit. De aceea, un cățel întreg aproape nu miroase."
  },
  {
    domeniu: "nutritie",
    dificultate: "mediu",
    intrebare: "Ce brânză românească este ambalată și maturată în coajă de brad?",
    variante: ["Brânza de burduf", "Telemeaua", "Cașcavalul", "Urda"],
    corect: "Brânza de burduf",
    explicatie: "Coaja de brad îi dă o aromă de rășină. Urda se obține din zerul rămas după facerea brânzei."
  },
  {
    domeniu: "nutritie",
    dificultate: "mediu",
    intrebare: "Cum se numește energia de care are nevoie corpul în repaus complet, doar ca să funcționeze?",
    variante: ["Metabolismul bazal", "Indicele glicemic", "Indicele de masă corporală", "Termogeneza alimentară"],
    corect: "Metabolismul bazal",
    explicatie: "La majoritatea oamenilor, metabolismul bazal reprezintă cea mai mare parte din energia consumată zilnic, chiar dacă fac sport."
  },
  {
    domeniu: "nutritie",
    dificultate: "mediu",
    intrebare: "Care dintre aceste fructe are cea mai multă vitamina C la 100 de grame?",
    variante: ["Kiwi", "Banana", "Mărul", "Strugurele"],
    corect: "Kiwi",
    explicatie: "Un kiwi are aproape dublul vitaminei C dintr-o portocală de aceeași greutate. Și ardeiul gras roșu are mai multă vitamina C decât portocala."
  },
  {
    domeniu: "nutritie",
    dificultate: "mediu",
    intrebare: "Care dintre aceste legume conține cea mai multă apă, aproximativ 95%?",
    variante: ["Castravetele", "Cartoful", "Morcovul", "Porumbul"],
    corect: "Castravetele",
    explicatie: "Și pepenele roșu are peste 90% apă. Alimentele cu multă apă au, de obicei, puține calorii."
  },
  {
    domeniu: "nutritie",
    dificultate: "mediu",
    intrebare: "Ce băutură tradițională din America de Sud se bea dintr-o tigvă, cu un pai metalic?",
    variante: ["Mate", "Rooibos", "Chai", "Matcha"],
    corect: "Mate",
    explicatie: "Mate conține cafeină. În Argentina, Uruguay și Paraguay se bea adesea în grup, din același recipient."
  },
  {
    domeniu: "nutritie",
    dificultate: "mediu",
    intrebare: "Ce ceai verde sub formă de pudră este folosit la ceremonia japoneză a ceaiului?",
    variante: ["Matcha", "Sencha", "Oolong", "Pu-erh"],
    corect: "Matcha",
    explicatie: "La matcha se consumă toată frunza, măcinată fin, nu doar infuzia. De aceea are mai multă cafeină decât ceaiul verde obișnuit."
  },
  {
    domeniu: "nutritie",
    dificultate: "mediu",
    intrebare: "Ce vitamină antioxidantă se mai numește tocoferol?",
    variante: ["Vitamina E", "Vitamina B12", "Vitamina K", "Vitamina A"],
    corect: "Vitamina E",
    explicatie: "Vitamina E se găsește mai ales în uleiurile vegetale, semințele de floarea-soarelui și migdale."
  },
  {
    domeniu: "nutritie",
    dificultate: "mediu",
    intrebare: "Care dintre aceste alimente are cele mai multe proteine la 100 de grame?",
    variante: ["Pieptul de pui gătit", "Oul", "Lintea fiartă", "Laptele"],
    corect: "Pieptul de pui gătit",
    explicatie: "Pieptul de pui gătit are aproximativ 30 de grame de proteine la 100 de grame. Lintea uscată are și ea multe proteine, dar prin fierbere absoarbe apă, iar conținutul la 100 de grame scade."
  },
  {
    domeniu: "nutritie",
    dificultate: "mediu",
    intrebare: "Ce mineral, adăugat în pasta de dinți, ajută la prevenirea cariilor?",
    variante: ["Fluorul", "Clorul", "Iodul", "Bromul"],
    corect: "Fluorul",
    explicatie: "Fluorul face smalțul mai rezistent la acizii produși de bacterii. În cantități prea mari, poate însă păta dinții."
  },
  {
    domeniu: "nutritie",
    dificultate: "mediu",
    intrebare: "Cu ce gaz sunt umplute pungile de chipsuri, ca produsul să rămână proaspăt?",
    variante: ["Azot", "Oxigen", "Heliu", "Hidrogen"],
    corect: "Azot",
    explicatie: "Azotul nu reacționează cu grăsimile din chipsuri, așa că acestea nu se râncezesc. Perna de gaz le protejează și de sfărâmare."
  },
  {
    domeniu: "nutritie",
    dificultate: "mediu",
    intrebare: "Din laptele cărui animal se face mozzarella tradițională din regiunea Campania?",
    variante: ["De bivoliță", "De oaie", "De capră", "De măgăriță"],
    corect: "De bivoliță",
    explicatie: "Mozzarella di bufala campana are denumire de origine protejată. Bivolițe se cresc și în România, mai ales în Transilvania."
  },
  {
    domeniu: "nutritie",
    dificultate: "mediu",
    intrebare: "Care țară produce cea mai mare parte din cacaoa lumii?",
    variante: ["Coasta de Fildeș", "Brazilia", "Elveția", "Belgia"],
    corect: "Coasta de Fildeș",
    explicatie: "Coasta de Fildeș produce aproape 40% din cacaoa lumii. Elveția și Belgia sunt celebre pentru ciocolată, dar nu cultivă cacao."
  },
  {
    domeniu: "nutritie",
    dificultate: "mediu",
    intrebare: "Ce băutură fermentată din lapte, originară din Caucaz, conține drojdii pe lângă bacterii?",
    variante: ["Chefirul", "Iaurtul", "Laptele bătut", "Smântâna"],
    corect: "Chefirul",
    explicatie: "Chefirul se obține cu „granule de chefir”, colonii de bacterii și drojdii care seamănă cu bucățele de conopidă."
  },
  {
    domeniu: "nutritie",
    dificultate: "mediu",
    intrebare: "Ce condiment galben, folosit în curry, conține curcumină?",
    variante: ["Turmericul", "Șofranul", "Ghimbirul", "Chimionul"],
    corect: "Turmericul",
    explicatie: "Curcumina se absoarbe greu, dar absorbția crește mult dacă turmericul este folosit împreună cu piper negru."
  },
  {
    domeniu: "nutritie",
    dificultate: "mediu",
    intrebare: "Din ce se obține, în mod tradițional, sosul de soia?",
    variante: ["Din soia fermentată, de obicei împreună cu grâu", "Din alge marine uscate", "Din pește fermentat", "Din ciuperci uscate"],
    corect: "Din soia fermentată, de obicei împreună cu grâu",
    explicatie: "Fermentația durează luni de zile. Pentru că se folosește și grâu, sosul de soia tradițional conține gluten."
  },

  // ---------- NUTRIȚIE: GREU (32) ----------
  {
    domeniu: "nutritie",
    dificultate: "greu",
    intrebare: "Ce aliment este cea mai bogată sursă naturală de seleniu, unul singur putând acoperi necesarul zilnic?",
    variante: ["Nuca braziliană", "Migdala", "Aluna de pădure", "Fisticul"],
    corect: "Nuca braziliană",
    explicatie: "Seleniul este important pentru tiroidă și sistemul imunitar. Tocmai pentru că sunt atât de bogate în seleniu, nu se recomandă consumul unor cantități mari de nuci braziliene."
  },
  {
    domeniu: "nutritie",
    dificultate: "greu",
    intrebare: "Ce aliment marin este cunoscut ca una dintre cele mai bogate surse de zinc?",
    variante: ["Stridiile", "Somonul", "Tonul", "Algele"],
    corect: "Stridiile",
    explicatie: "Zincul ajută sistemul imunitar și vindecarea rănilor. Se găsește și în carnea roșie, semințele de dovleac și leguminoase."
  },
  {
    domeniu: "nutritie",
    dificultate: "greu",
    intrebare: "Ce substanțe din ceai și cafea pot reduce absorbția fierului, dacă sunt băute la masă?",
    variante: ["Taninurile", "Cafeina", "Teobromina", "Zahărul"],
    corect: "Taninurile",
    explicatie: "De aceea, persoanelor cu deficit de fier li se recomandă să bea ceai sau cafea între mese, nu în timpul lor."
  },
  {
    domeniu: "nutritie",
    dificultate: "greu",
    intrebare: "Ce acid gras predomină în uleiul de măsline?",
    variante: ["Acidul oleic", "Acidul palmitic", "Acidul lauric", "Acidul linoleic"],
    corect: "Acidul oleic",
    explicatie: "Acidul oleic este o grăsime mononesaturată. Dieta mediteraneeană, bazată pe ulei de măsline, legume și pește, este pe lista patrimoniului UNESCO din 2010."
  },
  {
    domeniu: "nutritie",
    dificultate: "greu",
    intrebare: "Ce bacterie, descoperită de un medic bulgar în 1905, este folosită la producerea iaurtului?",
    variante: ["Lactobacillus bulgaricus", "Lactobacillus acidophilus", "Bifidobacterium bifidum", "Streptococcus thermophilus"],
    corect: "Lactobacillus bulgaricus",
    explicatie: "Bacteria a fost descoperită de Stamen Grigorov. Iaurtul se obține folosind-o împreună cu Streptococcus thermophilus."
  },
  {
    domeniu: "nutritie",
    dificultate: "greu",
    intrebare: "Ce cod de aditiv are glutamatul monosodic?",
    variante: ["E621", "E300", "E330", "E951"],
    corect: "E621",
    explicatie: "E300 este vitamina C (acidul ascorbic), E330 acidul citric, iar E951 aspartamul."
  },
  {
    domeniu: "nutritie",
    dificultate: "greu",
    intrebare: "Persoanele cu ce boală genetică trebuie să evite îndulcitorul aspartam?",
    variante: ["Fenilcetonuria", "Diabetul de tip 1", "Hemofilia", "Daltonismul"],
    corect: "Fenilcetonuria",
    explicatie: "Aspartamul conține fenilalanină, pe care cei cu fenilcetonurie nu o pot descompune. De aceea, produsele cu aspartam au o avertizare pe etichetă."
  },
  {
    domeniu: "nutritie",
    dificultate: "greu",
    intrebare: "Care a fost primul îndulcitor artificial, descoperit întâmplător în 1879?",
    variante: ["Zaharina", "Aspartamul", "Sucraloza", "Ciclamatul"],
    corect: "Zaharina",
    explicatie: "Chimistul Constantin Fahlberg a simțit un gust dulce pe mâini după o zi de lucru în laborator. Zaharina a devenit populară în Primul Război Mondial, când zahărul era raționalizat."
  },
  {
    domeniu: "nutritie",
    dificultate: "greu",
    intrebare: "Ce îndulcitor, folosit în gumele de mestecat, protejează dinții, dar este foarte toxic pentru câini?",
    variante: ["Xilitolul", "Sorbitolul", "Fructoza", "Glucoza"],
    corect: "Xilitolul",
    explicatie: "Bacteriile din gură nu pot transforma xilitolul în acid, așa că acesta nu provoacă carii. La câini, chiar și o cantitate mică poate scădea periculos glicemia."
  },
  {
    domeniu: "nutritie",
    dificultate: "greu",
    intrebare: "Ce limită pentru zahărul adăugat recomandă Organizația Mondială a Sănătății?",
    variante: ["Sub 10% din energia zilnică", "Sub 30% din energia zilnică", "Sub 50% din energia zilnică", "Nu există o astfel de recomandare"],
    corect: "Sub 10% din energia zilnică",
    explicatie: "OMS adaugă că sub 5% ar aduce beneficii suplimentare. Zahărul din fructele întregi și din lapte nu intră în această limită."
  },
  {
    domeniu: "nutritie",
    dificultate: "greu",
    intrebare: "De ce trebuie fiartă bine fasolea roșie uscată înainte de a fi mâncată?",
    variante: ["Conține o substanță toxică distrusă doar prin fierbere bună", "Altfel nu are proteine", "Altfel nu își schimbă culoarea", "Altfel conține prea mult zahăr"],
    corect: "Conține o substanță toxică distrusă doar prin fierbere bună",
    explicatie: "Substanța se numește fitohemaglutinină. Fasolea crudă sau gătită insuficient, de exemplu la foc foarte mic, poate provoca vărsături puternice."
  },
  {
    domeniu: "nutritie",
    dificultate: "greu",
    intrebare: "Ce pigmenți dau culoarea albastru-violet afinelor și verzei roșii?",
    variante: ["Antocianii", "Licopenul", "Betacarotenul", "Clorofila"],
    corect: "Antocianii",
    explicatie: "Antocianii își schimbă culoarea după aciditate. De aceea, zeama de varză roșie devine roz cu lămâie și verzuie cu bicarbonat."
  },
  {
    domeniu: "nutritie",
    dificultate: "greu",
    intrebare: "Ce produs românesc a fost primul înregistrat cu indicație geografică protejată în Uniunea Europeană?",
    variante: ["Magiunul de prune de Topoloveni", "Salamul de Sibiu", "Telemeaua de Ibănești", "Cârnații de Pleșcoi"],
    corect: "Magiunul de prune de Topoloveni",
    explicatie: "Magiunul a primit această recunoaștere în 2011. Se face numai din prune, fără zahăr adăugat, fierte multe ore."
  },
  {
    domeniu: "nutritie",
    dificultate: "greu",
    intrebare: "În ce stare intră corpul când are foarte puțini carbohidrați și începe să producă corpi cetonici din grăsimi?",
    variante: ["Cetoză", "Glicoliză", "Fermentație", "Fotosinteză"],
    corect: "Cetoză",
    explicatie: "Creierul poate folosi corpii cetonici drept combustibil când nu are destulă glucoză. Dietele „keto” se bazează pe acest mecanism."
  },
  {
    domeniu: "nutritie",
    dificultate: "greu",
    intrebare: "În ce organ, pe lângă mușchi, își păstrează corpul rezervele de glicogen?",
    variante: ["Ficatul", "Splina", "Rinichii", "Pancreasul"],
    corect: "Ficatul",
    explicatie: "Glicogenul din ficat menține glicemia între mese și se epuizează, de obicei, în mai puțin de o zi fără mâncare. După aceea, corpul se bazează tot mai mult pe grăsimi."
  },
  {
    domeniu: "nutritie",
    dificultate: "greu",
    intrebare: "După aproximativ cât timp elimină corpul jumătate din cafeina unei cafele?",
    variante: ["În jur de 5 ore", "În jur de 30 de minute", "În jur de 2 zile", "În jur de o săptămână"],
    corect: "În jur de 5 ore",
    explicatie: "De aceea, o cafea băută după-amiaza poate afecta somnul. Timpul diferă mult de la om la om: de exemplu, crește în sarcină."
  },
  {
    domeniu: "nutritie",
    dificultate: "greu",
    intrebare: "Ce hormon, produs mai ales de stomac, stimulează senzația de foame?",
    variante: ["Grelina", "Leptina", "Melatonina", "Adrenalina"],
    corect: "Grelina",
    explicatie: "Nivelul de grelină crește înainte de mese și scade după ce mâncăm. Leptina, produsă de țesutul gras, are efectul opus: transmite creierului senzația de sațietate."
  },
  {
    domeniu: "nutritie",
    dificultate: "greu",
    intrebare: "Ce enzimă din ananasul proaspăt descompune proteinele și împiedică jeleul cu gelatină să se întărească?",
    variante: ["Bromelaina", "Papaina", "Pepsina", "Lactaza"],
    corect: "Bromelaina",
    explicatie: "Prin fierbere, enzima este distrusă, așa că ananasul din conservă poate fi folosit în jeleuri. Papaina, din papaya, are un efect asemănător."
  },
  {
    domeniu: "nutritie",
    dificultate: "greu",
    intrebare: "Ce preparat japonez se face din pește-balon, care poate conține o toxină mortală?",
    variante: ["Fugu", "Unagi", "Tempura", "Tonkatsu"],
    corect: "Fugu",
    explicatie: "Toxina se numește tetrodotoxină. În Japonia, doar bucătarii cu o licență specială au voie să prepare fugu."
  },
  {
    domeniu: "nutritie",
    dificultate: "greu",
    intrebare: "Ce rădăcină tropicală, aliment de bază în Africa, poate elibera cianură dacă nu este prelucrată corect?",
    variante: ["Maniocul", "Cartoful dulce", "Taro", "Ghimbirul"],
    corect: "Maniocul",
    explicatie: "Prin înmuiere, fermentare și gătire, substanțele toxice sunt eliminate. Tapioca se face din amidonul de manioc."
  },
  {
    domeniu: "nutritie",
    dificultate: "greu",
    intrebare: "Ce substanță din cerealele integrale și leguminoase poate reduce absorbția fierului și a zincului?",
    variante: ["Acidul fitic", "Acidul ascorbic", "Acidul folic", "Acidul citric"],
    corect: "Acidul fitic",
    explicatie: "Înmuierea, încolțirea și fermentarea, de exemplu la pâinea cu maia, reduc cantitatea de acid fitic."
  },
  {
    domeniu: "nutritie",
    dificultate: "greu",
    intrebare: "Ce element metalic se află în molecula vitaminei B12?",
    variante: ["Cobaltul", "Fierul", "Magneziul", "Zincul"],
    corect: "Cobaltul",
    explicatie: "De aceea, vitamina B12 se mai numește cobalamină. Este singura vitamină care conține un element metalic."
  },
  {
    domeniu: "nutritie",
    dificultate: "greu",
    intrebare: "Cum se numește forma gravă de malnutriție la copii, provocată mai ales de lipsa proteinelor, cu burta umflată?",
    variante: ["Kwashiorkor", "Marasmul", "Rahitismul", "Pelagra"],
    corect: "Kwashiorkor",
    explicatie: "Numele provine dintr-o limbă vorbită în Ghana. Burta se umflă din cauza lichidului care se acumulează când în sânge sunt prea puține proteine."
  },
  {
    domeniu: "nutritie",
    dificultate: "greu",
    intrebare: "Ce bucătar francez a inventat conservarea alimentelor în recipiente închise și fierte, pentru armata lui Napoleon?",
    variante: ["Nicolas Appert", "Louis Pasteur", "Auguste Escoffier", "Antoine Parmentier"],
    corect: "Nicolas Appert",
    explicatie: "Appert a câștigat în 1810 un premiu oferit de guvernul francez. Metoda lui funcționa cu decenii înainte ca Pasteur să explice rolul microbilor."
  },
  {
    domeniu: "nutritie",
    dificultate: "greu",
    intrebare: "Ce farmacist francez a popularizat cartoful în Franța, în secolul al XVIII-lea?",
    variante: ["Antoine Parmentier", "Nicolas Appert", "Jean Anthelme Brillat-Savarin", "Auguste Escoffier"],
    corect: "Antoine Parmentier",
    explicatie: "Se spune că a pus paznici la un câmp de cartofi, ca oamenii să creadă că sunt valoroși și să-i fure. Multe preparate cu cartofi poartă numele lui."
  },
  {
    domeniu: "nutritie",
    dificultate: "greu",
    intrebare: "Ce reacție chimică dă culoarea aurie și aroma pâinii prăjite și a cărnii rumenite?",
    variante: ["Reacția Maillard", "Caramelizarea", "Fermentația", "Saponificarea"],
    corect: "Reacția Maillard",
    explicatie: "Reacția Maillard are loc între zaharuri și proteine, la temperaturi mari. Caramelizarea este diferită: implică doar zaharurile."
  },
  {
    domeniu: "nutritie",
    dificultate: "greu",
    intrebare: "De ce lăcrimăm când tăiem ceapa?",
    variante: ["Ceapa tăiată eliberează un compus volatil cu sulf, care irită ochii", "Ceapa conține capsaicină, care sare în ochi", "Mirosul puternic provoacă o reacție alergică", "Sucul de ceapă conține acid citric"],
    corect: "Ceapa tăiată eliberează un compus volatil cu sulf, care irită ochii",
    explicatie: "Ceapa răcită la frigider sau tăiată cu un cuțit foarte ascuțit eliberează mai puțin din acest compus."
  },
  {
    domeniu: "nutritie",
    dificultate: "greu",
    intrebare: "Ce se înțelege prin „calorii goale”?",
    variante: ["Alimente cu multă energie, dar aproape fără vitamine, minerale sau fibre", "Alimente care nu au deloc calorii", "Caloriile arse în timpul somnului", "Caloriile din apă"],
    corect: "Alimente cu multă energie, dar aproape fără vitamine, minerale sau fibre",
    explicatie: "Exemple tipice sunt băuturile răcoritoare îndulcite și multe dulciuri."
  },
  {
    domeniu: "nutritie",
    dificultate: "greu",
    intrebare: "Ce cantitate de cafeină pe zi consideră Autoritatea Europeană pentru Siguranța Alimentară sigură pentru un adult sănătos?",
    variante: ["Până la 400 mg", "Până la 40 mg", "Până la 1.000 mg", "Până la 4.000 mg"],
    corect: "Până la 400 mg",
    explicatie: "Asta înseamnă, în medie, 3-4 cafele. Pentru femeile însărcinate, limita recomandată este de 200 mg pe zi."
  },
  {
    domeniu: "nutritie",
    dificultate: "greu",
    intrebare: "Care este diferența principală dintre ceaiul verde și cel negru?",
    variante: ["Frunzele de ceai negru sunt oxidate, cele de ceai verde nu", "Provin din plante diferite", "Ceaiul negru nu are cafeină", "Ceaiul verde este îndulcit natural"],
    corect: "Frunzele de ceai negru sunt oxidate, cele de ceai verde nu",
    explicatie: "Ambele provin din aceeași plantă, Camellia sinensis. Ceaiul oolong este oxidat doar parțial, fiind între cele două."
  },
  {
    domeniu: "nutritie",
    dificultate: "greu",
    intrebare: "Ce substanță din gălbenușul de ou ține amestecate uleiul și apa în maioneză?",
    variante: ["Lecitina", "Albumina", "Cazeina", "Colagenul"],
    corect: "Lecitina",
    explicatie: "Lecitina are o parte care se leagă de apă și una care se leagă de ulei. Este folosită și ca aditiv, cu codul E322."
  },
  {
    domeniu: "nutritie",
    dificultate: "greu",
    intrebare: "Ce substanță din fructe face gemurile și dulcețurile să se lege?",
    variante: ["Pectina", "Gelatina", "Amidonul", "Lecitina"],
    corect: "Pectina",
    explicatie: "Merele și gutuile sunt foarte bogate în pectină. Gelatina, în schimb, este de origine animală."
  },

  // =======================================================
  // ASTRONOMIE (100 de întrebări)
  // =======================================================

  // ---------- ASTRONOMIE: UȘOR (20) ----------
  {
    domeniu: "astronomie",
    dificultate: "usor",
    intrebare: "Care este cea mai apropiată stea de Pământ?",
    variante: ["Soarele", "Proxima Centauri", "Sirius", "Steaua Polară"],
    corect: "Soarele",
    explicatie: "Soarele este o stea obișnuită, de mărime mijlocie. În el ar încăpea peste un milion de planete de mărimea Pământului."
  },
  {
    domeniu: "astronomie",
    dificultate: "usor",
    intrebare: "Care este cea mai mare planetă din Sistemul Solar?",
    variante: ["Jupiter", "Saturn", "Neptun", "Uranus"],
    corect: "Jupiter",
    explicatie: "Jupiter are o masă de peste două ori mai mare decât a tuturor celorlalte planete la un loc. Marea Pată Roșie de pe Jupiter este o furtună mai mare decât Pământul."
  },
  {
    domeniu: "astronomie",
    dificultate: "usor",
    intrebare: "Care planetă este numită „planeta roșie”?",
    variante: ["Marte", "Venus", "Mercur", "Jupiter"],
    corect: "Marte",
    explicatie: "Culoarea vine de la oxidul de fier, adică rugina, din praful și rocile de la suprafață. Numele planetei vine de la zeul roman al războiului."
  },
  {
    domeniu: "astronomie",
    dificultate: "usor",
    intrebare: "Care este planeta cea mai apropiată de Soare?",
    variante: ["Mercur", "Venus", "Marte", "Pământul"],
    corect: "Mercur",
    explicatie: "Mercur este și cea mai mică planetă din Sistemul Solar. Un an pe Mercur, adică un ocol complet al Soarelui, durează doar 88 de zile."
  },
  {
    domeniu: "astronomie",
    dificultate: "usor",
    intrebare: "Care planetă este cea mai cunoscută pentru inelele ei spectaculoase?",
    variante: ["Saturn", "Jupiter", "Marte", "Mercur"],
    corect: "Saturn",
    explicatie: "Și Jupiter, Uranus și Neptun au inele, dar mult mai subțiri și mai greu de văzut. Inelele lui Saturn se pot observa chiar și cu un telescop mic."
  },
  {
    domeniu: "astronomie",
    dificultate: "usor",
    intrebare: "Câte planete are Sistemul Solar?",
    variante: ["8", "7", "9", "10"],
    corect: "8",
    explicatie: "Planetele sunt, în ordine: Mercur, Venus, Pământ, Marte, Jupiter, Saturn, Uranus și Neptun. Până în 2006, Pluto era considerat a noua planetă."
  },
  {
    domeniu: "astronomie",
    dificultate: "usor",
    intrebare: "Cum se numește galaxia în care se află Sistemul Solar?",
    variante: ["Calea Lactee", "Andromeda", "Triangulum", "Norul lui Magellan"],
    corect: "Calea Lactee",
    explicatie: "Calea Lactee are sute de miliarde de stele. Soarele se află pe unul dintre brațele ei, la mare distanță de centru."
  },
  {
    domeniu: "astronomie",
    dificultate: "usor",
    intrebare: "Ce punct cardinal arată Steaua Polară?",
    variante: ["Nordul", "Sudul", "Estul", "Vestul"],
    corect: "Nordul",
    explicatie: "Steaua Polară se află aproape exact deasupra Polului Nord, așa că pare nemișcată pe cer. Celelalte stele par să se rotească în jurul ei în timpul nopții."
  },
  {
    domeniu: "astronomie",
    dificultate: "usor",
    intrebare: "Ce corp ceresc a fost „retrogradat” în 2006 la statutul de planetă pitică?",
    variante: ["Pluto", "Ceres", "Mercur", "Luna"],
    corect: "Pluto",
    explicatie: "Decizia a fost luată de Uniunea Astronomică Internațională. Pluto este mai mic decât Luna noastră și împarte zona orbitei sale cu multe alte corpuri înghețate."
  },
  {
    domeniu: "astronomie",
    dificultate: "usor",
    intrebare: "Ce este, de fapt, o „stea căzătoare”?",
    variante: ["O bucată mică de rocă sau praf care arde în atmosferă", "O stea care se stinge", "Un satelit artificial care cade", "O planetă care trece prin fața Soarelui"],
    corect: "O bucată mică de rocă sau praf care arde în atmosferă",
    explicatie: "Denumirea corectă este meteor. Majoritatea acestor fragmente sunt cât un bob de nisip și ard complet la zeci de kilometri înălțime."
  },
  {
    domeniu: "astronomie",
    dificultate: "usor",
    intrebare: "În ce fază nu se vede Luna pe cer?",
    variante: ["Luna nouă", "Luna plină", "Primul pătrar", "Ultimul pătrar"],
    corect: "Luna nouă",
    explicatie: "La Luna nouă, Luna se află între Pământ și Soare, iar partea ei luminată este întoarsă spre Soare. Partea dinspre noi rămâne în întuneric."
  },
  {
    domeniu: "astronomie",
    dificultate: "usor",
    intrebare: "Ce planetă este numită popular „Luceafărul”, ca în poemul lui Mihai Eminescu?",
    variante: ["Venus", "Marte", "Jupiter", "Saturn"],
    corect: "Venus",
    explicatie: "Venus este cel mai strălucitor corp de pe cerul nopții, după Lună. Se vede dimineața înainte de răsărit sau seara după apus, de unde vin numele „Luceafărul de dimineață” și „Luceafărul de seară”."
  },
  {
    domeniu: "astronomie",
    dificultate: "usor",
    intrebare: "Din ce constelație face parte grupul de stele numit „Carul Mare”?",
    variante: ["Ursa Mare", "Ursa Mică", "Orion", "Casiopeea"],
    corect: "Ursa Mare",
    explicatie: "Dacă prelungești de aproximativ cinci ori linia dintre cele două stele din spatele „carului”, ajungi la Steaua Polară."
  },
  {
    domeniu: "astronomie",
    dificultate: "usor",
    intrebare: "Ce corp ceresc format din gheață și praf face o coadă luminoasă când se apropie de Soare?",
    variante: ["Cometa", "Asteroidul", "Meteoritul", "Satelitul natural"],
    corect: "Cometa",
    explicatie: "Căldura Soarelui transformă gheața în gaz, care formează coada. Coada este împinsă de vântul solar, așa că este întoarsă mereu în partea opusă Soarelui."
  },
  {
    domeniu: "astronomie",
    dificultate: "usor",
    intrebare: "Cum se numea câinele trimis pe orbită de Uniunea Sovietică în 1957, primul animal care a înconjurat Pământul?",
    variante: ["Laika", "Belka", "Strelka", "Rex"],
    corect: "Laika",
    explicatie: "Laika a zburat la bordul Sputnik 2, dar nu a supraviețuit misiunii. Belka și Strelka au zburat în 1960 și s-au întors vii pe Pământ."
  },
  {
    domeniu: "astronomie",
    dificultate: "usor",
    intrebare: "Ce se întâmplă în timpul unei eclipse de Soare?",
    variante: ["Luna trece prin fața Soarelui și îl acoperă", "Pământul trece între Soare și Lună", "Soarele se stinge pentru câteva minute", "Un nor de praf cosmic acoperă Soarele"],
    corect: "Luna trece prin fața Soarelui și îl acoperă",
    explicatie: "Ultima eclipsă totală de Soare vizibilă din România a avut loc pe 11 august 1999. Atunci, în plină zi, s-a făcut întuneric pentru mai puțin de trei minute."
  },
  {
    domeniu: "astronomie",
    dificultate: "usor",
    intrebare: "Cât îi ia Pământului să facă un ocol complet în jurul Soarelui?",
    variante: ["Aproximativ un an (365 de zile)", "O zi", "O lună", "Zece ani"],
    corect: "Aproximativ un an (365 de zile)",
    explicatie: "Pământul parcurge acest drum cu aproximativ 30 de kilometri pe secundă, adică peste 100.000 km/h."
  },
  {
    domeniu: "astronomie",
    dificultate: "usor",
    intrebare: "Ce astronom polonez a susținut, în secolul al XVI-lea, că Pământul se învârte în jurul Soarelui?",
    variante: ["Nicolaus Copernic", "Galileo Galilei", "Isaac Newton", "Ptolemeu"],
    corect: "Nicolaus Copernic",
    explicatie: "Cartea lui despre sistemul heliocentric a apărut în 1543, chiar în anul morții sale. Până atunci, majoritatea oamenilor credeau că Pământul stă nemișcat în centrul Universului."
  },
  {
    domeniu: "astronomie",
    dificultate: "usor",
    intrebare: "Ce agenție a Statelor Unite a organizat misiunile Apollo spre Lună?",
    variante: ["NASA", "ESA", "Roscosmos", "JAXA"],
    corect: "NASA",
    explicatie: "NASA a fost înființată în 1958, în plină „cursă spațială” cu Uniunea Sovietică. ESA este agenția spațială europeană, iar JAXA este cea japoneză."
  },
  {
    domeniu: "astronomie",
    dificultate: "usor",
    intrebare: "Ce provoacă alternanța dintre zi și noapte?",
    variante: ["Rotația Pământului în jurul axei sale", "Mișcarea Pământului în jurul Soarelui", "Rotația Lunii în jurul Pământului", "Faptul că Soarele se aprinde și se stinge"],
    corect: "Rotația Pământului în jurul axei sale",
    explicatie: "Pământul face o rotație completă în aproximativ 24 de ore. La Ecuator, suprafața lui se deplasează cu peste 1.600 km/h."
  },

  // ---------- ASTRONOMIE: MEDIU (48) ----------
  {
    domeniu: "astronomie",
    dificultate: "mediu",
    intrebare: "Care este cea mai fierbinte planetă din Sistemul Solar?",
    variante: ["Venus", "Mercur", "Marte", "Jupiter"],
    corect: "Venus",
    explicatie: "Deși Mercur este mai aproape de Soare, Venus are o atmosferă foarte groasă de dioxid de carbon, care reține căldura. La suprafață sunt peste 450 °C, destul cât să topească plumbul."
  },
  {
    domeniu: "astronomie",
    dificultate: "mediu",
    intrebare: "În cât timp ajunge lumina Soarelui până la Pământ?",
    variante: ["Aproximativ 8 minute", "Aproximativ 8 secunde", "Aproximativ 8 ore", "Instantaneu"],
    corect: "Aproximativ 8 minute",
    explicatie: "Asta înseamnă că vedem mereu Soarele așa cum era acum opt minute. Lumina de la Lună ajunge la noi în puțin peste o secundă."
  },
  {
    domeniu: "astronomie",
    dificultate: "mediu",
    intrebare: "Ce provoacă anotimpurile pe Pământ?",
    variante: ["Înclinarea axei Pământului", "Distanța variabilă dintre Pământ și Soare", "Schimbările de strălucire ale Soarelui", "Poziția Lunii"],
    corect: "Înclinarea axei Pământului",
    explicatie: "Axa Pământului este înclinată cu aproximativ 23,5 grade. De aceea, când în emisfera nordică este vară, în cea sudică este iarnă."
  },
  {
    domeniu: "astronomie",
    dificultate: "mediu",
    intrebare: "Ce măsoară un „an-lumină”?",
    variante: ["O distanță", "O perioadă de timp", "Strălucirea unei stele", "Viteza unei planete"],
    corect: "O distanță",
    explicatie: "Un an-lumină este distanța parcursă de lumină într-un an, adică aproximativ 9.500 de miliarde de kilometri."
  },
  {
    domeniu: "astronomie",
    dificultate: "mediu",
    intrebare: "Pe ce planetă se află Olympus Mons, cel mai înalt vulcan cunoscut din Sistemul Solar?",
    variante: ["Marte", "Venus", "Pământul", "Mercur"],
    corect: "Marte",
    explicatie: "Olympus Mons are peste 20 de kilometri înălțime, adică de mai mult de două ori înălțimea Everestului. Baza lui acoperă o suprafață mai mare decât a României."
  },
  {
    domeniu: "astronomie",
    dificultate: "mediu",
    intrebare: "Care este cel mai mare satelit natural din Sistemul Solar?",
    variante: ["Ganymede, satelitul lui Jupiter", "Titan, satelitul lui Saturn", "Luna, satelitul Pământului", "Triton, satelitul lui Neptun"],
    corect: "Ganymede, satelitul lui Jupiter",
    explicatie: "Ganymede este mai mare chiar decât planeta Mercur. Este singurul satelit cunoscut care are propriul câmp magnetic."
  },
  {
    domeniu: "astronomie",
    dificultate: "mediu",
    intrebare: "Care satelit al lui Saturn are o atmosferă densă și lacuri de metan lichid?",
    variante: ["Titan", "Europa", "Io", "Ganymede"],
    corect: "Titan",
    explicatie: "În 2005, sonda europeană Huygens a coborât pe Titan. A fost prima aterizare pe un corp ceresc din Sistemul Solar exterior."
  },
  {
    domeniu: "astronomie",
    dificultate: "mediu",
    intrebare: "Ce astronom a descoperit, în 1610, cei mai mari patru sateliți ai lui Jupiter?",
    variante: ["Galileo Galilei", "Johannes Kepler", "Nicolaus Copernic", "Tycho Brahe"],
    corect: "Galileo Galilei",
    explicatie: "Io, Europa, Ganymede și Callisto sunt numiți și „sateliții galileeni”. Descoperirea lor a arătat că nu toate corpurile cerești se rotesc în jurul Pământului."
  },
  {
    domeniu: "astronomie",
    dificultate: "mediu",
    intrebare: "Ce formă au orbitele planetelor, potrivit primei legi a lui Kepler?",
    variante: ["Elipsă", "Cerc perfect", "Spirală", "Pătrat cu colțuri rotunjite"],
    corect: "Elipsă",
    explicatie: "Kepler a ajuns la această concluzie la începutul secolului al XVII-lea, folosind observațiile foarte precise ale lui Tycho Brahe. Orbita Pământului este însă aproape circulară."
  },
  {
    domeniu: "astronomie",
    dificultate: "mediu",
    intrebare: "Ce telescop spațial, lansat în 1990, a făcut unele dintre cele mai cunoscute fotografii ale Universului?",
    variante: ["Hubble", "James Webb", "Kepler", "Spitzer"],
    corect: "Hubble",
    explicatie: "La început, oglinda lui Hubble avea un mic defect, iar imaginile erau neclare. În 1993, astronauții l-au reparat chiar pe orbită."
  },
  {
    domeniu: "astronomie",
    dificultate: "mediu",
    intrebare: "Ce telescop spațial, lansat în decembrie 2021, observă Universul mai ales în infraroșu?",
    variante: ["James Webb", "Hubble", "Kepler", "Chandra"],
    corect: "James Webb",
    explicatie: "Telescopul James Webb se află la aproximativ 1,5 milioane de kilometri de Pământ. Oglinda lui are peste 6 metri și este formată din 18 segmente aurite."
  },
  {
    domeniu: "astronomie",
    dificultate: "mediu",
    intrebare: "Ce vârstă estimează astronomii pentru Univers?",
    variante: ["Aproximativ 13,8 miliarde de ani", "Aproximativ 4,6 miliarde de ani", "Aproximativ 100 de miliarde de ani", "Aproximativ 6.000 de ani"],
    corect: "Aproximativ 13,8 miliarde de ani",
    explicatie: "Sistemul Solar s-a format mult mai târziu, acum aproximativ 4,6 miliarde de ani. Dacă toată istoria Universului ar fi comprimată într-un an, oamenii ar apărea abia în ultimele minute din 31 decembrie."
  },
  {
    domeniu: "astronomie",
    dificultate: "mediu",
    intrebare: "Care este cea mai strălucitoare stea de pe cerul nopții?",
    variante: ["Sirius", "Steaua Polară", "Vega", "Betelgeuse"],
    corect: "Sirius",
    explicatie: "Sirius se află în constelația Câinele Mare și este la doar 8,6 ani-lumină de noi. Steaua Polară, deși foarte cunoscută, nu se numără printre cele mai strălucitoare stele."
  },
  {
    domeniu: "astronomie",
    dificultate: "mediu",
    intrebare: "Care este cea mai apropiată galaxie spirală mare de Calea Lactee?",
    variante: ["Andromeda", "Triangulum", "Galaxia Vârtej", "Galaxia Sombrero"],
    corect: "Andromeda",
    explicatie: "Andromeda se află la aproximativ 2,5 milioane de ani-lumină. Pe un cer foarte întunecat, se poate vedea chiar cu ochiul liber, ca o pată ceţoasă."
  },
  {
    domeniu: "astronomie",
    dificultate: "mediu",
    intrebare: "Cum se numește explozia uriașă de la sfârșitul vieții unor stele masive?",
    variante: ["Supernovă", "Pulsar", "Quasar", "Nebuloasă planetară"],
    corect: "Supernovă",
    explicatie: "În anul 1054, astronomii chinezi au văzut o supernovă strălucind ziua, timp de câteva săptămâni. Rămășița ei este Nebuloasa Crabului."
  },
  {
    domeniu: "astronomie",
    dificultate: "mediu",
    intrebare: "Între ce planete se află centura principală de asteroizi?",
    variante: ["Între Marte și Jupiter", "Între Pământ și Marte", "Între Jupiter și Saturn", "Între Venus și Pământ"],
    corect: "Între Marte și Jupiter",
    explicatie: "Deși în filme asteroizii apar înghesuiți, în realitate sunt la distanțe uriașe unii de alții. Toți la un loc au mai puțină masă decât Luna."
  },
  {
    domeniu: "astronomie",
    dificultate: "mediu",
    intrebare: "Ce cometă celebră revine în apropierea Soarelui cam o dată la 76 de ani?",
    variante: ["Cometa Halley", "Cometa Hale-Bopp", "Cometa Shoemaker-Levy 9", "Cometa Encke"],
    corect: "Cometa Halley",
    explicatie: "Ultima ei vizită a fost în 1986, iar următoarea va fi în 2061. Scriitorul Mark Twain s-a născut și a murit în anii în care a apărut cometa Halley."
  },
  {
    domeniu: "astronomie",
    dificultate: "mediu",
    intrebare: "Ce planetă se rotește aproape „culcată” pe o parte, cu axa înclinată cu aproape 98 de grade?",
    variante: ["Uranus", "Neptun", "Saturn", "Marte"],
    corect: "Uranus",
    explicatie: "Din cauza acestei înclinări, la polii lui Uranus sunt aproximativ 42 de ani de zi, urmați de 42 de ani de noapte. Se crede că planeta a fost lovită, în trecut, de un corp foarte mare."
  },
  {
    domeniu: "astronomie",
    dificultate: "mediu",
    intrebare: "Ce se întâmplă în timpul unei eclipse de Lună?",
    variante: ["Pământul trece între Soare și Lună, iar umbra lui acoperă Luna", "Luna trece între Pământ și Soare", "Luna intră în umbra lui Jupiter", "Soarele trece prin spatele Lunii"],
    corect: "Pământul trece între Soare și Lună, iar umbra lui acoperă Luna",
    explicatie: "În timpul eclipsei totale, Luna devine roșiatică. Lumina roșie ajunge la ea după ce trece prin atmosfera Pământului, care o curbează."
  },
  {
    domeniu: "astronomie",
    dificultate: "mediu",
    intrebare: "De ce vedem mereu aceeași față a Lunii?",
    variante: ["Luna se rotește în jurul axei sale exact în timpul în care înconjoară Pământul", "Luna nu se rotește deloc", "Cealaltă față este mereu în umbră", "Pământul se rotește la fel de repede ca Luna"],
    corect: "Luna se rotește în jurul axei sale exact în timpul în care înconjoară Pământul",
    explicatie: "Fenomenul se numește rotație sincronă. Fața ascunsă a Lunii a fost fotografiată prima dată în 1959, de sonda sovietică Luna 3."
  },
  {
    domeniu: "astronomie",
    dificultate: "mediu",
    intrebare: "Câți astronauți au pășit pe Lună în cadrul programului Apollo?",
    variante: ["12", "2", "6", "24"],
    corect: "12",
    explicatie: "Au fost șase aselenizări reușite, între 1969 și 1972, câte doi astronauți de fiecare dată. Misiunea Apollo 13 a trebuit să renunțe la aselenizare după explozia unui rezervor de oxigen."
  },
  {
    domeniu: "astronomie",
    dificultate: "mediu",
    intrebare: "La ce altitudine aproximativă orbitează Stația Spațială Internațională?",
    variante: ["Aproximativ 400 km", "Aproximativ 40 km", "Aproximativ 4.000 km", "Aproximativ 36.000 km"],
    corect: "Aproximativ 400 km",
    explicatie: "Stația este locuită permanent din anul 2000. Se poate vedea cu ochiul liber, ca un punct luminos care traversează cerul în câteva minute."
  },
  {
    domeniu: "astronomie",
    dificultate: "mediu",
    intrebare: "Aproximativ în cât timp face Stația Spațială Internațională un ocol complet al Pământului?",
    variante: ["Aproximativ 90 de minute", "Aproximativ 24 de ore", "Aproximativ 12 ore", "Aproximativ o săptămână"],
    corect: "Aproximativ 90 de minute",
    explicatie: "Stația zboară cu aproximativ 28.000 km/h. Astronauții de la bord văd astfel cam 16 răsărituri și 16 apusuri în fiecare zi."
  },
  {
    domeniu: "astronomie",
    dificultate: "mediu",
    intrebare: "Care este distanța medie dintre Pământ și Lună?",
    variante: ["Aproximativ 384.000 km", "Aproximativ 38.000 km", "Aproximativ 3,8 milioane km", "Aproximativ 150 de milioane km"],
    corect: "Aproximativ 384.000 km",
    explicatie: "Între Pământ și Lună ar încăpea, una lângă alta, toate celelalte planete ale Sistemului Solar. Astronauții Apollo au ajuns pe Lună în aproximativ trei zile."
  },
  {
    domeniu: "astronomie",
    dificultate: "mediu",
    intrebare: "Ce distanță, de aproximativ 150 de milioane de kilometri, folosesc astronomii ca unitate de măsură în Sistemul Solar?",
    variante: ["Distanța medie dintre Pământ și Soare", "Distanța dintre Pământ și Lună", "Diametrul Soarelui", "Distanța dintre Soare și Jupiter"],
    corect: "Distanța medie dintre Pământ și Soare",
    explicatie: "Această distanță se numește unitate astronomică (UA). Neptun, de exemplu, se află la aproximativ 30 UA de Soare."
  },
  {
    domeniu: "astronomie",
    dificultate: "mediu",
    intrebare: "Din ce este format în principal Soarele?",
    variante: ["Hidrogen și heliu", "Fier și nichel", "Oxigen și azot", "Rocă topită"],
    corect: "Hidrogen și heliu",
    explicatie: "Aproximativ trei sferturi din masa Soarelui sunt hidrogen. Soarele conține peste 99% din toată masa Sistemului Solar."
  },
  {
    domeniu: "astronomie",
    dificultate: "mediu",
    intrebare: "Ce proces produce energia Soarelui?",
    variante: ["Fuziunea nucleară", "Fisiunea nucleară", "Arderea cu oxigen", "Reacțiile cu apa"],
    corect: "Fuziunea nucleară",
    explicatie: "În centrul Soarelui, la aproximativ 15 milioane de grade, nucleele de hidrogen se unesc și formează heliu. În fiecare secundă, Soarele transformă în energie aproximativ 4 milioane de tone de materie."
  },
  {
    domeniu: "astronomie",
    dificultate: "mediu",
    intrebare: "Ce produce aurora boreală?",
    variante: ["Particulele trimise de Soare, care lovesc atmosfera lângă poli", "Lumina Lunii reflectată de gheață", "Fulgerele din norii înalți", "Reflexia luminii orașelor"],
    corect: "Particulele trimise de Soare, care lovesc atmosfera lângă poli",
    explicatie: "Câmpul magnetic al Pământului dirijează aceste particule spre zonele polare. În mai 2024, în timpul unei furtuni solare puternice, aurora a putut fi văzută și din România."
  },
  {
    domeniu: "astronomie",
    dificultate: "mediu",
    intrebare: "Ce satelit al lui Jupiter ascunde, probabil, un ocean de apă sărată sub o crustă de gheață?",
    variante: ["Europa", "Io", "Titan", "Callisto"],
    corect: "Europa",
    explicatie: "Europa este unul dintre cele mai promițătoare locuri pentru căutarea vieții în afara Pământului. Sonda Europa Clipper a fost lansată spre ea în 2024."
  },
  {
    domeniu: "astronomie",
    dificultate: "mediu",
    intrebare: "Cum se numește o planetă care orbitează în jurul altei stele decât Soarele?",
    variante: ["Exoplanetă", "Planetă pitică", "Protostea", "Asteroid"],
    corect: "Exoplanetă",
    explicatie: "Prima exoplanetă în jurul unei stele asemănătoare Soarelui a fost descoperită în 1995, iar descoperitorii au primit Premiul Nobel în 2019. Astăzi sunt cunoscute peste 5.000."
  },
  {
    domeniu: "astronomie",
    dificultate: "mediu",
    intrebare: "În ce constelație se află Steaua Polară?",
    variante: ["Ursa Mică", "Ursa Mare", "Casiopeea", "Dragonul"],
    corect: "Ursa Mică",
    explicatie: "Steaua Polară este la capătul „oiștii” Carului Mic. Din cauza unei mișcări lente a axei Pământului, peste aproximativ 12.000 de ani rolul de stea polară îl va avea steaua Vega."
  },
  {
    domeniu: "astronomie",
    dificultate: "mediu",
    intrebare: "Ce culoare au cele mai fierbinți stele?",
    variante: ["Albastră", "Roșie", "Portocalie", "Galbenă"],
    corect: "Albastră",
    explicatie: "Stelele roșii sunt cele mai reci, cu temperaturi de aproximativ 3.000 °C la suprafață. Cele albastre pot depăși 20.000 °C."
  },
  {
    domeniu: "astronomie",
    dificultate: "mediu",
    intrebare: "Ce astronom american a arătat, în anii 1920, că galaxiile se îndepărtează de noi și că Universul se extinde?",
    variante: ["Edwin Hubble", "Carl Sagan", "Albert Einstein", "Johannes Kepler"],
    corect: "Edwin Hubble",
    explicatie: "Preotul și astronomul belgian Georges Lemaître ajunsese la aceeași idee cu doi ani înainte. De aceea, legea se numește astăzi legea Hubble-Lemaître."
  },
  {
    domeniu: "astronomie",
    dificultate: "mediu",
    intrebare: "Cum se numește cea mai apropiată stea de Sistemul Solar, după Soare?",
    variante: ["Proxima Centauri", "Sirius", "Vega", "Betelgeuse"],
    corect: "Proxima Centauri",
    explicatie: "Proxima Centauri se află la aproximativ 4,2 ani-lumină. Este o stea mică și roșie, prea slabă ca să fie văzută cu ochiul liber."
  },
  {
    domeniu: "astronomie",
    dificultate: "mediu",
    intrebare: "De câte ori, aproximativ, este gravitația pe Lună mai slabă decât pe Pământ?",
    variante: ["De 6 ori", "De 2 ori", "De 20 de ori", "De 100 de ori"],
    corect: "De 6 ori",
    explicatie: "De aceea, astronauții Apollo se deplasau sărind. Un om care cântărește 60 kg pe Pământ s-ar simți pe Lună ca și cum ar avea 10 kg."
  },
  {
    domeniu: "astronomie",
    dificultate: "mediu",
    intrebare: "Care dintre aceste planete nu are niciun satelit natural?",
    variante: ["Mercur", "Marte", "Neptun", "Uranus"],
    corect: "Mercur",
    explicatie: "Mercur și Venus sunt singurele planete fără sateliți. Celelalte planete au de la unul, cum este Pământul, până la zeci sau chiar sute."
  },
  {
    domeniu: "astronomie",
    dificultate: "mediu",
    intrebare: "Cum se numesc cei doi sateliți ai lui Marte?",
    variante: ["Phobos și Deimos", "Io și Europa", "Titan și Rhea", "Triton și Nereida"],
    corect: "Phobos și Deimos",
    explicatie: "Numele înseamnă „Frica” și „Groaza”, fiii zeului războiului în mitologia greacă. Phobos se apropie încet de Marte și, peste zeci de milioane de ani, se va dezintegra."
  },
  {
    domeniu: "astronomie",
    dificultate: "mediu",
    intrebare: "Ce planetă are densitatea mai mică decât a apei, așa că, teoretic, ar pluti într-un ocean destul de mare?",
    variante: ["Saturn", "Jupiter", "Neptun", "Marte"],
    corect: "Saturn",
    explicatie: "Saturn este format mai ales din hidrogen și heliu. Deși are de 95 de ori masa Pământului, este cea mai puțin densă planetă."
  },
  {
    domeniu: "astronomie",
    dificultate: "mediu",
    intrebare: "Cum se numesc cele două momente ale anului în care ziua și noaptea au aproape aceeași durată peste tot pe Pământ?",
    variante: ["Echinocții", "Solstiții", "Eclipse", "Conjuncții"],
    corect: "Echinocții",
    explicatie: "Echinocțiul de primăvară are loc în jurul datei de 20 martie, iar cel de toamnă în jurul datei de 22-23 septembrie. Solstițiile marchează cea mai lungă și cea mai scurtă zi."
  },
  {
    domeniu: "astronomie",
    dificultate: "mediu",
    intrebare: "De ce avem, o dată la patru ani, un an bisect, cu 29 februarie?",
    variante: ["Pentru că Pământul înconjoară Soarele în aproximativ 365 de zile și un sfert", "Pentru că o lună lunară are 29 de zile", "Pentru că axa Pământului se mișcă la fiecare patru ani", "Din motive religioase, fără legătură cu astronomia"],
    corect: "Pentru că Pământul înconjoară Soarele în aproximativ 365 de zile și un sfert",
    explicatie: "Pentru că sfertul de zi nu e chiar exact, calendarul gregorian sare peste trei ani bisecți la fiecare 400 de ani: 1900 nu a fost bisect, dar 2000 a fost. România a trecut la acest calendar în 1919."
  },
  {
    domeniu: "astronomie",
    dificultate: "mediu",
    intrebare: "Unde se află craterul lăsat de asteroidul legat de dispariția dinozaurilor, acum 66 de milioane de ani?",
    variante: ["În Peninsula Yucatán, în Mexic", "În Siberia", "În deșertul Sahara", "În Australia"],
    corect: "În Peninsula Yucatán, în Mexic",
    explicatie: "Craterul se numește Chicxulub și are aproximativ 180 de kilometri lățime. Asteroidul avea, probabil, în jur de 10 kilometri."
  },
  {
    domeniu: "astronomie",
    dificultate: "mediu",
    intrebare: "Cum se numește o rocă venită din spațiu care ajunge până la suprafața Pământului?",
    variante: ["Meteorit", "Meteor", "Cometă", "Nebuloasă"],
    corect: "Meteorit",
    explicatie: "Cel mai mare meteorit găsit întreg este Hoba, din Namibia, care cântărește aproximativ 60 de tone. Nu a fost mutat niciodată din locul în care a căzut."
  },
  {
    domeniu: "astronomie",
    dificultate: "mediu",
    intrebare: "Ce ploaie de stele căzătoare poate fi văzută în fiecare an la mijlocul lui august?",
    variante: ["Perseidele", "Leonidele", "Geminidele", "Lyridele"],
    corect: "Perseidele",
    explicatie: "Perseidele apar când Pământul trece prin praful lăsat de cometa Swift-Tuttle. Numele vine de la constelația Perseu, din care par să pornească."
  },
  {
    domeniu: "astronomie",
    dificultate: "mediu",
    intrebare: "Ce este o nebuloasă?",
    variante: ["Un nor uriaș de gaz și praf din spațiu", "O stea care a explodat de curând", "O galaxie foarte mică", "Un tip de cometă"],
    corect: "Un nor uriaș de gaz și praf din spațiu",
    explicatie: "În multe nebuloase se nasc stele noi. Nebuloasa din Orion se poate vedea cu ochiul liber, ca o pată ceţoasă sub „Centura” lui Orion."
  },
  {
    domeniu: "astronomie",
    dificultate: "mediu",
    intrebare: "Ce nume popular românesc poartă Calea Lactee?",
    variante: ["Calea Robilor", "Drumul Mătăsii", "Cărarea Zânelor", "Brâul Ciobanului"],
    corect: "Calea Robilor",
    explicatie: "Numele „Calea Lactee” vine din mitologia greacă: se spunea că dâra de pe cer este laptele vărsat de zeița Hera."
  },
  {
    domeniu: "astronomie",
    dificultate: "mediu",
    intrebare: "Din ce sunt formate în principal inelele lui Saturn?",
    variante: ["Din bucăți de gheață, cu puțină rocă", "Din gaze colorate", "Din lavă solidificată", "Din praf de fier"],
    corect: "Din bucăți de gheață, cu puțină rocă",
    explicatie: "Bucățile au mărimi de la grăuncioare până la blocuri cât o casă. Deși inelele se întind pe sute de mii de kilometri, în multe locuri au doar câteva zeci de metri grosime."
  },
  {
    domeniu: "astronomie",
    dificultate: "mediu",
    intrebare: "Ce sondă spațială, lansată în 1977, este cel mai îndepărtat obiect construit de om?",
    variante: ["Voyager 1", "Pioneer 10", "New Horizons", "Pioneer 11"],
    corect: "Voyager 1",
    explicatie: "Voyager 1 a ieșit din zona de influență a Soarelui în 2012. Are la bord un disc aurit cu sunete și imagini de pe Pământ, inclusiv salutări în zeci de limbi."
  },
  {
    domeniu: "astronomie",
    dificultate: "mediu",
    intrebare: "Ce planetă are cea mai scurtă zi din Sistemul Solar, de aproximativ 10 ore?",
    variante: ["Jupiter", "Mercur", "Venus", "Marte"],
    corect: "Jupiter",
    explicatie: "Jupiter se rotește atât de repede încât este vizibil turtit la poli. O zi pe Marte durează aproape la fel ca pe Pământ, aproximativ 24 de ore și 40 de minute."
  },

  // ---------- ASTRONOMIE: GREU (32) ----------
  {
    domeniu: "astronomie",
    dificultate: "greu",
    intrebare: "Pe ce planetă o zi (o rotație completă) durează mai mult decât un an?",
    variante: ["Venus", "Mercur", "Marte", "Neptun"],
    corect: "Venus",
    explicatie: "Venus se rotește în jurul axei în 243 de zile pământești, dar înconjoară Soarele în doar 225. În plus, se rotește invers, așa că acolo Soarele ar răsări la vest."
  },
  {
    domeniu: "astronomie",
    dificultate: "greu",
    intrebare: "Ce planetă a fost descoperită în 1846 pe baza calculelor matematice, înainte de a fi văzută prin telescop?",
    variante: ["Neptun", "Uranus", "Saturn", "Pluto"],
    corect: "Neptun",
    explicatie: "Matematicianul francez Urbain Le Verrier a calculat unde ar trebui să fie, pornind de la abaterile din orbita lui Uranus. Astronomul Johann Galle a găsit-o în aceeași noapte în care a primit calculele."
  },
  {
    domeniu: "astronomie",
    dificultate: "greu",
    intrebare: "Cine a descoperit planeta Uranus, în 1781?",
    variante: ["William Herschel", "Edmond Halley", "Isaac Newton", "Galileo Galilei"],
    corect: "William Herschel",
    explicatie: "A fost prima planetă descoperită cu telescopul. Herschel a vrut să o numească „Steaua lui George”, după regele Marii Britanii."
  },
  {
    domeniu: "astronomie",
    dificultate: "greu",
    intrebare: "Cum se numea modulul lunar care a aselenizat în misiunea Apollo 11?",
    variante: ["Eagle", "Columbia", "Falcon", "Odyssey"],
    corect: "Eagle",
    explicatie: "Columbia era modulul de comandă, care a rămas pe orbită cu Michael Collins. Mesajul „The Eagle has landed” („Vulturul a aterizat”) a anunțat aselenizarea."
  },
  {
    domeniu: "astronomie",
    dificultate: "greu",
    intrebare: "Ce misiune Apollo a fost ultima care a dus oameni pe Lună, în decembrie 1972?",
    variante: ["Apollo 17", "Apollo 13", "Apollo 15", "Apollo 20"],
    corect: "Apollo 17",
    explicatie: "Comandantul Eugene Cernan a fost ultimul om care a pășit pe Lună. Misiunile Apollo 18, 19 și 20 au fost anulate."
  },
  {
    domeniu: "astronomie",
    dificultate: "greu",
    intrebare: "La ce altitudine se află un satelit geostaționar, care pare nemișcat deasupra aceluiași punct de pe Ecuator?",
    variante: ["Aproximativ 36.000 km", "Aproximativ 400 km", "Aproximativ 2.000 km", "Aproximativ 384.000 km"],
    corect: "Aproximativ 36.000 km",
    explicatie: "La această altitudine, satelitul face un ocol al Pământului exact în timpul unei rotații a planetei. De aceea, antenele de televiziune prin satelit pot sta fixe."
  },
  {
    domeniu: "astronomie",
    dificultate: "greu",
    intrebare: "Ce element chimic a fost descoperit mai întâi în lumina Soarelui, înainte de a fi găsit pe Pământ?",
    variante: ["Heliul", "Neonul", "Argonul", "Hidrogenul"],
    corect: "Heliul",
    explicatie: "Heliul a fost observat în 1868, în spectrul Soarelui din timpul unei eclipse. Numele vine de la Helios, zeul grec al Soarelui."
  },
  {
    domeniu: "astronomie",
    dificultate: "greu",
    intrebare: "Aproximativ la câți ani se repetă ciclul de activitate al Soarelui, cu mai multe sau mai puține pete solare?",
    variante: ["11 ani", "1 an", "50 de ani", "100 de ani"],
    corect: "11 ani",
    explicatie: "La fiecare ciclu, câmpul magnetic al Soarelui își inversează polii. În anii cu activitate maximă, furtunile solare și aurorele sunt mai frecvente."
  },
  {
    domeniu: "astronomie",
    dificultate: "greu",
    intrebare: "Prin ce constelație, care nu face parte din zodiac, trece totuși Soarele în fiecare an, la sfârșitul lui noiembrie?",
    variante: ["Ofiucus (Purtătorul de Șarpe)", "Orion", "Pegas", "Hercule"],
    corect: "Ofiucus (Purtătorul de Șarpe)",
    explicatie: "Granițele oficiale ale constelațiilor au fost stabilite abia în secolul XX. Astfel, Soarele trece prin 13 constelații, nu doar prin cele 12 ale zodiacului."
  },
  {
    domeniu: "astronomie",
    dificultate: "greu",
    intrebare: "Ce roi de stele este numit popular, în românește, „Găinușa” sau „Cloșca cu pui”?",
    variante: ["Pleiadele", "Hiadele", "Centura lui Orion", "Carul Mic"],
    corect: "Pleiadele",
    explicatie: "Cu ochiul liber se văd de obicei șase-șapte stele, de aceea grecii le numeau „Cele Șapte Surori”. În japoneză, Pleiadele se numesc Subaru, iar logo-ul mărcii auto le înfățișează."
  },
  {
    domeniu: "astronomie",
    dificultate: "greu",
    intrebare: "Ce pionier al zborului spațial, născut la Sibiu în 1894, este considerat unul dintre părinții rachetelor moderne?",
    variante: ["Hermann Oberth", "Wernher von Braun", "Konstantin Țiolkovski", "Robert Goddard"],
    corect: "Hermann Oberth",
    explicatie: "Cartea lui din 1923 despre rachetele spre spațiu a inspirat o generație de ingineri. Tânărul Wernher von Braun l-a ajutat la experimente, iar mai târziu a condus construcția rachetei care a dus oamenii pe Lună."
  },
  {
    domeniu: "astronomie",
    dificultate: "greu",
    intrebare: "Ce artificier din Sibiu a descris, în secolul al XVI-lea, rachete cu mai multe trepte, cu mult înaintea erei spațiale?",
    variante: ["Conrad Haas", "Hermann Oberth", "Johannes Honterus", "Samuel von Brukenthal"],
    corect: "Conrad Haas",
    explicatie: "Manuscrisul lui a fost redescoperit în 1961, în arhivele din Sibiu. Ideea rachetei în trepte stă și astăzi la baza lansărilor spațiale."
  },
  {
    domeniu: "astronomie",
    dificultate: "greu",
    intrebare: "Ce matematician român, cunoscut mai ales ca ministru al învățământului, și-a susținut doctoratul la Paris în 1878 cu o lucrare despre stabilitatea orbitelor planetelor?",
    variante: ["Spiru Haret", "Gheorghe Țițeica", "Dimitrie Pompeiu", "Traian Lalescu"],
    corect: "Spiru Haret",
    explicatie: "A fost primul român care a obținut un doctorat în matematică la Paris. Un crater de pe Lună îi poartă numele."
  },
  {
    domeniu: "astronomie",
    dificultate: "greu",
    intrebare: "Cum se numea micul elicopter care a realizat, în 2021, primul zbor motorizat pe o altă planetă?",
    variante: ["Ingenuity", "Perseverance", "Curiosity", "Sojourner"],
    corect: "Ingenuity",
    explicatie: "Ingenuity a zburat pe Marte de 72 de ori, deși fusese gândit doar pentru cinci zboruri. Avea la bord o bucățică din pânza avionului cu care frații Wright au zburat în 1903."
  },
  {
    domeniu: "astronomie",
    dificultate: "greu",
    intrebare: "Ce sondă spațială a trecut pe lângă Pluto în 2015, trimițând primele imagini detaliate ale acestuia?",
    variante: ["New Horizons", "Voyager 2", "Cassini", "Juno"],
    corect: "New Horizons",
    explicatie: "Imaginile au arătat pe Pluto o câmpie uriașă de gheață în formă de inimă. Sonda transportă și o parte din cenușa lui Clyde Tombaugh, cel care a descoperit Pluto în 1930."
  },
  {
    domeniu: "astronomie",
    dificultate: "greu",
    intrebare: "Ce satelit al lui Saturn aruncă în spațiu jeturi de apă prin crăpăturile din crusta de gheață?",
    variante: ["Enceladus", "Titan", "Mimas", "Iapetus"],
    corect: "Enceladus",
    explicatie: "Jeturile au fost descoperite în 2005 de sonda Cassini, care chiar a zburat prin ele. Ele arată că sub gheață există un ocean de apă lichidă."
  },
  {
    domeniu: "astronomie",
    dificultate: "greu",
    intrebare: "Cum se numește norul imens de corpuri înghețate, aflat la marginea Sistemului Solar, din care se crede că provin cometele cu perioadă lungă?",
    variante: ["Norul lui Oort", "Centura de asteroizi", "Nebuloasa Crabului", "Inelul lui Saturn"],
    corect: "Norul lui Oort",
    explicatie: "Norul lui Oort nu a fost observat direct, existența lui fiind dedusă din orbitele cometelor. S-ar putea întinde la peste un an-lumină de Soare."
  },
  {
    domeniu: "astronomie",
    dificultate: "greu",
    intrebare: "Ce va deveni Soarele la sfârșitul vieții, după faza de gigantă roșie?",
    variante: ["O pitică albă", "O gaură neagră", "O stea neutronică", "O supernovă"],
    corect: "O pitică albă",
    explicatie: "Soarele nu are destulă masă ca să explodeze sau să devină gaură neagră. Peste aproximativ 5 miliarde de ani, se va umfla ca gigantă roșie, apoi va rămâne un nucleu mic și fierbinte, cam cât Pământul."
  },
  {
    domeniu: "astronomie",
    dificultate: "greu",
    intrebare: "Ce studentă a descoperit în 1967 pulsarii, stele care trimit semnale radio extrem de regulate?",
    variante: ["Jocelyn Bell Burnell", "Vera Rubin", "Henrietta Leavitt", "Cecilia Payne"],
    corect: "Jocelyn Bell Burnell",
    explicatie: "Semnalele erau atât de regulate încât primul pulsar a fost poreclit în glumă „LGM-1”, de la „Little Green Men” („omuleți verzi”). Premiul Nobel pentru descoperire l-a primit însă conducătorul ei, în 1974."
  },
  {
    domeniu: "astronomie",
    dificultate: "greu",
    intrebare: "Ce stea supergigantă roșie din constelația Orion și-a pierdut brusc din strălucire în 2019-2020, stârnind discuții despre o posibilă explozie?",
    variante: ["Betelgeuse", "Rigel", "Sirius", "Aldebaran"],
    corect: "Betelgeuse",
    explicatie: "Scăderea strălucirii a fost provocată, probabil, de un nor de praf eliminat de stea. Betelgeuse va exploda ca supernovă, dar, cel mai probabil, abia peste zeci de mii de ani."
  },
  {
    domeniu: "astronomie",
    dificultate: "greu",
    intrebare: "Ce au descoperit întâmplător, în 1965, Arno Penzias și Robert Wilson?",
    variante: ["Radiația rămasă de la Big Bang", "Prima exoplanetă", "Prima gaură neagră", "Inelele lui Uranus"],
    corect: "Radiația rămasă de la Big Bang",
    explicatie: "La început, cei doi au crezut că zgomotul din antenă vine de la porumbeii care se cuibăriseră în ea. Descoperirea le-a adus Premiul Nobel pentru Fizică în 1978."
  },
  {
    domeniu: "astronomie",
    dificultate: "greu",
    intrebare: "Ce astronom grec a propus, cu aproape 1.800 de ani înaintea lui Copernic, că Pământul se învârte în jurul Soarelui?",
    variante: ["Aristarh din Samos", "Ptolemeu", "Aristotel", "Hiparh"],
    corect: "Aristarh din Samos",
    explicatie: "Ideea lui Aristarh a fost respinsă în Antichitate. Modelul lui Ptolemeu, cu Pământul în centru, a fost acceptat timp de peste 1.400 de ani."
  },
  {
    domeniu: "astronomie",
    dificultate: "greu",
    intrebare: "În ce lună a anului este Pământul cel mai aproape de Soare?",
    variante: ["Ianuarie", "Iulie", "Martie", "Septembrie"],
    corect: "Ianuarie",
    explicatie: "La începutul lui ianuarie, Pământul este cu aproximativ 5 milioane de kilometri mai aproape de Soare decât la începutul lui iulie. Asta arată că anotimpurile nu depind de distanța față de Soare."
  },
  {
    domeniu: "astronomie",
    dificultate: "greu",
    intrebare: "Ce explicație este cea mai acceptată pentru formarea Lunii?",
    variante: ["Ciocnirea Pământului tânăr cu un corp cam de mărimea lui Marte", "Captarea unui asteroid trecător", "Formarea Lunii în același timp cu Soarele", "Desprinderea unei bucăți din Pământ din cauza rotației foarte rapide"],
    corect: "Ciocnirea Pământului tânăr cu un corp cam de mărimea lui Marte",
    explicatie: "Corpul ipotetic a fost numit Theia. Rocile aduse de misiunile Apollo seamănă foarte mult cu cele de pe Pământ, ceea ce susține această teorie."
  },
  {
    domeniu: "astronomie",
    dificultate: "greu",
    intrebare: "Ce eveniment din 1908 a doborât zeci de milioane de copaci în Siberia, probabil din cauza exploziei unui asteroid sau a unei comete în aer?",
    variante: ["Evenimentul Tunguska", "Evenimentul Celiabinsk", "Impactul Chicxulub", "Craterul Barringer"],
    corect: "Evenimentul Tunguska",
    explicatie: "Explozia a culcat la pământ pădurea pe aproximativ 2.000 de kilometri pătrați. Pentru că zona era aproape nelocuită, nu există victime confirmate."
  },
  {
    domeniu: "astronomie",
    dificultate: "greu",
    intrebare: "Câte constelații recunoaște oficial Uniunea Astronomică Internațională?",
    variante: ["88", "12", "48", "110"],
    corect: "88",
    explicatie: "Granițele lor au fost stabilite oficial în secolul XX. Astronomul antic Ptolemeu descrisese 48 de constelații, iar multe dintre ele se folosesc și astăzi."
  },
  {
    domeniu: "astronomie",
    dificultate: "greu",
    intrebare: "Cine a făcut, în 1965, prima ieșire a unui om în spațiul deschis?",
    variante: ["Alexei Leonov", "Iuri Gagarin", "Ed White", "Gherman Titov"],
    corect: "Alexei Leonov",
    explicatie: "Leonov a stat în afara navei aproximativ 12 minute. Costumul i s-a umflat atât de tare încât a trebuit să scoată din aer ca să poată intra înapoi."
  },
  {
    domeniu: "astronomie",
    dificultate: "greu",
    intrebare: "Din ce an este România membru cu drepturi depline al Agenției Spațiale Europene (ESA)?",
    variante: ["2011", "2004", "2007", "2019"],
    corect: "2011",
    explicatie: "România a devenit al 19-lea stat membru al ESA. Agenția Spațială Română (ROSA) coordonează participarea țării la programele spațiale europene."
  },
  {
    domeniu: "astronomie",
    dificultate: "greu",
    intrebare: "Cum se numește granița în jurul unei găuri negre, de dincolo de care nimic, nici măcar lumina, nu mai poate ieși?",
    variante: ["Orizontul evenimentelor", "Heliopauza", "Limita Roche", "Centura Kuiper"],
    corect: "Orizontul evenimentelor",
    explicatie: "Pentru un observator îndepărtat, un obiect care se apropie de orizontul evenimentelor pare să încetinească și să se oprească, înroșindu-se treptat."
  },
  {
    domeniu: "astronomie",
    dificultate: "greu",
    intrebare: "Din ce galaxie face parte gaura neagră din prima fotografie a unei găuri negre, publicată în 2019?",
    variante: ["Galaxia M87", "Calea Lactee", "Galaxia Andromeda", "Norul Mare al lui Magellan"],
    corect: "Galaxia M87",
    explicatie: "Imaginea a fost obținută de Event Horizon Telescope, o rețea de radiotelescoape din toată lumea care lucrează ca un singur telescop de mărimea Pământului."
  },
  {
    domeniu: "astronomie",
    dificultate: "greu",
    intrebare: "Pe ce planetă bat cele mai puternice vânturi măsurate în Sistemul Solar, de peste 2.000 km/h?",
    variante: ["Neptun", "Jupiter", "Saturn", "Venus"],
    corect: "Neptun",
    explicatie: "Este surprinzător, pentru că Neptun primește foarte puțină energie de la Soare. Planeta are și o sursă internă de căldură, care alimentează aceste vânturi."
  },
  {
    domeniu: "astronomie",
    dificultate: "greu",
    intrebare: "Cu cât se îndepărtează Luna de Pământ în fiecare an?",
    variante: ["Aproximativ 3,8 centimetri", "Aproximativ 3,8 metri", "Aproximativ 3,8 kilometri", "Nu se îndepărtează deloc"],
    corect: "Aproximativ 3,8 centimetri",
    explicatie: "Distanța se măsoară cu raze laser trimise spre oglinzile lăsate pe Lună de astronauții Apollo. Îndepărtarea este provocată de maree."
  },

  // =======================================================
  // FIZICĂ (100 de întrebări)
  // =======================================================

  // ---------- FIZICĂ: UȘOR (20) ----------
  {
    domeniu: "fizica",
    dificultate: "usor",
    intrebare: "În ce unitate de măsură se exprimă forța?",
    variante: ["Newton", "Joule", "Watt", "Pascal"],
    corect: "Newton",
    explicatie: "Un newton este cam forța cu care apasă pe palmă un măr mic, de 100 de grame. Unitatea poartă numele lui Isaac Newton."
  },
  {
    domeniu: "fizica",
    dificultate: "usor",
    intrebare: "Ce savant englez a formulat legea atracției universale, inspirat, după propria poveste, de căderea unui măr?",
    variante: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Michael Faraday"],
    corect: "Isaac Newton",
    explicatie: "Newton a spus el însuși povestea mărului, la bătrânețe. Legea a apărut în 1687, în cartea „Principia”, una dintre cele mai importante lucrări din istoria științei."
  },
  {
    domeniu: "fizica",
    dificultate: "usor",
    intrebare: "Ce om de știință a formulat celebra relație E = mc²?",
    variante: ["Albert Einstein", "Isaac Newton", "Max Planck", "Niels Bohr"],
    corect: "Albert Einstein",
    explicatie: "Formula arată că masa se poate transforma în energie, iar o cantitate foarte mică de masă înseamnă enorm de multă energie. Einstein a publicat-o în 1905, la 26 de ani."
  },
  {
    domeniu: "fizica",
    dificultate: "usor",
    intrebare: "La ce temperatură fierbe apa la nivelul mării?",
    variante: ["100 °C", "90 °C", "80 °C", "120 °C"],
    corect: "100 °C",
    explicatie: "Scara Celsius a fost construită chiar pe baza apei: 0 °C este punctul de înghețare, iar 100 °C cel de fierbere."
  },
  {
    domeniu: "fizica",
    dificultate: "usor",
    intrebare: "Ce particulă din atom are sarcină electrică negativă?",
    variante: ["Electronul", "Protonul", "Neutronul", "Nucleul"],
    corect: "Electronul",
    explicatie: "Electronul a fost descoperit în 1897 de fizicianul englez J. J. Thomson. Curentul electric din fire este, de fapt, o mișcare de electroni."
  },
  {
    domeniu: "fizica",
    dificultate: "usor",
    intrebare: "Ce fenomen apare când lumina Soarelui trece prin picăturile de ploaie?",
    variante: ["Curcubeul", "Aurora", "Fulgerul", "Mirajul"],
    corect: "Curcubeul",
    explicatie: "Picăturile descompun lumina albă în culorile din care este formată. Ca să vezi curcubeul, trebuie să ai Soarele în spate."
  },
  {
    domeniu: "fizica",
    dificultate: "usor",
    intrebare: "Ce aparat transformă energia electrică în mișcare?",
    variante: ["Motorul electric", "Generatorul", "Bateria", "Transformatorul"],
    corect: "Motorul electric",
    explicatie: "Generatorul face invers: transformă mișcarea în energie electrică. De fapt, multe motoare electrice pot funcționa și ca generatoare, cum se întâmplă la frânarea mașinilor electrice."
  },
  {
    domeniu: "fizica",
    dificultate: "usor",
    intrebare: "În ce unitate de măsură se exprimă intensitatea curentului electric?",
    variante: ["Amper", "Volt", "Ohm", "Watt"],
    corect: "Amper",
    explicatie: "Unitatea poartă numele fizicianului francez André-Marie Ampère. Tensiunea se măsoară în volți, iar rezistența electrică în ohmi."
  },
  {
    domeniu: "fizica",
    dificultate: "usor",
    intrebare: "Ce instrument măsoară presiunea atmosferică?",
    variante: ["Barometrul", "Termometrul", "Higrometrul", "Anemometrul"],
    corect: "Barometrul",
    explicatie: "Când presiunea scade, de obicei urmează vreme rea. Higrometrul măsoară umiditatea aerului, iar anemometrul viteza vântului."
  },
  {
    domeniu: "fizica",
    dificultate: "usor",
    intrebare: "Ce se întâmplă când apropii doi poli nord a doi magneți?",
    variante: ["Se resping", "Se atrag", "Se demagnetizează", "Nu se întâmplă nimic"],
    corect: "Se resping",
    explicatie: "Polii de același fel se resping, iar cei diferiți se atrag. Pământul însuși se comportă ca un magnet uriaș."
  },
  {
    domeniu: "fizica",
    dificultate: "usor",
    intrebare: "Ce metal este lichid la temperatura camerei?",
    variante: ["Mercurul", "Plumbul", "Staniul", "Aluminiul"],
    corect: "Mercurul",
    explicatie: "Mercurul îngheață abia la aproximativ −39 °C. Pentru că vaporii lui sunt toxici, termometrele cu mercur pentru uz casnic sunt interzise în Uniunea Europeană."
  },
  {
    domeniu: "fizica",
    dificultate: "usor",
    intrebare: "Cum se numește energia pe care o are un corp aflat în mișcare?",
    variante: ["Energie cinetică", "Energie potențială", "Energie nucleară", "Energie chimică"],
    corect: "Energie cinetică",
    explicatie: "Energia cinetică crește cu pătratul vitezei: o mașină care merge de două ori mai repede are de patru ori mai multă energie. De aceea, distanța de frânare crește foarte mult cu viteza."
  },
  {
    domeniu: "fizica",
    dificultate: "usor",
    intrebare: "Prin ce mediu NU se poate propaga sunetul?",
    variante: ["Prin vid", "Prin aer", "Prin apă", "Prin oțel"],
    corect: "Prin vid",
    explicatie: "Sunetul are nevoie de materie care să vibreze. În spațiu, exploziile din filmele științifico-fantastice ar fi, de fapt, complet silențioase."
  },
  {
    domeniu: "fizica",
    dificultate: "usor",
    intrebare: "De ce plutește gheața pe apă?",
    variante: ["Pentru că este mai puțin densă decât apa lichidă", "Pentru că este mai rece", "Pentru că are aer în ea", "Pentru că apa o împinge în sus doar iarna"],
    corect: "Pentru că este mai puțin densă decât apa lichidă",
    explicatie: "Când îngheață, apa își mărește volumul cu aproximativ 9%. De aceea, cam 90% dintr-un aisberg stă ascuns sub apă."
  },
  {
    domeniu: "fizica",
    dificultate: "usor",
    intrebare: "Ce transformă panourile solare fotovoltaice?",
    variante: ["Lumina în curent electric", "Căldura în lumină", "Vântul în curent electric", "Curentul electric în căldură"],
    corect: "Lumina în curent electric",
    explicatie: "Fenomenul se numește efect fotovoltaic și a fost observat pentru prima dată în 1839. Panourile solare termice sunt diferite: ele încălzesc apa."
  },
  {
    domeniu: "fizica",
    dificultate: "usor",
    intrebare: "Ce inventator american a pus la punct, în 1879, un bec cu incandescență durabil și ușor de produs?",
    variante: ["Thomas Edison", "Nikola Tesla", "Alexander Graham Bell", "Benjamin Franklin"],
    corect: "Thomas Edison",
    explicatie: "Edison și echipa lui au testat mii de materiale pentru filament. A deținut peste 1.000 de brevete, între care și fonograful."
  },
  {
    domeniu: "fizica",
    dificultate: "usor",
    intrebare: "Ce fizician italian a construit, în 1800, prima baterie electrică?",
    variante: ["Alessandro Volta", "Galileo Galilei", "Guglielmo Marconi", "Enrico Fermi"],
    corect: "Alessandro Volta",
    explicatie: "Bateria lui Volta era o coloană de discuri de zinc și cupru, separate de bucăți de pânză înmuiate în apă sărată. Unitatea tensiunii electrice, voltul, îi poartă numele."
  },
  {
    domeniu: "fizica",
    dificultate: "usor",
    intrebare: "În ce unitate de măsură se exprimă energia?",
    variante: ["Joule", "Watt", "Newton", "Volt"],
    corect: "Joule",
    explicatie: "Unitatea poartă numele fizicianului englez James Prescott Joule. O kilocalorie, folosită pentru alimente, înseamnă aproximativ 4.200 de jouli."
  },
  {
    domeniu: "fizica",
    dificultate: "usor",
    intrebare: "Ce savant grec ar fi strigat „Evrika!” („Am găsit!”) în timp ce se afla în baie?",
    variante: ["Arhimede", "Pitagora", "Euclid", "Aristotel"],
    corect: "Arhimede",
    explicatie: "Potrivit legendei, Arhimede trebuia să afle dacă o coroană era din aur curat. A observat că apa din cadă urcă atunci când intră în ea și a înțeles cum se poate măsura volumul unui obiect neregulat."
  },
  {
    domeniu: "fizica",
    dificultate: "usor",
    intrebare: "În ce unitate de măsură se exprimă puterea unui aparat electric, precum un bec sau un fierbător?",
    variante: ["Watt", "Volt", "Amper", "Ohm"],
    corect: "Watt",
    explicatie: "Un fierbător electric are de obicei peste 2.000 de wați, în timp ce un bec LED are doar câțiva wați. Kilowatt-ora, de pe factura de curent, arată energia consumată."
  },

  // ---------- FIZICĂ: MEDIU (48) ----------
  {
    domeniu: "fizica",
    dificultate: "mediu",
    intrebare: "Cu ce viteză aproximativă se propagă lumina în vid?",
    variante: ["300.000 km/s", "300 km/s", "3.000 km/s", "30 de milioane km/s"],
    corect: "300.000 km/s",
    explicatie: "Într-o singură secundă, lumina ar putea înconjura Pământul de aproximativ 7,5 ori. Nimic din Univers nu se poate deplasa mai repede."
  },
  {
    domeniu: "fizica",
    dificultate: "mediu",
    intrebare: "Care este viteza aproximativă a sunetului în aer, la temperatura camerei?",
    variante: ["Aproximativ 340 m/s", "Aproximativ 34 m/s", "Aproximativ 3.400 m/s", "Aproximativ 300.000 km/s"],
    corect: "Aproximativ 340 m/s",
    explicatie: "Asta înseamnă cam 1.200 km/h. În apă, sunetul merge de peste patru ori mai repede decât în aer."
  },
  {
    domeniu: "fizica",
    dificultate: "mediu",
    intrebare: "Ce lege leagă tensiunea, intensitatea curentului și rezistența electrică?",
    variante: ["Legea lui Ohm", "Legea lui Coulomb", "Legea lui Hooke", "Legea lui Boyle"],
    corect: "Legea lui Ohm",
    explicatie: "Legea a fost publicată în 1827 de fizicianul german Georg Ohm. Pe scurt: tensiunea este egală cu rezistența înmulțită cu intensitatea."
  },
  {
    domeniu: "fizica",
    dificultate: "mediu",
    intrebare: "Ce principiu spune că un corp își păstrează starea de repaus sau de mișcare uniformă dacă nicio forță nu îl obligă să și-o schimbe?",
    variante: ["Principiul inerției", "Principiul acțiunii și reacțiunii", "Principiul lui Arhimede", "Principiul lui Pascal"],
    corect: "Principiul inerției",
    explicatie: "Este prima lege a lui Newton. Din cauza inerției, la o frână bruscă pasagerii sunt aruncați în față, iar centura de siguranță îi oprește."
  },
  {
    domeniu: "fizica",
    dificultate: "mediu",
    intrebare: "Ce spune principiul lui Arhimede despre un corp scufundat într-un lichid?",
    variante: ["Este împins în sus cu o forță egală cu greutatea lichidului dezlocuit", "Devine mai ușor cu jumătate din greutatea lui", "Se scufundă întotdeauna dacă este din metal", "Este tras în jos de presiunea apei"],
    corect: "Este împins în sus cu o forță egală cu greutatea lichidului dezlocuit",
    explicatie: "De aceea, un vapor uriaș din oțel plutește: forma lui dezlocuiește o cantitate foarte mare de apă. Același principiu explică și de ce urcă baloanele cu aer cald."
  },
  {
    domeniu: "fizica",
    dificultate: "mediu",
    intrebare: "Care este valoarea aproximativă a accelerației gravitaționale la suprafața Pământului?",
    variante: ["9,8 m/s²", "1 m/s²", "98 m/s²", "0,98 m/s²"],
    corect: "9,8 m/s²",
    explicatie: "Un corp care cade liber, fără frecarea aerului, își mărește viteza cu aproximativ 35 km/h în fiecare secundă."
  },
  {
    domeniu: "fizica",
    dificultate: "mediu",
    intrebare: "Cât este zero absolut, cea mai joasă temperatură posibilă?",
    variante: ["−273,15 °C", "−100 °C", "−459,67 °C", "−1.000 °C"],
    corect: "−273,15 °C",
    explicatie: "Zero absolut corespunde valorii de 0 pe scara Kelvin. Oamenii de știință s-au apropiat foarte mult de el în laborator, dar nu l-au atins niciodată."
  },
  {
    domeniu: "fizica",
    dificultate: "mediu",
    intrebare: "Ce culoare din curcubeu are cea mai mare lungime de undă?",
    variante: ["Roșu", "Violet", "Verde", "Albastru"],
    corect: "Roșu",
    explicatie: "Violetul are cea mai mică lungime de undă dintre culorile vizibile. Dincolo de roșu se află radiația infraroșie, pe care o simțim ca pe căldură."
  },
  {
    domeniu: "fizica",
    dificultate: "mediu",
    intrebare: "De ce este cerul albastru în timpul zilei?",
    variante: ["Aerul împrăștie mai mult lumina albastră decât pe cea roșie", "Cerul reflectă culoarea oceanelor", "Atmosfera conține un gaz albastru", "Soarele emite mai ales lumină albastră"],
    corect: "Aerul împrăștie mai mult lumina albastră decât pe cea roșie",
    explicatie: "Fenomenul se numește împrăștiere Rayleigh. La apus, lumina străbate mai mult aer, albastrul se pierde pe drum, iar cerul devine roșiatic."
  },
  {
    domeniu: "fizica",
    dificultate: "mediu",
    intrebare: "Ce fenomen face ca o linguriță pusă într-un pahar cu apă să pară ruptă?",
    variante: ["Refracția luminii", "Reflexia luminii", "Difracția luminii", "Absorbția luminii"],
    corect: "Refracția luminii",
    explicatie: "Lumina își schimbă direcția când trece din apă în aer, pentru că în cele două medii are viteze diferite. Tot din cauza refracției, fundul unei piscine pare mai aproape decât este."
  },
  {
    domeniu: "fizica",
    dificultate: "mediu",
    intrebare: "Cum se numesc sunetele cu frecvență prea mare ca să poată fi auzite de om?",
    variante: ["Ultrasunete", "Infrasunete", "Microunde", "Radiații gama"],
    corect: "Ultrasunete",
    explicatie: "Liliecii și delfinii se orientează cu ajutorul ultrasunetelor, iar medicii le folosesc la ecografii. Sunetele prea joase pentru urechea noastră se numesc infrasunete."
  },
  {
    domeniu: "fizica",
    dificultate: "mediu",
    intrebare: "Ce măsoară unitatea hertz (Hz)?",
    variante: ["Frecvența, adică numărul de oscilații pe secundă", "Puterea unui aparat", "Tensiunea electrică", "Intensitatea luminii"],
    corect: "Frecvența, adică numărul de oscilații pe secundă",
    explicatie: "Unitatea poartă numele fizicianului german Heinrich Hertz, care a dovedit existența undelor radio. Curentul din prizele din România are 50 Hz."
  },
  {
    domeniu: "fizica",
    dificultate: "mediu",
    intrebare: "Ce se încălzește, în principal, în mâncare, într-un cuptor cu microunde?",
    variante: ["Moleculele de apă", "Aerul din cuptor", "Farfuria", "Sarea"],
    corect: "Moleculele de apă",
    explicatie: "Încălzirea cu microunde a fost descoperită întâmplător, în anii 1940, de un inginer american căruia i s-a topit o ciocolată din buzunar în timp ce lucra lângă un radar."
  },
  {
    domeniu: "fizica",
    dificultate: "mediu",
    intrebare: "Ce fizician german a descoperit razele X, în 1895?",
    variante: ["Wilhelm Röntgen", "Max Planck", "Heinrich Hertz", "Albert Einstein"],
    corect: "Wilhelm Röntgen",
    explicatie: "Una dintre primele radiografii arată mâna soției lui, cu verigheta pe deget. Röntgen a primit, în 1901, primul Premiu Nobel pentru Fizică."
  },
  {
    domeniu: "fizica",
    dificultate: "mediu",
    intrebare: "Cine este singura persoană care a primit Premiul Nobel în două științe diferite?",
    variante: ["Marie Curie", "Linus Pauling", "Albert Einstein", "Niels Bohr"],
    corect: "Marie Curie",
    explicatie: "Marie Curie a primit premiul pentru Fizică în 1903 și pentru Chimie în 1911. Linus Pauling a primit și el două premii, dar al doilea a fost pentru Pace."
  },
  {
    domeniu: "fizica",
    dificultate: "mediu",
    intrebare: "Ce particule se găsesc în nucleul unui atom?",
    variante: ["Protoni și neutroni", "Electroni și protoni", "Doar electroni", "Fotoni și electroni"],
    corect: "Protoni și neutroni",
    explicatie: "Nucleul conține aproape toată masa atomului, deși este de zeci de mii de ori mai mic decât atomul. Restul atomului este, în mare parte, spațiu gol."
  },
  {
    domeniu: "fizica",
    dificultate: "mediu",
    intrebare: "Ce proces produce energia în centralele nucleare de astăzi, precum cea de la Cernavodă?",
    variante: ["Fisiunea nucleară", "Fuziunea nucleară", "Arderea uraniului cu oxigen", "Descompunerea apei"],
    corect: "Fisiunea nucleară",
    explicatie: "În fisiune, nucleele grele de uraniu se rup în bucăți mai mici și eliberează energie. Centrala de la Cernavodă produce aproximativ o cincime din electricitatea României."
  },
  {
    domeniu: "fizica",
    dificultate: "mediu",
    intrebare: "Ce experiment imaginar, cu o pisică închisă într-o cutie, ilustrează ciudățeniile fizicii cuantice?",
    variante: ["Pisica lui Schrödinger", "Demonul lui Maxwell", "Paradoxul gemenilor", "Pendulul lui Foucault"],
    corect: "Pisica lui Schrödinger",
    explicatie: "Fizicianul austriac Erwin Schrödinger l-a propus în 1935, ca să arate cât de ciudat ar fi să aplici regulile lumii atomilor la obiecte obișnuite. Nicio pisică reală nu a fost folosită."
  },
  {
    domeniu: "fizica",
    dificultate: "mediu",
    intrebare: "Dacă lași să cadă în vid un ciocan și o pană, în același timp, care ajunge prima jos?",
    variante: ["Ajung în același timp", "Ciocanul", "Pana", "Pana nu cade deloc"],
    corect: "Ajung în același timp",
    explicatie: "Galileo a arătat că toate corpurile cad la fel dacă nu există aer. În 1971, astronautul David Scott a făcut exact acest experiment pe Lună, în fața camerelor de filmat."
  },
  {
    domeniu: "fizica",
    dificultate: "mediu",
    intrebare: "Ce rămâne neschimbat atunci când un astronaut ajunge pe Lună?",
    variante: ["Masa lui", "Greutatea lui", "Forța cu care apasă pe sol", "Înălțimea la care poate sări"],
    corect: "Masa lui",
    explicatie: "Masa arată câtă materie are un corp, iar greutatea este forța cu care este atras de o planetă sau de un satelit. Pe Lună, greutatea scade, dar masa rămâne aceeași."
  },
  {
    domeniu: "fizica",
    dificultate: "mediu",
    intrebare: "De ce taie mai bine un cuțit ascuțit decât unul tocit?",
    variante: ["Apasă pe o suprafață mai mică, deci presiunea este mai mare", "Are o masă mai mare", "Lama lui este mai rece", "Produce mai multă electricitate statică"],
    corect: "Apasă pe o suprafață mai mică, deci presiunea este mai mare",
    explicatie: "Presiunea este forța împărțită la suprafață. Din același motiv, schiurile și rachetele de zăpadă te împiedică să te afunzi: împart greutatea pe o suprafață mare."
  },
  {
    domeniu: "fizica",
    dificultate: "mediu",
    intrebare: "Ce unitate de măsură a presiunii poartă numele unui matematician francez?",
    variante: ["Pascalul", "Barul", "Atmosfera", "Torrul"],
    corect: "Pascalul",
    explicatie: "Blaise Pascal a studiat presiunea fluidelor în secolul al XVII-lea și a construit unul dintre primele calculatoare mecanice. Torrul poartă numele italianului Evangelista Torricelli."
  },
  {
    domeniu: "fizica",
    dificultate: "mediu",
    intrebare: "De ce fierbe apa la o temperatură mai mică pe vârful unui munte înalt?",
    variante: ["Presiunea aerului este mai mică", "Aerul este mai rece", "Este mai puțin oxigen", "Gravitația este mai slabă"],
    corect: "Presiunea aerului este mai mică",
    explicatie: "Pe Everest, apa fierbe la aproximativ 70 °C, așa că mâncarea se gătește foarte greu. Oala sub presiune face invers: ridică temperatura de fierbere la aproximativ 120 °C."
  },
  {
    domeniu: "fizica",
    dificultate: "mediu",
    intrebare: "Ce metal se folosește cel mai des în firele electrice, fiind un foarte bun conducător și relativ ieftin?",
    variante: ["Cuprul", "Aurul", "Fierul", "Plumbul"],
    corect: "Cuprul",
    explicatie: "Cel mai bun conducător de electricitate este, de fapt, argintul, dar este prea scump pentru cabluri. Aurul se folosește la unele contacte electronice, pentru că nu se oxidează."
  },
  {
    domeniu: "fizica",
    dificultate: "mediu",
    intrebare: "Ce fel de curent electric ajunge în prizele din casele noastre?",
    variante: ["Curent alternativ", "Curent continuu", "Curent static", "Curent magnetic"],
    corect: "Curent alternativ",
    explicatie: "În România, tensiunea din priză este de 230 V. La sfârșitul secolului al XIX-lea, Edison a susținut curentul continuu, iar Nikola Tesla curentul alternativ, care a câștigat „războiul curenților”."
  },
  {
    domeniu: "fizica",
    dificultate: "mediu",
    intrebare: "Ce fizician englez a descoperit, în 1831, că un magnet în mișcare poate produce curent electric într-o bobină?",
    variante: ["Michael Faraday", "James Clerk Maxwell", "Isaac Newton", "Benjamin Franklin"],
    corect: "Michael Faraday",
    explicatie: "Fenomenul se numește inducție electromagnetică și stă la baza tuturor generatoarelor din centralele electrice. Faraday era fiu de fierar și a învățat știința aproape singur."
  },
  {
    domeniu: "fizica",
    dificultate: "mediu",
    intrebare: "Ce om de știință și politician american a inventat paratrăsnetul?",
    variante: ["Benjamin Franklin", "Thomas Edison", "Nikola Tesla", "Alexander Graham Bell"],
    corect: "Benjamin Franklin",
    explicatie: "Franklin a arătat că fulgerul este o descărcare electrică, după celebrul experiment cu zmeul pe furtună. Este și unul dintre părinții fondatori ai Statelor Unite."
  },
  {
    domeniu: "fizica",
    dificultate: "mediu",
    intrebare: "La ce temperatură, aproximativ, încălzește un fulger aerul din jurul lui?",
    variante: ["Aproximativ 30.000 °C", "Aproximativ 300 °C", "Aproximativ 3.000 °C", "Aproximativ 3 milioane °C"],
    corect: "Aproximativ 30.000 °C",
    explicatie: "Este de câteva ori mai fierbinte decât suprafața Soarelui. Aerul încălzit brusc se dilată violent, iar asta produce tunetul."
  },
  {
    domeniu: "fizica",
    dificultate: "mediu",
    intrebare: "Dacă tunetul se aude la 3 secunde după fulger, cam la ce distanță a căzut fulgerul?",
    variante: ["Aproximativ 1 km", "Aproximativ 100 m", "Aproximativ 3 km", "Aproximativ 10 km"],
    corect: "Aproximativ 1 km",
    explicatie: "Lumina ajunge practic instantaneu, iar sunetul parcurge aproximativ un kilometru în trei secunde. Așa poți estima singur cât de departe e furtuna."
  },
  {
    domeniu: "fizica",
    dificultate: "mediu",
    intrebare: "Cum se numește fenomenul care face ca sirena unei ambulanțe să sune mai ascuțit când se apropie și mai grav când se îndepărtează?",
    variante: ["Efectul Doppler", "Efectul de seră", "Efectul fotoelectric", "Efectul Coandă"],
    corect: "Efectul Doppler",
    explicatie: "Fenomenul a fost descris în 1842 de austriacul Christian Doppler. Radarele poliției și astronomii folosesc același efect ca să măsoare viteze."
  },
  {
    domeniu: "fizica",
    dificultate: "mediu",
    intrebare: "Ce particulă, numită uneori „particula lui Dumnezeu”, a fost descoperită în 2012 la CERN?",
    variante: ["Bosonul Higgs", "Neutrinul", "Pozitronul", "Quarkul top"],
    corect: "Bosonul Higgs",
    explicatie: "Particula explică de ce alte particule au masă. România este stat membru cu drepturi depline al CERN din 2016."
  },
  {
    domeniu: "fizica",
    dificultate: "mediu",
    intrebare: "Ce mecanism simplu l-a făcut pe Arhimede să spună „Dați-mi un punct de sprijin și voi mișca Pământul”?",
    variante: ["Pârghia", "Scripetele", "Planul înclinat", "Roata dințată"],
    corect: "Pârghia",
    explicatie: "Cu o pârghie destul de lungă, o forță mică poate ridica o greutate foarte mare. Foarfecele, cleștele și roaba sunt toate pârghii."
  },
  {
    domeniu: "fizica",
    dificultate: "mediu",
    intrebare: "Ce principiu spune că energia nu poate fi creată sau distrusă, ci doar transformată dintr-o formă în alta?",
    variante: ["Principiul conservării energiei", "Principiul inerției", "Principiul lui Arhimede", "Legea lui Ohm"],
    corect: "Principiul conservării energiei",
    explicatie: "De aceea, un „perpetuum mobile”, o mașină care ar funcționa la nesfârșit fără energie din afară, este imposibil."
  },
  {
    domeniu: "fizica",
    dificultate: "mediu",
    intrebare: "Cum ajunge căldura Soarelui până la Pământ, prin spațiul gol?",
    variante: ["Prin radiație", "Prin conducție", "Prin convecție", "Prin evaporare"],
    corect: "Prin radiație",
    explicatie: "Conducția și convecția au nevoie de materie, dar radiația poate străbate vidul. Tot prin radiație simți căldura unui foc de tabără, chiar de la câțiva metri."
  },
  {
    domeniu: "fizica",
    dificultate: "mediu",
    intrebare: "Ce fel de lentile corectează miopia, adică vederea neclară la distanță?",
    variante: ["Lentile divergente (concave)", "Lentile convergente (convexe)", "Lentile colorate", "Lentile polarizate"],
    corect: "Lentile divergente (concave)",
    explicatie: "La ochiul miop, imaginea se formează puțin în fața retinei. Lentilele convergente se folosesc, în schimb, pentru hipermetropie."
  },
  {
    domeniu: "fizica",
    dificultate: "mediu",
    intrebare: "Ce inventator italian a realizat, în 1901, prima transmisie radio peste Oceanul Atlantic?",
    variante: ["Guglielmo Marconi", "Alessandro Volta", "Galileo Galilei", "Enrico Fermi"],
    corect: "Guglielmo Marconi",
    explicatie: "Semnalul, trimis din Anglia până pe insula Terra Nova, azi parte a Canadei, era doar litera „S” în codul Morse. Marconi a primit Premiul Nobel pentru Fizică în 1909."
  },
  {
    domeniu: "fizica",
    dificultate: "mediu",
    intrebare: "De ce plutește un om mult mai ușor în Marea Moartă decât într-un lac?",
    variante: ["Apa foarte sărată este mult mai densă", "Apa este mai caldă", "Valurile sunt mai mici", "Presiunea aerului este mai mare acolo"],
    corect: "Apa foarte sărată este mult mai densă",
    explicatie: "Marea Moartă este de aproape zece ori mai sărată decât oceanul. Un efect asemănător se simte și în lacurile sărate din România, precum Lacul Ursu de la Sovata."
  },
  {
    domeniu: "fizica",
    dificultate: "mediu",
    intrebare: "Cum se numește particula elementară a luminii?",
    variante: ["Fotonul", "Electronul", "Neutrinul", "Protonul"],
    corect: "Fotonul",
    explicatie: "Fotonul nu are masă și se deplasează mereu cu viteza luminii. Einstein a propus, în 1905, că lumina se comportă uneori ca un șir de astfel de „pachete” de energie."
  },
  {
    domeniu: "fizica",
    dificultate: "mediu",
    intrebare: "Ce proprietate a apei le permite unor insecte să meargă pe suprafața ei?",
    variante: ["Tensiunea superficială", "Densitatea mare", "Vâscozitatea", "Temperatura scăzută"],
    corect: "Tensiunea superficială",
    explicatie: "Moleculele de la suprafața apei se trag unele pe altele și formează un fel de „pieliță” elastică. Din același motiv, un ac de oțel așezat cu grijă poate pluti."
  },
  {
    domeniu: "fizica",
    dificultate: "mediu",
    intrebare: "În ce unitate de măsură se exprimă nivelul sonor, adică „cât de tare” este un sunet?",
    variante: ["Decibel", "Hertz", "Watt", "Lux"],
    corect: "Decibel",
    explicatie: "Numele vine de la Alexander Graham Bell. Scara este neobișnuită: o creștere cu 10 decibeli înseamnă un sunet de 10 ori mai intens."
  },
  {
    domeniu: "fizica",
    dificultate: "mediu",
    intrebare: "Ce fenomen optic face ca, vara, pe asfaltul încins să pară că e apă în depărtare?",
    variante: ["Mirajul", "Curcubeul", "Aurora", "Haloul"],
    corect: "Mirajul",
    explicatie: "Aerul fierbinte de lângă sol curbează razele de lumină venite din cer. „Apa” pe care o vedem este, de fapt, imaginea cerului."
  },
  {
    domeniu: "fizica",
    dificultate: "mediu",
    intrebare: "Ce aparat crește sau scade tensiunea curentului alternativ?",
    variante: ["Transformatorul", "Generatorul", "Condensatorul", "Rezistorul"],
    corect: "Transformatorul",
    explicatie: "Curentul este transportat la distanțe mari la tensiuni foarte înalte, de sute de mii de volți, ca să se piardă mai puțină energie pe drum. Transformatoarele o coboară apoi la 230 V pentru case."
  },
  {
    domeniu: "fizica",
    dificultate: "mediu",
    intrebare: "Ce fenomen fizic stă la baza ecoului?",
    variante: ["Reflexia sunetului", "Refracția sunetului", "Absorbția sunetului", "Amplificarea sunetului de către vânt"],
    corect: "Reflexia sunetului",
    explicatie: "Ca să auzi un ecou separat de sunetul inițial, obstacolul trebuie să fie la cel puțin aproximativ 17 metri."
  },
  {
    domeniu: "fizica",
    dificultate: "mediu",
    intrebare: "Din ce trei culori de bază sunt formate imaginile de pe ecranele televizoarelor și telefoanelor?",
    variante: ["Roșu, verde și albastru", "Roșu, galben și albastru", "Cyan, magenta și galben", "Alb, negru și gri"],
    corect: "Roșu, verde și albastru",
    explicatie: "Fiecare punct al ecranului are trei surse mici de lumină, roșie, verde și albastră. Combinate în proporții diferite, ele formează toate culorile, iar toate trei la maxim dau alb."
  },
  {
    domeniu: "fizica",
    dificultate: "mediu",
    intrebare: "De ce izolează bine geamurile termopan?",
    variante: ["Între foile de sticlă se află un strat de aer sau gaz, care conduce greu căldura", "Sticla dublă reflectă toată căldura înapoi", "Ramele de plastic absorb frigul", "Sticla este tratată cu metal"],
    corect: "Între foile de sticlă se află un strat de aer sau gaz, care conduce greu căldura",
    explicatie: "Gazele sunt conducători slabi de căldură. De multe ori, spațiul dintre foi este umplut cu argon, un gaz care izolează și mai bine decât aerul."
  },
  {
    domeniu: "fizica",
    dificultate: "mediu",
    intrebare: "De ce se lipește un balon de perete după ce a fost frecat de păr?",
    variante: ["Se încarcă cu electricitate statică", "Devine magnetic", "Se încălzește și devine lipicios", "Pierde aerul din el"],
    corect: "Se încarcă cu electricitate statică",
    explicatie: "Prin frecare, balonul preia electroni de la păr. Același fenomen produce mica „scânteie” pe care o simți uneori când atingi clanța după ce ai mers pe mochetă."
  },
  {
    domeniu: "fizica",
    dificultate: "mediu",
    intrebare: "Ce fel de oglindă se folosește adesea în dreapta mașinilor, arătând obiectele mai departe decât sunt în realitate?",
    variante: ["Oglinda convexă", "Oglinda concavă", "Oglinda plană", "Oglinda dublă"],
    corect: "Oglinda convexă",
    explicatie: "Oglinda convexă arată un câmp vizual mai larg, dar micșorează imaginile. De aceea, în unele țări pe ea scrie că obiectele sunt mai aproape decât par."
  },
  {
    domeniu: "fizica",
    dificultate: "mediu",
    intrebare: "Cum se numește trecerea unei substanțe direct din stare solidă în stare gazoasă, fără să devină lichidă?",
    variante: ["Sublimare", "Evaporare", "Condensare", "Topire"],
    corect: "Sublimare",
    explicatie: "Gheața carbonică, adică dioxidul de carbon înghețat, sublimează la −78 °C. Chiar și zăpada poate dispărea prin sublimare, în zilele geroase și uscate."
  },

  // ---------- FIZICĂ: GREU (32) ----------
  {
    domeniu: "fizica",
    dificultate: "greu",
    intrebare: "Ce substanță folosesc reactoarele CANDU de la Cernavodă pentru a încetini neutronii?",
    variante: ["Apa grea", "Grafitul", "Sodiul lichid", "Heliul"],
    corect: "Apa grea",
    explicatie: "Apa grea conține o formă mai grea de hidrogen, numită deuteriu. Datorită ei, reactoarele CANDU pot folosi uraniu natural, neîmbogățit, iar România a produs apă grea la Halânga, lângă Drobeta-Turnu Severin."
  },
  {
    domeniu: "fizica",
    dificultate: "greu",
    intrebare: "Pentru ce a primit Albert Einstein Premiul Nobel pentru Fizică?",
    variante: ["Pentru explicarea efectului fotoelectric", "Pentru teoria relativității", "Pentru formula E = mc²", "Pentru descoperirea găurilor negre"],
    corect: "Pentru explicarea efectului fotoelectric",
    explicatie: "Premiul a fost acordat pentru anul 1921. Teoria relativității era încă privită cu neîncredere de unii membri ai comitetului, așa că nu a fost menționată."
  },
  {
    domeniu: "fizica",
    dificultate: "greu",
    intrebare: "Ce fizician german a propus, în 1900, că energia este emisă în „pachete” mici, numite cuante, punând bazele fizicii cuantice?",
    variante: ["Max Planck", "Werner Heisenberg", "Erwin Schrödinger", "Wilhelm Röntgen"],
    corect: "Max Planck",
    explicatie: "Planck însuși a considerat la început ideea doar un truc matematic. Constanta care îi poartă numele este una dintre cele mai importante din fizică."
  },
  {
    domeniu: "fizica",
    dificultate: "greu",
    intrebare: "Ce principiu, formulat de Werner Heisenberg în 1927, spune că nu putem cunoaște simultan, cu precizie absolută, poziția și viteza unei particule?",
    variante: ["Principiul incertitudinii", "Principiul excluziunii", "Principiul complementarității", "Principiul echivalenței"],
    corect: "Principiul incertitudinii",
    explicatie: "Nu este vorba de instrumente imperfecte, ci de o proprietate a naturii însăși. Heisenberg a primit Premiul Nobel în 1932, la doar 31 de ani."
  },
  {
    domeniu: "fizica",
    dificultate: "greu",
    intrebare: "Ce experiment a arătat, în 1851, la Paris, că Pământul se rotește?",
    variante: ["Pendulul lui Foucault", "Experimentul lui Michelson", "Turnul din Pisa", "Balanța lui Cavendish"],
    corect: "Pendulul lui Foucault",
    explicatie: "Pendulul, lung de 67 de metri, a fost atârnat în Panteonul din Paris. Planul în care oscila se rotea încet, pe măsură ce Pământul se rotea sub el."
  },
  {
    domeniu: "fizica",
    dificultate: "greu",
    intrebare: "Ce fizician a descoperit nucleul atomic, în urma unui experiment în care o foiță subțire de aur era bombardată cu particule?",
    variante: ["Ernest Rutherford", "J. J. Thomson", "Niels Bohr", "James Chadwick"],
    corect: "Ernest Rutherford",
    explicatie: "Unele particule ricoșau înapoi, lucru pe care Rutherford l-a comparat cu un obuz care ar ricoșa dintr-o foaie de hârtie. Așa a înțeles că masa atomului este concentrată într-un nucleu minuscul."
  },
  {
    domeniu: "fizica",
    dificultate: "greu",
    intrebare: "Cine a descoperit neutronul, în 1932?",
    variante: ["James Chadwick", "Ernest Rutherford", "Enrico Fermi", "Niels Bohr"],
    corect: "James Chadwick",
    explicatie: "Neutronul nu are sarcină electrică, așa că a fost greu de detectat. Descoperirea a deschis calea spre fisiunea nucleară."
  },
  {
    domeniu: "fizica",
    dificultate: "greu",
    intrebare: "Ce fizician francez a descoperit radioactivitatea în 1896, observând că sărurile de uraniu înnegresc plăcile fotografice?",
    variante: ["Henri Becquerel", "Pierre Curie", "André-Marie Ampère", "Louis de Broglie"],
    corect: "Henri Becquerel",
    explicatie: "Becquerel a împărțit Premiul Nobel din 1903 cu Pierre și Marie Curie. Unitatea de măsură a radioactivității îi poartă numele."
  },
  {
    domeniu: "fizica",
    dificultate: "greu",
    intrebare: "Potrivit teoriei relativității, ce se întâmplă cu timpul pentru un obiect care se mișcă foarte repede, față de un observator aflat în repaus?",
    variante: ["Trece mai încet", "Trece mai repede", "Se oprește complet", "Nu este afectat deloc"],
    corect: "Trece mai încet",
    explicatie: "Efectul se numește dilatarea timpului. Ceasurile sateliților GPS sunt reglate ținând cont de relativitate; fără această corecție, pozițiile calculate ar greși cu kilometri în fiecare zi."
  },
  {
    domeniu: "fizica",
    dificultate: "greu",
    intrebare: "Cum se numește fenomenul prin care unele materiale, răcite foarte puternic, conduc curentul electric fără nicio rezistență?",
    variante: ["Supraconductivitate", "Semiconductivitate", "Piezoelectricitate", "Superfluiditate"],
    corect: "Supraconductivitate",
    explicatie: "Fenomenul a fost descoperit în 1911, la mercurul răcit aproape de zero absolut. Magneții supraconductori se folosesc azi în aparatele de rezonanță magnetică (RMN) din spitale."
  },
  {
    domeniu: "fizica",
    dificultate: "greu",
    intrebare: "Ce fizician scoțian a arătat, în anii 1860, că lumina este o undă electromagnetică?",
    variante: ["James Clerk Maxwell", "Michael Faraday", "Lord Kelvin", "Isaac Newton"],
    corect: "James Clerk Maxwell",
    explicatie: "Ecuațiile lui Maxwell descriu toată electricitatea și magnetismul. Einstein ținea în birou portretele lui Newton, Faraday și Maxwell."
  },
  {
    domeniu: "fizica",
    dificultate: "greu",
    intrebare: "De ce li se cere soldaților să nu mai mărșăluiască în cadență când trec peste un pod?",
    variante: ["Ca să nu intre podul în rezonanță", "Ca să nu obosească", "Ca să nu facă zgomot", "Ca să nu alunece"],
    corect: "Ca să nu intre podul în rezonanță",
    explicatie: "Pașii ritmici pot amplifica oscilațiile podului, dacă au aceeași frecvență cu a lui. În 1831, un pod suspendat de lângă Manchester s-a prăbușit sub o coloană de soldați care mărșăluiau."
  },
  {
    domeniu: "fizica",
    dificultate: "greu",
    intrebare: "Ce fenomen permite luminii să rămână prinsă în fibrele optice, chiar și când acestea sunt curbate?",
    variante: ["Reflexia totală internă", "Difracția", "Polarizarea", "Interferența"],
    corect: "Reflexia totală internă",
    explicatie: "Lumina ricoșează de pereții interiori ai fibrei, fără să iasă din ea. Prin fibre optice trece azi cea mai mare parte a traficului de internet dintre continente."
  },
  {
    domeniu: "fizica",
    dificultate: "greu",
    intrebare: "Ce mare centru de cercetare cu lasere de mare putere funcționează la Măgurele, lângă București?",
    variante: ["ELI-NP", "CERN", "ITER", "Fermilab"],
    corect: "ELI-NP",
    explicatie: "ELI-NP face parte dintr-un proiect european și are un sistem laser de 10 petawați, printre cele mai puternice din lume. CERN se află la Geneva, iar ITER este construit în Franța."
  },
  {
    domeniu: "fizica",
    dificultate: "greu",
    intrebare: "Ce fizician român a calculat, în anii 1911-1913, momentul magnetic al electronului, cunoscut azi și ca „magnetonul Bohr-Procopiu”?",
    variante: ["Ștefan Procopiu", "Horia Hulubei", "Alexandru Proca", "Dragomir Hurmuzescu"],
    corect: "Ștefan Procopiu",
    explicatie: "Procopiu a lucrat la Universitatea din Iași. A descoperit și un fenomen optic legat de lumina polarizată, numit „efectul Procopiu”."
  },
  {
    domeniu: "fizica",
    dificultate: "greu",
    intrebare: "Ecuațiile Proca, folosite în fizica particulelor, poartă numele cărui fizician român?",
    variante: ["Alexandru Proca", "Ștefan Procopiu", "Horia Hulubei", "Șerban Țițeica"],
    corect: "Alexandru Proca",
    explicatie: "Alexandru Proca s-a născut la București, în 1897, și a lucrat mare parte din viață în Franța. Ecuațiile lui, publicate în 1936, descriu particule care seamănă cu fotonul, dar au masă."
  },
  {
    domeniu: "fizica",
    dificultate: "greu",
    intrebare: "Numele cărui fizician român îl poartă Institutul Național de Fizică și Inginerie Nucleară de la Măgurele?",
    variante: ["Horia Hulubei", "Ștefan Procopiu", "Alexandru Proca", "Dragomir Hurmuzescu"],
    corect: "Horia Hulubei",
    explicatie: "Hulubei a lucrat la Paris alături de Jean Perrin, laureat al Premiului Nobel. După întoarcerea în țară, a pus bazele cercetării în fizica atomică de la Măgurele."
  },
  {
    domeniu: "fizica",
    dificultate: "greu",
    intrebare: "Ce lege spune că alungirea unui resort este proporțională cu forța care îl întinde?",
    variante: ["Legea lui Hooke", "Legea lui Ohm", "Legea lui Coulomb", "Legea lui Boyle"],
    corect: "Legea lui Hooke",
    explicatie: "Robert Hooke a publicat legea în 1678. Pe ea se bazează cântarele cu arc și dinamometrele."
  },
  {
    domeniu: "fizica",
    dificultate: "greu",
    intrebare: "Ce afirmă, pe scurt, al doilea principiu al termodinamicii?",
    variante: ["Căldura trece de la sine doar de la corpul mai cald la cel mai rece", "Energia totală se conservă", "Orice corp tinde să ajungă în repaus", "Presiunea unui gaz crește cu volumul"],
    corect: "Căldura trece de la sine doar de la corpul mai cald la cel mai rece",
    explicatie: "De aceea, frigiderul are nevoie de energie ca să scoată căldura din interior. Principiul explică și de ce nicio mașină termică nu poate transforma toată căldura în lucru mecanic."
  },
  {
    domeniu: "fizica",
    dificultate: "greu",
    intrebare: "Ce fizician italian a inventat barometrul cu mercur, în 1643?",
    variante: ["Evangelista Torricelli", "Galileo Galilei", "Alessandro Volta", "Blaise Pascal"],
    corect: "Evangelista Torricelli",
    explicatie: "Torricelli a lucrat alături de Galileo în ultimele luni din viața acestuia. A observat că aerul apasă pe mercurul dintr-un vas și menține în tub o coloană de aproximativ 760 de milimetri."
  },
  {
    domeniu: "fizica",
    dificultate: "greu",
    intrebare: "Ce fizician italian a condus construirea primului reactor nuclear, în 1942, la Chicago?",
    variante: ["Enrico Fermi", "Guglielmo Marconi", "Alessandro Volta", "Evangelista Torricelli"],
    corect: "Enrico Fermi",
    explicatie: "Reactorul a fost construit sub tribunele unui stadion universitar. Fermi primise Premiul Nobel în 1938 și emigrase apoi în Statele Unite."
  },
  {
    domeniu: "fizica",
    dificultate: "greu",
    intrebare: "Ce viteză trebuie să atingă un obiect ca să scape definitiv de atracția Pământului, fără alt impuls?",
    variante: ["Aproximativ 11,2 km/s", "Aproximativ 1,1 km/s", "Aproximativ 112 km/s", "Aproximativ 300.000 km/s"],
    corect: "Aproximativ 11,2 km/s",
    explicatie: "Asta înseamnă peste 40.000 km/h. Pentru a rămâne doar pe o orbită joasă în jurul Pământului ajung aproximativ 7,9 km/s."
  },
  {
    domeniu: "fizica",
    dificultate: "greu",
    intrebare: "De ce plutesc astronauții în Stația Spațială Internațională?",
    variante: ["Stația și astronauții cad continuu în jurul Pământului", "La acea altitudine nu mai există gravitație", "Stația are un sistem care anulează gravitația", "Aerul din stație îi susține"],
    corect: "Stația și astronauții cad continuu în jurul Pământului",
    explicatie: "La altitudinea stației, gravitația este încă aproximativ 90% din cea de la sol. Stația se mișcă însă atât de repede încât, în timp ce cade, ratează mereu Pământul."
  },
  {
    domeniu: "fizica",
    dificultate: "greu",
    intrebare: "Ce au detectat pentru prima dată, în 2015, observatoarele LIGO din Statele Unite?",
    variante: ["Unde gravitaționale", "Bosonul Higgs", "Materia întunecată", "Prima exoplanetă"],
    corect: "Unde gravitaționale",
    explicatie: "Undele proveneau din ciocnirea a două găuri negre, la peste un miliard de ani-lumină. Einstein le prezisese cu aproape 100 de ani înainte, iar descoperirea a primit Premiul Nobel în 2017."
  },
  {
    domeniu: "fizica",
    dificultate: "greu",
    intrebare: "Ce particulă este „perechea” de antimaterie a electronului, având sarcină pozitivă?",
    variante: ["Pozitronul", "Protonul", "Neutronul", "Fotonul"],
    corect: "Pozitronul",
    explicatie: "Pozitronul a fost prezis de Paul Dirac în 1928 și descoperit în 1932. Spitalele îl folosesc astăzi la investigațiile de tip PET."
  },
  {
    domeniu: "fizica",
    dificultate: "greu",
    intrebare: "Din câte quarkuri este format un proton?",
    variante: ["Trei", "Unul", "Doi", "Șase"],
    corect: "Trei",
    explicatie: "Protonul are două quarkuri „up” și unul „down”. Numele „quark” a fost luat de fizicianul Murray Gell-Mann dintr-un roman de James Joyce."
  },
  {
    domeniu: "fizica",
    dificultate: "greu",
    intrebare: "Cum arăta, la început, scara de temperatură propusă de Anders Celsius în 1742?",
    variante: ["Era inversată: 0 la fierberea apei și 100 la înghețare", "Avea doar 10 grade", "Pornea de la temperatura corpului uman", "Era identică cu cea de azi"],
    corect: "Era inversată: 0 la fierberea apei și 100 la înghețare",
    explicatie: "Scara a fost întoarsă în forma de azi la scurt timp după moartea lui Celsius. Kelvin a pornit, mai târziu, de la zero absolut."
  },
  {
    domeniu: "fizica",
    dificultate: "greu",
    intrebare: "La ce temperatură arată aceeași valoare un termometru Celsius și unul Fahrenheit?",
    variante: ["−40 de grade", "0 grade", "32 de grade", "100 de grade"],
    corect: "−40 de grade",
    explicatie: "Pe scara Fahrenheit, apa îngheață la 32 de grade și fierbe la 212. Scara este folosită încă în Statele Unite."
  },
  {
    domeniu: "fizica",
    dificultate: "greu",
    intrebare: "De ce sunt oamenii destul de protejați de fulgere în interiorul unei mașini cu caroserie metalică?",
    variante: ["Caroseria metalică conduce curentul pe exterior, spre pământ", "Cauciucurile izolează mașina de pământ", "Geamurile resping fulgerul", "Motorul absoarbe energia fulgerului"],
    corect: "Caroseria metalică conduce curentul pe exterior, spre pământ",
    explicatie: "Este principiul „cuștii Faraday”. Cauciucurile nu ajută: un fulger care a străbătut kilometri de aer trece ușor de câțiva centimetri de cauciuc."
  },
  {
    domeniu: "fizica",
    dificultate: "greu",
    intrebare: "La ce temperatură are apa cea mai mare densitate?",
    variante: ["Aproximativ 4 °C", "0 °C", "−4 °C", "100 °C"],
    corect: "Aproximativ 4 °C",
    explicatie: "De aceea, iarna, apa de 4 °C coboară la fundul lacurilor, iar gheața se formează la suprafață. Peștii pot supraviețui astfel în apa de dedesubt."
  },
  {
    domeniu: "fizica",
    dificultate: "greu",
    intrebare: "Ce componentă electronică, inventată în 1947 la Bell Labs, stă la baza tuturor computerelor moderne?",
    variante: ["Tranzistorul", "Tubul catodic", "Rezistorul", "Condensatorul"],
    corect: "Tranzistorul",
    explicatie: "Inventatorii lui au primit Premiul Nobel pentru Fizică în 1956. Un procesor modern conține miliarde de tranzistori."
  },
  {
    domeniu: "fizica",
    dificultate: "greu",
    intrebare: "Ce fizician danez a propus, în 1913, un model al atomului în care electronii se rotesc pe orbite fixe?",
    variante: ["Niels Bohr", "Ernest Rutherford", "Max Planck", "Werner Heisenberg"],
    corect: "Niels Bohr",
    explicatie: "Bohr a primit Premiul Nobel în 1922. Fiul lui, Aage Bohr, a primit și el Premiul Nobel pentru Fizică, în 1975."
  },

  // =======================================================
  // ⬇️ LIPEȘTE AICI ÎNTREBĂRILE NOI (deasupra rândului cu ];)
  // =======================================================

];
