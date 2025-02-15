import { useState } from "react";
import { CardList } from './CardList.jsx';


export function ContainerList({ value, completeList, viewFull, data }) {
    let elementList = [];
    let colorClass = 'find';

    const [showModal, setShowModal] = useState(false);
    const [activeObject, setActiveObject] = useState(null);

    function getClass(index) {
        return index === activeObject?.id ? 'active' : 'inactive';
    }

    const Modal = ({ object: { tag, description, url } }) => (
        <dialog open id="productModal" className="active">
            <article style={{ paddingBottom: '20px' }}>
                <header style={{ padding: '12px 22px', marginBottom: '6%' }}>
                    <h1 style={{ marginBottom: '8px', textAlign: 'center', verticalAlign: 'baseline' }}>{tag}</h1>
                </header>
                <div className="modalMain">
                    <p>{description}</p>
                    <a href={url}>{url}</a>
                    <br />
                    <button className="closeButton" onClick={() => setShowModal(false)}>
                        Close
                    </button>
                </div>
            </article>
        </dialog>
    );

    if (viewFull) {
        for (let htmlElement of completeList) {
            if (value.includes(htmlElement)) {
                colorClass = 'find';
            } else {
                colorClass = 'unfind';
            }

            let info = data.find(({ element }) => element === htmlElement);

            elementList.push(
                <CardList element={htmlElement} key={htmlElement} colorClass={colorClass} setActiveObject={setActiveObject} setShowModal={setShowModal} className={getClass(htmlElement)} info={info}>
                    {' '}
                </CardList>
            );
        }
    } else {
        for (let htmlElement of value) {
            let info = data.find(({ element }) => element === htmlElement);

            elementList.push(
                <CardList element={htmlElement} key={htmlElement} colorClass={colorClass} setActiveObject={setActiveObject} setShowModal={setShowModal} className={getClass(htmlElement)} info={info}>
                    {' '}
                </CardList>
            );
        }
    }

    return (
        <>
            <article id="box">
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>{elementList}</div>
            </article>

            {showModal ? <Modal object={activeObject} /> : null}
        </>
    );
}
