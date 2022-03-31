import data from "../../data/data.json"


export default function addCats(req, res){
    console.log("Request body",req.body);

    data.push(req.body)

    console.log('data is now', data);

    res.send('Aloha from add Products')


}