await new Promise((res)=>{
    setTimeout(()=>{
       res("");
    }, 2000);
});

document.body.style.backgroundColor = "black";
console.log('defaultStyle modulio darbas baigtas');

//moduliai yra is saves asinchroniniai, galime padaryti await