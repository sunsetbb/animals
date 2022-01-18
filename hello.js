document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
    anchor.addEventListener("click",function(g){
        g.preventDefault();             //this is used because default jumps to the page without animation
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});



const element1 = document.getElementById("hiddenMessage");
var count= 3;
const catnames = [];
catnames[0]= "Maine Coon";
catnames[1]=  "Ragdoll";
catnames[2]=  "Birman";
var fal = -1;
const falnames = []
falnames[0] = "Told you not to click more. I don't have more names.(random)";
falnames[1] = "Saying again to you, NO MORE CATS.(random)"
falnames[2] = "Guess what, I actually like pigs more. Just stop clicking no more cats.(random)"

function revealMessage(){
    document.getElementById("hiddenMessage").style.display = 'block';
    if (count == 0 ){
        if (fal < 0){
            element1.innerHTML = "There is no more cats";
            fal += 1;
        }
        else if (fal >= 0){
            var newval = 0;
            newval = Math.floor(Math.random() * 3);
            element1.innerHTML = falnames[newval];
        }
        
 

    }
    else if (count>=1){
        count -=1
        element1.innerHTML = "Cat name" + (count + 1) +" :" + catnames[count];
        catnames[count];
    }

}





document.getElementById("time").innerHTML = "Date : " + Date();
