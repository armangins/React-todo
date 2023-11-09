import React, { useState } from "react";
import {
  Contanier,
  Icon,
  Task,
  Span,
  Title,
  RightColumn,
  LeftColumn,
  Column,
  CompletedTask,
} from "./todoDisplay.styles";
import Circle from "../../assets/circle.svg";
import Remove from "../../assets/remove.svg";
import Done from "../../assets/done.png";

const ToDoDisplay = ({ tasks, removeTask, updateStatus, getCompleted }) => {
  /**
   * invokes the a function to remove the selected task from the list
   * @param {object} taskToRemove
   */
  const handleRemoveTask = (taskToRemove) => {
    removeTask(taskToRemove);
  };

  /**
   * invokes a function to update the status of the selected task
   * @param {object} taskToUpdate
   */
  const handleStatus = (taskToUpdate) => {
    updateStatus(taskToUpdate);
  };

  const completed = getCompleted();
  const completedCount = completed.length;

  return (
    <>
      <Contanier>
        <Title>Tasks</Title>
        {tasks.map((task) => {
          if (!task.completed) {
            return (
              <Task key={task.id}>
                <LeftColumn>
  
                  {task.completed ? (
               
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
                </LeftColumn>

                <Column>
                  <Span>{task.name}</Span>
                </Column>

                <RightColumn>
                  <Icon
                    onClick={() => {
                      handleRemoveTask(task);
                    }}
                    src={Remove}
                  />
                </RightColumn>
              </Task>
            );
          }
        })}

        <Title>Completed({completedCount})</Title>
        {completed.map((task) => {
          return (
            <Task key={completed.id}>
              <LeftColumn>
                <Icon
                  onClick={() => {
                    handleStatus(task);
                  }}
                  src={Done}
                />
              </LeftColumn>
              <Column>
                <CompletedTask>{task.name}</CompletedTask>
              </Column>
              <RightColumn></RightColumn>
            </Task>
          );
        })}
      </Contanier>
    </>
  );
};

export default ToDoDisplay;
