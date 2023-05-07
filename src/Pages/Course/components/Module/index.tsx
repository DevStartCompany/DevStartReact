import { useState } from "react";

import { Li, ModulesContainer, Ul, LessonField } from "./styles";

const lessons = [
  "1 - Introdução ao nestjs",
  "2 - criação do projeto",
  "3 - controllers",
  "4 - services",
  "5 - modules",
];

export function Module() {
  const [moduleIsFocused, setModuleIsFocused] = useState<boolean>(false);

  return (
    <ModulesContainer>
      <Ul>
        <Li
          onClick={() => setModuleIsFocused(!moduleIsFocused)}
          isFocused={moduleIsFocused ? "true" : "false"}
        >
          Introdução ao nestjs
          {moduleIsFocused ? (
            <ul>
              {lessons.map((lesson, index) => {
                return (
                  <LessonField key={index}>
                    <li>{lesson}</li>
                  </LessonField>
                );
              })}
            </ul>
          ) : null}
        </Li>
      </Ul>
    </ModulesContainer>
  );
}
