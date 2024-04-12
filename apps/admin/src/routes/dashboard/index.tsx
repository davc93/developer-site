import { Typography, TypographySize } from "ui-react"
import { TypographyColor } from "ui-react/src/Typography"


export const DashboardPage = () => {
  return (
    <section className="h-full overflow-y-auto w-full">
        <Typography className="text-center" size={TypographySize.titleMedium}>Dashboard</Typography>
        <div className="flex gap-4 justify-between mt-10">
            <div className=" border-2 flex flex-col items-center gap-2 p-6 border-white rounded-sm">
                <Typography size={TypographySize.titleSmall} color={TypographyColor.Primary}>
                    10
                </Typography>

                <Typography size={TypographySize.bodyLarge} >
                    Mensajes
                </Typography>
            </div>
            <div className=" border-2 flex flex-col items-center gap-2 p-6 border-white rounded-sm">
                <Typography size={TypographySize.titleSmall} color={TypographyColor.Primary}>
                    04-04-2024
                </Typography>

                <Typography size={TypographySize.bodyLarge} >
                    Fecha ultima publicacion
                </Typography>
            </div>
            <div className=" border-2 flex flex-col items-center gap-2 p-6 border-white rounded-sm">
                <Typography size={TypographySize.titleSmall} color={TypographyColor.Primary}>
                    1
                </Typography>

                <Typography size={TypographySize.bodyLarge} >
                    Usuarios
                </Typography>
            </div>
        </div>
    </section>
  )
}
