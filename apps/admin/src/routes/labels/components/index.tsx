import {
  useState,
  type FormEventHandler,
  useContext,
  type ChangeEvent
} from 'react'
import type { Label } from '@/models/label.model'
import { AuthContext } from '@/context/AuthContext'
import { useInputValue } from '@/hooks/useInputValue'
import { Button, Input, Select } from 'ui-react'
import { fileService } from '@/services/file.service'
import { useLabelCreate, useLabelUpdate } from '../hooks'

type LabelFormProps = {
  label: Label | undefined
}

export const LabelForm = ({ label }: LabelFormProps) => {
  const { token } = useContext(AuthContext)
  const [image, setImage] = useState(label?.image ?? undefined)
  const [error] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const title = useInputValue(label?.title ?? '')
  const type = useInputValue(label?.type ?? '')
  const createMutation = useLabelCreate()
  const updateMutation = useLabelUpdate()
  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    if (!label?.id) {
      createMutation.mutate({
        title: title.value,
        type: type.value,
        image: image as string
      })
    } else {
      updateMutation.mutate({
        id: label.id,
        title: title.value,
        type: type.value,
        image
      })
    }
  }
  const handleFile = async (event: ChangeEvent<HTMLInputElement>) => {
    setLoading(true)
    const target = event.target
    const file = target.files?.item(0) as File
    try {
      const formData = new FormData()
      formData.append('image', file)

      const image = await fileService.uploadFile(token as string, formData)
      setImage(image.url)
    } catch (error) {}
    setLoading(false)
  }
  return (
    <form className="flex flex-col gap-8 max-w-md" onSubmit={handleSubmit}>
      <Input
        placeholder="Enter the label name"
        label="Title"
        name="title"
        {...title}
      />
      <Select label="Label" placeholder="Select a label type" {...type}>
        <option value="tech">Tech</option>
        <option value="other">Otro</option>
      </Select>
      <div className="flex justify-between items-center mt-4">
        <Button tag="label" className="">
          Upload image
          <input type="file" name="file" id="" onInput={handleFile} />
        </Button>
        <div className="h-20">
          {image && <img className="h-full" src={image} alt="" />}
        </div>
      </div>
      {loading && <p>Loading File...</p>}
      <Button
        className="self-end mt-8"
        type="submit"
        loading={createMutation.isPending || updateMutation.isPending}
      >
        Submit
      </Button>
      {error && <p>{error}</p>}
    </form>
  )
}
