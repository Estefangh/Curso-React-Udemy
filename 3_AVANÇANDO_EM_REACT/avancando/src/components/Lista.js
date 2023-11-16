import {useState} from 'react'

const Lista = () => {
    const [list] = useState(["Estefan", "Michel", "Milton", "Neiva"]);


  return (
    <div>
        <ul>
            {list.map((item) =>(
                <li>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default Lista;