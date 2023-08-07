"use client";
import undraw_summer_1wi4 from "../../public/undraw_summer_1wi4.svg";
import Image from "next/image";
import { Col, Row, Input, Divider } from "antd";
import { UserOutlined } from '@ant-design/icons';
import { useEffect } from "react";
import { type } from "os";

type RegisterEmailFormProps = {
    setIsNextAvailable: (isNextAvailable: boolean) => void;
};

export default function RegisterEmailForm({setIsNextAvailable}): React.FC<RegisterEmailFormProps> {

    useEffect(() => {
        setIsNextAvailable(false);
    }, []);

    const handleEmailChange = (e) => {
        if (e.target.value.length > 0 && IsValidEmail(e.target.value)) {
            setIsNextAvailable(true);
        } else {
            setIsNextAvailable(false);
        }
    };

    const IsValidEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    return (
        <Row>
            <Col span={6}><Image src={undraw_summer_1wi4} style={{maxWidth: '400px', height: 'auto'}} alt="add email"/></Col>
            <Col span={12}>
                <h2>Ingrese su email</h2>
                <Input 
                    size="large" 
                    placeholder="large size" 
                    prefix={<UserOutlined />}
                    onChange={handleEmailChange}
                />
                <Divider />
                <p>
                    Ingrese su email para continuar con el registro. Recibirá un email con un link para continuar con el registro.
                </p>
            </Col>
        </Row>
    )
}