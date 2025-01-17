const Task = require("../models/Task");
const Category = require("../models/Category");

const createTask = async (req, res) => {
  const { title, description, category, dueDate } = req.body;
  const userId = req.userId;

  try {
    const newTask = new Task({
      title,
      description,
      category,
      dueDate,
      user: userId,
    });
    await newTask.save();

    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
};

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.userId }).populate("category");
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
};

const getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).populate("category");
    if (!task) {
      return res.status(404).json({ msg: "Task not found" });
    }

    res.json(task);
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
};

const updateTask = async (req, res) => {
  const { title, description, category, dueDate, completed } = req.body;

  try {
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      { title, description, category, dueDate, completed },
      { new: true }
    );

    if (!updatedTask) {
      return res.status(404).json({ msg: "Task not found" });
    }

    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
};

const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).json({ msg: "Task not found" });
    }

    res.json({ msg: "Task deleted" });
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
};

module.exports = { createTask, getTasks, getTaskById, updateTask, deleteTask };
