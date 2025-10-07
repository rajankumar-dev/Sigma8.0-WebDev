export default function sayHello({userName, textColor}){
    let styel = {color:textColor};
    return <h1 style={styel} >Hello, {userName}</h1>;

}