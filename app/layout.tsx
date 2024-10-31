
import "./globals.css";

type Mainlayout ={
  children: React.ReactNode;
  
};
const RootLayout : React.FC<Mainlayout> = (props) => {
  console.log(props, "props");
  return (
    <html>
      <head></head>
      <body className="font-style: italic font-mono" >
        {props.children}
      </body>
    </html>
  );
};

export default RootLayout;
