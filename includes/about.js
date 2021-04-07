const db = require('./databaseGateway');

module.exports = {
    about: (type, message) => {
        db.maindb.get('admin.about').push({
            "time": new Date(),
            type: type.name,
            message
        }).write();
        console.about(type.name, message);
    },
    getabouts: () => {
        return db.maindb.get('admin.about').sortBy('time').reverse().value();
    }
}