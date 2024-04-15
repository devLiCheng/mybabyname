// export function getStaticProps(){
//   return {
//     props:{
//       info:"about info"
//     }
//   }
// }


export default function About({info, data}){
  return(<div>
    <p>data: {data}</p>
    </div>)
}

// 创建一个单独的函数来请求接口数据
async function fetchData() {
  const apiUrl = 'http://localhost:3000/api/about'; // 替换为实际的接口地址
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data;
}


export async function getServerSideProps(content){
   const data = await fetchData();
  console.log('data', data)
 return{
    props: {
      data: data.name
    }
 }
}