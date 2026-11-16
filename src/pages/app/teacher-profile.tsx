import { Navigate } from "react-router"
import { toast } from "sonner"
import backgroundShapes from "../../assets/background-finaly.svg"
import { PageLayout } from "../../components/page-layout"
import { ProfileAvatar } from "../../components/profile-avatar"
import { TeacherForm } from "../../components/teacher-form/teacher-form"
import { useTeacher } from "../../hooks/use-teacher"
import { toFormValues } from "../../lib/teacher-form-values"
import type { Teacher, TeacherFormData } from "../../schemas/teacher-schema"

type ProfileBannerProps = {
    teacher: Teacher
    onAvatarChange: (avatarUrl: string) => void
}

function ProfileBanner({ teacher, onAvatarChange }: ProfileBannerProps) {
    const fullName = `${teacher.name} ${teacher.lastName}`

    return (
        <>
            <img
                src={backgroundShapes}
                alt=""
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[69rem] max-w-none h-[32rem] pointer-events-none"
            />
            <div className="relative flex flex-col items-center mt-16">
                <ProfileAvatar avatarUrl={teacher.avatarUrl} name={fullName} onChange={onAvatarChange} />
                <h2 className="mt-4 font-archivo-bold text-4xl text-white">{fullName}</h2>
                <span className="font-poppins-regular text-2xl text-text-purple-base">
                    {teacher.subject}
                </span>
            </div>
        </>
    )
}

export function TeacherProfile() {
    const { teacher, saveTeacher } = useTeacher()

    // Sem cadastro não há perfil: volta para o formulário.
    if (!teacher) return <Navigate to="/give-classes" replace />

    const handleAvatarChange = (avatarUrl: string) => {
        saveTeacher({ ...teacher, avatarUrl })
    }

    const handleSaveProfile = (data: TeacherFormData) => {
        saveTeacher({ ...data, avatarUrl: teacher.avatarUrl })
        toast.success("Perfil atualizado com sucesso!")
    }

    return (
        <PageLayout
            headerTitle="Meu perfil"
            bannerClassName="h-[29.5rem]"
            banner={<ProfileBanner teacher={teacher} onAvatarChange={handleAvatarChange} />}
        >
            <TeacherForm
                variant="profile"
                defaultValues={toFormValues(teacher)}
                avatarUrl={teacher.avatarUrl}
                onSubmit={handleSaveProfile}
            />
        </PageLayout>
    )
}
