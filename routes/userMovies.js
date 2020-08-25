const express = require("express");
const UserMoviesService = require("../services/userMovies");
const validationHandler = require("../utils/middleware/validationHandler");
const passport = require("passport");

//Schemas de validacion
const { movieIdSchema } = require("../utils/schemas/movies");
const { userIdSchema } = require("../utils/schemas/users");
const { createUserMoviesSchema } = require("../utils/schemas/userMovies");

//Middlewares de validation
const scopesValidationHandler = require("../utils/middleware/scopesValidationHandler");

//JWT strategy
require("../utils/auth/strategies/jwt");

function userMoviesApi(app) {
  const router = express.Router();
  app.use("/api/user-movies", router);

  const userMoviesService = new UserMoviesService();

  //Read de las UserMovies
  router.get(
    "/",
    passport.authenticate("jwt", { session: false }),
    scopesValidationHandler(["read:user-movies"]),
    validationHandler({ userId: userIdSchema }, "query"),
    async function (req, res, next) {
      const { userId } = req.query;
      try {
        const userMovies = await userMoviesService.getUserMovies({ userId });
        res.status(200).json({
          data: userMovies,
          message: "user movies listed",
        });
      } catch (error) {
        next(error);
      }
    }
  );

  //Create de las userMovies
  router.post(
    "/",
    passport.authenticate("jwt", { session: false }),
    scopesValidationHandler(["create:user-movies"]),
    validationHandler(createUserMoviesSchema),
    async function (req, res, next) {
      const { body: userMovie } = req;
      try {
        const createdUserMovieId = await userMoviesService.createUserMovie({
          userMovie,
        });
        res.status(201).json({
          data: createdUserMovieId,
          message: "user movie created",
        });
      } catch (error) {
        next(error);
      }
    }
  );

  //Delete de las userMovies
  router.delete(
    "/:userMovieId",
    passport.authenticate("jwt", { session: false }),
    scopesValidationHandler(["delete:user-movies"]),
    validationHandler({ userMovieId: movieIdSchema }, "params"),
    async function (req, res, next) {
      const { userMovieId } = req.params;
      try {
        const deletedUserMovieId = await userMoviesService.deleteUserMovie({
          userMovieId,
        });
        res.status(200).json({
          data: deletedUserMovieId,
          message: "user movie deleted",
        });
      } catch (error) {
        next(error);
      }
    }
  );
}

module.exports = userMoviesApi;