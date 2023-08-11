"use client";
import details from "../../public/undraw_profile_details_re_ch9r.svg";
import Image from "next/image";
import { Col, Row, Input, Divider, Form } from "antd";
import { ShopOutlined } from '@ant-design/icons';
import { useEffect, useState } from "react";
import { ClientToRegister } from "@/models/client";



export default function RegisterShopForm({setIsNextAvailable, setClientInfo, clientInfo}) {
    const { TextArea } = Input;
    const [shopName, setShopName] = useState<string>("");
    const validShopNamePattern: RegExp = new RegExp("^[a-zA-Z0-9_]*$");
    const [form] = Form.useForm();

    useEffect(() => {
        setClientInfo((prev: ClientToRegister) => ({...prev, shopName}));
        if (shopName.length > 0 && CheckValidShopName(shopName)) {
            setIsNextAvailable(true);
        } else {
            setIsNextAvailable(false);
        }
    }, [shopName]);

    useEffect(() => {
        
        return () => {

            const { descripcion, logoUrl } = form.getFieldsValue();
            setClientInfo((prev: ClientToRegister) => ({...prev, descripcion, logoUrl}));

        };
    }, []);

    const CheckValidShopName = (shopName: string) => {
        if (shopName.length < 4) {
            return false;
        }
        return validShopNamePattern.test(shopName);
    }

    const handleShopChange = (e: React.ChangeEvent<HTMLInputElement>) => {
       
        if (e.target.value.length > 0 && CheckValidShopName(e.target.value)) {
            setShopName(e.target.value);
        } else {
            setShopName("");
        }
    };


    return (
        <Row>
           <col span={6}></col>
            <Col span={12}>
                <h2>Ingrese la informacion de su Negocio</h2>
                <h4>Nombre que se mostrara de su negocio en la URL</h4>
                <p>No se puede ingresar espacios o caracteres especiales</p>
                <Form form={form}>
                    <Form.Item
                        initialValue={clientInfo?.shopName}
                        rules={[{ required: true, message: 'Ingrese un nombre de negocio valido', pattern: validShopNamePattern }]}
                        name="shopName"
                        >
                        <Input size="large" 
                        placeholder="NombreDeNegocio" 
                        addonBefore="http://turnero.com.ar/" 
                        onChange={handleShopChange}
                        />
                    </Form.Item>
                    <Form.Item
                     name="logoUrl"
                     initialValue={clientInfo?.logoUrl}
                     >
                        <h4>Url de su logo</h4>
                        <Input 
                        size="large" placeholder="large size" prefix={<ShopOutlined />} />
                    </Form.Item>
                    <Form.Item
                        name="descripcion"
                        initialValue={clientInfo?.descripcion}
                    >
                        <h4>Descripcion de su negocio</h4>
                        <TextArea
                            placeholder="Describa su negocio en 3 lineas"
                            autoSize={{ minRows: 3, maxRows: 5 }}
                        />
                    </Form.Item>
                </Form>
            </Col>
            <Col span={6}><Image src={details} style={{maxWidth: '400px', height: 'auto'}} alt="add email"/></Col>
        </Row>
    )
}