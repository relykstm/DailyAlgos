var letterCasePermutation = function(S) {
    var arr = [];
    
    var dfs = function(string, i){
        if(string.length == S.length){
            arr.push(string);
            return;
        }
        if(S[i] >= 0 && S[i] <= 9){
            string = string + S[i];
            dfs(string, i+1);
        } else {
            dfs(string + S[i].toUpperCase(), i +1);
            dfs(string + S[i].toLowerCase(), i +1);
        }
    }
    dfs("", 0);
    return arr;
}; 