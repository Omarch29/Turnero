"use client";
import { Button, Card, Steps } from "antd";
import { CreditCardOutlined, SmileOutlined, ShopOutlined, UserOutlined, ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import RegisterEmailForm from "./register-email-form";
import { useState } from "react";
import RegisterShopForm from "./register-shop-form";
import RegisterPaymentForm from "./register-payment-form";
import RegisterDone from "./register-done-form";
import { ClientToRegister } from "@/models/client";

export default function RegisterForm() {
  const [clientInfo, setClientInfo] = useState<ClientToRegister>({
    nombre_completo: '',
    shopName: '',
    descripcion: '',
    email: ''
  });
  const [currentStep, setCurrentStep] = useState(0);
  const [isNextAvailable, setIsNextAvailable] = useState(true);
  const [items, setItems] = useState([
    {
      title: 'Email',
      status: 'process',
      icon: <UserOutlined />,
    },
    {
      title: 'Datos del negocio',
      status: 'wait',
      icon: <ShopOutlined />,
    },
    {
      title: 'Pago',
      status: 'wait',
      icon: <CreditCardOutlined />,
    },
    {
      title: 'Finalizado',
      status: 'wait',
      icon: <SmileOutlined />,
    },
  ]);

   const handleNext = () => {
      if (currentStep < items.length - 1) {
        const updatedItems = items.map((item, index) => ({
          ...item,
          status: index === currentStep + 1 ? 'process' : index <= currentStep ? 'finish' : 'wait',
        }));
        setItems(updatedItems);
        setCurrentStep(currentStep + 1);
        setIsNextAvailable(false);
      }
   };
   
   const handlePrevious = () => {
    if (currentStep > 0) {
      const updatedItems = items.map((item, index) => ({
        ...item,
        status: index === currentStep - 1 ? 'process' : index < currentStep - 1 ? 'finish' : 'wait',
      }));
      setItems(updatedItems);
    setCurrentStep(currentStep - 1);
    }
  };

    return (
        <Card>
            <Steps
              items={items}
            />
        {currentStep==0 && <RegisterEmailForm setIsNextAvailable={setIsNextAvailable} clientInfo={clientInfo}  setClientInfo={setClientInfo} />}
        {currentStep==1 && <RegisterShopForm setIsNextAvailable={setIsNextAvailable} clientInfo={clientInfo} setClientInfo={setClientInfo} />}
        {currentStep==2 && <RegisterPaymentForm setIsNextAvailable={setIsNextAvailable} clientInfo={clientInfo} />}
        {currentStep==3 && <RegisterDone clientInfo={clientInfo}/>}
        {currentStep!=0 &&<Button icon={<ArrowLeftOutlined />} type="primary" onClick={ handlePrevious} >Anterior</Button>}
        {currentStep!=3 &&<Button icon={<ArrowRightOutlined />} disabled={!isNextAvailable} type="primary" onClick={ handleNext}>Siguiente</Button>}
        </Card>
    )
}