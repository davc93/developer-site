import { Input, Typography, TypographySize } from 'ui-react'

const Page = () => {
  return (
    <div className="flex flex-col gap-3">
            <Typography className='mb-4' size={TypographySize.titleMedium}>Input</Typography>      

      <Input label="Email" placeholder='Enter your email' />
      <Input label="Email" error='The email format is incorrect' value={'diego@@gmail.com'} />

    </div>
  )
}

export default Page
