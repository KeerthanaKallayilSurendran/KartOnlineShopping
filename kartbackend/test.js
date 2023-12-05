const bcrypt = require('bcrypt')

const SALT_ROUNDS = 5
const password = '1a2'

async function hashPassword() {
  try {
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS)
    console.log(hashedPassword, 9);
    
  } catch (error) {
    console.log(error.message);
  }
}

hashPassword()