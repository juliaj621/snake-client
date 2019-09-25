const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function () {
  const conn = net.createConnection({
    // host for computer version of game
    // host: '10.0.2.15',
    // host for classroom version of game
    host: '192.168.88.254',
    port: 50541,
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('data', () => {
    console.log("you ded cuz you idled");
  });

  conn.on('connect', () => {
    console.log('Successfully connected to game server')
    conn.write("Name: JJ")
  })

  // conn.on('connect', () => {
  //   setTimeout(() => {
  //     conn.write("Move: up");
  //   }, 1000);
  //   setTimeout(() => {
  //     conn.write("Move: up");
  //   }, 2000);
  // })



  return conn;
}

module.exports = { connect }