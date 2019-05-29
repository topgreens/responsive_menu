function Main(){ 
    this.Execute = function(){
        const nav = document.getElementById("navId");
        const button = document.getElementById("menu2");
        button.addEventListener("click", function(){
            console.log("the code");
            nav.classList.toggle("open");
        });
    }
}
new Main().Execute();