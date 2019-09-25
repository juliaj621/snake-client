const net = require('net');
const { IP, PORT } = require('./constants');
/**
 * Establishes connection with the game server
 */
const connect = function () {
  const conn = net.createConnection({
    // host for computer version of game -- > host: '10.0.2.15',
    // host for classroom version of game
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('data', () => {
    console.log("you ded cuz you idled");
  });

  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write("Name: JJ");
  });
  return conn;
};

module.exports = { connect };