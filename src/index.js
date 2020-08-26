import express from 'express';
const app = express();

app.set('port',process.env.port || 3000);

app.listen(app.get('port'), () => {
    console.log('Server running on port: ',app.get('port'));
});