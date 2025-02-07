const Task = require("../models/Task");

const resolvers = {
  Query: {
    getTasks: async () => await Task.find(),
  },
  Mutation: {
    createTask: async (_, { input }) => {
      const newTask = new Task({ input });
      await newTask.save();
      return newTask;
    },
    deleteTask: async (_, { id }) => {
      const task = await Task.findByIdAndDelete(id);
      if (!task) throw new Error("Task not found");
      return id;
    },
  },
};

module.exports = resolvers;
