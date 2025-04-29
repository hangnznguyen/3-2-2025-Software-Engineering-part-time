class Logger {
    log(id, result) {
      console.log(`[Caller ID: ${id}] Result: ${result}`);
    }
  }
  
  module.exports = Logger;