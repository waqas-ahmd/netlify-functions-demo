const randomName = require("random-name");

const handler = async (event) => {
  try {
    //const subject = event.queryStringParameters.name || 'Worlds'
    const name = randomName.first();
    const surname = randomName.last();
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `${name} ${surname}` }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
