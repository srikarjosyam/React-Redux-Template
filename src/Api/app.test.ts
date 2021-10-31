import app from "./app";

test('get the data from api', () => {
   let response = app.getToDoData().then((val)=>{
       return val
   })
   expect(response).not.toBeNull()
});

test('Error from the api', () => {
    app.getToDoData = jest.fn().mockRejectedValue(new Error('Sample Error'));
    let response = app.getToDoData().catch((val)=>{
        return val
    })
    expect(response).not.toBeNull()
 });