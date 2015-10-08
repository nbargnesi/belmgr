var devCfg = {
  providers: {
    github: {
      clientId: '29839cb8d6ae4a9565c1'
    }
  }
};

var prodCfg = {
  providers: {
    github: {
      clientId: '29839cb8d6ae4a9565c1'
    }
  }
};
var config;

if (window.location.hostname === 'localhost') {
  config = devCfg;
} else {
  config = prodCfg;
}

export default config;

