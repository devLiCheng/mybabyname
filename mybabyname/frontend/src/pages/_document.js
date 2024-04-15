import Document, { Html, Head, Main, NextScript } from 'next/document';  
  
class MyDocument extends Document {  
  static async getInitialProps(ctx) {  
    const initialProps = await Document.getInitialProps(ctx);  
    return { ...initialProps };  
  }  
  




  render() {  
    return (  
      <Html>  
        <Head> 
	      <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NGC665ZW');`,
            }}
          />

	    <script
            dangerouslySetInnerHTML={{
              __html: `
                var _hmt = _hmt || [];
                (function() {
                  var hm = document.createElement("script");
                  hm.src = "https://hm.baidu.com/hm.js?7b2d2160ddc4255e347502697aafa3a3";
                  var s = document.getElementsByTagName("script")[0];
                  s.parentNode.insertBefore(hm, s);
                })();
              `,
            }}
          />

          <title>宝宝取名网-精选宝宝取名大全-免费取名-mybabyname.cn</title>  
          <meta name="keywords" content="免费给宝宝取名的网站" />  
          <meta name="description" content="这是给宝宝取名的网站，好的名字是人生的起点，伴随一生的运气，使您的宝宝在人生不同阶段都能给人最好的印象" />  
          <meta name="robots" content="index,follow" />  
          {/* 其他 head 标签 */}  
        </Head>  
        <body>  
          <iframe  
            src="https://www.googletagmanager.com/ns.html?id=GTM-NGC665ZW"  
            height="0"  
            width="0"  
            style={{ display: 'none', visibility: 'hidden' }}  
          />  
          <Main />  
          <NextScript />  
        </body>  
      </Html>  
    );  
  }  
}  
  
export default MyDocument;
