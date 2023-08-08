/*-- Estilos --*/
import '../../style/paginaMain/pagina403.css';

/*-- Librerias --*/
import { React } from "react";

export function PageNotAvaible() {
	return (
		<div className="pagina403">
			<section className="page_403">
				<div className="container">
					<div className="row">
						<div className="col-sm-12 ">
							<div className="col-sm-10 col-sm-offset-1  text-center">
								<div className="four_zero_four_bg">
									<h1 className="text-center ">Catálogo no está disponible, en estos momentos</h1>
								</div>

								<div className="contant_box_404">
									{/* <h3 className="h2">
		Look like you're lost
		</h3>
		
		<p>the page you are looking for not avaible!</p>
		
		<a href="" className="link_404">Go to Home</a> */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};