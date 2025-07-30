const logger = (message, data = {}) => {
  const log = {
    time: new Date().toISOString(),
    message,
    data,
  };
  const existingLogs = JSON.parse(localStorage.getItem("logs") || "[]");
  existingLogs.push(log);
  localStorage.setItem("logs", JSON.stringify(existingLogs));
};

export default logger;