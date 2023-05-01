import Form from "./Form";
import TaskList from "./TaskList";
import { Buttons, ExampleTasksButton } from "./Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Search from "./Search";

function TasksPage() {


  return (
    <>
      <Header
        header={"Lista zadań"}
      />
      <Section
        title={"Dodaj nowe zadanie"}
        body={<Form />}
        extraContent={<ExampleTasksButton />}
      />
      <Section
        title={"Wyszukiwanie"}
        body={<Search />}
      />
      <Section
        title={"Lista zadań"}
        extraContent={<Buttons />}
        body={<TaskList />}
      />
    </>
  );
}

export default TasksPage;
