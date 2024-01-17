
let allEmojiBox=document.getElementById("allEmojiBox");
let emoji_search=document.getElementById("emoji_search");

function emojishow(){
    console.log("fuction is working")
    emojiList.forEach((val)=> {
    let Tr=document.createElement("tr");
    Tr.innerHTML=`<td class="emojis">${val.emoji}</td>  <td class="aliases">${val.aliases}<td class="desc">${val.description}</td> </td>`;
    allEmojiBox.appendChild(Tr);
});
}

 function  updatemoji(){
    let x=emoji_search.value.toLowerCase();
    allEmojiBox.innerHTML=" ";
    // category
    let a=emojiList.filter((e)=>{

        return e.category.toLowerCase().includes(x);
       
    })
    a.forEach((val)=>{
        let Tr=document.createElement("tr");
        Tr.innerHTML=`<td class="emojis">${val.emoji}</td>  <td class="aliases">${val.aliases}</td> <td class="desc">${val.description}</td>`;
        allEmojiBox.appendChild(Tr);
    })
 //aliases
     let b=emojiList.filter((e)=>{
        return e.aliases.some((event)=>{
            return event.includes(x);
        })
     })
     console.log("b is run"+a)

  b.forEach((val)=>{
        let Tr=document.createElement("tr");
        Tr.innerHTML=`<td class="emojis">${val.emoji}</td>  <td class="aliases">${val.aliases}</td> <td class="desc">${val.description}</td>`;
        allEmojiBox.appendChild(Tr);
    })
    
   
//description
    let c=emojiList.filter((e)=>{
        return e.description.toLowerCase().includes(x);
        
     })
   c.forEach((val)=>{
        let Tr=document.createElement("tr");
        Tr.innerHTML=`<td class="emojis">${val.emoji}</td> <td class="aliases">${val.aliases}</td> <td class="desc">${val.description}</td> `;
        allEmojiBox.appendChild(Tr);
    })
//tag
    let d=emojiList.filter((e)=>{
        return e.tags.some((event)=>{
            return event.includes(x);
        })
     })
   d.forEach((val)=>{
        let Tr=document.createElement("tr");
        Tr.innerHTML=`<td class="emojis">${val.emoji}</td>  <td class="aliases">${val.aliases}</td><td class="desc">${val.description}</td>`;
        allEmojiBox.appendChild(Tr);
    })
    if(a.length==0 && b.length==0 && c.length==0 && d.length==0 ){
        let Tr=document.createElement("tr");
        Tr.classList.add("not_found")
        Tr.innerHTML=`<tr >Not found !!</tr>`
        allEmojiBox.appendChild(Tr);

    }

}

emoji_search.addEventListener(("keyup"),()=>{
    updatemoji();
    
})
emojishow();