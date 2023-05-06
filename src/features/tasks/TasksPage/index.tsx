import React from "react";

import { Buttons, ExampleTasksButton } from "./Buttons";
import Form from "./Form";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import Search from "./Search";
import TaskList from "./TaskList";

function TasksPage(): JSX.Element {
  return (
    <>
      <Header header={"Lista zadań"} />
      <Section
        title={"Dodaj nowe zadanie"}
        body={<Form />}
        extraContent={<ExampleTasksButton />}
      />
      <Section title={"Wyszukiwanie"} body={<Search />} />
      <Section
        title={"Lista zadań"}
        extraContent={<Buttons />}
        body={<TaskList />}
      />
    </>
  );
}

export default TasksPage;
