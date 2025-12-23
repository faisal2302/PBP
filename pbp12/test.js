const axios = require('axios');

//uji coba post/user menggunakan express-validator
const testExpressValidator = async () => {
    try {
        const response = await axios.post('http://localhost:3000/user', {
            username: 'faisal',
            email: 'invalidemail@com',
        });
        console.log('Respone from / user (express-validator):', response.data);
    }   catch (error) {
        console.log('Error from / user (express-validator):', error.response.data);
    }
};

//uji coba post/user-joi menggunakan joi
const testJoiValidator = async () => {
    try {
        const response = await axios.post('http://localhost:3000/user-joi', {
            username: 'trevor',
            email: 'invalidemail@com',// email tidak valid
        });
        console.log('Respone from / user-joi (joi):', response.data);
    }   catch (error) {
        console.log('Error from / user-joi (joi):', error.response.data);
    }
};

//menjalankan uji coba
const runTests = async () => {
    console.log('Testing /user route with express-validator...');
    await testExpressValidator();

    console.log('\nTesting /user-joi route with joi...');
    await testJoiValidator();
};

runTests();