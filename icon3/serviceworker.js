self.oninstall = event => {};

self.onfetch = event => {
  console.log(`fetching ${event.request.url}`);
};
