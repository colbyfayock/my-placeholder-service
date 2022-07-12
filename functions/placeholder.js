const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: '<Your Cloud Name>'
});

exports.handler = async (event, context) => {
  const { path } = event;

  const paramsPath = path.replace('/.netlify/functions/placeholder', '');
  const [width, height, background] = paramsPath.split('/').filter(param => !!param);

  const url = cloudinary.url('white', {
    width,
    height,
    effect: 'colorize',
    color: `#${background}`
  });

  return {
    statusCode: 302,
    headers: {
      Location: url
    }
  }
};