import React from "react";
import Panel from "./Panel";

const PanelDb = () => {
  return (
    <div className="bg-white w-full h-full flex flex-col items-center justify-center">
      <Panel
        title="Módulo 1: Desbloquea el sistema – empieza aquí."
        answer=" Tour por la escuela: Familiarízate con la plataforma y todo lo que encontrarás. Consejos para sacar un mayor provecho del workshop."
      />
      <Panel
        title="Módulo 2:La estrategia que hará que tu publicidad funcione (o fracase)."
        answer=" Por qué es importante tener una estrategia: Aprende la base de toda publicidad exitosa.Comprende cómo una buena planificación te ahorra tiempo y dinero."
      />
      <Panel
        title="Módulo 3: El backstage de campañas ganadoras – lo que nadie te cuenta"
        answer="👩‍💻 Primera toma de contacto: Lo que necesitas antes de empezar. 📹 Videos paso a paso para: 
        Crear y configurar tu Business Manager de Meta.
        Instalar y verificar el píxel de Facebook.
        Configurar eventos clave para tus campañas.
        Guías prácticas para la creación y configuración del Business Manager y el píxel."
      />
      <Panel title="Módulo 4: Audiencias: cómo encontrar y atraer a tus clientes ideales. " answer="📹 Define a quién quieres llegar: Aprende a segmentar tu público ideal. 
      Descubre cómo encontrar las personas que realmente valoran tu oferta." />
      

      <h1>aca podes agregar algo mas</h1>
    </div>
  );
};

export default PanelDb;
