import { Button } from '../Button'

import './styles.scss'

export const Form = () => {
  return (
    <form
      action="https://formsubmit.co/cleidison.dev@gmail.com"
      method="POST"
    >
      <label>
        Nome
        <input type="text" name="name" placeholder="Digite seu nome" required />
      </label>

      <label>
        E-mail
        <input
          type="email"
          name="email"
          placeholder="Digite seu e-mail"
          required
        />
      </label>

      <label>
        Mensagem
        <textarea name="message" placeholder="Digite sua menssagem" rows={4} required />
      </label>

      <input type="hidden" name="_captcha" value="false" />

      {/* <input
        type="hidden"
        name="_next"
        value="url"
      /> */}
      
      <Button type="submit" className="btn bg-emphasis form">Enviar</Button>
    </form>
  )
}
