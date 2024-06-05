import React from "react";
import Main from "../templates/mainComponent/Main"

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return (
        <Main icon="home" title="Início" subtitle="Segundo Projeto do capítulo de React." >
            <div className="display-4">
                Bem vindo!
            </div>
            <hr />
            <p className="mb-0">Sistema para exemplificar a construção de um cadastro desenvolvido em React!</p>
        </Main>
    )
}