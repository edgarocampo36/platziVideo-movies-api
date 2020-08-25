const express = require("express");
const app = express();
const helmet = require("helmet");

const { config } = require("./config/index");

const apiAuth = require("./routes/auth");
const moviesApi = require("./routes/movies");
const userMoviesApi = require("./routes/userMovies");

const {
  logErrors,
  errorHandler,
  wrapErrors,
} = require("./utils/middleware/errorHandler");

const notFoundHandler = require("./utils/middleware/notFoundHandler");

//middleware body parser
app.use(express.json());

//middleware de Helmet
app.use(helmet()); //ejecuta los valores por defecto de los headers de helmet

//middleware de rutas
apiAuth(app);
moviesApi(app);
userMoviesApi(app);

//middleware error 404 not found
app.use(notFoundHandler);

//middleware manejo de errores
app.use(logErrors); //1er middle que captura el error y lo muestra en consola, lo pasa al siguiente middle
app.use(wrapErrors); //2do valida si es tipo boom y lo envia, sino lo convierte y lo envia
app.use(errorHandler); //3ro maneja el error para definir como lo va a manipular

app.listen(config.port, () => {
  console.log(`Listening http://localhost:${config.port}`);
});
