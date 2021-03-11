const dotenv = require('dotenv');
dotenv.config();

const dbConnection = require('./config/database');
const models = require('./models');
const data = require('./data');

dbConnection().then(() => {

    models.User.create({ ...data.users[0] }).then((u) => {
        console.log(`User with ID: ${u._id} was generated.\n`);
        const _id = u._id;

        data.tutorials.forEach((tutorial) => {

            models.Tutorial.create({ ...tutorial, editor: _id, })
                .then((createdTutorial) => {
                    return Promise.all([
                        models.User.updateOne({ _id }, { $push: { editingHistory: createdTutorial._id } }),
                        models.Tutorial.findOne({ _id: createdTutorial._id })
                    ]);
                })
                .then(([modifiedObj, tutorialObj]) => {
                    console.log(`Tutorial with ID: ${tutorialObj._id} was generated.`);
                })

        });

    });

});