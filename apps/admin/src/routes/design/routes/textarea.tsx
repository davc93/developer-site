import { TextArea, Typography, TypographySize } from "ui-react"


const Page = () => {
  return (
    <div className="flex flex-col gap-3">
            <Typography className='bb-8' size={TypographySize.titleMedium}>Textarea</Typography>      

      <TextArea rows={5} label="Message" placeholder="write a message to me" />
    </div>
  )
}
export default Page