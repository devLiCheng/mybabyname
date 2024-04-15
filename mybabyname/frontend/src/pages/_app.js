import App from "next/app"
import "../../public/css/header.css"
import "../../public/css/first-page.css"
import "../../public/css/two-page.css"
import "../../public/css/three-page.css"
import "../../public/css/form.css"
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

MyApp.getInitialProps = async (ctx) => {
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const json = await res.json()
  return {
    ...App.getInitialProps(ctx)
  };
}
