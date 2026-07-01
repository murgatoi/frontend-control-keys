

import { LuUserRound, LuKeySquare } from "react-icons/lu";
import { Input, InputPassword } from "../../components/inputs/input";
import { Checkbox } from "../../components/inputs/checkbox";


let sector = "Recepção"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="rounded-xl h-96 flex flex-col items-center justify-around space-x-3 p-7 bg-backgroundColor-card shadow-md">
            <div className="flex items-center flex-col">
                <strong className="text-4xl">Acessar o Control Keys</strong>
                <p className="">Controle de Entrega de Chaves – {sector}</p>
            </div>
            <form className="flex flex-col items-start w-full">
                <div className="flex flex-col items-start w-full">
                    <label htmlFor="user">Usuário ou matrícula</label>
                    <Input
                        id="user"
                        placeholder="Digite seu usuário ou sua matrícula"
                        Icon={<LuUserRound className="size-6 mr-3 text-slate-400 group-has-[:focus]:text-input-borderActive" />}
                    />
                </div>
                <div className="flex flex-col items-start w-full">
                    <label htmlFor="pass">Sua senha</label>
                    <InputPassword
                        id="pass"
                        placeholder="Digite sua senha"
                        Icon={<LuUserRound className="size-6 mr-3 text-slate-400 group-has-[:focus]:text-input-borderActive" />}
                        type="password"
                    />
                    <a href="/" className="underline italic text-primary">Esqueceu sua senha?</a>
                </div>
                <Checkbox label="Mantenha-se conectado" />
            </form>
            <button className="bg-primary text-white font-medium py-2.5 px-4 rounded-lg transition duration-200 shadow-sm">Entrar</button>
        </div>
    );
}