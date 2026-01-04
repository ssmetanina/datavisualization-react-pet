import { useEffect, useRef } from "react"

// модальное окно
function IntroModal({onStart}) {
    const startBtnRef = useRef(null)

    useEffect(()=> {
        startBtnRef.current?.focus()
    }, [])

    useEffect(() => {
        const onKeyDown = (e) => {
            if (e.key == 'Escape') onStart()
        }

        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown) // размонтировка
    }, [onStart])

  return (
    <>
      <div className='intro-modal' role='dialog' aria-modal='true' aria-labelledby="intro-title">
        <h2>Вы готовы стать взрослыми?</h2>
        <button ref={startBtnRef} className={`ready-button`} onClick={()=> {
          onStart()
          }}>вперед</button>
      </div>
    </>
  )
}

export default IntroModal
