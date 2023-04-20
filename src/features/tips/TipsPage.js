import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";

export default () => (
    <Container>
        <Header title="Zasady efektywnego tworzenia list zadań" />
        <Section
            body={
                <>
                    <p>
                        <strong>1. Selekcjonuj </strong><br></br>
                        Wybieraj najważniejsze - z perspektywy realizacji Twoich celów zadania.
                    </p>
                    <p>
                        <strong>2. Ustal priorytety </strong><br></br>
                        Upewnij się, że nie spędzasz swoich dni na realizowaniu pojedynczych zadań o bardzo niskim priorytecie, które można oddelegować lub zgrupować.
                    </p>
                    <p>
                        <strong>3. Ustal kolejność </strong><br></br>
                        Umieść na szczycie listy zadania najważniesze.
                    </p>
                    <p>
                        <strong>4. Wybierz kluczowe </strong><br></br>
                        Ogranicz liczbę zadań kluczowych w danym okresie, aby uniknąć przytłoczenia i zniechęcenia.
                    </p>
                    <p>
                        <strong>5. Grupuj </strong><br></br>
                        Intencjonalnie łącz zadania o podobnej charakterystyce lub do wykonania w jednym miejscu w jeden blok.
                    </p>
                    <p>
                        <strong>6. Upraszczaj </strong><br></br>
                        Duże zadania rozbijaj na mniejsze. Niech każde zadanie będzie tak proste i jazne, jak to możliwe.
                    </p>
                </>
            }
        />
    </Container>
);