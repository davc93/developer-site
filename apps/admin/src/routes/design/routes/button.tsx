import { Button, ButtonSizes, Typography, TypographySize} from 'ui-react'

const Page = (): JSX.Element => {
  return (
    <div className='flex flex-col gap-3'>
<Typography className='mb-4' size={TypographySize.titleMedium}>Button</Typography>      
      <Button size={ButtonSizes.SMALL}>Small</Button>
      <Button size={ButtonSizes.LARGE}>Large</Button>
      <Button size={ButtonSizes.WIDE}>Wide</Button>
      <Button size={ButtonSizes.LARGE} loading>Loading</Button>
      <Button size={ButtonSizes.LARGE} disabled>Disabled</Button>


      {/* <Button variant={ButtonVariant.SECONDARY} size={ButtonSizes.SMALL}>Button</Button>
      <Button variant={ButtonVariant.SECONDARY} size={ButtonSizes.LARGE}>Button</Button>
      <Button variant={ButtonVariant.SECONDARY} size={ButtonSizes.WIDE}>Button</Button>
      <Button variant={ButtonVariant.SECONDARY} size={ButtonSizes.LARGE} loading>Button</Button>
      <Button variant={ButtonVariant.SECONDARY} size={ButtonSizes.LARGE} disabled>Button</Button> */}


    </div>
  )
}
export default Page
