let request = require('request');

const api_url = 'http://quotes.stormconsultancy.co.uk/random.json';

// const call = () => request(api_url, (error, response, body)=>{
//     let bodyJSON = JSON.parse(body);
//     let randomQoute = bodyJSON.quote;
    
//     document.getElementById('qoute').innerHTML = randomQoute;
// })

// setInterval(call, 5000)


request(api_url, (error, response, body)=>{
    let bodyJSON = JSON.parse(body);
    let randomQoute = bodyJSON.quote;
    
    document.getElementById('qoute').innerHTML = randomQoute;
})
setInterval(()=>{
    request(api_url, (error, response, body)=>{
        let bodyJSON = JSON.parse(body);
        let randomQoute = bodyJSON.quote;
        
        document.getElementById('qoute').innerHTML = randomQoute;
    })
}, 5000);
