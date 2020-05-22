var maxProfit = function(prices) {
    
    var buy = prices[0];
    var maxprofit = 0;
    
    for(var day =1; day<prices.length; day++){
        
        if(prices[day]>buy && prices[day]-buy > maxprofit){
            maxprofit = prices[day]-buy;
        } else if(prices[day] < buy){
            buy = prices[day];
        }

    }
    return maxprofit;
};