import { useState } from "react";
import styled from "styled-components";

export default function Drawer( { children, position, height, width, offset } ) {

    const [ showDrawer, setShowDrawer ] = useState( false );

    const HideButton = () => (
        <HideDrawerButton show={ showDrawer } onClick={ () => setShowDrawer( !showDrawer ) }>
            { { left: "▶", bottom: "▲", right: "◀", top: "▼" }[ position ] }
        </HideDrawerButton>
    );

    return (
        <DrawerContainer
            position={ position }
            height={ height }
            width={ width }
            offset={ offset }
            show={ showDrawer }
        >
            { [ "bottom", "right" ].includes( position ) && <HideButton /> }
            <DrawerContent width={ width } height={ height }>{ children }</DrawerContent>
            { [ "top", "left" ].includes( position ) && <HideButton /> }

        </DrawerContainer>
    );

};

const DrawerContainer = styled.div`
    position: fixed;
    ${ ( { position, show, height, width, offset } ) => {
        const offsetStyle = Object.keys( offset || {} ).reduce( ( finishedOffsetStyle, sideToOffset ) => ( ( [ "top", "bottom" ].includes( position ) && [ "left","right" ].includes( sideToOffset ) ) ) || ( ( [ "left", "right" ].includes( position ) && [ "top","bottom" ].includes( sideToOffset ) ) ) ? `${ sideToOffset }: ${ offset[ sideToOffset ] }; ${ finishedOffsetStyle }` : finishedOffsetStyle, "" );
        const positionRule = show ? "0" : `-${ [ "top", "bottom" ].includes( position ) ? height : width }`;
        switch ( position ) {
            case "top": return `
                top: ${ positionRule };
                width: ${ width ? `${ width }; ${ offsetStyle.length && offsetStyle || `left: 50%; transform: translate( -50%, 0 );` }` : `100%;` }
            `;
            case "left": return `
                left: ${ positionRule };
                height: ${ height ? `${ height }; ${ offsetStyle.length && offsetStyle || `top: 50%; transform: translate( 0, -50% );` }` : `100%;` }
            `;
            case "bottom": return `
                bottom: ${ positionRule };
                width: ${ width ? `${ width }; ${ offsetStyle.length && offsetStyle || `left: 50%; transform: translate( -50%, 0 );` }` : `100%;` }
            `;
            case "right": return `
                right: ${ positionRule };
                height: ${ height ? `${ height }; ${ offsetStyle.length && offsetStyle || `top: 50%; transform: translate( 0, -50% );` }` : `100%;` }
            `;
            default: return "";
        }
    } }
    background-color: #eee;
    display: flex;
    flex-direction: ${ ( { position } ) => [ "left", "right" ].includes( position ) ? "row" : "column" };
    transition: all 0.25s ease;
`;

const HideDrawerButton = styled.button`
    background: none;
    border: none;
    min-height: 3vh;
    transform: rotate( ${ ( { show } ) => show ? "180" : "0" }deg );
    transition: transform 0.25s ease;
`;

const DrawerContent = styled.div`
    min-width: ${ ( ( { width } ) => width || "inherit" ) };
    min-height: ${ ( ( { height } ) => height || "inherit" ) };
    display: flex;
    flex-direction: column;
`;
