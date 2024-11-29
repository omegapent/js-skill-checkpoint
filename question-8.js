// Question #8: Fetching User List from Server

// เริ่มเขียนโค้ดตรงนี้
let getUsersInfo = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const usersInfo = await response.json()
  return usersInfo; 
};

async function getUsersName() {
  const usersName = (await getUsersInfo())
  .map(user => user.name);
  return usersName
 };
   
const newUsers = await getUsersName()

console.log(newUsers);
//[ 'Leanne Graham', 'Ervin Howell', 'Clementine Bauch', 'Patricia Lebsack', 'Chelsey Dietrich', 'Mrs. Dennis Schulist', 'Kurtis Weissnat', 'Nicholas Runolfsdottir V', 'Glenna Reichert', 'Clementina DuBuque']