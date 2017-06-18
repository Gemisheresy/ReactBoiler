const express= require('express');
const app = express();
const dirname = __dirname;
app.use('/js',express.static(`${dirname}/bin`))
app.use('/semantic',express.static(`${dirname}/semantic`))
app.get('/',(req,res)=>{
    res.sendFile(`${dirname}/index.html`)
})
app.listen(8080,()=>{
    console.log('Server running at 8080')
})
