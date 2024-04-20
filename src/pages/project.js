import CardList from "../components/CardList";
import Header from "../components/Header";

import '../styles/ProjectCSS.css'

const itemsProjeto = [
    { title: 'Item 1', },
    { title: 'Item 2', },
    { title: 'Item 3', },
    { title: 'Item 4', },
  ];

export default function project(){
    return(
        <>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>
            <Header/>
            <CardList items={itemsProjeto} style="card-Project" />
        </>

    );
}