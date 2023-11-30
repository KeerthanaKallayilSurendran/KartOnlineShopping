const mongoose = require("mongoose")

const mongoUri = 'mongodb+srv://keerthanakallayilsurendran:ncCjqUMun3uYzk9N@cluster0.uw0ionf.mongodb.net/'

const dbConnect = async () => {
  await mongoose.connect(mongoUri)
  console.log('database connected');
}

module.exports = { dbConnect }