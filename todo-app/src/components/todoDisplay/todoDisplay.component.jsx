import React, { useState } from "react";
import {
  Box,
  Container,
  Title,
  Form,
  Input,
  Icon,
  Button,
  Task,
  Span,
  Column,
} from "./todoDisplay.styles";

import addIcon from "../../assets/plus.png";
import Circle from "../../assets/circle.svg";
import Remove from "../../assets/remove.svg";

const TodoDisplay = () => {
  const [tasks, setTasks] = useState([]);
  const [taskTitle, setTitle] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTitle(value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
   
    setTasks([
      ...tasks,
      {
        name: taskTitle,
      },
    ]);

   setTitle

  };


  return (
    <>
      <Container>
        <Box>
          <Title>To do(0)</Title>
          <Form onSubmit={submitHandler}>
            <Input value={taskTitle} onChange={handleChange} name="task" placeholder="Add task" />
            <Button>
              <Icon src={addIcon}></Icon>
            </Button>
          </Form>
          {tasks.map((task) => {
            return (
              <Task>
                <Column>
                  <Icon src={Circle} />
                  <Span>{task.name}</Span>
                </Column>
                <div></div>
                <div>
                  <Icon src={Remove} />
                </div>
              </Task>
            );
          })}
          <Title>Completed(0)</Title>
        </Box>
      </Container>
    </>
  );
};

export default TodoDisplay;
