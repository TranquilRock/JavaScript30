window.onload = function(){
    const record = [];
    const flag = "Unicorn";
    window.addEventListener('keyup',(e)=>{
        record.push(e.key);
        // record.splice(-(flag.length + 1) , record.length - flag.length);// 12345678 target:5678 length:4 -1<->8 //The first element *-1 means left to right
        record.splice(0, Math.max(record.length - flag.length,0) );//more readable?
        if (record.join('').includes(flag)){
            console.log("Bingo");
            cornify_add();//The function scope is determined by html?
        }
        console.log(record);
    });
};