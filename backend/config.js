require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET || "pookie";

module.exports = {
    JWT_SECRET
};