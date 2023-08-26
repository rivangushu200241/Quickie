function cors(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://quickie-ztoq.vercel.app');
    res.setHeader('Access-Control-Allow-Methods',    'OPTIONS, GET, POST, PUT, PATCH, DELETE');
  
    res.setHeader('Access-Control-Allow-Headers',  
     'Content-Type, Authorization');
  
    next();
}

module.exports = cors;