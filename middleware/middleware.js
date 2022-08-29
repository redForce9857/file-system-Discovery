
const middleware = (req,res,next)=>{
    let file = new Buffer.from('');
    req.on('data', (chunk) =>{
        file = Buffer.concat([file, chunk]);
    });
    req.on('end', ()=>{
        req.file = {data: file, mimetype: req.headers['content-type'], size: req.headers['content-length']};
        next();
    });
}

export default middleware