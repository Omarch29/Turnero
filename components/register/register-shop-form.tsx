"use client";
import details from "../../public/undraw_profile_details_re_ch9r.svg";
import Image from "next/image";
import { Col, Row, Input, Divider } from "antd";
import { ShopOutlined } from '@ant-design/icons';
import { useState } from "react";



export default function RegisterShopForm({setIsNextAvailable, setClientInfo, clientInfo}) {
    const { TextArea } = Input;
    const [shopName, setShopName] = useState<string>("");
    const [IsValidShopName, setIsValidShopName] = useState<boolean>(false);
    
    const handleShopChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsValidShopName(CheckValidShopName(e.target.value));
        setIsNextAvailable(IsValidShopName);
        if (e.target.value.length > 0 && IsValidShopName) {
            setShopName(e.target.value);
        } else {
            setShopName("");
        }
    };

    const CheckValidShopName = (shopName: string) => {
        if (shopName.length < 4) {
            return false;
        }
        return /^[a-zA-Z0-9_]*$/.test(shopName);
    }

    return (
        <Row>
           <col span={6}></col>
            <Col span={12}>
                <h2>Ingrese la informacion de su Negocio</h2>
                <h4>Nombre que se mostrara de su negocio en la URL</h4>
                <p>No se puede ingresar espacios o caracteres especiales</p>
                <Input size="large" 
                value={clientInfo?.shopName}
                placeholder="NombreDeNegocio" 
                addonBefore="http://turnero.com.ar/" 
                onChange={handleShopChange}
                status={IsValidShopName ? "" : "error"}
                />
                <h4>Url de su logo</h4>
                <Input 
                value={clientInfo?.logoUrl}
                size="large" placeholder="large size" prefix={<ShopOutlined />} />
                <h4>Descripcion de su negocio</h4>
                <TextArea
                    value={clientInfo?.descripcion}
                    placeholder="Describa su negocio en 3 lineas"
                    autoSize={{ minRows: 3, maxRows: 5 }}
                />
              
            </Col>
            <Col span={6}><Image src={details} style={{maxWidth: '400px', height: 'auto'}} alt="add email"/></Col>
        </Row>
    )
}