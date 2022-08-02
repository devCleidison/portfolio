import Person from "../../assets/person.png";
import {Form} from '../../components/Form'

import './styles.scss'

export const Contact = () => {
  return (
    <section id="contact">
      <div className="content">
        <div className="col-a">
          <Form />
        </div>
        <div className="col-b">
          <img
            src={Person}
            alt="Ilustração de pessoa falando a frase vamos conversar?"
          />
        </div>
      </div>
    </section>
  );
};
