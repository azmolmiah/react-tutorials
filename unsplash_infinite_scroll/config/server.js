module.exports = {
  APPLICATION_ID:
    process.env.APPLICATION_ID ||
    "a67ea644a33cb15376fa4ab1a7e65adc517b72c1716a9292e22a84dd04dbfc72",
  SECRET:
    process.env.SECRET ||
    "1709b9320c726c35f6763d9ac7d083507643b9491e5f53d2613bddaf2c480ac8",
  CALLBACK_URL: process.env.CALLBACK_URL || "http://localhost:3000"
};
