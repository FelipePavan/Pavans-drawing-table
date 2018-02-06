let numeroQuadrados = 30000;   


for (let i = 0; i < numeroQuadrados; i++) {
    let div = document.createElement("DIV");
    document.getElementById('fuck').appendChild(div);
    let id = String(i);
    
    div.setAttribute ('id', id);
    div.onmouseover = function() {

        idStr = Number(this.id);
        
        id50 = idStr + 50;
        id50Str = String(id50);


        console.log();

           
        
        
        
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

