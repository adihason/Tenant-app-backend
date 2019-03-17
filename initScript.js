//initializes DB

const mongoose = require('mongoose');
const Tanents = require('./database/models/tenantsModel');
const Users = require('./database/models/usersModel');

mongoose.connect('mongodb://localhost:27017/TanentsApp', { useNewUrlParser: true });
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    //connected
    console.log('Connection Successful!')
});

const tenants = [
    {
        name: "Sara Blackwell",
        phoneNumber: "052-9874293",
        address: "371-6350 Placerat, Av.",
        debts: 1
    },

    {
        name: "Anne Sims",
        phoneNumber: "054-0279542",
        address: "Ap #562-7667 Parturient Street",
        debts: 0
    },

    {
        name: "Christine Howe",
        phoneNumber: "054-6071432",
        address: "3711 Vitae Street",
        debts: 1
    },

    {
        name: "Mia Raymond",
        phoneNumber: "054-3590473",
        address: "164-3136 Quisque St.",
        debts: 0
    },

    {
        name: "Patricia Hart",
        phoneNumber: "054-2306158",
        address: "2489 Ornare. Street",
        debts: 0
    }
];

const users = [
    {
        userName: "Kennan_Church",
        password: "$2b$10$lqP34IamhacyQn0dFPYNZuEb9fqbxuHUisQlt6OgtnfDx1WuSsaA."
    },

    {
        userName: "Quin_Cantu",
        password: "$2b$10$/aLuLcz2iLSoCsPvKzfie.jRc3qCZdLYGUUFRK/tiFqQw0UL9NDTa"
    },

    {
        userName: "Brielle_Christian",
        password: "$2b$10$I9aSavLf8GeeynaUYmKSdeCGpWDXG0/CqxaHCnYI6lmA5fwWR.GBC"
    },

    {
        userName: "Ian_Sears",
        password: "$2b$10$I9aSavLf8GeeynaUYmKSdeCGpWDXG0/CqxaHCnYI6lmA5fwWR.GBC"
    },

    {
        userName: "Maia_Frye",
        password: "$2b$10$AuIh759wtBYj6mv8hpKNfeCoJTYMKPhsAi7jXGLLnNXhgrsrYVXcy"
    }
];


Tanents.collection.insert(tenants, (err, docs) => {
    if (err) {
        return console.error(err);
    }
    else {
        console.log("Multiple documents inserted to Collection");
    }
});

Users.collection.insert(users, (err, docs) => {
    if (err) {
        return console.error(err);
    }
    else {
        console.log("Multiple documents inserted to Collection");
    }
});






