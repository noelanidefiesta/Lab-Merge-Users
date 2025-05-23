// Import the datejs library
require('datejs');

// Function to merge user arrays and include the merge date
function combineUsers(...userGroups) {
  // Initialize the return object
  const combinedObject = {
    users: [],
    merge_date: ''
  };

  // Merge all user arrays using the spread operator
  for (let group of userGroups) {
    combinedObject.users = [...combinedObject.users, ...group];
  }

  // Add the current date using datejs in M/d/yyyy format
  const today = new Date();
  combinedObject.merge_date = today.toString("M/d/yyyy");

  return combinedObject;
}

// Example usage
const group1 = ['alice', 'bob'];
const group2 = ['charlie', 'diana'];
const group3 = ['edward', 'frank'];

console.log(combineUsers(group1, group2, group3));


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};

module.exports = combineUsers;