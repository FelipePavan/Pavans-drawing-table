let numeroQuadrados = 30000;   
let draw = false;


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

document.onclick = function() {
        
    if (draw) {
        document.body.style.cursor = "default";
    } else {
        document.body.style.cursor = "url('brush128'), default";
    }
        
    draw = !draw;
}
    




