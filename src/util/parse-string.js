function splitString(str) {
  return str.split(',').map(tech => tech.trim());
}

export default {
  splitString,
};
