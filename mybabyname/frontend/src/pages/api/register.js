import {api} from "@/request/index"


// export default async function addUser(body) {
//     try {
//         await api.post('/addUser', body);
//     } catch (error) {
//         console.log(error)
//     }

//     // const { method, body } = req;
//     // console.log("req", req)
//     // const METHOD = method.toUpperCase()
//     // switch (METHOD) {
//     //   case 'POST':
//     //     const response = 
//     //     // 返回数据
//     //     res.status(200).json(response.data);
//     //     break;
//     //   default:
//     //     res.setHeader('Allow', ['GET']);
//     //     res.status(405).end(`Method ${method} Not Allowed`);
//     // }
//   }



import axios from 'axios';
const host = process.env.NEXT_PUBLIC_HOST

export default async function handler(req, res) {
  const { method} = req;
  const param  = req.body
  const url = host + 'addUser';
  try {
    const response = await axios.post(url, param);
    res.status(200).json({success: true, data:response.data});
  } catch (error) {
    // res.status(500).json({ error: 'Error fetching data' });
    res.status(405).json({ success: false, message: 'Only POST requests are allowed' });
  }
}