import { useEffect, useState } from "react";
import BodyPages from "../components/BodyPages";
import Layout from "../layout/Layout";

function WelcomePage() {
  const [user, setUser] = useState();
  useEffect(() => {
    try {
      const data = localStorage.getItem("user");
      if (data) {
        const userStorage = JSON.parse(data);
        setUser(userStorage);
      }
    } catch (error) {
      console.log(`Erro ao pegar dados do storage: ${error}`);
    }
  }, []);
  return (
    <Layout>
      <BodyPages>
        <div className="text-center text-white">
          <h1 className="text-cente text-3xl">
            Olá, bem vindo {user ? user.name : ""}!
          </h1>
          <p className="text-xl">Área de atuação: {user ? user.position : ""}</p>
        </div>
      </BodyPages>
    </Layout>
  );
}

export default WelcomePage;
