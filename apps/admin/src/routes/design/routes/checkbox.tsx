import { Checkbox, Typography, TypographySize } from 'ui-react'

const Page = () => {
  return (
    <div className='flex flex-col gap-3'>
      <Typography className='mb-4' size={TypographySize.titleMedium}>Checkbox</Typography>      

      <Checkbox>Do you accepter our terms and conditions?</Checkbox>

    </div>
  )
}
export default Page
