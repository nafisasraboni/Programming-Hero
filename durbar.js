function extractBodyContent(htmlString) {
  let exactContent = htmlString.split("<body>")
  for(let i=0;i<exactContent.length;i++){
    let getContent = exactContent[1].split("</body>");
    return getContent[0]
  }
}
console.log(extractBodyContent("<html><head><title>My Page</title></head><body><h1>Welcome!</h1><p>This is my new React app.</p></body></html>"))