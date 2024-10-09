
const internship = false

const ourPromise =new Promise ((resolve, reject)=>{
    if(internship){
        resolve(`I made it`);
    }
    else{
        reject('I will not give up')
    }
});
    ourPromise.then((response)=>{
        console.log({response});
        console.log("I will get confirmed");
    })
    .catch((error)=>{
        console.log({error});
        console.log("I will continue applying");
    })
    .finally(()=>{
        console.log("I will be a software Engineer");
    });

async function myAkiraChixDream(){
    try{
        await Promise;
    }
    catch{
        console.log("I will get a job one day");
    }
}
myAkiraChixDream()