function colorValue(){
    // for(i=0;i<=255;i++){
        for(j=0;j<=100;j++){
            console.log(j)
            let alpha=["a","b","c","d","e","f"]
            if((j%10==0) && (j!=1)){
                for(let k=0;k<6;k++){
                    console.log(alpha[k])
                }
            } 
        }
    }
// }
colorValue()