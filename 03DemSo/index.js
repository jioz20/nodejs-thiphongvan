function countFrom(a, b)
{
    return new Promise(function(resole, reject){
        if(a > b)
            reject('a > b ==> False');
        else 
            {
              var interVal = setInterval(function(){
                  console.log(a);
                a++;
                if(a === b + 1)
                    {
                        clearInterval(interVal);
                        resole();
                    }
              }, 1000);
            }
    });
}


countFrom(1,10).then(function(values){
    console.log('Done');
}).catch(function(err){
    console.log('Error');
});
