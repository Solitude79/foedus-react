import "../styles/Input.css"

interface IInput{
  placeholder: string;
  className: string;
}
export const Input = (params: IInput) => {
  return (
    <input type="text" placeholder={params.placeholder} className={params.className}/>
  )
}