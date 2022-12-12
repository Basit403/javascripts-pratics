function sum() {

    let total = 0;
    for (let i of arguments) {
        total += i;
        
    }  
    
    return total;
}

document.write(sum(2,3,4,5,9,8,3))