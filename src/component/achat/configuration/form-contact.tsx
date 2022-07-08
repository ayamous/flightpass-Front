import { MdEdit } from "react-icons/md";

const FormContact = () => {
    return (
        <div className="formContact col-8">
            <form>
                <h6>Coordonnées du Passager</h6>
                <span className="warning">Merci d’enregistrer les informations du nouveau voyageur</span>
                <div className="field">
                    <label htmlFor="nom">Nom <span>*</span></label>
                    <i><img src="./assets/images/edit.svg" alt="" /></i>
                    <input id="nom" placeholder="Abdellaoui" />
                </div>

                <div className="field">
                    <label htmlFor="nom">Nom<span>*</span></label>
                    <i><img src="./assets/images/edit.svg" alt="" /></i>
                    <input id="nom" placeholder="Abdellaoui" />
                </div>

                <div className="field">
                    <label htmlFor="nom">Nom<span>*</span></label>
                    <i><img src="./assets/images/edit.svg" alt="" /></i>
                    <input id="nom" placeholder="Abdellaoui" />
                </div>

                <div className="field">
                    <label htmlFor="nom">Nom<span>*</span></label>
                    <i><img src="./assets/images/edit.svg" alt="" /></i>
                    <input id="nom" placeholder="Abdellaoui" />
                </div>

                <div className="field">
                    <label htmlFor="nom">Nom <span>*</span></label>
                    <i><img src="./assets/images/edit.svg" alt="" /></i>
                    <input id="nom" placeholder="Abdellaoui" />
                </div>
            </form >
        </div>

    )
}


export default FormContact;