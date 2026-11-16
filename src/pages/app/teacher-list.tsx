import foundIcon from '../../assets/found-icon.svg'
import { Select } from "../../components/select"
import { InputCustom } from "../../components/input-custom"
import { TeacherItem } from "../../components/teacher-item"
import { PageHeader } from "../../components/page-header"
import { SUBJECT_OPTIONS, WEEK_DAY_OPTIONS } from "../../data/options"

export function TeacherList() {
    return (
        <div className="w-full min-h-screen items-center flex flex-col align-top bg-background antialiased">
            <PageHeader title="Estudar" />
            <div className="w-full flex flex-col items-center bg-purple h-64">
                <div className="flex justify-between items-center min-w-4xl mt-16">
                    <h1 className="font-archivo-bold text-4xl text-white">
                        Estes são os<br/> proffys disponíveis.
                    </h1>
                    <div className="flex flex-row gap-4 items-center">
                        <img src={foundIcon} alt="" className="w-8 h-8" />
                        <span className="font-poppins-regular text-sm text-text-purple-base">
                            Nós temos 32<br/>professores. 
                        </span>
                    </div>
                </div>
                    <form className="flex justify-between items-center min-w-4xl mt-12">
                        <div className="flex flex-col w-[17rem]">
                            <Select
                                label="Matéria"
                                name="subject"
                                optionDefault="Selecione"
                                bgColor="bg-white-shape"
                                options={SUBJECT_OPTIONS}
                            />
                        </div>
                        <div className="flex flex-col w-[17rem]">
                            <Select
                                label="Dia da semana"
                                name="week_day"
                                optionDefault="Selecione"
                                bgColor="bg-white-shape"
                                options={WEEK_DAY_OPTIONS}
                            />
                        </div>
                        <div className="flex flex-col w-[17rem]">
                            <InputCustom
                                label="Horário"
                                name="hour"
                                placeholder="Selecione"
                                type="time"
                                bgColor="bg-white-shape"
                            />
                        </div>
                    </form>
            </div>
            <main className="flex flex-col w-full max-w-4xl justify-center mb-10 overflow-hidden">
                <TeacherItem />
            </main>
        </div>
    )
}