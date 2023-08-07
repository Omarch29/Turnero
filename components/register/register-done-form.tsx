"use client";
import Image from "next/image";
import { Col, Row, Input, Divider } from "antd";
import { CheckCircleFilled } from '@ant-design/icons';


export default function RegisterDone() {
    return (
        <Row>
            <Col span={6}><CheckCircleFilled style={{fontSize: '100px', color: '#00aa00'}} /></Col>
            <Col span={12}>
                <h4>Registro Completo</h4>
              
            </Col>
            
        </Row>
        
    )
}