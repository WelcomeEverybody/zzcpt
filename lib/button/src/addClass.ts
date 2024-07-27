/**
 * 
 * @param props 属性
 * @param name css前缀
 * @returns string
 */
const addClass = (props:any,name:string) => {
  if(!name){
    throw new Error('name is required')
  }
  let classList:string[] = [];
  const skip = [false];
  for(let i in props){
    if(i == 'loading')continue;
    if(!skip.includes(props[i])){
      if(props[i] == 'default'){
        classList.push(`${name}-${i}-${props[i]}`);
      }else if(props[i] == true){
        classList.push(`${name}-${i}`);
      }else{
        classList.push(`${name}-${props[i]}`);
      }
    }
  }
  return classList;
}
export default addClass