import { loremIpsum } from "../../utils/loremIpsum";

import {
  CourseContainer,
  Section,
  TitleField,
  Main,
  VideoPreviewField,
  ModulesField,
  ToolsButton,
  DescriptionField,
} from "./styles";
import { Module } from "./components/Module";

export function Course() {
  const video_url = "https://www.youtube.com/watch?v=8zo4r_GGSdU";
  const viedo_id = video_url.split("v=")[1];

  return (
    <CourseContainer>
      <Section>
        <ToolsButton>material complementar</ToolsButton>
        <ToolsButton>desafio</ToolsButton>
        <ToolsButton>criar anotação</ToolsButton>
        <ToolsButton>projeto no git</ToolsButton>
      </Section>

      <TitleField>
        <h1>Curso de Nestjs</h1>
        <p>aula 03 - modules</p>
      </TitleField>

      <Main>
        <VideoPreviewField
          src={`https://www.youtube.com/embed/${viedo_id}?rel=0`}
          allowFullScreen
        />

        <DescriptionField>
          <h3>Descrição</h3>
          <p>{loremIpsum}</p>
        </DescriptionField>
      </Main>

      <ModulesField>
        <Module />
        <Module />
        <Module />
        <Module />
        <Module />
        <Module />
        <Module />
        <Module />
        <Module />
        <Module />
        <Module />
      </ModulesField>
    </CourseContainer>
  );
}
