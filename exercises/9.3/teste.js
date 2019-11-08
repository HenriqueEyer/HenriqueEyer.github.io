function getPromise () {
    return new Promise((resolve) => {
      setTimeout(resolve, 2000)
    })
  }
  
  function logA () {
    console.log('A')
  }
  
  function logB () {
    console.log('B')
  }
  
  function logCAndThrow () {
    console.log('C')
  
    throw new Error()
  }
  
  function catchError () {
    console.log('Error!')
  }
  
  getPromise()
    .then(logA) // A
    .then(logB) // B
    .then(logCAndThrow) // C
    .catch(catchError) // Error!
