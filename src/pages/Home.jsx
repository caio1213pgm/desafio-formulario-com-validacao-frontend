import { zodResolver } from "@hookform/resolvers/zod";
import "../App.css";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Layout from "../layout/Layout";
import BodyPages from "../components/BodyPages";
import GroupInput from "../components/GroupInput";
import ErrorMessage from "../components/ErrorMessage";
import InputLogin from "../components/InputLogin";
import ButtonSendForms from "../components/ButtonSendForms";
import { useNavigate } from "react-router";

const listaDados = [
  "Desenvolvedor Frontend",
  "Desenvolvedor Backend",
  "Desenvolvedor Full Stack",
  "Desenvolvedor Mobile",
  "Desenvolvedor de Software",
  "Engenheiro de Software",
  "Arquiteto de Software",
  "UI/UX Designer",
  "Analista de Sistemas",
  "Analista Programador",
  "DevOps Engineer",
  "Engenheiro de Dados",
  "QA Engineer",
  "Scrum Master",
  "Product Owner",
];

const schema = z.object({
  name: z.string().min(3, "Digite um nome maior que 3 caractéres"),
  email: z.string().email("Digite um email válido"),
  position: z.enum(listaDados, {
    errorMap: () => ({ message: "Selecione uma posição válida" }),
  }),
  linkedin: z.string(),
  github: z.string(),
});

function Home() {
  const navigate = useNavigate()

  function handleDataForms(data) {
    if (data) {
      localStorage.setItem("user", JSON.stringify(data));
      navigate("/welcome")
      alert("Usuário cadastrado com sucesso");
    }
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <Layout>
      <BodyPages>
        <h1 className="text-center text-xl font-medium text-white md:text-3xl">
          Formulário de cadastro de membros
        </h1>
        <form onSubmit={handleSubmit(handleDataForms)}>
          <div className="flex flex-col items-center mt-5">
            <GroupInput title="Digite seu nome">
              <InputLogin
                placeholder="Ex: Caio Fabio..."
                {...register("name")}
              />
            </GroupInput>
            {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
            <GroupInput title="Digite seu email">
              <InputLogin
                placeholder="Ex: Caio@email.ggg"
                {...register("email")}
              />
            </GroupInput>
            {errors.email && (
              <ErrorMessage>{errors.email.message}</ErrorMessage>
            )}
            <GroupInput title="Selecione a sua área de atuação">
              <select {...register("position")} className="w-full">
                <option>Selecione...</option>
                {listaDados.map((dado) => (
                  <option value={dado} key={dado}>
                    {dado}
                  </option>
                ))}
              </select>
            </GroupInput>
            {errors.position && (
              <ErrorMessage>{errors.position.message}</ErrorMessage>
            )}

            <GroupInput title="Digite seu linkedin (opcional)">
              <InputLogin
                placeholder="Ex: https://www.linkedin.com/in/caiofcfx00/"
                {...register("linkedin")}
              />
            </GroupInput>
            <GroupInput title="Digite seu Github (opcional)">
              <InputLogin
                placeholder="Ex: https://github.com/caio1213pgm"
                {...register("github")}
              />
            </GroupInput>
            <ButtonSendForms/>
          </div>
        </form>
      </BodyPages>
    </Layout>
  );
}

export default Home;
