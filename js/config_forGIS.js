/* Configuration file - epiMap
 * Change the webmap' settings here, accordingly with the associated comments (lines starting with "//").
 * Please keep in mind that parameters are case-sensitives.
 */

(function(){
	var globalParameters = {
			map : {
				// center (x, y : INTEGER) - Centers the map to the defined coordinates on start.
		        center : {
		            x : 19.880779,
		            y : 0.938321
		        },
		        // zoomLevel (INTEGER) - Default zoom level displayed on start.
		        zoomLevel : 8,
		        // zoom Max/Min (zoomLevelMax, zoomLevelMin : INTEGER) - Set the maximum and minimum zoom level.
		        zoomLevelMax : 28,
		        zoomLevelMin : 0			
			},
			data : {
				// epiDataset - Related to the delimiter-separated values dataset to be joined to the geometry.
				epiDataset : {
					// source (STRING) - Link to the epi data, can be remote or local.
					source : "data/cod_epi_Basankusu_191212.csv",
					// delimiter (STRING) - Defines the delimiter used in the dataset.
					delimiter : ",",
	                // remote (BOOLEAN) -  To be set as 'true' for online use. Set as 'false' to avoid CORS issues on local use.
	                remote : false,					
					// XMLHttpRequestHeader (header, value : STRING) - Set the request header for password-protected remote sources - Leave blank for local sources.
	                XMLHttpRequestHeader : {
	                    header : "",
	                    value  : ""
	                },
	                // fieldsForAnalysis - Defines the fields to be considered from the epi dataset.
	                fieldsForAnalysis : {                    
	                    // dimTime (STRING) - Temporal dimension, for the filter slider.
	                    dimTime : "Weeks",
	                    // temportal boundaries (timeMin, timeMax, defaultTime : INTERGER [defined] / STRING [default]) - Bound the temporal dimension : set a number for defined value, write a string for automatic value.
	                    timeMin : 13,
	                    timeMax : "",
	                    defaultTime : "49",
	                    // dimGeo (STRING) - Geographical dimension, usually 'p' codes. Joins to geometry.
	                    dimGeo : "pcode",
	                    // measure (STRING) - Includes the values recorded for a given dimTime (cases : t1, t2, t3, ...).
	                    measure : "cas",
	                    // cumulative (STRING) - Cumulative measure, sum the values for the given and the previous dimTime (cases : t1, t1 + t2, t1 + t2 + t3, ...).
	                    cumulative : "Cumulative_cases",
	                    // rate (STRING) - Field for the rate calculated with the "measure" value.
	                    rate : "Incidence",
	                    // cumulRate (STRING) - Field for the rate calculated with the "cumulative" value.
	                    cumulRate : "TA"
	                }                
				},
				
			},
			// Set the options for the analysis layers.
			analysis : {
				// Options for the rates layers.
				/* For each rate analysis
				 * "config" object properties (all param : STRING) :
				     * name : Name of the indicator to be displayed in the Map analysis selector.
				     * abbreviation : Abbreviated indicator - displayed in the legend and in the pop-ups.
				     * fieldRate : Field that contains the rate indicator in the epi dataset.
				     * fieldAbsolute : Field that contains the absolute indicator in the epi dataset.
				     * otherName : Other way to mention the indicator - displayed in the legend
				     * printName : Name of the indicator as it appears in the exported .pdf file.
				     * 
				 * "classes" object (value : INTEGER/REAL, color : STRING) :
				     * Define the ranges for the analysis by replacing the following values.
				     *      - *_less : Includes the values stricly inferior to the number, e.g : values < 5.
				     *      - *_between : Includes the values superior or equal to the first number and strictly inferior to the second number, e.g : 5 =< values < 10.
				     *      - *_more : Includes the values superior or equal to the number, e.g : values >= 150.
				     *      
				     * Colors are set in RGB as they will be automatically converted to RGBA once running the scripts.
				     * 
				 */				
				rates : {
	                analysis_1 : {
	                    config : {
	                        name            :   "Incidence",
	                        abbreviation    :   "I",
	                        fieldRate       :   "Incidence",
	                        fieldAbsolute   :   "cas",
	                        otherName       :   "Incidence ",
	                        printName       :   "Incidence (x100000)"
	                    },
	                    classes : {
	                        class1_less     :   {value : 10,             color : "rgb(182,237,240)"},
	                        class2_between  :   {value : [10, 40],       color : "rgb(145,205,237)"},
	                        class3_between  :   {value : [41, 60],      color : "rgb(107,174,232)"},
	                        class4_between  :   {value : [61, 120],     color : "rgb(61,144,227)"},
	                        class5_between  :   {value : [121, 200],    color : "rgb(32,114,214)"},
							class6_between  :   {value : [201, 400],    color : "rgb(32,76,189)"},
							class7_between  :   {value : [401, 960],    color : "rgb(25,44,168)"},
	                        class8_more     :   {value : 965,           color : "rgb(9,9,145)"}                   
	                    }
	                },
	                analysis_2 : {
	                    config : {
	                        name            :   "Taux d'attaque",
	                        abbreviation    :   "TA",
	                        fieldRate       :   "TA",
	                        fieldAbsolute   :   "Cumulative_cases",
	                        otherName       :   "Taux d'attaque",
	                        printName       :   "Taux d'attaque"
	                    },
	                    classes : {
	                        class1_less     :   {value : 0.01,             color : "rgb(182,237,240)"},
	                        class2_between  :   {value : [0.01, 0.5],       color : "rgb(145,205,237)"},
	                        class3_between  :   {value : [0.51, 1],      color : "rgb(107,174,232)"},
	                        class4_between  :   {value : [1.01, 1.5],     color : "rgb(61,144,227)"},
	                        class5_between  :   {value : [1.501, 2.801],    color : "rgb(32,114,214)"},
	                        class6_more     :   {value : 2.99,           color : "rgb(9,9,145)"}
	                    }
	                }					
				},
				// cases (all param : INTEGER) - define the default range of circle size for each analysis. 
				cases : {
	                analysis_1 : {
	                    minArea : 10,
	                    maxArea : 10000                    
	                },
	                analysis_2 : {
	                    minArea : 15,
	                    maxArea : 15000
	                }				
				},            
				geoSources : {
					// Insert only geometry sources with the CRS 3857
					polygons : {
						// display (BOOLEAN) - Choose to display the layer or not.
						display: true,
						// name (STRING) - Name of the layer as it is going to be displayed in the legend.
		                name    : "",
		                // source (STRING) - Source of the layer's data.
		                source  : "data/AS.geojson",
		                // format (STRING) - Set the format of the dataset. Can be either "TopoJSON", "GeoJSON" or "EsriJSON".
		                format  : "GeoJSON",
		                // geoCode (STRING) - Joined field ('p' code).
		                geoCode : "pcode",
		                // geoName (STRING) - Matching names for labels.
		                geoName : "Name"
					},
					// Insert only geometry sources with the CRS 3857
					points : {
						// display (BOOLEAN) - Choose to display the layer or not.
						display: true,						
						// name (STRING) - Name of the layer as it is going to be displayed in the legend.
		                name    : "",
		                // source (STRING) - Source of the layer's data.
		                source  : "data/AS_P.geojson",
		                // format (STRING) - Set the format of the dataset.
		                format  : "GeoJSON",
		                // geoCode (STRING) - Joined field ('p' code).
		                geoCode : "pcode",
		                // geoName (STRING) - Matching names for labels.
		                geoName : "Name"
		            }	            
				},
				// Define the style of the polygons (elements that don't depend on the analysis).
				polygonsStyle : {
					// outline - For the outlines
					outline : {
						// strokeColor (STRING) - RGBA string that contains the color for the outlines.
						strokeColor : "rgba(0,0,0,0.4)",
						// strokeWidth (REAL) - Defines the width of circles' outlines.
						strokeWidth : 1
					},
					// colors - Define the transparency and the "0" value.
					colors : {
						// transparency (STRING) - Default transparency for the fill colors.
						transparency : "0.9",
						// class0 (STRING) - Color for the "0" value.
						class0 : "rgba(0,0,0,0)",
					}
				},
				// Define options for the cases analysis.
	            casesStyle : {
	            	// titleForLegend (STRING) - Name of the layer as it is going to be displayed in the legend.
	                titleForLegend : "Nouveau cas",
	                // fill (color : STRING) - RGBA string that contains the fill color for the circles.
	                fill : {
	                    color : "rgba(251,48,8)"
	                },
	                // stroke - Set the display of the circles' outlines.
	                stroke : {
	                	// color (STRING) - RGBA string that contains the fill color for the circles' outlines. 
	                    color : "rgba(251,48,8)",
	                    // width (REAL) - Defines the width of circles' outlines.
	                    width : 1
	                },
	                // sliderSizeStart (array of INTEGERs) - Define the default range of size for the circles. 
	                sliderSizeStart : [200, 10000]
	            }
			},
			// context - Array of objects. Each object represents one layer. MUST BE POLYGONS.
			context : [
				{
					// name (STRING) - Name of the layer as it is going to be displayed in the legend.
	                name    : "Limite zone de santé",
	                // source (STRING) - Source of the layer's data.
	                source  : "data/ZDS.geojson",
	                // format (STRING) - Set the format of the dataset.
	                format  : "GeoJSON",
				    // geoName (STRING) - Matching names for labels.
	                // style - Set the style of the layer.
	                style   : {
	                	// fillColor (STRING) - RGBA string that contains the fill color for the polygons. 
	                    fillColor   : "rgba(160,32,11,0)",
	                    // strokeColor (STRING) - RGBA string that define the color of polygons' outlines.
	                    strokeColor : "rgba(0,0,0)",
	                    // strokeWidth (REAL) - Defines the width of polygons' outlines.
	                    strokeWidth : 1.5
	                },
	                // display (BOOLEAN) - To be set to "true" in order to display the layer. Set to "false" to hide it.
	                display : true
				}  			
			],
			// Define layout components (all param : STRING) - Title, descriptions, etc...
		    layout : {
		        // appTitle - Set the title of the webmap.
		        appTitle : "R.D.CONGO_Equateur_Situation epidemiologique de la rougeole par aire de santé dans zone de sante Basankusu _S13-S51_2019 ",
		        // analysisSectionTitle - Section title for analysis selector.
		        analysisSectionTitle : "Analyse Epidemiologique",
		        // analysisDescription - Description below analysis title (Use HTML tags for formatting).
		        analysisDescription : "<i>Choisissez l'analyse que vous souhaitez afficher sur la carte à l'aide de la liste déroulante ci-dessous. <b>Le Incidence hebdomadaire </b> représente le ratio de nouveaux cas parmi la population de l’aire de santé pour une semaine donnée.<b>Le Taux d'attaque </b> représente la proportion de personnes malade sur la proportion de personnes exposées à un risque reconnu de l’aire de santé</i>.<br><c><strong><mark> N.b L'analyse de l'incidence a été faite sur une population de 100 000</mark></strong></c><br><d>I:Incidence</d><br><f>TA:Taux d'attaque (%)</f>",
		        // dimensionTitle - Title for the dimension used to filter the data with the slider.
		        dimensionTitle : "Filtrer par semaine",
		        // dimensionDescription - Description above the filter slider (Use HTML tags for formatting).
		        dimensionDescription : "<i>Choisissez les données de la semaine que vous souhaitez afficher sur la carte en déplaçant ce curseur. Cela commence à la semaine 13.</i>",
		        // dimensionIndicator - Label that goes along with the filtering value.
		        dimensionIndicator : "Semaine",
		        // selectionTitle - Title for the feature selection.
		        selectionTitle : "Information",
		        // selectionDescription - Description above the selection's drop-down list (Use HTML tags for formatting).
		        selectionDescription : "<i>Sélectionnez une aire de santé à l'aide de la liste déroulante ci-dessous ou en cliquant sur la carte.</i>",
		        // selectionDefault - Define default text for selector (displayed when no features are selected).
		        selectionDefault : "Choisissez une aire de santé...",
		        
		        // THE THREE ATTRIBUTES BELOW ARE NOT IMPLEMENTED YET
		        // appDisclaimer (STRING) - Write a disclaimer
		        appDisclaimer : "",
		        // displayAppDisclaimer (BOOLEAN) - Hide or show app disclaimer.
		        displayAppDisclaimer : true,
		        // mapSettings (BOOLEAN) - Hide or show map settings.
		        mapSettings : true		        
		    },
		    // Define legend display parameters.
	        legendParam : {
	        	// forGeometryTitle (STRING) - Choose which property of the geometry object will be used to display the geometry title.
	            forGeometryTitle : "name",
	            // forAnalysisTitle (STRING) - Choose which property of the analysis object will be used to display the analysis title.
	            forAnalysisTitle : "otherName",
	            // verticalGap (REAL) - Set space between two features (between classes).
	            verticalGap : 10,
	            // horizontalGap (REAL) - Set space between a graphic element and its label.
	            horizontalGap : 20,
	            // rectangleHeight (REAL) - Define the height of the graphic rectangles.
	            rectangleHeight : 10,
	            // rectangleWidth (REAL) - Define the width of the graphic rectangles.
	            rectangleWidth  : 18,	
	            // labelSize (REAL) - Define label font size.
	            labelSize   : 8,    
	            // labelColor (STRING) - Define label font color with an RGBA string.
	            labelColor  : "rgba(0,0,0,1)",
	            // labelShift (INTEGER) - Arrange label vertical gap with the rectangles. 
	            labelShift  : 6,
	            // otherSectionTitle (STRING) - Title for the other layers' section.
	            otherSectionTitle   : "Limite sanitaire"
	        },
	        // Define text settings for charts layout (all param : STRING) - Title, legend, tooltip, etc... 
	        chartsLayout : {
	            cumulative : {
	                title   : "Taux d'attaque",
	                legend  : "Taux d'attaque (%)",
	                axis    : "Taux d'attaque",
	                tooltip : "Taux d'attaque"
	            },
	            measure : {
	                title   : "Incidence",                
	                legend  : "Incidence",
	                axis    : "Incidence",
	                tooltip : "Incidence"                
	            },
	            combined : {
	                title   : "Nouveau cas",
	                bars : {
	                    legend  : "Barre : Nouveau cas par semaine",
	                    axis    : "Nouveau cas",
	                    tooltip : "Nouveau cas"                    
	                },
	                line : {
	                    legend  : "Ligne : Cas cumulé",
	                    axis    : "Cas cumulé",
	                    tooltip : "Cas cumulé"                    
	                }                
	            }
	        },
	};
	
	
	
	
	
	// Send config to global object
	configFile.mapViewInit = globalParameters.map;
	configFile.data.analysisLayer.geometry = globalParameters.analysis.geoSources.polygons;
	configFile.data.analysisLayer.geometryPoints = globalParameters.analysis.geoSources.points;
	configFile.data.analysisLayer.epiDataset = globalParameters.data.epiDataset;
	configFile.data.otherLayers = globalParameters.context;
	configFile.layout = globalParameters.layout;
	configFile.analysisFunctions.style.circles = globalParameters.analysis.cases;
	configFile.analysisFunctions.style.outline = globalParameters.analysis.polygonsStyle.outline;
	configFile.analysisFunctions.style.colors = globalParameters.analysis.polygonsStyle.colors;
	configFile.analysisFunctions.style.colors.glob = {};
	configFile.analysisFunctions.types.rates = globalParameters.analysis.rates;
	configFile.analysisFunctions.style.circles = globalParameters.analysis.cases;
	configFile.analysisFunctions.legendParam = globalParameters.legendParam;
	configFile.analysisFunctions.chartsLayout = globalParameters.chartsLayout;
})();