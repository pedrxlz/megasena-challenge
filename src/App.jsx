import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import * as S from "./styles.js";

export default function App() {
  const [numbers, setNumbers] = useState([]);
  const previousValue = useRef(null);
  const [parent] = useAutoAnimate();

  const generateRandomNumbers = useCallback(() => {
    const numbers = [];
    for (let i = 0; i < 6; i++) {
      let number = Math.floor(Math.random() * 60) + 1;
      if (numbers.includes(number)) {
        i--;
      } else {
        numbers.push(number);
      }
    }
    return numbers;
  }, [numbers]);

  useEffect(() => {
    previousValue.current = numbers;
  }, [numbers]);

  return (
    <S.Container>
      <S.Title>Megasena</S.Title>
      {numbers.length > 0 ? (
        <S.Description>Os números sorteados foram:</S.Description>
      ) : (
        <S.Description>
          Clique no botão para gerar 6 números aleatórios:
        </S.Description>
      )}

      <S.NumbersContainer ref={parent}>
        {numbers?.map((number, index) => (
          <S.Number
            key={number}
            red={previousValue.current.find((n) => n === number)}
          >
            {number}
          </S.Number>
        ))}
      </S.NumbersContainer>

      <S.GenerateButton onClick={(e) => setNumbers(generateRandomNumbers)}>
        Gerar números
      </S.GenerateButton>
    </S.Container>
  );
}
