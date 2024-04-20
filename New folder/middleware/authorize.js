// Backend: middleware/authorize.js (updated)
const authorizeUser = (requiredPermissions) => {
    return (req, res, next) => {
      if (!req.user || !req.user.roles.some(role => role.permissions.some(permission => requiredPermissions.includes(permission)))) {
        return res.status(403).json({ error: 'Forbidden' });
      }
      next();
    };
  };
  
  module.exports = authorizeUser;
  