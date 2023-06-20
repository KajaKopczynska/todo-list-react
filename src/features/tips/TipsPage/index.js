import Container from "../../../common/Container";
import Section from "../../../common/Section";
import { ItemContent, ItemHeader, ListItem, TipsList } from "./styled";

const tips = [
  {
    header: "Selekcjonuj",
    content: "Wybieraj najważniejsze - z perspektywy realizacji Twoich celów zadania."
  },
  {
    header: "Ustal priorytety",
    content: "Upewnij się, że nie spędzasz swoich dni na realizowaniu pojedynczych zadań o bardzo niskim priorytecie, które można oddelegować lub zgrupować."
  },
  {
    header: "Ustal kolejność",
    content: "Umieść na szczycie listy zadania najważniejsze."
  },
  {
    header: "Wybierz kluczowe",
    content: "Ogranicz liczbę zadań kluczowych w danym okresie, aby uniknąć przytłoczenia i zniechęcenia."
  },
  {
    header: "Grupuj",
    content: "Intencjonalnie łącz zadania o podobnej charakterystyce lub do wykonania w jednym miejscu w jeden blok."
  },
  {
    header: "Upraszczaj",
    content: "Duże zadania rozbijaj na mniejsze. Niech każde zadanie będzie tak proste i jasne, jak to możliwe."
  }
];

const TipsPage = () => {
  return (
    <>
      <Container>
        <Section
          title={"Praktyczne wskazówki dla efektywnego planowania i realizacji list zadań"}
          body={
            <>
              <TipsList>
                {tips.map((tip, index) => (
                  <ListItem key={index}>
                    <ItemHeader>{index + 1}. {tip.header}</ItemHeader>
                    <ItemContent>{tip.content}</ItemContent>
                  </ListItem>
                ))}
              </TipsList>
            </>
          }
        />
      </Container>
    </>
  );
};

export default TipsPage;
