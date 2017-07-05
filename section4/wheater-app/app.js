const request = require('request');
const yargs = require('yargs');

const argv = yargs
  .options({
      a: {
        demand: true,
        alias: 'address',
        describe: 'address to fetch weather for',
        string: true
      }
  })
  .help()
  .alias('help','h')
  .argv;

  var encondedAddress = encodeURIComponent(argv.address)


request({
  url : `https://maps.googleapis.com/maps/api/geocode/json?address=${encondedAddress}`,
  json: true
}, (error, response, body)=>{
  console.log(`Address : ${body.results[0].formatted_address}`);
  console.log(`Latitude : ${body.results[0].geometry.location.lat}`);
  console.log(`Longitude : ${body.results[0].geometry.location.lng}`);

});