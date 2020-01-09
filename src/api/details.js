export const sendChangeDetailsRequest = payload => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isRequestSucceeded = Math.random() > 0.25

      if (isRequestSucceeded) {
        console.log(JSON.stringify(payload))
        resolve(payload)
      } else {
        reject('Something went wrong! Try again!')
      }
    }, 2000)
  })
}
