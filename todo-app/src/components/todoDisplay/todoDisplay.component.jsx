import React, { useEffect, useState } from "react";
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
import Done from "../../assets/done.png";

const TodoDisplay = () => {

  // state
  const [tasks, setTasks] = useState([]);
  const [fieldInput, setTitle] = useState("");
  const [taskId, setIdCounter] = useState(0);
  const [counts, setCount] = useState({
    completed : 0,
  });


  // handles the input onChanges
  const handleChange = (e) => {
    const { value } = e.target;
    setTitle(value);
  };

  // handles the form submition
  const submitHandler = (e) => {
    e.preventDefault();
    if (!fieldInput) {
      return;
    }
  };

  

  // handles the remove action
  const handleRemove = (taskToRemove) => {
    // const newArr = tasks.filter((task) => task.id !== taskToRemove.id);
    // setTasks(newArr);
    // const { tasksCount } = counts
    // setCount({
    //   ...counts,
    //   tasksCount: tasksCount-1,
    // });
  };

  // handles the status change action
  const handleStatus = (taskToChange) => {
    const { tasksCount,completed } = counts

    setCount({
      ...counts,
      completed:completed+1,
      tasksCount: tasksCount-1
    });

    



    const updatedTasks = tasks.map((task) => {
      if (task.id === taskToChange.id) {
        return {
          ...task,
          status: !task.status,
        };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <>
      <Container>
        <Box>
          <Title>To do({counts.tasksCount})</Title>
          <Form onSubmit={submitHandler}>
            <Input
            autoComplete="off"
              value={fieldInput}
              onChange={handleChange}
              name="task"
              placeholder="Add task"
            />
            <Button>
              <Icon src={addIcon}></Icon>
            </Button>
          </Form>

          {tasks.length
            ? tasks.map((task) => {
                return (
                  <Task key={task.id}>
                    <Column>
                      {task.status ? (
                        <Icon
                          onClick={() => {
                            handleStatus(task);
                          }}
                          src={Done}
                        />
                      ) : (
                        <Icon
                          onClick={() => {
                            handleStatus(task);
                          }}
                          src={Circle}
                        />
                      )}

                      <Span>{task.name}</Span>
                    </Column>
                    <div></div>
                    <div>
                      <Icon
                        onClick={() => {
                          handleRemove(task);
                        }}
                        src={Remove}
                      />
                    </div>
                  </Task>
                );
              })
            : null}

          <Title>Completed({counts.completed})</Title>
        </Box>
      </Container>
    </>
  );
};

export default TodoDisplay;
