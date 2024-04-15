import styles from './index.css'; // 引入 Less 文件
import Header from "@/components/header/index"
import FirstPage from "@/components/first-page/index"
import TwoPage from "@/components/two-page/index"
import ThreePage from "@/components/three-page/index"
import Form from "@/components/form/index"
import {useState} from "react"
export default function Index({info}){
  const [visible, setVisible] = useState(false)
  const toggleModal = bool => setVisible(bool)
  return(<div className={styles.main}>
    <Header visible={visible} toggleModal={toggleModal}/>
    <FirstPage />
    <TwoPage />
    <ThreePage />
    <Form visible={visible} toggleModal={toggleModal}/>
  </div>)
}