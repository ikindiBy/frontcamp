module.exports = function (source) {

    if (this.cacheable) this.cacheable();
  
    var value = typeof source === "string" ? JSON.parse(source) : source;

    value = JSON.stringify(value)
      .replace(/"[1-9]*":"[1-9a-zA-Z_ .]*",/gi, '');
  
    return `module.exports = ${value}`;
  }