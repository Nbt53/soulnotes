module.exports.log = (message) => {
    var logOutput = document.getElementById('log-output');
    var logMessage = document.createElement('p');
    logMessage.textContent = message;
    logOutput.appendChild(logMessage);
  }