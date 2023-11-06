import React, { useState } from "react";
import { Contanier, Form, Input, Button, Icon } from "./todoForm.styles";
import addIcon from '../../assets/plus.png';

const ToDoForm = () => {
  const [tasks, setValue] = useState([
    {
      name:'go to school',
      status:false,
    }
  ]);


  const handleSubmit =(e)=>{
    e.preventDefault();
    setValue(tasks.push)
  }

  return (
    <>
      <Contanier>
        <Form onSubmit={handleSubmit}>
          <Input
            name="task"
            placeholder="Add task"
          ></Input>
          <Button>
            <Icon src={addIcon}></Icon>
          </Button>
        </Form>
      </Contanier>
    </>
  );
};

export default ToDoForm;
