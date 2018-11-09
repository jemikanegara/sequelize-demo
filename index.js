const Sequelize = require("sequelize");
const sequelize = new Sequelize("impact_byte", "root", "password", {
  host: "localhost",
  dialect: "mysql",
  operatorsAliases: false,
  timezone: "Asia/Jakarta",

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log("Connection has been established successfully.");
//   })
//   .catch(err => {
//     console.error("Unable to connect to the database:", err);
//   });

const User = sequelize.define("user", {
  first_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  last_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: true,
    unique: true
  }
});

User.create({
  first_name: "Susi",
  last_name: "Susanti",
  email: "susi@gmail.com"
})
  .then(() => console.log("berhasil"))
  .catch(err => console.log(`gagal ${err}`));

// User.sync({ force: true })
