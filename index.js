const { default: axios } = require("axios");
// const iffat = require("simply_find_arms_num")
const express = require("express")
const app = express();

app.use(express.json())
app.get("/todo",async (req,res)=>{
    let url = "https://jsonplaceholder.typicode.com/todos/"
    let value = await axios.get(url).catch(function(err){return{error:err}})
    return res.send(value.data)
})

app.post("/insert_data",async (req,res)=>{
    let url = "http://localhost:3001/api/v1/add_user"
    var bodydata =req.body
    console.log(req.body)
    let value = await axios.post(url,bodydata).catch(function(err){return {error:err}})
    console.log(value);
    return res.send(value.data)

})

app.listen(3051,function(){console.log("Server is running on port ")})

// console.log(iffat(153))