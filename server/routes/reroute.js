import { RAD_NEWS_URL } from 'client/constants';

const reroute = (req, res) => {
  return res.redirect(301, `${RAD_NEWS_URL}/${req.originalUrl}`);
};

export default reroute;
