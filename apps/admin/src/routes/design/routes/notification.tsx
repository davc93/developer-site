import { Notification, NotificationType, Typography, TypographySize } from 'ui-react'

const lorem =
  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit iure eos veritatis vero?'
const onClose = (id: string | undefined) => () => () => {}
const Page = () => {
  return (
    <div className='flex flex-col gap-3'>
            <Typography className='mb-4' size={TypographySize.titleMedium}>Notification</Typography>      

      <Notification
        onClose={onClose('')}
        title="Notification"
        message={lorem}
        type={NotificationType.ERROR}
      />
      <Notification
        onClose={onClose('')}
        title="Notification"
        message={lorem}
        type={NotificationType.INFO}
      />
    </div>
  )
}
export default Page
