namespace MyApp {
  export class HttpCall {
      getData(url: string) {
          let promise = new Promise((resolve, reject) => {
              let request = new XMLHttpRequest();
              request.addEventListener('load', function () {
                  resolve(JSON.parse(request.responseText));
              })
              request.open('GET', url);
              request.send();
          });
          return promise;
      }
  }
}
