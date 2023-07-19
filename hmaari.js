const search = ()=>{
    const searchbox=document.getElementById("search_item").value.toUpperCase();
    const storeitem=document.getElementById("product-list")
    const product = document.querySelectorAll(".products")
    const pname = storeitem.getElementsByTagName("h2")
    for(var i=0;i<pname.length;i++){
        let match = product[i].getElementsByTagName('h2')[0];
        if(match){
            let textvalue = match.textContent || match.innerHTML 
            if(textvalue.toUpperCase().indexOf(searchbox) > -1){
                product[i].computedStyleMap.display = "";
            }else{
                product[i].computedStyleMap.display = "none";   
            }
        }

         
    }
}