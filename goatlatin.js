var toGoatLatin = function(S) {
    var string = "";
    var bool = false;
    var first = '';
    var count = 1;
    if(S[0] == "a" || S[0] == "e" || S[0] == "i" || S[0] == "o" || S[0] =="u" || S[0] == "A" || S[0] == "E" || S[0] == "I" || S[0] == "O" || S[0] =="U"){
        bool = true;
        string = string + S[0];
    }
    else{
        first = S[0];
    }
    for(var i=1; i<S.length; i++){
        if(S[i] == ' '){
            if(bool == true){
                string = string + "ma";
                bool = false;
            }else{
                string = string + first + "ma";
            }
            for(var x=0 ; x<count; x++){
                string = string + 'a';
               
            }
            string = string + " ";
            count++;
            if(S[i +1] == "a" || S[i +1] == "e" || S[i +1] == "i" || S[i +1] == "o" || S[i +1] =="u" || S[i +1] == "A" || S[i +1] == "E" || S[i +1] == "I" || S[i +1] == "O" || S[i +1] =="U"){
                bool = true;                
            }else{
                first = S[i];
                bool = false;
            }
            continue;
        }
        else if(S[i - 1]== ' '){
            if(S[i] == "a" || S[i] == "e" || S[i] == "i" || S[i] == "o" || S[i] =="u" || S[i] == "A" || S[i] == "E" || S[i] == "I" || S[i] == "O" || S[i] =="U"){
                string = string + S[i];
                continue;
            }else{
                first = S[i];
                continue;
            }
        }
        string = string + S[i];
    }
        if(bool == true){
                string = string + "ma";
                bool = false;
        }else{
                string = string + first + "ma";
        }
        for(var x=0 ; x<count; x++){
                string = string + 'a';
               
        }
    return string;
};
