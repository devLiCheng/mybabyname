export default function handler(req, res){
  if(req.method === "get"){
    res.status(200).json({name:"zhangsna"})
  }
  res.status(200).json({name:"lisi"})
}