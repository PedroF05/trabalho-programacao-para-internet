import { useNavigate } from "react-router"
import rocketIcon from "../../assets/rocket.svg"
import { PageLayout } from "../../components/page-layout"
import { TeacherForm } from "../../components/teacher-form/teacher-form"
import { currentUser } from "../../data/current-user"
import { useTeacher } from "../../hooks/use-teacher"
import { blankFormValues, toFormValues } from "../../lib/teacher-form-values"
import type { TeacherFormData } from "../../schemas/teacher-schema"

function TeacherFormsBanner() {
    return (
        <div className="flex flex-col w-full max-w-[46rem] px-4 mt-16">
            <h1 className="font-archivo-bold text-4xl text-white">
                Que incrível que você<br />quer dar aulas.
            </h1>
            <div className="flex justify-between items-center mt-6">
                <p className="font-poppins-regular text-base text-text-purple-base">
                    O primeiro passo, é preencher esse<br />formulário de inscrição.
                </p>
                <div className="flex flex-row gap-4 items-center">
                    <img src={rocketIcon} alt="" className="w-8 h-8" />
                    <span className="font-poppins-regular text-xs text-text-purple-base">
                        Prepare-se!<br />vai ser o máximo.
                    </span>
                </div>
            </div>
        </div>
    )
}

export function TeacherForms() {
    const navigate = useNavigate()
    const { teacher, saveTeacher } = useTeacher()

    function handleCreateClass(data: TeacherFormData) {
        saveTeacher({ ...data, avatarUrl: teacher?.avatarUrl ?? currentUser.avatarUrl })
        navigate("/give-classes/completed")
    }

    return (
        <PageLayout headerTitle="Dar aulas" banner={<TeacherFormsBanner />}>
            <TeacherForm
                variant="register"
                defaultValues={teacher ? toFormValues(teacher) : blankFormValues()}
                avatarUrl={teacher?.avatarUrl ?? currentUser.avatarUrl}
                onSubmit={handleCreateClass}
            />
        </PageLayout>
    )
}
