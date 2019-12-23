
const getIdFreeUrl = url => {

  const lastIndex = url.lastIndexOf('/');
  const idString = url.slice(lastIndex).trim();

  if (lastIndex === 0) {
    return url;
  };

  if (idString && lastIndex !== -1) {
    return url.slice(0, lastIndex);
  }

  return url;
};

const getRouteHandler = (routerConfig, url) => {
  const clearUrl = getIdFreeUrl(url);
  return routerConfig[clearUrl];
};

module.exports = getRouteHandler;
