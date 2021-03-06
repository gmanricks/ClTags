// Generated by CoffeeScript 1.6.2
(function() {
  var cltags, exports;

  cltags = exports = module.exports = {};

  cltags.parse = function(args, defaults, replacements) {
    var arg, key, options, t, ts, val, value, _i, _j, _len, _len1;

    options = {
      command: "",
      query: []
    };
    if (typeof replacements !== "object" || replacements instanceof Array) {
      replacements = {};
    }
    if (typeof defaults === "object" && !(defaults instanceof Array)) {
      for (key in defaults) {
        val = defaults[key];
        options[key] = val;
      }
    }
    if (args[0].substr(-4) === "node") {
      args = args.slice(2);
    } else {
      args.shift();
    }
    for (_i = 0, _len = args.length; _i < _len; _i++) {
      arg = args[_i];
      if (arg.substr(0, 2) === "--") {
        arg = arg.substr(2);
        if (arg.indexOf("=") === -1) {
          options[arg] = true;
        } else {
          arg = arg.split("=");
          key = arg.shift();
          value = arg.join("=");
          options[key] = value;
        }
      } else if (arg.charAt(0) === "-") {
        arg = arg.substr(1);
        ts = [];
        if (arg.indexOf("=") === -1) {
          ts = arg.split("");
        } else {
          arg = arg.split("=");
          ts = arg.shift().split("");
          value = arg.join("=");
          key = ts.pop();
          if (replacements.hasOwnProperty(key)) {
            key = replacements[key];
          }
          options[key] = value;
        }
        for (_j = 0, _len1 = ts.length; _j < _len1; _j++) {
          t = ts[_j];
          if (replacements.hasOwnProperty(t)) {
            t = replacements[t];
          }
          options[t] = true;
        }
      } else {
        if (options.command === "") {
          options.command = arg;
        } else {
          options.query.push(arg);
        }
      }
    }
    options.query = options.query.join(" ");
    for (key in options) {
      val = options[key];
      if (/^[0-9]+$/.test(val)) {
        options[key] = parseInt(val, 10);
      }
    }
    return options;
  };

}).call(this);
