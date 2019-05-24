var appAngular = angular.module('asiste', ['ngRoute']);

appAngular.config([ '$routeProvider' , function($routeProvider){

	$routeProvider.when( '/' , {

		templateUrl: 'view/selection_ad.html',
		controller: 'inicio'

	} )
	.when('/inicio', {

		templateUrl: 'view/inicio.html',
		controller: 'inicio'
	})
	.when('/pass/:empleadoCI', {

		templateUrl: 'view/pass.html',
		controller: 'inicio'
	})
	// PERFIL DEL COORDINADOR
	.when('/coordi_pass', {

		templateUrl: 'view/coordinador.html',
		controller:  'inicio'
	})
	.when('/pass_coordi/:coordiCI', {

		templateUrl: 'view/pass_coordi.html',
		controller: 'inicio'
	})
	// inicio
	.when('/index', {

		templateUrl: 'view/secundaria/index/infor.html',
		controller:  'inicio'
	})
	.when('/registro', {

		templateUrl: 'view/secundaria/registro/registro.html',
		controller:  'registro'
	})
		.when('/regi_person', {

			templateUrl: 'view/secundaria/registro/regi_person.php',
			controller:  'registro'
		})
		.when('/lis_person', {

			templateUrl: 'view/secundaria/registro/lis_person.html',
			controller:  'registro'
		})
		.when('/lis_person/:empleadoID', {

			templateUrl: 'view/secundaria/registro/lis_person.html',
			controller:  'registro'
		})
		.when('/materia', {

			templateUrl: 'view/secundaria/registro/materia.html',
			controller:  'registro'
		})
		.when('/acceso_coordinador', {

			templateUrl: 'view/secundaria/registro/acceso.html',
			controller:  'registro'
		})
		.when('/perfil_coordi/:empleadoID', {

			templateUrl: 'view/secundaria/registro/perfil_coordi.html',
			controller:  'registro'
		})
		.when('/lis_perfil/:empleadoID', {

			templateUrl: 'view/secundaria/registro/lis_perfil.html',
			controller:  'registro'
		})
	.when( '/404' , {

		templateUrl: 'view/secundaria/404.html',
		controller: 'inicio'
	} )
	.when( '/demarche_infor' , {

		templateUrl: 'view/secundaria/demarche/demarche_infor.html',
		controller: 'demarche'
	} )
		.when( '/de_registro' , {

			templateUrl: 'view/secundaria/demarche/registro.php',
			controller: 'demarche'
		} )
		.when( '/accesos' , {

			templateUrl: 'view/secundaria/demarche/access.html',
			controller: 'demarche'
		} )
		.when( '/permiso' , {

			templateUrl: 'view/secundaria/demarche/demarche_permi.html',
			controller: 'demarche'
		} )
		.when( '/permiso/:empleadoID' , {

			templateUrl: 'view/secundaria/demarche/demarche_permi.php',
			controller: 'demarche'
		} )
		.when( '/lis_permi' , {

			templateUrl: 'view/secundaria/demarche/lis_permi.html',
			controller: 'demarche'
		} )
		.when( '/lis_permi/:empleadoID' , {

			templateUrl: 'view/secundaria/demarche/lis_permi.html',
			controller: 'demarche'
		} )
		.when( '/retardo' , {

			templateUrl: 'view/secundaria/demarche/demarche_retar.html',
			controller: 'demarche'
		} )
	.when( '/infor_horary' , {

		templateUrl: 'view/secundaria/horary/infor_horary.html',
		controller: 'horary'
	} )
		.when( '/asignar' , {

		templateUrl: 'view/secundaria/horary/asignar.html',
		controller: 'horary'
		} )
			.when( '/acceso' , {

			templateUrl: 'view/secundaria/horary/acceso.html',
			controller: 'horary'
			} )
			.when( '/asignar_docente/:empleadoCI' , {

			templateUrl: 'view/secundaria/horary/asignar_docente.html',
			controller: 'horary'
			} )
			.when( '/asignar_docente2/:empleadoCI/:empleadoD' , {

			templateUrl: 'view/secundaria/horary/asignar_docente2.html',
			controller: 'horary'
			} )
		// configuracion de horario
		.when( '/acceso_confi' , {

		templateUrl: 'view/secundaria/horary/acceso_confi.html',
		controller: 'horary'
		} )
			.when( '/confi_horary/:empleadoCI' , {

				templateUrl: 'view/secundaria/horary/confi_horary.html',
				controller: 'horary'
			} )
			.when( '/confi_horary2/:empleadoCI_con' , {

				templateUrl: 'view/secundaria/horary/confi_horary2.html',
				controller: 'horary'
			} )



	.when( '/infor_stadistic' , {

		templateUrl: 'view/secundaria/stadistic/infor_stadistic.html',
		controller: 'stadistic'
	} )
		.when( '/seleccion' , {

		templateUrl: 'view/secundaria/stadistic/selection1.html',
		controller: 'stadistic'
		} )
		//		ASISTENCIA
			//		INDIVIDUAL
			.when( '/buscar_ced' , {

			templateUrl: 'view/secundaria/stadistic/bus_stad.html',
			controller: 'stadistic'
			} )
			.when('/asis_person_indi/:empleadoID/:empleadoMes', {

			templateUrl: 'view/secundaria/stadistic/asis_person_indi.html',
			controller:  'stadistic'
			})

			//		COORDINACION
			.when('/buscar_coordi', {

			templateUrl: 'view/secundaria/stadistic/buscar_coordi.html',
			controller:  'stadistic'
			})
			.when('/asis_coordi/:empleadoID/:empleadoMes', {

			templateUrl: 'view/secundaria/stadistic/asis_coordi.html',
			controller:  'stadistic'
			})

			//		SECCION Y AÑO	ASISTENCIA
			.when('/buscar_seccion', {

			templateUrl: 'view/secundaria/stadistic/bus_sec_ano.html',
			controller:  'stadistic'
			})
			.when('/reporte_seccion/:IDseccion/:IDano/:IDmes', {

			templateUrl: 'view/secundaria/stadistic/asis_sec_ano.html',
			controller:  'stadistic'
			})

			//		SECCION Y AÑO	INASISTENCIA
			.when('/buscar_seccion_ina', {

			templateUrl: 'view/secundaria/stadistic/buscar_secano_ina.html',
			controller:  'stadistic'
			})

			.when('/reporte_ina_seccion/:IDseccion/:IDano/:IDmes', {

			templateUrl: 'view/secundaria/stadistic/ina_secano.html',
			controller:  'stadistic'
			})

			//		SECCION Y AÑO	RETARDOS
			.when('/buscar_seccion_ret', {

			templateUrl: 'view/secundaria/stadistic/buscar_ret_secano.html',
			controller:  'stadistic'
			})

			.when('/reporte_ret_seccion/:IDseccion/:IDano/:IDmes', {

			templateUrl: 'view/secundaria/stadistic/ret_secano.html',
			controller:  'stadistic'
			})


		//		PERMISOS
			.when('/select_permi', {

			templateUrl: 'view/secundaria/stadistic/select_permi.html',
			controller:  'stadistic'
			})
			//		INDIVIDUAL
			.when('/person_permi', {

			templateUrl: 'view/secundaria/stadistic/person_permi.html',
			controller:  'stadistic'
			})
			.when('/permi_indi/:empleadoCI', {

			templateUrl: 'view/secundaria/stadistic/permi_indi.html',
			controller:  'stadistic'
			})
			//		COORDINACION
			.when('/coor_permi', {

			templateUrl: 'view/secundaria/stadistic/coor_permi.html',
			controller:  'stadistic'
			})
			.when('/permi_coor/:empleadoSec', {

			templateUrl: 'view/secundaria/stadistic/permi_coor.html',
			controller:  'stadistic'
			})
		//		INASISTENCIA
			.when('/select_ina', {

			templateUrl: 'view/secundaria/stadistic/select_ina.html',
			controller:  'stadistic'
			})
			//		INDIVIDUAL
				.when('/ina_indi', {

				templateUrl: 'view/secundaria/stadistic/ina_indi.html',
				controller:  'stadistic'
				})
				.when('/inasistencia/:empleadoID/:empleadoMes', {

				templateUrl: 'view/secundaria/stadistic/ina_person_indi.html',
				controller:  'stadistic'
				})
				// POR COORDINACION
				.when('/coordinacion', {

				templateUrl: 'view/secundaria/stadistic/buscar_coordi_ina.html',
				controller:  'stadistic'
				})
				.when('/lis_ina_coordi/:empleadoID/:empleadoMes', {

				templateUrl: 'view/secundaria/stadistic/lis_ina_coordi.html',
				controller:  'stadistic'
				})
		// RETARDOS
		.when('/select_ret', {

				templateUrl: 'view/secundaria/stadistic/select_ret.html',
				controller:  'stadistic'
				})
			//  INDIVIDUAL
			.when('/buscar_ret_indi', {

				templateUrl: 'view/secundaria/stadistic/buscar_ret_indi.html',
				controller:  'stadistic'
				})
				.when('/ret_person_indi/:empleadoID/:empleadoMes', {

					templateUrl: 'view/secundaria/stadistic/ret_person_indi.html',
					controller:  'stadistic'
				})
			// pPOR COORDINACION
			.when('/buscar_coordi_ret', {

				templateUrl: 'view/secundaria/stadistic/buscar_coordi_ret.html',
				controller:  'stadistic'
				})
				.when('/ret_coordi/:empleadoID/:empleadoMes', {

					templateUrl: 'view/secundaria/stadistic/ret_coordi.html',
					controller:  'stadistic'
				})
	//		RESPALDO
	.when('/respaldo', {

					templateUrl: 'view/secundaria/stadistic/exitoso.html',
					controller:  'stadistic'
				})
	// BONO ALIMENTARIO
	.when('/bono', {

		templateUrl: 'view/secundaria/stadistic/bono.html',
		controller:  'stadistic'
	})
		.when('/bono_docente/:empleadoMes', {

			templateUrl: 'view/secundaria/stadistic/bono_docente.html',
			controller:  'stadistic'
		})

		// CALENDARIZACION
	.when('/calendario', {

		templateUrl: 'view/secundaria/calendar/calendario.html',
		controller:  'calendar'
	})
	.when('/apertura', {

		templateUrl: 'view/secundaria/calendar/apertura.html',
		controller:  'calendar'
	})
	.when('/lis_fest', {

		templateUrl: 'view/secundaria/calendar/lis_fest.html',
		controller:  'calendar'
	})
	.when('/lis_fest/:IDfestejo', {

		templateUrl: 'view/secundaria/calendar/lis_fest.html',
		controller:  'calendar'
	})

	.when('/seleccione', {

		templateUrl: 'view/secundaria/calendar/selection.html',
		controller:  'calendar'
	})
	.when('/apertura_ano', {

		templateUrl: 'view/secundaria/calendar/aper_ano.php',
		controller:  'calendar'
	})
	.when('/cierre_ano', {

		templateUrl: 'view/secundaria/calendar/cier_ano.html',
		controller:  'calendar'
	})

	// PDF 
	.otherwise({

		redirectTo: '/404'
	})

} ] );


	appAngular.constant( 'configuracionGlobal' , {

		//propiedades

		'nombreDelSitio': 'Jesus Obrero',
		'api_url': 'http://localhost/api',
		'carpeta_imagenes': '/libs/images/'

	} )