const https = require('https');

///-using promise--
// const fetchData = (url) => {
//   return new Promise((resolve, reject) => {
//     const req = https.get(url, (res) => {
//       let data = '';
//       res.on('data', (chunk) => {
//         data += chunk;
//       });

//       res.on('end', () => {
//         resolve(JSON.parse(data));
//       });
//     });

//     req.on('error', (err) => {
//       reject(err);
//     });
//   });
// };

// fetchData('https://coderbyte.com/api/challenges/json/age-counting')
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//-- using async await

const getCoungAge = async (url) => {
  return new Promise((resolve, reject) => {
    const req = https.get(url, 'utf-8', (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        resolve(JSON.parse(data));
      });
    });

    req.on('error', (err) => {
      reject(err);
    });
  });
};

(async () => {
  try {
    const { data } = await getCoungAge(
      'https://coderbyte.com/api/challenges/json/age-counting'
    );
    const result = data.split(', ').map((ele) => {
      const [key, value] = ele.split('=');
      return { [key]: value };
    });
    const res = result.filter((ele) => {
      return ele.age > 50;
    });
    console.log(res.length);
  } catch (error) {
    console.log(error);
  }
})();

// https.get(
//   'https://coderbyte.com/api/challenges/json/age-counting',
//   (response) => {
//     let data = '';

//     response.on('data', (chunk) => {
//       data = data + chunk.toString();
//     });

//     response.on('end', () => {
//       console.log(JSON.parse(data));
//     });
//   }
// );
