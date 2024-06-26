import { Typography, TypographySize } from "ui-react"


const Page = () => {
  return (
    <div className="flex flex-col gap-3">
            <Typography className='mb-4' size={TypographySize.titleMedium}>Typography</Typography>      

      <Typography size={TypographySize.bodySmall}>Body small</Typography>
      <Typography size={TypographySize.bodyLarge}>Body large</Typography>
      <Typography size={TypographySize.titleSmall}>Title small</Typography>
      <Typography size={TypographySize.titleMedium}>Title medium</Typography>
      <Typography size={TypographySize.titleLarge}>Title Large</Typography>

    </div>
  )
}

export default Page