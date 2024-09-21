import Return from "../../components/return"
import "./style.css"

function Error() {
    const messages = [
        "Oups ! Cette page n'existe pas", // Français
        "Oops! This page doesn't exist", // Anglais
        "¡Vaya! Esta página no existe", // Espagnol
        "Ups! Diese Seite existiert nicht", // Allemand
        "Ops! Questa pagina non esiste", // Italien
        "Oops! Deze pagina bestaat niet", // Néerlandais
        "Ой! Эта страница не существует", // Russe
        "Opa! Esta página não existe", // Portugais
        "오류! 이 페이지는 존재하지 않습니다", // Coréen
        "哎呀！此页面不存在", // Chinois
        "えええ！このページは存在しません", // Japonais
        "Huch! Diese Seite existiert nicht", // Allemand (autre variation)
        "Ai! Esta página não existe", // Portugais (variation)
        "Упс! Эта страница отсутствует", // Russe (variation)
        "Uff! Questa pagina è sparita", // Italien (variation)
        "Ах! Эта страница не найдена", // Russe (autre variation)
        "¡Vaya! No encontramos esta página", // Espagnol (variation)
        "Uy! Esta página no existe", // Espagnol (autre variation)
        "Aïe ! Cette page est introuvable", // Français (variation)
        "Oops! No encontramos esta página" // Anglais (variation)
    ];

    return(
        <div className="error-contener">
            <Return />
            <div className="msg-fr">Oups ! Cette page n'existe pas !</div>
            <div className="error-page">
            {messages.map((message, index) => (
                <div className="error-message" key={index} style={{ top: `${Math.random() * 90}%`, left: `${Math.random() * 90}%` }}>
                    {message}
                </div>
            ))}
        </div>
        </div>
    )
}

export default Error