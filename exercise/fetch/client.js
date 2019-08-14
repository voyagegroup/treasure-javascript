function req(url, method){
    return fetch(url, {
        'method' : ,
      })
      .then((response) => {
        resolve(response.json())
       })
      .catch((error) =>{
        reject(error)
      });
}