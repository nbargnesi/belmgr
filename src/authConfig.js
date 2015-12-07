var devCfg = {
  providers: {
    github: {
      clientId: 'cfebeae3e7551e8e5ef5',
      //redirectUri: window.location.origin + '/doobie',
      popupOptions: { width: 1020, height: 618 }
    }
  }
};

var prodCfg = {
  providers: {
    github: {
      clientId: 'cfebeae3e7551e8e5ef5',
      //redirectUri: window.location.origin + '/bar',
      popupOptions: { width: 1020, height: 618 }
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

