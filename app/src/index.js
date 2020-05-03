import http from 'http'

const server = http.createServer((req, res) => {
  res.setHeader('content-type', 'application/json')
  res.write(JSON.stringify({
    message: 'lorem ipsume en dolo'
  }))
  res.end()
})

server.listen(3000, () => {
  console.log('server started on localhost:3000')
})