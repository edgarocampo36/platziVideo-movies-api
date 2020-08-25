const express = require("express");
const MoviesServices = require("../services/movies");
const passport = require("passport");

//Schemas de validacion
const {
  movieIdSchema,
  createMovieSchema,
  updateMovieSchema,
} = require("../utils/schemas/movies");

//Middlewares de validacion
const validationHandler = require("../utils/middleware/validationHandler");
const scopesValidationHandler = require("../utils/middleware/scopesValidationHandler");

const cacheResponse = require("../utils/cacheResponse");
const {
  FIVE_MINUTES_IN_SECONDS,
  SIXTY_MINUTES_IN_SECONDS,
} = require("../utils/time");

// JWT strategy
require("../utils/auth/strategies/jwt");

const moviesApi = (app) => {
  const router = express.Router();
  app.use("/api/movies", router);

  const moviesService = new MoviesServices();

  router.get(
    "/",
    passport.authenticate("jwt", { session: false }), //valida que el usuario este autenticado
    scopesValidationHandler(["read:movies"]), //valida que el usuario tenga los scopes necesarios
    async (req, res, next) => {
      cacheResponse(res, FIVE_MINUTES_IN_SECONDS);
      const { tags } = req.query;
      try {
        const movies = await moviesService.getMovies({ tags });
        //throw new Error("Error getting movies")
        res.status(200).json({
          data: movies,
          message: "movies listed",
        });
      } catch (error) {
        next(error);
      }
    }
  );

  router.get(
    "/:movieId",
    passport.authenticate("jwt", { session: false }),
    scopesValidationHandler(["read:movies"]),
    validationHandler({ movieId: movieIdSchema }, "params"), //valida que tenga los datos requeridos
    async (req, res, next) => {
      cacheResponse(res, FIVE_MINUTES_IN_SECONDS);
      const { movieId } = req.params;
      try {
        const movie = await moviesService.getMovie({ movieId });
        res.status(200).json({
          data: movie,
          message: "movie retrieve",
        });
      } catch (error) {
        next(error);
      }
    }
  );

  router.post(
    "/",
    passport.authenticate("jwt", { session: false }),
    scopesValidationHandler(["create:movies"]),
    validationHandler(createMovieSchema),
    async (req, res, next) => {
      const { body: movie } = req;
      try {
        const createdMovieId = await moviesService.createMovie({ movie });
        res.status(201).json({
          data: createdMovieId,
          message: "movie created",
        });
      } catch (error) {
        next(error);
      }
    }
  );

  router.put(
    "/:movieId",
    passport.authenticate("jwt", { session: false }),
    scopesValidationHandler(["update:movies"]),
    validationHandler({ movieId: movieIdSchema }, "params"),
    validationHandler(updateMovieSchema),
    async (req, res, next) => {
      const { movieId } = req.params;
      const { body: movie } = req;
      try {
        const updatedMovieId = await moviesService.updateMovie({
          movieId,
          movie,
        });
        res.status(200).json({
          data: updatedMovieId,
          message: "movies updated",
        });
      } catch (error) {
        next(error);
      }
    }
  );

  router.delete(
    "/:movieId",
    passport.authenticate("jwt", { session: false }),
    scopesValidationHandler(["delete:movies"]),
    validationHandler({ movieId: movieIdSchema }, "params"),
    async (req, res, next) => {
      const { movieId } = req.params;
      try {
        const deletedMovieId = await moviesService.deleteMovie({ movieId });
        res.status(200).json({
          data: deletedMovieId,
          message: "movies eliminated",
        });
      } catch (error) {
        next(error);
      }
    }
  );
};

module.exports = moviesApi;
