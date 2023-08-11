"use client";
import undraw_summer_1wi4 from "../../public/undraw_summer_1wi4.svg";
import Image from "next/image";
import { Col, Row, Input, Divider, Form } from "antd";
import { UserOutlined } from '@ant-design/icons';
import { useEffect, useState } from "react";
import { ClientToRegister } from "@/models/client";


type RegisterEmailFormProps = {
    setIsNextAvailable: (isNextAvailable: boolean) => void;
    setClientInfo: (clientInfo: any) => void;
    clientInfo: ClientToRegister;
};

export default function RegisterEmailForm({setIsNextAvailable, setClientInfo, clientInfo}): React.FC<RegisterEmailFormProps> {
    const [email, setEmail] = useState<string>("");
    const validEmailPattern: RegExp = new RegExp("^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"); 

    useEffect(() => {
        setClientInfo((prev: ClientToRegister) => ({...prev, email}));
        if (email.length > 0 && IsValidEmail(email)) {
            setIsNextAvailable(true);
        } else {
            setIsNextAvailable(false);
        }
    }, [email]);

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length > 0 ) {
            setEmail(e.target.value);
        }
    };

    const IsValidEmail = (email: string) => {
        return validEmailPattern.test(email);
    }

    return (
        <Row>
            <Col span={6}><Image src={undraw_summer_1wi4} style={{maxWidth: '400px', height: 'auto'}} alt="add email"/></Col>
            <Col span={12}>
                <h2>Ingrese su email</h2>
                <Form
                >
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Ingrese un email valido', pattern: validEmailPattern  }]}
                        initialValue={clientInfo.email}
                        >
                        <Input onChange={handleEmailChange} />
                    </Form.Item>
                </Form>
                
                <Divider />
                <p>
                    Ingrese su email para continuar con el registro. Recibirá un email con un link para continuar con el registro.
                </p>
            </Col>
        </Row>
    )
}