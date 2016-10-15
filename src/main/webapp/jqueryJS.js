$(document).ready(function () {
    
        var jqxhr = $.ajax({
            url: "api/member",
            type: "GET"
        });
//Use the promise methods on the returned XMLHttpRequest object
        jqxhr.done(function (data, textStatus) {
            filldiv(data);
            console.log(textStatus);
        });
        jqxhr.fail(function (xhr, status, errorThrown) {
            alert("Request failed: " + status);
        });
        jqxhr.always(function (data, textStatus, jqXHR) {
            console.log(data);
            console.log(textStatus);
        });
        
        
        function filldiv(data){
            var finalhtml ="";
            $(data).each(function(index){
            var html = "<tr>";
             html += "<td>"+ data[index].id +"</td>";   
             html += "<td>"+ data[index].name +"</td>";   
             html += "<td>"+ data[index].age +"</td>";   
             html += "<td>"+ data[index].email +"</td></tr>"; 
             finalhtml += html;
            });
            
            $("#tableBody").html(finalhtml);
        };
});
