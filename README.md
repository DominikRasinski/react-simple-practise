# Repozytorium do testowania technik w react.js

Głównym załozeniem tego repozytorium jest przećwiczenie prostych zasad specyficznych funkcji/metod jakie są wykorzystywane w frameworku

## Uruchomienie projektu

### `npm start`

Uruchamia projekt react z paczki `Create React App`.\
Projekt jest **domyślnie** uruchamiany w trybie development zostanie uruchomiony na [http://localhost:3000](http://localhost:3000) w przeglądarce

### `npm run build`

Kompiluje aplikację do produkcji w folderze „build”.\
Prawidłowo łączy React w trybie produkcyjnym i optymalizuje kompilację pod kątem najlepszej wydajności.

Kompilacja jest zminimalizowana, a nazwy plików zawierają skróty.\
Twoja aplikacja jest gotowa do wdrożenia!

Sprawdź sekcję [deployment](https://facebook.github.io/create-react-app/docs/deployment) po więcej informacji.

### `npm run server`

Uruchamia tylko server json pozwalający z przykładowymi danymi

Server musi być wcześniej skonfigurowany aby był dostępy do działania musimy dodać w pliku `package.json` w `scripts` wpis `"server": "json-server --watch <plik_z_danymi_json> --port 8000"` później można uruchomić taki serwer za pomocą `npm server start`. Flaga --port może być dowolna po prostu musimy mieć wolny port który możemy przeznaczyć na ten server.\

### `npm run start-all`

**UWAGA na porcie 8000 aktualnie działa server udostępniający plik json z zapisanym menu**

Uruchamian od razu całą aplikację react wraz z serwerem json który aktualnie przetrzymuje zawartość menu.

### Dostępne technologie w projekcie

- create react app
- simple json server
- react-markdown
- tailwindCss
- redux
- react-syntax-highlighter
- react-router-dom
