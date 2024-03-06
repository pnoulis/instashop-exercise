function debug(...args) {
  args.forEach((arg) => {
    console.log(arg);
  });
}

globalThis.debug = debug;
