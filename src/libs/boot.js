module.exports = app => {

    app.db_connect.sequelize.sync().done(()=>{
        app.listen(app.get('port'), () => {
            console.log('Server running on port: ',app.get('port'));
        });
    });

    
};