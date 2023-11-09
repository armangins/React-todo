import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Title,
  Form,
  Input,
  Icon,
  Button,
} from "./form-controller.styles";

const FormController = ({ addTask }) => {
  const [task, setTask] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    if(task==''){
      return; 
    } else{
      addTask(task);  
      setTask('');
    }

   
  };

  return (
    <>
      <Container>
        <Box>
          <div style={{ display: "flex" }}>
            <Title>Hey, lets begin with you tasks</Title>
          </div>
          <Form onSubmit={submitHandler}>
            <Input 
              autoComplete="off"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              name="task"
              placeholder="Add task"
            />
 {
  task == ''?(
    <Button >
    +
    {/* <Icon src={addIcon}></Icon> */}
  </Button>
  ) : (
    <Button  faded  >
    +
    {/* <Icon src={addIcon}></Icon> */}
  </Button>
  )
 }
          </Form>
        </Box>
      </Container>
    </>
  );
};

export default FormController;
