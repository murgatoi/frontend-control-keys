

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
        <div className="rounded-xl h-[48rem] w-[32rem] flex flex-col items-center justify-around space-x-3 p-7 bg-backgroundColor-card shadow-md">
            <div className="flex items-center flex-col h-auto w-auto">
                <strong className="text-4xl">Acessar o Control Keys</strong>
                <p className="">Controle de Entrega de Chaves – {sector}</p>
            </div>
            <form className="flex flex-col items-start w-full">
                <div className="flex flex-col items-start w-full">
                    <Input
                        label="Usuário ou matrícula"
                        id="user"
                        placeholder="Digite seu usuário ou sua matrícula"
                        Icon={<LuUserRound className="size-6 mr-3 text-slate-400 group-has-[:focus]:text-input-borderActive" />}
                    />
                </div>
                <div className="flex flex-col items-start w-full">
                    <InputPassword
                        id="pass"
                        label="Sua senha"
                        placeholder="Digite sua senha"
                        Icon={<LuKeySquare className="size-6 mr-3 text-slate-400 group-has-[:focus]:text-input-borderActive" />}
                        type="password"
                    />
                </div>
                <div className="flex w-full">
                    <Checkbox label="Mantenha-se conectado" />
                    <a href="/" className="underline italic text-primary w-auto">Esqueceu sua senha?</a>
                </div>
            </form>
            <button className="bg-primary text-white font-medium py-2.5 px-4 rounded-lg transition duration-200 shadow-sm">Acessar Painel</button>
        </div>
    );
}