
const paymentSuccess = true;
const marks = 700;
function enroll(callback){
    console.log('Course enrollment is in progress');

    const promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            if(paymentSuccess){
                resolve();

            }else{
                reject('payment failded!');
            }

        }, 2000);

    });
    return promise;
}

function progress(callback){
    console.log('Couurse on progress...');
    const promise =new Promise(function(resolve, reject){
        setTimeout(function (){
            if(marks>=80){
                resolve();
    
    
            }else{
                reject('You could not get enough marks to get the certificate');
            }
    
        },2000);

    });
    return promise;
    
}

function getCertificate(){
    console.log('Preparing your certificate');
    const promise = new Promise(function(resolve){
        setTimeout(function(){
            resolve('Congrats! you got the certificate');
    
        }, 1000);

    });
    return promise;

    
}

// enroll()
//     .then(progress)
//     .then(getCertificate)
//     .then(function(value){
//         console.log(value);

//     })
//     .catch(function(err){
//         console.log(err);

//     });


async function asyncAwait(){
    try{
        await enroll();
        await progress();
        const message = await getCertificate();
        console.log(message);

    }catch(err){
        console.log(err);

    }
}

asyncAwait();