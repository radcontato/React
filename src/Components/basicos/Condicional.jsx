import Reat from 'react'

export default props => {

    return (
        <div>
            <h2>O Numero e {props.numero}</h2>
            {
                props.numero % 2 === 0 ?
                    <span>Par</span> :
                    <span>Impar</span>
            }


        </div>
    )

}