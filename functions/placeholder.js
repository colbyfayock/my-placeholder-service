exports.handler = async (event, context) => {
  const { path } = event;

  const paramsPath = path.replace('/.netlify/functions/placeholder', '');
  const [width, height, background] = paramsPath.split('/').filter(param => !!param);

  return {
    statusCode: 200,
    body: JSON.stringify({ status: 'Ok' })
  }
};