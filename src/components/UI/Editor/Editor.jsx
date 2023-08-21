import { useCallback, useMemo, useRef } from 'react'
import ReactQuill from 'react-quill'
import css from './Editor.module.scss'

const Editor = (props) => {
  const quillRef = useRef(null)

  const imageHandler = useCallback(() => {
    if (!quillRef.current) return

    const editor = quillRef.current.getEditor()
    const range = editor.getSelection()
    const value = prompt('Введите ссылку на картинку')

    if (value && range) {
      editor.insertEmbed(range.index, 'image', value, 'user')
    }
  }, [quillRef])

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ font: [] }],
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ color: [] }, { background: [] }],
          [{ script: 'sub' }, { script: 'super' }],
          ['blockquote', 'code-block'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          [{ indent: '-1' }, { indent: '+1' }, { align: [] }],
          ['link', 'image', 'video'],
          ['clean'],
        ],
        handlers: {
          image: imageHandler,
        },
      },
    }),
    [imageHandler]
  )

  return (
    <ReactQuill
      theme="snow"
      {...props}
      className={css.editor}
      modules={modules}
      ref={quillRef}
    />
  )
}

export default Editor
