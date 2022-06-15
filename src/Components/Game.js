
export default function Game({ArrayClick,handleclick}){
    return(
        <div className="Container">
            {ArrayClick.map((item,index)=>{
                if(item===""){
                return <div key={index} className="box" onClick={()=>handleclick(index)}>{item}</div>
                }else{
                    return(
                    <div key={index} className="box">{item}</div>
                    )
                }
            })}
        </div>
    )
}