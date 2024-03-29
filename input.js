// Stores the active TCP connection object.
let connection;
/**
* Setup User Interface
* Specifically, so that we can handle user input via stdin
*/
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w') {
    connection.write("Move: up");
  }
  if (key === 'a') {
    connection.write("Move: left");
  }
  if (key === 's') {
    connection.write("Move: down");
  }
  if (key === 'd') {
    connection.write("Move: right");
  }
  if (key === 'i') {
    connection.write("Say: I'm gonna win!!");
  }
  if (key === 'm') {
    connection.write("Say: My snake is faster!");
  }
};

module.exports = { setupInput };
