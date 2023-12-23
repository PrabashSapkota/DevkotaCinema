function search(){
    let a=prompt("Enter The Movie Name ");
    if (a=='Dunki')
    window.location.href="dunki.html";
    
else
 if(a=='Animal')
    window.location.href="animal.html";

else
 if(a=='Salaar')
window.location.href="salaar.html";

else 
if(a=='Aquaman')
    window.location.href="aquaman.html";

else
   alert('Sorry'+' Movie Named ' + a +' Doesnot Exists');
}

function rating(){
    var image= document.getElementById('myImage');
    if (image.src.match('starclose')){
        image.src="staropen.webp";
       
    }
    else{
        image.src="starclose.png"; 
        alert("Thank You For Giving 1 star Ratings ");
    }

    }
    function rating2(){
        var image= document.getElementById('myImage2');
        if (image.src.match('starclose')){
            image.src="staropen.webp";
           
        }
        else{
            image.src="starclose.png"; 
            alert("Thank You For Giving 2 star Ratings ");
        }
        
        }
        function rating3(){
            var image= document.getElementById('myImage3');
            if (image.src.match('starclose')){
                image.src="staropen.webp";
               
            }
            else{
                image.src="starclose.png"; 
                alert("Thank You For Giving 3 star Ratings ");
            }
            
            }
            function rating4(){
                var image= document.getElementById('myImage4');
                if (image.src.match('starclose')){
                    image.src="staropen.webp";
                   
                }
                else{
                    image.src="starclose.png"; 
                    alert("Thank You For Giving 4 star Ratings ");
                }
                
                }
                function rating5(){
                    var image= document.getElementById('myImage5');
                    if (image.src.match('starclose')){
                        image.src="staropen.webp";
                       
                    }
                    else{
                        image.src="starclose.png"; 
                        alert("Thank You For Giving 5 star Ratings ");
                    }
                    
                    }
                    function buy(){
                let a=    prompt("Type 'Yes' To Buy Ticket");
                    if (a=='Yes'|| a=='yes'){
                        alert("Great Choice ! Thank You For Buying Ticket ");
                    }
                    else{
                    alert("Thank You For Visting ")
                    }}


