import { useState } from 'react';


const App = () => {

  const [ isHiddenEnvelope, setIsHiddenEnvelope ]         = useState( false );
  const [ isHiddenOpenEnvelope, setIsHiddenOpenEnvelope ] = useState( true );
  const [ isHiddenLetter, setIsHiddenLetter ]             = useState( true );
  const [ isHiddenText, setIsHiddenText ]                 = useState( true );


  const openEnvelope = () : void => {
    setIsHiddenOpenEnvelope( false );
    setIsHiddenEnvelope( true );
  }

  const takeOutLetter = () : void => {
    setIsHiddenLetter( false );
    setIsHiddenOpenEnvelope( true );
  }

  const readLetter = () : void => {
    setIsHiddenText( false );
    setIsHiddenLetter( true );
  }

  return (
    <main className='w-screen h-dvh justify-center items-center flex bg-pink-200 select-none' >

      {
        isHiddenEnvelope ? <></> : 
          <img src='sobre.png' 
            className={ `absolute cursor-pointer` }
            onClick={ openEnvelope } 
            title='Abrir'
          />
      }
      {
        isHiddenOpenEnvelope ? <></> :
          <img src='sobre abierto.png' 
            className={ `absolute cursor-pointer` }
            onClick={ takeOutLetter } 
            title='Sacar carta'
          />
      }
      {
        isHiddenLetter ? <></> :
          <img src='carta.png' 
            className={ `absolute cursor-pointer` }
            onClick={ readLetter } 
            title='Leer carta'
          />
      }
      {
        isHiddenText ? <></> :
        <section className='w-full h-full z-10 backdrop-blur-sm flex justify-center items-center transition delay-75'>
          <section className='w-90 h-96 bg-neutral-200 p-4 py-8 text-sm font-serif text-pretty overflow-auto leading-5' >
            <span>
              <p>Hola amorcito mío,</p>
              <p>El primer día que te vi supe que tenía que hablarte, pero por falta de confianza no lo había hecho. Mi lado introvertido no sabía cómo empezar la conversación.</p>
              <p>Pasaron los días y sentí que no te volvería a ver, ya que te había visto pocas veces por la oficina y en ese entonces yo no subía al último piso para comer.</p>
              <p>Por alguna razón decidí subir con mis amigos, y fue cuando te comencé a ver más seguido, pero seguía sin saber cómo hablarte jaja.</p>
              <p>Pero un día que subí un poco más tarde al comedor, te vi subiendo las escaleras y fue cuando decidí que debía hablarte. Así que te invité a comer con nosotros en la misma mesa.</p>
              <p>Nada más escucharte hablar quedé enamorado. Dije "nmms, está mujer es muy inteligente me encanta". Y ese mismo día, para obtener tu número de celular, se me ocurrió la brillante idea de inventar una posada JAJAJA.</p>
              <p>Y bueno, el resto ya lo conoces.</p>
              <p>Estos 3 meses han sido muy especiales para mí, has sido tan linda y atenta conmigo. Cada vez que nos vemos me enamoro más de ti. Te miro a los ojos y se detiene el tiempo, como si lo demás no importara.</p>
              <p>Hoy 14 de febrero me encantaría que fueras mi san valentín. ¿Qué dices?</p>
              <img src='senior_flores.png' />
            </span>
          </section>
        </section>
      }
    </main>
  )
}


export default App;