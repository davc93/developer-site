import { LabelForm } from '../components'
import { Link } from 'react-router-dom'
import { Button, ButtonSizes } from 'ui-react'

export const CreateLabelPage = () => {
  return (
    <div className="flex flex-col h-full justify-between">
      <div className="h-full" style={{ alignContent: 'center' }}>
        <LabelForm label={undefined} />
      </div>
      <Link className="mb-8" to={'..'}>
        <Button size={ButtonSizes.SMALL}>Back to labels</Button>
      </Link>
    </div>
  )
}
