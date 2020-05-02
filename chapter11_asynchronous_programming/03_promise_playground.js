
/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
 */
function resolveAfter2Seconds() {
    console.log("start resolveAfter2Seconds");
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log("result: "+ result);
    // expected output: 'resolved'

    asyncCall();




