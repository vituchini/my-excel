console.log('module.js')

async function start() {
  return await Promise.resolve('polyfill working')
}

start().then(console.log)