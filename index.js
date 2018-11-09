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

// User.sync({ force: true })

// ----------------------CREATE------------------------------

// User.create({
//   first_name: "Jojo",
//   last_name: "Jajan",
//   email: "jojojajan@gmail.com"
// })
//   .then(() => console.log("berhasil"))
//   .catch(err => console.log(`gagal ${err}`));

// ----------------------READ BY ID------------------------------

// User.findById(1, { raw: true })
//   .then(user => console.log(user))
//   .catch(err => console.log(err));

// -----------------------READ ALL--------------------------

// User.findAll({ raw: true })
//   .then(user => console.log(user))
//   .catch(err => console.log(err));

// ----------------------UPDATE ALL----------------------------

// User.update(
//   {
//     first_namessasas: "wippy"
//   },
//   {
//     where: {
//       id: 1
//     }
//   }
// )
//   .then(result => {
//     console.log(`berhasil`);
//   })
//   .catch(err => console.log(err));

// ---------------------DELETE-------------------------

// User.findOne({ where: { id: 4 } })
//   .then(user =>
//     user
//       .destroy()
//       .then(res => console.log(res))
//       .catch(err => console.log(err))
//   )
//   .catch(err => console.log(err));

// ---------------------DELETE ALL----------------------

// User.findAll({ where: { last_name: "budi" }, raw: true })
//   .then(user => console.log(user))
//   .catch(err => console.log(err));

// ---------------------- DELETE WITH OR & AND ----------------
// const Op = Sequelize.Op;

// User.findAll({

//   where: {
//     [Op.or]: [
//       { last_name: "budi" },
//       { first_name: "roni", [Op.and]: { last_name: "rono" } },
//       { first_name: "jojo" }
//     ]
//   },
//   raw: true
// })
//   .then(user => console.log(user))
//   .catch(err => console.log(err));
