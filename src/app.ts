import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from'body-parser';
import InstitutionRoutes from './routes/institution.route'

const app = express();

app.set('port', 4000);

app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(bodyParser.json());

app.use('/institutions', InstitutionRoutes);

export default app;