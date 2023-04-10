import { Form,Input,Button,InputNumber } from 'antd'
import { useState } from 'react'
import axios from 'axios'


export const Bisection=()=>{
    const [equation,Setequation] = useState('');
    const [xl,Setxl] = useState(null);
    const [xr,Setxr] = useState(null);
    const [summy,Setsummy] = useState([]);
    const [showtable,Setshow] = useState(false);


    const alertme=()=>{
        axios.post('http://localhost:1111/bisection',{equation,xl,xr})
        .then(res=>{ //ข้อมูลที่ส่งกลับมาจาก backend แล้วเก็บไว้ในตัวแปร res
            Setsummy(res.data)
            Setshow(true)
        })
        .catch(err=>alert(err));
    }

    return(
        <div>
            <h1> BISECTION </h1>
            <Form  onFinish={alertme}       >
                 
                <Form.Item name='function' label='FUNCTION: ' rules={[
                    {
                        require: true,
                        message: 'Please input your number',
                    },
                ]}>
                    <Input  onChange={(e)=>Setequation(e.target.value)} style={{width:300}}/>
                </Form.Item>

                <Form.Item name='xl' label='XL: '>
                    <InputNumber onChange={    e => Setxl(e)   }  style={{width:300}}/>
                </Form.Item>

                <Form.Item name='xr' label='XR: '>
                    <InputNumber   onChange={    e => Setxr(e)   }  style={{width:300}}/>
                </Form.Item>

                <Button htmlType='submit' type='primary' >CALCULATE</Button>

            </Form>
            <br/>
            <br/>
           <div>
        
                {showtable && <table >
               
                        <tr>
                            <th>iteration</th>
                            <th>xm</th>
                            <th>xl</th>
                            <th>xr</th>
                        </tr>
                 
                        {summy.map((element,index)=>(
                            <tr key={index}>
                                <td>{element.iteration}</td>
                                <td>{element.xm}</td>
                                <td>{element.xl}</td>
                                <td>{element.xr}</td>
                            </tr>
                        ))}
                </table>}
            </div>
        </div>
    )
}