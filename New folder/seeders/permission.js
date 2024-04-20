// Backend: seeders/permissions.js (for seeding initial permissions)
const Permission = require('../models/permission');

const permissions = [
  { name: 'createUser' },
  { name: 'editUser' },
  { name: 'deleteUser' },
  // Add more permissions as needed
];

const seedPermissions = async () => {
  try {
    await Permission.deleteMany(); // Clear existing permissions
    await Permission.insertMany(permissions);
    console.log('Permissions seeded successfully');
  } catch (error) {
    console.error('Error seeding permissions:', error);
  }
};

module.exports = seedPermissions;
