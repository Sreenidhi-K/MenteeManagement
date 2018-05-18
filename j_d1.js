//On clicking ADD button

document.getElementById("button1").addEventListener("click",  function addm() {
    var rates = document.getElementsByName('rate');
    var rate_value;
    var i;
for( i = 0; i < rates.length; i++){
    if(rates[i].checked){
        rate_value = rates[i].value;
        break;
    }
}
   var name=document.getElementById("name").value;
    var comm=document.getElementById("msg").value;
    localStorage.setItem(name,rate_value+comm);
   document.getElementById("name").value=""; 
    document.getElementById("msg").value="";
    rates[i].checked=false;
    viewm();
    
    
});
//something
document.getElementById("list_click").addEventListener("click", viewm() );

//func to display the list
function viewm(){
    
    var b=document.getElementById("bbb");
    var div=document.getElementById("view_men");
    
    b.removeChild(div);
   
    var new_div=document.createElement('div');
    new_div.setAttribute("id","view_men");
    b.appendChild(new_div);
    if(localStorage.length >0)
        {
            var loc_arr= new Array();
            for( i=0;i<localStorage.length;i++)
                loc_arr.push(new Object());
            for( i=0;i<localStorage.length;i++)
                {
                    loc_arr[i].n=localStorage.key(i);
                    loc_arr[i].other=localStorage.getItem(localStorage.key(i));
                    loc_arr[i].rate=(loc_arr[i].other)[0];
                    loc_arr[i].other= loc_arr[i].other.substr(0, 0) + ' ' + loc_arr[i].other.substr(1);
                    
                    var p= document.createElement("p");
                    p.setAttribute("id",loc_arr[i].n);
                    p.setAttribute("class","box_info");
                    p.textContent=loc_arr[i].n +" --- "+loc_arr[i].rate+" --- "+ loc_arr[i].other;
                    if(loc_arr[i].rate==1) p.setAttribute("style","background-color:red");
                    else if(loc_arr[i].rate==2)p.setAttribute("style","background-color:palevioletred");
                    else if(loc_arr[i].rate==3)p.setAttribute("style","background-color:goldenrod");
                    else if(loc_arr[i].rate==4)p.setAttribute("style","background-color:limegreen");
                    else if(loc_arr[i].rate==5)p.setAttribute("style","background-color:green");
                    
                    // create delete button with id=name and class=deel
                    var by=document.createElement("button");
                     by.setAttribute("id",loc_arr[i].n);
                    by.setAttribute("type","button");
                    by.setAttribute("class","deel");
                    by.innerHTML="Del";
                    by.setAttribute("style","position: relative;right:-10px;color: white; border-style: groove;border-color: white;background-color: blueviolet;width: 100px;font-size: 20px;padding: 10px;");
                   
                
                    
                     // create edit button with id=name and class=edo
                    var edd=document.createElement("button");
                     edd.setAttribute("id",loc_arr[i].n);
                    edd.setAttribute("class","edo");
                    edd.setAttribute("type","button");
                    edd.innerHTML="edit";
                    edd.setAttribute("style","position: relative;right:-100px;color: white; border-style: groove;border-color: white;background-color: blueviolet;width: 100px;font-size: 20px;padding: 10px;");
                    new_div.appendChild(p);
                    new_div.appendChild(by);
                    new_div.appendChild(edd);
                    here_u();
                    go_edit();
                     expand();
                }
        }
    else
        {
         var q= document.createElement("p");  
            q.textContent="No entries so far"
        new_div.appendChild(q);
        }
    
}

// to sort and displays the updated list
document.getElementById("b22").addEventListener("click",  function sortit(){
      if(localStorage.length >0)
        {
            var loc_arr= new Array();
            for( i=0;i<localStorage.length;i++)
                loc_arr.push(new Object());
            for( i=0;i<localStorage.length;i++)
                {
                    loc_arr[i].n=localStorage.key(i);
                    loc_arr[i].other=localStorage.getItem(localStorage.key(i));
                    loc_arr[i].rate=(loc_arr[i].other)[0];
                    loc_arr[i].other= loc_arr[i].other.substr(0, 0) + ' ' + loc_arr[i].other.substr(1);
                }
            for(i=0;i<localStorage.length;i++)
                for(j=0;j<(localStorage.length)-i-1;j++)
                    if(loc_arr[j].rate<=loc_arr[j+1].rate)
                        {
                            var temp=loc_arr[j];
                            loc_arr[j]=loc_arr[j+1];
                            loc_arr[j+1]=temp;
                        }
             var b=document.getElementById("bbb");
            var div=document.getElementById("view_men");
    
            b.removeChild(div);
   
            var new_div=document.createElement('div');
            new_div.setAttribute("id","view_men");
            b.appendChild(new_div);
            for(i=0;i<localStorage.length;i++)
                {
                    var p= document.createElement("p");
                    p.setAttribute("id",loc_arr[i].n);
                    p.setAttribute("class","box_info");
                    p.textContent=loc_arr[i].n +" --- "+loc_arr[i].rate+" --- "+ loc_arr[i].other;
                    if(loc_arr[i].rate==1) p.setAttribute("style","background-color:red");
                    else if(loc_arr[i].rate==2)p.setAttribute("style","background-color:palevioletred");
                    else if(loc_arr[i].rate==3)p.setAttribute("style","background-color:goldenrod");
                    else if(loc_arr[i].rate==4)p.setAttribute("style","background-color:limegreen");
                    else if(loc_arr[i].rate==5)p.setAttribute("style","background-color:green");
                  
                
                
                    var by=document.createElement("button");
                     by.setAttribute("id",loc_arr[i].n);
                    by.setAttribute("type","button");
                    by.setAttribute("class","deel");
                    by.innerHTML="Del";
                    by.setAttribute("style","position: relative;right:-10px;color: white; border-style: groove;border-color: white;background-color: blueviolet;width: 100px;font-size: 20px;padding: 10px;");
                    
                   
                    var edd=document.createElement("button");
                     edd.setAttribute("id",loc_arr[i].n);
                    edd.setAttribute("type","button");
                    edd.setAttribute("class","edo");
                    edd.innerHTML="edit";
                    edd.setAttribute("style","position: relative;right:-100px;color: white; border-style: groove;border-color: white;background-color: blueviolet;width: 100px;font-size: 20px;padding: 10px;");
                    new_div.appendChild(p);
                    new_div.appendChild(by);
                    new_div.appendChild(edd);
                     here_u();
                    go_edit();
                    expand();
                   
                }
        
        }
});

//delete func
function here_u()
{
var del_list=document.getElementsByClassName("deel");
for(var i=0;i<del_list.length;i++)
    {
        
        del_list[i].addEventListener("click", function call_del(e){
            
            e.preventDefault();
            localStorage.removeItem(this.id);
            viewm();
            
        });
        
    }
}

// expand func
function expand()
{
    var box_list=document.getElementsByClassName("box_info");
    for(var i=0;i<box_list.length;i++)
        {
            box_list[i].addEventListener("click",large,false);
        }
}
//large func

function large(e)
{
    e.preventDefault();
    id_new=this.id;
    console.log(id_new);
    
}
//edit func
function go_edit()
{
    var edit_list=document.getElementsByClassName("edo");
    for(var i=0;i<edit_list.length;i++)
        {
            edit_list[i].addEventListener("click",call_edit,false);
              
                
                
          
        }
    
}
    
//edit fun
var iddo;
var fin_edit;
function call_edit (e){
                
                e.preventDefault();
                iddo=this.id;
                var but_add=document.getElementById("button1");
                but_add.disabled=true;
                 but_add.setAttribute("style","background-color:lightgray");
                console.log(iddo);
                 fin_edit=document.getElementById("button2");
                fin_edit.disabled=false;
                fin_edit.setAttribute("style","background-color:lawngreen");
                 var name=document.getElementById("name");
                    var comm=document.getElementById("msg");
                    var other=localStorage.getItem(iddo);
                    var rate=other[0];
                    other= other.substr(0, 0) + ' ' +other.substr(1);
                    console.log(other);
                    
                    var r_item=document.getElementById("r_"+rate);
                    r_item.checked="true";
                    name.value=iddo;
                    comm.value=other;
                
                
                fin_edit.addEventListener("click",nest_edit,false);
                }
//nest edit
function nest_edit (ev){
                    ev.preventDefault();
                    var rates = document.getElementsByName('rate');
                    var rate_value;
                    var i;
                    for( i = 0; i < rates.length; i++){
                        if(rates[i].checked){
                        rate_value = rates[i].value;
                            break;
                                }
                        }
                    var name=document.getElementById("name").value;
                    var comm=document.getElementById("msg").value;
                    localStorage.removeItem(iddo);
                    localStorage.setItem(name,rate_value+comm);
                    document.getElementById("name").value=""; 
                    document.getElementById("msg").value="";
                    rates[i].checked=false;
                    var but_add=document.getElementById("button1");
                    but_add.disabled=false;
                    but_add.setAttribute("style","background-color:lawngreen");
                    var fin_edit=document.getElementById("button2");
                    fin_edit.setAttribute("style","background-color:lightgray");
                    fin_edit.disabled=true;
                    viewm();
                          
                    }
 