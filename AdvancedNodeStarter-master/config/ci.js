module.exports = {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  mongoURI: 'mongodb://127.0.0.1:27017/blog_ci',
  cookieKey: '123123123',
  redisUrl: 'redis://127.0.0.1:6379',
  accessKeyId: process.env.AWS_S3_ACCESS_KEY,
  secretAccessKey: process.env.AWS_S3_SECRET_KEY,
};
