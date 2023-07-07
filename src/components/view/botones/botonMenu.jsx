//importacion de librerias
import {React } from "react";
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";
import '../../style/botones/botonMenu.css';
import { useDataContex } from "../contex";

export function BotonMenu({manejarClick, estado}) {
	const { contexUsuario, setContexUsuario, contexMenu, setContexMenu, setDetallesActivo } = useDataContex();


    const iconoHtml = (key) => {
		switch (key) {
			case "MdKeyboardDoubleArrowLeft":
				return <><MdKeyboardDoubleArrowLeft /><span>Cerrar</span></>
			case "MdKeyboardDoubleArrowRight":
				return <><span>Menu</span> <MdKeyboardDoubleArrowRight /></>
			default:
				return <><span>Indefinido</span></>
		}
	}

	const cambiarEstado = () =>{
		setContexMenu(!contexMenu);
		setDetallesActivo(false);
	}
	return(
		<div>
      <button 
          className={"botonMenu  " + (estado === false ? "botonMenu--desactivo" : "botonMenu--activo")}
					onClick={cambiarEstado} >
          {
            iconoHtml(estado === false ? "MdKeyboardDoubleArrowRight" : "MdKeyboardDoubleArrowLeft" )
          }
      </button>
    </div>
	);
};