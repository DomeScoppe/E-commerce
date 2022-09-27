let estado = true;

let itemCall = (task) =>
{
    return new Promise((resolve, reject) =>{
        if(estado)
        {
            setTimeout(() =>{
                resolve(task)
            },500 );
        }
        else {
            reject("Error")
        }
    });
}

export default itemCall;