const mongoose = require('mongoose');
const {mongoPass, mongoUser} = require('./config')

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected Successfully')
})
.catch(console.error)

// require('./createUser')
// require('./getUsers')
// require('./updateUser')
// require('./deleteUser')


