import img1 from "./images/drs.jpg";
import img2 from "./images/af3.jpeg";
import img3 from "./images/elhombredelnorte.jpeg";
import img4 from "./images/jujutsukaisen.jpeg";


let peliculas = [
    {
        title: 'Doctor Strange en el Multiverso de la Locura',
        url: img1,
        sinopsis: 'En DOCTOR STRANGE EN EL MULTIVERSO DE LA LOCURA de Marvel Studios, el Universo Cinematográfico de Marvel (MCU por sus siglas en inglés) se adentra en el Multiverso y amplía sus límites más que nunca. El film presenta un viaje a lo desconocido con Doctor Strange, quien, con la ayuda de aliados místicos nuevos y otros ya conocidos por la audiencia, atraviesa las alucinantes y peligrosas realidades alternativas del Multiverso para enfrentarse a un nuevo y misterioso adversario.',
    },
    {
        title: 'AF3: LOS SECRETOS DE DUMBLEDORE',
        url: img2,
        sinopsis: 'En esta nueva aventura del mundo mágico creado por J. K Rowling, el profesor Albus Dumbledore sabe que el poderoso mago oscuro Gellert Grindelward se está moviendo para ganar control del mundo mágico. Incapaz de detenerlo por sí solo, le confía al magizoologista Newt Scamander que lidere un intrépido grupo de magos, brujas y un valiente panadero muggle en una aventura peligrosa donde se encontrarán con nuevas y viejas bestias mientras chocan con los seguidores de Grindelwald. Pero con tanto en juego, ¿cuánto tiempo puede permanecer Dumbledore al margen?',
    },
    {
        title: 'EL HOMBRE DEL NORTE',
        url: img3,
        sinopsis: 'Del aclamado director Robert Eggers (La Bruja, El Faro) presenta EL HOMBRE DEL NORTE protagonizada por Alexander Skarsgard, Anya Taylor-Joy, Nicole Kidman, Ethan Hawke, Willem Dafoe, y Björk. Un épico thriller de venganza que explora qué tan lejos llegaría un príncipe Vikingo para buscar justicia del asesinato de su padre.',
    },
    {
        title: 'JUJUTSU KAISEN 0',
        url: img4,
        sinopsis: 'JUJUTSU KAISEN 0 sigue la historia de Yuta Okkotsu, un inseguro estudiante de preparatoria, que se matricula en la misteriosa Academia de Hechicería de Tokio bajo la tutela de Satoru Gojo tras ser perseguido por la maldición de su amiga de la infancia. La película es una adaptación de JUJUTSU KAISEN 0 (JUMP COMICS / Shueisha), un manga precuela de la exitosa serie de aventuras sobrenaturales de Gege Akutami.',
    }
];


const Card = (props) => {
    return (
        <>
            <div className="card d-flex justify-content-center" >
                <img src={props.url} className="card-img-top" alt="..." />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.sinopsis}</p>
                    <a href="#" className="btn btn-dark justify-content-end">Ver Horarios</a>
                </div>
            </div>
        </>
    )
};


const Cards = () => {
console.log(peliculas.map((props) => (
    <Card
        key={props.title}
        title={props.title}
        url={props.url}
        sinopsis={props.sinopsis}
    />
)))

    return (
        <div className="d-flex justify-content-between flex-column flex-lg-row ">
            {peliculas.map((props) => (
                <Card
                    key={props.title}
                    title={props.title}
                    url={props.url}
                    sinopsis={props.sinopsis}
                />
            ))}
        </div>
    );
};

// let Cards = () => {
//     return peliculas.map(pelicula => <Card {...pelicula} />)
// };



// let Cards = () => {

//     return (

//         <div className="d-flex justify-content-between ">
//             <Card title ='asdf' />
//             <Card />
//             <Card />
//             <Card />
//         </div>
//     )
// };

export default Cards; 