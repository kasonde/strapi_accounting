module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '810a64cc4e46e9ca016a9c1c667a998f'),
  },
});
