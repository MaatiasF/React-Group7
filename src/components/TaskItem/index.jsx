import { useState, useEffect } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const TaskItem = (props) => {
  const { task } = props;
  const [completed, setCompleted] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    setShowAlert(true);
  }, [completed]);

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  const onChangeCompleted = () => {
    setCompleted(!completed);
  };

  return (
    <div
      className="tareas"
      style={{ textDecoration: completed ? "line-through" : "none" }}
    >
      <input
        className="checkbox"
        type="checkbox"
        checked={completed}
        onChange={onChangeCompleted}
      />
      <input
        id={task.id}
        type="text"
        readOnly
        value={task.name}
        className="input tarea"
        checked={completed}
        style={{ textDecoration: completed ? "line-through" : "none" }}
      />

      <Snackbar
        open={showAlert}
        autoHideDuration={6000}
        onClose={handleCloseAlert}
      >
        <MuiAlert
          onClose={handleCloseAlert}
          severity="info"
          sx={{ width: "100%" }}
        >
          {`Estado de ${task.name}: ${completed ? "Completada" : "Pendiente"}`}
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default TaskItem;
