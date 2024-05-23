import { Link, useParams } from 'react-router-dom'
import { Button, ButtonSizes } from 'ui-react'
import { LabelForm } from '../components'
import { useLabelQuery } from '../hooks'

export const EditLabelPage = () => {
  const { id } = useParams()
  const query = useLabelQuery(Number(id))

  return (
    <div className="flex flex-col h-full justify-between">
      <div className="h-full" style={{ alignContent: 'center' }}>
        {!query.isLoading && <LabelForm label={query.data} />}
        {query.isError && <p>error {query.error.message}</p>}
        {query.isLoading && <p>Loading...</p>}
      </div>
      <Link className="mb-8" to={'/labels'}>
        <Button size={ButtonSizes.SMALL}>Back to labels</Button>
      </Link>
    </div>
  )
}
