import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes/routes';

// Instantiate express
const app = express();

// Configure app to use body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set our app port
const port = process.env.PORT || 3500;

// Register our routes.
app.use('/', routes);

// Listen on the set port.
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

export default app;
