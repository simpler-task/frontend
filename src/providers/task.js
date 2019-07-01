import axios from "axios";

export const getAllTask = () => {
  return axios.get("http://localhost:8080/tasks", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("AUTH_TOKEN")}`
    }
  });
};

export const createTask = form => {
  console.log(form);
  return axios.post(
    "http://localhost:8080/tasks",
    { ...form },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("AUTH_TOKEN")}`
      }
    }
  );
};

export const putTask = ({ id, name, description }) => {
  return axios.put(
    `http://localhost:8080/tasks/${id}`,
    { name, description },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("AUTH_TOKEN")}`
      }
    }
  );
};

export const deleteTask = id => {
  return axios.delete(`http://localhost:8080/tasks/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("AUTH_TOKEN")}`
    }
  });
};
