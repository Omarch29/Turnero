"use client";
import payment from "../../public/undraw_pay_online_re_aqe6.svg";
import Image from "next/image";
import { Col, Row, Input, Divider } from "antd";
import { UserOutlined } from '@ant-design/icons';
import CreditCardComponent from "../credit-card/credit-card-component";


export default function RegisterPaymentForm() {
    return (
        <Row>
            <Col span={6}><Image src={payment} style={{maxWidth: '400px', height: 'auto'}} alt="add email"/></Col>
            <Col span={12}>
                <h4>Ingrese su tarjeta de credito para continuar con el pago</h4>
                <CreditCardComponent/>
            </Col>
        </Row>
    )
}