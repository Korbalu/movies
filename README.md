Movies Projekt Fordítási és Futtatási Útmutató

Backend (Java/Spring Boot)
Fordítás

    Nyissa meg a projektet az IntelliJ IDEA vagy más Java fejlesztői környezetben.
    Telepítse a projekt függőségeit a Maven segítségével a következő paranccsal:
        mvn clean install

Futtatás

    Az alkalmazás indításához futtassa a következő parancsot a projekt gyökérkönyvtárában:
        mvn spring-boot:run
    Ellenőrizze, hogy a backend alkalmazás sikeresen elindult-e a http://localhost:8080 címen.


Frontend (Angular)
Fordítás

    Nyissa meg a projektet az Angular CLI vagy más Angular fejlesztői környezetben.
    Telepítse a projekt függőségeit az npm install parancs segítségével.

Futtatás

    Indítsa el az Angular alkalmazást a következő paranccsal:
            ng serve
    Nyissa meg a böngészőben a http://localhost:4200 címet, hogy elérje az alkalmazást.


Movies Projekt Dokumentáció

Backend Dokumentáció
Struktúra

    controllers: Az MVC modell kontrollerei találhatók itt, amelyek fogadják a bejövő kéréseket és irányítják azokat a megfelelő szolgáltatásokhoz.
    services: Az üzleti logika rétege található itt, amelyek végzik az adatbázis-kezelést és a külső API-kkal való kommunikációt.
    repositories: Az adatbázis-kezelésért felelős repository osztályok találhatók itt.
    domain: A Spring keretrendszer Entitásai találhatók itt.
    dto: A Backend és Frontend közötti adatkommunikációért felelős java file-ok találhatók itt.

API végpontok

    /api/movies: A filmekkel kapcsolatos műveletek végrehajtására szolgáló végpont.
    /api/reviews: Az értékelésekkel kapcsolatos műveletek végrehajtására szolgáló végpont.

Frontend Dokumentáció
Struktúra

    components: Az Angular komponensek találhatók itt, amelyek a felhasználói felület részeit reprezentálják.
    services: Az alkalmazás logikájának szolgáltatásai találhatók itt, amelyek a backend API-val való kommunikációt végzik.
    models: A Backend és Frontend közötti adatkommunikációért felelős typescript file-ok találhatók itt.

Az app/components/ könyvtár tartalmazza az alkalmazás fő komponenseit.
Ezek a komponensek felelősek a különböző felhasználói felületelemek megjelenítéséért és az interakciók kezeléséért.

    movie-list/: Ez a komponens felelős a filmek listázásáért. Általában a főoldalon jelenik meg, és minden rendelkezésre álló filmet listázza.
    movie-details/: Ez a komponens felelős egy adott film részleteinek megjelenítéséért. Általában a felhasználó egy filmre kattintva jut el ide.
    review-list/: Ez a komponens felelős a vélemények listázásáért egy adott filmhez. Általában a film részleteinek alatt jelenik meg.
    review-form/: Ez a komponens felelős egy új vélemény hozzáadásáért egy adott filmhez. Általában a felhasználó egy űrlap kitöltésével adhatja meg a véleményét.

Az app/services/ könyvtár tartalmazza az alkalmazás szolgáltatásait.
Ezek felelősek az adatkezelésért, üzleti logika végrehajtásáért és az API-khoz való kommunikációért.

    movie.service.ts: Az alkalmazás filmekkel kapcsolatos szolgáltatásait tartalmazza, például a filmek lekérdezése, frissítése stb..
    review.service.ts: Az alkalmazás véleményekkel kapcsolatos szolgáltatásait tartalmazza, például vélemények lekérdezése, létrehozása, frissítése stb.
