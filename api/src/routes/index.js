const { Router } = require("express");

const usersRouter = require("./users.routes");
const sessionsRouter = require("./sessions.routes");
const notesRouter = require("./movie-notes.routes");
const tagsRouter = require("./movie-tags.routes");

const routes = Router();
routes.use("/users", usersRouter);
routes.use("/sessions", sessionsRouter);
routes.use("/movie_notes", notesRouter);
routes.use("/movie_tags", tagsRouter);

module.exports = routes;