const os = require('os');
const { Observable } = require('rxjs');

const observable$ = Observable.create((observer) => {
    observer.next('Checking your system...');

    const cores = os.cpus().length;
    const ram = os.totalmem()/(Math.pow(1024, 3));
    
    if(ram < 4 ){
        observer.next('This app needs at least 4GB of RAM');
    } else if(cores < 2){
        observer.next('Processor is not supported');
    } else {
        observer.complete();
    }
});

function checkSystem() {
    observable$.subscribe(
        (data) => {
            console.log(data);
        },
        (error) => {
            console.log(error);
        },
        () => {
            console.log("System is checked successfully.");
        }
    );
}

checkSystem();

// function checkSystem(observer){
//     observer.next('Checking your system ...');
//     const cores = os.cpus().length;
//     const ram = os.totalmem()/(Math.pow(1024, 3));
   
//     if(cores > 2 && ram >= 4)
//         observer.next(`System checked successfully cpu cores: ${cores} RAM: ${ram}`);
//     if(cores <= 2)
//         observer.next('Processor is not supported');
//     if(ram < 4)
//         observer.next('This app needs at least 4 GB of RAM');
// }

// const obs$ = Observable.create(checkSystem);

// const subscription = obs$.subscribe(
//     function(data) { console.log(data);},
//     function(err) { console.log(err);},
//     function() { console.log("done");}
// );
