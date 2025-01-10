export default () => ({
    database: {
      uri: 'mongodb+srv://test-user:edviron@edvironassessment.ub8p5.mongodb.net/?retryWrites=true&w=majority&appName=edvironAssessment'
    },
    jwt: {
      secret: 'your-secret-key',
      expiresIn: '1d'
    }
  });