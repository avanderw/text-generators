function capitalize(str) {
  return str && typeof str === "string"
    ? str.charAt(0).toUpperCase() + str.slice(1)
    : "";
}
