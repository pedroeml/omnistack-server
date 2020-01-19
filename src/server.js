import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';
import env from './config/env';

const app = express();
const mongoURI = `mongodb+srv://${env.MONGO_USER}:${env.MONGO_PASSWORD}@${env.MONGO_SERVER}/${env.MONGO_DATABASE_NAME}?retryWrites=true&w=majority`;

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);
app.listen(env.PORT);
