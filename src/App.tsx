import { RouterProvider } from "react-router";
import { router } from "./routes";
import { Toaster } from "sonner";
import { TeacherProvider } from "./contexts/teacher-provider";

export function App() {
  return (
    <>
      <Toaster richColors />
      <TeacherProvider>
        <RouterProvider router={ router }/>
      </TeacherProvider>
    </>
    
  )
}
