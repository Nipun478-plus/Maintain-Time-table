
import React, { useState, useRef } from "react";
import styles from  './Inbox.module.css'

export default function INBOX(props) {
  const [newTask, setNewTask] = useState(false);
  const titleRef = useRef("");
  const calendarRef = useRef("");
  const newTaskHandler = () => {
    setNewTask(true);
  };
  const addHandler = (e) => {
    e.preventDefault();
    if (titleRef.current.value === "") {
      window.alert("Please enter a title");
      return;
    }
    let newObj = {
      number: props.list.length + 1,
      title: titleRef.current.value,
      date: new Date(calendarRef.current.value),
    };
    props.append(newObj);
    setNewTask(false);
  };
  const pull = (index) => {
 
    props.deleteHandle(index);
  };
  const cancelHandler = () => {
    setNewTask(false);
    calendarRef.current.focus();
    calendarRef.current.blur();
    window.location.reload();
  };
  return (
    <div className={styles.inbox}>
      <h2>INBOX</h2>
      {!newTask && <button onClick={newTaskHandler}>+AddNew</button>}
      {newTask && (
        <form action="">
          <input type="text" name="" id="" ref={titleRef} />
          <div>
            <button onClick={addHandler}>Add Task</button>
            <button onClick={cancelHandler}>Cancel</button>
            <input
              type="date"
              ref={calendarRef}
              defaultValue="2023-01-01"
            />
          </div>
        </form>
      )}
      <div>
        {props.list.map((list) => {
          return (
            <div key={list.number}>
              <div>
                <div className={styles.text}>
                {list.title}({list.date.toLocaleDateString()})
                </div>
                <button
                  
                    onClick={() => {
                      pull(list.number);
                    }}
                  >
                    delete
                  </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )}