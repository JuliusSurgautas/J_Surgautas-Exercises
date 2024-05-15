function longest(str){ 
    
  str = str.match(/[a-zA-Z0-9]+/gi); 

  let largest = ""; 
       

  for(let i = 0; i < str.length; i++){ 
    
      if(str[i].length > largest.length){ 
      largest = str[i] 
      } 
  } 
  return largest; 
  } 
   
  console.log(longest("Žmogus – tai trupmena, kurios skaitiklis yra tai, kuo žmogus yra, o vardiklis tai, kuo jis isivaizduoja esąs. Juo didesnis vardiklis, tuo mažesnė trupmena ir, kai vardiklis lygus begalybei, tai trupmena lygi nuliui.")) 