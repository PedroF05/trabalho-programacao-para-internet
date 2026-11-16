import { Finally } from "../../components/finally"

export function TeacherFormsCompleted() {
    return (
        <Finally
            title="Cadastro salvo!"
            subtitle={"Tudo certo, seu cadastro está na nossa lista de professores.\nAgora é só ficar de olho no seu WhatsApp."}
            titleButton="Acessar lista"
            path="/profile"
        />
    )
}
