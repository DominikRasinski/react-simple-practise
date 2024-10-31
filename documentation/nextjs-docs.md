# Dokumentacja opisująca działanie framework Next.js
Next.js został opracowany w oparciu o cel wsparcia biblioteki React.js o łaczenie się z backendem oraz umożliwienie wykorzystania `RSC` (React Server Components).\
Dzięki połączeniu React.js oraz Next.js tworzymy aplikację umożliwiającą renderowanie po stronie serwera co przekłada się bardzo dobrze na SEO aplikacji, a dzięki temu mamy lepiej indeksowaną stronę co przekłada sie na wyświetlanie jej w przeglądarkach.

## Spis treści

[Słownik](#słownik)\
[Tworzenie Route w Next.js](#tworzenie-route-w-nextjs)\
[Tworzenie nawigacji](#tworzenie-linków-pozwalających-na-nawigację)

## Słownik

* RSC - React Server Component komponent, który jest renderowany po stronie serwera i nie posiada możliwości na wykorzystanie hooków dostarczanych przez bibliotekę React.js
* RCC - React Client Component komponent renderowany po stronie klienta czyli przeglądarki posiada dostęp do hooków dostarczanych przez bibliotekę React.js, ale jest o wiele wolniejszy i może przyczynić się do zmniejszenia wyników SEO.
* Route - ścieżka do pliku/strony 


## Tworzenie Route w Next.js

Framework Next.js pozwala na tworzenie Route o szybciej niż paczka react-routes ponieważ w Next jest wykorzystywana struktura plików jako ścieżki do nowej strony, ale musi być zachowana pewna konwencja nazewnictwa plików oraz folder musi znajdywać się w głównej ścieżce `/app`

Przykładowy układ:
```
...
|
|__/app
    |
    |__/about
    |     |
    |     |__page.js
    ...
```
Jak można zauważyć dosyć prosta struktura, posiadamy teraz stronę `/about` nazwa pliku wewnątrz folderu nie jest przypadkowa, ponieważ jeżeli chcemy aby plik został potraktowany jako strona musi przybrać nazwę `page` rozszerzenie zależy od języka w którym piszemy, jeżeli chcemy pisać w ts to rozszerzenie musi być .ts itd.

A jak chcemy dodać kolejną stronę na przykład `/contact` to musimy zrobić tak:
```
...
|
|__/app
    |
    |__/about
    |     |
    |     |__page.js
    |
    |__/contact
    |       |
    |       |__page.js
    ...
```
Oczywiście plik `page.js` sam w sobie nie wystarczy aby wygenerować stronę, należy również w nim zamieścić komponent jaki ma zostać wygenerowany. Nazwa komponentu jest dowolna.

## Tworzenie linków pozwalających na nawigację

W aplikacji możemy wykorzystać podstawowe linki do nawigacji typu `<a href="link">` ale wykorzystanie takiego znacznika spowoduje przekierowanie typu `Hard` czyli cała strone zostanie od nowa skonstruowana co przyczyni się do nie potrzebnego wyczekiwania na zładowanie ponownie całego pakietu strony.

Aby tego uniknąć i zachować uczucie korzystania z strony opartej na single app, powinniśmy skorzystać z komponentu dostarczanego przez Next.js o nazwie `Link`

```tsx
import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/contact">
        <a>Go to Contact Page</a>
      </Link>
    </div>
  );
};

export default HomePage;
```