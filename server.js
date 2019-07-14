const dotenv = require('dotenv');

dotenv.config({ path: `${__dirname}/.env` });
const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');
// const history = require('connect-history-api-fallback');
const compression = require('compression');

const port = process.env.PORT || 8080;
const app = express();

app.use(compression());
// app.use(history());

app.use('/', serveStatic(path.join(`${__dirname}/lib/pro-dashboard/dist/`)));
app.use('/costcenter', serveStatic(path.join(`${__dirname}/lib/costcenter-dashboard/dist/`)));

app.listen(port);
