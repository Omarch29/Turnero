"use client";
import details from "../../public/undraw_profile_details_re_ch9r.svg";
import Image from "next/image";
import { Col, Row, Input, Divider } from "antd";
import { ShopOutlined } from '@ant-design/icons';



export default function RegisterShopForm() {
    const { TextArea } = Input;
    return (
        <Row>
           <col span={6}></col>
            <Col span={12}>
                <h2>Ingrese la informacion de su Negocio</h2>
                <h4>Nombre que se mostrara de su negocio en la URL</h4>
                <p>No se puede ingresar espacios o caracteres especiales</p>
                <Input size="large" placeholder="large size" addonBefore="http://turnero.com.ar/" />
                <h4>Url de su logo</h4>
                <Input size="large" placeholder="large size" prefix={<ShopOutlined />} />
                <h4>Descripcion de su negocio</h4>
                <TextArea
                    placeholder="Describa su negocio en 3 lineas"
                    autoSize={{ minRows: 3, maxRows: 5 }}
                />
              
            </Col>
            <Col span={6}><Image src={details} style={{maxWidth: '400px', height: 'auto'}} alt="add email"/></Col>
        </Row>
    )
}