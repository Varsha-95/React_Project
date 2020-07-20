const express = require('express');
const connectdb = require('./config/db');
const app = express();
//CONNECT DATABASE
connectdb();
app.use(express.json({extended: false}));
app.get('/', (req, res) => res.send('API running'));
//Define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/post', require('./routes/api/post'));
app.use('/api/profile', require('./routes/api/profile'));
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server Started ${port}`));