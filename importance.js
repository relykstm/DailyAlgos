var GetImportance = function(employees, id, total=0) {

    for(var i=0; i<employees.length; i++){
        if(employees[i].id == id){
                total = total + employees[i].importance
                for(var x=0; x<employees[i].subordinates.length; x++){
                    total = GetImportance(employees, employees[i].subordinates[x], total)
                }
        }

    }

    return total;
    
};