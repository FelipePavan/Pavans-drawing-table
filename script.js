let numeroQuadrados = 30000;   
let draw = true;


for (let i = 0; i < numeroQuadrados; i++) {
    let div = document.createElement("DIV");
    document.getElementById('fuck').appendChild(div);
    let id = String(i);
    
    div.setAttribute ('id', id);
    div.onmouseover = function() {
        
        
        if (draw) {
            if (this.style.backgroundColor == '') {
                this.style.backgroundColor = 'rgb(255,0,0)';    
                document.getElementById(String(Number(this.id) + 1) ).style.backgroundColor = "blue";
                document.getElementById(String(Number(this.id) - 1) ).style.backgroundColor = "blue";
                
                
            } else if (this.style.backgroundColor == 'rgb(255, 0, 0)') {
                this.style.backgroundColor = 'rgb(200,0,0)';
                

            } else if (this.style.backgroundColor == 'rgb(200, 0, 0)') {
                this.style.backgroundColor = 'rgb(150,0,0)';
                

            } else if (this.style.backgroundColor == 'rgb(150, 0, 0)') {
                this.style.backgroundColor = 'rgb(100,0,0)';

            } else if (this.style.backgroundColor == 'rgb(100, 0, 0)') {
                this.style.backgroundColor = 'rgb(50,0,0)';

            } else if (this.style.backgroundColor == 'rgb(50, 0, 0)') {
                this.style.backgroundColor = 'rgb(25,0,0)';
            } else if (this.style.backgroundColor == 'rgb(25, 0, 0)') {
                this.style.backgroundColor = 'rgb(255,0,0)';
            }
        }
        
    }
    
    
    
}

document.onkeypress = function(evt) {
    console.log(evt);
    evt = evt || window.event;
    var charCode = evt.keyCode || evt.which;
     
    if (charCode === 32) {
        draw = !draw;
    }

};


