var maxProfit = function(prices) {
    let profit = 0;
    
    for(let i = 0; i < prices.length - 1; i++) {
        let possProfit = prices[i + 1] - prices[i];
        if(possProfit > 0) profit += possProfit
    }
    
    return profit;
};