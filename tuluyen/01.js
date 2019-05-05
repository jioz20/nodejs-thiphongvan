// Đảo ngược chuỗi
function FirstReverse(str) { 
    let s = " ";
    for(let i = str.length - 1; i >= 0; i--)
    {
        s += str[i];
    }
    return s;
  }
     

//   console.log(FirstReverse("i love u"));

  
FirstReverse("i love u");
    