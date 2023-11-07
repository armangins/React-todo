import React, { useState } from "react";
import { Contanier, Form, Input, Button, Icon,Column, Task,Span} from "./todoDisplay.styles";
import addIcon from '../../assets/plus.png';
import Circle from "../../assets/circle.svg";
import Remove from "../../assets/remove.svg";
import Done from "../../assets/done.png";

const ToDoDisplay = (props) => {

 const { tasks, handleRemove} = props


  return (
    <>
      <Contanier>
      {tasks.length
            ? tasks.map((task) => {
                return (
                  <Task key={task.id}>
                    <Column>
                      {task.completed ? (
                        <Icon
                          onClick={() => {
                           
                          }}
                          src={Done}
                        />
                      ) : (
                        <Icon
                          onClick={() => {
                         
                          }}
                          src={Circle}
                        />
                      )}

                      <Span>{task.task}</Span>
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
      </Contanier>
    </>
  );
};

export default ToDoDisplay;
