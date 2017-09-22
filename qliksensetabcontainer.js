define(["jquery","qlik"], function($, qlik) {


	return {
      	initialProperties: {
		  version: 1.0,
          serverUrl: "",
          qvf: "",
		  btnLoc: "top",
		  btnColorAsBorder: "default",
		  btnWidth: "",
		  btnBgColor: "#C0C0C0",
		  btnTxtColor: "#FFFFFF",
		  obj1Label: "Object 1",
		  obj1Id: "",
		  obj1ShowCond: "1",
		  obj1BgColor: "",
		  obj1TxtColor: "",
		  obj1ToolTip: "",
		  obj1CurrSel: false,
		  obj1NoInteraction: true,
		  obj1NoAnimations: false,
		  obj1ClearAll: false,
		  obj1BookmarkId: "",
		  obj2Label: "Object 2",
		  obj2Id: "",
		  obj2ShowCond: "1",
		  obj2BgColor: "",
		  obj2TxtColor: "",
		  obj2ToolTip: "",
		  obj2CurrSel: false,
		  obj2NoInteraction: true,
		  obj2NoAnimations: false,
		  obj2ClearAll: false,
		  obj2BookmarkId: "",
		  obj3Label: "Object 3",
		  obj3Id: "",
		  obj3ShowCond: "0",
		  obj3BgColor: "",
		  obj3TxtColor: "",
		  obj3ToolTip: "",
		  obj3CurrSel: false,
		  obj3NoInteraction: true,
		  obj3NoAnimations: false,
		  obj3ClearAll: false,
		  obj3BookmarkId: "",
		  obj4Label: "Object 4",
		  obj4Id: "",
		  obj4ShowCond: "0",
		  obj4BgColor: "",
		  obj4TxtColor: "",
		  obj4ToolTip: "",
		  obj4CurrSel: false,
		  obj4NoInteraction: true,
		  obj4NoAnimations: false,
		  obj4ClearAll: false,
		  obj4BookmarkId: "",
		  obj5Label: "Object 5",
		  obj5Id: "",
		  obj5ShowCond: "0",
		  obj5BgColor: "",
		  obj5TxtColor: "",
		  obj5ToolTip: "",
		  obj5CurrSel: false,
		  obj5NoInteraction: true,
		  obj5NoAnimations: false,
		  obj5ClearAll: false,
		  obj5BookmarkId: ""
		  },
    	//property panel
		definition: {
            type: "items",
            component: "accordion",
            items: {
                settings: {
				  	uses: "settings",
                    items: {
					  	ctnSetttings: {
                          	type: "items",
                          	label: "Container Settings",
                          	items: {
								server_url: {
									ref: "serverUrl",
									expression: "optional",
									label: "Server URL",
									type: "string",
									defaultValue: ""
								},
								qvf: {
									ref: "qvf",
									expression: "optional",
									label: "QVF",
									type: "string",
									defaultValue: ""
								},
							  	btnColorAsBorder: {
									ref: "btnColorAsBorder",
									component: "dropdown",
									label: "Container BG Color",
									type: "string",
									defaultValue: "default",
									options: [{
									  value: "default",
									  label: "Use Default Button BG Color"
									}, {
									  value: "current",
									  label: "Use Current Object BG Color"
									}]
								},
							  	button_loc: {
									ref: "btnLoc",
									component: "dropdown",
									label: "Button Location",
									type: "string",
									defaultValue: "top",
									options: [{
									  value: "top",
									  label: "Top"
									}, {
									  value: "bottom",
									  label: "Bottom"
									}, {
									  value: "left",
									  label: "Left"
									}, {
									  value: "right",
									  label: "Right"
									}]
								},
							  	button_width: {
                                    ref: "btnWidth",
                                    expression: "optional",
                                    label: "Button Width",
                                    type: "string",
                                    defaultValue: ""
                                },
							  	button_bg_color: {
                                    ref: "btnBgColor",
                                    expression: "optional",
                                    label: "Button BG Color",
                                    type: "string",
                                    defaultValue: "#C0C0C0"
                                },
							  	button_txt_color: {
                                    ref: "btnTxtColor",
                                    expression: "optional",
                                    label: "Button Txt Color",
                                    type: "string",
                                    defaultValue: "#FFFFFF"
                                }
							}
                        },
                      	obj1Header: {
                          	type: "items",
                          	label: "Container Object 1",
                          	items: {
                                obj1_label: {
                                    ref: "obj1Label",
                                    expression: "optional",
                                    label: "Object 1 Label",
                                    type: "string",
                                    defaultValue: ""
                                },
                                obj1_Id: {
                                    ref: "obj1Id",
                                    expression: "optional",
                                    label: "Object 1 ID",
                                    type: "string",
                                    defaultValue: ""
                                },
                                obj1_showCond: {
                                    ref: "obj1ShowCond",
                                    expression: "optional",
                                    label: "Object 1 Show Condition",
                                    type: "string",
                                    defaultValue: ""
                                },
                                obj1_BgColor: {
                                    ref: "obj1BgColor",
                                    expression: "optional",
                                    label: "Object 1 Bg Color",
                                    type: "string",
                                    defaultValue: ""
                                },
                                obj1_TxtColor: {
                                    ref: "obj1TxtColor",
                                    expression: "optional",
                                    label: "Object 1 Txt Color",
                                    type: "string",
                                    defaultValue: ""
                                },
                                obj1_ToolTip: {
                                    ref: "obj1ToolTip",
                                    expression: "optional",
                                    label: "Object 1 Tool Tip",
                                    type: "string",
                                    defaultValue: ""
                                },
                                obj1_CurrSelToolbar: {
                                    ref: "obj1CurrSel",
                                    label: "Message 1 Current Selections",
                                    type: "boolean",
                                    defaultValue: false
                                },
                                obj1_NoInteraction: {
                                    ref: "obj1NoInteraction",
                                    label: "Message 1 No Interactions",
                                    type: "boolean",
                                    defaultValue: true
                                },
                                obj1_NoAnimations: {
                                    ref: "obj1NoAnimations",
                                    label: "Message 1 No Animations",
                                    type: "boolean",
                                    defaultValue: false
                                },
                                obj1_ClearAll: {
                                    ref: "obj1ClearAll",
                                    label: "Message 1 Clear All",
                                    type: "boolean",
                                    defaultValue: false
                                },
                                obj1_BookmarkId: {
                                    ref: "obj1BookmarkId",
                                    expression: "optional",
                                    label: "Message 1 Bookmark ID",
                                    type: "string",
                                    defaultValue: ""
                                }
                            }
                        },
                      	obj2Header: {
                          	type: "items",
                          	label: "Container Object 2",
                          	items: {
                                obj2_label: {
                                    ref: "obj2Label",
                                    expression: "optional",
                                    label: "Object 2 Label",
                                    type: "string",
                                    defaultValue: ""
                                },
                                obj2_Id: {
                                    ref: "obj2Id",
                                    expression: "optional",
                                    label: "Object 2 ID",
                                    type: "string",
                                    defaultValue: ""
                                },
                                obj2_showCond: {
                                    ref: "obj2ShowCond",
                                    expression: "optional",
                                    label: "Object 2 Show Condition",
                                    type: "string",
                                    defaultValue: ""
                                },
                                obj2_BgColor: {
                                    ref: "obj2BgColor",
                                    expression: "optional",
                                    label: "Object 2 Bg Color",
                                    type: "string",
                                    defaultValue: ""
                                },
                                obj2_TxtColor: {
                                    ref: "obj2TxtColor",
                                    expression: "optional",
                                    label: "Object 2 Txt Color",
                                    type: "string",
                                    defaultValue: ""
                                },
                                obj2_ToolTip: {
                                    ref: "obj2ToolTip",
                                    expression: "optional",
                                    label: "Object 2 Tool Tip",
                                    type: "string",
                                    defaultValue: ""
                                },
                                obj2_CurrSelToolbar: {
                                    ref: "obj2CurrSel",
                                    label: "Message 1 Current Selections",
                                    type: "boolean",
                                    defaultValue: false
                                },
                                obj2_NoInteraction: {
                                    ref: "obj2NoInteraction",
                                    label: "Message 1 No Interactions",
                                    type: "boolean",
                                    defaultValue: true
                                },
                                obj2_NoAnimations: {
                                    ref: "obj2NoAnimations",
                                    label: "Message 1 No Animations",
                                    type: "boolean",
                                    defaultValue: false
                                },
                                obj2_ClearAll: {
                                    ref: "obj2ClearAll",
                                    label: "Message 1 Clear All",
                                    type: "boolean",
                                    defaultValue: false
                                },
                                obj2_BookmarkId: {
                                    ref: "obj2BookmarkId",
                                    expression: "optional",
                                    label: "Message 1 Bookmark ID",
                                    type: "string",
                                    defaultValue: ""
                                }
                            }
                        },
                      	obj3Header: {
                          	type: "items",
                          	label: "Container Object 3",
                          	items: {
                                obj3_label: {
                                    ref: "obj3Label",
                                    expression: "optional",
                                    label: "Object 3 Label",
                                    type: "string",
                                    defaultValue: ""
                                },
                                obj3_Id: {
                                    ref: "obj3Id",
                                    expression: "optional",
                                    label: "Object 3 ID",
                                    type: "string",
                                    defaultValue: ""
                                },
                                obj3_showCond: {
                                    ref: "obj3ShowCond",
                                    expression: "optional",
                                    label: "Object 3 Show Condition",
                                    type: "string",
                                    defaultValue: ""
                                },
                                obj3_BgColor: {
                                    ref: "obj3BgColor",
                                    expression: "optional",
                                    label: "Object 3 Bg Color",
                                    type: "string",
                                    defaultValue: ""
                                },
                                obj3_TxtColor: {
                                    ref: "obj3TxtColor",
                                    expression: "optional",
                                    label: "Object 3 Txt Color",
                                    type: "string",
                                    defaultValue: ""
                                },
                                obj3_ToolTip: {
                                    ref: "obj3ToolTip",
                                    expression: "optional",
                                    label: "Object 3 Tool Tip",
                                    type: "string",
                                    defaultValue: ""
                                },
                                obj3_CurrSelToolbar: {
                                    ref: "obj3CurrSel",
                                    label: "Message 1 Current Selections",
                                    type: "boolean",
                                    defaultValue: false
                                },
                                obj3_NoInteraction: {
                                    ref: "obj3NoInteraction",
                                    label: "Message 1 No Interactions",
                                    type: "boolean",
                                    defaultValue: true
                                },
                                obj3_NoAnimations: {
                                    ref: "obj3NoAnimations",
                                    label: "Message 1 No Animations",
                                    type: "boolean",
                                    defaultValue: false
                                },
                                obj3_ClearAll: {
                                    ref: "obj3ClearAll",
                                    label: "Message 1 Clear All",
                                    type: "boolean",
                                    defaultValue: false
                                },
                                obj3_BookmarkId: {
                                    ref: "obj3BookmarkId",
                                    expression: "optional",
                                    label: "Message 1 Bookmark ID",
                                    type: "string",
                                    defaultValue: ""
                                }
                            }
                        },
                      	obj4Header: {
                          	type: "items",
                          	label: "Container Object 4",
                          	items: {
                                obj4_label: {
                                    ref: "obj4Label",
                                    expression: "optional",
                                    label: "Object 4 Label",
                                    type: "string",
                                    defaultValue: ""
                                },
                                obj4_Id: {
                                    ref: "obj4Id",
                                    expression: "optional",
                                    label: "Object 4 ID",
                                    type: "string",
                                    defaultValue: ""
                                },
                                obj4_showCond: {
                                    ref: "obj4ShowCond",
                                    expression: "optional",
                                    label: "Object 4 Show Condition",
                                    type: "string",
                                    defaultValue: ""
                                },
                                obj4_BgColor: {
                                    ref: "obj4BgColor",
                                    expression: "optional",
                                    label: "Object 4 Bg Color",
                                    type: "string",
                                    defaultValue: ""
                                },
                                obj4_TxtColor: {
                                    ref: "obj4TxtColor",
                                    expression: "optional",
                                    label: "Object 4 Txt Color",
                                    type: "string",
                                    defaultValue: ""
                                },
                                obj4_ToolTip: {
                                    ref: "obj4ToolTip",
                                    expression: "optional",
                                    label: "Object 4 Tool Tip",
                                    type: "string",
                                    defaultValue: ""
                                },
                                obj4_CurrSelToolbar: {
                                    ref: "obj4CurrSel",
                                    label: "Message 1 Current Selections",
                                    type: "boolean",
                                    defaultValue: false
                                },
                                obj4_NoInteraction: {
                                    ref: "obj4NoInteraction",
                                    label: "Message 1 No Interactions",
                                    type: "boolean",
                                    defaultValue: true
                                },
                                obj4_NoAnimations: {
                                    ref: "obj4NoAnimations",
                                    label: "Message 1 No Animations",
                                    type: "boolean",
                                    defaultValue: false
                                },
                                obj4_ClearAll: {
                                    ref: "obj4ClearAll",
                                    label: "Message 1 Clear All",
                                    type: "boolean",
                                    defaultValue: false
                                },
                                obj4_BookmarkId: {
                                    ref: "obj4BookmarkId",
                                    expression: "optional",
                                    label: "Message 1 Bookmark ID",
                                    type: "string",
                                    defaultValue: ""
                                }
                            }
                    	},
                      	obj5Header: {
                          	type: "items",
                          	label: "Container Object 5",
                          	items: {
                                obj5_label: {
                                    ref: "obj5Label",
                                    expression: "optional",
                                    label: "Object 5 Label",
                                    type: "string",
                                    defaultValue: ""
                                },
                                obj5_Id: {
                                    ref: "obj5Id",
                                    expression: "optional",
                                    label: "Object 5 ID",
                                    type: "string",
                                    defaultValue: ""
                                },
                                obj5_showCond: {
                                    ref: "obj5ShowCond",
                                    expression: "optional",
                                    label: "Object 5 Show Condition",
                                    type: "string",
                                    defaultValue: ""
                                },
                                obj5_BgColor: {
                                    ref: "obj5BgColor",
                                    expression: "optional",
                                    label: "Object 5 Bg Color",
                                    type: "string",
                                    defaultValue: ""
                                },
                                obj5_TxtColor: {
                                    ref: "obj5TxtColor",
                                    expression: "optional",
                                    label: "Object 5 Txt Color",
                                    type: "string",
                                    defaultValue: ""
                                },
                                obj5_ToolTip: {
                                    ref: "obj5ToolTip",
                                    expression: "optional",
                                    label: "Object 5 Tool Tip",
                                    type: "string",
                                    defaultValue: ""
                                },
                                obj5_CurrSelToolbar: {
                                    ref: "obj5CurrSel",
                                    label: "Message 1 Current Selections",
                                    type: "boolean",
                                    defaultValue: false
                                },
                                obj5_NoInteraction: {
                                    ref: "obj5NoInteraction",
                                    label: "Message 1 No Interactions",
                                    type: "boolean",
                                    defaultValue: true
                                },
                                obj5_NoAnimations: {
                                    ref: "obj5NoAnimations",
                                    label: "Message 1 No Animations",
                                    type: "boolean",
                                    defaultValue: false
                                },
                                obj5_ClearAll: {
                                    ref: "obj5ClearAll",
                                    label: "Message 1 Clear All",
                                    type: "boolean",
                                    defaultValue: false
                                },
                                obj5_BookmarkId: {
                                    ref: "obj5BookmarkId",
                                    expression: "optional",
                                    label: "Message 1 Bookmark ID",
                                    type: "string",
                                    defaultValue: ""
                                }
                            }
                        }
                    }
                }
            }
		},
    	snapshot: {
			canTakeSnapshot: false
		},



		paint: function ($element, layout) {

      		var app = qlik.currApp();

          	var html = "";

		  	var srvUrl = layout.serverUrl;
		  	if(typeof(srvUrl) != "undefined" || srvUrl.length == 0){
				srvUrl = window.location.href.substr(0,window.location.href.indexOf("/sense/app/"));
			}

		  	var qvfSnapshotMode = false;
			var qvfAppId = layout.qvf;
		  	if(typeof(qvfAppId) != "undefined" || qvfAppId.length == 0){
			  	var qvfAppIdStart = window.location.href.indexOf("/sense/app/")+11;
				var qvfAppIdEnd = window.location.href.indexOf("/sheet/");
				if(window.location.href.indexOf("/sheet/") > 0) {
					qvfSnapshotMode = true;
				}
				qvfAppId = window.location.href.substr(qvfAppIdStart,qvfAppIdEnd - qvfAppIdStart);
			}

          	var url = srvUrl + "/single?appid=" + qvfAppId + "&obj=";

          	var defBgColor = "#C0C0C0";
		  	if(typeof(layout.btnBgColor) != "undefined"){
				defBgColor = layout.btnBgColor;
			}

			var defTxtColor = "#FFFFFF";
          	if(typeof(layout.btnTxtColor) != "undefined"){
				defTxtColor = layout.btnTxtColor;
			}

          	var iframe = "";
          	var iframe_defaultSet = false;

            var showObjs = Number(layout.obj1ShowCond)
            	+ Number(layout.obj2ShowCond)
            	+ Number(layout.obj3ShowCond)
            	+ Number(layout.obj4ShowCond)
            	+ Number(layout.obj5ShowCond);

          	var buttonStyle = "border-width: 0px; padding: 2px 6px 2px 6px; border-color: #28a745; border-radius: 0.2rem; height: 32px;"; //box-shadow: -3px 2px 2px 0px #d3d3d3; border-radius: 15px 50px;


				if (layout.btnLoc == "bottom" || layout.btnLoc == "top"){
					buttonStyle = buttonStyle + " margin: 0px 3px 6px 2px;";
		  	}
		  	else {
			  	buttonStyle = buttonStyle + " margin: 2px 10px 2px 6px;";
				}

		  	if(Number("0" + layout.btnWidth) > 0) {
				buttonStyle = buttonStyle + " width: " + layout.btnWidth + "px";
		  	}

            // Only build tabs/buttons if more than one tab is enabled/accessible
          	if(showObjs > 0) {

              	// Object 1 button/tab
              	if(Number(layout.obj1ShowCond) == 1) {
                  	var objBgColor = defBgColor;
                  	var objTxtColor = defTxtColor;
				  	var objTitle = layout.obj1Label;
				  	if(typeof(layout.obj1ToolTip) != "undefined"){
                      	objTitle = layout.obj1ToolTip;
                    }
                  	if(typeof(layout.obj1BgColor) != "undefined"){
                      	objBgColor = layout.obj1BgColor;
                    }
					if(typeof(layout.obj1TxtColor) != "undefined"){
                     	objTxtColor = layout.obj1TxtColor;
                    }

				  	if(layout.btnColorAsBorder == 'default'){
                  		html = html + "<button title='" + objTitle + "' style='color: " + objTxtColor + "; background-color: " + objBgColor + ";" + buttonStyle + "' onclick=\"document.getElementById('target').src = '";
					}
				  	else {
					  	html = html + "<button title='" + objTitle + "' style='color: " + objTxtColor + "; background-color: " + objBgColor + ";" + buttonStyle + "' onclick=\"document.getElementById('target').style.hover = '#29412b';document.getElementById('target').src = '";
					}

					if(layout.obj1Id.substring(0,7) == "HTTP://" || layout.obj1Id.substring(0,8) == "HTTPS://"){
						html = html + layout.obj1Id;
					}
				  	else {
					  	html = html + url + layout.obj1Id;
					  	if(layout.obj1CurrSel || layout.obj1NoInteraction || layout.obj1NoAnimations){
							html = html + '&opt=';
							if (layout.obj1CurrSel && (layout.obj1NoInteraction || layout.obj1NoAnimations)){
							  html = html + 'currsel%2C';
							}
							if (layout.obj1CurrSel && layout.obj1NoInteraction == false && layout.obj1NoAnimations == false){
							  html = html + 'currsel';
							}
							if (layout.obj1NoInteraction && layout.obj1NoAnimations) {
							  html = html + 'noanimate%2Cnointeraction';
							}
							if (layout.obj1NoInteraction && layout.obj1NoAnimations == false) {
							  html = html + 'nointeraction';
							}
							if (layout.obj1NoAnimations && layout.obj1NoInteraction == false) {
							  html = html + 'noanimate';
							}
					  	}
					  	if (layout.obj1ClearAll) {
							html = html + '&select=clearall';
					  	}
					  	if (typeof(layout.obj1BookmarkId) != "undefined") {
							html = html + '&bookmark=' + layout.obj1BookmarkId;
					  	}
					}
				  	html = html + "';\"> " + layout.obj1Label + " </button>";

                  	if(iframe_defaultSet == false){
					  	if(layout.btnColorAsBorder == 'default'){
						  	iframe = "<iframe style='border:1px solid " + defBgColor + "; height: calc(100% - 2px); width: calc(100% - 2px); display:block;' id='target' src='";
						}
					  	else {
					  		iframe = "<iframe style='border:1px solid " + objBgColor + "; height: calc(100% - 2px); width: calc(100% - 2px); display:block;' id='target' src='";
						}

					  	if(layout.obj1Id.substring(0,7) == "HTTP://" || layout.obj1Id.substring(0,8) == "HTTPS://"){
							iframe = iframe + layout.obj1Id + "' />";
                  		}
					  	else {
							iframe = iframe + url + layout.obj1Id;
						  	if(layout.obj1CurrSel || layout.obj1NoInteraction || layout.obj1NoAnimations){
								iframe = iframe + '&opt=';
							  	if (layout.obj1CurrSel && (layout.obj1NoInteraction || layout.obj1NoAnimations)){
									iframe = iframe + 'currsel%2C';
							  	}
							  	if (layout.obj1CurrSel && layout.obj1NoInteraction == false && layout.obj1NoAnimations == false){
									iframe = iframe + 'currsel';
							  	}
							  	if (layout.obj1NoInteraction && layout.obj1NoAnimations) {
									iframe = iframe + 'noanimate%2Cnointeraction';
							  	}
							  	if (layout.obj1NoInteraction && layout.obj1NoAnimations == false) {
									iframe = iframe + 'nointeraction';
							  	}
							  	if (layout.obj1NoAnimations && layout.obj1NoInteraction == false) {
									iframe = iframe + 'noanimate';
							  	}
						  	}
						  	if (layout.obj1ClearAll) {
								iframe = iframe + '&select=clearall';
						  	}
						  	if (typeof(layout.obj1BookmarkId) != "undefined") {
							  	iframe = iframe + '&bookmark=' + layout.obj1BookmarkId;
							}
							iframe = iframe + "' />";
					  	}
                		iframe_defaultSet = true;
					 }
                }

              	// Object 2 button/tab
                if(Number(layout.obj2ShowCond) == 1) {
                  	var objBgColor = defBgColor;
                  	var objTxtColor = defTxtColor;
                  	var objTitle = layout.obj2Label;
				  	if(typeof(layout.obj2ToolTip) != "undefined"){
                      	objTitle = layout.obj2ToolTip;
                    }
                  	if(typeof(layout.obj2BgColor) != "undefined"){
                      	objBgColor = layout.obj2BgColor;
                    }
					if(typeof(layout.obj2TxtColor) != "undefined"){
                     	objTxtColor = layout.obj2TxtColor;
                    }

                  	if(layout.btnColorAsBorder == 'default'){
                  		html = html + "<button title='" + objTitle + "' style='border-radius: 15px 50px; color: " + objTxtColor + "; background-color: " + objBgColor + ";" + buttonStyle + "' onclick=\"document.getElementById('target').src = '";
					}
				  	else {
					  	html = html + "<button title='" + objTitle + "' style='border-radius: 15px 50px; color: " + objTxtColor + "; background-color: " + objBgColor + ";" + buttonStyle + "' onclick=\"document.getElementById('target').style.borderColor = '" + objBgColor + "';document.getElementById('target').src = '";
					}

					if(layout.obj2Id.substring(0,7) == "HTTP://" || layout.obj2Id.substring(0,8) == "HTTPS://"){
						html = html + layout.obj2Id;
					}
				  	else {
					  	html = html + url + layout.obj2Id;
					  	if(layout.obj2CurrSel || layout.obj2NoInteraction || layout.obj2NoAnimations){
							html = html + '&opt=';
							if (layout.obj2CurrSel && (layout.obj2NoInteraction || layout.obj2NoAnimations)){
							  html = html + 'currsel%2C';
							}
							if (layout.obj2CurrSel && layout.obj2NoInteraction == false && layout.obj2NoAnimations == false){
							  html = html + 'currsel';
							}
							if (layout.obj2NoInteraction && layout.obj2NoAnimations) {
							  html = html + 'noanimate%2Cnointeraction';
							}
							if (layout.obj2NoInteraction && layout.obj2NoAnimations == false) {
							  html = html + 'nointeraction';
							}
							if (layout.obj2NoAnimations && layout.obj2NoInteraction == false) {
							  html = html + 'noanimate';
							}
					  	}
					  	if (layout.obj2ClearAll) {
							html = html + '&select=clearall';
					  	}
					  	if (typeof(layout.obj2BookmarkId) != "undefined") {
							html = html + '&bookmark=' + layout.obj2BookmarkId;
					  	}
					}
				  	html = html + "';\"> " + layout.obj2Label + " </button>";

                  	if(iframe_defaultSet == false){
					  	if(layout.btnColorAsBorder == 'default'){
						  	iframe = "<iframe style='border-radius: 5px; border:1px solid " + defBgColor + "; height: calc(100% - 2px); width: calc(100% - 2px); display:block;' id='target' src='";
						}
					  	else {
					  		iframe = "<iframe style='border-radius: 5px; border:1px solid " + objBgColor + "; height: calc(100% - 2px); width: calc(100% - 2px); display:block;' id='target' src='";
						}

					  	if(layout.obj2Id.substring(0,7) == "HTTP://" || layout.obj2Id.substring(0,8) == "HTTPS://"){
							iframe = iframe + layout.obj2Id + "' />";
                  		}
					  	else {
							iframe = iframe + url + layout.obj2Id;
						  	if(layout.obj2CurrSel || layout.obj2NoInteraction || layout.obj2NoAnimations){
								iframe = iframe + '&opt=';
							  	if (layout.obj2CurrSel && (layout.obj2NoInteraction || layout.obj2NoAnimations)){
									iframe = iframe + 'currsel%2C';
							  	}
							  	if (layout.obj2CurrSel && layout.obj2NoInteraction == false && layout.obj2NoAnimations == false){
									iframe = iframe + 'currsel';
							  	}
							  	if (layout.obj2NoInteraction && layout.obj2NoAnimations) {
									iframe = iframe + 'noanimate%2Cnointeraction';
							  	}
							  	if (layout.obj2NoInteraction && layout.obj2NoAnimations == false) {
									iframe = iframe + 'nointeraction';
							  	}
							  	if (layout.obj2NoAnimations && layout.obj2NoInteraction == false) {
									iframe = iframe + 'noanimate';
							  	}
						  	}
						  	if (layout.obj2ClearAll) {
								iframe = iframe + '&select=clearall';
						  	}
						  	if (typeof(layout.obj2BookmarkId) != "undefined") {
								iframe = iframe + '&bookmark=' + layout.obj2BookmarkId;
							}
							iframe = iframe + "' />";
					  	}
                		iframe_defaultSet = true;
					 }
                }

              	// Object 3 button/tab
                if(Number(layout.obj3ShowCond) == 1) {
                  	var objBgColor = defBgColor;
                  	var objTxtColor = defTxtColor;
                  	var objTitle = layout.obj3Label;
				  	if(typeof(layout.obj3ToolTip) != "undefined"){
                      	objTitle = layout.obj3ToolTip;
                    }
                  	if(typeof(layout.obj3BgColor) != "undefined"){
                      	objBgColor = layout.obj3BgColor;
                    }
					if(typeof(layout.obj3TxtColor) != "undefined"){
                     	objTxtColor = layout.obj3TxtColor;
                    }

                  	if(layout.btnColorAsBorder == 'default'){
                  		html = html + "<button title='" + objTitle + "' style='color: " + objTxtColor + "; background-color: " + objBgColor + ";" + buttonStyle + "' onclick=\"document.getElementById('target').src = '";
					}
				  	else {
					  	html = html + "<button title='" + objTitle + "' style='color: " + objTxtColor + "; background-color: " + objBgColor + ";" + buttonStyle + "' onclick=\"document.getElementById('target').style.borderColor = '" + objBgColor + "';document.getElementById('target').src = '";
					}

					if(layout.obj3Id.substring(0,7) == "HTTP://" || layout.obj3Id.substring(0,8) == "HTTPS://"){
						html = html + layout.obj3Id;
					}
				  	else {
					  	html = html + url + layout.obj3Id;
					  	if(layout.obj3CurrSel || layout.obj3NoInteraction || layout.obj3NoAnimations){
							html = html + '&opt=';
							if (layout.obj3CurrSel && (layout.obj3NoInteraction || layout.obj3NoAnimations)){
							  html = html + 'currsel%2C';
							}
							if (layout.obj3CurrSel && layout.obj3NoInteraction == false && layout.obj3NoAnimations == false){
							  html = html + 'currsel';
							}
							if (layout.obj3NoInteraction && layout.obj3NoAnimations) {
							  html = html + 'noanimate%2Cnointeraction';
							}
							if (layout.obj3NoInteraction && layout.obj3NoAnimations == false) {
							  html = html + 'nointeraction';
							}
							if (layout.obj3BookmarkId != 'undefined' && layout.obj3NoAnimations && layout.obj3NoInteraction == false) {
							  html = html + 'noanimate';
							}
					  	}
					  	if (layout.obj3ClearAll) {
							html = html + '&select=clearall';
					  	}
					  	if (typeof(layout.obj3BookmarkId) != "undefined") {
							html = html + '&bookmark=' + layout.obj3BookmarkId;
					  	}
					}
				  	html = html + "';\"> " + layout.obj3Label + " </button>";

                  	if(iframe_defaultSet == false){
					  	if(layout.btnColorAsBorder == 'default'){
						  	iframe = "<iframe style='border:1px solid " + defBgColor + "; height: calc(100% - 2px); width: calc(100% - 2px); display:block;' id='target' src='";
						}
					  	else {
					  		iframe = "<iframe style='border:1px solid " + objBgColor + "; height: calc(100% - 2px); width: calc(100% - 2px); display:block;' id='target' src='";
						}

					  	if(layout.obj3Id.substring(0,7) == "HTTP://" || layout.obj3Id.substring(0,8) == "HTTPS://"){
							iframe = iframe + layout.obj3Id + "' />";
                  		}
					  	else {
							iframe = iframe + url + layout.obj3Id;
						  	if(layout.obj3CurrSel || layout.obj3NoInteraction || layout.obj3NoAnimations){
								iframe = iframe + '&opt=';
							  	if (layout.obj3CurrSel && (layout.obj3NoInteraction || layout.obj3NoAnimations)){
									iframe = iframe + 'currsel%2C';
							  	}
							  	if (layout.obj3CurrSel && layout.obj3NoInteraction == false && layout.obj3NoAnimations == false){
									iframe = iframe + 'currsel';
							  	}
							  	if (layout.obj3NoInteraction && layout.obj3NoAnimations) {
									iframe = iframe + 'noanimate%2Cnointeraction';
							  	}
							  	if (layout.obj3NoInteraction && layout.obj3NoAnimations == false) {
									iframe = iframe + 'nointeraction';
							  	}
							  	if (layout.obj3NoAnimations && layout.obj3NoInteraction == false) {
									iframe = iframe + 'noanimate';
							  	}
						  	}
						  	if (layout.obj3ClearAll) {
								iframe = iframe + '&select=clearall';
						  	}
						  	if (typeof(layout.obj3BookmarkId) != "undefined") {
							  	iframe = iframe + '&bookmark=' + layout.obj3BookmarkId;
							}
							iframe = iframe + "' />";
					  	}
               			iframe_defaultSet = true;
                	}
                }

              	// Object 4 button/tab
                if(Number(layout.obj4ShowCond) == 1) {
                  	var objBgColor = defBgColor;
                  	var objTxtColor = defTxtColor;
                  	var objTitle = layout.obj4Label;
				  	if(typeof(layout.obj4ToolTip) != "undefined"){
                      	objTitle = layout.obj4ToolTip;
                    }
                  	if(typeof(layout.obj4BgColor) != "undefined"){
                      	objBgColor = layout.obj4BgColor;
                    }
					if(typeof(layout.obj4TxtColor) != "undefined"){
                     	objTxtColor = layout.obj4TxtColor;
                    }

                  	if(layout.btnColorAsBorder == 'default'){
                  		html = html + "<button title='" + objTitle + "' style='color: " + objTxtColor + "; background-color: " + objBgColor + ";" + buttonStyle + "' onclick=\"document.getElementById('target').src = '";
					}
				  	else {
					  	html = html + "<button title='" + objTitle + "' style='color: " + objTxtColor + "; background-color: " + objBgColor + ";" + buttonStyle + "' onclick=\"document.getElementById('target').style.borderColor = '" + objBgColor + "';document.getElementById('target').src = '";
					}

					if(layout.obj4Id.substring(0,7) == "HTTP://" || layout.obj4Id.substring(0,8) == "HTTPS://"){
						html = html + layout.obj4Id;
					}
				  	else {
					  	html = html + url + layout.obj4Id;
					  	if(layout.obj4CurrSel || layout.obj4NoInteraction || layout.obj4NoAnimations){
							html = html + '&opt=';
							if (layout.obj4CurrSel && (layout.obj4NoInteraction || layout.obj4NoAnimations)){
							  html = html + 'currsel%2C';
							}
							if (layout.obj4CurrSel && layout.obj4NoInteraction == false && layout.obj4NoAnimations == false){
							  html = html + 'currsel';
							}
							if (layout.obj4NoInteraction && layout.obj4NoAnimations) {
							  html = html + 'noanimate%2Cnointeraction';
							}
							if (layout.obj4NoInteraction && layout.obj4NoAnimations == false) {
							  html = html + 'nointeraction';
							}
							if (layout.obj4NoAnimations && layout.obj4NoInteraction == false) {
							  html = html + 'noanimate';
							}
					  	}
					  	if (layout.obj4ClearAll) {
							html = html + '&select=clearall';
					  	}
					  	if (typeof(layout.obj4BookmarkId) != "undefined") {
							html = html + '&bookmark=' + layout.obj4BookmarkId;
					  	}
					}
				  	html = html + "';\"> " + layout.obj4Label + " </button>";

                  	if(iframe_defaultSet == false){
					  	if(layout.btnColorAsBorder == 'default'){
						  	iframe = "<iframe style='border:1px solid " + defBgColor + "; height: calc(100% - 2px); width: calc(100% - 2px); display:block;' id='target' src='";
						}
					  	else {
					  		iframe = "<iframe style='border:1px solid " + objBgColor + "; height: calc(100% - 2px); width: calc(100% - 2px); display:block;' id='target' src='";
						}

					  	if(layout.obj4Id.substring(0,7) == "HTTP://" || layout.obj4Id.substring(0,8) == "HTTPS://"){
							iframe = iframe + layout.obj4Id + "' />";
                  		}
					  	else {
							iframe = iframe + url + layout.obj4Id;
						  	if(layout.obj4CurrSel || layout.obj4NoInteraction || layout.obj4NoAnimations){
								iframe = iframe + '&opt=';
							  	if (layout.obj4CurrSel && (layout.obj4NoInteraction || layout.obj4NoAnimations)){
									iframe = iframe + 'currsel%2C';
							  	}
							  	if (layout.obj4CurrSel && layout.obj4NoInteraction == false && layout.obj4NoAnimations == false){
									iframe = iframe + 'currsel';
							  	}
							  	if (layout.obj4NoInteraction && layout.obj4NoAnimations) {
									iframe = iframe + 'noanimate%2Cnointeraction';
							  	}
							  	if (layout.obj4NoInteraction && layout.obj4NoAnimations == false) {
									iframe = iframe + 'nointeraction';
							  	}
							  	if (layout.obj4NoAnimations && layout.obj4NoInteraction == false) {
									iframe = iframe + 'noanimate';
							  	}
						  	}
						  	if (layout.obj4ClearAll) {
								iframe = iframe + '&select=clearall';
						  	}
						  	if (typeof(layout.obj4BookmarkId) != "undefined") {
							  	iframe = iframe + '&bookmark=' + layout.obj4BookmarkId;
							}
							iframe = iframe + "' />";
					  	}
              			iframe_defaultSet = true;
                	}
                }

              	// Object 5 button/tab
                if(Number(layout.obj5ShowCond) == 1) {
                  	var objBgColor = defBgColor;
                  	var objTxtColor = defTxtColor;
                  	var objTitle = layout.obj5Label;
				  	if(typeof(layout.obj5ToolTip) != "undefined"){
                      	objTitle = layout.obj5ToolTip;
                    }
                  	if(typeof(layout.obj5BgColor) != "undefined"){
                      	objBgColor = layout.obj5BgColor;
                    }
					if(typeof(layout.obj5TxtColor) != "undefined"){
                     	objTxtColor = layout.obj5TxtColor;
                    }

                  	if(layout.btnColorAsBorder == 'default'){
                  		html = html + "<button title='" + objTitle + "' style='color: " + objTxtColor + "; background-color: " + objBgColor + ";" + buttonStyle + "' onclick=\"document.getElementById('target').src = '";
					}
				  	else {
					  	html = html + "<button title='" + objTitle + "' style='color: " + objTxtColor + "; background-color: " + objBgColor + ";" + buttonStyle + "' onclick=\"document.getElementById('target').style.borderColor = '" + objBgColor + "';document.getElementById('target').src = '";
					}

					if(layout.obj5Id.substring(0,7) == "HTTP://" || layout.obj5Id.substring(0,8) == "HTTPS://"){
						html = html + layout.obj5Id;
					}
				  	else {
					  	html = html + url + layout.obj5Id;
					  	if(layout.obj5CurrSel || layout.obj5NoInteraction || layout.obj5NoAnimations){
							html = html + '&opt=';
							if (layout.obj5CurrSel && (layout.obj5NoInteraction || layout.obj5NoAnimations)){
							  html = html + 'currsel%2C';
							}
							if (layout.obj5CurrSel && layout.obj5NoInteraction == false && layout.obj5NoAnimations == false){
							  html = html + 'currsel';
							}
							if (layout.obj5NoInteraction && layout.obj5NoAnimations) {
							  html = html + 'noanimate%2Cnointeraction';
							}
							if (layout.obj5NoInteraction && layout.obj5NoAnimations == false) {
							  html = html + 'nointeraction';
							}
							if (layout.obj5NoAnimations && layout.obj5NoInteraction == false) {
							  html = html + 'noanimate';
							}
					  	}
					  	if (layout.obj5ClearAll) {
							html = html + '&select=clearall';
					  	}
					  	if (typeof(layout.obj5BookmarkId) != "undefined") {
							html = html + '&bookmark=' + layout.obj5BookmarkId;
					  	}
					}
				  	html = html + "';\"> " + layout.obj5Label + " </button>";

                  	if(iframe_defaultSet == false){
					  	if(layout.btnColorAsBorder == 'default'){
						  	iframe = "<iframe style='border:1px solid " + defBgColor + "; height: calc(100% - 2px); width: calc(100% - 2px); display:block;' id='target' src='";
						}
					  	else {
					  		iframe = "<iframe style='border:1px solid " + objBgColor + "; height: calc(100% - 2px); width: calc(100% - 2px); display:block;' id='target' src='";
						}

					  	if(layout.obj5Id.substring(0,7) == "HTTP://" || layout.obj5Id.substring(0,8) == "HTTPS://"){
							iframe = iframe + layout.obj5Id + "' />";
                  		}
					  	else {
							iframe = iframe + url + layout.obj5Id;
						  	if(layout.obj5CurrSel || layout.obj5NoInteraction || layout.obj5NoAnimations){
								iframe = iframe + '&opt=';
							  	if (layout.obj5CurrSel && (layout.obj5NoInteraction || layout.obj5NoAnimations)){
									iframe = iframe + 'currsel%2C';
							  	}
							  	if (layout.obj5CurrSel && layout.obj5NoInteraction == false && layout.obj5NoAnimations == false){
									iframe = iframe + 'currsel';
							  	}
							  	if (layout.obj5NoInteraction && layout.obj5NoAnimations) {
									iframe = iframe + 'noanimate%2Cnointeraction';
							  	}
							  	if (layout.obj5NoInteraction && layout.obj5NoAnimations == false) {
									iframe = iframe + 'nointeraction';
							  	}
							  	if (layout.obj5NoAnimations && layout.obj5NoInteraction == false) {
									iframe = iframe + 'noanimate';
							  	}
						  	}
						  	if (layout.obj5ClearAll) {
								iframe = iframe + '&select=clearall';
						  	}
						  	if (typeof(layout.obj5BookmarkId) != "undefined") {
							  	iframe = iframe + '&bookmark=' + layout.obj5BookmarkId;
							}
							iframe = iframe + "' />";
					  	}
               			iframe_defaultSet = true;
                	}
                }
            }

		  	if(showObjs < 2) {
			  html = "";
			}

          	if(layout.btnLoc == "top") {
      			html = "<tr style='height: 1px;'><td style='padding: 0px; margin: 0px; vertical-align: bottom;'>" + html + "</td></tr><tr><td style='padding: 0px; margin: 0px;vertical-align: top;'>" + iframe + "</td></tr>";
    		}
          	if(layout.btnLoc == "bottom") {
              	html = "<tr><td style='padding: 0px; margin: 0px; vertical-align: bottom;'>" + iframe + "</td></tr><tr style='height: 1px;'><td style='padding: 0px; margin: 0px; vertical-align: top;'>" + html + "</td></tr>";
        	}
		  	if(layout.btnLoc == "left") {
			  html = "<tr><td style='width: 1px; padding: 0px; margin: 0px; vertical-align: top;'>" + html + "</td><td style='padding: 0px; margin: 0px; vertical-align: bottom;'>" + iframe + "</td></tr>";
			}
		  	if(layout.btnLoc == "right") {
			  html = "<tr><td style='padding: 0px; margin: 0px; vertical-align: bottom;'>" + iframe + "</td><td style='width: 1px; padding: 0px; margin: 0px; vertical-align: top;'>" + html + "</td></tr>";
			}
		  	html = "<table cellspacing='0' cellpadding='0' style='height: 100%; width: 100%; border-width: 0px; border-style: solid; border-spacing: 0px; border-collapse: collapse; padding: 0px; margin: 0px;'>" + html + "</table>";

            //add your rendering code here
			$element.html( html );
		}
	};
} );
