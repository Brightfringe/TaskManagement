import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from "../services/taskService";

function Dashboard() {
  const [tasks, setTasks] = useState([]);

  const [form, setForm] = useState({
    title: "",
    description: "",
    status: "PENDING",
  });

  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const response = await getTasks();
      setTasks(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingId) {
        await updateTask(editingId, form);
        setEditingId(null);
      } else {
        await createTask(form);
      }

      setForm({
        title: "",
        description: "",
        status: "PENDING",
      });

      loadTasks();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (task) => {
    setEditingId(task.id);

    setForm({
      title: task.title,
      description: task.description,
      status: task.status,
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this task?")) return;

    try {
      await deleteTask(id);
      loadTasks();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />

      <div className="container mt-5">

        <div className="card shadow p-4">

          <h2 className="text-center mb-4">
            {editingId ? "Update Task" : "Create Task"}
          </h2>

          <form onSubmit={handleSubmit}>

            <div className="mb-3">
              <label className="form-label">Title</label>

              <input
                className="form-control"
                placeholder="Enter task title"
                name="title"
                value={form.title}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Description</label>

              <textarea
                className="form-control"
                rows="3"
                placeholder="Enter task description"
                name="description"
                value={form.description}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Status</label>

              <select
                className="form-select"
                name="status"
                value={form.status}
                onChange={handleChange}
              >
                <option value="PENDING">Pending</option>
                <option value="IN_PROGRESS">In Progress</option>
                <option value="COMPLETED">Completed</option>
              </select>
            </div>

            <button className="btn btn-primary w-100">
              {editingId ? "Update Task" : "Create Task"}
            </button>

          </form>

        </div>

        <div className="card shadow mt-5 p-4">

          <h2 className="mb-4">My Tasks</h2>

          <div className="table-responsive">

            <table className="table table-striped table-hover align-middle">

              <thead className="table-dark">

                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Status</th>
                  <th>Created</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>

              </thead>

              <tbody>

                {tasks.length === 0 ? (

                  <tr>

                    <td
                      colSpan="6"
                      className="text-center"
                    >
                      No tasks available.
                    </td>

                  </tr>

                ) : (

                  tasks.map((task) => (

                    <tr key={task.id}>

                      <td>{task.title}</td>

                      <td>{task.description}</td>

                      <td>

                        <span
                          className={
                            task.status === "COMPLETED"
                              ? "badge bg-success"
                              : task.status === "IN_PROGRESS"
                              ? "badge bg-warning text-dark"
                              : "badge bg-secondary"
                          }
                        >
                          {task.status}
                        </span>

                      </td>

                      <td>
                        {new Date(task.createdAt).toLocaleString()}
                      </td>

                      <td>

                        <button
                          className="btn btn-warning btn-sm"
                          onClick={() => handleEdit(task)}
                        >
                          Edit
                        </button>

                      </td>

                      <td>

                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => handleDelete(task.id)}
                        >
                          Delete
                        </button>

                      </td>

                    </tr>

                  ))

                )}

              </tbody>

            </table>

          </div>

        </div>

      </div>
    </>
  );
}

export default Dashboard;