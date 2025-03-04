const acess_key_id = process.env.ACESS_KEY_ID
const secret_key_id = process.env.SECRET_KEY_ID

module.exports = {
  s3: {
    accessKeyId: acess_key_id, // TODO
    secretAccessKey: secret_key_id, // TODO
    endpoint: 'eu-west-1', // TODO
    bucket: 'tp-cloud-exo-3-bucket', // TODO
  },
  suffix: {
    small: '_small.jpg',
    full: '_full.jpg'
  }
};
