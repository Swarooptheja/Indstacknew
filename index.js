let express = require("express")
let fetch=require('node-fetch')
let app = express()

app.use(express.json())
app.use(express.text())
let olddata=()=>{
    return  old=fetch('https://jsonplaceholder.typicode.com/albums')
        .then(res => res.json())
        .then((res)=>{
            return res
        })
}
let newdata=()=>{
    return fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>{
        return res.json()
    })
    .then((res)=>{
      return res

    })
   

}

    app.get("/", async(req, res) => {
        let api=req.body
        if(api=="new"){
            Promise.all([
                newdata(),
                olddata()
            ])
            .then(([ndata,odata])=>{
                let arr1=[]
                let o=odata|| [];
                let n=ndata|| [];
                o.forEach((el)=>{
                arr1.push(Object.keys(el))
                })
                let arr2=[]
                n.forEach((el)=>{
                    console.log(el,'el')
                arr2.push(Object.values(el))
                })
                console.log(arr2,"arr1")
                let main=[]
                for(let i=0;i<arr1.length;i++){
                let newobj={}
                    for(let j=0;j<arr1[0].length;j++){
                        var char=arr1[i][j]
                        newobj[char]=arr2[i][j]
                    }
                main.push(newobj)

                }
                res.send(main)
            }).catch((err)=>{
                console.log(err)
            })
           
        }
        
        else if(api=="old"){
            olddata()
            .then((r)=>{
                console.log(r)
                res.send(r)
            })
        }
        
    })
app.listen(8000, () => {
    console.log("8000 port is running")
})